const PLAYER_RECORDING_TYPE_NONE = 0;
const PLAYER_RECORDING_TYPE_DRIVER = 1;
const PLAYER_RECORDING_TYPE_ONFOOT = 2;
const PLAYER_STATE_NONE = (0);
const PLAYER_STATE_ONFOOT = (1);
const PLAYER_STATE_DRIVER = (2);
const PLAYER_STATE_PASSENGER = (3);
const PLAYER_STATE_WASTED = (7);
const PLAYER_STATE_SPAWNED = (8);
const PLAYER_STATE_SPECTATING = (9);
const MAX_PLAYER_NAME = (24);
const MAX_PLAYERS = (500);
const MAX_VEHICLES = (2000);
const INVALID_PLAYER_ID = (0xFFFF);
const INVALID_VEHICLE_ID = (0xFFFF);
const NO_TEAM = (255);
const MAX_OBJECTS = (150);
const INVALID_OBJECT_ID = (255);
const MAX_GANG_ZONES = (1024);
const MAX_TEXT_DRAWS = (1024);
const MAX_MENUS = (128);
const INVALID_MENU = (0xFF);
const INVALID_TEXT_DRAW = (0xFFFF);
const INVALID_GANG_ZONE = (-1);
const WEAPON_BRASSKNUCKLE = (1);
const WEAPON_GOLFCLUB = (2);
const WEAPON_NITESTICK = (3);
const WEAPON_KNIFE = (4);
const WEAPON_BAT = (5);
const WEAPON_SHOVEL = (6);
const WEAPON_POOLSTICK = (7);
const WEAPON_KATANA = (8);
const WEAPON_CHAINSAW = (9);
const WEAPON_DILDO = (10);
const WEAPON_DILDO2 = (11);
const WEAPON_VIBRATOR = (12);
const WEAPON_VIBRATOR2 = (13);
const WEAPON_FLOWER = (14);
const WEAPON_CANE = (15);
const WEAPON_GRENADE = (16);
const WEAPON_TEARGAS = (17);
const WEAPON_MOLTOV = (18);
const WEAPON_COLT45 = (22);
const WEAPON_SILENCED = (23);
const WEAPON_DEAGLE = (24);
const WEAPON_SHOTGUN = (25);
const WEAPON_SAWEDOFF = (26);
const WEAPON_SHOTGSPA = (27);
const WEAPON_UZI = (28);
const WEAPON_MP5 = (29);
const WEAPON_AK47 = (30);
const WEAPON_M4 = (31);
const WEAPON_TEC9 = (32);
const WEAPON_RIFLE = (33);
const WEAPON_SNIPER = (34);
const WEAPON_ROCKETLAUNCHER = (35);
const WEAPON_HEATSEEKER = (36);
const WEAPON_FLAMETHROWER = (37);
const WEAPON_MINIGUN = (38);
const WEAPON_SATCHEL = (39);
const WEAPON_BOMB = (40);
const WEAPON_SPRAYCAN = (41);
const WEAPON_FIREEXTINGUISHER = (42);
const WEAPON_CAMERA = (43);
const WEAPON_PARACHUTE = (46);
const WEAPON_VEHICLE = (49);
const WEAPON_DROWN = (53);
const WEAPON_COLLISION = (54);
const KEY_ACTION = (1);
const KEY_CROUCH = (2);
const KEY_FIRE = (4);
const KEY_SPRINT = (8);
const KEY_SECONDARY_ATTACK = (16);
const KEY_JUMP = (32);
const KEY_LOOK_RIGHT = (64);
const KEY_HANDBRAKE = (128);
const KEY_LOOK_LEFT = (256);
const KEY_SUBMISSION = (512);
const KEY_LOOK_BEHIND = (512);
const KEY_WALK = (1024);
const KEY_ANALOG_UP = (2048);
const KEY_ANALOG_DOWN = (4096);
const KEY_ANALOG_RIGHT = (16384);
const KEY_ANALOG_LEFT = (8192);
const KEY_UP = (-128);
const KEY_DOWN = (128);
const KEY_LEFT = (-128);
const KEY_RIGHT = (128);
/**
 * KillTimer
 * @see https://wiki.sa-mp.com/wiki/KillTimer
 * @param {Number} timerid
 * @return {Number} retval
 */
function KillTimer( timerid ){
	return CallNative( "KillTimer", "i", timerid );
}
/**
 * GetTickCount
 * @see https://wiki.sa-mp.com/wiki/GetTickCount
 * @return {Number} retval
 */
function GetTickCount(){
	CallNative( "GetTickCount" );
}
/**
 * SendChat
 * @see https://wiki.sa-mp.com/wiki/SendChat
 * @param {String} msg
 * @return {Number} retval
 */
function SendChat( msg ){
	return CallNative( "SendChat", "s", msg );
}
/**
 * SendCommand
 * @see https://wiki.sa-mp.com/wiki/SendCommand
 * @param {String} commandtext
 * @return {Number} retval
 */
function SendCommand( commandtext ){
	return CallNative( "SendCommand", "s", commandtext );
}
/**
 * GetPlayerState
 * @see https://wiki.sa-mp.com/wiki/GetPlayerState
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerState( playerid ){
	return CallNative( "GetPlayerState", "i", playerid );
}
/**
 * GetPlayerPos
 * @see https://wiki.sa-mp.com/wiki/GetPlayerPos
 * @param {Number} playerid
 * @return {{ x: Number,  y: Number,  z: Number }}
 */
function GetPlayerPos( playerid ){
	return CallNative( "GetPlayerPos", "iFFF", playerid, [ "x", "y", "z" ] );
}
/**
 * GetPlayerVehicleID
 * @see https://wiki.sa-mp.com/wiki/GetPlayerVehicleID
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerVehicleID( playerid ){
	return CallNative( "GetPlayerVehicleID", "i", playerid );
}
/**
 * GetPlayerArmedWeapon
 * @see https://wiki.sa-mp.com/wiki/GetPlayerArmedWeapon
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerArmedWeapon( playerid ){
	return CallNative( "GetPlayerArmedWeapon", "i", playerid );
}
/**
 * GetPlayerHealth
 * @see https://wiki.sa-mp.com/wiki/GetPlayerHealth
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerHealth( playerid ){
	return CallNative( "GetPlayerHealth", "i", playerid );
}
/**
 * GetPlayerArmour
 * @see https://wiki.sa-mp.com/wiki/GetPlayerArmour
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerArmour( playerid ){
	return CallNative( "GetPlayerArmour", "i", playerid );
}
/**
 * GetPlayerSpecialAction
 * @see https://wiki.sa-mp.com/wiki/GetPlayerSpecialAction
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerSpecialAction( playerid ){
	return CallNative( "GetPlayerSpecialAction", "i", playerid );
}
/**
 * IsPlayerStreamedIn
 * @see https://wiki.sa-mp.com/wiki/IsPlayerStreamedIn
 * @param {Number} playerid
 * @return {Number} retval
 */
function IsPlayerStreamedIn( playerid ){
	return CallNative( "IsPlayerStreamedIn", "i", playerid );
}
/**
 * IsVehicleStreamedIn
 * @see https://wiki.sa-mp.com/wiki/IsVehicleStreamedIn
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function IsVehicleStreamedIn( vehicleid ){
	return CallNative( "IsVehicleStreamedIn", "i", vehicleid );
}
/**
 * GetPlayerKeys
 * @see https://wiki.sa-mp.com/wiki/GetPlayerKeys
 * @param {Number} playerid
 * @return {{ keys: Number,  updown: Number,  leftright: Number }}
 */
function GetPlayerKeys( playerid ){
	return CallNative( "GetPlayerKeys", "iIII", playerid, [ "keys", "updown", "leftright" ] );
}
/**
 * GetPlayerFacingAngle
 * @see https://wiki.sa-mp.com/wiki/GetPlayerFacingAngle
 * @param {Number} playerid
 * @return {Number} ang
 */
function GetPlayerFacingAngle( playerid ){
	return CallNative( "GetPlayerFacingAngle", "iF", playerid );
}
/**
 * GetMyPos
 * @see https://wiki.sa-mp.com/wiki/GetMyPos
 * @return {{ x: Number,  y: Number,  z: Number }}
 */
function GetMyPos(){
	CallNative( "GetMyPos" );
}
/**
 * SetMyPos
 * @see https://wiki.sa-mp.com/wiki/SetMyPos
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function SetMyPos( x, y, z ){
	return CallNative( "SetMyPos", "fff", x, y, z );
}
/**
 * GetMyFacingAngle
 * @see https://wiki.sa-mp.com/wiki/GetMyFacingAngle
 * @return {Number} ang
 */
function GetMyFacingAngle(){
	CallNative( "GetMyFacingAngle" );
}
/**
 * SetMyFacingAngle
 * @see https://wiki.sa-mp.com/wiki/SetMyFacingAngle
 * @param {Number} ang
 * @return {Number} retval
 */
function SetMyFacingAngle( ang ){
	return CallNative( "SetMyFacingAngle", "f", ang );
}
/**
 * GetDistanceFromMeToPoint
 * @see https://wiki.sa-mp.com/wiki/GetDistanceFromMeToPoint
 * @param {Number} X
 * @param {Number} Y
 * @param {Number} Z
 * @return {Number} distance
 */
function GetDistanceFromMeToPoint( X, Y, Z ){
	return CallNative( "GetDistanceFromMeToPoint", "fffF", X, Y, Z );
}
/**
 * IsPlayerInRangeOfPoint
 * @see https://wiki.sa-mp.com/wiki/IsPlayerInRangeOfPoint
 * @param {Number} playerid
 * @param {Number} range
 * @param {Number} X
 * @param {Number} Y
 * @param {Number} Z
 * @return {Number} retval
 */
function IsPlayerInRangeOfPoint( playerid, range, X, Y, Z ){
	return CallNative( "IsPlayerInRangeOfPoint", "iffff", playerid, range, X, Y, Z );
}
/**
 * GetPlayerName
 * @see https://wiki.sa-mp.com/wiki/GetPlayerName
 * @param {Number} playerid
 * @param {Number} [len]
 * @return {String} name
 */
function GetPlayerName( playerid, len ){
	len = typeof len !== 'undefined' ? len : 256;
	return CallNative( "GetPlayerName", "iSi", playerid, len );
}
/**
 * IsPlayerConnected
 * @see https://wiki.sa-mp.com/wiki/IsPlayerConnected
 * @param {Number} playerid
 * @return {Number} retval
 */
function IsPlayerConnected( playerid ){
	return CallNative( "IsPlayerConnected", "i", playerid );
}
/**
 * StartRecordingPlayback
 * @see https://wiki.sa-mp.com/wiki/StartRecordingPlayback
 * @param {Number} playbacktype
 * @param {String} recordname
 * @return {Number} retval
 */
function StartRecordingPlayback( playbacktype, recordname ){
	return CallNative( "StartRecordingPlayback", "is", playbacktype, recordname );
}
/**
 * StopRecordingPlayback
 * @see https://wiki.sa-mp.com/wiki/StopRecordingPlayback
 * @return {Number} retval
 */
function StopRecordingPlayback(){
	CallNative( "StopRecordingPlayback" );
}
/**
 * PauseRecordingPlayback
 * @see https://wiki.sa-mp.com/wiki/PauseRecordingPlayback
 * @return {Number} retval
 */
function PauseRecordingPlayback(){
	CallNative( "PauseRecordingPlayback" );
}
/**
 * ResumeRecordingPlayback
 * @see https://wiki.sa-mp.com/wiki/ResumeRecordingPlayback
 * @return {Number} retval
 */
function ResumeRecordingPlayback(){
	CallNative( "ResumeRecordingPlayback" );
}
