class Sockets {
	constructor(){
		
	}
	
	socket(){
		var inst = new Socket();
		this.internal.createSocket(inst);
		return inst;
	}
	
	listen(port){
		var inst = new ListenSocket();
		this.internal.createListenSocket(inst);
		return inst;
	}
};