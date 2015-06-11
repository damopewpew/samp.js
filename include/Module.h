
namespace sampjs {
	class Module {
	public:
		virtual void Shutdown() = 0;
	};

#include <string>
#include <include/v8.h>
	using namespace v8;
	class JS_Module {
	public:
		static inline void AddFunction(Local<Object> object, std::string name, FunctionCallback callback){
			object->Set(String::NewFromUtf8(object->GetIsolate(), name.c_str()), FunctionTemplate::New(object->GetIsolate(), callback)->GetFunction());
		}

		static inline void AddFunction(Local<ObjectTemplate> object, Isolate *isolate, std::string name, FunctionCallback callback){
			object->Set(String::NewFromUtf8(isolate, name.c_str()), FunctionTemplate::New(isolate, callback)->GetFunction());
		}	
	};

	class JSObjectTemplate {
	public:
		JSObjectTemplate(Isolate *isolate):isolate(isolate){
			
			obj_tmpl = ObjectTemplate::New();
		}

		inline Local<ObjectTemplate> GetRaw(){
			return obj_tmpl;
		}

		inline void Set(std::string name, FunctionCallback callback){
			obj_tmpl->Set(String::NewFromUtf8(isolate, name.c_str()), FunctionTemplate::New(isolate, callback)->GetFunction());
		}

		inline void Set(std::string name, Local<Object> object){
			obj_tmpl->Set(String::NewFromUtf8(isolate, name.c_str()), object);
		}

		inline void Set(std::string name, Local<Value> val){
			obj_tmpl->Set(String::NewFromUtf8(isolate, name.c_str()), val);
		}

	private:
		Isolate *isolate;
		Local<ObjectTemplate> obj_tmpl;
	};
};
