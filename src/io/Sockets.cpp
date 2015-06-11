#include "io/Sockets.h"
#include "io/Socket.h"

#include "utils/Helpers.h"

#include <thread>
#include <future>

using namespace sampjs;
using namespace boost::asio;


Sockets::Sockets(Server *server):io_service(){
	thread = std::thread([this](){
		sjs::logger::debug("sockets async started");
		work.reset(new io_service::work(io_service));
		this->io_service.run();
		sjs::logger::debug("sockets async ended");
	});
	JS_SCOPE(server->GetIsolate())
	JS_CONTEXT(server->GetIsolate(), server->_context)

	Local<ObjectTemplate> templ = ObjectTemplate::New(server->GetIsolate());

	templ->SetInternalFieldCount(0);

	Local<Object> obj = templ->NewInstance();


	Local<FunctionTemplate> func = FunctionTemplate::New(server->GetIsolate(), Socket::JS_Socket);
	obj->Set(String::NewFromUtf8(server->GetIsolate(), "socket"), func->GetFunction());

	server->SetGlobalObject("$io", obj);


	sjs::logger::debug("sockets async about started");

}

void Sockets::Shutdown(){
	sjs::logger::debug("Shutting Down my sockets");
	work.reset();
	io_service.stop();
	thread.join();
}

Sockets::~Sockets(){
	sjs::logger::debug("Shutting Down Socket");
	work.reset();
	thread.join();
}

/*io_service *Sockets::GetService(){
	if (io_service == nullptr){
		io_service = new boost::asio::io_service;
		auto future = std::async(std::launch::async, [](){
			sjs::logger::debug("Running Async Socket");
			io_service::work work(*io_service);
			io_service->run();
		});
	}
	return io_service;
} */
