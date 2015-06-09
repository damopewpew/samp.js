#ifndef __SAMP_UVFILESYSTEM__
#define __SAMP_UVFILESYSTEM__


#include "Server.h"

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
	int64_t offset; 
	int64_t size; 
	FS_Request(){

	}
	FS_Request(Local<Function> callback_){
		offset = 0;
		size = 0;
		this->isolate = callback_->CreationContext()->GetIsolate();
		this->callback.Reset(callback_->CreationContext()->GetIsolate(), callback_);
	}
};

struct uvRequest{
	void *data;
	Isolate *isolate;
	std::string filename;
	char* buf;
	uv_buf_t buf_;
	int64_t offset;

	Persistent<Function, CopyablePersistentTraits<Function>> callback;
	Persistent<Context, CopyablePersistentTraits<Context>> context;
	uvRequest(){

	}

	uvRequest(std::string filename_, Local<Function> callback_){
		filename = filename_;
		this->isolate = callback_->CreationContext()->GetIsolate();
		this->callback.Reset(callback_->CreationContext()->GetIsolate(), callback_);
		this->context.Reset(this->isolate,callback_->CreationContext());
	}
};

class SAMP_uvFileSystem : public SAMP_Module {
public:
	SAMP_uvFileSystem(Server *sampjs);

	static void uvSetup();

	static std::map<uv_fs_t*, FS_Request> requests;
	static std::map<int, uv_fs_t*> handles;
	static int handles_count;

	static uv_rwlock_t lock;
	static uv_async_t read_handle;

	static std::list<uvRequest> read_queue;

	static int OpenFile(std::string filename);
	static int OpenFile(std::string filename, Local<Function> callback);

	static void ReadFile(uvRequest request);

	static void ReadAsync(uv_work_t *req);
	static void ReadDone(uv_work_t *req, int status);

	static void JS_ReadFile(const FunctionCallbackInfo<Value> &args);
	static void JS_OpenFile(const FunctionCallbackInfo<Value> & args);

	static void read_cb(uv_fs_t *req);




private:
	Server *_sampjs;
};
#endif