#include "Script.h"

#include "SAMPJS.h"

#include "io/FileSystem.h"
#include "io/HTTP.h"
#include "io/Sockets.h"
#include "io/Timers.h"

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
	gbl.Set("$script", self);

	gbl.Set("load", SAMPJS::JS_Load);
	gbl.Set("unload", SAMPJS::JS_Unload);
	gbl.Set("reload", SAMPJS::JS_Reload);

	gbl.Set("require", sampjs::Script::JS_RequireScript);
	gbl.Set("include", sampjs::Script::JS_LoadScript);

	JSObjectTemplate module_tmpl(isolate);
	JSObjectTemplate cache_tmpl(isolate);
	module_tmpl.Set("_cache", cache_tmpl.GetRaw()->NewInstance());
	
	gbl.Set("$modules", module_tmpl.GetRaw()->NewInstance());

	gbl.Set("$global", gbl.get());

}

void sampjs::Script::Init(std::string filename){
	this->filename = filename;
	std::ifstream t(filename);
	if (!t){
		sjs::logger::error("Script does not exists: %s", filename.c_str());
		exit(0);
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

}

void sampjs::Script::Unload(){
	server->FireEvent("ScriptExit");
	for (auto module : modules){
		module.second->Shutdown();
		module.second.reset();
	}

	context.Reset();
	isolate->Dispose();
	sjs::logger::debug("Script Shutdown");
}

void sampjs::Script::Tick(){
	for (auto module : modules){
		module.second->Tick();
	}

	
}

bool sampjs::Script::IsReady(){
	return ready;
}

void sampjs::Script::LoadModules(){
	modules["$utils"] = make_shared<sampjs::Utils>();
	modules["$timers"] = make_shared<sampjs::Timers>();
	modules["$events"] = make_shared<sampjs::Events>();
	modules["$players"] = make_shared<sampjs::Players>();
	modules["$fs"] = make_shared<sampjs::FileSystem>();
	modules["$io"] = make_shared<sampjs::Sockets>();
	modules["$HTTP"] = make_shared<sampjs::HTTP>();

	this->server = make_shared<sampjs::Server>();
	modules["$server"] = server;
	

	Locker v8Locker(isolate);
	Isolate::Scope isolate_scope(isolate);
	HandleScope hs(isolate);

	Local<Context> ctx = Local<Context>::New(isolate,context);
	TryCatch try_catch;
	ctx->Enter();
	for (auto module : modules){
		sjs::logger::debug("Loading Module: %s", module.first.c_str());
		module.second->Init(ctx);
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

shared_ptr<Server> sampjs::Script::Server(){
	return server;
}

bool sampjs::Script::ModuleExists(std::string name){
	return (modules.find(name) != modules.end());
}

/*
int sampjs::Script::FireNative(std::string name, std::string param_types, std::vector<std::string> param_names, cell* params){
	for (auto module : modules){
		if (module.second->IsListener()){
			auto listener = (EventListener*)(modules["$server"].get());
			int retval = listener->FireNative(name, param_types, param_names, params);
			if (name == "PlayerCommandText" || name == "RconCommand"){
				if (retval == 1) return 1;
			}
			else {
				if (!retval) return 0;
			}
			
		}
	}
	if (name == "PlayerCommandText" || name == "RconCommand") return 0;
	return 1;
} */

