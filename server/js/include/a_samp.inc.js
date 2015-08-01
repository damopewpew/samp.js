const MAX_PLAYER_NAME = 24;
const MAX_PLAYERS = 1000;
const MAX_VEHICLES = 2000;
const MAX_ACTORS = 1000;
const INVALID_PLAYER_ID = 0xFFFF;
const INVALID_VEHICLE_ID = 0xFFFF;
const INVALID_ACTOR_ID = 0xFFFF;
const NO_TEAM = 255;
const MAX_OBJECTS = 1000;
const INVALID_OBJECT_ID = 0xFFFF;
const MAX_GANG_ZONES = 1024;
const MAX_TEXT_DRAWS = 2048;
const MAX_PLAYER_TEXT_DRAWS = 256;
const MAX_MENUS = 128;
const MAX_3DTEXT_GLOBAL = 1024;
const MAX_3DTEXT_PLAYER = 1024;
const MAX_PICKUPS = 4096;
const INVALID_MENU = 0xFF;
const INVALID_TEXT_DRAW = 0xFFFF;
const INVALID_GANG_ZONE = -1;
const INVALID_3DTEXT_ID = 0xFFFF;
const SERVER_VARTYPE_NONE = 0;
const SERVER_VARTYPE_INT = 1;
const SERVER_VARTYPE_STRING = 2;
const SERVER_VARTYPE_FLOAT = 3;
const TEXT_DRAW_FONT_SPRITE_DRAW = 4;
const TEXT_DRAW_FONT_MODEL_PREVIEW = 5;
const DIALOG_STYLE_MSGBOX = 0;
const DIALOG_STYLE_INPUT = 1;
const DIALOG_STYLE_LIST = 2;
const DIALOG_STYLE_PASSWORD = 3;
const DIALOG_STYLE_TABLIST = 4;
const DIALOG_STYLE_TABLIST_HEADERS = 5;
const PLAYER_STATE_NONE = 0;
const PLAYER_STATE_ONFOOT = 1;
const PLAYER_STATE_DRIVER = 2;
const PLAYER_STATE_PASSENGER = 3;
const PLAYER_STATE_EXIT_VEHICLE = 4; // used internally
const PLAYER_STATE_ENTER_VEHICLE_DRIVER = 5; // used internally
const PLAYER_STATE_ENTER_VEHICLE_PASSENGER = 6; // used internally
const PLAYER_STATE_WASTED = 7;
const PLAYER_STATE_SPAWNED = 8;
const PLAYER_STATE_SPECTATING = 9;
const PLAYER_MARKERS_MODE_OFF = 0;
const PLAYER_MARKERS_MODE_GLOBAL = 1;
const PLAYER_MARKERS_MODE_STREAMED = 2;
const WEAPON_BRASSKNUCKLE = 1;
const WEAPON_GOLFCLUB = 2;
const WEAPON_NITESTICK = 3;
const WEAPON_KNIFE = 4;
const WEAPON_BAT = 5;
const WEAPON_SHOVEL = 6;
const WEAPON_POOLSTICK = 7;
const WEAPON_KATANA = 8;
const WEAPON_CHAINSAW = 9;
const WEAPON_DILDO = 10;
const WEAPON_DILDO2 = 11;
const WEAPON_VIBRATOR = 12;
const WEAPON_VIBRATOR2 = 13;
const WEAPON_FLOWER = 14;
const WEAPON_CANE = 15;
const WEAPON_GRENADE = 16;
const WEAPON_TEARGAS = 17;
const WEAPON_MOLTOV = 18;
const WEAPON_COLT45 = 22;
const WEAPON_SILENCED = 23;
const WEAPON_DEAGLE = 24;
const WEAPON_SHOTGUN = 25;
const WEAPON_SAWEDOFF = 26;
const WEAPON_SHOTGSPA = 27;
const WEAPON_UZI = 28;
const WEAPON_MP5 = 29;
const WEAPON_AK47 = 30;
const WEAPON_M4 = 31;
const WEAPON_TEC9 = 32;
const WEAPON_RIFLE = 33;
const WEAPON_SNIPER = 34;
const WEAPON_ROCKETLAUNCHER = 35;
const WEAPON_HEATSEEKER = 36;
const WEAPON_FLAMETHROWER = 37;
const WEAPON_MINIGUN = 38;
const WEAPON_SATCHEL = 39;
const WEAPON_BOMB = 40;
const WEAPON_SPRAYCAN = 41;
const WEAPON_FIREEXTINGUISHER = 42;
const WEAPON_CAMERA = 43;
const WEAPON_PARACHUTE = 46;
const WEAPON_VEHICLE = 49;
const WEAPON_DROWN = 53;
const WEAPON_COLLISION = 54;
const KEY_ACTION = 1;
const KEY_CROUCH = 2;
const KEY_FIRE = 4;
const KEY_SPRINT = 8;
const KEY_SECONDARY_ATTACK = 16;
const KEY_JUMP = 32;
const KEY_LOOK_RIGHT = 64;
const KEY_HANDBRAKE = 128;
const KEY_LOOK_LEFT = 256;
const KEY_SUBMISSION = 512;
const KEY_LOOK_BEHIND = 512;
const KEY_WALK = 1024;
const KEY_ANALOG_UP = 2048;
const KEY_ANALOG_DOWN = 4096;
const KEY_ANALOG_LEFT = 8192;
const KEY_ANALOG_RIGHT = 16384;
const KEY_YES = 65536;
const KEY_NO = 131072;
const KEY_CTRL_BACK = 262144;
const KEY_UP = -128;
const KEY_DOWN = 128;
const KEY_LEFT = -128;
const KEY_RIGHT = 128;
const CLICK_SOURCE_SCOREBOARD = 0;
const EDIT_RESPONSE_CANCEL = 0;
const EDIT_RESPONSE_FINAL = 1;
const EDIT_RESPONSE_UPDATE = 2;
const SELECT_OBJECT_GLOBAL_OBJECT = 1;
const SELECT_OBJECT_PLAYER_OBJECT = 2;
const BULLET_HIT_TYPE_NONE = 0;
const BULLET_HIT_TYPE_PLAYER = 1;
const BULLET_HIT_TYPE_VEHICLE = 2;
const BULLET_HIT_TYPE_OBJECT = 3;
const BULLET_HIT_TYPE_PLAYER_OBJECT = 4;

/**
 * SendClientMessage
 * @see https://wiki.sa-mp.com/wiki/SendClientMessage
 * @param {Number} playerid
 * @param {Number} color
 * @param {String} message
 * @return {Number} retval
 */
function SendClientMessage(playerid, color, message) {
	return CallNativeGDK("SendClientMessage", "iis", playerid, color, message);
}

/**
 * SendClientMessageToAll
 * @see https://wiki.sa-mp.com/wiki/SendClientMessageToAll
 * @param {Number} color
 * @param {String} message
 * @return {Number} retval
 */
function SendClientMessageToAll(color, message) {
	return CallNativeGDK("SendClientMessageToAll", "is", color, message);
}

/**
 * SendPlayerMessageToPlayer
 * @see https://wiki.sa-mp.com/wiki/SendPlayerMessageToPlayer
 * @param {Number} playerid
 * @param {Number} senderid
 * @param {String} message
 * @return {Number} retval
 */
function SendPlayerMessageToPlayer(playerid, senderid, message) {
	return CallNativeGDK("SendPlayerMessageToPlayer", "iis", playerid, senderid, message);
}

/**
 * SendPlayerMessageToAll
 * @see https://wiki.sa-mp.com/wiki/SendPlayerMessageToAll
 * @param {Number} senderid
 * @param {String} message
 * @return {Number} retval
 */
function SendPlayerMessageToAll(senderid, message) {
	return CallNativeGDK("SendPlayerMessageToAll", "is", senderid, message);
}

/**
 * SendDeathMessage
 * @see https://wiki.sa-mp.com/wiki/SendDeathMessage
 * @param {Number} killer
 * @param {Number} killee
 * @param {Number} weapon
 * @return {Number} retval
 */
function SendDeathMessage(killer, killee, weapon) {
	return CallNativeGDK("SendDeathMessage", "iii", killer, killee, weapon);
}

/**
 * SendDeathMessageToPlayer
 * @see https://wiki.sa-mp.com/wiki/SendDeathMessageToPlayer
 * @param {Number} playerid
 * @param {Number} killer
 * @param {Number} killee
 * @param {Number} weapon
 * @return {Number} retval
 */
function SendDeathMessageToPlayer(playerid, killer, killee, weapon) {
	return CallNativeGDK("SendDeathMessageToPlayer", "iiii", playerid, killer, killee, weapon);
}

/**
 * GameTextForAll
 * @see https://wiki.sa-mp.com/wiki/GameTextForAll
 * @param {String} string
 * @param {Number} time
 * @param {Number} style
 * @return {Number} retval
 */
function GameTextForAll(string, time, style) {
	return CallNativeGDK("GameTextForAll", "sii", string, time, style);
}

/**
 * GameTextForPlayer
 * @see https://wiki.sa-mp.com/wiki/GameTextForPlayer
 * @param {Number} playerid
 * @param {String} string
 * @param {Number} time
 * @param {Number} style
 * @return {Number} retval
 */
function GameTextForPlayer(playerid, string, time, style) {
	return CallNativeGDK("GameTextForPlayer", "isii", playerid, string, time, style);
}

/**
 * SetTimerEx
 * @see https://wiki.sa-mp.com/wiki/SetTimerEx
 * @param {String} funcname
 * @param {Number} interval
 * @param {Number} repeating
 * @param {String} format
 * @param {Mixed} ...
 * @return {Number} retval
 */
function SetTimerEx(funcname, interval, repeating, format) {
	return CallNativeGDK("SetTimerEx", "siis", funcname, interval, repeating, format);
}

/**
 * KillTimer
 * @see https://wiki.sa-mp.com/wiki/KillTimer
 * @param {Number} timerid
 * @return {Number} retval
 */
function KillTimer(timerid) {
	return CallNativeGDK("KillTimer", "i", timerid);
}

/**
 * GetTickCount
 * @see https://wiki.sa-mp.com/wiki/GetTickCount
 * @return {Number} retval
 */
function GetTickCount() {
	return CallNativeGDK("GetTickCount");
}

/**
 * GetMaxPlayers
 * @see https://wiki.sa-mp.com/wiki/GetMaxPlayers
 * @return {Number} retval
 */
function GetMaxPlayers() {
	return CallNativeGDK("GetMaxPlayers");
}

/**
 * CallRemoteFunction
 * @see https://wiki.sa-mp.com/wiki/CallRemoteFunction
 * @param {String} func
 * @param {String} format
 * @param {Mixed} ...
 * @return {Number} retval
 */
function CallRemoteFunction(func, format) {
	return CallNativeGDK("CallRemoteFunction", "ss", func, format);
}

/**
 * CallLocalFunction
 * @see https://wiki.sa-mp.com/wiki/CallLocalFunction
 * @param {String} func
 * @param {String} format
 * @param {Mixed} ...
 * @return {Number} retval
 */
function CallLocalFunction(func, format) {
	return CallNativeGDK("CallLocalFunction", "ss", func, format);
}

/**
 * VectorSize
 * @see https://wiki.sa-mp.com/wiki/VectorSize
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function VectorSize(x, y, z) {
	return CallNativeGDK("VectorSize", "fff", x, y, z);
}

/**
 * GetPlayerPoolSize
 * @see https://wiki.sa-mp.com/wiki/GetPlayerPoolSize
 * @return {Number} retval
 */
function GetPlayerPoolSize() {
	return CallNativeGDK("GetPlayerPoolSize");
}

/**
 * GetVehiclePoolSize
 * @see https://wiki.sa-mp.com/wiki/GetVehiclePoolSize
 * @return {Number} retval
 */
function GetVehiclePoolSize() {
	return CallNativeGDK("GetVehiclePoolSize");
}

/**
 * GetActorPoolSize
 * @see https://wiki.sa-mp.com/wiki/GetActorPoolSize
 * @return {Number} retval
 */
function GetActorPoolSize() {
	return CallNativeGDK("GetActorPoolSize");
}

/**
 * SHA256_PassHash
 * @see https://wiki.sa-mp.com/wiki/SHA256_PassHash
 * @param {String} password
 * @param {String} salt
 * @param {Number} [ret_hash_len=256]
 * @return {String} ret_hash
 */
function SHA256_PassHash(password, salt, ret_hash_len)
{
	ret_hash_len = typeof ret_hash_len === 'undefined' ? 256 : ret_hash_len;
	return CallNativeGDK("SHA256_PassHash", "ssSi", password, salt, ret_hash_len);
}

/**
 * SetSVarInt
 * @see https://wiki.sa-mp.com/wiki/SetSVarInt
 * @param {String} varname
 * @param {Number} int_value
 * @return {Number} retval
 */
function SetSVarInt(varname, int_value) {
	return CallNativeGDK("SetSVarInt", "si", varname, int_value);
}

/**
 * GetSVarInt
 * @see https://wiki.sa-mp.com/wiki/GetSVarInt
 * @param {String} varname
 * @return {Number} retval
 */
function GetSVarInt(varname) {
	return CallNativeGDK("GetSVarInt", "s", varname);
}

/**
 * SetSVarString
 * @see https://wiki.sa-mp.com/wiki/SetSVarString
 * @param {String} varname
 * @param {String} string_value
 * @return {Number} retval
 */
function SetSVarString(varname, string_value) {
	return CallNativeGDK("SetSVarString", "ss", varname, string_value);
}

/**
 * GetSVarString
 * @see https://wiki.sa-mp.com/wiki/GetSVarString
 * @param {String} varname
 * @param {Number} [len=256]
 * @return {String} string_return
 */
function GetSVarString(varname, len)
{
	len = typeof len === 'undefined' ? 256 : len;
	return CallNativeGDK("GetSVarString", "sSi", varname, len);
}

/**
 * SetSVarFloat
 * @see https://wiki.sa-mp.com/wiki/SetSVarFloat
 * @param {String} varname
 * @param {Number} float_value
 * @return {Number} retval
 */
function SetSVarFloat(varname, float_value) {
	return CallNativeGDK("SetSVarFloat", "sf", varname, float_value);
}

/**
 * GetSVarFloat
 * @see https://wiki.sa-mp.com/wiki/GetSVarFloat
 * @param {String} varname
 * @return {Number} retval
 */
function GetSVarFloat(varname) {
	return CallNativeGDK("GetSVarFloat", "s", varname);
}

/**
 * DeleteSVar
 * @see https://wiki.sa-mp.com/wiki/DeleteSVar
 * @param {String} varname
 * @return {Number} retval
 */
function DeleteSVar(varname) {
	return CallNativeGDK("DeleteSVar", "s", varname);
}

/**
 * GetSVarsUpperIndex
 * @see https://wiki.sa-mp.com/wiki/GetSVarsUpperIndex
 * @return {Number} retval
 */
function GetSVarsUpperIndex() {
	return CallNativeGDK("GetSVarsUpperIndex");
}

/**
 * GetSVarNameAtIndex
 * @see https://wiki.sa-mp.com/wiki/GetSVarNameAtIndex
 * @param {Number} index
 * @param {Number} [ret_len=256]
 * @return {String} ret_varname
 */
function GetSVarNameAtIndex(index, ret_len)
{
	ret_len = typeof ret_len === 'undefined' ? 256 : ret_len;
	return CallNativeGDK("GetSVarNameAtIndex", "iSi", index, ret_len);
}

/**
 * GetSVarType
 * @see https://wiki.sa-mp.com/wiki/GetSVarType
 * @param {String} varname
 * @return {Number} retval
 */
function GetSVarType(varname) {
	return CallNativeGDK("GetSVarType", "s", varname);
}

/**
 * SetGameModeText
 * @see https://wiki.sa-mp.com/wiki/SetGameModeText
 * @param {String} string
 * @return {Number} retval
 */
function SetGameModeText(string) {
	return CallNativeGDK("SetGameModeText", "s", string);
}

/**
 * SetTeamCount
 * @see https://wiki.sa-mp.com/wiki/SetTeamCount
 * @param {Number} count
 * @return {Number} retval
 */
function SetTeamCount(count) {
	return CallNativeGDK("SetTeamCount", "i", count);
}

/**
 * AddPlayerClass
 * @see https://wiki.sa-mp.com/wiki/AddPlayerClass
 * @param {Number} modelid
 * @param {Number} spawn_x
 * @param {Number} spawn_y
 * @param {Number} spawn_z
 * @param {Number} z_angle
 * @param {Number} weapon1
 * @param {Number} weapon1_ammo
 * @param {Number} weapon2
 * @param {Number} weapon2_ammo
 * @param {Number} weapon3
 * @param {Number} weapon3_ammo
 * @return {Number} retval
 */
function AddPlayerClass(modelid, spawn_x, spawn_y, spawn_z, z_angle, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo) {
	return CallNativeGDK("AddPlayerClass", "iffffiiiiii", modelid, spawn_x, spawn_y, spawn_z, z_angle, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo);
}

/**
 * AddPlayerClassEx
 * @see https://wiki.sa-mp.com/wiki/AddPlayerClassEx
 * @param {Number} teamid
 * @param {Number} modelid
 * @param {Number} spawn_x
 * @param {Number} spawn_y
 * @param {Number} spawn_z
 * @param {Number} z_angle
 * @param {Number} weapon1
 * @param {Number} weapon1_ammo
 * @param {Number} weapon2
 * @param {Number} weapon2_ammo
 * @param {Number} weapon3
 * @param {Number} weapon3_ammo
 * @return {Number} retval
 */
function AddPlayerClassEx(teamid, modelid, spawn_x, spawn_y, spawn_z, z_angle, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo) {
	return CallNativeGDK("AddPlayerClassEx", "iiffffiiiiii", teamid, modelid, spawn_x, spawn_y, spawn_z, z_angle, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo);
}

/**
 * AddStaticVehicle
 * @see https://wiki.sa-mp.com/wiki/AddStaticVehicle
 * @param {Number} modelid
 * @param {Number} spawn_x
 * @param {Number} spawn_y
 * @param {Number} spawn_z
 * @param {Number} z_angle
 * @param {Number} color1
 * @param {Number} color2
 * @return {Number} retval
 */
function AddStaticVehicle(modelid, spawn_x, spawn_y, spawn_z, z_angle, color1, color2) {
	return CallNativeGDK("AddStaticVehicle", "iffffii", modelid, spawn_x, spawn_y, spawn_z, z_angle, color1, color2);
}

/**
 * AddStaticVehicleEx
 * @see https://wiki.sa-mp.com/wiki/AddStaticVehicleEx
 * @param {Number} modelid
 * @param {Number} spawn_x
 * @param {Number} spawn_y
 * @param {Number} spawn_z
 * @param {Number} z_angle
 * @param {Number} color1
 * @param {Number} color2
 * @param {Number} respawn_delay
 * @param {Number} [addsiren=0]
 * @return {Number} retval
 */
function AddStaticVehicleEx(modelid, spawn_x, spawn_y, spawn_z, z_angle, color1, color2, respawn_delay, addsiren)
{
	addsiren = typeof addsiren === 'undefined' ? 0 : addsiren;
	return CallNativeGDK("AddStaticVehicleEx", "iffffiiii", modelid, spawn_x, spawn_y, spawn_z, z_angle, color1, color2, respawn_delay, addsiren);
}

/**
 * AddStaticPickup
 * @see https://wiki.sa-mp.com/wiki/AddStaticPickup
 * @param {Number} model
 * @param {Number} type
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} [virtualworld=0]
 * @return {Number} retval
 */
function AddStaticPickup(model, type, x, y, z, virtualworld)
{
	virtualworld = typeof virtualworld === 'undefined' ? 0 : virtualworld;
	return CallNativeGDK("AddStaticPickup", "iifffi", model, type, x, y, z, virtualworld);
}

/**
 * CreatePickup
 * @see https://wiki.sa-mp.com/wiki/CreatePickup
 * @param {Number} model
 * @param {Number} type
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} [virtualworld=0]
 * @return {Number} retval
 */
function CreatePickup(model, type, x, y, z, virtualworld)
{
	virtualworld = typeof virtualworld === 'undefined' ? 0 : virtualworld;
	return CallNativeGDK("CreatePickup", "iifffi", model, type, x, y, z, virtualworld);
}

/**
 * DestroyPickup
 * @see https://wiki.sa-mp.com/wiki/DestroyPickup
 * @param {Number} pickup
 * @return {Number} retval
 */
function DestroyPickup(pickup) {
	return CallNativeGDK("DestroyPickup", "i", pickup);
}

/**
 * ShowNameTags
 * @see https://wiki.sa-mp.com/wiki/ShowNameTags
 * @param {Number} show
 * @return {Number} retval
 */
function ShowNameTags(show) {
	return CallNativeGDK("ShowNameTags", "i", show);
}

/**
 * ShowPlayerMarkers
 * @see https://wiki.sa-mp.com/wiki/ShowPlayerMarkers
 * @param {Number} mode
 * @return {Number} retval
 */
function ShowPlayerMarkers(mode) {
	return CallNativeGDK("ShowPlayerMarkers", "i", mode);
}

/**
 * GameModeExit
 * @see https://wiki.sa-mp.com/wiki/GameModeExit
 * @return {Number} retval
 */
function GameModeExit() {
	return CallNativeGDK("GameModeExit");
}

/**
 * SetWorldTime
 * @see https://wiki.sa-mp.com/wiki/SetWorldTime
 * @param {Number} hour
 * @return {Number} retval
 */
function SetWorldTime(hour) {
	return CallNativeGDK("SetWorldTime", "i", hour);
}

/**
 * GetWeaponName
 * @see https://wiki.sa-mp.com/wiki/GetWeaponName
 * @param {Number} weaponid
 * @param {Number} [len=256]
 * @return {String} weapon
 */
function GetWeaponName(weaponid, len)
{
	len = typeof len === 'undefined' ? 256 : len;
	return CallNativeGDK("GetWeaponName", "iSi", weaponid, len);
}

/**
 * EnableTirePopping
 * @see https://wiki.sa-mp.com/wiki/EnableTirePopping
 * @param {Number} enable
 * @return {Number} retval
 */
function EnableTirePopping(enable) {
	return CallNativeGDK("EnableTirePopping", "i", enable);
}

/**
 * EnableVehicleFriendlyFire
 * @see https://wiki.sa-mp.com/wiki/EnableVehicleFriendlyFire
 * @return {Number} retval
 */
function EnableVehicleFriendlyFire() {
	return CallNativeGDK("EnableVehicleFriendlyFire");
}

/**
 * AllowInteriorWeapons
 * @see https://wiki.sa-mp.com/wiki/AllowInteriorWeapons
 * @param {Number} allow
 * @return {Number} retval
 */
function AllowInteriorWeapons(allow) {
	return CallNativeGDK("AllowInteriorWeapons", "i", allow);
}

/**
 * SetWeather
 * @see https://wiki.sa-mp.com/wiki/SetWeather
 * @param {Number} weatherid
 * @return {Number} retval
 */
function SetWeather(weatherid) {
	return CallNativeGDK("SetWeather", "i", weatherid);
}

/**
 * SetGravity
 * @see https://wiki.sa-mp.com/wiki/SetGravity
 * @param {Number} gravity
 * @return {Number} retval
 */
function SetGravity(gravity) {
	return CallNativeGDK("SetGravity", "f", gravity);
}

/**
 * SetDeathDropAmount
 * @see https://wiki.sa-mp.com/wiki/SetDeathDropAmount
 * @param {Number} amount
 * @return {Number} retval
 */
function SetDeathDropAmount(amount) {
	return CallNativeGDK("SetDeathDropAmount", "i", amount);
}

/**
 * CreateExplosion
 * @see https://wiki.sa-mp.com/wiki/CreateExplosion
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} type
 * @param {Number} radius
 * @return {Number} retval
 */
function CreateExplosion(x, y, z, type, radius) {
	return CallNativeGDK("CreateExplosion", "fffif", x, y, z, type, radius);
}

/**
 * EnableZoneNames
 * @see https://wiki.sa-mp.com/wiki/EnableZoneNames
 * @param {Number} enable
 * @return {Number} retval
 */
function EnableZoneNames(enable) {
	return CallNativeGDK("EnableZoneNames", "i", enable);
}

/**
 * UsePlayerPedAnims
 * @see https://wiki.sa-mp.com/wiki/UsePlayerPedAnims
 * @return {Number} retval
 */
function UsePlayerPedAnims() {
	return CallNativeGDK("UsePlayerPedAnims");
}

/**
 * DisableInteriorEnterExits
 * @see https://wiki.sa-mp.com/wiki/DisableInteriorEnterExits
 * @return {Number} retval
 */
function DisableInteriorEnterExits() {
	return CallNativeGDK("DisableInteriorEnterExits");
}

/**
 * SetNameTagDrawDistance
 * @see https://wiki.sa-mp.com/wiki/SetNameTagDrawDistance
 * @param {Number} distance
 * @return {Number} retval
 */
function SetNameTagDrawDistance(distance) {
	return CallNativeGDK("SetNameTagDrawDistance", "f", distance);
}

/**
 * DisableNameTagLOS
 * @see https://wiki.sa-mp.com/wiki/DisableNameTagLOS
 * @return {Number} retval
 */
function DisableNameTagLOS() {
	return CallNativeGDK("DisableNameTagLOS");
}

/**
 * LimitGlobalChatRadius
 * @see https://wiki.sa-mp.com/wiki/LimitGlobalChatRadius
 * @param {Number} chat_radius
 * @return {Number} retval
 */
function LimitGlobalChatRadius(chat_radius) {
	return CallNativeGDK("LimitGlobalChatRadius", "f", chat_radius);
}

/**
 * LimitPlayerMarkerRadius
 * @see https://wiki.sa-mp.com/wiki/LimitPlayerMarkerRadius
 * @param {Number} marker_radius
 * @return {Number} retval
 */
function LimitPlayerMarkerRadius(marker_radius) {
	return CallNativeGDK("LimitPlayerMarkerRadius", "f", marker_radius);
}

/**
 * ConnectNPC
 * @see https://wiki.sa-mp.com/wiki/ConnectNPC
 * @param {String} name
 * @param {String} script
 * @return {Number} retval
 */
function ConnectNPC(name, script) {
	return CallNativeGDK("ConnectNPC", "ss", name, script);
}

/**
 * IsPlayerNPC
 * @see https://wiki.sa-mp.com/wiki/IsPlayerNPC
 * @param {Number} playerid
 * @return {Number} retval
 */
function IsPlayerNPC(playerid) {
	return CallNativeGDK("IsPlayerNPC", "i", playerid);
}

/**
 * IsPlayerAdmin
 * @see https://wiki.sa-mp.com/wiki/IsPlayerAdmin
 * @param {Number} playerid
 * @return {Number} retval
 */
function IsPlayerAdmin(playerid) {
	return CallNativeGDK("IsPlayerAdmin", "i", playerid);
}

/**
 * Kick
 * @see https://wiki.sa-mp.com/wiki/Kick
 * @param {Number} playerid
 * @return {Number} retval
 */
function Kick(playerid) {
	return CallNativeGDK("Kick", "i", playerid);
}

/**
 * Ban
 * @see https://wiki.sa-mp.com/wiki/Ban
 * @param {Number} playerid
 * @return {Number} retval
 */
function Ban(playerid) {
	return CallNativeGDK("Ban", "i", playerid);
}

/**
 * BanEx
 * @see https://wiki.sa-mp.com/wiki/BanEx
 * @param {Number} playerid
 * @param {String} reason
 * @return {Number} retval
 */
function BanEx(playerid, reason) {
	return CallNativeGDK("BanEx", "is", playerid, reason);
}

/**
 * SendRconCommand
 * @see https://wiki.sa-mp.com/wiki/SendRconCommand
 * @param {String} command
 * @return {Number} retval
 */
function SendRconCommand(command) {
	return CallNativeGDK("SendRconCommand", "s", command);
}

/**
 * GetPlayerNetworkStats
 * @see https://wiki.sa-mp.com/wiki/GetPlayerNetworkStats
 * @param {Number} playerid
 * @param {String} retstr
 * @param {Number} retstr_size
 * @return {Number} retval
 */
function GetPlayerNetworkStats(playerid, retstr, retstr_size) {
	return CallNativeGDK("GetPlayerNetworkStats", "isi", playerid, retstr, retstr_size);
}

/**
 * GetNetworkStats
 * @see https://wiki.sa-mp.com/wiki/GetNetworkStats
 * @param {String} retstr
 * @param {Number} retstr_size
 * @return {Number} retval
 */
function GetNetworkStats(retstr, retstr_size) {
	return CallNativeGDK("GetNetworkStats", "si", retstr, retstr_size);
}

/**
 * GetPlayerVersion
 * @see https://wiki.sa-mp.com/wiki/GetPlayerVersion
 * @param {Number} playerid
 * @param {Number} [len=256]
 * @return {String} version
 */
function GetPlayerVersion(playerid, len)
{
	len = typeof len === 'undefined' ? 256 : len;
	return CallNativeGDK("GetPlayerVersion", "iSi", playerid, len);
}

/**
 * BlockIpAddress
 * @see https://wiki.sa-mp.com/wiki/BlockIpAddress
 * @param {String} ip_address
 * @param {Number} timems
 * @return {Number} retval
 */
function BlockIpAddress(ip_address, timems) {
	return CallNativeGDK("BlockIpAddress", "si", ip_address, timems);
}

/**
 * UnBlockIpAddress
 * @see https://wiki.sa-mp.com/wiki/UnBlockIpAddress
 * @param {String} ip_address
 * @return {Number} retval
 */
function UnBlockIpAddress(ip_address) {
	return CallNativeGDK("UnBlockIpAddress", "s", ip_address);
}

/**
 * GetServerVarAsString
 * @see https://wiki.sa-mp.com/wiki/GetServerVarAsString
 * @param {String} varname
 * @param {Number} [len=256]
 * @return {String} buffer
 */
function GetServerVarAsString(varname, len)
{
	len = typeof len === 'undefined' ? 256 : len;
	return CallNativeGDK("GetServerVarAsString", "sSi", varname, len);
}

/**
 * GetServerVarAsInt
 * @see https://wiki.sa-mp.com/wiki/GetServerVarAsInt
 * @param {String} varname
 * @return {Number} retval
 */
function GetServerVarAsInt(varname) {
	return CallNativeGDK("GetServerVarAsInt", "s", varname);
}

/**
 * GetServerVarAsBool
 * @see https://wiki.sa-mp.com/wiki/GetServerVarAsBool
 * @param {String} varname
 * @return {Number} retval
 */
function GetServerVarAsBool(varname) {
	return CallNativeGDK("GetServerVarAsBool", "s", varname);
}

/**
 * GetConsoleVarAsString
 * @see https://wiki.sa-mp.com/wiki/GetConsoleVarAsString
 * @param {String} varname
 * @param {Number} [len=256]
 * @return {String} buffer
 */
function GetConsoleVarAsString(varname, len)
{
	len = typeof len === 'undefined' ? 256 : len;
	return CallNativeGDK("GetConsoleVarAsString", "sSi", varname, len);
}

/**
 * GetConsoleVarAsInt
 * @see https://wiki.sa-mp.com/wiki/GetConsoleVarAsInt
 * @param {String} varname
 * @return {Number} retval
 */
function GetConsoleVarAsInt(varname) {
	return CallNativeGDK("GetConsoleVarAsInt", "s", varname);
}

/**
 * GetConsoleVarAsBool
 * @see https://wiki.sa-mp.com/wiki/GetConsoleVarAsBool
 * @param {String} varname
 * @return {Number} retval
 */
function GetConsoleVarAsBool(varname) {
	return CallNativeGDK("GetConsoleVarAsBool", "s", varname);
}

/**
 * GetServerTickRate
 * @see https://wiki.sa-mp.com/wiki/GetServerTickRate
 * @return {Number} retval
 */
function GetServerTickRate() {
	return CallNativeGDK("GetServerTickRate");
}

/**
 * NetStats_GetConnectedTime
 * @see https://wiki.sa-mp.com/wiki/NetStats_GetConnectedTime
 * @param {Number} playerid
 * @return {Number} retval
 */
function NetStats_GetConnectedTime(playerid) {
	return CallNativeGDK("NetStats_GetConnectedTime", "i", playerid);
}

/**
 * NetStats_MessagesReceived
 * @see https://wiki.sa-mp.com/wiki/NetStats_MessagesReceived
 * @param {Number} playerid
 * @return {Number} retval
 */
function NetStats_MessagesReceived(playerid) {
	return CallNativeGDK("NetStats_MessagesReceived", "i", playerid);
}

/**
 * NetStats_BytesReceived
 * @see https://wiki.sa-mp.com/wiki/NetStats_BytesReceived
 * @param {Number} playerid
 * @return {Number} retval
 */
function NetStats_BytesReceived(playerid) {
	return CallNativeGDK("NetStats_BytesReceived", "i", playerid);
}

/**
 * NetStats_MessagesSent
 * @see https://wiki.sa-mp.com/wiki/NetStats_MessagesSent
 * @param {Number} playerid
 * @return {Number} retval
 */
function NetStats_MessagesSent(playerid) {
	return CallNativeGDK("NetStats_MessagesSent", "i", playerid);
}

/**
 * NetStats_BytesSent
 * @see https://wiki.sa-mp.com/wiki/NetStats_BytesSent
 * @param {Number} playerid
 * @return {Number} retval
 */
function NetStats_BytesSent(playerid) {
	return CallNativeGDK("NetStats_BytesSent", "i", playerid);
}

/**
 * NetStats_MessagesRecvPerSecond
 * @see https://wiki.sa-mp.com/wiki/NetStats_MessagesRecvPerSecond
 * @param {Number} playerid
 * @return {Number} retval
 */
function NetStats_MessagesRecvPerSecond(playerid) {
	return CallNativeGDK("NetStats_MessagesRecvPerSecond", "i", playerid);
}

/**
 * NetStats_PacketLossPercent
 * @see https://wiki.sa-mp.com/wiki/NetStats_PacketLossPercent
 * @param {Number} playerid
 * @return {Number} retval
 */
function NetStats_PacketLossPercent(playerid) {
	return CallNativeGDK("NetStats_PacketLossPercent", "i", playerid);
}

/**
 * NetStats_ConnectionStatus
 * @see https://wiki.sa-mp.com/wiki/NetStats_ConnectionStatus
 * @param {Number} playerid
 * @return {Number} retval
 */
function NetStats_ConnectionStatus(playerid) {
	return CallNativeGDK("NetStats_ConnectionStatus", "i", playerid);
}

/**
 * NetStats_GetIpPort
 * @see https://wiki.sa-mp.com/wiki/NetStats_GetIpPort
 * @param {Number} playerid
 * @param {Number} [ip_port_len=256]
 * @return {String} ip_port
 */
function NetStats_GetIpPort(playerid, ip_port_len)
{
	ip_port_len = typeof ip_port_len === 'undefined' ? 256 : ip_port_len;
	return CallNativeGDK("NetStats_GetIpPort", "iSi", playerid, ip_port_len);
}

/**
 * CreateMenu
 * @see https://wiki.sa-mp.com/wiki/CreateMenu
 * @param {String} title
 * @param {Number} columns
 * @param {Number} x
 * @param {Number} y
 * @param {Number} col1width
 * @param {Number} [col2width=0.0]
 * @return {Number} retval
 */
function CreateMenu(title, columns, x, y, col1width, col2width)
{
	col2width = typeof col2width === 'undefined' ? 0.0 : col2width;
	return CallNativeGDK("CreateMenu", "siffff", title, columns, x, y, col1width, col2width);
}

/**
 * DestroyMenu
 * @see https://wiki.sa-mp.com/wiki/DestroyMenu
 * @param {Number} menuid
 * @return {Number} retval
 */
function DestroyMenu(menuid) {
	return CallNativeGDK("DestroyMenu", "i", menuid);
}

/**
 * AddMenuItem
 * @see https://wiki.sa-mp.com/wiki/AddMenuItem
 * @param {Number} menuid
 * @param {Number} column
 * @param {String} menutext
 * @return {Number} retval
 */
function AddMenuItem(menuid, column, menutext) {
	return CallNativeGDK("AddMenuItem", "iis", menuid, column, menutext);
}

/**
 * SetMenuColumnHeader
 * @see https://wiki.sa-mp.com/wiki/SetMenuColumnHeader
 * @param {Number} menuid
 * @param {Number} column
 * @param {String} columnheader
 * @return {Number} retval
 */
function SetMenuColumnHeader(menuid, column, columnheader) {
	return CallNativeGDK("SetMenuColumnHeader", "iis", menuid, column, columnheader);
}

/**
 * ShowMenuForPlayer
 * @see https://wiki.sa-mp.com/wiki/ShowMenuForPlayer
 * @param {Number} menuid
 * @param {Number} playerid
 * @return {Number} retval
 */
function ShowMenuForPlayer(menuid, playerid) {
	return CallNativeGDK("ShowMenuForPlayer", "ii", menuid, playerid);
}

/**
 * HideMenuForPlayer
 * @see https://wiki.sa-mp.com/wiki/HideMenuForPlayer
 * @param {Number} menuid
 * @param {Number} playerid
 * @return {Number} retval
 */
function HideMenuForPlayer(menuid, playerid) {
	return CallNativeGDK("HideMenuForPlayer", "ii", menuid, playerid);
}

/**
 * IsValidMenu
 * @see https://wiki.sa-mp.com/wiki/IsValidMenu
 * @param {Number} menuid
 * @return {Number} retval
 */
function IsValidMenu(menuid) {
	return CallNativeGDK("IsValidMenu", "i", menuid);
}

/**
 * DisableMenu
 * @see https://wiki.sa-mp.com/wiki/DisableMenu
 * @param {Number} menuid
 * @return {Number} retval
 */
function DisableMenu(menuid) {
	return CallNativeGDK("DisableMenu", "i", menuid);
}

/**
 * DisableMenuRow
 * @see https://wiki.sa-mp.com/wiki/DisableMenuRow
 * @param {Number} menuid
 * @param {Number} row
 * @return {Number} retval
 */
function DisableMenuRow(menuid, row) {
	return CallNativeGDK("DisableMenuRow", "ii", menuid, row);
}

/**
 * GetPlayerMenu
 * @see https://wiki.sa-mp.com/wiki/GetPlayerMenu
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerMenu(playerid) {
	return CallNativeGDK("GetPlayerMenu", "i", playerid);
}

/**
 * TextDrawCreate
 * @see https://wiki.sa-mp.com/wiki/TextDrawCreate
 * @param {Number} x
 * @param {Number} y
 * @param {String} text
 * @return {Number} retval
 */
function TextDrawCreate(x, y, text) {
	return CallNativeGDK("TextDrawCreate", "ffs", x, y, text);
}

/**
 * TextDrawDestroy
 * @see https://wiki.sa-mp.com/wiki/TextDrawDestroy
 * @param {Number} text
 * @return {Number} retval
 */
function TextDrawDestroy(text) {
	return CallNativeGDK("TextDrawDestroy", "i", text);
}

/**
 * TextDrawLetterSize
 * @see https://wiki.sa-mp.com/wiki/TextDrawLetterSize
 * @param {Number} text
 * @param {Number} x
 * @param {Number} y
 * @return {Number} retval
 */
function TextDrawLetterSize(text, x, y) {
	return CallNativeGDK("TextDrawLetterSize", "iff", text, x, y);
}

/**
 * TextDrawTextSize
 * @see https://wiki.sa-mp.com/wiki/TextDrawTextSize
 * @param {Number} text
 * @param {Number} x
 * @param {Number} y
 * @return {Number} retval
 */
function TextDrawTextSize(text, x, y) {
	return CallNativeGDK("TextDrawTextSize", "iff", text, x, y);
}

/**
 * TextDrawAlignment
 * @see https://wiki.sa-mp.com/wiki/TextDrawAlignment
 * @param {Number} text
 * @param {Number} alignment
 * @return {Number} retval
 */
function TextDrawAlignment(text, alignment) {
	return CallNativeGDK("TextDrawAlignment", "ii", text, alignment);
}

/**
 * TextDrawColor
 * @see https://wiki.sa-mp.com/wiki/TextDrawColor
 * @param {Number} text
 * @param {Number} color
 * @return {Number} retval
 */
function TextDrawColor(text, color) {
	return CallNativeGDK("TextDrawColor", "ii", text, color);
}

/**
 * TextDrawUseBox
 * @see https://wiki.sa-mp.com/wiki/TextDrawUseBox
 * @param {Number} text
 * @param {Number} use
 * @return {Number} retval
 */
function TextDrawUseBox(text, use) {
	return CallNativeGDK("TextDrawUseBox", "ii", text, use);
}

/**
 * TextDrawBoxColor
 * @see https://wiki.sa-mp.com/wiki/TextDrawBoxColor
 * @param {Number} text
 * @param {Number} color
 * @return {Number} retval
 */
function TextDrawBoxColor(text, color) {
	return CallNativeGDK("TextDrawBoxColor", "ii", text, color);
}

/**
 * TextDrawSetShadow
 * @see https://wiki.sa-mp.com/wiki/TextDrawSetShadow
 * @param {Number} text
 * @param {Number} size
 * @return {Number} retval
 */
function TextDrawSetShadow(text, size) {
	return CallNativeGDK("TextDrawSetShadow", "ii", text, size);
}

/**
 * TextDrawSetOutline
 * @see https://wiki.sa-mp.com/wiki/TextDrawSetOutline
 * @param {Number} text
 * @param {Number} size
 * @return {Number} retval
 */
function TextDrawSetOutline(text, size) {
	return CallNativeGDK("TextDrawSetOutline", "ii", text, size);
}

/**
 * TextDrawBackgroundColor
 * @see https://wiki.sa-mp.com/wiki/TextDrawBackgroundColor
 * @param {Number} text
 * @param {Number} color
 * @return {Number} retval
 */
function TextDrawBackgroundColor(text, color) {
	return CallNativeGDK("TextDrawBackgroundColor", "ii", text, color);
}

/**
 * TextDrawFont
 * @see https://wiki.sa-mp.com/wiki/TextDrawFont
 * @param {Number} text
 * @param {Number} font
 * @return {Number} retval
 */
function TextDrawFont(text, font) {
	return CallNativeGDK("TextDrawFont", "ii", text, font);
}

/**
 * TextDrawSetProportional
 * @see https://wiki.sa-mp.com/wiki/TextDrawSetProportional
 * @param {Number} text
 * @param {Number} set
 * @return {Number} retval
 */
function TextDrawSetProportional(text, set) {
	return CallNativeGDK("TextDrawSetProportional", "ii", text, set);
}

/**
 * TextDrawSetSelectable
 * @see https://wiki.sa-mp.com/wiki/TextDrawSetSelectable
 * @param {Number} text
 * @param {Number} set
 * @return {Number} retval
 */
function TextDrawSetSelectable(text, set) {
	return CallNativeGDK("TextDrawSetSelectable", "ii", text, set);
}

/**
 * TextDrawShowForPlayer
 * @see https://wiki.sa-mp.com/wiki/TextDrawShowForPlayer
 * @param {Number} playerid
 * @param {Number} text
 * @return {Number} retval
 */
function TextDrawShowForPlayer(playerid, text) {
	return CallNativeGDK("TextDrawShowForPlayer", "ii", playerid, text);
}

/**
 * TextDrawHideForPlayer
 * @see https://wiki.sa-mp.com/wiki/TextDrawHideForPlayer
 * @param {Number} playerid
 * @param {Number} text
 * @return {Number} retval
 */
function TextDrawHideForPlayer(playerid, text) {
	return CallNativeGDK("TextDrawHideForPlayer", "ii", playerid, text);
}

/**
 * TextDrawShowForAll
 * @see https://wiki.sa-mp.com/wiki/TextDrawShowForAll
 * @param {Number} text
 * @return {Number} retval
 */
function TextDrawShowForAll(text) {
	return CallNativeGDK("TextDrawShowForAll", "i", text);
}

/**
 * TextDrawHideForAll
 * @see https://wiki.sa-mp.com/wiki/TextDrawHideForAll
 * @param {Number} text
 * @return {Number} retval
 */
function TextDrawHideForAll(text) {
	return CallNativeGDK("TextDrawHideForAll", "i", text);
}

/**
 * TextDrawSetString
 * @see https://wiki.sa-mp.com/wiki/TextDrawSetString
 * @param {Number} text
 * @param {String} string
 * @return {Number} retval
 */
function TextDrawSetString(text, string) {
	return CallNativeGDK("TextDrawSetString", "is", text, string);
}

/**
 * TextDrawSetPreviewModel
 * @see https://wiki.sa-mp.com/wiki/TextDrawSetPreviewModel
 * @param {Number} text
 * @param {Number} modelindex
 * @return {Number} retval
 */
function TextDrawSetPreviewModel(text, modelindex) {
	return CallNativeGDK("TextDrawSetPreviewModel", "ii", text, modelindex);
}

/**
 * TextDrawSetPreviewRot
 * @see https://wiki.sa-mp.com/wiki/TextDrawSetPreviewRot
 * @param {Number} text
 * @param {Number} fRotX
 * @param {Number} fRotY
 * @param {Number} fRotZ
 * @param {Number} [fZoom=1.0]
 * @return {Number} retval
 */
function TextDrawSetPreviewRot(text, fRotX, fRotY, fRotZ, fZoom)
{
	fZoom = typeof fZoom === 'undefined' ? 1.0 : fZoom;
	return CallNativeGDK("TextDrawSetPreviewRot", "iffff", text, fRotX, fRotY, fRotZ, fZoom);
}

/**
 * TextDrawSetPreviewVehCol
 * @see https://wiki.sa-mp.com/wiki/TextDrawSetPreviewVehCol
 * @param {Number} text
 * @param {Number} color1
 * @param {Number} color2
 * @return {Number} retval
 */
function TextDrawSetPreviewVehCol(text, color1, color2) {
	return CallNativeGDK("TextDrawSetPreviewVehCol", "iii", text, color1, color2);
}

/**
 * GangZoneCreate
 * @see https://wiki.sa-mp.com/wiki/GangZoneCreate
 * @param {Number} minx
 * @param {Number} miny
 * @param {Number} maxx
 * @param {Number} maxy
 * @return {Number} retval
 */
function GangZoneCreate(minx, miny, maxx, maxy) {
	return CallNativeGDK("GangZoneCreate", "ffff", minx, miny, maxx, maxy);
}

/**
 * GangZoneDestroy
 * @see https://wiki.sa-mp.com/wiki/GangZoneDestroy
 * @param {Number} zone
 * @return {Number} retval
 */
function GangZoneDestroy(zone) {
	return CallNativeGDK("GangZoneDestroy", "i", zone);
}

/**
 * GangZoneShowForPlayer
 * @see https://wiki.sa-mp.com/wiki/GangZoneShowForPlayer
 * @param {Number} playerid
 * @param {Number} zone
 * @param {Number} color
 * @return {Number} retval
 */
function GangZoneShowForPlayer(playerid, zone, color) {
	return CallNativeGDK("GangZoneShowForPlayer", "iii", playerid, zone, color);
}

/**
 * GangZoneShowForAll
 * @see https://wiki.sa-mp.com/wiki/GangZoneShowForAll
 * @param {Number} zone
 * @param {Number} color
 * @return {Number} retval
 */
function GangZoneShowForAll(zone, color) {
	return CallNativeGDK("GangZoneShowForAll", "ii", zone, color);
}

/**
 * GangZoneHideForPlayer
 * @see https://wiki.sa-mp.com/wiki/GangZoneHideForPlayer
 * @param {Number} playerid
 * @param {Number} zone
 * @return {Number} retval
 */
function GangZoneHideForPlayer(playerid, zone) {
	return CallNativeGDK("GangZoneHideForPlayer", "ii", playerid, zone);
}

/**
 * GangZoneHideForAll
 * @see https://wiki.sa-mp.com/wiki/GangZoneHideForAll
 * @param {Number} zone
 * @return {Number} retval
 */
function GangZoneHideForAll(zone) {
	return CallNativeGDK("GangZoneHideForAll", "i", zone);
}

/**
 * GangZoneFlashForPlayer
 * @see https://wiki.sa-mp.com/wiki/GangZoneFlashForPlayer
 * @param {Number} playerid
 * @param {Number} zone
 * @param {Number} flashcolor
 * @return {Number} retval
 */
function GangZoneFlashForPlayer(playerid, zone, flashcolor) {
	return CallNativeGDK("GangZoneFlashForPlayer", "iii", playerid, zone, flashcolor);
}

/**
 * GangZoneFlashForAll
 * @see https://wiki.sa-mp.com/wiki/GangZoneFlashForAll
 * @param {Number} zone
 * @param {Number} flashcolor
 * @return {Number} retval
 */
function GangZoneFlashForAll(zone, flashcolor) {
	return CallNativeGDK("GangZoneFlashForAll", "ii", zone, flashcolor);
}

/**
 * GangZoneStopFlashForPlayer
 * @see https://wiki.sa-mp.com/wiki/GangZoneStopFlashForPlayer
 * @param {Number} playerid
 * @param {Number} zone
 * @return {Number} retval
 */
function GangZoneStopFlashForPlayer(playerid, zone) {
	return CallNativeGDK("GangZoneStopFlashForPlayer", "ii", playerid, zone);
}

/**
 * GangZoneStopFlashForAll
 * @see https://wiki.sa-mp.com/wiki/GangZoneStopFlashForAll
 * @param {Number} zone
 * @return {Number} retval
 */
function GangZoneStopFlashForAll(zone) {
	return CallNativeGDK("GangZoneStopFlashForAll", "i", zone);
}

/**
 * Create3DTextLabel
 * @see https://wiki.sa-mp.com/wiki/Create3DTextLabel
 * @param {String} text
 * @param {Number} color
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} drawDistance
 * @param {Number} virtualworld
 * @param {Number} [testLOS=0]
 * @return {Number} retval
 */
function Create3DTextLabel(text, color, x, y, z, drawDistance, virtualworld, testLOS)
{
	testLOS = typeof testLOS === 'undefined' ? 0 : testLOS;
	return CallNativeGDK("Create3DTextLabel", "siffffii", text, color, x, y, z, drawDistance, virtualworld, testLOS);
}

/**
 * Delete3DTextLabel
 * @see https://wiki.sa-mp.com/wiki/Delete3DTextLabel
 * @param {Number} id
 * @return {Number} retval
 */
function Delete3DTextLabel(id) {
	return CallNativeGDK("Delete3DTextLabel", "i", id);
}

/**
 * Attach3DTextLabelToPlayer
 * @see https://wiki.sa-mp.com/wiki/Attach3DTextLabelToPlayer
 * @param {Number} id
 * @param {Number} playerid
 * @param {Number} OffsetX
 * @param {Number} OffsetY
 * @param {Number} OffsetZ
 * @return {Number} retval
 */
function Attach3DTextLabelToPlayer(id, playerid, OffsetX, OffsetY, OffsetZ) {
	return CallNativeGDK("Attach3DTextLabelToPlayer", "iifff", id, playerid, OffsetX, OffsetY, OffsetZ);
}

/**
 * Attach3DTextLabelToVehicle
 * @see https://wiki.sa-mp.com/wiki/Attach3DTextLabelToVehicle
 * @param {Number} id
 * @param {Number} vehicleid
 * @param {Number} OffsetX
 * @param {Number} OffsetY
 * @param {Number} OffsetZ
 * @return {Number} retval
 */
function Attach3DTextLabelToVehicle(id, vehicleid, OffsetX, OffsetY, OffsetZ) {
	return CallNativeGDK("Attach3DTextLabelToVehicle", "iifff", id, vehicleid, OffsetX, OffsetY, OffsetZ);
}

/**
 * Update3DTextLabelText
 * @see https://wiki.sa-mp.com/wiki/Update3DTextLabelText
 * @param {Number} id
 * @param {Number} color
 * @param {String} text
 * @return {Number} retval
 */
function Update3DTextLabelText(id, color, text) {
	return CallNativeGDK("Update3DTextLabelText", "iis", id, color, text);
}

/**
 * CreatePlayer3DTextLabel
 * @see https://wiki.sa-mp.com/wiki/CreatePlayer3DTextLabel
 * @param {Number} playerid
 * @param {String} text
 * @param {Number} color
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} drawDistance
 * @param {Number} [attachedplayer=INVALID_PLAYER_ID]
 * @param {Number} [attachedvehicle=INVALID_VEHICLE_ID]
 * @param {Number} [testLOS=0]
 * @return {Number} retval
 */
function CreatePlayer3DTextLabel(playerid, text, color, x, y, z, drawDistance, attachedplayer, attachedvehicle, testLOS)
{
	attachedplayer = typeof attachedplayer === 'undefined' ? INVALID_PLAYER_ID : attachedplayer;
	attachedvehicle = typeof attachedvehicle === 'undefined' ? INVALID_VEHICLE_ID : attachedvehicle;
	testLOS = typeof testLOS === 'undefined' ? 0 : testLOS;
	return CallNativeGDK("CreatePlayer3DTextLabel", "isiffffiii", playerid, text, color, x, y, z, drawDistance, attachedplayer, attachedvehicle, testLOS);
}

/**
 * DeletePlayer3DTextLabel
 * @see https://wiki.sa-mp.com/wiki/DeletePlayer3DTextLabel
 * @param {Number} playerid
 * @param {Number} id
 * @return {Number} retval
 */
function DeletePlayer3DTextLabel(playerid, id) {
	return CallNativeGDK("DeletePlayer3DTextLabel", "ii", playerid, id);
}

/**
 * UpdatePlayer3DTextLabelText
 * @see https://wiki.sa-mp.com/wiki/UpdatePlayer3DTextLabelText
 * @param {Number} playerid
 * @param {Number} id
 * @param {Number} color
 * @param {String} text
 * @return {Number} retval
 */
function UpdatePlayer3DTextLabelText(playerid, id, color, text) {
	return CallNativeGDK("UpdatePlayer3DTextLabelText", "iiis", playerid, id, color, text);
}

/**
 * ShowPlayerDialog
 * @see https://wiki.sa-mp.com/wiki/ShowPlayerDialog
 * @param {Number} playerid
 * @param {Number} dialogid
 * @param {Number} style
 * @param {String} caption
 * @param {String} info
 * @param {String} button1
 * @param {String} button2
 * @return {Number} retval
 */
function ShowPlayerDialog(playerid, dialogid, style, caption, info, button1, button2) {
	return CallNativeGDK("ShowPlayerDialog", "iiissss", playerid, dialogid, style, caption, info, button1, button2);
}
