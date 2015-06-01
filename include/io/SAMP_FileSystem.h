#ifndef __SAMP_FILESYSTEM__
#define __SAMP_FILESYSTEM__

#include "SAMP_JS.h"



class SAMP_FileSystem: public SAMP_Module {
public:
	SAMP_FileSystem(SAMP_JS* sampjs);

	static void rename(const FunctionCallbackInfo<Value>& args);
	static void unlink(const FunctionCallbackInfo<Value>& args);
	static void rmdir(const FunctionCallbackInfo<Value>& args);
	static void mkdir(const FunctionCallbackInfo<Value>& args);
	static void readdir(const FunctionCallbackInfo<Value>& args);
	static void open(const FunctionCallbackInfo<Value>& args);
	static void close(const FunctionCallbackInfo<Value>& args);
	static void write(const FunctionCallbackInfo<Value>& args);
	static void read(const FunctionCallbackInfo<Value>& args);
	static void readFile(const FunctionCallbackInfo<Value>& args);
	static void writeFile(const FunctionCallbackInfo<Value>& args);
	static void appendFile(const FunctionCallbackInfo<Value>& args);
	static void exists(const FunctionCallbackInfo<Value>& args);

private:
	SAMP_JS* _sampjs;

	void AddFunction(Local<Object> obj, std::string name, FunctionCallback callback);
};


#endif