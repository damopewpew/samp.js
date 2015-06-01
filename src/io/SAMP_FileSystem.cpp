#include "io/SAMP_FileSystem.h"

#include <boost/filesystem.hpp>
#include <boost/iostreams/stream.hpp>
#include <iostream>
#include <sstream>
#include <ostream>
#include <fstream>

#include <locale>
namespace fs = boost::filesystem;
namespace io = boost::iostreams;

const char *UTF_16_BE_BOM = "\xFE\xFF";
const char *UTF_16_LE_BOM = "\xFF\xFE";
const char *UTF_8_BOM = "\xEF\xBB\xBF";
const char *UTF_32_BE_BOM = "\x00\x00\xFE\xFF";
const char *UTF_32_LE_BOM = "\xFF\xFE\x00\x00";

char* check_bom(const char *data, size_t size)
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

SAMP_FileSystem::SAMP_FileSystem(SAMP_JS* sampjs) :_sampjs(sampjs){
	JS_SCOPE(sampjs->GetIsolate());
	JS_CONTEXT(sampjs->GetIsolate(), sampjs->_context);
	Local<ObjectTemplate> fs_templ = ObjectTemplate::New(sampjs->GetIsolate());
	fs_templ->SetInternalFieldCount(1);

	Local<Object> fs = fs_templ->NewInstance();
	fs->SetInternalField(0, External::New(sampjs->GetIsolate(), this));

	AddFunction(fs, "rename", SAMP_FileSystem::rename);
	AddFunction(fs, "unlink", SAMP_FileSystem::unlink);
	AddFunction(fs, "remove", SAMP_FileSystem::unlink);
	AddFunction(fs, "rmdir", SAMP_FileSystem::rmdir);
	AddFunction(fs, "mkdir", SAMP_FileSystem::mkdir);
	AddFunction(fs, "readdir", SAMP_FileSystem::readdir);
	AddFunction(fs, "readFile", SAMP_FileSystem::readFile);
	AddFunction(fs, "writeFile", SAMP_FileSystem::writeFile);
	AddFunction(fs, "appendFile", SAMP_FileSystem::appendFile);
	AddFunction(fs, "exists", SAMP_FileSystem::exists);
	
	sampjs->SetGlobalObject("$fs", fs);

}

void SAMP_FileSystem::AddFunction(Local<Object> obj, std::string name, FunctionCallback callback){
	Local<FunctionTemplate> fntmp = FunctionTemplate::New(_sampjs->GetIsolate(), callback);
	obj->Set(String::NewFromUtf8(_sampjs->GetIsolate(), name.c_str()), fntmp->GetFunction());

}

void SAMP_FileSystem::rename(const FunctionCallbackInfo<Value>& args){
	JS_SCOPE(args.GetIsolate());
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

void SAMP_FileSystem::unlink(const FunctionCallbackInfo<Value>& args){
	JS_SCOPE(args.GetIsolate())
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

void SAMP_FileSystem::rmdir(const FunctionCallbackInfo<Value>& args){
	JS_SCOPE(args.GetIsolate())
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

void SAMP_FileSystem::mkdir(const FunctionCallbackInfo<Value>& args){
	JS_SCOPE(args.GetIsolate())
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

void SAMP_FileSystem::readdir(const FunctionCallbackInfo<Value>& args){

	JS_SCOPE(args.GetIsolate())
	JS_CTX(args.GetIsolate()->GetCallingContext());
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


void SAMP_FileSystem::readFile(const FunctionCallbackInfo<Value>& args){
	JS_SCOPE(args.GetIsolate())
		if (args.Length() < 1){
			std::cout << "[samp.js] Error: $fs::readFile() takes 1 argument - $fs.readFile(path)" << std::endl;
			args.GetReturnValue().Set(false);
			return;
		}

	const char *path;
	const String::Utf8Value jsString(args[0]);
	path = ToCString(jsString);

	if (!fs::exists(path)){
		std::cout << "[samp.js] Error: $fs::readFile() file does not exist (" << path << ")" << std::endl;
		args.GetReturnValue().Set(false);
		return;
	}

	fs::path file(path);

	std::ifstream infile(file.native());

	std::string data((std::istreambuf_iterator<char>(infile)), std::istreambuf_iterator<char>());
	infile.close();

	if (!isUTF8(data.c_str(), data.length())){
		std::cout << "[samp.js] Error: $fs::readFile() - only UTF-8 encoding is supported (" << path << ")" << std::endl;
		args.GetReturnValue().Set(false);
		return;
	} 

	
	args.GetReturnValue().Set(String::NewFromUtf8(args.GetIsolate(), data.c_str())); 

} 

void SAMP_FileSystem::writeFile(const FunctionCallbackInfo<Value>& args){
	JS_SCOPE(args.GetIsolate())
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


void SAMP_FileSystem::appendFile(const FunctionCallbackInfo<Value>& args){
	JS_SCOPE(args.GetIsolate())
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

void SAMP_FileSystem::exists(const FunctionCallbackInfo<Value>& args){
	JS_SCOPE(args.GetIsolate())
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

