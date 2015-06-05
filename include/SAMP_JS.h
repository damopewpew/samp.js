#ifndef __SAMP_JS__
#define __SAMP_JS__


#include "sdk.h"


#include <string>
#include <string.h>
#include <cstring>
#include "include/v8.h"
#include <stdio.h>
#include <map> 
#include <list>

#include <chrono>
#include <ctime>

#include <iostream>
#include "SAMP_Module.h"

class SAMP_Events;

using namespace v8;

#define JS_SCOPE(isolate) Locker  JS_LOCKER(isolate); Isolate::Scope JS_ISOLATE_SCOPE(isolate); HandleScope JS_HANDLE_SCOPE(isolate);
#define JS_CONTEXT(isolate, ctx) Local<Context> context = Local<Context>::New(isolate,ctx);  Context::Scope JS_CONTEXT_SCOPE(context);
#define JS_CTX(context) Context::Scope JS_CONTEXT_SCOPE(context);

#define JS2CSTR(jsval, cstr) const String::Utf8Value jsString(jsval); cstr = ToCString(jsString);



inline const char* ToCString(const v8::String::Utf8Value& value){
	return *value ? *value : "<string conversion failed>";
}

inline const char* JS2CSTRING(const Local<Value>& val){
	const String::Utf8Value jsString(val);
	const char* str = ToCString(jsString);
	return str;
}

inline std::string JS2STRING (const Local<Value>& val){
	const char* str;
	JS2CSTR(val, str);
	return std::string(str);
}

inline Local<String> STRING2JS(Isolate* isolate, std::string val){
	return String::NewFromUtf8(isolate, val.c_str());
}

class ArrayBufferAllocator : public v8::ArrayBuffer::Allocator {
public:
	virtual void* Allocate(size_t length) {
		void* data = AllocateUninitialized(length);
		return data == NULL ? data : memset(data, 0, length);
	}
	virtual void* AllocateUninitialized(size_t length) { return malloc(length); }
	virtual void Free(void* data, size_t) { free(data); }
};


typedef long long time_ms;

inline time_ms TimeMS(){
	return std::chrono::duration_cast<std::chrono::milliseconds> (std::chrono::system_clock::now().time_since_epoch()).count();
}

class SAMP_Timer {
public:
	time_ms start;
	time_ms duration;
	Persistent<Function, CopyablePersistentTraits<Function>> func;
	int repeat = 0;

	SAMP_Timer(time_ms duration_, Local<Function> func_, int repeat_ = 0){
		this->func.Reset(func_->CreationContext()->GetIsolate(), func_);
		this->duration = duration_;
		this->start = TimeMS();
		this->repeat = repeat_;
	}

	time_ms end(){
		return this->duration + this->start;
	}
};

class SAMP_JS {

public:
	static std::map<std::string,int> _native_func_cache;
	static std::map<std::string, SAMP_JS*> _scripts;

	static void New(std::string filename, AMX *amx);
	static void Unload(std::string filename);
	static void Reload(std::string filename, AMX *amx);

	static int GetNativeAddr(AMX *amx, std::string name);
	
	static bool initiated;
	static SAMP_JS* GetInstance(Local<Context> context);
	static void JS_LoadScript(const FunctionCallbackInfo<Value> & args);
	static void JS_UnloadScript(const FunctionCallbackInfo<Value> & args);
	static void JS_ReloadScript(const FunctionCallbackInfo<Value> & args);

	static void Require(const FunctionCallbackInfo<Value> & args);
	static void Include(const FunctionCallbackInfo<Value> & args);
	static void CallNative(const FunctionCallbackInfo<Value>& args);

	static void SetTimer(const FunctionCallbackInfo<Value>& args);
	static void CancelTimer(const FunctionCallbackInfo<Value>& args);

	SAMP_JS();
	
	void Shutdown();
	
	std::string SearchModules(std::string name, std::string folder);

	Local<Value> RequireModule(std::string name);
	Local<Value> LoadScript(std::string filename);

	void ProcessTick();


	void SetGlobalFunction(std::string name, FunctionCallback callback);
	void SetGlobalObject(std::string name, Local<Object> object);
	Local<Object> GetGlobalObject(std::string name);

	SAMP_Events* EventManager();

	void SetAMX(AMX* amx);
	AMX* GetAMX();
	Isolate* GetIsolate();
	Local<Context> GetContext();

	Isolate* _isolate;
	Persistent<Context> _context; 


	void AddModule(std::string name, SAMP_Module *module);
	SAMP_Module *GetModule(std::string name);
	
	
private:
	std::map<std::string, SAMP_Module*> _modules;
	AMX* _amx;
	SAMP_Events* _eventManager;
	std::map<int,SAMP_Timer*> _timers;
	unsigned int _time_count;

	int AddTimer(Local<Function> func, int delay, int repeat = 0);
	void RemoveTimer(int id);
};

#endif