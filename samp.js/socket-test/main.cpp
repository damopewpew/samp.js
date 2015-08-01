#include <ctime>
#include <iostream>
#include <string>
#include <boost/array.hpp>
#include <boost/asio.hpp>

using namespace boost::asio::ip;


void connect_handler(const boost::system::error_code& ec, boost::asio::ip::tcp::resolver::iterator i){
	printf("Connected!");
}

int main(){
	try {
		boost::asio::io_service io_service;

		tcp::resolver resolver(io_service);

		tcp::resolver::query query("irc.tl", "6667");

		tcp::resolver::iterator endpoint_iterator = resolver.resolve(query);

		tcp::socket socket(io_service);

		
		boost::asio::async_connect(socket, endpoint_iterator, &connect_handler);

		io_service.run();

	
	}
	catch (std::exception& e){

	}
}