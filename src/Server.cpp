#include "Server.h"
#include "samp/Events.h"
#include "utils/Helpers.h"

#include <include/libplatform/libplatform.h>
#include <include/v8-debug.h>

#include <fstream>
#include <sstream>
#include <iostream>
#include <algorithm>

#include <tinydir/tinydir.h>

#include "utils/Utils.h"
#include "io/FileSystem.h"
#include "samp/Players.h"
#include "io/Sockets.h"

#include <stdio.h>

using namespace sampjs;

std::map<std::string, Server *> Server::_scripts;
std::map<std::string, int> Server::_native_func_cache;
bool Server::initiated = false; 

void Server::InitJS(){

}

void Server::UnloadJS(){

}


Server *Server::GetInstance(Local<Context> context){
	Local<Object> self = Local<Object>::Cast(context->Global()->Get(STRING2JS(context->GetIsolate(), "$sampjs")));
	Local<External> wrap = Local<External>::Cast(self->GetInternalField(0));
	void * ptr = wrap->Value();

	Server* sampjs = static_cast<Server*>(ptr);
	return sampjs;
}

void Server::New(std::string filename, AMX *amx){

	if (Server::_scripts.find(filename) != Server::_scripts.end()){
		sjs::logger::error("load: Script already loaded (%s)", filename.c_str());
		return;
	}
	Server *jsfile = new Server;
	jsfile->SetAMX(amx);
	jsfile->SetScriptName(filename);

	jsfile->AddModule("utils", new Utils(jsfile));
	jsfile->AddModule("$fs", new sampjs::FileSystem(jsfile));
	jsfile->AddModule("players", new sampjs::Players(jsfile));
	jsfile->AddModule("$sockets", new sampjs::Sockets(jsfile));
	
	JS_SCOPE(jsfile->GetIsolate())
	
		JS_CONTEXT(jsfile->GetIsolate(), jsfile->_context)
	
		Local<Value> ret = jsfile->LoadScript("js/" + filename);

	if (ret.IsEmpty()){
		sjs::logger::error("Could not create new script (%s)", filename.c_str());
		return;
	}
	

	String::Utf8Value jsStr(ret);
	char* str = *jsStr;
	Server::_scripts[filename] = jsfile;

	Server::_scripts[filename]->EventManager()->FireEvent("ScriptInit");

}

void Server::SetScriptName(std::string script_name){
	this->script_name = script_name;
}

void Server::Unload(std::string filename){
	if (Server::_scripts.find(filename) == Server::_scripts.end()){
		// Script not found
		sjs::logger::error("unload: Script not loaded (%s)", filename.c_str());
		return;
	}
	_scripts[filename]->Shutdown();
	//_scripts[filename]->EventManager()->FireEvent("ScriptExit");

	Server::_scripts.erase(filename);
}
void Server::Reload(std::string filename, AMX *amx){
	if (Server::_scripts.find(filename) == Server::_scripts.end()){
		// Script not found
		sjs::logger::error("reload: Script not loaded (%s)", filename.c_str());
	}
	else {
		//_scripts[filename]->EventManager()->FireEvent("ScriptExit");
		_scripts[filename]->Shutdown();
		Server::_scripts.erase(filename);
	}
	Server::New(filename, amx );
}

void Server::JS_LoadScript(const FunctionCallbackInfo<Value> & args){
	if (args.Length() < 1) return;
	if (!args[0]->IsString()) return;

	JS_SCOPE(args.GetIsolate());
	Server* sampjs = Server::GetInstance(args.GetIsolate()->GetCallingContext());

	std::string file = JS2STRING(args[0]);

	Server::New(file, sampjs->GetAMX());

}
void Server::JS_UnloadScript(const FunctionCallbackInfo<Value> & args){
	if (args.Length() < 1) return;
	if (!args[0]->IsString()) return;

	JS_SCOPE(args.GetIsolate());
	std::string file = JS2STRING(args[0]);

	Unload(file);
	

}
void Server::JS_ReloadScript(const FunctionCallbackInfo<Value> & args){
	if (args.Length() < 1) return;
	if (!args[0]->IsString()) return;

	JS_SCOPE(args.GetIsolate());
	std::string file = JS2STRING(args[0]);
	Server* sampjs = Server::GetInstance(args.GetIsolate()->GetCallingContext());
	Reload(file, sampjs->GetAMX());
}

void Server::JS_GarbageCollection(const FunctionCallbackInfo<Value> & args){
	while (!args.GetIsolate()->IdleNotification(5000) ){};
}



Server::Server():_time_count(0){

	
	// Initialize V8
	if (!initiated){
		ArrayBufferAllocator array_buffer_allocator;
		V8::SetArrayBufferAllocator(&array_buffer_allocator);
		initiated = true;
		V8::InitializeICU();
		Platform* platform = v8::platform::CreateDefaultPlatform();
		V8::InitializePlatform(platform);
		V8::Initialize();	
		
	}
	
	
	Isolate::CreateParams create_params;
	_isolate = Isolate::New(create_params);

	Locker v8Locker(_isolate);
	Isolate::Scope isolate_scope(_isolate);
	HandleScope handle_scope(_isolate);
	

	Local<ObjectTemplate> global = ObjectTemplate::New(_isolate);

	Local<Context> context = Context::New(_isolate, NULL, global);
	_context.Reset(_isolate, context);

	Context::Scope context_scope(context);

	Local<ObjectTemplate> sampjs_templ = ObjectTemplate::New(_isolate);
	sampjs_templ->SetInternalFieldCount(1);
	
	Local<Object> sampjs = sampjs_templ->NewInstance();
	sampjs->SetInternalField(0, External::New(_isolate, this));

	SetGlobalObject("$sampjs", sampjs);


	Local<ObjectTemplate> module_templ = ObjectTemplate::New(_isolate);

	Local<ObjectTemplate> cache_templ = ObjectTemplate::New(_isolate);

	module_templ->Set(String::NewFromUtf8(_isolate, "_cache"),cache_templ->NewInstance());

	Local<Object> module = module_templ->NewInstance();

	SetGlobalFunction("gc", Server::JS_GarbageCollection);

	SetGlobalFunction("require", Server::Require);
	SetGlobalFunction("include", Server::Include);
	SetGlobalFunction("CallNative", Server::CallNative);
	SetGlobalFunction("SetTimer", Server::SetTimer);
	SetGlobalFunction("CancelTimer", Server::CancelTimer);

	SetGlobalFunction("load", Server::JS_LoadScript);
	SetGlobalFunction("unload", Server::JS_UnloadScript);
	SetGlobalFunction("reload", Server::JS_ReloadScript);

	SetGlobalObject("$modules", module);

	_eventManager = new sampjs::Events(this);
}

void Server::Shutdown(){
	EventManager()->FireEvent("ScriptExit");

	for (auto module : _modules){
		sjs::logger::debug("Module: %s", module.first.c_str());
		module.second->Shutdown();
	}
	sjs::logger::debug("Shutting Down Script %s",this->script_name.c_str());
	
}

void Server::AddModule(std::string name, Module *module){
	_modules[name] = module;
}

Module *Server::GetModule(std::string name){
	if (!_modules[name]) return NULL;
	else return _modules[name];
}

sampjs::Events *Server::EventManager(){
	return _eventManager;
}

void Server::SetAMX(AMX*amx) {
	_amx = amx;
}

AMX* Server::GetAMX(){
	return _amx;
}

Isolate* Server::GetIsolate(){
	return _isolate;
}

Local<Context> Server::GetContext(){
	JS_SCOPE(_isolate)
	JS_CONTEXT(_isolate, _context)
	return context;
}

void Server::Require(const FunctionCallbackInfo<Value> & args){
	JS_SCOPE(args.GetIsolate());
	
	Server *sampjs = Server::GetInstance(args.GetIsolate()->GetCallingContext());

	std::string file = JS2STRING(args[0]);
	args.GetReturnValue().Set(sampjs->RequireModule(file));
}

void Server::Include(const FunctionCallbackInfo<Value> & args){
	JS_SCOPE(args.GetIsolate());

	Server *sampjs = Server::GetInstance(args.GetIsolate()->GetCallingContext());
	std::string file = JS2STRING(args[0]);
	args.GetReturnValue().Set(sampjs->LoadScript(file));
}

int Server::GetNativeAddr(AMX *amx, std::string name){
	int func_idx;
	auto iter = _native_func_cache.find(name);
	if (iter != _native_func_cache.end()) func_idx = iter->second;
	else {
		if (amx_FindNative(amx, name.c_str(), &func_idx)){
			sjs::logger::error("Cannot find native function %s", name.c_str());
			return -1;
		}
		_native_func_cache[name] = func_idx;
	}

	return func_idx;
}

typedef int(*amx_Function_t)(AMX * amx, cell * params);
void Server::CallNative(const FunctionCallbackInfo<Value> &args){
	JS_SCOPE(args.GetIsolate());
	TryCatch try_catch;
	Server *sampjs = Server::GetInstance(args.GetIsolate()->GetCallingContext());

	if (args.Length() < 1){
		sjs::logger::error("Function CallNative requires at least 1 argument CallNative(nativeName, params, args);");
		args.GetReturnValue().SetNull();
		return;
	}

	std::string func_name = JS2STRING(args[0]);

	int func_idx;
	AMX_HEADER *amx_hdr = (AMX_HEADER *)sampjs->GetAMX()->base;
	
	auto iter = _native_func_cache.find(func_name);
	if (iter != _native_func_cache.end()) func_idx = iter->second;
	else {
		if (amx_FindNative(sampjs->GetAMX(), func_name.c_str(), &func_idx)){
			sjs::logger::error("Cannot find native function %s", func_name.c_str());
			return;
		}
		_native_func_cache[func_name] = func_idx;
	}

	unsigned int amx_addr = (unsigned int)((AMX_FUNCSTUB *)((char *)amx_hdr + amx_hdr->natives + amx_hdr->defsize * func_idx))->address;

	if (args.Length() > 1){
		if (!args[1]->IsString()){
			sjs::logger::error("CallNative %s, 2nd argument must be a string", func_name.c_str());
			return;
		}
	
		
		std::string param = JS2STRING(args[1]);
		size_t S_oc = std::count(param.begin(), param.end(), 'S');
		size_t I_oc = std::count(param.begin(), param.end(), 'I');
		size_t F_oc = std::count(param.begin(), param.end(), 'F');
		size_t s_oc = std::count(param.begin(), param.end(), 's');

		bool multi = false;
		if ((S_oc + I_oc + F_oc) > 1) multi = true;
		if (!args[args.Length() - 1]->IsArray() && multi ){
			sjs::logger::error("CallNative %s, you must supply an array of strings for functions with multiple references", func_name.c_str());
			return;
		}

		unsigned int count = (param.length()), variables = 0;
		
		cell *physAddr[6];
		cell *params = new cell[count + 1];
		params[0] = count * sizeof(cell);
		unsigned int strVars = 0;
		unsigned int k = 2,j = 1;
		for (unsigned int i = 0; i < param.length(); i++){
			switch (param[i]){
				case 'd':
				case 'i':
				{
					//if (!args[k]->IsObject() && !args[k]->IsInt32() && !args[k]->IsUint32() && !args[k]->IsString() && !args[k]->IsUndefined() && !args[k]->IsBoolean()){
					//	printf("[samp.js] Error: CallNative %s, argument %i does not match type (int)\n", func_name.c_str(), i );
					//	return;
				//	}
					int val = 0;
					if (!args[k]->IsUndefined()) val = args[k]->Int32Value();
					params[j++] = val;

					k++;
					break;
				}
				case 'f':
				{
					//if (!args[k]->IsNumber() && !args[k]->IsString() && !args[k]->IsUndefined()){
				//		printf("[samp.js] Error: CallNative %s, argument %i does not match type (float)\n", func_name.c_str(), i);
				//		return;
				//	}
					float val = 0.0;
					if (!args[k]->IsUndefined()) val = (float)args[k]->NumberValue();
					params[j++] = amx_ftoc(val);
					
					k++;
					break;
				}
				case 's':
				{
					//if (!args[k]->IsString() && !args[k]->IsUndefined()){
					//	printf("[samp.js] Error: CallNative %s, argument %i does not match type (string)\n", func_name.c_str(), i);
					//	return;
					//}

					std::string str = "";
					if (!args[k]->IsUndefined()) str = JS2STRING(args[k]);
					const char* val = str.c_str();	
					amx_Allot(sampjs->GetAMX(), strlen(val) + 1, &params[j++], &physAddr[variables++]);
					amx_SetString(physAddr[variables-1], val, 0, 0, strlen(val) + 1);
					k++;
					break;
				}

				case 'F':
				case 'I':
				{
					amx_Allot(sampjs->GetAMX(), 1, &params[j++], &physAddr[variables++]);
					break;
				}

				case 'S':
				{
					int strlen  = args[k++]->Int32Value();
					amx_Allot(sampjs->GetAMX(), strlen, &params[j++], &physAddr[variables++]);
					params[j++] = strlen;
					i++;
					break;
				}
			}
		}

		amx_Function_t amx_Function = (amx_Function_t)amx_addr;
		int value = amx_Function(sampjs->GetAMX(), params);

		if (variables){
			Local<Object> retobj;
			Local<Value> retval;
			Local<Array> arr;
			if (multi){
				arr = Local<Array>::Cast(args[args.Length() - 1]);
				retobj = Object::New(args.GetIsolate());
			}

			unsigned int k = 1;
			unsigned int j = 0;
			variables = 0;
			strVars = 0;
			for (unsigned int i = 0; i < param.length(); i++){
				switch (param[i]){
					default: k++;
					break;

					case 's':{
						strVars++;
						variables++;
						//amx_Release(sampjs.GetAMX(), params[i]);
						break;
					}
						
					case 'S':{
						char* text;
						text = new char[params[k++]];
						amx_GetString(text, physAddr[variables++], 0, params[k++]);
						i++;
						k++;
				
						if (multi) retobj->Set(arr->Get(j++), STRING2JS(args.GetIsolate(), text));
						else retval = STRING2JS(args.GetIsolate(), text);
						
						//amx_Release(sampjs.GetAMX(), params[i]);
						break;
					}

					case 'F':{
						cell* returnValue = (cell*)physAddr[variables++];
						float fl = amx_ctof(*returnValue);

						if (multi) retobj->Set(arr->Get(j++), Number::New(args.GetIsolate(), fl));
						else retval = Number::New(args.GetIsolate(), fl);
						//amx_Release(sampjs.GetAMX(), params[i]);
						break;
					}
					case 'I':{
						cell* returnValue = (cell*)physAddr[variables++];
						int value = *returnValue;
						if (multi) retobj->Set(arr->Get(j++), Integer::New(args.GetIsolate(), value));
						else retval = Integer::New(args.GetIsolate(), value);
						//amx_Release(sampjs.GetAMX(), params[i]);
						break;
					}

				}
			}
			
			for (int i = param.length() - 1; i >= 0; i--){
				if (param[i] == 'F' || param[i] == 'I' || param[i] == 'S' || param[i] == 's'){
					amx_Release(sampjs->GetAMX(), params[i + 1]);
				}
			}

			if (try_catch.HasCaught()){
				String::Utf8Value exception(try_catch.Exception());
				const char* exception_string = *exception;
				Local<Message> message = try_catch.Message();

				if (message.IsEmpty()){
					sjs::logger::error("Exception: %s", exception_string);
				}
				else {
					String::Utf8Value filename(message->GetScriptOrigin().ResourceName());
					const char* filename_string = *filename;
					int linenum = message->GetLineNumber();
					sjs::logger::error("Exception: %s:%i: %s", filename_string, linenum, exception_string);
					String::Utf8Value sourceline(message->GetSourceLine());
					const char* sourceline_string = *sourceline;
					sjs::logger::error("%s", sourceline_string);

				}
				return;
			}
			if (multi){
				args.GetReturnValue().Set(retobj);
				return;
			}
			else if (!retval.IsEmpty()){
				args.GetReturnValue().Set(Local<Value>::Cast(retval));
				return;
			}
				
		}
		
		args.GetReturnValue().Set(value);
		return;
	}
	else {
		if (try_catch.HasCaught()){
			String::Utf8Value exception(try_catch.Exception());
			const char* exception_string = *exception;
			Local<Message> message = try_catch.Message();

			if (message.IsEmpty()){
				sjs::logger::error("Exception: %s", exception_string);
			}
			else {
				String::Utf8Value filename(message->GetScriptOrigin().ResourceName());
				const char* filename_string = *filename;
				int linenum = message->GetLineNumber();
				sjs::logger::error("Exception: %s:%i: %s", filename_string, linenum, exception_string);
				String::Utf8Value sourceline(message->GetSourceLine());
				const char* sourceline_string = *sourceline;
				sjs::logger::error("%s", sourceline_string);

			}
			return;
		}
		amx_Function_t amx_Function = (amx_Function_t)amx_addr;
		int value = amx_Function(sampjs->GetAMX(), NULL);
		args.GetReturnValue().Set(value);

		
		return;
	}
}


int Server::AddTimer(Local<Function> func, int delay, int repeat){
	sjs::logger::debug("Timer Count: %i", _time_count);
	_timers[_time_count] = new sampjs::Timer(delay, func, repeat);
	return _time_count++;
}

void Server::RemoveTimer(int id){
	auto it = _timers.find(id);
	if (it == _timers.end()){
		sjs::logger::error("No timer with that id exists");
	}
	else{
		_timers.erase(it);
	}
}

void Server::SetTimer(const FunctionCallbackInfo<Value>& args){
	sjs::logger::debug("Setting up timer");
	Server *sampjs = Server::GetInstance(args.GetIsolate()->GetCallingContext());
	if (args.Length() < 2){
		sjs::logger::error("SetTimer takes atleast 2 arguments - SetTimer(function,delay,[repeat=0])");
		return;
	}

	if (!args[0]->IsFunction()){
		sjs::logger::error("SetTimer 1st argument must be a function/callback");
		return;
	}

	Local<Function> func = Local<Function>::Cast(args[0]);
	int time = args[1]->Uint32Value();
	int repeat = 0;
	if (args.Length() > 2){
		repeat = args[2]->Int32Value();
	}

	int id = sampjs->AddTimer(func, time, repeat);

	args.GetReturnValue().Set(id);
}

void Server::CancelTimer(const FunctionCallbackInfo<Value>& args){
	JS_SCOPE(args.GetIsolate());
	Server *sampjs = Server::GetInstance(args.GetIsolate()->GetCallingContext());
	if (args.Length() < 1){
		sjs::logger::error("CancelTimer takes 1 argument - CancelTimer(timerid);");
		return;
	}
	int id = args[0]->Uint32Value();
	sampjs->RemoveTimer(id);
}


std::string Server::SearchModules(std::string name,std::string folder){
	size_t count = std::count(name.begin(), name.end(), '/');
	count += std::count(name.begin(), name.end(), '\\');
	if (count > 0) return name;

	tinydir_dir dir;
	tinydir_open(&dir, folder.c_str());

	while (dir.has_next){
		tinydir_file file;
		tinydir_readfile(&dir, &file);
		if (file.is_dir && std::string(file.name) != "." && std::string(file.name) != ".."){
			std::string found = SearchModules(name, file.path);
			if (found != "") return found;
		}
		else if (file.is_reg && std::string(file.extension) == "js"){
			if (std::string(file.name) == name || std::string(file.name) == (name + ".js")){
				tinydir_close(&dir);
				return file.path;
			}
		}
		tinydir_next(&dir);
	}

	tinydir_close(&dir);
	return "";
}
Local<Value> Server::RequireModule(std::string name){
	
	std::string filename = SearchModules(name, "js");
	if (filename == ""){
		sjs::logger::error("Could not find module %s", name.c_str());
		Local<Value> value;
		return value;
	}

	std::ifstream t(filename);
	if (!t){
		sjs::logger::error("Could not find module %s", name.c_str());
		Local<Value> value;
		return value;
	}

	Local<Object> modules = GetGlobalObject("$modules");
	Local<Object> _cache = Local<Object>::Cast(modules->Get(String::NewFromUtf8(_isolate, "_cache")));

	

	if (!_cache->GetRealNamedProperty(String::NewFromUtf8(_isolate, filename.c_str())).IsEmpty()){
		sjs::logger::debug("Loading Cached Module %s", filename.c_str());
		Local<Value> module = _cache->Get(String::NewFromUtf8(_isolate, filename.c_str()));
		return module;
	}

	std::stringstream buffer;
	buffer << t.rdbuf();
	Locker v8Locker(_isolate);
	Isolate::Scope isolate_scope(_isolate);
	EscapableHandleScope handle_scope(_isolate);

	std::vector<std::string> tmp = sjs::string::split(filename, "/");
	std::string file= tmp[tmp.size() - 1];
	std::string path = filename.substr(0, filename.length()-file.length() - 1);

	sjs::logger::log("Path: %s - %s", filename.c_str(), path.c_str());

	std::string source = R"(
		"use strict";
		$modules._cache[")"+filename+R"("] = (function(){
			var exports = {}
			var module = {
				name: ")" + name + R"(",
				path: ")" + path + R"(/",
				file: ")" + file + R"("
			}; 
)" + buffer.str() + R"(
			return exports;
		}())
)";

	Local<String> sourcecode = String::NewFromUtf8(_isolate, source.c_str());
	Local<String> scriptname = String::NewFromUtf8(_isolate, filename.c_str());


	TryCatch try_catch;
	ScriptOrigin origin(scriptname, Integer::New(_isolate, -6));

	Local<Script> script = Script::Compile(sourcecode, &origin);
	if (script.IsEmpty()){
		_isolate->CancelTerminateExecution();
		sjs::logger::error("Failed to load Module %s due to errors in the script", name.c_str());
		Utils::PrintException(&try_catch);
		Local<Value> ret;
		return ret;
	}
	else {
		TryCatch try_catch;
		sjs::logger::log("[samp.js] Loaded Module %s", name.c_str());
		Local<Value> module = script->Run();
		if (try_catch.HasCaught()){
			_isolate->CancelTerminateExecution();
			Utils::PrintException(&try_catch);
			Local<Value> ret;
			return ret;
		}
		return handle_scope.Escape(module);
	}
}

Local<Value> Server::LoadScript(std::string filename){
	std::ifstream t(filename);
	if (!t){
		sjs::logger::error("Failed to open %s", filename.c_str());
	}
	else {
		
		std::stringstream buffer;
		buffer << t.rdbuf();
		Locker v8Locker(_isolate);
		Isolate::Scope isolate_scope(_isolate);
		EscapableHandleScope handle_scope(_isolate);
		JS_CONTEXT(_isolate, _context)

		Local<Object> global = context->Global();

		Local<String> source = String::NewFromUtf8(_isolate, buffer.str().c_str());
		Local<String> name = String::NewFromUtf8(_isolate, filename.c_str());

		TryCatch try_catch;
		ScriptOrigin origin(name);
		Handle<Script> script = Script::Compile(source, &origin);
		if (script.IsEmpty()){
			_isolate->CancelTerminateExecution();
			Utils::PrintException(&try_catch);
		}
		else {
			sjs::logger::log("Loaded %s", filename.c_str());
			TryCatch try_catch;
			Local<Value> result = script->Run();
			if (try_catch.HasCaught()){
				_isolate->CancelTerminateExecution();
				Utils::PrintException(&try_catch);
				Local<Value> ret;
				return ret;
			}
			
			return handle_scope.Escape(result);
		}
	}
	
	Handle<Value> res;
	return res;
}

void Server::ProcessTick(){

	auto it = _timers.begin();
	if (it != _timers.end()){
		
		time_ms current = TimeMS();
		while (it != _timers.end()){
		
			if ((it->second->start + it->second->duration) <= current){
				
				JS_SCOPE(_isolate);
				JS_CONTEXT(_isolate, _context)
				TryCatch try_catch;
				Local<Function> func = Local<Function>::New(_isolate, it->second->func);
				func->Call(func->CreationContext()->Global(), 0, NULL);
				if (try_catch.HasCaught()){
					Utils::PrintException(&try_catch);
				}
				if (it->second->repeat == 0) _timers.erase(it++);
				else {
					if (it->second->repeat > 0) it->second->repeat--;
					it->second->start = current;
					++it;
				}
	
				
			}
			else {
				++it;
			}
		}
	}
//	printf("Processing Tick\n");
}

void Server::SetGlobalFunction(std::string name, FunctionCallback callback){
	JS_SCOPE(_isolate)
	JS_CONTEXT(_isolate, _context)
	Local<FunctionTemplate> fntmp = FunctionTemplate::New(_isolate, callback);
	context->Global()->Set(String::NewFromUtf8(_isolate, name.c_str()), fntmp->GetFunction());
}

void Server::SetGlobalObject(std::string name, Local<Object> object){
	JS_SCOPE(_isolate)
		JS_CONTEXT(_isolate, _context)
	context->Global()->Set(String::NewFromUtf8(_isolate, name.c_str()), object);
}

Local<Function> Server::GetGlobalFunction(std::string name){
	Locker locker(_isolate);
	Isolate::Scope isolate_scope(_isolate);
	EscapableHandleScope handle_scope(_isolate);

	JS_CONTEXT(_isolate, _context)
	Local<Function> obj = Local<Function>::Cast(context->Global()->Get(STRING2JS(_isolate, name)));
	return handle_scope.Escape(obj);
}

Local<Object> Server::GetGlobalObject(std::string name){
	Locker locker(_isolate);
	Isolate::Scope isolate_scope(_isolate);
	EscapableHandleScope handle_scope(_isolate);

	JS_CONTEXT(_isolate, _context)
	Local<Object> obj = Local<Object>::Cast(context->Global()->Get(STRING2JS(_isolate, name)));
	return handle_scope.Escape(obj);

}