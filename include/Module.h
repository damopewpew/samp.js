#ifndef __SAMP_MODULE__
#define __SAMP_MODULE__



#include <memory>
#include <string>
#include <vector>
#include <include/v8.h>
#include <sdk.h>

using namespace v8;

#define V8SCOPE(ISOLATE) \
		Locker v8Locker(ISOLATE); \
		Isolate::Scope isoscope(ISOLATE); \
		HandleScope hs(ISOLATE); 

#define V8PCONTEXT(ISOLATE,CONTEXT) \
	V8SCOPE(ISOLATE) \
	auto ctx = Local<Context>::New(ISOLATE, CONTEXT); \
	Context::Scope cs(ctx); \

#define V8CONTEXT(ISOLATE,CONTEXT) \
	V8SCOPE(ISOLATE) \
	Context::Scope cs(CONTEXT); \

#define JS_SCOPE(isolate) Locker  JS_LOCKER(isolate); Isolate::Scope JS_ISOLATE_SCOPE(isolate); HandleScope JS_HANDLE_SCOPE(isolate);
#define JS_CONTEXT(isolate, ctx) Local<Context> context = Local<Context>::New(isolate,ctx);  Context::Scope JS_CONTEXT_SCOPE(context);
#define JS_CTX(context) Context::Scope JS_CONTEXT_SCOPE(context);

#define JS2CSTR(jsval, cstr) const String::Utf8Value jsString(jsval); cstr = ToCString(jsString);



inline const char* ToCString(const v8::String::Utf8Value& value){
	return *value ? *value : "<string conversion failed>";
}

inline const char* JS2CSTRING(const Local<Value>& val){
	const String::Utf8Value jsString(val);
	const char* str = ToCString(jsString);
	return str;
}

inline std::string JS2STRING(const Local<Value>& val){
	const char* str;
	JS2CSTR(val, str);
	return std::string(str);
}

inline Local<String> STRING2JS(Isolate* isolate, std::string val){
	return String::NewFromUtf8(isolate, val.c_str());
}

namespace sampjs {
	struct JS;
	class Module {
	public:
		virtual void Init(Local<Context> context) = 0;
		virtual void Shutdown() = 0;
		virtual void Tick() = 0;

		virtual std::string Name() = 0;

	};

	class JS_Object {
	public:
		JS_Object(Isolate *isolate){
			this->isolate = isolate;
			object = Object::New(isolate);
		}
		JS_Object(Local<Object> object){
			this->isolate = object->GetIsolate();
			this->object = object;
		}

		Local<Object> get(){
			return object;
		}

		Local<Value> Call(std::string funcname, int argc, Local<Value> argv[]){
			Local<Value> func = object->Get(
				String::NewFromUtf8(object->GetIsolate(), funcname.c_str()));
			if (!func->IsUndefined() && func->IsFunction()){
				Local<Function> f = Local<Function>::Cast(func);
				return f->Call(object, argc, argv);
			}
			return Boolean::New(object->GetIsolate(), false);
		}

		JS_Object* SetUndefined(std::string name){
			object->Set(
				String::NewFromUtf8(object->GetIsolate(), name.c_str()),
				Undefined(object->GetIsolate())
				);
			return this;
		}

		JS_Object* SetNull(std::string name){
			object->Set(
				String::NewFromUtf8(object->GetIsolate(), name.c_str()),
				Null(object->GetIsolate())
				);
			return this;
		}

		JS_Object* Set(std::string name, FunctionCallback callback){
			object->Set(
				String::NewFromUtf8(object->GetIsolate(), name.c_str()),
				FunctionTemplate::New(isolate, callback)->GetFunction()
				);
			return this;
		}

		JS_Object* Set(std::string name, FunctionCallback callback, PropertyAttribute attribute){
			object->ForceSet(
				String::NewFromUtf8(object->GetIsolate(), name.c_str()),
				FunctionTemplate::New(isolate, callback)->GetFunction(),
				attribute
				);
			return this;
		}


		JS_Object* Set(std::string name){
			object->Set(
				String::NewFromUtf8(object->GetIsolate(), name.c_str()),
				Null(object->GetIsolate())
				);
			return this;
		}

		JS_Object* Set(std::string name, Local<Value> value){
			object->Set(
				String::NewFromUtf8(object->GetIsolate(), name.c_str()),
				value
				);
			return this;
		}

		JS_Object* Set(std::string name, Local<Array> arr){
			object->Set(
				String::NewFromUtf8(object->GetIsolate(), name.c_str()),
				arr
				);
			return this;
		}

		JS_Object* Set(std::string name, Local<Object> obj, PropertyAttribute attribute = PropertyAttribute::None){
			object->ForceSet(
				String::NewFromUtf8(object->GetIsolate(), name.c_str()),
				obj,
				attribute
			);
		
			return this;
		}

		JS_Object* Set(std::string name, unsigned int value){
			object->Set(
				String::NewFromUtf8(object->GetIsolate(), name.c_str()),
				Integer::NewFromUnsigned(object->GetIsolate(), value)
				);
			return this;
		}

		JS_Object* Set(std::string name, int value){
			object->Set(
				String::NewFromUtf8(object->GetIsolate(), name.c_str()),
				Integer::New(object->GetIsolate(), value)
				);
			return this;
		}


		JS_Object* Set(std::string name, int64_t value){
			object->Set(
				String::NewFromUtf8(object->GetIsolate(), name.c_str()),
				Integer::New(object->GetIsolate(), (int32_t)value)
				);
			return this;
		}

		JS_Object* Set(std::string name, uint64_t value){
			object->Set(
				String::NewFromUtf8(object->GetIsolate(), name.c_str()),
				Integer::NewFromUnsigned(object->GetIsolate(), (uint32_t)value)
				);
			return this;
		}

		JS_Object* Set(std::string name, float value){
			object->Set(
				String::NewFromUtf8(object->GetIsolate(), name.c_str()),
				Number::New(object->GetIsolate(), value)
				);
			return this;
		}

		JS_Object *Set(std::string name, char* value){
			object->Set(
				String::NewFromUtf8(object->GetIsolate(), name.c_str()),
				String::NewFromUtf8(object->GetIsolate(), value)
				);
			return this;
		}

		JS_Object* Set(std::string name, std::string value){
			object->Set(
				String::NewFromUtf8(object->GetIsolate(), name.c_str()),
				String::NewFromUtf8(object->GetIsolate(), value.c_str())
			);
			return this;
		}
		
		Local<Value> getValue(std::string name){
			return object->Get(
				String::NewFromUtf8(object->GetIsolate(), name.c_str())
			);
		}

		Local<Object> getObject(std::string name){
			return Local<Object>::Cast(
				object->Get(String::NewFromUtf8(object->GetIsolate(), name.c_str()))
			);
		}
	
	private:
		Local<Object> object;
		Isolate *isolate;
	};


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


#endif