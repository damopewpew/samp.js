#ifndef __SERVER__
#define __SERVER__

#include "Module.h"
#include <map>
#include <unordered_map>
namespace sampjs {
	typedef int(*amx_Function_t)(AMX * amx, cell * params);
	class Server : public Module {
	public:
		static std::unordered_map<std::string, amx_Function_t> _native_func_cache;
		static std::unordered_map<std::string, AMX_NATIVE> _gdk_native_funcs;
		static AMX_NATIVE last_native;
		static std::string last_native_name;
		virtual void Init(Local<Context> context);
		virtual void Shutdown();
		virtual void Tick(){};

		virtual std::string Name(){ return "Server"; };

		static void JS_CallNativeGDK(const FunctionCallbackInfo<Value> & args);

		static void JS_CreateVehicle(const FunctionCallbackInfo<Value> & args);
		static void JS_AddStaticVehicle(const FunctionCallbackInfo<Value> & args);
		static void JS_DestroyVehicle(const FunctionCallbackInfo<Value> & args);

		static void JS_CurrentMemory(const FunctionCallbackInfo<Value> & args);
		static void JS_PeakMemory(const FunctionCallbackInfo<Value> & args);

		void FireEvent(std::string name, const int argc=0, Local<Value> argv[]=NULL);
		int FireNative(std::string name, std::string param_types, std::vector<std::string> param_names, cell* params);
	private:
		Isolate *isolate;
		Persistent<Context, CopyablePersistentTraits<Context>> context;
	};
};

#endif