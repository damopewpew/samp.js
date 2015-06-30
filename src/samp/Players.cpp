
#include "samp/Players.h"
#include "utils/Helpers.h"
#include "utils/Utils.h"
#include "Script.h"

#include "SAMPJS.h"

#include <iostream>
#include <sstream>
#include <ostream>
#include <fstream>

#include <memory> 
using namespace sampjs;
using namespace std;


void Players::Init(Local<Context> ctx) {
	sjs::logger::debug("Loading Players Module");
	isolate = ctx->GetIsolate();

	Locker v8Locker(isolate);
	Isolate::Scope isolate_scope(isolate);
	HandleScope hs(isolate);	
	context.Reset(isolate,ctx);
	Context::Scope context_scope(ctx);


	ifstream playerFile("js/samp.js/Player.js", std::ios::in);
	if (!playerFile){
		sjs::logger::error("Missing required file Player.js");
		SAMPJS::Shutdown();
	}
	std::string playerSource((std::istreambuf_iterator<char>(playerFile)), std::istreambuf_iterator<char>());
	SAMPJS::ExecuteCode(ctx, "Player.js", playerSource);

	ifstream playersFile("js/samp.js/Players.js", std::ios::in);
	if (!playersFile){
		sjs::logger::error("Missing required file Players.js");
		SAMPJS::Shutdown();
	}
	std::string playersSource((std::istreambuf_iterator<char>(playersFile)), std::istreambuf_iterator<char>());
	SAMPJS::ExecuteCode(ctx, "Players.js", playersSource);
	
	SAMPJS::ExecuteCode(ctx, "$players", R"(var $players = new Players(); 
$players[Symbol.iterator] = function* (){
	for(var i in this){
		yield this.getPlayer(i);	
	}
};
)", 6);
}

void Players::Shutdown(){
	// Do Cleanup

	context.Reset();
}

void Players::CreatePlayer(const FunctionCallbackInfo<Value> & args){
//	auto server = Server::GetInstance(args.GetIsolate()->GetCallingContext());
//	auto players = dynamic_pointer_cast<Players>(server->GetModule("players"));

	JS_Object global(args.GetIsolate()->GetCallingContext()->Global());
	
	Local<Object> players = global.getObject("$players");

//	players->AddPlayer(args[0]->Int32Value());
}

Local<Object> Players::GetPlayerObject(int playerid){
	TryCatch try_catch;
	Locker v8Locker(isolate);
	Isolate::Scope isolate_scope(isolate);
	EscapableHandleScope handle_scope(isolate);
	JS_CONTEXT(isolate, context)

	JS_Object global(isolate->GetCallingContext()->Global());
	if (playerid == 65535){ //INVALID_PLAYER_ID
		Local<Object> val = global.getObject("$PLAYER");
		return handle_scope.Escape(val);
	}
	Local<Value> val = global.getObject("$players")->Get(playerid);

	if (val->IsObject()){
		Local<Object> player = Local<Object>::Cast(val);
		if (try_catch.HasCaught()){
			isolate->CancelTerminateExecution();
			Utils::PrintException(&try_catch);
		}
		return handle_scope.Escape(player);
	}
	else {
		AddPlayer(playerid);
		Local<Object> player = GetPlayerObject(playerid);
		if (try_catch.HasCaught()){
			isolate->CancelTerminateExecution();
			Utils::PrintException(&try_catch);
		} 
		return handle_scope.Escape(player);
	} 



}

void Players::AddPlayer(int playerid){
	Local<Context> ctx = Local<Context>::New(isolate, context);
	JS_Object global(ctx->Global());

	Local<Integer> playerido = Integer::New(isolate, playerid);
	Local<Object> obj = global.getObject("$PLAYER");
	obj->Set(String::NewFromUtf8(isolate, "id"), playerido);
	global.getObject("$players")->Set(playerid, obj); 
}

void Players::RemovePlayer(int playerid){
	Local<Context> ctx = Local<Context>::New(isolate, context);
	JS_Object global(ctx->Global());
	global.getObject("$players")->Delete(playerid);
}