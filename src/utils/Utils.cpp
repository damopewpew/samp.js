#include "utils/Utils.h"

#include "utils/Helpers.h"

#ifdef WIN32
#include <Windows.h>
#endif
#include "SAMPJS.h"

#include <iostream>
using namespace sampjs;

void sampjs::Utils::Init(Local<Context> ctx){
	
	JS_Object obj(ctx->Global());
	obj.Set("print", sampjs::Utils::Print);

	JS_Object console(ctx->GetIsolate());

	console.Set("log", JS_ConsoleLog);
	console.Set("debug", JS_ConsoleDebug);
	console.Set("error", JS_ConsoleError);

	obj.Set("console", console.get());
}

void sampjs::Utils::Shutdown(){
	// Do Cleanup
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
		PrintObject(args.GetIsolate(), name, args[i], 0, CONSOLE_NORMAL);
	}
	args.GetReturnValue().SetEmptyString();
}

void sampjs::Utils::JS_ConsoleLog(const FunctionCallbackInfo<Value> & args){
	JS_SCOPE(args.GetIsolate());
	bool first = true;
	for (int i = 0; i < args.Length(); i++)
	{
		if (first)
			first = false;
		else
			sjs::logger::log(" ");

		std::string t("");
		Local<String> name = STRING2JS(args.GetIsolate(), "");
		//std::string n = JS2STRING(name);
		//sjs::logger::printf("%s", n.c_str());
		PrintObject(args.GetIsolate(), name, args[i], 0, CONSOLE_LOG);
	}
	args.GetReturnValue().SetEmptyString();
}

void sampjs::Utils::JS_ConsoleDebug(const FunctionCallbackInfo<Value> & args){
	JS_SCOPE(args.GetIsolate());
	bool first = true;
	for (int i = 0; i < args.Length(); i++)
	{
		if (first)
			first = false;
		else
			sjs::logger::debug(" ");

		std::string t("");
		Local<String> name = STRING2JS(args.GetIsolate(), "");
		//std::string n = JS2STRING(name);
		//sjs::logger::printf("%s", n.c_str());
		PrintObject(args.GetIsolate(), name, args[i], 0, CONSOLE_DEBUG);
	}
	args.GetReturnValue().SetEmptyString();
}


void sampjs::Utils::JS_ConsoleError(const FunctionCallbackInfo<Value> & args){
	JS_SCOPE(args.GetIsolate());
	bool first = true;
	for (int i = 0; i < args.Length(); i++)
	{
		if (first)
			first = false;
		else
			sjs::logger::error(" ");

		std::string t("");
		Local<String> name = STRING2JS(args.GetIsolate(), "");
		//std::string n = JS2STRING(name);
		//sjs::logger::printf("%s", n.c_str());
		PrintObject(args.GetIsolate(), name, args[i], 0, CONSOLE_ERROR );
	}
	args.GetReturnValue().SetEmptyString();
}

void sampjs::Utils::PrintObject(Isolate* isolate, Local<Value> name_, Local<Value> value, int level, int mode=CONSOLE_NORMAL){
	if (value->IsObject()){
		std::string rpt = std::string(level * 4, ' ');
		std::string name2 = JS2STRING(name_);
		
		switch (mode){
		case CONSOLE_NORMAL:
			sjs::logger::printf("%s%s {", rpt.c_str(), name2.c_str());
			break;
		case CONSOLE_LOG:
			sjs::logger::log("%s%s {", rpt.c_str(), name2.c_str());
			break;
		case CONSOLE_DEBUG:
			sjs::logger::debug("%s%s {", rpt.c_str(), name2.c_str());
			break;
		case CONSOLE_ERROR:
			sjs::logger::error("%s%s {", rpt.c_str(), name2.c_str());
			break;
		}

		Local<Object> obj = value->ToObject();
		Local<v8::Array> ar = obj->GetPropertyNames();
		uint32_t length = ar->Length();
		for (uint32_t j = 0; j < length; j++){
			Local<Value> name = ar->Get(Int32::New(isolate, j));
			Local<Value> val = obj->Get(name);
			if (val->IsObject()){
				PrintObject(isolate, name, val, level + 1, mode);
			}
			else {
				std::string name1 = JS2STRING(name);
				std::string value1 = JS2STRING(val);
				switch (mode){
				case CONSOLE_NORMAL:
					sjs::logger::printf("%s    %s: %s", rpt.c_str(), name1.c_str(), value1.c_str());
					break;
				case CONSOLE_LOG:
					sjs::logger::log("%s    %s: %s", rpt.c_str(), name1.c_str(), value1.c_str());
					break;
				case CONSOLE_DEBUG:
					sjs::logger::debug("%s    %s: %s", rpt.c_str(), name1.c_str(), value1.c_str());
					break;
				case CONSOLE_ERROR:
					sjs::logger::error("%s    %s: %s", rpt.c_str(), name1.c_str(), value1.c_str());
					break;
				}
				
			}
		}
		switch (mode){
		case CONSOLE_NORMAL:
			sjs::logger::printf("%s}", rpt.c_str());
			break;
		case CONSOLE_LOG:
			sjs::logger::log("%s}", rpt.c_str());
			break;
		case CONSOLE_DEBUG:
			sjs::logger::debug("%s}", rpt.c_str());
			break;
		case CONSOLE_ERROR:
			sjs::logger::error("%s}", rpt.c_str());
			break;
		}
		
	}
	else {
	//	setlocale(LC_ALL, "Russian");
	//	LPCWSTR wstr = (LPCWSTR)* String::Value(value);
	//	const wchar_t *wstr = (wchar_t*)*String::Value(value);
	//	char* sstr = new char[wcslen(wstr)+1];
	//	wcstombs(sstr, wstr, wcslen(wstr));
	//	sstr[wcslen(wstr)] = '\0';
	//	std::string n = JS2STRING(value);
		

		String::Value jstring(value);
		wchar_t *wstr = (wchar_t*)*jstring;
		size_t slen = value->ToString()->Length();
		char* sstr = new char[slen + 1];
		wcstombs(sstr, wstr, slen + 1);
		
		switch (mode){
		case CONSOLE_NORMAL:
			sjs::logger::printf("%s", sstr);
			break;
		case CONSOLE_LOG:
			sjs::logger::log("%s", sstr);
			break;
		case CONSOLE_DEBUG:
			sjs::logger::debug("%s", sstr);
			break;
		case CONSOLE_ERROR:
			sjs::logger::error("%s", sstr);
			break;
		}

		delete[] sstr;
		//printf("%s\n", n.c_str());
		//wprintf(L"%s\n", n2);
	//	std::cout << n2 << std::endl;
		//sjs::logger::printf("%s", wstr);
		//std::wcout << wstr << std::endl;
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