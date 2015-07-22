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
/** Cached world
 * @type {Number} */
		this._world = 0;
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
/** Cached camera position 
 * @type {Position} */
		this._cameraPos = {x:0,y:0,z:0};
/** Cached camera look at position 
 * @type {Position} */
		this._cameraLookAt = {x:0,y:0,z:0,cut:0};
/** Cached special action 
 * @type {Number} */
		this._specialAction = 0;
	}

/**
 * Checks if player is valid
 * @type {Boolean}
 */
	get isValid(){
		return (this.id < INVALID_PLAYER_ID);
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
		if(this._ip == null) this._ip = GetPlayerIp(this.id);
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
		return this._armour;
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
 * Get Player Current World id | GetPlayerVirtualWorld(playerid)
 * @type {Number}
 */
	get world() {
		this._world = GetPlayerVirtualWorld(this.id);
		return this._world;
	}
/**
 * Set Player World | SetPlayerVirtualWorld(playerid, worldid)
 * @type {Number}
 */ 
	set world(world) {
		this._world = world;
		SetPlayerVirtualWorld(this.id,world);
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
		SetPlayerScore(this.id,this._score);
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
		return this._wantedLevel;
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
	 * Gets the ID of the vehicle that the player is surfing
	 * @type {Number}
	 */ 
	get surfingVehicle() {
		return GetPlayerSurfingVehicleID(this.id);
	}
	
	/**
	 * Gets the ID of the seat the player is in
	 * @type {Number}
	 */ 
	get vehicleSeat() {
		return GetPlayerVehicleSeat(this.id);
	}
	
	/**
	 * Sets the camera to a specific position
	 * @type {Position|Array[3]}
	 */ 
	set cameraPos(pos)
	{
		if(Array.isArray(pos)) {
			pos = {x: pos[0], y: pos[1], z: pos[2]};
		}
		this._cameraPos = pos;
		return SetPlayerCameraPos(this.id, this._cameraPos.x, this._cameraPos.y, this._cameraPos.z);
	}
	
	/**
	 * Get the player's camera position
	 * @type {Object}
	 */ 
	get cameraPos() {
		return (this._cameraPos = GetPlayerCameraPos(this.id));
	}
	
	/**
	 * Set the direction a player's camera looks at
	 * @type {Position|Array[4]}
	 */ 
	set cameraLookAt(pos)
	{
		if(Array.isArray(pos))
		{
			if(pos.length > 3) {
				var cut = pos[3];
			}
			pos = {x: pos[0], y: pos[1], z: pos[2]};
			if(cut) pos.cut = cut;
		}
		if(pos.hasOwnProperty('cut')) {
			this._cameraLookAt = pos;
		}
		else this._cameraLookAt = {x: pos.x, y: pos.y, z: pos.z};
		return SetPlayerCameraLookAt(this.id, this._cameraLookAt.x, this._cameraLookAt.y, this._cameraLookAt.z, this._cameraLookAt.cut);
	}
	
	/**
	 * Gets the direction a player's camera looks at
	 * @type {Object}
	 */ 
	get cameraLookAt() {
		return this._cameraLookAt;
	}
	
	/**
	 * Returns the aspect ratio of the player's camera
	 * @type {Number}
	 */
	get cameraAspectRatio() {
		return GetPlayerCameraAspectRatio(this.id);
	}
	
	/**
	 * Returns the player's camera zoom level (camera, sniper etc.)
	 * @type {Number}
	 */
	get cameraZoom() {
		return GetPlayerCameraZoom(this.id);
	}
	
	/**
	 * Returns the player's camera front vector
	 * @type {Position}
	 */
	get cameraFrontVector() {
		return GetPlayerCameraFrontVector(this.id);
	}
	
	/**
	 * Toggle whether a player is in spectator mode or not
	 * @type {Boolean}
	 */
	set toggleSpectate(toggle) {
		TogglePlayerSpectating(this.id, toggle);
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
	 * Sets camera behind player
	 */
	setCameraBehind() {
		SetCameraBehindPlayer(this.id);
	}
	
	/**
	 * Check if a player is inside a specific vehicle
	 * @returns {Boolean} true if in vehicle, false if not
	 */
	inVehicle(vehicleid) {
		return IsPlayerInVehicle(this.id, vehicleid);
	}
	
	/**
	 * Check if a player is inside any vehicle
	 * @returns {Boolean} true if in any vehicle, false if not
	 */
	inAnyVehicle() {
		return IsPlayerInAnyVehicle(this.id);
	}
	
	/**
	 * Sets a player to spectate another vehicle
	 * @returns {Boolean}
	 * @see http://wiki.sa-mp.com/wiki/PlayerSpectateVehicle
	 */
	spectateVehicle(vehicleid, mode) {
		return PlayerSpectateVehicle(this.id, vehicleid, mode);
	}
	
	/**
	 * Sets a player to spectate another player
	 * @returns {Boolean}
	 * @see http://wiki.sa-mp.com/wiki/PlayerSpectatePlayer
	 */
	spectatePlayer(target, mode)
	{
		if(typeof target === 'object') {
			target = target.id;
		}
		return PlayerSpectatePlayer(this.id, target, mode);
	}
	
	/**
	 * Checks if a player is logged in as an RCON admin.
	 * @returns {Boolean} true if rcon admin, false if not
	 */
	isAdmin() {
		return IsPlayerAdmin(this.id);
	}
	
	/**
	 * Checks if a player is an actual player or an NPC
	 * @returns {Boolean} true if npc, false if not
	 */
	isNPC() {
		return IsPlayerNPC(this.id);
	}
	
	/**
	 * Kicks the specific player from the server
	 */
	kick() {
		Kick(this.id);
	}
	
	/**
	 * Bans the specific player from the server
	 * @param {String} [reason]
	 */
	ban(reason) 
	{
		if(arguments.length) {
			BanEx(this.id, reason);
		}
		else Ban(this.id);
	}
	
	/**
	 * Attach object to player
	 * @param   {Number} objectid the id of an object
	 * @param   {Object|Array[6]} coords x, y, z, rx, ry, rz
	 */
	attachObject(objectid, coords)
	{
		if(arguments.length > 2) {
			coords = {x: arguments[1], y: arguments[2], z: arguments[3], rx: arguments[4], ry: arguments[5], rz: arguments[6]};
		}
		if(Array.isArray(coords)) {
			coords = {x: coords[0], y: coords[1], z: coords[2], rx: coords[3], ry: coords[4], rz: coords[5]};
		}
		return AttachObjectToPlayer(objectid, this.id, coords.x, coords.y, coords.z, coords.rx, coords.ry, coords.rz);
	}
	
	/**
	 * Attach an object to a specific bone on a player.
	 * @param   {Number} objectid The object to attach
	 * @param   {Number} index The slot to assign the object (0-9)
	 * @param   {Number} bone The bone to attach the object to
	 * @param   {Object|Array[3]} [offet] x, y, z
	 * @param   {Object|Array[3]} [rot] x, y, z
	 * @param   {Object|Array[3]} [scale] x, y, z
	 * @param   {Object|Array[2]} [matColor] color1, color2
	 */
	setAttachedObject(objectid, index, bone, offset, rot, scale, matColor)
	{
		if(Array.isArray(offset)) {
			offset = {x: offset[0], y: offset[1], z: offset[2]};
		}
		if(Array.isArray(rot)) {
			rot = {x: rot[0], y: rot[1], z: rot[2]};
		}
		if(Array.isArray(scale)) {
			scale = {x: scale[0], y: scale[1], z: scale[2]};
		}
		if(Array.isArray(matColor)) {
			matColor = {color1: matColor[0], color2: matColor[1]};
		}
		return SetPlayerAttachedObject(this.id, index, objectid, bone, offset.x, offset.y, offset.z, rot.x, rot.y, rot.z, scale.x, scale.y, scale.z, matColor.color1, matColor.color2);
	}
	
	/**
	 * Apply animation for player
	 * @param   {Object|Array[2]} anim lib, name
	 * @param   {Number} 
	 * @param   {Boolean} loop 
	 * @param   {Number} lockx
	 * @param   {Number} locky
	 * @param   {Number} freeze
	 * @param   {Number} time
	 * @param   {Number} [forcesync]
	 * @see https://wiki.sa-mp.com/wiki/ApplyAnimation
	 */
	animation(anim, delta, loop, lockx, locky, freeze, time, forcesync)
	{
		if(Array.isArray(anim)) {
			anim = {lib: anim[0], name: anim[1]};
		}
		return ApplyAnimation(this.id, anim.lib, anim.name, delta, loop, lockx, locky, freeze, time, forcesync);
	}
	
	/**
	 * Clears all animations for the given player
	 * @param   {Number} [forcesync]
	 * @see https://wiki.sa-mp.com/wiki/ClearAnimations
	*/
	clearAnimations(forcesync) {
		return ClearAnimations(this.id, forcesync);
	}
	
	/**
	 * Set special action for player
	 * @type {Number}
	 */ 
	set action(actionid) {
		return SetPlayerSpecialAction(this.id, (this._specialAction = actionid));
	}
	
	/**
	 * Returns current special action
	 * @type {Number}
	 */ 
	get action() {
		return (this._specialAction = GetPlayerSpecialAction(this.id));
	}
	
	
	gameText(text,time,style){
		return GameTextForPlayer(this.id, text,time,style);	
	}
	
	toggleClock(toggle){
		return TogglePlayerClock(this.id,toggle);	
	}
	
	showTextDraw(tdid){
		return TextDrawShowForPlayer(this.id, tdid);	
	}
	
	hideTextDraw(tdid){
		return TextDrawHideForPlayer(this.id, tdid);	
	}
	
	playSound(soundid, x, y, z ){
		PlayerPlaySound(this.id, soundid, x,y,z);	
	}
	
	connected(){
		return IsPlayerConnected(this.id);	
	}
	
/**
 * Returns the player's id
 * @returns {Number} Player's internal sa-mp id
 */
	valueOf(){
		return this.id;
	}
};
