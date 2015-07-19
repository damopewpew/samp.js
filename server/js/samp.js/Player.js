/**
 * @typedef {Object} Position
 * @property {Number} x
 * @property {Number} y
 * @property {Number} z
 * @property {Number} [a]
 */ 

/**
 * Player wrapper/helper class 
 */
class Player extends Events {

/**
 * Creates a new Player object
 * @param {Number} id Internal sa-mp player id
 */
	constructor(id){
		super();
/** @type {Number} */
		this.id = id;
/** Cached name
 * @type {String} */
		this._name =  "";
/** Cached interior
 * @type {Number} */
		this._interior = 0;
/** Cached ip address
 * @type {String} */
		this._ip = null;
/** Cached position 
 * @type {Position} */
		this._pos = {x:0,y:0,z:0};
/** Cached velocity 
 * @type {Position} */
		this._velocity = {x:0,y:0,z:0};
/** Cached health 
 * @type {Number} */
		this._health = 0;
/** Cached armour 
 * @type {Number} */
		this._armour = 0;
/** Cached ammo 
 * @type {Number} */
		this._currentAmmo = 0;
/** Cached current weapon 
 * @type {Number} */
		this._currentWeapon = 0;
/** Cached weapon state 
 * @type {Number} */
		this._weaponState = 0;
/** Cached target player 
 * @type {Number} */
		this._targetPlayer = 0;
/** Cached weapons 
 * @type {Array} */
		this._weapons = [];
/** Cached color 
 * @type {Number} */
		this._color = 0;
/** Cached money 
 * @type {Number} */
		this._money = 0;
/** Cached skin
 * @type {Number} */
		this._skin = 0;
/** Cached score 
 * @type {Number} */
		this._score = 0;
/** Cached state 
 * @type {Number} */
		this._state = 0;
/** Cached team 
 * @type {Number} */
		this._team = 0;
/** Cached wanted level 
 * @type {Number} */
		this._wantedLevel = 0;
	}

/**
 * Checks if player is valid
 * @type {Boolean}
 */
	get isValid(){
		return (this.id < 65535);
	}

/**
 * Get player name | GetPlayerName(playerid)
 * @type {String}
 */
	get name(){
		this._name = GetPlayerName(this.id);
		return this._name; 		
	}
/**
 * Set player name | SetPlayerName(playerid, name)
 * @type {String}
 */ 
	set name(name){
		SetPlayerName(this.id, name);
		this._name = name;	
	}
/**
 * Get Player IP Address | GetPlayerIp(playerid)
 * @type {String}
 */
	get ip() {
		if(this._ip_ == null) this.ip = GetPlayerIp(this.id);
		return this._ip;
	}
	
/**
 * Get Player Facing Angle | GetPlayerFacingAngle(playerid)
 * @type {Number}
 */
	get facingAngle() {
		this._pos.a = GetPlayerFacingAngle(this.id);
		return this._pos.a;
	}

/**
 * Set Player Facing Angle | SetPlayerFacingAngle(playerid, angle)
 * @type {Number} 
 */
	set facingAngle(angle) {
		this._pos.a = angle;
		SetPlayerFacingAngle(this.id,angle);
	}
	
/**
 * Get Player Position | GetPlayerPos(playerid)
 * @type {Position}
 */ 
	get pos(){
		var tmpp = GetPlayerPos(this.id);
		var tmpa = this.facingAngle;
		this._pos = {x: tmpp.x, y: tmpp.y, z: tmpp.z, a: tmpa };
		return this._pos;
	}
/**
 * Set Player Position. Takes an Object or an Array | SetPlayerPos(playerid, x, y, z )
 * @type {Position}
 */
	set pos(pos){
		if(Array.isArray(pos)){
			if(pos.length > 3) this.facingAngle = pos[3];
			this._pos.x = pos[0];
			this._pos.y = pos[1];
			this._pos.z = pos[2];
		} else {
			if(pos.hasOwnProperty('a')) this.facingAngle = pos.a;
			this._pos.x = pos.x;
			this._pos.y = pos.y;
			this._pos.z = pos.z;
		}
		SetPlayerPos(this.id,this._pos.x,this._pos.y,this._pos.z);
	}
	
/**
 * Get Player Health | GetPlayerHealth(playerid)
 * @type {Number}
 */ 
	get health(){
		this._health = GetPlayerHealth(this.id);
		return this._health;
	}
/**
 * Set Player Health | SetPlayerHealth(playerid, Float:health)
 * @type {Number}
 */ 
	set health(health){
		this._health = health;
		SetPlayerHealth(this.id, this._health);
	}

/**
 * Get Player Armour | GetPlayerArmour(playerid)
 * @type {Number}
 */ 
	get armour(){
		this._armour = GetPlayerArmour(this.id);
		return this._health;
	}
/**
 * Set Player Armour | SetPlayerArmour(playerid, amount)
 * @type {Number}
 */ 
	set armour(armour){
		this._armour = armour;
		SetPlayerArmour(this.id, this._armour);
	}
	
/**
 * Get Player Ammo | GetPlayerAmmo(playerid)
 * @type {Number}
 */ 
	get ammo() {
		this._currentAmmo = GetPlayerAmmo(this.id);
		return this._currentAmmo;
	}
	
/**
 * Set Ammo for weapon
 * @param {Number} weaponid The weapons id
 * @param {Number} ammo     Amount of ammo
 */
	setAmmo(weaponid,ammo) {
		this._weapons[weaponid] = ammo;
		SetPlayerAmmo(this.id,weaponid,this._weapons[weaponid]);
	}
	
/**
 * Get Weapon State of Player | GetPlayerWeaponState(playerid)
 * @type {Number}
 */ 
	get weaponState() {
		this._weaponState = GetPlayerWeaponState(this.id);
		return this._weaponState;
	}
	
/**
 * Get the Player the player is targetting | GetPlayerTargetPlayer(playerid)
 * @type {Player}
 */ 
	get targetPlayer() {
		this._targetPlayer = GetPlayerTargetPlayer(this.id);
		return $players[this._targetPlayer];
	}
/**
 * Get Player Team | GetPlayerTeam(playerid)
 * @type {Number}
 */ 
	get team() {
		this._team = GetPlayerTeam(this.id);
		return this._team;
	}
	
/**
 * Set Player Team | SetPlayerTeam(playerid, teamid)
 * @type {Number}
 */ 
	set team(team) {
		this._team = team;
		SetPlayerTeam(this.id,team);
	}
/**
 * Get Player Current Interior id | GetPlayerInterior(playerid)
 * @type {Number}
 */
	get interior() {
		this._interior = GetPlayerInterior(this.id);
		return this._interior;
	}
/**
 * Set Player Interior | SetPlayerInterior(playerid, interiorid)
 * @type {Number}
 */ 
	set interior(interior) {
		this._interior = interior;
		SetPlayerInterior(this.id,interior);
	}

/**
 * Give Player a weapon | GivePlayerWeapon(playerid,weaponid, ammo)
 * @see https://wiki.sa-mp.com/wiki/GivePlayerWeapon
 * @see https://wiki.sa-mp.com/wiki/Weapons 
 * @param {Number} weaponid Weapon id 
 * @param {Number} ammo     Amount of ammo
 */
	giveWeapon(weaponid,ammo) {
		this._weapons[weaponid] = ammo;
		GivePlayerWeapon(this.id,weaponid,this._weapons[weaponid]);
	}
/**
 * Reset players weapons
 * @see https://wiki.sa-mp.com/wiki/ResetPlayerWeapons
 */
	resetWeapons() {
		for(var i=0;i<47;i++) this._weapons[i] = 0;
		ResetPlayerWeapons(this.id);
	}
	
/**
 * Gets Current Weapon
 * @type {Number}
 * @see https://wiki.sa-mp.com/wiki/GetPlayerWeapon
 */  
	get weapon() {
		this._currentWeapon = GetPlayerWeapon(this.id);
		return this._currentWeapon;
	}
/**
 * Sets Current Weapon
 * @type {Number}
 * @see https://wiki.sa-mp.com/wiki/SetPlayerArmedWeapon
 */ 
	set weapon(weaponid) {
		this._currentWeapon = weaponid;
		SetPlayerArmedWeapon(this.id,this._currentWeapon);
	}
	
/** 
 * Gets an array of weapon data weapons[weaponid] = ammo
 * @type {Array}
 */ 
	get weaponData() {
		for(var i=0;i<13;i++) {
			var data = GetPlayerWeaponData(this.id,i);
			this._weapons[data.weapons] = data.ammo;
		}
		return this._weapons;
	}
	
/**
 * Gets the color of the player's name and radar marker
 * @type {Number}
 */ 
	get color() {
		this._color = GetPlayerColor(this.id);
		return this._color;
	}
/**
 * Set the color of the player's name and radar marker
 * @type {Number}
 */ 
	set color(color) {
		this._color = color;
		SetPlayerColor(this.id,this._color);
	}
	
/**
 * Calculate the distance between a player and a map coordinate
 * @param   {Position|Array[3]|Number} point The map coordinate as a vector3 object or array [x,y,z] or x coordinate
 * @param	{Number}                                             [y]   y coordinate on map when first argument is x
 * @param 	{Number}                                             [z]   z coordinate on map when first argument is x
 * @returns {Number}                                             The distance between the player and the point
 */
	getDistanceFromPoint(point) {
		if(arguments.length > 1) return GetPlayerDistanceFromPoint(this.id,arguments[0],arguments[1],arguments[2]);
		if(Array.isArray(point)) return GetPlayerDistanceFromPoint(this.id,point[0],point[1],point[2]);
		return GetPlayerDistanceFromPoint(this.id,point.x,point.y,point.z);
	}
	
/**
 * Is Player in range of point
 * @param   {Number}                                   range The furthest distance the player can be from the be to be in range
 * @param   {Position|Array|Number} point The point as an vector3 object or an array [x,y,z] or x coordinate
 * @param	{Number}                                             [y]   y coordinate on map when first argument is x
 * @param 	{Number}                                             [z]   z coordinate on map when first argument is x
 * @returns {Boolean}                                  True if player is in range
 */
	inRange(range, point){
		if(arguments.length > 2) return IsPlayerInRangeOfPoint(this.id,range,arguments[1],arguments[2],arguments[3]);
		if(Array.isArray(point)) return IsPlayerInRangeOfPoint(this.id,range, point[0],point[1],point[2]);
		return IsPlayerInRangeOfPoint(this.id,range,point.x,point.y,point.z);	
	}
/**
 * Get Player Keys | GetPlayerKeys(playerid)
 * @see https://wiki.sa-mp.com/wiki/GetPlayerKeys
 * @type {Number}
 */ 
	get keys() {
		var keys = GetPlayerKeys(this.id);
		return keys.keys;
	}
/**
 * @typedef {Object} ArrowKeys
 * @property {number} updown
 * @property {number} leftright
 */
	
/**
 * Get Player Arrow Keys
 * @type {ArrowKeys}
 */ 
	get arrowKeys() {
		var keys = GetPlayerKeys(this.id);
		return {updown: keys.updown, leftright: keys.leftright};
	}
	
 /**
  * Get the last shot vector
  * @type {Object}
  * @property {Position} origin
  * @property {Position} hitpos
  */ 
	get lastShotVectors() {
		var vectors = GetPlayerLastShotVectors(this.id);
		return {origin: {x: vectors.foriginx, y: vectors.foriginy, z: vectors.foriginz},
				hitpos: {x: vectors.fhitposx, y: vectors.fhitPosy, z: vectors.fhitposz}};
	}
	
/**
 * Get the players money
 * @type {Number}
 */ 
	get money() {
		this._money = GetPlayerMoney(this.id);
		return this._money;
	}
	
/**
 * Set the players money
 * @type {Number}
 */ 
	set money(money) {
		var currentMoney = this._money;
		this._money = money;
		this.giveMoney(money - currentMoney);
	}
	
/**
 * Give the player money
 * @param {Number} money Amount of money to give
 */
	giveMoney(money) {
		this._money += money;
		GivePlayerMoney(this.id,money);
	}
	
/**
 * Reset the player's money to 0
 */
	resetMoney() {
		this._money = 0;
		ResetPlayerMoney(this.id);
	}
	
/**
 * Get the player's score
 * @type {Number}
 */ 
	get score() {
		this._score = GetPlayerScore(this.id);
		return this._score;
	}

/**
 * Set the player's score
 * @type {Number}
 */ 
	set score(score) {
		this._score = score;
		SetPlayerScore(this.id,this.score);
	}
	
/**
 * Get the player's current skin
 * @type {Number}
 */ 
	get skin() {
		this._skin = GetPlayerSkin(this.id);
		return this._skin;
	}
	
/**
 * Set the player's skin
 * @type {Number}
 */ 
	set skin(skin) {
		this._skin = skin;
		SetPlayerSkin(this.id,this._skin);
	}
	
/**
 * Get the player's state
 * @type {Number}
 */ 
	get state() {
		this._state = GetPlayerState(this.id);
		return this._state;
	}
/**
 * Get the player's wanted level
 * @type {Number}
 */ 
	get wantedLevel() {
		this._wantedLevel = GetPlayerWantedLevel(this.id);
		return this._velocity;
	}
	
/**
 * Set the player's wanted level
 * @type {Number}
 */ 
	set wantedLevel(wantedLevel) {
		this._wantedLevel = wantedLevel;
		SetPlayerWantedLevel(this.id,this._wantedLevel);
	}
	
/**
 * Get the player's velocity
 * @type {Position}
 */ 
	get velocity(){
		var vel = GetPlayerVelocity(this.id);
		this._velocity = {x: vel.x, y: vel.y, z: vel.z};
		return this._velocity;
	}
	
/**
 * Set the player's velocity
 * @type {Position|Array[3]}
 */ 
	set velocity(vel){
		if(Array.isArray(vel)) {
			this._velocity.x = vel[0];
			this._velocity.y = vel[1];
			this._velocity.z = vel[2];
		} else {
			this._velocity.x = vel.x;
			this._velocity.y = vel.y;
			this._velocity.z = vel.z;
		}
		SetPlayerVelocity(this.id,this._velocity.x,this._velocity.y,this._velocity.z);
	}

/**
 * Puts player in vehicle
 * @type {Number}
 */ 
	set vehicle(vehicleid){
		RemovePlayerFromVehicle(this.id);
		PutPlayerInVehicle(this.id, vehicleid, 0);
	}

/**
 * Get Player's vehicle id
 * @type {Number}
 */ 
	get vehicle(){
		return GetPlayerVehicleID(this.id);
	}
	
	/**
	 * Send Message to player
	 * @param {String} color   Color
	 * @param {String} message Message
	 */
	message(color,message){
		if(arguments.length < 2){
			message = color;
			color = -1;
		}
		
		SendClientMessage(this.id, color, message );
	}

/**
 * Returns the player's id
 * @returns {Number} Player's internal sa-mp id
 */
	valueOf(){
		return this.id;
	}
};
