#include "SAMPJS.h"
#include "Script.h"

#include "utils/Helpers.h"

#include <include/v8.h>
#include <include/libplatform/libplatform.h>


using namespace sampjs;

AMX *SAMPJS::amx;
string SAMPJS::v8flags = "--expose-gc --allow_natives_syntax --harmony";

map<string, shared_ptr<sampjs::Script>> SAMPJS::scripts;

class ArrayBufferAllocator : public v8::ArrayBuffer::Allocator {
public:
	virtual void* Allocate(size_t length) {
		void* data = AllocateUninitialized(length);
		return data == NULL ? data : memset(data, 0, length);
	}
	virtual void* AllocateUninitialized(size_t length) { return malloc(length); }
	virtual void Free(void* data, size_t) { free(data); }
};


void SAMPJS::Init(){
	ArrayBufferAllocator array_buffer_allocator;
	V8::SetArrayBufferAllocator(&array_buffer_allocator);

	sjs::logger::debug("v8flags: %s", v8flags.c_str());
	if (v8flags.length() > 0)V8::SetFlagsFromString(v8flags.c_str(), v8flags.length());

	V8::InitializeICU();
	Platform* platform = v8::platform::CreateDefaultPlatform();
	V8::InitializePlatform(platform);
	V8::Initialize();

	sjs::logger::debug("V8 Initialized");
}

void SAMPJS::Shutdown(){
	for (auto script : scripts){
		script.second->Unload();
		script.second.reset();
		scripts.erase(script.first);
	}

	sjs::logger::debug("SAMPJS Shutdown");
	V8::ShutdownPlatform();
}

void SAMPJS::ProcessTick(){
	for (auto script : scripts){
		if(script.second->IsReady()) script.second->Tick();
	}
}



void SAMPJS::CreateScript(string filename){
	if (ScriptLoaded(filename)){
		return;
	}
	filename = "js/" + filename;
	scripts[filename] = make_shared<Script>();
	scripts[filename]->Init(filename);
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



map<string, shared_ptr<sampjs::Script>> SAMPJS::GetScripts(){
	return scripts;
}