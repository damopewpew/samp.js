#ifndef __SAMPJS_MYSQL__
#define __SAMPJS_MYSQL__
#include "Module.h"

#include <mysql.h>

#include <map>

#include <mutex>

namespace sampjs {
	struct MySQLConnection {
		MYSQL * mysql;
		int id;
		std::mutex lock;
		MySQLConnection(int idx, MYSQL *mysqlx): id(idx), mysql(mysqlx){
			
		}
	};

	class MySQL : public Module {
	public:
		static void StaticInit();
		static void StaticShutdown();

		virtual void Init(Local<Context> context);
		virtual void Shutdown();
		virtual void Tick(){}

		static MySQL *Instance(Local<Object> obj);
		static MySQLConnection *ConnectionInstance(Local<Object> self);

		static void JS_New(const FunctionCallbackInfo<Value> & args);
		static void JS_Escape(const FunctionCallbackInfo<Value> & args);


		static void JS_Connect(const FunctionCallbackInfo<Value> & args);
		static void JS_Close(const FunctionCallbackInfo<Value> & args);
		static void JS_Connected(const FunctionCallbackInfo<Value> & args);
		static void JS_Query(const FunctionCallbackInfo<Value> & args);
		static void JS_RealEscape(const FunctionCallbackInfo<Value> & args);

		MySQLConnection * createConnection();
		
		bool isConnected(MYSQL *mysql);
		void ConnectAsync(int id, std::string host, std::string user, std::string password, std::string database, Persistent<Function, CopyablePersistentTraits<Function>> callback);
		void QueryAsync(int id, std::string query, Persistent<Function, CopyablePersistentTraits<Function>> callback);
	private:
		Isolate *isolate;
		Persistent<Context, CopyablePersistentTraits<Context>> context;

		std::map<int, MySQLConnection*> connections;
		int num_conns;
	};
};

#endif
