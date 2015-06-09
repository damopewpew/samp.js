#ifndef __SAMP_UTILS__
#define __SAMP_UTILS__

#include "Server.h"

namespace sampjs {
	class Utils : public Module {
	public:
		Utils(Server* sampjs);

		static void JS_Debug(const FunctionCallbackInfo<Value> & args);

		static void Print(const FunctionCallbackInfo<Value> & args);
		static void PrintObject(Isolate* isolate, Local<Value> name_, Local<Value> value, int level);

		static void PrintException(TryCatch *try_catch);
	};
};

#endif