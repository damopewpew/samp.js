class Socket extends Events {
	constructor(){
		super();
		this.host = '';
		this.port = '';
	}
	
	connect(host,port){
		this.host = host;
		this.port = port;
		this.internal.connect(host,port);
	}
	
	close(){
		this.internal.close();	
	}
	
	send(data,callback){
		this.interal.send(data,callback);
	}
	
	
	
}