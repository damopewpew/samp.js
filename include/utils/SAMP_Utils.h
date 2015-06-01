#ifndef __SAMP_UTILS__
#define __SAMP_UTILS__

#include "SAMP_JS.h"

class SAMP_Utils : public SAMP_Module {
public:
	SAMP_Utils(SAMP_JS* sampjs);

	static void Print(const FunctionCallbackInfo<Value> & args);
	static void SAMP_Utils::PrintObject(Isolate* isolate, Local<Value> name_, Local<Value> value, int level);
};

#endif