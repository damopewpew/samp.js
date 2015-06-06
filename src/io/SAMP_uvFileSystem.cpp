#include "io/SAMP_uvFileSystem.h"

#include "SAMP_JS.h"
#include "utils/Helpers.h"

#include <fcntl.h>
#include <sys/types.h>
#include <sys/stat.h>

#include <streambuf>
#include <sstream>

#ifdef _WIN32
# include <io.h>
# ifndef S_IRUSR
#  define S_IRUSR _S_IREAD
# endif
# ifndef S_IWUSR
#  define S_IWUSR _S_IWRITE
# endif
#endif

std::map<uv_fs_t*, FS_Request> SAMP_uvFileSystem::requests;
std::map<int, uv_fs_t*> SAMP_uvFileSystem::handles;
int SAMP_uvFileSystem::handles_count;



SAMP_uvFileSystem::SAMP_uvFileSystem(SAMP_JS *sampjs) :_sampjs(sampjs){
	sampjs->SetGlobalFunction("OpenFile", SAMP_uvFileSystem::JS_OpenFile);
	sampjs->SetGlobalFunction("ReadFile", SAMP_uvFileSystem::JS_ReadFile);
}

void SAMP_uvFileSystem::JS_OpenFile(const FunctionCallbackInfo<Value> & args){
	if (args.Length() < 1){
		
		sjs::logger::error("OpenFile expects at least 1 argument");
		args.GetReturnValue().Set(-1);
		return;
	}

	const String::Utf8Value jsstr(args[0]);
	const char *filename = ToCString(jsstr);

	if (args.Length() > 1 && args[1]->IsFunction()){
		JS_SCOPE(args.GetIsolate())
		Local<Function> callback = Local<Function>::Cast(args[1]);
		int r = OpenFile(filename, callback);
		if (r < 0) sjs::logger::error("[samp.js] OpenFile: there was an issue opening the file (%s)", filename);
		return;
	}

	int handle = OpenFile(filename);
	if (handle == -1){
		sjs::logger::error("OpenFile: there was an issue opening the file (%s)", filename);
		args.GetReturnValue().Set(-1);
		return;
	}

	args.GetReturnValue().Set(handle);
}
int SAMP_uvFileSystem::OpenFile(std::string filename){
	uv_fs_t req;
	FS_Request request;
	requests[&req] = request;
	handles[handles_count] = &req;

	int r = uv_fs_open(SAMP_JS::uv_loop, &req, filename.c_str(), O_CREAT | O_RDWR, S_IRUSR | S_IWUSR, NULL);
	if (r < 0){
		sjs::logger::error("OpenFile: %s", uv_strerror(r));
		return -1;
	}
	
	return handles_count++;
}
int SAMP_uvFileSystem::OpenFile(std::string filename, Local<Function> callback ){
	uv_fs_t req;

	FS_Request request(callback); 
	requests[&req] = request;
	handles[handles_count] = &req;
	int r = uv_fs_open(SAMP_JS::uv_loop, &req, filename.c_str(), O_CREAT | O_RDWR, S_IRUSR | S_IWUSR, [](uv_fs_t *req)->void {
		int result = req->result;

		if (result < 0){
			sjs::logger::error("Error opening file: %s", uv_strerror(result));
			return;
		}

		JS_SCOPE(requests[req].isolate)
			Local<Function> func = Local<Function>::New(requests[req].isolate, requests[req].callback);
		func->Call(func, 0, NULL);
		sjs::logger::debug("Async Open %s", req->path);
	});
	uv_run(SAMP_JS::uv_loop, UV_RUN_DEFAULT);
	if (r < 0){
		sjs::logger::error("OpenFile: %i", r);
		return -1;
	}

	return handles_count++;
}
void SAMP_uvFileSystem::JS_ReadFile(const FunctionCallbackInfo<Value> & args){
	if (args.Length() < 1){
		sjs::logger::error("ReadFile expects at least 1 argument");
		args.GetReturnValue().Set(-1);
		return;
	}

	const String::Utf8Value jsstr(args[0]);
	const char *filename = ToCString(jsstr);



	if (args.Length() > 1 && args[1]->IsFunction()){
		JS_SCOPE(args.GetIsolate())
		Local<Function> callback = Local<Function>::Cast(args[1]);
		ReadFile(filename, callback);
	}

}

int SAMP_uvFileSystem::ReadFile(std::string filename, Local<Function> callback){
	uv_fs_t open_req, stat_req, read_req;


	int r = uv_fs_stat(SAMP_JS::uv_loop, &stat_req, filename.c_str(), NULL);
	if (r < 0){
		sjs::logger::error("ReadFile - Issues with stat %s", filename.c_str());
		return -1;
	}
	
	sjs::logger::debug("Stat %s filesize %i", filename.c_str(), stat_req.statbuf.st_size);
	int r2 = uv_fs_open(SAMP_JS::uv_loop, &open_req, filename.c_str(), O_CREAT | O_RDWR, S_IRUSR | S_IWUSR, NULL);

	sjs::logger::debug("File Open");
	if (open_req.result < 0 || r2 < 0 ){
		sjs::logger::error("Error opening file %s", uv_strerror(open_req.result));
		return -1;
	}

	sjs::logger::debug("Request");
	FS_Request request(callback);
	requests[&read_req] = request;
	
	requests[&read_req].open_req = &open_req;
	requests[&read_req].buf = new char[(unsigned int)stat_req.statbuf.st_size];
	requests[&read_req].buf_ = uv_buf_init(requests[&read_req].buf, (unsigned int)stat_req.statbuf.st_size);
	sjs::logger::debug("Before Read");
	int r3 = uv_fs_read(SAMP_JS::uv_loop, &read_req, open_req.result, &requests[&read_req].buf_, (unsigned int) stat_req.statbuf.st_size, -1,
		[] (uv_fs_t *req) -> void {
			if (req->result < 0){
				sjs::logger::error("Cannot read file: %s", uv_strerror(req->result));
			}
			else {
				JS_SCOPE(requests[req].isolate)
				Local<Value> argv[1] = { String::NewFromUtf8(requests[req].isolate, requests[req].buf) };
				Local<Function> func = Local<Function>::New(requests[req].isolate, requests[req].callback);
				func->Call(func, 1, argv);
			}
			uv_fs_req_cleanup(req);
			uv_fs_t close_req;
			uv_fs_close(SAMP_JS::uv_loop, &close_req, requests[req].open_req->result, NULL);

			if (close_req.result < 0){
				sjs::logger::error("Cannot close file: %s", uv_strerror(close_req.result));
			}
		}
	);
	if (read_req.result < 0){
		sjs::logger::error("Read Request Failed %s", uv_strerror(read_req.result));
	}
	sjs::logger::debug("Reading");
	uv_run(SAMP_JS::uv_loop, UV_RUN_DEFAULT);
	return 0;
}
