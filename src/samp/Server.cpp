#include "samp/Server.h"

#include "SAMPJS.h"

#include "utils/Utils.h"
#include "utils/Helpers.h"

#include "utils/SysInfo.h"

#include <iostream>
#include <sstream>
#include <ostream>
#include <fstream>

#include <chrono>

#include <sampgdk/sampgdk.h>

using namespace std;
using namespace sampjs;

std::unordered_map<std::string, amx_Function_t> Server::_native_func_cache;
std::unordered_map<std::string, AMX_NATIVE> Server::_gdk_native_funcs;

AMX_NATIVE Server:: last_native = NULL;
std::string Server::last_native_name = "";

void Server::Init(Local<Context> ctx){


	
	isolate = ctx->GetIsolate();
	context.Reset(ctx->GetIsolate(), ctx);


	ifstream serverFile("js/samp.js/Server.js", std::ios::in);
	if (!serverFile){
		sjs::logger::error("Missing required file Server.js");
		SAMPJS::Shutdown();
	}
	std::string serverSource((std::istreambuf_iterator<char>(serverFile)), std::istreambuf_iterator<char>());
	SAMPJS::ExecuteCode(ctx, "Server.js", serverSource);

	SAMPJS::ExecuteCode(ctx, "$server", "var $server = new Server();");


	ifstream pubFile("js/samp.js/Publics.js", std::ios::in);
	if (!pubFile){
		sjs::logger::error("Missing required file Publics.js");
		SAMPJS::Shutdown();
	}
	std::string pubSource((std::istreambuf_iterator<char>(pubFile)), std::istreambuf_iterator<char>());
	SAMPJS::ExecuteCode(ctx, "Publics.js", pubSource);

	JS_Object global(ctx->Global());

	global.Set("CallNative", Server::JS_CallNative);
	global.Set("CallNativeGDK", Server::JS_CallNativeGDK);

	JS_Object server(global.getObject("$server"));

	JS_Object memory(server.getObject("memory"));

	memory.Set("current", Server::JS_CurrentMemory);
	memory.Set("peak", Server::JS_PeakMemory);
	
	server.Set("Debug", Utils::JS_Debug);

	
}

void Server::Shutdown(){
	context.Reset();
	sjs::logger::debug("Server Shutdown");
}




void Server::JS_CallNative(const FunctionCallbackInfo<Value> & args){

//	TryCatch try_catch;

	if (args.Length() < 1){
		sjs::logger::error("Function CallNative requires at least 1 argument CallNative(nativeName, params, args);");
		args.GetReturnValue().SetNull();
		return;
	}


	std::string func_name(*String::Utf8Value(args[0]));

//	std::string func_name = JS2STRING(args[0]);

	amx_Function_t amx_Function;
	
	auto iter = _native_func_cache.find(func_name);
	if (iter != _native_func_cache.end()) amx_Function = iter->second;
	else {
		int func_idx;
		if (amx_FindNative(SAMPJS::amx, func_name.c_str(), &func_idx)){
			sjs::logger::error("Cannot find native function %s", func_name.c_str());
			return;
		}

		amx_Function = (amx_Function_t)((AMX_FUNCSTUB *)((char *)SAMPJS::amx_hdr + SAMPJS::amx_hdr->natives + SAMPJS::amx_hdr->defsize * func_idx))->address;
		_native_func_cache[func_name] = amx_Function;
	}

	

	if (args.Length() > 1){
		if (!args[1]->IsString()){
			sjs::logger::error("CallNative %s, 2nd argument must be a string", func_name.c_str());
			return;
		}


		std::string format(*String::Utf8Value(args[1]));
		size_t S_oc = std::count(format.begin(), format.end(), 'S');
		size_t I_oc = std::count(format.begin(), format.end(), 'I');
		size_t F_oc = std::count(format.begin(), format.end(), 'F');
		
	
		bool multi = false;
		if ((S_oc + I_oc + F_oc) > 1) multi = true;
	//	if (!args[args.Length() - 1]->IsArray() && multi){
		//	sjs::logger::error("CallNative %s, you must supply an array of strings for functions with multiple references", func_name.c_str());
	//		return;
	//	}
	//
		unsigned int count = (format.length()), variables = 0;

		cell *physAddr[6];
		cell *params = new cell[count + 1];
		params[0] = count * sizeof(cell);
		unsigned int strVars = 0;
		unsigned int k = 2, j = 1;
		size_t len_p =format.length();
		for (unsigned int i = 0; i < len_p; i++){
			switch (format[i]){
			case 'd':
			case 'i':
			{
				int val = 0;
				if (!args[k]->IsUndefined()) val = args[k]->Int32Value();
				params[j++] = val;

				k++;
				break;
			}
			case 'f':
			{
				float val = 0.0;
				if (!args[k]->IsUndefined()) val = (float)args[k]->NumberValue();
				params[j++] = amx_ftoc(val);

				k++;
				break;
			}
			case 's':
			{
				
				size_t len = 0;
				std::string str = "";
				if (!args[k]->IsUndefined()){
					//str = JS2STRING(args[k]);
					const wchar_t *wstr = (wchar_t*)*String::Value(args[k]->ToString());
					len = args[k]->ToString()->Length();
					char *sstr = new char[len+1];
					wcstombs(sstr, wstr, len);
					sstr[len] = '\0';
					str = std::string(sstr);
				}
				

				amx_Allot(SAMPJS::amx, len + 1, &params[j++], &physAddr[variables++]);
				amx_SetString(physAddr[variables - 1], str.c_str(), 0, 0, len + 1);
				k++;
				break;
			}

			case 'F':
			case 'I':
			{
				amx_Allot(SAMPJS::amx, 1, &params[j++], &physAddr[variables++]);
				break;
			}

			case 'S':
			{
				int strlen = args[k++]->Int32Value();
				amx_Allot(SAMPJS::amx, strlen, &params[j++], &physAddr[variables++]);
				params[j++] = strlen;
				i++;
				break;
			}
			}
		}


		//amx_Function_t amx_Function = (amx_Function_t)amx_addr;		
		int value = amx_Function(SAMPJS::amx, params);
	

		
		if (variables){
			Local<Object> retobj;

			Local<Value> retval;
			Local<Array> arr;

			bool doObj = false;

			if (multi){
				if (args[args.Length() - 1]->IsArray()){
				//	sjs::logger::printf("Doing Object");
					doObj = true;
					arr = Local<Array>::Cast(args[args.Length() - 1]);
					retobj = Object::New(args.GetIsolate());
				}
				else {

					arr = Array::New(args.GetIsolate(), (S_oc + I_oc + F_oc));
				}
			}
			
	//		if (multi)  arr = Array::New(args.GetIsolate(), (S_oc + I_oc + F_oc));
			

			unsigned int k = 1;
			unsigned int j = 0;
			variables = 0;
			strVars = 0;
			for (unsigned int i = 0; i < len_p; i++){
				switch (format[i]){
				default: k++;
					break;

				case 's':{
					strVars++;
					variables++;
					//amx_Release(sampjs.GetAMX(), params[i]);
					break;
				}

				case 'S':{
					char* text;
					text = new char[params[k++]];
					amx_GetString(text, physAddr[variables++], 0, params[k++]);
					i++;
					k++;

					if (!doObj && multi) arr->Set(j++, STRING2JS(args.GetIsolate(), text));
					else if (multi) retobj->Set(arr->Get(j++), STRING2JS(args.GetIsolate(), text));
					else retval = STRING2JS(args.GetIsolate(), text);
					delete text;
					//amx_Release(sampjs.GetAMX(), params[i]);
					break;
				}

				case 'F':{
				//	cell* returnValue = (cell*)physAddr[variables++];
					float fl = amx_ctof(*(cell*)physAddr[variables++]);
			
					if (!doObj && multi) arr->Set(j++, Number::New(args.GetIsolate(), 0.0));
					else if (multi) retobj->Set(arr->Get(j++), Number::New(args.GetIsolate(), fl));
					else retval = Number::New(args.GetIsolate(), fl);
					//amx_Release(sampjs.GetAMX(), params[i]);
					break;
				}
				case 'I':{
					cell* returnValue = (cell*)physAddr[variables++];
					int value = *returnValue;
					if (!doObj && multi) arr->Set(j++, Integer::New(args.GetIsolate(), value));
					else if (multi) retobj->Set(arr->Get(j++), Integer::New(args.GetIsolate(), value));
					else retval = Integer::New(args.GetIsolate(), value);
					//amx_Release(sampjs.GetAMX(), params[i]);
					break;
				}

				}
			} 

			for (int i = len_p - 1; i >= 0; i--){
				if (format[i] == 'F' || format[i] == 'I' || format[i] == 'S' || format[i] == 's'){
					amx_Release(SAMPJS::amx, params[i + 1]);
				}
			}
			delete[] params;
			/*if (try_catch.HasCaught()){
				args.GetIsolate()->CancelTerminateExecution();
				Utils::PrintException(&try_catch);
				delete[] params;
				return;
			} */
			if (multi){
				if(doObj)args.GetReturnValue().Set(retobj);
				else args.GetReturnValue().Set(arr);
				
				return;
			}
			else if (!retval.IsEmpty()){
				args.GetReturnValue().Set(Local<Value>::Cast(retval));
				return;
			}

		}

		args.GetReturnValue().Set(value);
		return;
	}
	else {
		/*if (try_catch.HasCaught()){
			args.GetIsolate()->CancelTerminateExecution();
			Utils::PrintException(&try_catch);
			return;
		}*/
	//	amx_Function_t amx_Function = (amx_Function_t)amx_addr;
		int value = amx_Function(SAMPJS::amx, NULL);
		args.GetReturnValue().Set(value);
		return;
	}
}

void Server::JS_CallNativeGDK(const FunctionCallbackInfo<Value> & args){

	String::Utf8Value jsname(args[0]);
	char* name(*jsname);


	String::Value jsformat(args[1]);
	uint16_t* format(*jsformat);

	AMX_NATIVE native;

	auto iter = _gdk_native_funcs.find(name);
	if (iter != _gdk_native_funcs.end()) native = iter->second;
	else {
		native = sampgdk::FindNative(name);
		if (!native){
			return;
		}
		_gdk_native_funcs[name] = native;
	}

//	SetVehiclePos(0, 0.0, 0.0, 0.0);
	
	void *params[20];
	cell param_value[20];
	std::vector<char*> param_str;
	int j = 0;
	int k = 2;
	int vars = 0;
	int strs = 0;
	size_t len = sizeof(format);
	std::string format_str;

	for (unsigned int i = 0; i < len; i++){
		switch (format[i]){
		case 'i':
			{
				param_value[i] = args[k]->Int32Value();
				params[j++] = &param_value[i];
				k++;
				format_str += format[i];
			}
			break;
		case 'f':
			{
				float val = 0.0;
				if (!args[k]->IsUndefined()) val = args[k]->NumberValue();

				params[j++] = &amx_ftoc(val);
				k++;
				format_str += format[i];
			}
			break;
		case 's':
			{
				String::Value jstring(args[k]->ToString());
				wchar_t *wstr = (wchar_t*)*jstring;
				size_t slen = args[k]->ToString()->Length();
				params[j]  = new char[slen + 1];
				wcstombs((char*)params[j], wstr, slen+1);
				j++;
				k++;
				format_str += format[i];
				strs++;
			}
			break;
		case 'F':
		case 'I':
			{
				params[j++] = &param_value[vars++];
				format_str += 'R';
			}
			break;

		case 'S':
			{
				format_str += "S[*2]";
				int strlen = args[k]->Int32Value();
				params[j++] = new char[strlen + 1];
				vars++;
			}
			break;
	
		}
	}
	
	int retval = sampgdk::InvokeNativeArray(native, format_str.c_str(), params);

	if (vars > 0 || strs > 0){
		Local<Array> arr = Array::New(args.GetIsolate(), vars);
		j = 0;
		vars = 0;
		for (unsigned int i = 0; i < len; i++){
			switch (format[i]){
			case 'i':
			case 'f':
				{
					j++;
				}
				break;
			case 's':
				{
					delete[] params[j++];
				//	j++;
					
				}
				break;
			case 'I':
				{
					int val = *(int *)params[j++];
					arr->Set(vars++, Integer::New(args.GetIsolate(), val));

				}
				break;
			case 'F':
				{
					float val = amx_ctof(*(cell *)params[j++]);
					arr->Set(vars++, Number::New(args.GetIsolate(), val));
				}
				break;
			case 'S':
				{
					char* str = (char*)params[j];
					arr->Set(vars++, String::NewFromUtf8(args.GetIsolate(), str));
				//	delete[] params[j++];
					delete str;
					
				}
				break;
			}
		}

		if (vars == 1){
			Local<Value> jsval = arr->Get(0);
			args.GetReturnValue().Set(jsval);
		}
		else if(vars > 1) args.GetReturnValue().Set(arr);
	}

	else {
		args.GetReturnValue().Set(retval);
	}

}


void Server::JS_CurrentMemory(const FunctionCallbackInfo<Value> & args){
	double current = (double)(double(sampjs::getCurrentRSS()) / 1024 / 1024);
	double cur = (double)roundf(float(current)*100) /100;
	args.GetReturnValue().Set(cur);
}

void Server::JS_PeakMemory(const FunctionCallbackInfo<Value> & args){
	double peak =(double)(double(sampjs::getPeakRSS()) / 1024 / 1024);
	double cur = (double)roundf(float(peak) * 100) / 100;
	args.GetReturnValue().Set(Number::New(args.GetIsolate(),cur));
}

void Server::FireEvent(std::string name, const int argc, Local<Value> argv[] ){
	Locker v8Locker(isolate);
	Isolate::Scope isoscope(isolate);
	HandleScope hs(isolate);
	Local<Context> ctx = Local<Context>::New(isolate, context);
	Context::Scope cs(ctx);
	TryCatch try_catch;

	JS_Object global(ctx->Global());

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
	fn->Call(serverjs, argc + 1, args);

	delete[] args;

	if (try_catch.HasCaught()){
		Utils::PrintException(&try_catch);
	}
}

int Server::FireNative(std::string name, std::string param_types, std::vector<std::string> param_names, cell* params){
	Locker v8Locker(isolate);
	Isolate::Scope isoscope(isolate);
	HandleScope hs(isolate);
	Local<Context> ctx = Local<Context>::New(isolate, context);
	Context::Scope cs(ctx);
	TryCatch try_catch;



	JS_Object global(ctx->Global());
	JS_Object server(global.getObject("$server"));
	Local<Function> firefn = Local<Function>::Cast(server.getValue("fire"));
	if (try_catch.HasCaught()){
		Utils::PrintException(&try_catch);
	}

	if (firefn->IsFunction()){
		Local<Value>* argv = NULL;
		unsigned int argc = param_types.length() + 1;
		argv = new Local<Value>[argc];

		size_t param_count = params[0] / sizeof(cell);
		argv[0] = String::NewFromUtf8(isolate, name.c_str());
		for (unsigned int i = 1; i < argc; i++){
			switch (param_types[(i - 1)]){
			case 's':{
				cell* maddr = NULL;
				int len = 0;
				char* sval;
				if (amx_GetAddr(SAMPJS::amx,params[i], &maddr) != AMX_ERR_NONE){
					sjs::logger::error("Can't get string address: %s", name.c_str());
					return 1;
				}

				amx_StrLen(maddr, &len);
				
				sval = new char[len + 1];
				if (amx_GetString(sval, maddr, 0, len + 1) != AMX_ERR_NONE){
					sjs::logger::error("Can't get string: %s", name.c_str());

					return 1;
				}
				argv[i] = String::NewFromUtf8(isolate, sval);


				break;
			}
			case 'i':{
				if (param_names[i - 1] == "playerid" ||
					param_names[i - 1] == "killerid" ||
					param_names[i - 1] == "forplayerid" ||
					param_names[i - 1] == "issuerid" ||
					param_names[i - 1] == "damagedid" ||
					param_names[i - 1] == "clickedplayerid" ||
					(param_names[i - 1] == "hitid" && params[i - 1] == 1)
					){

					int playerid = params[i];

					TryCatch trycatch;
					JS_Object players(global.getObject("$players"));
					
					Local<Value> player;
	
					if (name == "IncomingConnection" || name == "PlayerConnect"){

						auto addPlayer = Local<Function>::Cast(players.getValue("addPlayer"));
						Local<Value> argv[1] = { Integer::New(isolate, playerid) };
						player = addPlayer->Call(players.get(), 1, argv);
						if (trycatch.HasCaught()){
							Utils::PrintException(&trycatch);
						}
					}
					
					else if (name == "PlayerDisconnect"){
						auto removePlayer = Local<Function>::Cast(players.getValue("removePlayer"));
						Local<Value> argv[1] = { Integer::New(isolate, playerid) };
						player = removePlayer->Call(players.get(), 1, argv);
						if (trycatch.HasCaught()){
							Utils::PrintException(&trycatch);
						}
					}
					else {
						auto getPlayer = Local<Function>::Cast(players.getValue("getPlayer"));
						Local<Value> argv[1] = { Integer::New(isolate, playerid) };
						player = getPlayer->Call(players.get(), 1, argv);
						if (trycatch.HasCaught()){
							Utils::PrintException(&trycatch);
						}
					}
					argv[i] = player;

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

		Local<Value> ret = firefn->Call(server.get(), argc, argv);
		delete[] argv;
		int retval = 1;
		if (try_catch.HasCaught()){
			Utils::PrintException(&try_catch);
		}
		else {
			if (ret->IsNumber()) retval = ret->Int32Value();
		}
		return retval;
	}
	return 1;
}