#ifndef __SAMPJS_SOCKET__
#define __SAMPJS_SOCKET__

#include "Server.h"
#include <boost/asio.hpp>



namespace sampjs {
	class Sockets;

	struct Socket_Settings {
		int type = 0;
		size_t read_amount = 1024;
		std::string delimiter = "\n";	
	};
	class Socket : public JS_Module {
	public:
		Socket(Local<Object> self, Sockets *sockets, boost::asio::io_service& io_service);

		static Socket *Instance(Local<Object> holder);
		static void JS_Socket(const FunctionCallbackInfo<Value> & args);
		
		// Event Functions
		static void JS_On(const FunctionCallbackInfo<Value> & args);
		static void JS_Fire(const FunctionCallbackInfo<Value> & args);

		void Fire(std::string name);
		void Fire(std::string name, const int argc, Local<Value> argv[]);

		static void JS_Connect(const FunctionCallbackInfo<Value> & args);
		static void JS_Close(const FunctionCallbackInfo<Value> & args);
		static void JS_Send(const FunctionCallbackInfo<Value> & args);


		void Connect(std::string hostname, std::string port, Socket_Settings settings);

		void Close();

		void Read();
		void Read(size_t size);
		void Read(std::string delimiter);
		void Send(std::string data);
		void OnRead(boost::system::error_code ec, std::size_t length);
		
		
		
	private:

		std::string hostname;
		std::string port;
		Socket_Settings settings;
		
		Persistent<Object> self_;
		Isolate *isolate;
		Sockets *sockets;

		boost::asio::ip::tcp::socket socket_;
		boost::asio::streambuf response;
		boost::asio::streambuf request;
		
	
		


	};



};

#endif;