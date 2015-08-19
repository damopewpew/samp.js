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


	Script::LoadScript("js/samp.js/Server.js", isolate, ctx );
	Script::LoadScript("js/samp.js/Publics.js", isolate, ctx);
	Script::LoadScript("js/samp.js/Vehicles.js", isolate, ctx);
	Script::LoadScript("js/samp.js/Vehicle.js", isolate, ctx);

	SAMPJS::ExecuteCode(ctx, "$server", "var $server = new Server();");
	SAMPJS::ExecuteCode(ctx, "$vehicles", "var $vehicles = new Vehicles();");
	/*SAMPJS::ExecuteCode(ctx, "$vehicles", R"(var $vehicles = new Vehicles();
$vehicles[Symbol.iterator] = function* (){
for(var i in this){
	yield this.getVehicle(i);	
}
};)",6); */
	
	JS_Object global(ctx->Global());

	global.Set("CallNative", Server::JS_CallNativeGDK);
	global.Set("CallNativeGDK", Server::JS_CallNativeGDK);

	global.Set("CreateVehicle", Server::JS_CreateVehicle );
	global.Set("DestroyVehicle", Server::JS_DestroyVehicle);

	JS_Object server(global.getObject("$server"));

	JS_Object memory(server.getObject("memory"));

	memory.Set("current", Server::JS_CurrentMemory);
	memory.Set("peak", Server::JS_PeakMemory);
	
	server.Set("Debug", Utils::JS_Debug);
	server.Set("emit", SAMPJS::JS_GlobalEvent);
}

void Server::Shutdown(){
	context.Reset();
}


void Server::JS_CallNativeGDK(const FunctionCallbackInfo<Value> & args){

	String::Utf8Value jsname(args[0]);
	char* name(*jsname);


	String::Utf8Value jsformat(args[1]);
	char* format(*jsformat);

	AMX_NATIVE native;

	auto iter = _gdk_native_funcs.find(name);
	if (iter != _gdk_native_funcs.end()) native = iter->second;
	else {
		native = sampgdk::FindNative(name);
		if (!native){
			sjs::logger::error("Native function: %s, not found.", name);
			return;
		}
		_gdk_native_funcs[name] = native;
	}

//	SetVehiclePos(0, 0.0, 0.0, 0.0);
	
	void *params[32];
	cell param_value[20];
	int param_size[32];
	std::vector<cell *> param_cell;
	std::vector<char *> param_str;
	std::vector<const char*> param_str2;
	int j = 0;
	int k = 2;
	int vars = 0;
	int strs = 0;
	int strv = 0;
	size_t len = strlen(format);

	char str_format[256]{'\0'};
	for (unsigned int i = 0; i < len; i++){
		switch (format[i]){
		case 'i':
			{
				param_value[i] = args[k]->Int32Value();
				params[j++] = static_cast<void*>(&param_value[i]);
				k++;
				sprintf(str_format, "%si", str_format);
			}
			break;
		case 'f':
			{
				float val = 0.0;
				if (!args[k]->IsUndefined()) val = static_cast<float>(args[k]->NumberValue());

				param_value[i] = amx_ftoc(val);
				params[j++] = static_cast<void*>(&param_value[i]);
				k++;
				sprintf(str_format, "%sf", str_format);
			}
			break;
		case 's':
			{
				String::Utf8Value jstring(args[k]->ToString());
				//wchar_t *wstr = (wchar_t*)*jstring;
				size_t slen = args[k]->ToString()->Length();
				//param_str.push_back(new char[slen + 1]);
				//wcstombs(param_str.back(), wstr, slen+1);
				const char* str = ToCString(jstring);
				char* mystr = new char[slen + 1];
				for (size_t x = 0; x < slen; x++){
					mystr[x] = str[x];
				}
				mystr[slen] = '\0';
				params[j] = static_cast<void*>(mystr);
				j++;
				k++;
				sprintf(str_format, "%ss", str_format);
				strs++;
			}
			break;
		// Array of integers
		case 'a':
			{
				if (!args[k]->IsArray()){
					args.GetReturnValue().Set(false);
					sjs::logger::error("CallNativeGDK: %s, parameter %i must be an array", name, k);
					return;
				}
				
				
				Local<Array> a = Local<Array>::Cast(args[k++]);
				size_t size = a->Length();

				cell *value = new cell[size];

				for (size_t b = 0; b < size; b++){
					value[b] = a->Get(b)->Int32Value();
				}
				sprintf(str_format, "%sa[%i]", str_format, size);
				params[j++] = static_cast<void*>(value);
				strs++;
				
			}
			break;
		// Array of floats
		case 'v':
			{
				if (!args[k]->IsArray()){
					args.GetReturnValue().Set(false);
					sjs::logger::error("CallNativeGDK: %s, parameter %i must be an array", name, k);
					return;
				}
				Local<Array> a = Local<Array>::Cast(args[k++]);
				size_t size = a->Length();

				cell *value = new cell[size];

				for (size_t b = 0; b < size; b++){
					float val = static_cast<float>(a->Get(b)->NumberValue());
					value[b] = amx_ftoc(val);
					
				}
				sprintf(str_format, "%sa[%i]", str_format, size);
				params[j++] = static_cast<void*>(value);
				strs++;

			}
			break;
		case 'F':
		case 'I':
			{
				vars++;
				params[j++] = static_cast<void*>(&param_value[i]);
				sprintf(str_format, "%sR", str_format);
			}
			break;

		case 'A':
			{
				const int size = args[k]->Int32Value();
				param_size[j] = size;
				cell *value = new cell[size];
				for (int c = 0; c < size; c++){
					value[c] = 0;
				}
				params[j++] = static_cast<void*>(value);
				sprintf(str_format, "%sA[%i]", str_format, size);
				vars++;
			}
			break;

		case 'V':
			{
				const int size = args[k]->Int32Value();
				param_size[j] = size;
				cell *value = new cell[size];
				float fl = 0.0;
				for (int c = 0; c < size; c++){
					value[c] = amx_ftoc(fl);
				}

				params[j++] = static_cast<void*>(value);
				sprintf(str_format, "%sA[%i]", str_format, size);
				vars++;
			}
			break;
		case 'S':
			{

				unsigned int strl = args[k++]->Int32Value();
				param_size[j] = static_cast<cell>(strl);
				
				if (strl < 1){
					sjs::logger::error("CallNativeGDK: %s - String length can't be 0", name);
					return;
				}
				sprintf(str_format, "%sS[%i]", str_format, strl);
				
				char* mycell = new char[strl]();
				params[j++] = &mycell[0];
				vars++;
				i++;
			}
			break;
	
		}
	}	
	int retval = sampgdk::InvokeNativeArray(native, str_format, params);

	if (vars > 0 || strs > 0){
		Local<Array> arr = Array::New(args.GetIsolate(), vars);
		j = 0;
		vars = 0;
		int sk = 0;
		for (unsigned int i = 0; i < len; i++){
			switch (format[i]){
			case 'i':
			case 'f':
				{
					j++;
				}
				break;
			case 's':
			case 'a':
			case 'v':
				{
					delete[] params[j++];
				}
				break;
			case 'A':
				{
					int size = param_size[j];
					Local<Array> rArr = Array::New(args.GetIsolate(), size);
					cell* prams = static_cast<cell*>(params[j]);
					for (int c = 0; c < size; c++){
						rArr->Set(c, Integer::New(args.GetIsolate(),prams[c]));
					}

					arr->Set(vars++, rArr);
					delete[] params[j++];
				}
				break;

			case 'V':
			{
				cell * param_array = static_cast<cell*>(params[j]);
				int size = param_size[j];
				Local<Array> rArr = Array::New(args.GetIsolate(), size);
				for (int c = 0; c < size; c++){
					rArr->Set(c, Number::New(args.GetIsolate(), amx_ctof(param_array[c])));
				}
				arr->Set(vars++, rArr);
				delete[] params[j++];
			}
			break;
			case 'I':
				{
					int val = *static_cast<cell*>(params[j++]);
					arr->Set(vars++, Integer::New(args.GetIsolate(), val));

				}
				break;
			case 'F':
				{
					float val = amx_ctof(*static_cast<cell*>(params[j++]));
					arr->Set(vars++, Number::New(args.GetIsolate(), val));
				}
				break;
			case 'S':
				{
					
					size_t len = param_size[j];
					char* str = static_cast<char*>(params[j]);
					str[len - 1] = '\0';
				
					arr->Set(vars++, String::NewFromUtf8(args.GetIsolate(), str));
					i++;
					delete[] params[j++];
					
				}
				break;
			}
		}

		if (vars == 1){
			Local<Value> jsval = arr->Get(0);
			args.GetReturnValue().Set(jsval);
		}
		else if(vars > 1) args.GetReturnValue().Set(arr);
		else args.GetReturnValue().Set(retval);
	}

	else {
		args.GetReturnValue().Set(retval);
	}

}

struct position {
	double x = 0.0;
	double y = 0.0;
	double z = 0.0;
	double a = 0.0;
};
struct vehicle  {
	unsigned int id;
	unsigned int modelid;
	position pos;
	unsigned short color1 = -1;
	unsigned short color2 = -1;
	int respawn = 0;
	bool addsiren = 0;
};



void Server::JS_CreateVehicle(const FunctionCallbackInfo<Value> & args){
	unsigned int pos = 0;
	vehicle veh;
	size_t len = args.Length();

	if (len < 1){
		sjs::logger::error("Error: CreateVehicle takes more than 0 arguments");
		return;
	}


	JS_Object global(args.Holder()->CreationContext()->Global());
	JS_Object vehicles(global.getObject("$vehicles"));

	

	veh.modelid = args[pos++]->Int32Value();
	
	// Created via new Vehicle();
	if (args.Length() == 1 && args[0]->IsObject()){
		Local<Object> obj = Local<Object>::Cast(args[0]);
		JS_Object jsobj(obj);
		JS_Object pos(jsobj.getObject("_pos"));
		JS_Object color(jsobj.getObject("_color"));


		veh.modelid = jsobj.getValue("_modelid")->Int32Value();
		veh.pos.x = pos.getValue("x")->NumberValue();
		veh.pos.x = pos.getValue("y")->NumberValue();
		veh.pos.z = pos.getValue("z")->NumberValue();
		veh.pos.a = pos.getValue("a")->NumberValue();

		veh.color1 = jsobj.getValue("color1")->Int32Value();
		veh.color2 = jsobj.getValue("color2")->Int32Value();
		veh.respawn = jsobj.getValue("_respawnDelay")->Int32Value();
		veh.addsiren = jsobj.getValue("_addSiren")->Int32Value();

		veh.id = CreateVehicle(veh.modelid, veh.pos.x, veh.pos.y, veh.pos.z, veh.pos.a, veh.color1, veh.color2, veh.respawn, veh.addsiren);

		args.GetReturnValue().Set(veh.id);
		Local<Value> argv[2] = { Integer::New(args.GetIsolate(), veh.id), obj };
		vehicles.Call("addVehicle", 2, argv);
		return;
	}
	else if (pos < len && args[pos]->IsArray()){
		Local<Array> arr = Local<Array>::Cast(args[pos++]);

		veh.pos.x = (arr->Length() > 0) ? arr->Get(0)->NumberValue() : 0.0;
		veh.pos.x = (arr->Length() > 1) ? arr->Get(1)->NumberValue() : 0.0;
		veh.pos.x = (arr->Length() > 2) ? arr->Get(2)->NumberValue() : 0.0;
		veh.pos.x = (arr->Length() > 3) ? arr->Get(3)->NumberValue() : 0.0;
	}
	else if ( pos < len && args[pos]->IsObject()){ 
		Local<Object> obj = Local<Object>::Cast(args[pos++]);

		Local<String> xs = String::NewFromUtf8(args.GetIsolate(), "x");
		Local<String> ys = String::NewFromUtf8(args.GetIsolate(), "y");
		Local<String> zs = String::NewFromUtf8(args.GetIsolate(), "z");
		Local<String> as = String::NewFromUtf8(args.GetIsolate(), "a");
		veh.pos.x = (obj->HasOwnProperty(xs)) ? obj->Get(xs)->NumberValue() : 0.0;
		veh.pos.y = (obj->HasOwnProperty(ys)) ? obj->Get(ys)->NumberValue() : 0.0;
		veh.pos.z = (obj->HasOwnProperty(zs)) ? obj->Get(zs)->NumberValue() : 0.0;
		veh.pos.a = (obj->HasOwnProperty(as)) ? obj->Get(as)->NumberValue() : 0.0;
	}
	else {
		veh.pos.x = (len > pos) ? args[pos++]->NumberValue() : 0.0;
		veh.pos.y = (len > pos) ? args[pos++]->NumberValue() : 0.0;
		veh.pos.z = (len > pos) ? args[pos++]->NumberValue() : 0.0;
		veh.pos.a = (len > pos) ? args[pos++]->NumberValue() : 0.0;
	}
	
	veh.color1 = (len > pos) ? args[pos++]->Int32Value() : -1;
	veh.color2 = (len > pos) ? args[pos++]->Int32Value() : -1;
	veh.respawn = (len > pos) ? args[pos++]->Int32Value() : 0;
	veh.addsiren = (len > pos) ? args[pos++]->BooleanValue() : false;

	veh.id = CreateVehicle(veh.modelid, veh.pos.x, veh.pos.y, veh.pos.z, veh.pos.a, veh.color1, veh.color2, veh.respawn, veh.addsiren);
	args.GetReturnValue().Set(veh.id);
	
	Isolate *is = args.GetIsolate();

	Local<Value> argv[10] = {
		Integer::New(is, veh.id),
		Integer::New(is, veh.modelid),
		Number::New(is, veh.pos.x),
		Number::New(is, veh.pos.y),
		Number::New(is, veh.pos.z),
		Number::New(is, veh.pos.a),
		Integer::New(is, veh.color1),
		Integer::New(is, veh.color2),
		Integer::New(is, veh.respawn),
		Integer::New(is, veh.addsiren)
	};
	vehicles.Call("createVehicle", 10, argv);

}

void Server::JS_DestroyVehicle(const FunctionCallbackInfo<Value> & args){
	int vehid = args[0]->Int32Value();
	DestroyVehicle(vehid);

	JS_Object global(args.Holder()->CreationContext()->Global());
	JS_Object vehicles(global.getObject("$vehicles"));


	Local<Value> argv[1] = { args[0] };
	vehicles.Call("removeVehicle", 1, argv );
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
				if (amx_GetAddr(SAMPJS::amx, params[i], &maddr) != AMX_ERR_NONE){
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


			// Player
			case 'P':
			{
				int playerid = params[i];

				TryCatch trycatch;
				JS_Object players(global.getObject("$players"));

				Local<Value> player;

				if (name == "IncomingConnection" || name == "PlayerConnect"){
					Local<Value> argv[1] = { Integer::New(isolate, playerid) };
					player = players.Call("addPlayer", 1, argv);
					if (trycatch.HasCaught()){
						Utils::PrintException(&trycatch);
					}
				}

				else if (name == "PlayerDisconnect"){
					Local<Value> argv[1] = { Integer::New(isolate, playerid) };
					player = players.Call("removePlayer", 1, argv);
					if (trycatch.HasCaught()){
						Utils::PrintException(&trycatch);
					}
				}
				else {
					Local<Value> argv[1] = { Integer::New(isolate, playerid) };
					player = players.Call("getPlayer", 1, argv);
					if (trycatch.HasCaught()){
						Utils::PrintException(&trycatch);
					}
				}
				argv[i] = player;
				break;
			}

			// Vehicle
			case 'V':
			{
				int vehicleid = params[i];
				JS_Object vehicles(global.getObject("$vehicles"));

				Local<Value> argv[1] = { Integer::New(isolate, vehicleid) };
				auto vehicle = vehicles.Call("getVehicle", 1, argv);
				argv[i] = vehicle;
				break;
			}

			// Object
			case 'O':
			{

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
		if(argc > 0) delete[] argv;
		int retval = 1;
		if (try_catch.HasCaught()){
			Utils::PrintException(&try_catch);
		}
		else {
			if (ret->IsNumber() || ret->IsBoolean()) retval = ret->Int32Value();
		}
		return retval;
	}
	return 1;
}