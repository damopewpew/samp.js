#include "io/Sockets.h"

#include "utils/Helpers.h"
#include "utils/Utils.h"

#include <thread>
#include <future>

using namespace sampjs;
using namespace boost::asio;
using namespace boost::asio::ip;
using namespace std;





Sockets::Sockets() :mService() {
	socket_id = 0;
	work = std::make_shared<io_service::work>(mService);
	sjs::logger::debug("Sockets Created");
	thread = std::thread([this](){
		sjs::logger::debug("Thread Started");
		
		this->mService.run();
		sjs::logger::debug("Running Finished");
	});
}

void Sockets::Init(Local<Context> ctx){

	isolate = ctx->GetIsolate();

	V8CONTEXT(isolate,ctx)
	context.Reset(isolate, ctx);

	Local<ObjectTemplate> templ = ObjectTemplate::New(isolate);

	templ->SetInternalFieldCount(1);

	Local<Object> obj = templ->NewInstance();

	Local<FunctionTemplate> func = FunctionTemplate::New(isolate, Sockets::JS_Socket);
	obj->Set(String::NewFromUtf8(isolate, "socket"), func->GetFunction());

	obj->SetInternalField(0, External::New(isolate,this));
	
	JS_Object global(ctx->Global());
	global.Set("$io", obj);
}

void Sockets::Shutdown(){
	for (auto socket : sockets){
		if (socket.second->getType() == 1)
			((ClientSocket*)socket.second)->socket.close();

		else if (socket.second->getType() == 2)
			((ServerSocket*)socket.second)->socket.close();
	}
	work.reset();
	mService.stop();
	thread.join();
	context.Reset();
}

Sockets *Sockets::Instance(Local<Object> holder){
	JS_Object global(holder->CreationContext()->Global());
	Local<Object> self = global.getObject("$io");
	Local<External> wrap = Local<External>::Cast(self->GetInternalField(0));
	void* ptr = wrap->Value();
	Sockets *sockets = (Sockets*)(ptr);
	return sockets;
}

void Sockets::JS_Socket(const FunctionCallbackInfo<Value> & args){
	sjs::logger::debug("Creating Socket!!!");
	auto sockets = Instance(args.Holder());

	sjs::logger::debug("Calling Socket Function");
	Local<Object> sock = sockets->CreateSocket();
	args.GetReturnValue().Set(sock);
}

void Sockets::JS_Connect(const FunctionCallbackInfo<Value> &args){
	if (args.Length() < 2){
		return;
	}
	auto sockets = Instance(args.Holder());

	int id = args.Holder()->Get(String::NewFromUtf8(args.GetIsolate(), "socket_id"))->Int32Value();
	string hostname = JS2STRING(args[0]);
	string port = JS2STRING(args[1]);
	Socket_Settings my_settings;

	if (args.Length() > 2){
		if (args[2]->IsInt32()){
			my_settings.type = 1;
			my_settings.read_amount = args[2]->Int32Value();
		}
		else if (args[2]->IsString()){
			my_settings.type = 2;
			my_settings.delimiter = JS2STRING(args[2]);
		}
		else if (args[2]->IsObject()){
			auto settings = Local<Object>::Cast(args[2]);
			my_settings.type = settings->Get(String::NewFromUtf8(args.GetIsolate(), "type"))->Int32Value();
			my_settings.read_amount = settings->Get(String::NewFromUtf8(args.GetIsolate(), "size"))->Int32Value();
			my_settings.delimiter = JS2STRING(settings->Get(String::NewFromUtf8(args.GetIsolate(), "delimiter")));
		}
	}

	sockets->Connect(id, hostname, port, my_settings);
}

void Sockets::JS_Listen(const FunctionCallbackInfo<Value> & args){

	if (args.Length() < 1){
		return;
	}

	sjs::logger::debug("Listening JS");
	auto sockets = Instance(args.Holder());
	int id = args.Holder()->Get(String::NewFromUtf8(args.GetIsolate(), "socket_id"))->Int32Value();
	int port = args[0]->Int32Value();

	sockets->Listen(id, port);
}

void Sockets::JS_Close(const FunctionCallbackInfo<Value> & args){
	auto sockets = Instance(args.Holder());
	int id = args.Holder()->Get(String::NewFromUtf8(args.GetIsolate(), "socket_id"))->Int32Value();
	sockets->Close(id);
}

void Sockets::JS_Send(const FunctionCallbackInfo<Value> & args){
	if (args.Length() < 1){
		return;
	}
	auto sockets = Instance(args.Holder());
	int id = args.Holder()->Get(String::NewFromUtf8(args.GetIsolate(), "socket_id"))->Int32Value();

	string data = JS2STRING(args[0]);
	sockets->Send(id, data);
}


Local<Object> Sockets::CreateSocket(){
	sjs::logger::debug("Creating Socket???");
	int id = socket_id++;

	Socket* sock = new Socket(id);
	
	sockets[id] = sock;

	Locker v8locker(isolate);
	Isolate::Scope isoscope(isolate);
	EscapableHandleScope hs(isolate);
	Local<Context> ctx = Local<Context>::New(isolate, context);
	Context::Scope cs(ctx);

	JS_Object global(ctx->Global());

	JS_Object socket(isolate);
	Local<Array> ids = Array::New(isolate, 0);
	socket.Set("ids", ids);
	socket.Set("socket_id", (Local<Value>)Integer::New(isolate, id));
	socket.Set("connect", Sockets::JS_Connect);
	socket.Set("listen", Sockets::JS_Listen);
	socket.Set("send", Sockets::JS_Send);
	socket.Set("close", Sockets::JS_Close);
	// Find delete handler for V8 Objects to remove socket from map on delete
	socket.get()->SetPrototype(global.getObject("$server")->GetPrototype());

	// Need to create the ids array for events due to a class extends quirk
	sock->self.Reset(isolate, socket.get());
	sjs::logger::debug("Created Socket with ID: %i", id);
	return hs.Escape(socket.get());
}

void Sockets::Connect(int id, string hostname, string port, Socket_Settings settings){
	Socket *socket = sockets[id];
	//Convert to ClientSocket
	ClientSocket *csocket = new ClientSocket(socket, tcp::socket(mService));
	csocket->hostname = hostname;
	csocket->port = port;
	csocket->settings = settings;
	sockets[id] = csocket;

	tcp::resolver resolver(mService);
	tcp::resolver::query query(csocket->hostname, csocket->port);

	boost::system::error_code ec;
	auto endpoint_iterator = resolver.resolve(query, ec);

	if (ec){
		sjs::logger::debug("Query %s:%s could not be resolved", csocket->hostname.c_str(), csocket->port.c_str());
	}
	else {
		sjs::logger::debug("Query Resolved %s:%s", csocket->hostname.c_str(), csocket->port.c_str());

		async_connect(csocket->socket, endpoint_iterator, [this,csocket](boost::system::error_code ec, tcp::resolver::iterator it){
			if (!ec){
				sjs::logger::debug("Socket Connected");
				
				V8PCONTEXT(isolate, context)
				auto self = Local<Object>::New(isolate, csocket->self);
				JS_Fire(self, "connect");

				switch (csocket->settings.type){
					case 0:
						this->Read(csocket);
						break;
					case 1:
						this->Read(csocket, csocket->settings.read_amount);
						break;
					case 2:
						this->Read(csocket, csocket->settings.delimiter);
						break;
				}
			}
			else {
				V8PCONTEXT(isolate, context)
				Local<Value> argv[1] = { String::NewFromUtf8(isolate, ec.message().c_str()) };
				auto self = Local<Object>::New(isolate, csocket->self);
				JS_Fire(self, "connect", 1, argv);
				sjs::logger::debug("Could not connect");
			}
		});
	}
}

void Sockets::Listen(int id, int port){
	auto socket = sockets[id];
	auto ssocket = new ServerSocket(socket, tcp::socket(mService));
	sockets[id] = ssocket;
	ssocket->port = port;
	tcp::endpoint endpoint(tcp::v4(), port);
	ssocket->acceptor = new tcp::acceptor(mService, endpoint);
	ssocket->acceptor->listen();
	Do_Listen(id);
	
}

void Sockets::Do_Listen(int id){
	auto socket = (ServerSocket*)sockets[id];
	socket->acceptor->async_accept(socket->socket,
	[this, socket](const boost::system::error_code &ec){
		if (!ec){
			tcp::socket sock = std::move(socket->socket);
			string clientip = sock.remote_endpoint().address().to_string();
			if (sock.is_open()){
				sjs::logger::debug("Socket Open: %s", clientip.c_str());
			}

		}
		Do_Listen(socket->id);
	});
}

void Sockets::Close(int id){
	auto socket = sockets[id];
	
	if(socket->getType() == 1) ((ClientSocket*)socket)->socket.close();
	else if (socket->getType() == 2) ((ServerSocket*)socket)->socket.close();

	V8PCONTEXT(isolate, context)
	auto self = Local<Object>::New(isolate, socket->self);
	JS_Fire(self, "close");
}

void Sockets::Read(ClientSocket *socket){
	boost::asio::streambuf::mutable_buffers_type mutableBuffer = socket->response.prepare(4096);
	socket->socket.async_read_some(
		boost::asio::buffer(mutableBuffer),
		std::bind(
			&Sockets::ReadEvent,
			this,
			socket,
			std::placeholders::_1,
			std::placeholders::_2
		)
	);
}

void Sockets::Read(ClientSocket *socket, size_t size){
	async_read(
		socket->socket,
		socket->response,
		std::bind(
			&Sockets::ReadEvent,
			this,
			socket,
			std::placeholders::_1,
			std::placeholders::_2
		)
	);
}

void Sockets::Read(ClientSocket *socket, std::string delimiter){
	async_read_until(
		socket->socket,
		socket->response,
		delimiter,
		std::bind(
			&Sockets::ReadEvent,
			this,
			socket,
			std::placeholders::_1, 
			std::placeholders::_2
		)
	);
}

void Sockets::ReadEvent(ClientSocket *socket, boost::system::error_code ec, size_t bytes_transferred){
	if (!ec){
		string data(
			buffers_begin(socket->response.data()),
			buffers_begin(socket->response.data()) + bytes_transferred
			);

		socket->response.consume(bytes_transferred);
		V8PCONTEXT(isolate, context);
		auto self = Local<Object>::New(isolate, socket->self);
		Local<Value> argv[1] = { String::NewFromUtf8(isolate, data.c_str()) };
		JS_Fire(self, "data", 1, argv);

		if (socket->settings.type == 0){
			Read(socket);
		}
		else if (socket->settings.type == 1){
			Read(socket, socket->settings.read_amount);
		}
		else if (socket->settings.type == 2){
			Read(socket, socket->settings.delimiter);
		}
		
	}
	else {
		if (ec == error::eof){
			V8PCONTEXT(isolate, context);
			auto self = Local<Object>::New(isolate, socket->self);
			JS_Fire(self, "close");
		}
		else {
			V8PCONTEXT(isolate, context);
			auto self = Local<Object>::New(isolate, socket->self);
			Local<Value> argv[1] = { String::NewFromUtf8(isolate, ec.message().c_str()) };
			JS_Fire(self, "error", 1, argv);
		}
	}

}

void Sockets::Send(int id, string data){
	auto socket = (ClientSocket*)sockets[id];
	ostream request_stream(&socket->request);
	request_stream << data;
	async_write(
	socket->socket, 
	socket->request, 
	[this, socket](boost::system::error_code ec, size_t bytes_transferred){
		if (ec){
			V8PCONTEXT(isolate, context);
			auto self = Local<Object>::New(isolate, socket->self);
			Local<Value> argv[1] = { String::NewFromUtf8(isolate, ec.message().c_str()) };
			JS_Fire(self, "error", 1, argv);
		}
	});
}


void Sockets::JS_Fire(Local<Object> sock, string name, const int argc, Local<Value> argv[]){
	V8PCONTEXT(isolate, context)
	TryCatch try_catch;
	JS_Object socket(sock);
	auto jsfire = Local<Function>::Cast(socket.getValue("fire"));
	
	Local<Value> *args = new Local<Value>[argc + 1];
	args[0] = String::NewFromUtf8(isolate, name.c_str());
	if (argc > 0){
		for (int i = 0; i < argc; i++){
			args[i + 1] = argv[i];
		}
	}
	jsfire->Call(socket.get(), argc+1, args);

	delete[] args;

	if (try_catch.HasCaught()){
		isolate->CancelTerminateExecution();
		Utils::PrintException(&try_catch);
	}
}