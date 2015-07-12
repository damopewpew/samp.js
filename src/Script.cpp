#include "Script.h"

#include "SAMPJS.h"

#include "io/FileSystem.h"
#include "io/HTTP.h"

#include "io/Sockets.h"
#include "io/Timers.h"

#include "io/MySQL.h"

#include "samp/Server.h"
#include "samp/Players.h"
#include "samp/Events.h"

#include "utils/Helpers.h"
#include "utils/Utils.h"

#include <iostream>
#include <fstream>
#include <sstream>

#include <boost/filesystem.hpp>

namespace fs = boost::filesystem;

using namespace std;
using namespace v8;

using namespace sampjs;

std::unordered_map<std::string, PublicDef*> sampjs::Script::_publics;

sampjs::Script::Script(){
	ready = false;
	Isolate::CreateParams create_params;
	isolate = Isolate::New(create_params);

	Locker v8Locker(isolate);
	Isolate::Scope isolate_scope(isolate);
	HandleScope handle_scope(isolate);

	Local<ObjectTemplate> global = ObjectTemplate::New(isolate);

	Local<Context> ctx = Context::New(isolate, NULL, global);

	this->context.Reset(isolate, ctx);

	Context::Scope context_scope(ctx);

	Local<ObjectTemplate> self_tmpl = ObjectTemplate::New(isolate);
	self_tmpl->SetInternalFieldCount(1);

	Local<Object> self = self_tmpl->NewInstance();
	self->SetInternalField(0, External::New(isolate, this));


	JS_Object gbl(ctx->Global());
	gbl.Set("$script", self, PropertyAttribute::DontDelete );

	gbl.Set("load", SAMPJS::JS_Load);
	gbl.Set("unload", SAMPJS::JS_Unload);
	gbl.Set("reload", SAMPJS::JS_Reload);

	gbl.Set("require", sampjs::Script::JS_RequireScript);
	gbl.Set("include", sampjs::Script::JS_LoadScript);

	gbl.Set("setlocale", sampjs::Script::JS_SetLocale);

	gbl.Set("RegisterPublic", sampjs::Script::JS_RegisterPublic);

	JSObjectTemplate module_tmpl(isolate);
	JSObjectTemplate cache_tmpl(isolate);
	module_tmpl.Set("_cache", cache_tmpl.GetRaw()->NewInstance());
	
	gbl.Set("$modules", module_tmpl.GetRaw()->NewInstance());

	gbl.Set("$global", gbl.get());

}

bool sampjs::Script::Init(std::string filename){
	this->filename = filename;
	std::ifstream t(filename);
	if (!t){
		sjs::logger::error("Script does not exists: %s", filename.c_str());
		return false;
	}
	LoadModules();

	Locker v8Locker(isolate);
	Isolate::Scope isolate_scope(isolate);
	HandleScope hs(isolate);
	Local<Context> ctx = Local<Context>::New(isolate, context);
	Context::Scope cs(ctx);
	

	JS_Object global(ctx->Global());
	JS_Object self(global.getObject("$script"));

	fs::path path(filename);


	self.Set("filename", (Local<Value>)String::NewFromUtf8(isolate,path.filename().string().c_str()));
	self.Set("path", (Local<Value>)String::NewFromUtf8(isolate, path.parent_path().string().c_str()));
	self.Set("fullpath",(Local<Value>)String::NewFromUtf8(isolate, path.relative_path().string().c_str()));
	
	LoadScript(filename, isolate, ctx);
	this->ready = true;
	server->FireEvent("ScriptInit");
	return true;
}

void sampjs::Script::Unload(){

	server->FireEvent("ScriptExit");
	for (auto module : modules){
		module->Shutdown();
		module.reset();
		//modules.erase(module.first);
	}
	modules.resize(0);
	context.Reset();
	isolate->Dispose();
}

void sampjs::Script::Tick(){
	for (auto module : modules){
		module->Tick();
	}
}

bool sampjs::Script::IsReady(){
	return ready;
}

void sampjs::Script::LoadModules(){
	/*modules["$utils"] = make_shared<sampjs::Utils>();
	modules["$timers"] = make_shared<sampjs::Timers>();
	modules["$events"] = make_shared<sampjs::Events>();
	modules["$players"] = make_shared<sampjs::Players>();
	modules["$fs"] = make_shared<sampjs::FileSystem>();
	modules["$io"] = make_shared<sampjs::Sockets>();
	modules["$HTTP"] = make_shared<sampjs::HTTP>();
	modules["$mysql"] = make_shared<sampjs::MySQL>();

	this->server = make_shared<sampjs::Server>();
	modules["$server"] = server; */

	modules.push_back(make_shared<sampjs::Utils>());
	modules.push_back(make_shared<sampjs::Timers>());
	modules.push_back(make_shared<sampjs::Events>());
	modules.push_back(make_shared<sampjs::Players>());
	modules.push_back(make_shared<sampjs::FileSystem>());
	modules.push_back(make_shared<sampjs::Sockets>());
	modules.push_back(make_shared<sampjs::HTTP>());
	modules.push_back(make_shared<sampjs::MySQL>());

	this->server = make_shared<sampjs::Server>();
	modules.push_back(server);
	

	Locker v8Locker(isolate);
	Isolate::Scope isolate_scope(isolate);
	HandleScope hs(isolate);

	Local<Context> ctx = Local<Context>::New(isolate,context);
	TryCatch try_catch;
	ctx->Enter();
	for (auto module : modules){
		sjs::logger::log("Loading Module: %s", module->Name().c_str());
		module->Init(ctx);
	}

	if (try_catch.HasCaught()){
		Utils::PrintException(&try_catch);
	}
	ctx->Exit();
}

void sampjs::Script::JS_RequireScript(const FunctionCallbackInfo<Value> & args){
	if (args.Length() < 1){
		return;
	}
	string file = JS2STRING(args[0]);
	args.GetReturnValue().Set(RequireScript(file, args.GetIsolate(), args.GetIsolate()->GetCallingContext()));
}

void sampjs::Script::JS_LoadScript(const FunctionCallbackInfo<Value> & args){
	if (args.Length() < 1){
		return;
	}
	string file = JS2STRING(args[0]);
	args.GetReturnValue().Set(LoadScript(file, args.GetIsolate(), args.GetIsolate()->GetCallingContext()));
}

void sampjs::Script::JS_RegisterPublic(const FunctionCallbackInfo<Value> & args){
	string name;
	string event;
	string format;
	bool cancel = false;

	name = JS2STRING(args[0]);
	format = JS2STRING(args[1]);


	if (args.Length() > 2){
		if (args[2]->IsBoolean()){
			cancel = args[2]->BooleanValue();
			event = name;
		}
		else {
			event = JS2STRING(args[2]);
		}

		if (args.Length() > 3){
			cancel = args[3]->BooleanValue();
		}
	}
	
//	sjs::logger::log("Registered Public: %s,%s,%s", name.c_str(), format.c_str(), event.c_str());
	PublicDef *def = new PublicDef(name, event, format, cancel);
	if (args[args.Length() - 1]->IsArray()){
		Local<Array> arr = Local<Array>::Cast(args[args.Length() - 1]);
		int len = arr->Length();
		for (int i = 0; i < len; i++){
			string arg_name = JS2STRING(arr->Get(i));
			def->arg_names.push_back(arg_name);
		}
	}

	_publics[name] = def;
}

string sampjs::Script::SearchScript(string filename, string directory ){
	// Check if string has slashes as it is probably a relative path
	size_t count = std::count(filename.begin(), filename.end(), '/');
	count += std::count(filename.begin(), filename.end(), '\\');
	if (count > 0) return filename;

	fs::path path(directory);
	fs::directory_iterator end_itr;

	for (fs::directory_iterator itr(path); itr != end_itr; ++itr){
		if (!fs::is_directory(itr->path())){
			
			if (itr->path().extension().string() == ".js"){
				if (filename == itr->path().filename().string() || filename + ".js" == itr->path().filename().string()){
					return itr->path().string();
				}
			}
		}
		else {
			std::string found = SearchScript(filename,itr->path().string());
			if (found != "") return found;
		}

	}

	return "";

}

Local<Value> sampjs::Script::RequireScript(std::string name, Isolate *isolate, Local<Context> context){
	string filename = SearchScript(name, "js");

	if (filename == ""){
		sjs::logger::error("Could not find module %s", name.c_str());
		Local<Value> val;
		return val;
	}

	sampjs::JS_Object global(context->Global());
	sampjs::JS_Object jsmodules(global.getObject("$modules"));

	fs::path path(filename);

	string safepath = path.string();
#ifdef WIN32
	replace(safepath.begin(), safepath.end(), '\\', '/');
#endif

	Local<Object> cache = jsmodules.getObject("_cache");
	if (!cache->GetRealNamedProperty(String::NewFromUtf8(isolate,safepath.c_str())).IsEmpty()){
		sjs::logger::debug("Loading Cached Module %s", path.string().c_str());
		Local<Value> module = JS_Object(cache).getValue(safepath.c_str());
		return module;
	}

	ifstream t(filename);
	stringstream buffer;
	buffer << t.rdbuf();

	Locker v8Locker(isolate);
	Isolate::Scope isoscope(isolate);
	EscapableHandleScope hs(isolate);



	string src = R"("use strict";
$modules._cache[")" + safepath + R"("] = (function(){
	var exports = {}
	var module = {
		name: ")" + name + R"(",
		path: ")" + path.parent_path().string() + R"(",
		fullpath: ")" + path.relative_path().string() + R"(",
		file: ")" + path.filename().string() + R"("
	};
)" + buffer.str() + R"(
	return exports;
}()))";

	auto source = String::NewFromUtf8(isolate, src.c_str());
	auto scriptname = String::NewFromUtf8(isolate, filename.c_str());

	TryCatch try_catch;
	ScriptOrigin origin(scriptname, Integer::New(isolate, -8));

	auto script = v8::Script::Compile(source, &origin);
	if (script.IsEmpty()){
		isolate->CancelTerminateExecution();
		Utils::PrintException(&try_catch);
		Local<Value> ret;
		return ret;
	}
	else {
		try_catch.Reset();
		sjs::logger::log("Loaded Module %s", name.c_str());
		Local<Value> module = script->Run();
		if (try_catch.HasCaught()){
			isolate->CancelTerminateExecution();
			Utils::PrintException(&try_catch);
			Local<Value> ret;
			return ret;
		}
		return hs.Escape(module);
	}

}

Local<Value> sampjs::Script::LoadScript(string filename, Isolate *isolate,Local<Context> context){
	ifstream file(filename);
	if (!file){
		sjs::logger::error("Failed to load script: %s", filename.c_str());
	}
	{
		stringstream buffer;
		buffer << file.rdbuf();

		Locker v8Locker(isolate);
		Isolate::Scope isolate_scope(isolate);
		HandleScope hs(isolate);
		EscapableHandleScope handle_scope(isolate);
		
		Context::Scope context_scope(context);


		auto source = String::NewFromUtf8(isolate, buffer.str().c_str());
		auto name = String::NewFromUtf8(isolate, filename.c_str());

		TryCatch try_catch;
		ScriptOrigin origin(name);

		auto script = v8::Script::Compile(source, &origin);

		if (script.IsEmpty()){
			isolate->CancelTerminateExecution();
			Utils::PrintException(&try_catch);
		}
		else {
			try_catch.Reset();
			Local<Value> result = script->Run();
			if (try_catch.HasCaught()){
				isolate->CancelTerminateExecution();
				Utils::PrintException(&try_catch);
				Local<Value> ret;
				return ret;
			}

			return handle_scope.Escape(result);
		}
	}

	Local<Value> res;
	return res;


}


bool sampjs::Script::PublicCall(string name, cell *params, bool &shouldReturn){
	PublicDef* def = _publics[name];
	int retval = server->FireNative(def->event, def->format, def->arg_names, params);
	if ((retval >0) == def->cancel){
		shouldReturn = true;
	}

	return (retval > 0);
}

shared_ptr<Server> sampjs::Script::Server(){
	return server;
}

bool sampjs::Script::ModuleExists(std::string name){
	//return (modules.find(name) != modules.end());
	return true;
}

Local<Value> sampjs::Script::ExecuteCode(std::string name, std::string code){
	Locker v8Locker(isolate);
	Isolate::Scope isolate_scope(isolate);
	HandleScope hs(isolate);
	Local<Context> ctx = Local<Context>::New(isolate, context);
	return SAMPJS::ExecuteCode(ctx, name, code);
}

void sampjs::Script::JS_SetLocale(const FunctionCallbackInfo<Value> & args){
	if (args.Length() > 0 && args[0]->IsString()){
		std::string locale = JS2STRING(args[0]);
		setlocale(LC_ALL, locale.c_str());
	}
}

