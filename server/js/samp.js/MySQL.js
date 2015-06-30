class MySQL {
	constructor(){
		
	}
	
	createConnection(host, user, password, database ){
		var inst = new MySQLConnection(host,user,password,database);
		this.internal.createConnection(inst);
		return inst;
	}
	
	escape(string){
		return this.internal.escape(string);	
	}
		
}