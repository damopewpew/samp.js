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
	struct PublicDef {
		std::string event;
		std::string name;
		std::string format;
		std::vector<std::string> arg_names;
		bool cancel = false;
		PublicDef(std::string namex="", std::string eventx="", std::string formatx="", bool cancelx=false) :
			name(namex), event(eventx), format(formatx), cancel(cancelx) {
			
		}

	};
	class Script {
	public:
		Script();
		bool Init(std::string filename);
		void Unload();
		void Tick();

		bool IsReady();

		static std::unordered_map<std::string, PublicDef *> _publics;

		static void JS_RequireScript(const FunctionCallbackInfo<Value> & args);
		static void JS_LoadScript(const FunctionCallbackInfo<Value> & args);

		static void JS_SetLocale(const FunctionCallbackInfo<Value> & args);

		static void JS_RegisterPublic(const FunctionCallbackInfo<Value> & args);
		
		static std::string SearchScript(std::string filename, std::string directory );
		static Local<Value> RequireScript(std::string name, Isolate *isolate, Local<Context> context);
		static Local<Value> LoadScript(std::string filename, Isolate *isolate, Local<Context> context);
		
		bool PublicCall(std::string name, cell *params, bool & shouldReturn);

		void LoadModules();
		bool ModuleExists(std::string name);

		Local<Value> ExecuteCode(std::string name, std::string code);

		std::shared_ptr<sampjs::Server> Server();

	private:
		bool ready;

		Isolate *isolate;
		v8::Persistent<v8::Context,CopyablePersistentTraits<Context>> context;
		std::string filename;
		std::vector<std::shared_ptr<Module>> modules;
		//std::map<std::string, std::shared_ptr<Module>> modules;
		std::shared_ptr<sampjs::Server> server;

	};
};

#endif