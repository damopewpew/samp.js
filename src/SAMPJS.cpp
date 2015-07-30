#include "SAMPJS.h"
#include "Script.h"

#include "utils/Helpers.h"
#include "utils/Utils.h"

#include <include/v8.h>
#include <include/libplatform/libplatform.h>

#include "io/MySQL.h"


using namespace sampjs;

AMX *SAMPJS::amx;
AMX_HEADER *SAMPJS::amx_hdr;
string SAMPJS::v8flags = "--expose-gc --allow_natives_syntax --harmony --harmony-modules --use_strict ";
Platform *SAMPJS::platform;
ArrayBufferAllocator SAMPJS::array_buffer_allocator;

map<string, shared_ptr<sampjs::Script>> SAMPJS::scripts;




void SAMPJS::Init(){
	sjs::logger::debug("v8flags: %s", v8flags.c_str());
	if (v8flags.length() > 0)V8::SetFlagsFromString(v8flags.c_str(), v8flags.length());

	V8::InitializeICU();
	platform = v8::platform::CreateDefaultPlatform();
	V8::InitializePlatform(platform);
	V8::Initialize();

	V8::SetArrayBufferAllocator(&array_buffer_allocator);

	sjs::logger::log("v8 Engine version %s loaded.", V8::GetVersion());
	

	MySQL::StaticInit();
}

void SAMPJS::Shutdown(){
	for (auto script : scripts){
		script.second->Unload();
		script.second.reset();
		scripts.erase(script.first);
	}

	MySQL::StaticShutdown();
	V8::Dispose();
	V8::ShutdownPlatform();
	delete platform;
}

void SAMPJS::ProcessTick(){
	for (auto script : scripts){
		if(script.second->IsReady()) script.second->Tick();
	}
}



void SAMPJS::CreateScript(string filename){
	if (ScriptLoaded(filename)){
		sjs::logger::log("Script: %s, already loaded", filename.c_str());
		return;
	}
	filename = "js/" + filename;
	scripts[filename] = make_shared<Script>();
	if (!scripts[filename]->Init(filename)){
		scripts.erase(filename);
	}
}

void SAMPJS::RemoveScript(string filename){
	if (ScriptLoaded(filename)){
		scripts[filename]->Unload();
		scripts.erase(filename);
	}
	else if (ScriptLoaded("js/" + filename)){
		scripts["js/" + filename]->Unload();
		scripts.erase("js/" + filename);
	}
}

bool SAMPJS::ScriptLoaded(string filename){
	return (scripts.find(filename) != scripts.end());
}

void SAMPJS::SetAMX(AMX *amx){
	SAMPJS::amx = amx;
	SAMPJS::amx_hdr = (AMX_HEADER *)SAMPJS::amx->base;
}

void SAMPJS::JS_Load(const FunctionCallbackInfo<Value> & args){
	if (args.Length() < 1)return;
	string file = JS2STRING(args[0]);
	CreateScript(file);
}

void SAMPJS::JS_Unload(const FunctionCallbackInfo<Value> & args){
	if (args.Length() < 1) return;
	string file = JS2STRING(args[0]);
	RemoveScript(file);
}

void SAMPJS::JS_Reload(const FunctionCallbackInfo<Value> & args){
	if (args.Length() < 1) return;
	string file = JS2STRING(args[0]);
	RemoveScript(file);
	CreateScript(file);
}

bool SAMPJS::PublicCall(const char *name, cell *params, cell *retval){
	if (Script::_publics.find(name) == Script::_publics.end()) return true;
	for (auto script : scripts){
		bool shouldReturn = false;
		int returnval = script.second->PublicCall(name, params, shouldReturn);
		retval = (cell*)returnval;
		if (shouldReturn){
			return returnval;
		}
	}	
	return true;
}

Local<Value> SAMPJS::ExecuteCode(Local<Context> context, string name, string code,int offset){
	Isolate *isolate = context->GetIsolate();
	Locker v8Locker(isolate);
	Isolate::Scope isolate_scope(isolate);
	HandleScope hs(isolate);
	EscapableHandleScope handle_scope(isolate);
	Local<Context> ctx = Local<Context>::New(isolate, context);
	Context::Scope context_scope(ctx);

	auto scriptname = String::NewFromUtf8(isolate, name.c_str());
	ScriptOrigin origin(scriptname, Integer::New(isolate,offset));

	
/*	if (strict){
		code = "\"use strict\"\r\n" + code;
	} */

	auto source = String::NewFromUtf8(isolate, code.c_str());


	TryCatch try_catch;
	
	
	auto script = v8::Script::Compile(source, &origin);



	if (script.IsEmpty()){
		isolate->CancelTerminateExecution();
		Utils::PrintException(&try_catch);
	}
	else {
		try_catch.Reset();
		Local<Value> result = script->Run();
		if (try_catch.HasCaught()){
			isolate->CancelTerminateExecution();
			Utils::PrintException(&try_catch);
			Local<Value> ret;
			return ret;
		}

		return handle_scope.Escape(result);
	}

	return Local<Value>();
}



map<string, shared_ptr<sampjs::Script>> SAMPJS::GetScripts(){
	return scripts;
}