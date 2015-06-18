#ifndef __SAMP_TIMER__
#define __SAMP_TIMER__

#include "Module.h"

#include <map>
#include <chrono>
#include <ctime>

namespace sampjs {
	typedef long long time_ms;
	inline time_ms TimeMS(){
		return std::chrono::duration_cast<std::chrono::milliseconds> (std::chrono::system_clock::now().time_since_epoch()).count();
	}
	struct Timer {
		Persistent < Function, CopyablePersistentTraits<Function>> callback;
		time_ms start = 0;
		time_ms delay = 0;
		int repeat = 0;

		Timer(Local<Function> callback, int delay, int repeat = 0){
			this->callback.Reset(callback->GetIsolate(), callback);
			this->delay = delay;
			this->repeat = repeat;
			this->start = TimeMS();
		}
	};
	class Timers : public Module {
	public:
		virtual void Init(Local<Context> context);
		virtual void Shutdown();
		virtual void Tick();

		int AddTimer(Local<Function> callback, int delay, int repeat);
		void RemoveTimer(int id);

		static void JS_SetTimer(const FunctionCallbackInfo<Value> & args);
		static void JS_CancelTimer(const FunctionCallbackInfo<Value> & args);

		static Timers* GetInstance(Isolate *isolate);

	private:
		Isolate *isolate;
		Persistent < Context, CopyablePersistentTraits<Context> > context;

		std::map<int,std::shared_ptr<Timer>> timers;
		int timer_count;
	};
};

#endif