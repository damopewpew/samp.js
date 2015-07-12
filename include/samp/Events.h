#ifndef __SAMP_EVENTS__
#define __SAMP_EVENTS__


#include "sdk.h"

#include <string>
#include <vector>
#include <list> 
#include <include/v8.h>
#include <include/libplatform/libplatform.h>

#include "Module.h"

namespace sampjs {

	class Events : public Module {
	public:
		static void Bind(const v8::FunctionCallbackInfo<v8::Value>& args);

		virtual void Init(Local<Context> context);
		virtual void Shutdown();
		virtual void Tick(){};

		virtual std::string Name(){ return "Events"; };

		void FireEvent(std::string name);
		void FireEvent(std::string name, const int argc, v8::Local<v8::Value> argv[]);

		int FireNative(std::string name, std::string param_types, std::vector<std::string> param_names, AMX* amx, cell* params);
	private:
		Isolate *isolate;
	};
};

#endif