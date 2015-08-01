const PLAYER_RECORDING_TYPE_NONE = 0;
const PLAYER_RECORDING_TYPE_DRIVER = 1;
const PLAYER_RECORDING_TYPE_ONFOOT = 2;
const PLAYER_STATE_NONE = 0;
const PLAYER_STATE_ONFOOT = 1;
const PLAYER_STATE_DRIVER = 2;
const PLAYER_STATE_PASSENGER = 3;
const PLAYER_STATE_WASTED = 7;
const PLAYER_STATE_SPAWNED = 8;
const PLAYER_STATE_SPECTATING = 9;
const MAX_PLAYER_NAME = 24;
const MAX_PLAYERS = 500;
const MAX_VEHICLES = 2000;
const INVALID_PLAYER_ID = 0xFFFF;
const INVALID_VEHICLE_ID = 0xFFFF;
const NO_TEAM = 255;
const MAX_OBJECTS = 150;
const INVALID_OBJECT_ID = 255;
const MAX_GANG_ZONES = 1024;
const MAX_TEXT_DRAWS = 1024;
const MAX_MENUS = 128;
const INVALID_MENU = 0xFF;
const INVALID_TEXT_DRAW = 0xFFFF;
const INVALID_GANG_ZONE = -1;
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
const KEY_ANALOG_RIGHT = 16384;
const KEY_ANALOG_LEFT = 8192;
const KEY_UP = -128;
const KEY_DOWN = 128;
const KEY_LEFT = -128;
const KEY_RIGHT = 128;

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
 * SendChat
 * @see https://wiki.sa-mp.com/wiki/SendChat
 * @param {String} msg
 * @return {Number} retval
 */
function SendChat(msg) {
	return CallNativeGDK("SendChat", "s", msg);
}

/**
 * SendCommand
 * @see https://wiki.sa-mp.com/wiki/SendCommand
 * @param {String} commandtext
 * @return {Number} retval
 */
function SendCommand(commandtext) {
	return CallNativeGDK("SendCommand", "s", commandtext);
}

/**
 * GetPlayerState
 * @see https://wiki.sa-mp.com/wiki/GetPlayerState
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerState(playerid) {
	return CallNativeGDK("GetPlayerState", "i", playerid);
}

/**
 * GetPlayerPos
 * @see https://wiki.sa-mp.com/wiki/GetPlayerPos
 * @param {Number} playerid
 * @return {x: Number, y: Number, z: Number}
 */
function GetPlayerPos(playerid)
{
	let out = CallNativeGDK("GetPlayerPos", "iFFF", playerid);
	return {x: out[0], y: out[1], z: out[2]};
}

/**
 * GetPlayerVehicleID
 * @see https://wiki.sa-mp.com/wiki/GetPlayerVehicleID
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerVehicleID(playerid) {
	return CallNativeGDK("GetPlayerVehicleID", "i", playerid);
}

/**
 * GetPlayerArmedWeapon
 * @see https://wiki.sa-mp.com/wiki/GetPlayerArmedWeapon
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerArmedWeapon(playerid) {
	return CallNativeGDK("GetPlayerArmedWeapon", "i", playerid);
}

/**
 * GetPlayerHealth
 * @see https://wiki.sa-mp.com/wiki/GetPlayerHealth
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerHealth(playerid) {
	return CallNativeGDK("GetPlayerHealth", "i", playerid);
}

/**
 * GetPlayerArmour
 * @see https://wiki.sa-mp.com/wiki/GetPlayerArmour
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerArmour(playerid) {
	return CallNativeGDK("GetPlayerArmour", "i", playerid);
}

/**
 * GetPlayerSpecialAction
 * @see https://wiki.sa-mp.com/wiki/GetPlayerSpecialAction
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerSpecialAction(playerid) {
	return CallNativeGDK("GetPlayerSpecialAction", "i", playerid);
}

/**
 * IsPlayerStreamedIn
 * @see https://wiki.sa-mp.com/wiki/IsPlayerStreamedIn
 * @param {Number} playerid
 * @return {Number} retval
 */
function IsPlayerStreamedIn(playerid) {
	return CallNativeGDK("IsPlayerStreamedIn", "i", playerid);
}

/**
 * IsVehicleStreamedIn
 * @see https://wiki.sa-mp.com/wiki/IsVehicleStreamedIn
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function IsVehicleStreamedIn(vehicleid) {
	return CallNativeGDK("IsVehicleStreamedIn", "i", vehicleid);
}

/**
 * GetPlayerKeys
 * @see https://wiki.sa-mp.com/wiki/GetPlayerKeys
 * @param {Number} playerid
 * @return {keys: Number, updown: Number, leftright: Number}
 */
function GetPlayerKeys(playerid)
{
	let out = CallNativeGDK("GetPlayerKeys", "iIII", playerid);
	return {keys: out[0], updown: out[1], leftright: out[2]};
}

/**
 * GetPlayerFacingAngle
 * @see https://wiki.sa-mp.com/wiki/GetPlayerFacingAngle
 * @param {Number} playerid
 * @return {Number} ang
 */
function GetPlayerFacingAngle(playerid) {
	return CallNativeGDK("GetPlayerFacingAngle", "iF", playerid);
}

/**
 * GetMyPos
 * @see https://wiki.sa-mp.com/wiki/GetMyPos
 * @return {x: Number, y: Number, z: Number}
 */
function GetMyPos()
{
	let out = CallNativeGDK("GetMyPos");
	return {x: out[0], y: out[1], z: out[2]};
}

/**
 * SetMyPos
 * @see https://wiki.sa-mp.com/wiki/SetMyPos
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function SetMyPos(x, y, z) {
	return CallNativeGDK("SetMyPos", "fff", x, y, z);
}

/**
 * GetMyFacingAngle
 * @see https://wiki.sa-mp.com/wiki/GetMyFacingAngle
 * @return {Number} ang
 */
function GetMyFacingAngle() {
	return CallNativeGDK("GetMyFacingAngle");
}

/**
 * SetMyFacingAngle
 * @see https://wiki.sa-mp.com/wiki/SetMyFacingAngle
 * @param {Number} ang
 * @return {Number} retval
 */
function SetMyFacingAngle(ang) {
	return CallNativeGDK("SetMyFacingAngle", "f", ang);
}

/**
 * GetDistanceFromMeToPoint
 * @see https://wiki.sa-mp.com/wiki/GetDistanceFromMeToPoint
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} distance
 */
function GetDistanceFromMeToPoint(x, y, z) {
	return CallNativeGDK("GetDistanceFromMeToPoint", "fffF", x, y, z);
}

/**
 * IsPlayerInRangeOfPoint
 * @see https://wiki.sa-mp.com/wiki/IsPlayerInRangeOfPoint
 * @param {Number} playerid
 * @param {Number} range
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function IsPlayerInRangeOfPoint(playerid, range, x, y, z) {
	return CallNativeGDK("IsPlayerInRangeOfPoint", "iffff", playerid, range, x, y, z);
}

/**
 * GetPlayerName
 * @see https://wiki.sa-mp.com/wiki/GetPlayerName
 * @param {Number} playerid
 * @param {Number} [len=256]
 * @return {String} name
 */
function GetPlayerName(playerid, len)
{
	len = typeof len === 'undefined' ? 256 : len;
	return CallNativeGDK("GetPlayerName", "iSi", playerid, len);
}

/**
 * IsPlayerConnected
 * @see https://wiki.sa-mp.com/wiki/IsPlayerConnected
 * @param {Number} playerid
 * @return {Number} retval
 */
function IsPlayerConnected(playerid) {
	return CallNativeGDK("IsPlayerConnected", "i", playerid);
}

/**
 * StartRecordingPlayback
 * @see https://wiki.sa-mp.com/wiki/StartRecordingPlayback
 * @param {Number} playbacktype
 * @param {String} recordname
 * @return {Number} retval
 */
function StartRecordingPlayback(playbacktype, recordname) {
	return CallNativeGDK("StartRecordingPlayback", "is", playbacktype, recordname);
}

/**
 * StopRecordingPlayback
 * @see https://wiki.sa-mp.com/wiki/StopRecordingPlayback
 * @return {Number} retval
 */
function StopRecordingPlayback() {
	return CallNativeGDK("StopRecordingPlayback");
}

/**
 * PauseRecordingPlayback
 * @see https://wiki.sa-mp.com/wiki/PauseRecordingPlayback
 * @return {Number} retval
 */
function PauseRecordingPlayback() {
	return CallNativeGDK("PauseRecordingPlayback");
}

/**
 * ResumeRecordingPlayback
 * @see https://wiki.sa-mp.com/wiki/ResumeRecordingPlayback
 * @return {Number} retval
 */
function ResumeRecordingPlayback() {
	return CallNativeGDK("ResumeRecordingPlayback");
}
