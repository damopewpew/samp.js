#ifndef __SAMPJS_SOCKETS__
#define __SAMPJS_SOCKETS__

#include "Module.h"

#include <boost/asio.hpp>
#include <thread>
#include <memory>


using namespace std;

namespace sampjs {
	struct Socket_Settings {
		int type = 0;
		size_t read_amount = 1024;
		std::string delimiter = "\n";
	};

	class Socket {
	public:
		virtual int getType(){ return 0; }
		int id;
		
		Persistent<Object, CopyablePersistentTraits<Object>> self;
		Socket(int id) {
			this->id = id;
		}
	};

	class ClientSocket: public Socket {
	public:
		virtual int getType(){ return 1; }
		boost::asio::streambuf response;
		boost::asio::streambuf request;
		Socket_Settings settings;
		std::string hostname = "127.0.0.1";
		std::string port = "HTTP";
		boost::asio::ip::tcp::socket socket;
		ClientSocket(Socket* sock, boost::asio::ip::tcp::socket socket_ ) 
			:Socket(sock->id), socket(std::move(socket_)){
			this->self = sock->self;
		}
	};

	class ServerSocket : public Socket {
	public:
		virtual int getType(){ return 2; }
		boost::asio::ip::tcp::acceptor* acceptor;
		int port = 0;
		boost::asio::ip::tcp::socket socket;
		ServerSocket(Socket* sock, boost::asio::ip::tcp::socket socket_)
			: Socket(sock->id), socket(std::move(socket_)){
			this->self = sock->self;
		}
	};

	class Sockets : public Module {
	public:
		Sockets();

		virtual void Init(Local<Context> context);
		virtual void Shutdown();
		virtual void Tick(){}

		static Sockets * Instance(Local<Object> holder);

		static void JS_Socket(const FunctionCallbackInfo<Value> & args);
		static void JS_Connect(const FunctionCallbackInfo<Value> & args);
		static void JS_Listen(const FunctionCallbackInfo<Value> & args);
		static void JS_Close(const FunctionCallbackInfo<Value> & args);
		static void JS_Send(const FunctionCallbackInfo<Value> & args);

		Local<Object> CreateSocket();

		void Connect(int id,string hostname,string port, Socket_Settings settings);
		void Listen(int id, int port);
		void Do_Listen(int id);
		void Close(int id);

		void Read(ClientSocket *socket);
		void Read(ClientSocket *socket, size_t size);
		void Read(ClientSocket *socket, string delimiter);

		void ReadEvent(ClientSocket *socket, boost::system::error_code ec, size_t bytes_transferred);

		void Send(int id, string data);

		void JS_Fire(Local<Object> sock, std::string name, const int argc=0, Local<Value> argv[]=NULL);

		boost::asio::io_service mService;
		std::shared_ptr<boost::asio::io_service::work> work;

	private:
		
		Isolate *isolate;
		Persistent<Context, CopyablePersistentTraits<Context>> context;
		std::thread thread;

		std::map<int,Socket*> sockets;
		int socket_id;
		
	};


};

#endif;