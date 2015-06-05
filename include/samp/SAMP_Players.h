#ifndef __SAMP_PLAYERS__
#define __SAMP_PLAYERS__

#include "SAMP_JS.h"
#include "SAMP_Player.h"


#include <map>

class SAMP_Players : public SAMP_Module {
public:

	SAMP_Players(SAMP_JS* sampjs);
	void GetPlayer(const FunctionCallbackInfo<Value> & args);

	static void CreatePlayer(const FunctionCallbackInfo<Value> & args);

	Local<Object> GetPlayerObject(int playerid);

	void AddPlayer(int playerid);
	void RemovePlayer(int playerid);

private:
	SAMP_JS* _sampjs;
	Persistent<Object> playerObj;
};

#endif