#ifndef __SAMP_FILESYSTEM__
#define __SAMP_FILESYSTEM__

#include "Module.h"

#include <list>
#include <memory>
#include <thread>
#include <map>


#include <boost/filesystem/fstream.hpp>


namespace sampjs {
	struct JS_Callback {
		Isolate* isolate;
		Persistent<Function, CopyablePersistentTraits<Function>> callback;
		Persistent<Context, CopyablePersistentTraits<Context>> context;
		JS_Callback(Local<Function> callback_){
			this->isolate = callback_->CreationContext()->GetIsolate();
			this->callback.Reset(callback_->CreationContext()->GetIsolate(), callback_);
			this->context.Reset(this->isolate, callback_->CreationContext());
		}
	};

	struct JS_AB {
		Persistent<ArrayBuffer> ab;
		std::vector<char> buffer;
		unsigned int id = 0;
	};

	class FileSystem : public Module {
	public:
		
		virtual void Init(Local<Context> context);
		virtual void Shutdown();
		virtual void Tick(){}

		virtual std::string Name(){ return "FileSystem"; };

		static void FreeCallback(const WeakCallbackInfo<JS_AB>& data);

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

		Local<ArrayBuffer> FileSystem::readFile(std::string filename);

		std::map<unsigned int, JS_Callback*> _cbLocal;
		int _cbLocalCount;
		
		int _bufferCount;
		std::map<unsigned int,JS_AB*> buffers;

		static std::vector<boost::filesystem::ifstream*> file_handles;

	private:
		Isolate *isolate;
		Persistent<Context, CopyablePersistentTraits<Context>> context;

		

		void AddFunction(Local<Object> obj, std::string name, FunctionCallback callback);
	};
}


#endif