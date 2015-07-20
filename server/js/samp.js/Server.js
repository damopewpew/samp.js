class Server extends Events {
	constructor(){
		super();
		this._weather = 0;
		this._gravity = 0.008;
		this._time = 0;
		this._gamemode = 'Unknown';

		this.memory = {
			heap() {
				return (%GetHeapUsage()/1024/1024).toFixed(2);
			}
		};
	}

	checkPlayers(){
		let highest_id = CallNativeGDK("GetPlayerPoolSize");
		for(var i = 0; i < highest_id+1; i++){
			if(CallNativeGDK("IsPlayerConnected", "i", i)){
				$players.addPlayer(i);
			}
		}
	}
	
	rcon(cmd) {
		return SendRconCommand(cmd);
	}
			
	set time(hour){
		this._time = hour;
		SetWorldTime(hour);
	}

	get time(){
		return this._time;
	}

	set gravity(amount){
		this._gravity = amount;
		SetGravity(amount);
	}

	get gravity(){
		this._gravity = GetGravity();
		return this._gravity;
	}

	set weather(weatherid){
		SetWeather(weaterid);
		this._weather = weatherid;
	}

	get weather(){
		return this._weather;
	}
	
	set gamemode(text) 
	{
		this._gamemode = text;
		SetGameModeText(text);
	}
	
	get gamemode() {
		return this._gamemode;
	}
};
