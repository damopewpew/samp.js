#ifndef __SAMP_EVENTS__
#define __SAMP_EVENTS__


#include "sdk.h"

#include <string>
#include <vector>
#include <list> 
#include <include/v8.h>
#include <include/libplatform/libplatform.h>


namespace sampjs {
	class Server;

	class Events {
	public:
		static void Bind(const v8::FunctionCallbackInfo<v8::Value>& args);

		Events(Server* sampjs);
		void FireEvent(std::string name);
		void FireEvent(std::string name, const int argc, v8::Local<v8::Value> argv[]);

		int FireNative(std::string name, std::string param_types, std::vector<std::string> param_names, AMX* amx, cell* params);
	private:
		Server* _sampjs;

	};
};

#endif