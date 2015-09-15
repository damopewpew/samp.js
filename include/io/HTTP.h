#ifndef __SAMP_HTTP__
#define __SAMP_HTTP__

#include "Module.h"

#include <map>

#include <functional>


namespace sampjs {
	struct HTTP_Request {
		std::string url;
		Isolate* isolate;
		Persistent<Function, CopyablePersistentTraits<Function>> callback;
		Persistent<Context, CopyablePersistentTraits<Context>> context;
		HTTP_Request(std::string url_, Local<Function> callback_){
			this->url = url_;
			this->isolate = callback_->CreationContext()->GetIsolate();
			this->callback.Reset(callback_->CreationContext()->GetIsolate(), callback_);
			this->context.Reset(this->isolate, callback_->CreationContext());
		}
	};
	class HTTPJS : public Module {
	public:
		virtual void Init(Local<Context> context);
		virtual void Shutdown();
		virtual void Tick(){ }

		virtual std::string Name(){ return "HTTP"; };

		static void JS_Get(const FunctionCallbackInfo<Value> & args);

		static void Get(std::string url, std::function<void(std::string, std::string)> callback);

		static std::map<int, HTTP_Request*> requests;
		static int requests_id;
	};
};
#endif