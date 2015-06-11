#ifndef __SAMPJS_SOCKETS__
#define __SAMPJS_SOCKETS__

#include "Server.h"

#include <boost/asio.hpp>
#include <thread>
#include <memory>

namespace sampjs {
	class Sockets : public Module {
	public:
		Sockets(Server *server);
		~Sockets();
		virtual void Shutdown();

		//static boost::asio::io_service *GetService();

		boost::asio::io_service io_service;

	private:
		std::thread thread;
		std::auto_ptr<boost::asio::io_service::work> work;
	};


};

#endif;