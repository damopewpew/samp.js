
class Vehicles {
	getVehicle(vehicleid){
		if(!this.hasOwnProperty(vehicleid)){
			if(vehicleid != 65535 && IsValidVehicle(vehicleid)){
				this[vehicleid] = new Vehicle(vehicleid); 
				return this[vehicleid];
			}
			var p = new Vehicle(65535);
			return p;
		}
		return this[vehicleid];
	}
	
	
	createVehicle(vehicleid, modelid, x, y, z, a, color1, color2, respawnDelay, addSiren){
		let vehicle = new Vehicle(modelid, x,y,z,a,color1,color2, respawnDelay, addSiren );
		vehicle.id = vehicleid;
		this[vehicleid] = vehicle;
		return vehicle;
	}
	
	addVehicle(vehid, vehicle){
		this[vehid] = vehicle;	
		return vehicle;
	}
/**
 * Adds a new player - Internal use only
 * @param   {Number} playerid Players sa-mp id
 * @returns {Player} Player object
 */
	addPlayer(playerid){
		if(this[playerid]) return this[playerid];
		var player = new Player(playerid);
		this[playerid] = player;
		return player;
	}

/**
 * Removes a player - Internal use only
 * @param   {Number} playerid Players sa-mp id
 * @returns {Player} Player object
 */
	removeVehicle(vehicleid){
		var vehicle = this.getVehicle(vehicleid);
		delete this[vehicleid];
		return vehicle;
	}
	
	
	update(){
		for(let i = 1, j = GetVehiclePoolSize(); i <= j; i++){
			if(IsValidVehicle(i)){
				if(!this.hasOwnProperty(i)){
					this[i] = new Vehicle(i);	
				}
			} else if(this.hasOwnProperty(i)){
				this.removeVehicle(i);
			}
		}
	}
	
	
	*[Symbol.iterator]() {
		for(let i in this){
			yield this.getVehicle(i);	
		}
	
	}
	

/**
 * Returns the total amount of players
 * @returns {Number} Amount of connected players
 */
	get length(){
		return Object.keys(this).length;	
	}
};