#include "samp/Events.h"
#include "Server.h"

#include "samp/Players.h"

#include "utils/Helpers.h"
#include "utils/Utils.h"

using namespace sampjs;

Events::Events(Server*sampjs) :_sampjs(sampjs){
	std::string src = R"(

function mixin( obj1, obj2 ){
	var result = new obj1();
	for(var property in obj2){
		if(obj2.hasOwnProperty(property)){
					
			result[property] = obj2[property];
			}
	}
	return result;
}
			

function $EVENTS(){

}

$EVENTS.prototype = {
	ids: {},
	on: function(events, fn){
		if(!this.ids[events])this.ids[events] = [];
		this.ids[events].push(fn);
	},
	
	fire: function(event ){
		var args = [];
		for(var i in arguments){
			if(i != 0) args.push(arguments[i]);
		}
		
		for(var id in this.ids[event]){
			var fn = this.ids[event][id];
			var ret = fn.apply(null, args);	
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

var $events = new $EVENTS();

)";
	Local<String> source = String::NewFromUtf8(sampjs->GetIsolate(), src.c_str());
	Local<String> name = String::NewFromUtf8(sampjs->GetIsolate(), "[events.js]");

	Local<Script> script = Script::Compile(source, name);

	Local<Object>::Cast(script->Run());

}

void Events::FireEvent(std::string name){
	FireEvent(name, 0, NULL);
}
void Events::FireEvent(std::string name, const int argc, Local<Value> argv[]){

	JS_SCOPE(_sampjs->GetIsolate())
	JS_CONTEXT(_sampjs->GetIsolate(), _sampjs->_context)
	TryCatch try_catch;
	Local<Object> server = _sampjs->GetGlobalObject("$server");
	Local<Value> fire = server->Get(String::NewFromUtf8(_sampjs->GetIsolate(), "fire"));
	Local<Function> fn = Local<Function>::Cast(fire);

	if (name == "ScriptInit"){
		Local<Value> check = server->Get(String::NewFromUtf8(_sampjs->GetIsolate(), "checkPlayers"));
		Local<Function> cpfn = Local<Function>::Cast(check);
		cpfn->Call(server, 0, NULL);
	}
	Local<Value> *args = new Local<Value>[argc + 1];
	args[0] = String::NewFromUtf8(_sampjs->GetIsolate(), name.c_str());
	if (argc > 0){
		for (int i = 0; i < argc; i++){
			args[i + 1] = argv[i];
		}
	}
	fn->Call(server, argc+1, args);

	delete[] args;

	if (try_catch.HasCaught()){
		Utils::PrintException(&try_catch);
	}
}


int Events::FireNative(std::string name, std::string param_types, std::vector<std::string> param_names, AMX* amx, cell* params){
	JS_SCOPE(_sampjs->GetIsolate())
	JS_CONTEXT(_sampjs->GetIsolate(), _sampjs->_context)
	TryCatch try_catch;
	Local<Object> server = _sampjs->GetGlobalObject("$server");
	Local<Value> fire = server->Get(String::NewFromUtf8(_sampjs->GetIsolate(), "fire"));
	Local<Function> fn = Local<Function>::Cast(fire);

	if (fn->IsFunction()){
		Local<Value>* argv = NULL;
		unsigned int argc = param_types.length() + 1;
		argv = new Local<Value>[argc];

		argv[0] = String::NewFromUtf8(_sampjs->GetIsolate(), name.c_str());
		for (unsigned int i = 1; i < argc; i++){
			switch (param_types[(i - 1)]){
				case 's':{
					cell* addr = NULL;
					int len = 0;
					amx_GetAddr(amx, params[i], &addr);
					amx_StrLen(addr, &len);
					char* val = new char[len + 2];
					amx_GetString(val, addr, 0, len + 2);
					argv[i] = String::NewFromUtf8(_sampjs->GetIsolate(), val);

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

						Module* module = _sampjs->GetModule("players");
						if (module != NULL){
							sampjs::Players *players = (sampjs::Players*)(module);
							Local<Object> player = players->GetPlayerObject(playerid);
							
							argv[i] = player;
							if (name == "PlayerDisconnect"){
								players->RemovePlayer(playerid);
							}
						}
						else {
							argv[i] = Integer::New(_sampjs->GetIsolate(), params[i]);
						} 
						
					}
					else {
						argv[i] = Integer::New(_sampjs->GetIsolate(), params[i]);
					} 
					

					break;
				} case 'f':{
					argv[i] = Number::New(_sampjs->GetIsolate(), amx_ctof(params[i]));

					break;
				}
			}
		}

		Local<Value> ret = fn->Call(server, argc, argv);
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