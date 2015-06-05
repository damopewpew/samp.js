#ifndef __SAMP_PLAYER__
#define __SAMP_PLAYER__

#include "include/v8.h"
#include "include/libplatform/libplatform.h"

#include "SAMP_JS.h"

#include "sdk.h"

#include <list>
typedef int(*amx_Function_t)(AMX * amx, cell * params);

using namespace v8;

struct Vector3 {
	float x;
	float y;
	float z;

	Vector3(){
		x = 0.0;
		y = 0.0;
		z = 0.0;
	}
	Vector3(float _x, float _y, float _z){
		x = _x;
		y = _y;
		z = _z;
	}
};

class SAMP_Player {
public:
	static int player_gname_idx;
	static int player_sname_idx;
	static int player_gpos_idx;
	static int player_spos_idx;
	static std::list<SAMP_Player*> players;
	std::string _name;
	
	Vector3 _position;
	float _angle;

	static Local<Object> CreatePlayer(int playerid, SAMP_JS *sampjs);
	static void Get(Local<String> name, const PropertyCallbackInfo<Value>& info);
	static void Set(Local<String> name, Local<Value> value, const PropertyCallbackInfo<Value>& info);

	static void GetName(const v8::FunctionCallbackInfo<v8::Value>& args);
	static void GetPos(const v8::FunctionCallbackInfo<v8::Value>& args);

	static void SetPos(const v8::FunctionCallbackInfo<v8::Value>& args);

	static void ValueOf(const v8::FunctionCallbackInfo<v8::Value>& args);

	Local<Object> GetPos(Isolate *isolate);
	SAMP_Player(int playerid, AMX* amx);

	std::string GetPlayerName(Isolate* isolate);
	void SetPlayerName(Isolate* isolate, Local<Value> value);

	Vector3 GetPosition(Isolate* isolate);
	float GetAngle(Isolate* isolate);
	void SetPosition(Isolate* isolate, Vector3 pos);
	void SetAngle(Isolate* isolate, float angle);

private:
	AMX* _amx;
	int _playerid;
};


#endif