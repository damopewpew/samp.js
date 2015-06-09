#ifndef __SAMP_PLAYERS__
#define __SAMP_PLAYERS__

#include "Server.h"


#include <map>

namespace sampjs {
	class Players : public Module {
	public:

		Players(Server* sampjs);
		void GetPlayer(const FunctionCallbackInfo<Value> & args);

		static void CreatePlayer(const FunctionCallbackInfo<Value> & args);

		Local<Object> GetPlayerObject(int playerid);

		void AddPlayer(int playerid);
		void RemovePlayer(int playerid);

	private:
		Server *_sampjs;
		Persistent<Object> playerObj;
	};
};

#endif