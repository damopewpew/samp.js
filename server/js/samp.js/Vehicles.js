class Vehicles {
	getVehicle(vehicleid){
		if(!this.hasOwnProperty(vehicleid)){
			if(vehicleid != 65535 && IsValidVehicle(vehicleid)){
				this[vehicleid] = new Vehicle(vehicleid); 
				return this[vehicleid];
			}
			return new Vehicle(65535);
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
 * Removes a vehicle - Internal use only
 * @param   {Number} vehicleid Vehicles id
 * @returns {Vehicle} Vehicle object
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
 * Returns the total amount of vehicles
 * @returns {Number} Amount of created vehicles
 */
	get length(){
		return Object.keys(this).length;	
	}
};