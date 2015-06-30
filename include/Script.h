#ifndef __SCRIPT__
#define __SCRIPT__

#include <string>
#include <vector>
#include <map>
#include <memory>

#include <include/v8.h>


#include "Module.h"
#include "samp/Server.h"

#include <sdk.h>

namespace sampjs {
	class Script {
	public:
		Script();
		void Init(std::string filename);
		void Unload();
		void Tick();

		bool IsReady();


		static void JS_RequireScript(const FunctionCallbackInfo<Value> & args);
		static void JS_LoadScript(const FunctionCallbackInfo<Value> & args);
		
		static std::string SearchScript(std::string filename, std::string directory );
		static Local<Value> RequireScript(std::string name, Isolate *isolate, Local<Context> context);
		static Local<Value> LoadScript(std::string filename, Isolate *isolate, Local<Context> context);
		

		void LoadModules();
		bool ModuleExists(std::string name);

		Local<Value> ExecuteCode(std::string name, std::string code);

		std::shared_ptr<sampjs::Server> Server();

	private:
		bool ready;

		Isolate *isolate;
		v8::Persistent<v8::Context,CopyablePersistentTraits<Context>> context;
		std::string filename;
		std::map<std::string, std::shared_ptr<Module>> modules;
		std::shared_ptr<sampjs::Server> server;

	};
};

#endif