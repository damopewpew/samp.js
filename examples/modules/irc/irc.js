class Irc extends Events {
	constructor(server, port, nick, options){
		super();
		this.commandPrefix_ = options.cmdPrefix;
		this.password_ = options.password;
		this.server_ = server;
		this.port_ = port;
		this.nick_ = nick;
		this.socket = new $io.socket();	
		this.count = 0;
		this.channels = [];
	}
	
	connect(){
		this.socket.on("connect", function(err){
			if(err){
				this.fire("connect", err);
			} else {
				this.fire("connect");
				this.send("USER "+this.nick_+" "+this.nick_+" "+this.nick_+" :"+this.nick_+"\r\n");
				this.nick = this.nick_;
			}

		}.bind(this));
		
		this.socket.on("data",this.onRead.bind(this));
		this.socket.connect(this.server_,this.port_,"\r\n");
	}
	
	parseUser(mask){
		let modes = [ '~','&','@','%','+' ];
		if(mask[0] == ':') mask = mask.substr(1);
		let tmp = mask.split('!');
		let host = '';
		let user = '';
		let nick = tmp[0];
		let mode = '';
		if(modes.indexOf(nick[0]) > -1){
			mode = nick[0];
			nick = nick.substr(1);
		}
		if(tmp.length > 1){
			let tmp2 = tmp[1].split('@');
			host = tmp2[1];
			user = tmp2[0];
		}
		
		return {nick: nick, user: user, host: host, mode: mode };
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
			this.send("PROTOCTL UHNAMES\r\n");
		
			this.fire("registered");
		} else if(parts[1] == "005"){
			if(parts.indexOf("UHNAMES")){
				this.send("PROTOCTL UHNAMES\r\n");
			}
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
						this.fire("command", this.channels[channel].users[user.nick], this.channels[channel], cmd, args, message, data );
					}else {
						this.fire("message",  this.channels[channel].users[user.nick], this.channels[channel], msg, data );
					}
					break;
				}
					
				case "353":{
					let spl = data.trim().split(':');
					let users = spl[2].split(' ');
					let chspl = spl[1].split(' ');
					let channel = chspl[4];
				
					
					if(!this.channels[channel]) this.channels[channel] = { users: [], name: channel };
					for(let user of users ){
						user = this.parseUser(user);
						this.channels[channel].users[user.nick] = user;
				
					}

					break;
				}
					
				case 'MODE':{
					// Send an NAMES command so we can update all our users modes
					let channel = parts[2];
					this.send("NAMES "+channel+"\r\n");
					
					break;	
				}
				
				case "JOIN":{
					let channel = parts[2].substr(1);
					if(user.nick == this.nick_){
						this.channels[channel] = { name: channel, users:[] };
					}
					this.channels[channel].users[user.nick] = user;
					this.fire("join", this.channels[channel].users[user.nick], this.channels[channel]);
					break;
				}
				
				case "PART":{
					let channel = parts[2].substr(1).trim();
					
					this.fire("part",  this.channels[channel].users[user.nick], this.channels[channel] );
					if(user.nick == this.nick_){
						delete this.channels[channel];
					}
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
					
					this.channels[channel].users[parts[3]] = this.channels[channel].users[user.nick];
					this.channels[channel].users[parts[3]].nick = parts[3];
					
					let olduser = this.channels[channel].users[user.nick];
					delete this.channels[channel].users[user.nick];
					this.fire("nick", olduser, this.channels[channel].users[parts[3]] );
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
