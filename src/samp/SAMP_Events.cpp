#include "samp/SAMP_Events.h"
#include "SAMP_JS.h"

#include "samp/SAMP_Players.h"

SAMP_Events::SAMP_Events(SAMP_JS*sampjs) :_sampjs(sampjs){
	std::string src = R"(
events = {
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

)";
	Local<String> source = String::NewFromUtf8(sampjs->GetIsolate(), src.c_str());
	Local<String> name = String::NewFromUtf8(sampjs->GetIsolate(), "[events.js]");

	Local<Script> script = Script::Compile(source, name);

	Local<Object> events = Local<Object>::Cast(script->Run());

	
	sampjs->SetGlobalObject("$events", events);

}



int SAMP_Events::FireNative(std::string name, std::string param_types, std::vector<std::string> param_names, AMX* amx, cell* params){
	JS_SCOPE(_sampjs->GetIsolate())
	JS_CONTEXT(_sampjs->GetIsolate(), _sampjs->_context)
	TryCatch try_catch;
	Local<Object> events = _sampjs->GetGlobalObject("$events");
	Local<Value> fire = events->Get(String::NewFromUtf8(_sampjs->GetIsolate(), "fire"));
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
					if (param_names[i-1] == "playerid"){
						int playerid = params[i];
						SAMP_Module* module = _sampjs->GetModule("players");
						if (module != NULL){
							SAMP_Players* players = (SAMP_Players*)(module);
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

		Local<Value> ret = fn->Call(events, argc, argv);
		int retval = 1;
		if (try_catch.HasCaught()){
			String::Utf8Value exception(try_catch.Exception());
			const char* exception_string = *exception;
			Local<Message> message = try_catch.Message();

			if (message.IsEmpty()){
				printf("Exception: %s\n", exception_string);
			}
			else {
				String::Utf8Value filename(message->GetScriptOrigin().ResourceName());
				const char* filename_string = *filename;
				int linenum = message->GetLineNumber();
				printf("Exception: %s:%i: %s\n", filename_string, linenum, exception_string);
				String::Utf8Value sourceline(message->GetSourceLine());
				const char* sourceline_string = *sourceline;
				printf("%s\n", sourceline_string);

			}
		}
		else {
			if (ret->IsNumber()) retval = ret->Int32Value();
			else if (name == "PlayerCommandText" || name == "RconCommand") retval = 0;
		}

		


		
		return retval;
	}
	return 1;
}