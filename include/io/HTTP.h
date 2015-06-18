#ifndef __SAMP_HTTP__
#define __SAMP_HTTP__

#include "Module.h"

#include <map>


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
	class HTTP : public Module {
	public:
		virtual void Init(Local<Context> context);
		virtual void Shutdown();
		virtual void Tick(){ }

		static void JS_Get(const FunctionCallbackInfo<Value> & args);

		static std::string Get(std::string url);

		static std::map<int, HTTP_Request*> requests;
		static int requests_id;
	};
};
#endif;