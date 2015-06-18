#include "io/Timers.h"
#include "utils/Utils.h"
#include "utils/Helpers.h"

using namespace sampjs;

void Timers::Init(Local<Context> ctx){
	isolate = ctx->GetIsolate();

	Locker v8Locker(isolate);
	Isolate::Scope isoscope(isolate);
	HandleScope hs(isolate);
	context.Reset(isolate, ctx);
	Context::Scope context_scope(ctx);

	JS_Object global(ctx->Global());

	JSObjectTemplate timer_tmpl(isolate);
	timer_tmpl.GetRaw()->SetInternalFieldCount(1);

	Local<Object> timer = timer_tmpl.GetRaw()->NewInstance();
	timer->SetInternalField(0, External::New(isolate,this));

	global.Set("$timers", timer);

	global.Set("SetTimer", Timers::JS_SetTimer);
	global.Set("CancelTimer", Timers::JS_CancelTimer);
}

void Timers::Shutdown(){
	context.Reset();
}

void Timers::Tick(){
	time_ms current = TimeMS();
	

	if (!timers.empty()){
		Locker v8Locker(isolate);
		Isolate::Scope isoscope(isolate); 
		HandleScope hs(isolate);
		Local<Context> ctx = Local<Context>::New(isolate, context);
		Context::Scope ctxscope(ctx);

		for (auto timer = timers.cbegin(); timer != timers.cend();){
			if (timer->second->start + timer->second->delay <= current){
				TryCatch try_catch;
				Local<Function> func = Local<Function>::New(isolate, timer->second->callback);

				func->Call(func->CreationContext()->Global(), 0, NULL);
				if (try_catch.HasCaught()){
					isolate->CancelTerminateExecution();
					Utils::PrintException(&try_catch);
				}
				if (timer->second->repeat == 0) timers.erase(timer++);
				else{
					if (timer->second->repeat > 0) timer->second->repeat--;
					timer->second->start = current;
					++timer;
				}
			}
			else {
				++timer;
			}
		}
	}
}

int Timers::AddTimer(Local<Function> callback, int delay, int repeat = 0){
	timers[timer_count] = std::make_shared<Timer>(callback, delay, repeat);
	return timer_count++;
}

void Timers::RemoveTimer(int id){
	timers.erase(id);
}

void Timers::JS_SetTimer(const FunctionCallbackInfo<Value> & args){
	if (args.Length() < 2){
		sjs::logger::error("SetTimer takes at least 2 arguments - SetTimer(callback,delay,[repeat=0])");
		return;
	}

	if (!args[0]->IsFunction()){
		sjs::logger::error("SetTimer 1st argument must be a function/callback");
		return;
	}

	Local<Function> func = Local<Function>::Cast(args[0]);
	int delay = args[1]->Uint32Value();
	int repeat = 0;
	if (args.Length() > 2){
		repeat = args[2]->Int32Value();
	}

	Timers *timers = Timers::GetInstance(args.GetIsolate());


	int id = timers->AddTimer(func, delay, repeat);

	args.GetReturnValue().Set(id);
}

void Timers::JS_CancelTimer(const FunctionCallbackInfo<Value> & args){
	if (args.Length() < 1){
		return;
	}
	int id = args[0]->Int32Value();

	Timers *timers = Timers::GetInstance(args.GetIsolate());

	timers->RemoveTimer(id);
}


Timers* Timers::GetInstance(Isolate *isolate){
	JS_Object global(isolate->GetCallingContext()->Global());
	auto self = global.getObject("$timers");
	auto wrap = Local<External>::Cast(self->GetInternalField(0));
	void *ptr = wrap->Value();
	Timers* timers = static_cast<Timers*>(ptr);
	return timers;
}

