#ifndef __SAMPJS__
#define __SAMPJS__

#include <string>
#include <map>
#include <memory>

#include "Script.h"

#include <sdk.h>

using namespace std;

class ArrayBufferAllocator : public v8::ArrayBuffer::Allocator {
public:
	virtual void* Allocate(size_t length) {
		void* data = AllocateUninitialized(length);
		return data == NULL ? data : memset(data, 0, length);
	}
	virtual void* AllocateUninitialized(size_t length) { return malloc(length); }
	virtual void Free(void* data, size_t) {  free(data); }
};


namespace sampjs {
	class Script;
	class SAMPJS {
	public:
		static Platform* platform;
		static AMX *amx;
		static string v8flags;
		static ArrayBufferAllocator array_buffer_allocator;

		static void Init();
		static void Shutdown();
		static void ProcessTick();

		static void CreateScript( string filename );
		static void RemoveScript( string filename );
		static bool ScriptLoaded( string filename );

		static void JS_Load(const FunctionCallbackInfo<Value> & args);
		static void JS_Unload(const FunctionCallbackInfo<Value> & args);
		static void JS_Reload(const FunctionCallbackInfo<Value> & args);

		
		static Local<Value> ExecuteCode(Local<Context> context, string name, string code, int offset=1);


		static map<string, shared_ptr<Script>> GetScripts();
		
		static map<string, shared_ptr<Script>> scripts;
	};
};

#endif