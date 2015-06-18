#ifndef __SAMPJS__
#define __SAMPJS__

#include <string>
#include <map>
#include <memory>

#include "Script.h"

#include <sdk.h>

using namespace std;

namespace sampjs {
	class Script;
	class SAMPJS {
	public:
		static AMX *amx;
		static string v8flags;

		static void Init();
		static void Shutdown();
		static void ProcessTick();

		static void CreateScript( string filename );
		static void RemoveScript( string filename );
		static bool ScriptLoaded( string filename );

		static void JS_Load(const FunctionCallbackInfo<Value> & args);
		static void JS_Unload(const FunctionCallbackInfo<Value> & args);
		static void JS_Reload(const FunctionCallbackInfo<Value> & args);

		


		static map<string, shared_ptr<Script>> GetScripts();
		
		static map<string, shared_ptr<Script>> scripts;
	};
};

#endif