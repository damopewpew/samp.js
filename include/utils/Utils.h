#ifndef __SAMP_UTILS__
#define __SAMP_UTILS__

#include "Module.h"

#define CONSOLE_NORMAL 0
#define CONSOLE_LOG 1
#define CONSOLE_DEBUG 2
#define CONSOLE_ERROR 3
namespace sampjs {
	class Utils : public Module {
	public:
		
		virtual void Init(Local<Context> context);
		virtual void Shutdown();
		virtual void Tick(){};

		virtual std::string Name(){ return "Utils"; };

		static void JS_Debug(const FunctionCallbackInfo<Value> & args);

		static void JS_ConsoleLog(const FunctionCallbackInfo<Value> & args);
		static void JS_ConsoleDebug(const FunctionCallbackInfo<Value> & args);
		static void JS_ConsoleError(const FunctionCallbackInfo<Value> & args);

		static void Print(const FunctionCallbackInfo<Value> & args);
		static void PrintObject(Isolate* isolate, Local<Value> name_, Local<Value> value, int level, int mode );

		static void PrintException(TryCatch *try_catch);
	};
};

#endif