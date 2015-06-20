#ifndef __SAMP_FILESYSTEM__
#define __SAMP_FILESYSTEM__

#include "Module.h"

#include <list>
#include <memory>
#include <thread>
#include <map>


namespace sampjs {
	struct JS_Callback {
		Isolate* isolate;
		Persistent<Function, CopyablePersistentTraits<Function>> callback;
		Persistent<Context, CopyablePersistentTraits<Context>> context;
		void* data;
		JS_Callback(Local<Function> callback_){
			this->isolate = callback_->CreationContext()->GetIsolate();
			this->callback.Reset(callback_->CreationContext()->GetIsolate(), callback_);
			this->context.Reset(this->isolate, callback_->CreationContext());
		}
	};

	class FileSystem : public Module {
	public:
		
		virtual void Init(Local<Context> context);
		virtual void Shutdown();
		virtual void Tick(){}

		//static void FreeCallback(const v8::WeakCallbackData<v8::ArrayBuffer, void*>& data);

		static void rename(const FunctionCallbackInfo<Value>& args);
		static void unlink(const FunctionCallbackInfo<Value>& args);
		static void rmdir(const FunctionCallbackInfo<Value>& args);
		static void mkdir(const FunctionCallbackInfo<Value>& args);
		static void readdir(const FunctionCallbackInfo<Value>& args);
		static void open(const FunctionCallbackInfo<Value>& args);
		static void close(const FunctionCallbackInfo<Value>& args);
		static void write(const FunctionCallbackInfo<Value>& args);
		static void read(const FunctionCallbackInfo<Value>& args);
		static void readFile(const FunctionCallbackInfo<Value>& args);
		static void writeFile(const FunctionCallbackInfo<Value>& args);
		static void appendFile(const FunctionCallbackInfo<Value>& args);
		static void exists(const FunctionCallbackInfo<Value>& args);

		static std::list<std::thread*> _threads;


		static std::map<int, JS_Callback*> _callbacks;

		static int _callback_count;

	private:
		Isolate *isolate;

		void AddFunction(Local<Object> obj, std::string name, FunctionCallback callback);
	};
}


#endif