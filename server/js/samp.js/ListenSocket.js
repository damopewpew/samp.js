class ListenSocket extends Events {
	constructor(){
		super();
		this.clients = [];
	}
	
	onConnection(client){
		this.clients.push(client);	
	}
	
	onDisconnection(client){
		let idx = this.clients.indexOf(client);
		if(idx > -1){
			this.clients.split(idx, 1);
		}
	}
}