/**
 * Holder for all Players on the server
 * 
 * @example 
 * // $players is an instance of Players
 * $players = new Players();
 * 
 * for(let id in $players){
 *    let player = $players[id];
 *    print(player.name);
 * }
 * 
 * // Gets player id 2
 * print($players[2].name);
 */
class Players {
/**
 * Gets a player by id
 * @param   {Number} playerid Players sa-mp id
 * @returns {Player} Player object
 */
	getPlayer(playerid){
		return this[playerid];
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
	removePlayer(playerid){
		var player = this.getPlayer(playerid);
		delete this[playerid];
		return player;
	}

/**
 * Returns the total amount of players
 * @returns {Number} Amount of connected players
 */
	get length(){
		return Object.keys(this).length;	
	}
};