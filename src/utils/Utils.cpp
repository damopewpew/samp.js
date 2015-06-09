#include "utils/Utils.h"

#include "utils/Helpers.h"

using namespace sampjs;

sampjs::Utils::Utils(Server* sampjs){
	sampjs->SetGlobalFunction("print", sampjs::Utils::Print);
}

void sampjs::Utils::JS_Debug(const FunctionCallbackInfo<Value> & args){
	if (args.Length() > 0){
		sjs::logger::DEBUG = args[0]->BooleanValue();
	}

	return;
}

void sampjs::Utils::Print(const FunctionCallbackInfo<Value> & args){
	JS_SCOPE(args.GetIsolate());
	bool first = true;
	for (int i = 0; i < args.Length(); i++)
	{
		if (first)
			first = false;
		else
			sjs::logger::printf(" ");

		std::string t("");
		Local<String> name = STRING2JS(args.GetIsolate(), "");
		//std::string n = JS2STRING(name);
		//sjs::logger::printf("%s", n.c_str());
		PrintObject(args.GetIsolate(), name, args[i], 0);
	}
	args.GetReturnValue().SetEmptyString();
}

void sampjs::Utils::PrintObject(Isolate* isolate, Local<Value> name_, Local<Value> value, int level){
	if (value->IsObject()){
		std::string rpt = std::string(level * 4, ' ');
		std::string name2 = JS2STRING(name_);
		sjs::logger::printf("%s%s {", rpt.c_str(), name2.c_str());
		Local<Object> obj = value->ToObject();
		Local<v8::Array> ar = obj->GetPropertyNames();
		uint32_t length = ar->Length();
		for (uint32_t j = 0; j < length; j++){
			Local<Value> name = ar->Get(Int32::New(isolate, j));
			Local<Value> val = obj->Get(name);
			if (val->IsObject()){
				PrintObject(isolate, name, val, level + 1);
			}
			else {
				std::string name1 = JS2STRING(name);
				std::string value1 = JS2STRING(val);
				sjs::logger::printf("%s    %s: %s", rpt.c_str(), name1.c_str(), value1.c_str());
			}
		}
		sjs::logger::printf("%s}", rpt.c_str());
	}
	else {
		std::string n = JS2STRING(value);
		sjs::logger::printf("%s", n.c_str());
	}
}

void sampjs::Utils::PrintException(TryCatch *try_catch){
	String::Utf8Value exception(try_catch->Exception());
	const char* exception_string = *exception;
	Local<Message> message = try_catch->Message();

	if (message.IsEmpty()){
		sjs::logger::error("%s", exception_string);
	}
	else {
		String::Utf8Value filename(message->GetScriptOrigin().ResourceName());
		const char* filename_string = *filename;
		int linenum = message->GetLineNumber();

		sjs::logger::error("%s:%i: %s", filename_string, linenum, exception_string);
		String::Utf8Value sourceline(message->GetSourceLine());
		const char* sourceline_string = *sourceline;
		sjs::logger::error("%s", sourceline_string);

	}
}