#ifndef __SAMP_UVFILESYSTEM__
#define __SAMP_UVFILESYSTEM__


#include "SAMP_JS.h"

#include <include/v8.h>
#include <uv.h>
#include <map>

using namespace v8;

struct FS_Request {
	Isolate *isolate;
	Persistent<Function, CopyablePersistentTraits<Function>> callback;
	char* buf;
	uv_buf_t buf_;
	uv_fs_t* open_req;

	FS_Request(){

	}
	FS_Request(Local<Function> callback_){
		this->isolate = callback_->CreationContext()->GetIsolate();
		this->callback.Reset(callback_->CreationContext()->GetIsolate(), callback_);
	}
};


class SAMP_uvFileSystem : public SAMP_Module {
public:
	SAMP_uvFileSystem(SAMP_JS *sampjs);

	static std::map<uv_fs_t*, FS_Request> requests;
	static std::map<int, uv_fs_t*> handles;
	static int handles_count;

	static int OpenFile(std::string filename);
	static int OpenFile(std::string filename, Local<Function> callback);

	static int ReadFile(std::string filename, Local<Function> callback);

	static void JS_ReadFile(const FunctionCallbackInfo<Value> &args);
	static void JS_OpenFile(const FunctionCallbackInfo<Value> & args);

private:
	SAMP_JS *_sampjs;
};
#endif