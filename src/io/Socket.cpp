#include "io/Socket.h"
#include "io/Sockets.h"

#include "utils/Helpers.h"
#include "utils/Utils.h"

#include <boost/asio.hpp>
#include <functional>
#include <future>

using namespace sampjs;

using namespace boost::asio;
using namespace boost::asio::ip;

Socket::Socket(Local<Object> self, Sockets *sockets, boost::asio::io_service& io_service )
	:socket_(io_service),
	sockets(sockets){


	isolate = self->GetIsolate();
	this->self_.Reset(self->GetIsolate(), self);

	// Get Socket Parent
	Server *server = Server::GetInstance(self->GetIsolate()->GetCallingContext());
	

}

void Socket::JS_Socket(const FunctionCallbackInfo<Value> & args){
	Server *server = Server::GetInstance(args.GetIsolate()->GetCallingContext());
	Module *module = server->GetModule("$sockets");
	Sockets *sockets = (Sockets*)(module);

	if (!args.IsConstructCall()){
		sjs::logger::error("$io.socket() can only be called as a constructor. Please use var socket = new $io.socket()");
		return;
	}
	
	JSObjectTemplate socket_tmpl(args.GetIsolate());
	socket_tmpl.GetRaw()->SetInternalFieldCount(1);
	/*
	 * Setup Event system - Should probably be made into its own interface/class
	 */
	socket_tmpl.Set("on", Socket::JS_On);
	socket_tmpl.Set("fire", Socket::JS_Fire);
	socket_tmpl.Set("ids", Object::New(args.GetIsolate()));

	/*
	 * Setup socket functions
	 */

	socket_tmpl.Set("connect", Socket::JS_Connect);
	socket_tmpl.Set("send", Socket::JS_Send);
	socket_tmpl.Set("close", Socket::JS_Close);


	Local<Object> sock = socket_tmpl.GetRaw()->NewInstance();
	Socket *socket = new Socket(sock, sockets, sockets->io_service );

	sock->SetInternalField(0, External::New(args.GetIsolate(), socket));

	args.GetReturnValue().Set(sock);

}

Socket *Socket::Instance(Local<Object> holder){
	Local<External> wrap = Local<External>::Cast(holder->GetInternalField(0));

	void *ptr = wrap->Value();

	Socket *socket = static_cast<Socket *>(ptr);

	return socket;
}

void Socket::JS_Connect(const FunctionCallbackInfo<Value> & args){

	Socket *socket = Socket::Instance(args.Holder());

	sjs::logger::debug("Connecting");

	if (args.Length() < 2){
		return;
	}

	std::string hostname = JS2STRING(args[0]);
	std::string port = JS2STRING(args[1]);
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
			Local<Object> settings = Local<Object>::Cast(args[2]);
			my_settings.type = settings->Get(String::NewFromUtf8(args.GetIsolate(), "type"))->Int32Value();
			my_settings.read_amount = settings->Get(String::NewFromUtf8(args.GetIsolate(), "size"))->Int32Value();
			my_settings.delimiter = JS2STRING(settings->Get(String::NewFromUtf8(args.GetIsolate(), "delimiter")));
		}
	}

	sjs::logger::debug("Connecting to: %s:%s", hostname.c_str(), port.c_str());
	socket->Connect(hostname, port, my_settings);
}
void Socket::JS_Close(const FunctionCallbackInfo<Value> & args){
	Socket *sock = Socket::Instance(args.Holder());

	sock->Close();
}

void Socket::Close(){
	socket_.close();
}

void Socket::Connect(std::string hostname, std::string port, Socket_Settings settings){


	this->hostname = hostname;
	this->port = port;
	this->settings = settings;

	
	if (sockets->io_service.stopped()) sjs::logger::debug("Service Stopped :(");
	tcp::resolver resolver(sockets->io_service);

	tcp::resolver::query query(hostname, port);

	boost::system::error_code ec;
	tcp::resolver::iterator endpoint_iterator = resolver.resolve(query,ec);


	if (ec){
		sjs::logger::debug("Query could not be resolved");
	}
	else {
	
		async_connect(socket_, endpoint_iterator, [this](boost::system::error_code ec, tcp::resolver::iterator it){
			
			if (!ec){
				sjs::logger::debug("Socket Connected");
				this->Fire("connect");
				
				switch (this->settings.type){
				case 0:
					this->Read();
					break;
				case 1:
					this->Read(this->settings.read_amount);
					break;
				case 2:
					this->Read(this->settings.delimiter);
					break;
				}
			}
			else {
				sjs::logger::debug("Error Connecting: %s", ec.message().c_str());
			}
		}); 
	}
}

void Socket::JS_Send(const FunctionCallbackInfo<Value> & args){
	Socket *sock = Socket::Instance(args.Holder());
	std::string data = JS2STRING(args[0]);

	sock->Send(data);
	
}

void Socket::Send(std::string data){
	std::ostream request_stream(&request);
	request_stream << data;

	async_write(this->socket_, request, [this](boost::system::error_code ec, std::size_t /*length*/){
	});
}

void Socket::Read(){
	async_read(this->socket_, this->response, boost::asio::transfer_at_least(1), [this](boost::system::error_code ec, std::size_t length){
		if (!ec){
			std::istream response_stream(&this->response);
			std::string data;
			response_stream >> data;
			sjs::logger::debug("%s", data.c_str());
			this->Read();
		}
		else {
			if (ec == boost::asio::error::eof){
				// End of File
				this->Fire("close");
			}
			else {
				Local<Value> argv[1] = { String::NewFromUtf8(this->isolate, ec.message().c_str()) };
				this->Fire("error", 1, argv);
			}
		}
	});
}

void Socket::Read(size_t size){

}

void Socket::Read(std::string delimiter){
	async_read_until(this->socket_, this->response, delimiter, [this](boost::system::error_code ec, std::size_t length){

		if (!ec){
			std::string data(buffers_begin(this->response.data()), buffers_begin(this->response.data()) + length);
			this->response.consume(length);
			JS_SCOPE(this->isolate);
			Local<Value> argv[1] = { String::NewFromUtf8(this->isolate, data.c_str()) };
			this->Fire("data", 1, argv);
			this->Read(this->settings.delimiter);
		}
		else {
			if (ec == boost::asio::error::eof){
				sjs::logger::debug("Read EOF");
				// End of File
				this->Fire("close");
			}
			else {
				sjs::logger::debug("Read Error");
				JS_SCOPE(this->isolate);
				Local<Value> argv[1] = { String::NewFromUtf8(this->isolate, ec.message().c_str()) };
				this->Fire("error", 1, argv);
			}
		}
	});
}


void Socket::JS_On(const FunctionCallbackInfo<Value> & args){
	Socket *socket = Instance(args.Holder());

	if (args.Length() < 2){
		return;
	}

	Local<Object> ids = Local<Object>::Cast(args.Holder()->Get(String::NewFromUtf8(args.GetIsolate(), "ids")));

	if (!ids->Get(args[0]->ToString())->IsArray()){
		sjs::logger::debug("Array doesn't exist, creating");
		ids->Set(args[0]->ToString(), Array::New(args.GetIsolate(), 0));
	}

	Local<Array> ar = Local<Array>::Cast(ids->Get(args[0]->ToString()));
	sjs::logger::debug("Array On Size: %i", ar->Length());
	ar->Set(ar->Length(), args[1]);
}

void Socket::JS_Fire(const FunctionCallbackInfo<Value> & args){
	if (args.Length() < 1){
		return;
	}
	TryCatch try_catch;
	/*Local<Object> ids = Local<Object>::Cast(args.Holder()->Get(String::NewFromUtf8(args.GetIsolate(), "ids")));
	Local<Array> ar = Local<Array>::Cast(ids->Get(args[0]->ToString())); */
	Local<Value> *argv = new Local<Value>[args.Length() - 1];
	if (args.Length() > 1){
		for (int i = 0; i < args.Length()-1; i++){
			argv[i] = args[i + 1];
		}
	}
	std::string eventName = JS2STRING(args[0]);
	Socket *socket = Socket::Instance(args.Holder());
	socket->Fire(eventName, args.Length() - 1, argv);
/*	for (int i = 0; i < ar->Length(); i++){
		if (ar->Get(i)->IsFunction()){

			Local<Function>::Cast(ar->Get(i))->Call(args.Holder(), args.Length()-1, argv );
		}
	} */

	if (try_catch.HasCaught()){
		args.GetIsolate()->CancelTerminateExecution();
		Utils::PrintException(&try_catch);
	}
}

void Socket::Fire(std::string name){
	Fire(name, 0, NULL);
}
void Socket::Fire(std::string name, const int argc, Local<Value> argv[]){
	
	JS_SCOPE(isolate)
	TryCatch try_catch;
	Local<Object> self = Local<Object>::New(isolate, self_);

	Local<Object> ids = Local<Object>::Cast(self->Get(String::NewFromUtf8(isolate, "ids")));
	Local<Array> ar = Local<Array>::Cast(ids->Get(String::NewFromUtf8(isolate,name.c_str())));
	for (uint32_t i = 0; i < ar->Length(); i++){
		if (ar->Get(i)->IsFunction()){
			Local<Function>::Cast(ar->Get(i))->Call(self, argc, argv);
		}
	}

	if (try_catch.HasCaught()){
		Utils::PrintException(&try_catch);
	}
}
