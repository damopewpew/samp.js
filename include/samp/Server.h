#ifndef __SERVER__
#define __SERVER__

#include "Module.h"
#include <map>
namespace sampjs {
	class Server : public Module {
	public:
		static std::map<std::string, int> _native_func_cache;
		virtual void Init(Local<Context> context);
		virtual void Shutdown();
		virtual void Tick(){};

		static void JS_CallNative(const FunctionCallbackInfo<Value> & args);
		
		static void JS_CurrentMemory(const FunctionCallbackInfo<Value> & args);
		static void JS_PeakMemory(const FunctionCallbackInfo<Value> & args);

		void FireEvent(std::string name, const int argc=0, Local<Value> argv[]=NULL);
		int FireNative(std::string name, std::string param_types, std::vector<std::string> param_names, cell* params);
	private:
		Isolate *isolate;
		Persistent<Context, CopyablePersistentTraits<Context>> context;
	};
};

#endif;