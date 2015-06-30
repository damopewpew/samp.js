#include "io/MySQL.h"

#include "utils/Helpers.h"
#include "utils/Utils.h"

#include "SAMPJS.h"

#include <mysql.h>

#include <iostream>
#include <sstream>
#include <ostream>
#include <fstream>

#include <future>

using namespace sampjs;
using namespace std;

void MySQL::StaticInit(){
	if (mysql_library_init(0, NULL, NULL)){
		sjs::logger::error("Could not initialize the MySQL library (libmysql.dll). It's probably missing.");
		return;
	}

	sjs::logger::log("MySQL library version %s loaded.", mysql_get_client_info());
}

void MySQL::StaticShutdown(){
	mysql_library_end();
	sjs::logger::log("MySQL library unloaded.");
}


void MySQL::Init(Local<Context> ctx){
	num_conns = 0;

	isolate = ctx->GetIsolate();

	V8CONTEXT(isolate, ctx);
	context.Reset(isolate, ctx);

	ifstream mysqlFile("js/samp.js/MySQL.js", std::ios::in);
	if (!mysqlFile){
		sjs::logger::error("Missing required file MySQL.js");
		SAMPJS::Shutdown();
	}
	std::string mysqlSource((std::istreambuf_iterator<char>(mysqlFile)), std::istreambuf_iterator<char>());
	SAMPJS::ExecuteCode(ctx, "MySQL.js", mysqlSource);

	ifstream mysqlcFile("js/samp.js/MySQLConnection.js", std::ios::in);
	if (!mysqlcFile){
		sjs::logger::error("Missing required file MySQLConnection.js");
		SAMPJS::Shutdown();
	}
	std::string mysqlcSource((std::istreambuf_iterator<char>(mysqlcFile)), std::istreambuf_iterator<char>());
	SAMPJS::ExecuteCode(ctx, "MySQLConnection.js", mysqlcSource);

	SAMPJS::ExecuteCode(ctx, "$mysql", "var $mysql = new MySQL();");

	JS_Object global(ctx->Global());

	JS_Object mysql(global.getObject("$mysql"));

	auto mysql_tmpl = ObjectTemplate::New(isolate);
	mysql_tmpl->SetInternalFieldCount(1);
	auto mysqli = mysql_tmpl->NewInstance();
	mysqli->SetInternalField(0, External::New(isolate, this));

	JS_Object mysqlo(mysqli);

	mysqlo.Set("createConnection", JS_New);
	mysqlo.Set("escape", JS_Escape);

	mysql.Set("internal", mysqlo.get());

}

void MySQL::Shutdown(){
	for (auto conn : connections){
		if(!mysql_ping(conn.second->mysql)) mysql_close(conn.second->mysql);
	}
}

MySQL *MySQL::Instance(Local<Object> obj){
	JS_Object global(obj->CreationContext()->Global());
	JS_Object jsmysql(global.getObject("$mysql"));
	auto wrap = Local<External>::Cast(jsmysql.getObject("internal")->GetInternalField(0));
	void *ptr = wrap->Value();
	return static_cast<MySQL*>(ptr);
}

MySQLConnection *MySQL::ConnectionInstance(Local<Object> self){
	auto wrap2 = Local<External>::Cast(self->GetInternalField(0));
	void *ptr2 = wrap2->Value();
	return static_cast<MySQLConnection*>(ptr2);
}

void MySQL::JS_New(const FunctionCallbackInfo<Value> & args){
	auto mysql = Instance(args.Holder());

	auto conn_tmpl = ObjectTemplate::New(args.GetIsolate());
	
	conn_tmpl->SetInternalFieldCount(1);

	MYSQL *mysql2 = mysql_init(NULL);

	auto conn = mysql->createConnection();

	JS_Object jsconn(conn_tmpl->NewInstance());


	jsconn.Set("connect", JS_Connect);
	jsconn.Set("query", JS_Query);
	jsconn.Set("escape", JS_RealEscape);
	jsconn.Set("close", JS_Close);
	jsconn.Set("connected", JS_Connected);
	jsconn.Set("ping", JS_Connected);

	jsconn.get()->SetInternalField(0, External::New(args.GetIsolate(), conn));
	JS_Object parentConn(Local<Object>::Cast(args[0]));

	parentConn.Set("internal", jsconn.get());
}

void MySQL::JS_Escape(const FunctionCallbackInfo<Value> & args){
	if (args[0]->IsString()){
		string str = JS2STRING(args[0]);
		char* tmp = new char[str.length() * 2 + 1];
		mysql_escape_string(tmp, str.c_str(),str.length());
		args.GetReturnValue().Set(String::NewFromUtf8(args.GetIsolate(), tmp));
	}
	else {
		args.GetReturnValue().Set(args[0]);
	}
}

void MySQL::JS_Connect(const FunctionCallbackInfo<Value> & args){
	auto mysql = Instance(args.Holder());
	auto mysqlconn = ConnectionInstance(args.Holder());
	
	string host = JS2STRING(args[0]);
	string user = JS2STRING(args[1]);
	string password = JS2STRING(args[2]);
	string database = JS2STRING(args[3]);

	if (args[4]->IsFunction()){
		Persistent<Function,CopyablePersistentTraits<Function>> func;
		func.Reset(args.GetIsolate(), Local<Function>::Cast(args[4]));

		async(launch::async, [mysql, mysqlconn, host, user, password, database,func](){
			mysql->ConnectAsync(mysqlconn->id, host, user, password, database,func);
		});
	}
	else {
		if (mysql_real_connect(
			mysqlconn->mysql,
			host.c_str(),
			user.c_str(),
			password.c_str(),
			database.c_str(),
			0,
			NULL,
			0) == NULL){
			sjs::logger::error("MySQL Connect Error: %s", mysql_error(mysqlconn->mysql));
			args.GetReturnValue().Set(false);
			return;
		}
	}
	args.GetReturnValue().Set(true);
}

void MySQL::JS_Close(const FunctionCallbackInfo<Value> & args){
	auto mysql = Instance(args.Holder());
	auto mysqlconn = ConnectionInstance(args.Holder());

	if (mysql->isConnected(mysqlconn->mysql)){
		mysqlconn->lock.lock();
		mysql_close(mysqlconn->mysql);
		mysqlconn->lock.unlock();
	}
}

void MySQL::JS_Connected(const FunctionCallbackInfo<Value> & args){
	auto mysql = Instance(args.Holder());
	auto mysqlconn = ConnectionInstance(args.Holder());

	args.GetReturnValue().Set(mysql->isConnected(mysqlconn->mysql));
}

void MySQL::JS_Query(const FunctionCallbackInfo<Value> & args){
	auto mysql = Instance(args.Holder());
	auto mysqlconn = ConnectionInstance(args.Holder());

	string query = JS2STRING(args[0]);

	if (args[1]->IsFunction()){
		Persistent<Function, CopyablePersistentTraits<Function>> func;
		func.Reset(args.GetIsolate(), Local<Function>::Cast(args[1]));
		mysql->QueryAsync(mysqlconn->id, query, func);
		return;
	}
}

void MySQL::JS_RealEscape(const FunctionCallbackInfo<Value> & args){
	auto mysqlconn = ConnectionInstance(args.Holder());

	string str = JS2STRING(args[0]);
	char* tmp = new char[str.length() * 2 + 1];
	mysql_real_escape_string(mysqlconn->mysql, tmp, str.c_str(), str.length());
	args.GetReturnValue().Set(String::NewFromUtf8(args.GetIsolate(), tmp));

}

MySQLConnection *MySQL::createConnection(){
	int id = num_conns++;
	connections[id] = new MySQLConnection(id,mysql_init(NULL));
	return connections[id];
	
}

bool MySQL::isConnected(MYSQL *mysql){
	return !mysql_ping(mysql);
}

void MySQL::ConnectAsync(int id, string host, string user, string password, string database, Persistent<Function, CopyablePersistentTraits<Function>> callback){
	connections[id]->mysql = mysql_init(NULL);
	if (mysql_real_connect(
		connections[id]->mysql,
		host.c_str(),
		user.c_str(),
		password.c_str(),
		database.c_str(),
		0,
		NULL,
		0) == NULL){
		V8PCONTEXT(isolate, context);
		Local<Function> func = Local<Function>::New(isolate, callback);
		sjs::logger::debug("Could not connect");
		Local<String> err = String::NewFromUtf8(isolate, mysql_error(connections[id]->mysql));
		Local<Value> argv[1] = { err };
		func->Call(func, 1, argv );
		sjs::logger::debug("Called Function");
		return;
	}
	
	V8PCONTEXT(isolate, context);
	Local<Function> func = Local<Function>::New(isolate, callback);
	func->Call(func, 0, NULL);
}

void MySQL::QueryAsync(int id, string query, Persistent<Function, CopyablePersistentTraits<Function>> callback){
	

	// We need to do this or for some reason it loses its persistence and goes out of scope :(
	Persistent<Function, CopyablePersistentTraits<Function>> cb;
	cb.Reset(isolate, callback);

	async(launch::async, [this, id, cb, query](){
		connections[id]->lock.lock();
		MYSQL* msql = connections[id]->mysql;
		if (!isConnected(msql)){
			sjs::logger::error("MYSQL Error: Not connected");
		} else {
			mysql_query(msql, query.c_str());

			unsigned int err_no = mysql_errno(msql);
			if (err_no){
				sjs::logger::error("MYSQL Query Error: %s", mysql_error(msql));
				V8PCONTEXT(isolate, context);

				TryCatch try_catch;

				Local<String> err = String::NewFromUtf8(isolate, mysql_error(msql));
				Local<Value> argv[1] = { err };
				Local<Function> func = Local<Function>::New(isolate, cb);
				func->Call(func, 1, argv);
				if (try_catch.HasCaught()){
					Utils::PrintException(&try_catch);
				}

				connections[id]->lock.unlock();
				return;
			}

			MYSQL_RES *result = mysql_store_result(msql);

			if (result == NULL){

				// No error and result was null meaning it wasn't a SELECT type statement
				my_ulonglong affected = mysql_affected_rows(msql);
				my_ulonglong insert_id = mysql_insert_id(msql);


				V8PCONTEXT(isolate, context);
				TryCatch try_catch;
				JS_Object jsresult(isolate);

				jsresult.Set("insertId", insert_id);
				jsresult.Set("affectedRows", affected);

				Local<Value> empty = Undefined(isolate);
				Local<Value> argv[2] = { empty, jsresult.get() };

				Local<Function> func = Local<Function>::New(isolate, cb);


				func->Call(func, 2, argv);
				if (try_catch.HasCaught()){
					Utils::PrintException(&try_catch);
				}


			}
			else {
				int num_fields = mysql_num_fields(result);

				MYSQL_ROW row;
				MYSQL_FIELD *field;

				vector<string> fields;


				V8PCONTEXT(isolate, context);
				TryCatch try_catch;
				Local<Array> jsrows = Array::New(isolate, 0);
				Local<Array> jsfields = Array::New(isolate, num_fields);

				for (int j = 0; j < num_fields; j++){
					field = mysql_fetch_field_direct(result, j);
					fields.push_back(field->name);
					jsfields->Set(j, String::NewFromUtf8(isolate, field->name));
				}

				int row_count = 0;
				while ((row = mysql_fetch_row(result))){
					JS_Object jsrow(isolate);
					for (int i = 0; i < num_fields; i++){

						if (row[i] == NULL) jsrow.SetNull(fields[i]);
						else jsrow.Set(fields[i], string(row[i]));

					}

					jsrows->Set(row_count++, jsrow.get());
				}

				Local<Value> empty = Undefined(isolate);
				Local<Value> argv[3] = { empty, jsrows, jsfields };

				Local<Function> func = Local<Function>::New(isolate, cb);

				func->Call(func, 3, argv);
				if (try_catch.HasCaught()){
					Utils::PrintException(&try_catch);
				}

				mysql_free_result(result);

			}
		}
		connections[id]->lock.unlock();
	});
}