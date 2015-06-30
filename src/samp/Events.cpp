#include "samp/Events.h"
#include "samp/Players.h"

#include "utils/Helpers.h"
#include "utils/Utils.h"

#include "SAMPJS.h"

#include <iostream>
#include <sstream>
#include <ostream>
#include <fstream>
#include <memory>

using namespace sampjs;
using namespace std;

void Events::Init(Local<Context> context){
	isolate = context->GetIsolate();
	string src = R"(
"use strict";

class $EVENT {
	constructor(name,fn,type){
		this.name = name;
		this.fn = fn;
		this.type = type;
	}
}		
class $EVENTS {
	constructor(){
		this.ids = {};
	}
	
	on(event, fn){
		this.addEvent(event,fn,-1);
	}

	one(event,fn){
		this.addEvent(event,fn,0);
	}

	some(event,fn,times){
		this.addEvent(event,fn,times-1);
	}

	off(event,fn){
		if(this.ids[event])
			for(var id in this.ids[event])
				if(this.ids[event][id].fn == fn)
					delete this.ids[event][id];
	}

	addEvent(event,fn,type){
		if(!this.ids[event])this.ids[event] = [];
		this.ids[event].push(new $EVENT(event,fn,type));	
	}

	fire( event ){
		var args = [];
		for(var i in arguments){
			if(i != 0) args.push(arguments[i]);
		}
		
		for(var id in this.ids[event]){
			var fn = this.ids[event][id].fn;
			var ret = fn.apply(null, args);	
			
			if(this.ids[event][id].type == 0) delete this.ids[event][id];
			else if(this.ids[event][id].type > 0) this.ids[event][id].type--;

			if(event == "PlayerCommandText" || event == "RconCommand"){
				if(ret === 1){
					return 1;
				}
			} else {
				if(ret === 0){
					return 0;
				}
			}
		}
	}
};

)";

	ifstream eventFile("js/samp.js/Event.js", std::ios::in);
	if (!eventFile){
		sjs::logger::error("Missing required file Event.js");
		SAMPJS::Shutdown();
	}
	std::string eventSource((std::istreambuf_iterator<char>(eventFile)), std::istreambuf_iterator<char>());
	SAMPJS::ExecuteCode(context, "Event.js", eventSource);

	ifstream eventsFile("js/samp.js/Events.js", std::ios::in);
	if (!eventsFile){
		sjs::logger::error("Missing required file Events.js");
		SAMPJS::Shutdown();
	}
	std::string eventsSource((std::istreambuf_iterator<char>(eventsFile)), std::istreambuf_iterator<char>());
	SAMPJS::ExecuteCode(context, "Events.js", eventsSource);

}


void Events::Shutdown(){

}

void Events::FireEvent(std::string name){
	FireEvent(name, 0, NULL);
}
void Events::FireEvent(std::string name, const int argc, Local<Value> argv[]){

	JS_SCOPE(isolate)
	JS_CTX(isolate->GetCallingContext())
	TryCatch try_catch;

	JS_Object global(isolate->GetCallingContext()->Global());

	Local<Object> serverjs = global.getObject("$server");
	Local<Value> fire = serverjs->Get(String::NewFromUtf8(isolate, "fire"));
	Local<Function> fn = Local<Function>::Cast(fire);

	if (name == "ScriptInit"){
		Local<Value> check = serverjs->Get(String::NewFromUtf8(isolate, "checkPlayers"));
		Local<Function> cpfn = Local<Function>::Cast(check);
		cpfn->Call(serverjs, 0, NULL);
	}
	Local<Value> *args = new Local<Value>[argc + 1];
	args[0] = String::NewFromUtf8(isolate, name.c_str());
	if (argc > 0){
		for (int i = 0; i < argc; i++){
			args[i + 1] = argv[i];
		}
	}
	fn->Call(serverjs, argc+1, args);

	delete[] args;

	if (try_catch.HasCaught()){
		Utils::PrintException(&try_catch);
	}
}


int Events::FireNative(std::string name, std::string param_types, std::vector<std::string> param_names, AMX* amx, cell* params){
	JS_SCOPE(isolate)
	JS_CTX(isolate->GetCallingContext())
	TryCatch try_catch;

	JS_Object global(isolate->GetCallingContext()->Global());
	Local<Object> serverjs = global.getObject("$server");
	Local<Value> fire = serverjs->Get(String::NewFromUtf8(isolate, "fire"));
	Local<Function> fn = Local<Function>::Cast(fire);

	if (fn->IsFunction()){
		Local<Value>* argv = NULL;
		unsigned int argc = param_types.length() + 1;
		argv = new Local<Value>[argc];

		argv[0] = String::NewFromUtf8(isolate, name.c_str());
		for (unsigned int i = 1; i < argc; i++){
			switch (param_types[(i - 1)]){
				case 's':{
					cell* addr = NULL;
					int len = 0;
					amx_GetAddr(amx, params[i], &addr);
					amx_StrLen(addr, &len);
					char* val = new char[len + 2];
					amx_GetString(val, addr, 0, len + 2);
					argv[i] = String::NewFromUtf8(isolate, val);

					delete[] val;

					break;
				}
				case 'i':{
					if (	param_names[i - 1] == "playerid" || 
							param_names[i - 1] == "killerid" ||
							param_names[i - 1] == "forplayerid" ||
							param_names[i - 1] == "issuerid" ||
							param_names[i - 1] == "damagedid" || 
							param_names[i - 1] == "clickedplayerid" ||
							( param_names[i - 1] == "hitid" && params[i-1] == 1)
						){
						
						int playerid = params[i];

						auto pobj = global.getObject("$players");
						auto wrap = Local<External>::Cast(pobj->GetInternalField(0));
						void* ptr = wrap->Value();
						if (ptr != NULL){
							auto players =	static_cast<Players*>(ptr);
							Local<Object> player = players->GetPlayerObject(playerid);
							
							argv[i] = player;
							if (name == "PlayerDisconnect"){
								players->RemovePlayer(playerid);
							}
						}
						else {
							argv[i] = Integer::New(isolate, params[i]);
						} 
						
					}
					else {
						argv[i] = Integer::New(isolate, params[i]);
					} 
					

					break;
				} case 'f':{
					argv[i] = Number::New(isolate, amx_ctof(params[i]));

					break;
				}
			}
		}

		Local<Value> ret = fn->Call(serverjs, argc, argv);
		delete[] argv;
		int retval = 1;
		if (try_catch.HasCaught()){
			Utils::PrintException(&try_catch);
		}
		else {
			if (ret->IsNumber()) retval = ret->Int32Value();
			else if (name == "PlayerCommandText" || name == "RconCommand") retval = 0;
		}
		return retval;
	}
	return 1;
}