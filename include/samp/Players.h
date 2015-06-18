#ifndef __SAMP_PLAYERS__
#define __SAMP_PLAYERS__

#include <include/v8.h>

#include "Module.h"

#include <map>

using namespace v8;

namespace sampjs {
	class Players : public Module {
	public:

		virtual void Init( Local<Context> context);
		virtual void Shutdown();
		virtual void Tick(){};

		void GetPlayer(const FunctionCallbackInfo<Value> & args);

		static void CreatePlayer(const FunctionCallbackInfo<Value> & args);

		Local<Object> GetPlayerObject(int playerid);

		void AddPlayer(int playerid);
		void RemovePlayer(int playerid);

	private:
		Isolate *isolate;
		Persistent<Context, CopyablePersistentTraits<Context>> context;
	};
};

#endif