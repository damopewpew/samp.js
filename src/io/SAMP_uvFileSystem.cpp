#include "io/SAMP_uvFileSystem.h"


#include "Server.h"
#include "utils/Helpers.h"
#include "utils/Utils.h"

#include <fcntl.h>
#include <sys/types.h>
#include <sys/stat.h>

#include <streambuf>
#include <sstream>
#include <thread>

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
uv_rwlock_t SAMP_uvFileSystem::lock;

uv_async_t SAMP_uvFileSystem::read_handle;

std::list<uvRequest> SAMP_uvFileSystem::read_queue;

void SAMP_uvFileSystem::uvSetup(){
	sjs::logger::printf("uvSetup Thread: %i", std::this_thread::get_id());
	uv_async_init(Server::uv_loop, &read_handle, [](uv_async_t *handle){
		sjs::logger::debug("Thread 2 Id: %i", std::this_thread::get_id());
		for (auto request : read_queue){
			sjs::logger::debug("Reading %s", request.filename.c_str());
		
			ReadFile(request);
		}

		read_queue.clear();
		
	});
}

SAMP_uvFileSystem::SAMP_uvFileSystem(Server *sampjs) :_sampjs(sampjs){
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

	int r = uv_fs_open(uv_default_loop(), &req, filename.c_str(), O_CREAT | O_RDWR, S_IRUSR | S_IWUSR, NULL);
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
	int r = uv_fs_open(uv_default_loop(), &req, filename.c_str(), O_CREAT | O_RDWR, S_IRUSR | S_IWUSR, [](uv_fs_t *req)->void {
		int result = req->result;

		if (result < 0){
			sjs::logger::error("Error opening file: %s", uv_strerror(result));
			return;
		}
		TryCatch try_catch;
		JS_SCOPE(requests[req].isolate)
		Local<Function> func = Local<Function>::New(requests[req].isolate, requests[req].callback);
		func->Call(func, 0, NULL);
		if (try_catch.HasCaught()){
			Utils::PrintException(&try_catch);
		}
		sjs::logger::debug("Async Open %s", req->path);
	});
	uv_run(Server::uv_loop, UV_RUN_DEFAULT);
	if (r < 0){
		sjs::logger::error("OpenFile: %i", r);
		return -1;
	}

	return handles_count++;
}
void SAMP_uvFileSystem::JS_ReadFile(const FunctionCallbackInfo<Value> & args){
	TryCatch try_catch;
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
		//ReadFile(filename, callback);
		
		sjs::logger::debug("Thread Id: %i", std::this_thread::get_id());
		sjs::logger::printf("Testing %s", filename);
		
		//uv_rwlock_wrlock(&SAMP_uvFileSystem::lock);
		read_queue.push_back(uvRequest(filename, callback));
		//uv_rwlock_wrunlock(&SAMP_uvFileSystem::lock);
		uv_async_send(&read_handle);

		sjs::logger::printf("Testing after %s", filename);
		
	}

	if (try_catch.HasCaught()){
		Utils::PrintException(&try_catch);
	}
	
}

void SAMP_uvFileSystem::ReadAsync(uv_work_t *req){
	sjs::logger::debug("Reading Async?");

	Sleep(5000);

	sjs::logger::debug("Finished Read Async");
}

void SAMP_uvFileSystem::ReadDone(uv_work_t *req, int status){
	sjs::logger::debug("Done Callback");
}

void SAMP_uvFileSystem::ReadFile(uvRequest request){
	uv_fs_t open_req;

	uv_fs_open(Server::uv_loop, &open_req, request.filename.c_str(), O_CREAT | O_RDWR, S_IRUSR | S_IWUSR,
		[](uv_fs_t *req){
			sjs::logger::debug("File Open %s", req->path);
			if (req->result < 0){
				sjs::logger::debug("File Open Error :(");
				return;
			}

			uv_fs_t read_req;

			char buf_[2048];
			uv_buf_t buf = uv_buf_init(buf_, 2048);
			sjs::logger::debug("About To Read");
			uv_fs_read(Server::uv_loop, &read_req, req->result, &buf, sizeof(buf), 0, NULL);
			
			if (read_req.result < 0){
				sjs::logger::debug("Read Error %s", uv_strerror(read_req.result));
				return;
			}

			sjs::logger::debug("Have Read");
	
			
		}
	);


	
	
	
}

void SAMP_uvFileSystem::read_cb(uv_fs_t *req){
	sjs::logger::debug("Read Callback");


	if (req->result < 0){
		sjs::logger::error("Cannot read file: %s", uv_strerror(req->result));
	
	}
	else {
		sjs::logger::debug("Success Read");
		uvRequest* request = (uvRequest*)req->data;
		uv_fs_t* open_req = (uv_fs_t*)request->data;
	
		if (request->offset < request->buf_.len){
			sjs::logger::debug("Reading Again");
			int r3 = uv_fs_read(Server::uv_loop, req, open_req->result, &request->buf_, 4096, request->offset, read_cb);
			request->offset += 4096;
		}
		else { 
			sjs::logger::debug("Before TC");
			TryCatch try_catch;
			Locker locker(request->isolate);
			Isolate::Scope isoscope(request->isolate);
			HandleScope handle_scope(request->isolate);
			sjs::logger::debug("After Scope");
			Local<Value> argv[1] = { String::NewFromUtf8(request->isolate, request->buf) };
			Local<Function> func = Local<Function>::New(request->isolate, request->callback);
			sjs::logger::debug("Before Function");
			func->Call(func, 1, argv);
			sjs::logger::debug("After Function");

			if (try_catch.HasCaught()){
				Utils::PrintException(&try_catch);
			}
			uv_fs_req_cleanup(open_req);
			uv_fs_req_cleanup(req);
			uv_fs_t close_req;
			uv_fs_close(Server::uv_loop, &close_req, open_req->result, NULL);

			//delete[] requests[req].buf;
			//requests.erase(req);
			if (close_req.result < 0){
				sjs::logger::error("Cannot close file: %s", uv_strerror(close_req.result));
			}

			uv_fs_req_cleanup(&close_req);
		}
	}
}
