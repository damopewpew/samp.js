"use strict";
class Irc extends $EVENTS {
	constructor(server, port, nick, options){
		super();
		this.commandPrefix_ = options.cmdPrefix;
		this.password_ = options.password;
		this.server_ = server;
		this.port_ = port;
		this.nick_ = nick;
		this.socket = new $io.socket();	
		this.count = 0;
	}
	
	connect(){
		this.socket.on("connect", function(){
			this.fire("connect");
			this.send("USER "+this.nick_+" "+this.nick_+" "+this.nick_+" :"+this.nick_+"\r\n");
			this.nick = this.nick_;

		}.bind(this));
		
		this.socket.on("data",this.onRead.bind(this));
		this.socket.connect(this.server_,this.port_,"\r\n");
	}
	
	parseUser(mask){
		
		if(mask[0] == ':') mask = mask.substr(1);
		var tmp = mask.split('@');
		var host = tmp[1];
		var tmp = tmp[0].split('!');
		
		return {nick: tmp[0], user: tmp[1], host: host };
	}
	
	onRead(data){
		this.fire("raw", data);
		let parts = data.trim().split(' ');
		
		if(parts[0] == "PING"){
			this.fire("ping", parts[1]);
			this.send(`PONG ${parts[1]}\r\n`);	
		}
		else if(parts[1] == "001"){
			if(this.password_) this.identify(this.password_);
			this.fire("registered");
		}
		
		else if(parts.length > 2){
			let user = this.parseUser(parts[0]);
			switch(parts[1]){
				case "PRIVMSG":{
					let msg = data.split(':');
					let channel = parts[2];
					msg = msg[2].trim();
					if(msg[0] == this.commandPrefix_){
						let args = msg.split(' ');
						let cmd = args.shift().substr(1);
						let message = args.join(' ');
						this.fire("command", user, channel, cmd, args, message, data );
					}else {
						this.fire("message", user, channel, msg, data );
					}
					break;
				}
				
				case "JOIN":{
					let channel = parts[2].substr(1);
					this.fire("join", user, channel );
					break;
				}
				
				case "PART":{
					let channel = parts[2].substr(1).trim();
					this.fire("part", user, channel );
					break;	
				}
				
				case "QUIT":{
					this.fire("quit", user );
					break;
				}
				
				case "NICK":{
					if(user.nick == this.nick_){
						this.nick_ = parts[3];
					}
					this.fire("nick", user, parts[3] );
					break;	
				}
					
			}
		}

	}
	
	identify(password){
		this.say('NICKSERV', `IDENTIFY ${password}`);
		return this;
	}
	
	send(data){
		this.socket.send(data);
		return this;
	}
	
	say(to,message){
		this.send(`PRIVMSG ${to} :${message}\r\n`);	
		return this;
	}
	
	join(channel){
		this.send(`JOIN ${channel}\r\n`);
		return this;
	}
	
	part(channel,message){
		this.send(`PART ${channel} :${message}\r\n`);	
		return this;
	}
	
	quit(message){
		this.send(`QUIT :${message}\r\n`);	
		return this;
	}
	
	set nick(nick){
		this.send(`NICK ${nick}\r\n`);
		return this;
	}
	
	get nick(){
		return this.nick_;
	}
	
};