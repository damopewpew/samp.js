#include "utils/SAMP_Utils.h"

SAMP_Utils::SAMP_Utils(SAMP_JS* sampjs){
	sampjs->SetGlobalFunction("print", SAMP_Utils::Print);
}

void SAMP_Utils::Print(const FunctionCallbackInfo<Value> & args){
	JS_SCOPE(args.GetIsolate());
	bool first = true;
	for (int i = 0; i < args.Length(); i++)
	{
		if (first)
			first = false;
		else
			printf(" ");

		std::string t("");
		Local<String> name = STRING2JS(args.GetIsolate(), "");
		std::string n = JS2STRING(name);
		printf("%s", n.c_str());
		PrintObject(args.GetIsolate(), name, args[i], 0);
	}
	args.GetReturnValue().SetEmptyString();
}

void SAMP_Utils::PrintObject(Isolate* isolate, Local<Value> name_, Local<Value> value, int level){
	if (value->IsObject()){
		std::string rpt = std::string(level * 4, ' ');
		std::string name2 = JS2STRING(name_);
		printf("%s%s {\n", rpt.c_str(),name2.c_str() );
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
				printf("%s    %s: %s\n", rpt.c_str(),name1.c_str(),value1.c_str());
			}
		}
		printf("%s}\n", rpt.c_str());
	}
	else {
		std::string n = JS2STRING(value);
		printf("%s\n",n.c_str());
	}
}