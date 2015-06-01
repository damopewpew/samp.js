#include "samp/SAMP_Player.h"

#include <string>

using namespace std;

std::list<SAMP_Player*> SAMP_Player::players;

int SAMP_Player::player_gname_idx = NULL;
int SAMP_Player::player_sname_idx = NULL;
int SAMP_Player::player_gpos_idx = NULL;
int SAMP_Player::player_spos_idx = NULL;

SAMP_Player::SAMP_Player(int playerid, AMX* amx){
	this->_amx = amx;
	this->_playerid = playerid;
}

Local<Object> SAMP_Player::CreatePlayer(int playerid, SAMP_JS* sampjs){

	Locker v8Locker(sampjs->GetIsolate());
	Isolate::Scope isolate_scope(sampjs->GetIsolate());
	EscapableHandleScope handle_scope(sampjs->GetIsolate());

	Local<ObjectTemplate> player_templ = ObjectTemplate::New(sampjs->GetIsolate());
	
	player_templ->SetInternalFieldCount(1);

	player_templ->Set(String::NewFromUtf8(sampjs->GetIsolate(), "Pos"), FunctionTemplate::New(sampjs->GetIsolate(), SAMP_Player::GetPos));
	
	const NamedPropertyHandlerConfiguration handler(SAMP_Player::Get, SAMP_Player::Set);
	player_templ->SetHandler(handler);

	SAMP_Player *player = new SAMP_Player(playerid, sampjs->GetAMX());

	Local<Object> obj = player_templ->NewInstance();
	obj->SetInternalField(0, External::New(sampjs->GetIsolate(), player));

	// Init the players name


	return handle_scope.Escape(obj);
}



void SAMP_Player::Get(Local<Name> name, const PropertyCallbackInfo<Value>& info){
	Locker v8Locker(info.GetIsolate());
	Isolate::Scope isolate_scope(info.GetIsolate());
	Local<Object> self = info.Holder();
	Local<External> wrap = Local<External>::Cast(self->GetInternalField(0));
	void* ptr = wrap->Value();

	SAMP_Player* player = static_cast<SAMP_Player*>(ptr);

	v8::String::Utf8Value str(name->ToString());
	const char* prop = *str;
	string m_name = string(prop);


	printf("Get: %s\n\n", prop);
	if (m_name == "name"){
		if (player->_name == "") player->GetPlayerName(info.GetIsolate());
		Local<Value> n = String::NewFromUtf8(info.GetIsolate(), player->_name.c_str());
		info.GetReturnValue().Set(n);
	}
	else if (m_name == "toString"){
		info.GetReturnValue().SetEmptyString();
	}
	else if (m_name == "id"){
		info.GetReturnValue().Set(player->_playerid);
	} 
	else if (m_name == "pos"){
		info.GetReturnValue().Set(player->GetPos(info.GetIsolate()));
	}

	

}

void SAMP_Player::Set(Local<Name> name, Local<Value> value, const PropertyCallbackInfo<Value>& info){
	Locker v8Locker(info.GetIsolate());
	Isolate::Scope isolate_scope(info.GetIsolate());
	Local<Object> self = info.Holder();
	Local<External> wrap = Local<External>::Cast(self->GetInternalField(0));
	void* ptr = wrap->Value();

	SAMP_Player* player = static_cast<SAMP_Player*>(ptr);

	v8::String::Utf8Value str(name->ToString());
	const char* prop = *str;
	string m_name = string(prop);

	printf("Set %s\n", prop);

	if (m_name == "name"){
		player->SetPlayerName(info.GetIsolate(), value);
	}
	else if (m_name == "pos"){
		if (value->IsArray()){
			printf("Is Array\n");
			Local<Array> p = Local<Array>::Cast(value);
			Vector3 pos;
			float angle;
			pos.x = (float)p->Get(0)->NumberValue();
			pos.y = (float)p->Get(1)->NumberValue();
			if(p->Length() > 2) pos.z = (float)p->Get(2)->NumberValue();
			else {
				pos.z = player->_position.z;
			}

			if (p->Length() > 3){
				angle = (float)p->Get(3)->NumberValue();
			}
			else {
				angle = player->_angle;
			}
			
			player->SetPosition(info.GetIsolate(), pos);
			player->SetAngle(info.GetIsolate(), angle);

		}
		else if (value->IsObject()){
			printf("Is Object\n");
			Local<Object> p = Local<Object>::Cast(value);

			float angle;
			Vector3 pos;
			pos.x = (float)p->Get(String::NewFromUtf8(info.GetIsolate(), "x"))->NumberValue();
			pos.y = (float)p->Get(String::NewFromUtf8(info.GetIsolate(), "y"))->NumberValue();
			pos.z = (float)p->Get(String::NewFromUtf8(info.GetIsolate(), "z"))->NumberValue();

			angle = (float)p->Get(String::NewFromUtf8(info.GetIsolate(), "a"))->NumberValue();

			player->SetPosition(info.GetIsolate(), pos);
			player->SetAngle(info.GetIsolate(), angle);
		}
	}
	return;
}

Local<Object> SAMP_Player::GetPos(Isolate* isolate){
	Vector3 pos = this->GetPosition(isolate);
	float angle = this->GetAngle(isolate);
	Local<Object> p = Object::New(isolate);
	p->Set(String::NewFromUtf8(isolate, "x"), Number::New(isolate, pos.x));
	p->Set(String::NewFromUtf8(isolate, "y"), Number::New(isolate, pos.y));
	p->Set(String::NewFromUtf8(isolate, "z"), Number::New(isolate, pos.z));
	p->Set(String::NewFromUtf8(isolate, "a"), Number::New(isolate, angle));

	return p;
}

void SAMP_Player::ValueOf(const v8::FunctionCallbackInfo<v8::Value>& args){
	Locker v8Locker(args.GetIsolate());
	Isolate::Scope isolate_scope(args.GetIsolate());
	Local<Object> self = args.Holder();
	Local<External> wrap = Local<External>::Cast(self->GetInternalField(0));
	void* ptr = wrap->Value();

	SAMP_Player* player = static_cast<SAMP_Player*>(ptr);

	args.GetReturnValue().Set(player->_playerid);
}

void SAMP_Player::GetName(const v8::FunctionCallbackInfo<v8::Value>& args){
	Locker v8Locker(args.GetIsolate());
	Isolate::Scope isolate_scope(args.GetIsolate());
	Local<Object> self = args.Holder();
	Local<External> wrap = Local<External>::Cast(self->GetInternalField(0));
	void* ptr = wrap->Value();

	SAMP_Player* player = static_cast<SAMP_Player*>(ptr);

	player->_name = player->GetPlayerName(args.GetIsolate());
	Local<Value> n = String::NewFromUtf8(args.GetIsolate(), player->_name.c_str());
	args.GetReturnValue().Set(n);
}

void SAMP_Player::GetPos(const v8::FunctionCallbackInfo<v8::Value>& args){
	Locker v8Locker(args.GetIsolate());
	Isolate::Scope isolate_scope(args.GetIsolate());
	Local<Object> self = args.Holder();
	Local<External> wrap = Local<External>::Cast(self->GetInternalField(0));
	void* ptr = wrap->Value();

	SAMP_Player* player = static_cast<SAMP_Player*>(ptr);


	//printf("Get Pos Args Length %i\n", args.Length());
	if (args.Length() < 1 ){
		Vector3 pos = player->GetPosition(args.GetIsolate());
		Local<Object> p = Object::New(args.GetIsolate());
		p->Set(String::NewFromUtf8(args.GetIsolate(), "x"), Number::New(args.GetIsolate(), pos.x));
		p->Set(String::NewFromUtf8(args.GetIsolate(), "y"), Number::New(args.GetIsolate(), pos.y));
		p->Set(String::NewFromUtf8(args.GetIsolate(), "z"), Number::New(args.GetIsolate(), pos.z));
		args.GetReturnValue().Set(p);
	}
	else if (args.Length() == 1 && (args[0]->IsInt32() || args[0]->IsBoolean())){
		Vector3 pos = player->_position;
		Local<Object> p = Object::New(args.GetIsolate());
		p->Set(String::NewFromUtf8(args.GetIsolate(), "x"), Number::New(args.GetIsolate(), pos.x));
		p->Set(String::NewFromUtf8(args.GetIsolate(), "y"), Number::New(args.GetIsolate(), pos.y));
		p->Set(String::NewFromUtf8(args.GetIsolate(), "z"), Number::New(args.GetIsolate(), pos.z));
		args.GetReturnValue().Set(p);
	}

	else if (args.Length() == 1 && args[0]->IsArray()){
		Local<Array> p = Local<Array>::Cast(args[0]);
		Vector3 pos;
		pos.x = (float)p->Get(0)->NumberValue();
		pos.y = (float)p->Get(1)->NumberValue();
		pos.z = (float)p->Get(2)->NumberValue();

		player->SetPosition(args.GetIsolate(), pos);

	}
	else if (args.Length() == 1 && args[0]->IsObject()){
		Local<Object> p = Local<Object>::Cast(args[0]);
		
		Vector3 pos;
		pos.x = (float)p->Get(String::NewFromUtf8(args.GetIsolate(), "x"))->NumberValue();
		pos.y = (float)p->Get(String::NewFromUtf8(args.GetIsolate(), "y"))->NumberValue();
		pos.z = (float)p->Get(String::NewFromUtf8(args.GetIsolate(), "z"))->NumberValue();

		player->SetPosition(args.GetIsolate(), pos);

	}

	else if (args.Length() > 2){
		Vector3 pos;
		pos.x = (float)args[0]->NumberValue();
		pos.y = (float)args[1]->NumberValue();
		pos.z = (float)args[2]->NumberValue();

		player->SetPosition(args.GetIsolate(), pos);
	}


	
}

void SAMP_Player::SetPos(const v8::FunctionCallbackInfo<v8::Value> &args){
	Locker v8Locker(args.GetIsolate());
	//printf("SetPos Function\n");
	Isolate::Scope isolate_scope(args.GetIsolate());
	Local<Object> self = args.Holder();
	Local<External> wrap = Local<External>::Cast(self->GetInternalField(0));
	void* ptr = wrap->Value();

	SAMP_Player* player = static_cast<SAMP_Player*>(ptr);

	Vector3 position(0.0,0.0,0.0);
	if (args.Length() > 1){
		Local<Value> x = args[0];
		Local<Value> y = args[1];
		Local<Value> z = args[2];

		position.x = (float)x->NumberValue();
		position.y = (float)y->NumberValue();
		position.z = (float)z->NumberValue();

		printf("XYZ %f %f %f", position.x, position.y, position.z);
	}
	else {
		Local<Object> p = Local<Object>::Cast(args[0]);
		Local<Value> x = p->Get(String::NewFromUtf8(args.GetIsolate(), "x"));
		Local<Value> y = p->Get(String::NewFromUtf8(args.GetIsolate(), "y"));
		Local<Value> z = p->Get(String::NewFromUtf8(args.GetIsolate(), "z"));

		position.x = (float)x->NumberValue();
		position.y = (float)y->NumberValue();
		position.z = (float)z->NumberValue();
	}
	player->SetPosition(args.GetIsolate(), position);
}




std::string SAMP_Player::GetPlayerName(Isolate* isolate){
	if (player_gname_idx == NULL){

		if (amx_FindNative(_amx, "GetPlayerName", &player_gname_idx)){
		//	printf("Error Calling Native GetPlayerName\n");
		}
	}
	AMX_HEADER * amx_hdr = (AMX_HEADER *)_amx->base;
	unsigned int amx_addr = (unsigned int)((AMX_FUNCSTUB *)((char*)amx_hdr + amx_hdr->natives + amx_hdr->defsize * player_gname_idx))->address;

	cell * params = new cell[4];
	params[0] = 4 * sizeof(cell);
	cell *physAddr;

	params[1] = _playerid;

	amx_Allot(_amx, 50, &params[2], &physAddr);
	params[3] = 50;

	amx_Function_t amx_Function = (amx_Function_t)amx_addr;

	amx_Function(_amx, params);

	char* str = new char[50];
	amx_GetString(str, physAddr, 0, 50);
	amx_Release(_amx, params[2]);

	_name = str;

	//printf("Players Name: %s\n", str);
	return _name;
}

void SAMP_Player::SetPlayerName(Isolate* isolate, Local<Value> value){

	//printf("Setting Name**\n");
	//printf("idx val: %d", player_sname_idx);
	if (player_sname_idx == NULL){
		//printf("Player Name Idx Not Set\n");
		amx_FindNative(_amx, "SetPlayerName", &player_sname_idx);
	}

	AMX_HEADER * amx_hdr = (AMX_HEADER *)_amx->base;
	unsigned int amx_addr = (unsigned int)((AMX_FUNCSTUB *)((char*)amx_hdr + amx_hdr->natives + amx_hdr->defsize * player_sname_idx))->address;

	cell* params = new cell[2];
	params[0] = 2 * sizeof(cell);
	cell *physAddr;

	params[1] = _playerid;

	String::Utf8Value str(value);
	const char* name = *str;
	amx_Allot(_amx, strlen(name) + 1, &params[2], &physAddr);
	amx_SetString(physAddr, name, 0, 0, strlen(name) + 1);

	amx_Function_t amx_Function = (amx_Function_t)amx_addr;
	amx_Function(_amx, params);

	this->_name = name;
}

Vector3 SAMP_Player::GetPosition(Isolate* isolate){
	
	if (player_gpos_idx == NULL){
		amx_FindNative(_amx, "GetPlayerPos", &player_gpos_idx);
	}
	AMX_HEADER * amx_hdr = (AMX_HEADER *)_amx->base;
	unsigned int amx_addr = (unsigned int)((AMX_FUNCSTUB *)((char*)amx_hdr + amx_hdr->natives + amx_hdr->defsize * player_gpos_idx))->address;

	cell * params = new cell[5];
	params[0] = 4 * sizeof(cell);
	cell *physAddr[3];

	params[1] = _playerid;

	
	amx_Allot(_amx, 1, &params[2], &physAddr[0]);
	amx_Allot(_amx, 1, &params[3], &physAddr[1]);
	amx_Allot(_amx, 1, &params[4], &physAddr[2]);

	amx_Function_t amx_Function = (amx_Function_t)amx_addr;

	amx_Function(_amx, params);

	cell *returnValue1 = (cell *)physAddr[0];
	_position.x = amx_ctof(*returnValue1);
	cell *returnValue2 = (cell *)physAddr[1];
	_position.y = amx_ctof(*returnValue2);
	cell *returnValue3 = (cell *)physAddr[2];
	_position.z = amx_ctof(*returnValue3);

	amx_Release(_amx, params[4]);
	amx_Release(_amx, params[3]);
	amx_Release(_amx, params[2]);

	//printf("Get Pos: X: %f Y: %f Z: %f", _position.x, _position.y, _position.z);
	return _position;
}

float SAMP_Player::GetAngle(Isolate *isolate){
	int idx = SAMP_JS::GetNativeAddr(_amx, "GetPlayerFacingAngle");
	printf("FA Idx: %i", idx);
	if (idx > -1){
		AMX_HEADER * amx_hdr = (AMX_HEADER *)_amx->base;
		unsigned int amx_addr = (unsigned int)((AMX_FUNCSTUB *)((char*)amx_hdr + amx_hdr->natives + amx_hdr->defsize * idx))->address;
		
		cell * params = new cell[3];
		params[0] = 3 * sizeof(cell);
		cell *physAddr;

		params[1] = _playerid;

		amx_Allot(_amx, 1, &params[2], &physAddr);

		amx_Function_t amx_Function = (amx_Function_t)amx_addr;
		amx_Function(_amx, params);

		cell *returnValue1 = (cell *)physAddr;
		_angle = amx_ctof(*returnValue1);

		amx_Release(_amx, params[2]);

		return _angle;
	}
	return _angle;
}

void SAMP_Player::SetPosition(Isolate* isolate, Vector3 position){

	//printf("Setting Player Pos: x: %f y: %f z: %f\n", position.x, position.y, position.z);
	if (player_spos_idx == NULL){
		amx_FindNative(_amx, "SetPlayerPos", &player_spos_idx);
	}
	
	AMX_HEADER * amx_hdr = (AMX_HEADER *)_amx->base;
	unsigned int amx_addr = (unsigned int)((AMX_FUNCSTUB *)((char*)amx_hdr + amx_hdr->natives + amx_hdr->defsize * player_spos_idx))->address;

	cell * params = new cell[5];
	params[0] = 4 * sizeof(cell);
	
	params[1] = _playerid;

	params[2] = amx_ftoc(position.x);
	params[3] = amx_ftoc(position.y);
	params[4] = amx_ftoc(position.z);

	amx_Function_t amx_Function = (amx_Function_t)amx_addr;

	int ret = amx_Function(_amx, params);

	if(ret) _position = position;
}

void SAMP_Player::SetAngle(Isolate* isolate, float angle){
	int idx = SAMP_JS::GetNativeAddr(_amx, "SetPlayerFacingAngle");
	if (idx > -1){
		AMX_HEADER * amx_hdr = (AMX_HEADER *)_amx->base;
		unsigned int amx_addr = (unsigned int)((AMX_FUNCSTUB *)((char*)amx_hdr + amx_hdr->natives + amx_hdr->defsize * idx))->address;
		
		cell *params = new cell[3];
		params[0] = 2 * sizeof(cell);

		params[1] = _playerid;

		params[2] = amx_ftoc(angle);

		amx_Function_t amx_Function = (amx_Function_t)amx_addr;

		int ret = amx_Function(_amx, params);

		if (ret) _angle = angle;
	}
}