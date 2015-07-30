#include "io/FileSystem.h"
#include "utils/Helpers.h"
#include "utils/Utils.h"

#include "SAMPJS.h"

#include <boost/filesystem.hpp>
#include <boost/iostreams/stream.hpp>
#include <boost/filesystem/fstream.hpp>
#include <iostream>
#include <sstream>
#include <ostream>
#include <fstream>
#include <cstdint>
#include <locale>

#include <future> 
namespace fs = boost::filesystem;
namespace io = boost::iostreams;

const char *UTF_16_BE_BOM = "\xFE\xFF";
const char *UTF_16_LE_BOM = "\xFF\xFE";
const char *UTF_8_BOM = "\xEF\xBB\xBF";
const char *UTF_32_BE_BOM = "\x00\x00\xFE\xFF";
const char *UTF_32_LE_BOM = "\xFF\xFE\x00\x00";

using namespace sampjs;


const char* check_bom(const char *data, size_t size)
{
	if (size >= 3) {
		if (memcmp(data, UTF_8_BOM, 3) == 0)
			return "UTF-8";
	}
	if (size >= 4) {
		if (memcmp(data, UTF_32_LE_BOM, 4) == 0)
			return "UTF-32-LE";
		if (memcmp(data, UTF_32_BE_BOM, 4) == 0)
			return "UTF-32-BE";
	}
	if (size >= 2) {
		if (memcmp(data, UTF_16_LE_BOM, 2) == 0)
			return "UTF-16-LE";
		if (memcmp(data, UTF_16_BE_BOM, 2) == 0)
			return "UTF-16-BE";
	}
	return NULL;
}

int isUTF8(const char *data, size_t size)
{
	const unsigned char *str = (unsigned char*)data;
	const unsigned char *end = str + size;
	unsigned char byte;
	unsigned int code_length, i;
	uint32_t ch;
	while (str != end) {
		byte = *str;
		if (byte <= 0x7F) {
			/* 1 byte sequence: U+0000..U+007F */
			str += 1;
			continue;
		}

		if (0xC2 <= byte && byte <= 0xDF)
			/* 0b110xxxxx: 2 bytes sequence */
			code_length = 2;
		else if (0xE0 <= byte && byte <= 0xEF)
			/* 0b1110xxxx: 3 bytes sequence */
			code_length = 3;
		else if (0xF0 <= byte && byte <= 0xF4)
			/* 0b11110xxx: 4 bytes sequence */
			code_length = 4;
		else {
			/* invalid first byte of a multibyte character */
			return 0;
		}

		if (str + (code_length - 1) >= end) {
			/* truncated string or invalid byte sequence */
			return 0;
		}

		/* Check continuation bytes: bit 7 should be set, bit 6 should be
		* unset (b10xxxxxx). */
		for (i = 1; i < code_length; i++) {
			if ((str[i] & 0xC0) != 0x80)
				return 0;
		}

		if (code_length == 2) {
			/* 2 bytes sequence: U+0080..U+07FF */
			ch = ((str[0] & 0x1f) << 6) + (str[1] & 0x3f);
			/* str[0] >= 0xC2, so ch >= 0x0080.
			str[0] <= 0xDF, (str[1] & 0x3f) <= 0x3f, so ch <= 0x07ff */
		}
		else if (code_length == 3) {
			/* 3 bytes sequence: U+0800..U+FFFF */
			ch = ((str[0] & 0x0f) << 12) + ((str[1] & 0x3f) << 6) +
				(str[2] & 0x3f);
			/* (0xff & 0x0f) << 12 | (0xff & 0x3f) << 6 | (0xff & 0x3f) = 0xffff,
			so ch <= 0xffff */
			if (ch < 0x0800)
				return 0;

			/* surrogates (U+D800-U+DFFF) are invalid in UTF-8:
			test if (0xD800 <= ch && ch <= 0xDFFF) */
			if ((ch >> 11) == 0x1b)
				return 0;
		}
		else if (code_length == 4) {
			/* 4 bytes sequence: U+10000..U+10FFFF */
			ch = ((str[0] & 0x07) << 18) + ((str[1] & 0x3f) << 12) +
				((str[2] & 0x3f) << 6) + (str[3] & 0x3f);
			if ((ch < 0x10000) || (0x10FFFF < ch))
				return 0;
		}
		str += code_length;
	}
	return 1;
}

std::vector<fs::ifstream*> FileSystem::file_handles;

void FileSystem::Init(Local<Context> ctx){
	_cbLocalCount = 0;
	_bufferCount = 0;

	isolate = ctx->GetIsolate();
	context.Reset(isolate, ctx);

	Locker v8locker(isolate);
	Isolate::Scope isoscope(isolate);
	HandleScope hs(isolate);
	Context::Scope cs(ctx);

	auto fs_templ = ObjectTemplate::New(isolate);
	fs_templ->SetInternalFieldCount(1);

	auto fs = fs_templ->NewInstance();
	fs->SetInternalField(0, External::New(isolate, this));

	AddFunction(fs, "open", FileSystem::open);
	AddFunction(fs, "close", FileSystem::close);
	AddFunction(fs, "read", FileSystem::read);
	AddFunction(fs, "rename", FileSystem::rename);
	AddFunction(fs, "unlink", FileSystem::unlink);
	AddFunction(fs, "remove", FileSystem::unlink);
	AddFunction(fs, "rmdir", FileSystem::rmdir);
	AddFunction(fs, "mkdir", FileSystem::mkdir);
	AddFunction(fs, "readdir", FileSystem::readdir);
	AddFunction(fs, "readFile", FileSystem::readFile);
	AddFunction(fs, "writeFile", FileSystem::writeFile);
	AddFunction(fs, "appendFile", FileSystem::appendFile);
	AddFunction(fs, "exists", FileSystem::exists);


	ifstream bufferFile("js/samp.js/Buffer.js", std::ios::in);
	if (!bufferFile){
		sjs::logger::error("Missing required file Buffer.js");
		SAMPJS::Shutdown();
	}
	std::string bufferSource((std::istreambuf_iterator<char>(bufferFile)), std::istreambuf_iterator<char>());
	SAMPJS::ExecuteCode(ctx, "Buffer.js", bufferSource);
	
	ifstream fsFile("js/samp.js/FileSystem.js", std::ios::in);
	if (!fsFile){
		sjs::logger::error("Missing required file FileSystem.js");
		SAMPJS::Shutdown();
	}
	std::string fsSource((std::istreambuf_iterator<char>(fsFile)), std::istreambuf_iterator<char>());
	SAMPJS::ExecuteCode(ctx, "FileSystem.js", fsSource);

	SAMPJS::ExecuteCode(ctx, "$fs", "var $fs = new FileSystem();");

	JS_Object global(ctx->Global());
	JS_Object fsobj(global.getObject("$fs"));
	fsobj.Set("internal", fs);
}

void FileSystem::Shutdown(){
	// Do Cleanup
	

	if (!_cbLocal.empty()){
		for (auto callback : _cbLocal){
			callback.second->callback.Reset();
			callback.second->context.Reset();
			delete callback.second;
		}
	}

	if (!buffers.empty()){
		for (auto buf : buffers){
			buf.second->buffer.resize(0);
			buf.second->ab.Reset();
			delete buf.second;
		}
	}
}

void FileSystem::FreeCallback(const WeakCallbackInfo<JS_AB>& data){
	sjs::logger::debug("Freeing");
	JS_Object global(data.GetIsolate()->GetCallingContext()->Global());
	
	JS_Object fsobj(global.getObject("$fs"));

	Local<Object> obj = fsobj.getObject("internal");



	auto wrap2 = Local<External>::Cast(obj->GetInternalField(0));
	void *ptr2 = wrap2->Value();
	FileSystem* fs = static_cast<FileSystem*>(ptr2);

	unsigned int id = data.GetParameter()->id;
	fs->buffers[id]->ab.Reset();

	fs->buffers[id]->buffer.resize(0);

	
	delete fs->buffers[id];
	fs->buffers.erase(id);

	//cb->buffer.resize(0);
//	cb->ab.Reset();
}

void FileSystem::AddFunction(Local<Object> obj, std::string name, FunctionCallback callback){
	Local<FunctionTemplate> fntmp = FunctionTemplate::New(isolate, callback);
	obj->Set(String::NewFromUtf8(isolate, name.c_str()), fntmp->GetFunction());

}

void FileSystem::open(const FunctionCallbackInfo<Value>& args){
	if (args.Length() < 1){
		return;
	}


	std::string path = JS2STRING(args[0]);
	fs::path file(path);
	fs::ifstream* infile = new fs::ifstream(file, std::ios::in | std::ios::binary | std::ios::ate);

//	file_handles.push_back(infile);

	Local<ObjectTemplate> obt = ObjectTemplate::New();
	obt->SetInternalFieldCount(1);
	
	Local<Object> obj = obt->NewInstance();
	obj->SetInternalField(0, External::New(args.GetIsolate(), infile));

	
	args.GetReturnValue().Set(obj);
}

void FileSystem::close(const FunctionCallbackInfo<Value>& args){
	Local<Object> obj = Local<Object>::Cast(args[0]);
	auto wrap = Local<External>::Cast(obj->GetInternalField(0));
	void *ptr = wrap->Value();
	fs::ifstream* infile = static_cast<fs::ifstream*>(ptr);

	infile->close();
}


#include <chrono>
#include <inttypes.h>
void FileSystem::read(const FunctionCallbackInfo<Value>& args){
	auto wrap2 = Local<External>::Cast(args.Holder()->GetInternalField(0));
	void *ptr2 = wrap2->Value();
	FileSystem* fs = static_cast<FileSystem*>(ptr2);

	Local<Object> obj = Local<Object>::Cast(args[0]);
	auto wrap = Local<External>::Cast(obj->GetInternalField(0));
	void *ptr = wrap->Value();
	fs::ifstream* infile = static_cast<fs::ifstream*>(ptr);

	int offset = args[1]->Int32Value();
	const int amount = args[2]->Int32Value();
	infile->seekg(offset,std::ios::beg);
	
	std::vector<char> buf(amount);
	infile->read(buf.data(), buf.size());

	JS_AB *jab = new JS_AB();
	jab->buffer = buf;

	Local<ArrayBuffer> ab = ArrayBuffer::New(args.GetIsolate(), jab->buffer.data(), buf.size());
	jab->ab.Reset(args.GetIsolate(), ab);
	unsigned int id = fs->_bufferCount++;
	jab->id = id;
	fs->buffers[id] = jab;
	jab->ab.SetWeak(jab, FileSystem::FreeCallback, WeakCallbackType::kParameter);
	
	args.GetIsolate()->AdjustAmountOfExternalAllocatedMemory(buf.size());
	
	args.GetReturnValue().Set(ab);
}

void FileSystem::rename(const FunctionCallbackInfo<Value>& args){
	if (args.Length() < 2){
		printf("[samp.js] Error: $fs::rename() takes 2 arguments - $fs.rename(path_old, path_new);");
		args.GetReturnValue().Set(false);
		return;
	}
	const char *path_old, *path_new;
	const String::Utf8Value jsString(args[0]);
	path_old = ToCString(jsString);
	const String::Utf8Value jsString2(args[1]);
	path_new = ToCString(jsString2);

	if (!fs::exists(path_old)){
		auto  cwd = fs::current_path();
		std::cout << "[samp.js] Error: $fs::rename() file does not exist ("  << path_old << ")" << std::endl;
		args.GetReturnValue().Set(false);
		return;
	}
	fs::rename(path_old, path_new);
	args.GetReturnValue().Set(1);
}

void FileSystem::unlink(const FunctionCallbackInfo<Value>& args){
	if (args.Length() < 1){
		std::cout << "[samp.js] Error: $fs::unlink() takes 1 argument - $fs.unlink(path)" << std::endl;
		args.GetReturnValue().Set(false);
		return;
	}

	const char *path;
	const String::Utf8Value jsString(args[0]);
	path = ToCString(jsString);
	
	if (!fs::exists(path)){
		std::cout << "[samp.js] Error: $fs::unlink() file does not exist (" << path << ")" << std::endl;
		args.GetReturnValue().Set(false);
		return;
	}

	fs::remove(path);

	args.GetReturnValue().Set(1);
}

void FileSystem::rmdir(const FunctionCallbackInfo<Value>& args){
	if (args.Length() < 1){
		std::cout << "[samp.js] Error: $fs::rmdir() takes 1 argument - $fs.rmdir(path)" << std::endl;
		args.GetReturnValue().Set(false);
		return;
	}

	const char *path;
	const String::Utf8Value jsString(args[0]);
	path = ToCString(jsString);

	if (!fs::exists(path)){
		std::cout << "[samp.js] Error: $fs::rmdir() directory does not exist (" << path << ")" << std::endl;
		args.GetReturnValue().Set(false);
		return;
	}

	fs::remove_all(path);

	args.GetReturnValue().Set(1);
}

void FileSystem::mkdir(const FunctionCallbackInfo<Value>& args){
	if (args.Length() < 1){
		std::cout << "[samp.js] Error: $fs::mkdir() takes 1 argument - $fs.mkdir(path)" << std::endl;
		args.GetReturnValue().Set(false);
		return;
	}

	const char *path;
	const String::Utf8Value jsString(args[0]);
	path = ToCString(jsString);

	if (fs::exists(path)){
		std::cout << "[samp.js] Error: $fs::mkdir() directory already exists (" << path << ")" << std::endl;
		args.GetReturnValue().Set(false);
		return;
	}

	fs::create_directory(path);

	args.GetReturnValue().Set(1);
}

void FileSystem::readdir(const FunctionCallbackInfo<Value>& args){
	if (args.Length() < 1){
		std::cout << "[samp.js] Error: $fs::readdir() takes 1 argument - $fs.readdir(path)" << std::endl;
		return;
	}

	const char *path;
	const String::Utf8Value jsString(args[0]);
	path = ToCString(jsString);

	if (!fs::exists(path)){
		std::cout << "[samp.js] Error: $fs::readdir() directory does not exist (" << path << ")" << std::endl;
		args.GetReturnValue().Set(false);
		return;
	}
	
	if (!fs::is_directory(path)){
		std::cout << "[samp.js] Error: $fs::readdir() path is not a directory (" << path << ")" << std::endl;
		args.GetReturnValue().Set(false);
		return;
	}

	Local<Array> files = Array::New(args.GetIsolate(), 0);

	fs::path p(path);

	fs::directory_iterator end_itr;

	int i = 0;
	for (fs::directory_iterator itr(p); itr != end_itr; ++itr){
		//printf("Adding File: %s\n", itr->path().filename().string().c_str());
		if (!fs::is_directory(itr->path())){
			files->Set(i++, String::NewFromUtf8(args.GetIsolate(), itr->path().filename().string().c_str()));
		}
		else {
			files->Set(i++, String::NewFromUtf8(args.GetIsolate(), (itr->path().filename().string()+"/").c_str()));
		}
	}

	args.GetReturnValue().Set(files);
}

Local<ArrayBuffer> FileSystem::readFile(std::string filename){
	fs::path file(filename);
	fs::ifstream infile(file, std::ios::in | std::ios::binary | std::ios::ate);


	infile.seekg(0, std::ios::end);
	std::streampos length = infile.tellg();

	std::vector<char> buffer((unsigned int)length);

	infile.seekg(0, std::ios::beg);

	infile.read(&buffer[0], length);

	infile.close();


	Locker locker(isolate);
	Isolate::Scope isoscope(isolate);
	EscapableHandleScope handle_scope(isolate);

	Local<Context> ctx = Local<Context>::New(isolate, context);
	Context::Scope cs(ctx);

	JS_AB *jab = new JS_AB();
	jab->buffer = buffer;

	Local<ArrayBuffer> ab = ArrayBuffer::New(isolate, jab->buffer.data(), buffer.size());
	jab->ab.Reset(isolate, ab);
	unsigned int id = _bufferCount++;
	jab->id = id;
	buffers[id] = jab;
	jab->ab.SetWeak(jab, FileSystem::FreeCallback, WeakCallbackType::kParameter);

	isolate->AdjustAmountOfExternalAllocatedMemory(buffer.size());

	return handle_scope.Escape(ab);

}


void FileSystem::readFile(const FunctionCallbackInfo<Value>& args){
	if (args.Length() < 1){
		std::cout << "[samp.js] Error: $fs::readFile() takes 1 argument - $fs.readFile(path)" << std::endl;
		args.GetReturnValue().Set(false);
		return;
	}

	auto wrap = Local<External>::Cast(args.Holder()->GetInternalField(0));
	void *ptr = wrap->Value();
	FileSystem* fs = static_cast<FileSystem*>(ptr);

	const char *path;
	const String::Utf8Value jsString(args[0]);
	path = ToCString(jsString);

	if (!fs::exists(path)){
		std::cout << "[samp.js] Error: $fs::readFile() file does not exist (" << path << ")" << std::endl;
		args.GetReturnValue().Set(false);
		return;
	}

	if (args[args.Length()-1]->IsFunction()){

		Local<Function> func = Local<Function>::Cast(args[args.Length()-1]);
	
		// Async Callback mode

		
		JS_Callback *callback= new JS_Callback(func);

		int lid = fs->_cbLocalCount;
		fs->_cbLocal[fs->_cbLocalCount++] = callback;
		
	//	FileSystem::_callbacks[_callback_count++] = callback;
		std::string path2(path);

		thread( [fs, path2,lid](){
			
			JS_Callback *callback = fs->_cbLocal[lid];

			Locker locker(callback->isolate);
			Isolate::Scope isoscope(callback->isolate);
			HandleScope handle_scope(callback->isolate);

			Local<Context> ctx = Local<Context>::New(callback->isolate, callback->context);
			Context::Scope cs(ctx);


			Local<Value> argv[1] = { String::NewFromUtf8(callback->isolate, "") };

			Local<ArrayBuffer> ab = fs->readFile(path2);
			argv[0] = ab;
	/*		fs::path file(path2);
			fs::ifstream infile(file, std::ios::in | std::ios::binary | std::ios::ate );


			infile.seekg(0, std::ios::end);
			std::streampos length = infile.tellg();

			std::vector<char> buffer((unsigned int)length);

			infile.seekg(0, std::ios::beg);

			infile.read(&buffer[0], length);

			infile.close();


			Locker locker(callback->isolate);
			Isolate::Scope isoscope(callback->isolate);
			HandleScope handle_scope(callback->isolate);

			Local<Context> ctx = Local<Context>::New(callback->isolate, callback->context);
			Context::Scope cs(ctx);

			

			if (callback->encoding == "utf8"){
				std::string data(buffer.data(),buffer.size());

				if (memcmp(data.c_str(), UTF_8_BOM, 3) == 0){
					data = data.substr(3);
					argv[0] = String::NewFromUtf8(callback->isolate, data.c_str());
				}
#ifdef WIN32
				else if (memcmp(data.c_str(), UTF_16_LE_BOM, 2) == 0){

					std::vector<std::uint16_t> result((data.size() + sizeof(std::uint16_t) - 1) / sizeof std::uint16_t);
					std::copy_n(data.data(), data.size(), reinterpret_cast<char*>(&result[0]));
					argv[0] = String::NewFromTwoByte(callback->isolate, std::vector<std::uint16_t>(result.begin() + 1, result.end() - 1).data());
				}
				else if (memcmp(data.c_str(), UTF_16_BE_BOM, 2) == 0){

					sjs::logger::error("Error reading file %s: UCS-2 Big Endian not supported.", path2.c_str());
					return;
				}

				else {
					argv[0] = String::NewFromUtf8(callback->isolate, data.c_str());
				}
#endif
			}
			else if (callback->encoding == "raw"){
				JS_AB *jab = new JS_AB();
				jab->buffer = buffer;
		
				Local<ArrayBuffer> ab = ArrayBuffer::New(callback->isolate, jab->buffer.data(), buffer.size());
				jab->ab.Reset(callback->isolate, ab);
				unsigned int id = fs->_bufferCount++;
				jab->id = id;
				fs->buffers[id] = jab;
				jab->ab.SetWeak(jab, FileSystem::FreeCallback, WeakCallbackType::kParameter);
				argv[0] =ab;

				callback->isolate->AdjustAmountOfExternalAllocatedMemory(buffer.size());
			}
			*/

		
			Local<Function> func = Local<Function>::New(callback->isolate, callback->callback);
			TryCatch try_catch;
			
			if (!func.IsEmpty()){
				func->Call(func->CreationContext()->Global(), 1, argv);
				if (try_catch.HasCaught()){
					Utils::PrintException(&try_catch);
				}
			}
		}).detach();

	}	
	else {
		Local<ArrayBuffer> ab = fs->readFile(path);
	/*	std::ifstream infile(file.native());

		std::string data((std::istreambuf_iterator<char>(infile)), std::istreambuf_iterator<char>());
		infile.close(); */
		/*
		if (!isUTF8(data.c_str(), data.length())){
			sjs::logger::error("Error: $fs::readFile() - only UTF-8 encoding is supported (%s)", path);
			args.GetReturnValue().Set(false);
			return;
		} */

		
		args.GetReturnValue().Set(ab);
	}

} 

void FileSystem::writeFile(const FunctionCallbackInfo<Value>& args){

	if (args.Length() < 2){
		std::cout << "[samp.js] Error: $fs::writeFile() takes 2 arguments - $fs.writeFile(path, data)" << std::endl;
		args.GetReturnValue().Set(false);
		return;
	}

	const char *path;
	const String::Utf8Value jsString(args[0]);
	path = ToCString(jsString);

	const char *data;
	const String::Utf8Value jsdata(args[1]);
	data = ToCString(jsdata);

	if (fs::exists(path)){
		fs::remove(path);
	}

	std::ofstream ofs;
	ofs.open(path, std::ofstream::out | std::ofstream::app);

	ofs << data;

	ofs.close();

	args.GetReturnValue().Set(true);
}


void FileSystem::appendFile(const FunctionCallbackInfo<Value>& args){
	if (args.Length() < 2){
		std::cout << "[samp.js] Error: $fs::appendFile() takes 2 arguments - $fs.appendFile(path, data)" << std::endl;
		args.GetReturnValue().Set(false);
		return;
	}

	const char *path;
	const String::Utf8Value jsString(args[0]);
	path = ToCString(jsString);

	const char *data;
	const String::Utf8Value jsdata(args[1]);
	data = ToCString(jsdata);

	std::ofstream ofs;
	ofs.open(path, std::ofstream::out | std::ofstream::app);

	ofs << data;

	ofs.close();

	args.GetReturnValue().Set(true);
}

void FileSystem::exists(const FunctionCallbackInfo<Value>& args){
	if (args.Length() < 1){
		std::cout << "[samp.js] Error: $fs::exists() takes 1 argument - $fs.exists(path)" << std::endl;
		args.GetReturnValue().Set(false);
		return;
	}

	const char *path;
	const String::Utf8Value jsString(args[0]);
	path = ToCString(jsString);

	args.GetReturnValue().Set(fs::exists(path));
}

