const MAX_PLAYER_NAME = (24);
const MAX_PLAYERS = (1000);
const MAX_VEHICLES = (2000);
const MAX_ACTORS = (1000);
const INVALID_PLAYER_ID = (0xFFFF);
const INVALID_VEHICLE_ID = (0xFFFF);
const INVALID_ACTOR_ID = (0xFFFF);
const NO_TEAM = (255);
const MAX_OBJECTS = (1000);
const INVALID_OBJECT_ID = (0xFFFF);
const MAX_GANG_ZONES = (1024);
const MAX_TEXT_DRAWS = (2048);
const MAX_PLAYER_TEXT_DRAWS = (256);
const MAX_MENUS = (128);
const MAX_3DTEXT_GLOBAL = (1024);
const MAX_3DTEXT_PLAYER = (1024);
const MAX_PICKUPS = (4096);
const INVALID_MENU = (0xFF);
const INVALID_TEXT_DRAW = (0xFFFF);
const INVALID_GANG_ZONE = (-1);
const INVALID_3DTEXT_ID = (0xFFFF);
const TEXT_DRAW_FONT_SPRITE_DRAW = 4;
const TEXT_DRAW_FONT_MODEL_PREVIEW = 5;
const DIALOG_STYLE_MSGBOX = 0;
const DIALOG_STYLE_INPUT = 1;
const DIALOG_STYLE_LIST = 2;
const DIALOG_STYLE_PASSWORD = 3;
const DIALOG_STYLE_TABLIST = 4;
const DIALOG_STYLE_TABLIST_HEADERS = 5;
const PLAYER_STATE_NONE = (0);
const PLAYER_STATE_ONFOOT = (1);
const PLAYER_STATE_DRIVER = (2);
const PLAYER_STATE_PASSENGER = (3);
const PLAYER_STATE_EXIT_VEHICLE = (4) // (used internally);
const PLAYER_STATE_ENTER_VEHICLE_DRIVER = (5) // (used internally);
const PLAYER_STATE_ENTER_VEHICLE_PASSENGER = (6) // (used internally);
const PLAYER_STATE_WASTED = (7);
const PLAYER_STATE_SPAWNED = (8);
const PLAYER_STATE_SPECTATING = (9);
const PLAYER_MARKERS_MODE_OFF = (0);
const PLAYER_MARKERS_MODE_GLOBAL = (1);
const PLAYER_MARKERS_MODE_STREAMED = (2);
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
const KEY_ANALOG_LEFT = (8192);
const KEY_ANALOG_RIGHT = (16384);
const KEY_YES = (65536);
const KEY_NO = (131072);
const KEY_CTRL_BACK = (262144);
const KEY_UP = (-128);
const KEY_DOWN = (128);
const KEY_LEFT = (-128);
const KEY_RIGHT = (128);
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
function SendClientMessage( playerid, color, message ){
	var out = CallNativeGDK( "SendClientMessage", "iis", playerid, color, message );
	return out;
}
/**
 * SendClientMessageToAll
 * @see https://wiki.sa-mp.com/wiki/SendClientMessageToAll
 * @param {Number} color
 * @param {String} message
 * @return {Number} retval
 */
function SendClientMessageToAll( color, message ){
	var out = CallNativeGDK( "SendClientMessageToAll", "is", color, message );
	return out;
}
/**
 * SendPlayerMessageToPlayer
 * @see https://wiki.sa-mp.com/wiki/SendPlayerMessageToPlayer
 * @param {Number} playerid
 * @param {Number} senderid
 * @param {String} message
 * @return {Number} retval
 */
function SendPlayerMessageToPlayer( playerid, senderid, message ){
	var out = CallNativeGDK( "SendPlayerMessageToPlayer", "iis", playerid, senderid, message );
	return out;
}
/**
 * SendPlayerMessageToAll
 * @see https://wiki.sa-mp.com/wiki/SendPlayerMessageToAll
 * @param {Number} senderid
 * @param {String} message
 * @return {Number} retval
 */
function SendPlayerMessageToAll( senderid, message ){
	var out = CallNativeGDK( "SendPlayerMessageToAll", "is", senderid, message );
	return out;
}
/**
 * SendDeathMessage
 * @see https://wiki.sa-mp.com/wiki/SendDeathMessage
 * @param {Number} killer
 * @param {Number} killee
 * @param {Number} weapon
 * @return {Number} retval
 */
function SendDeathMessage( killer, killee, weapon ){
	var out = CallNativeGDK( "SendDeathMessage", "iii", killer, killee, weapon );
	return out;
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
function SendDeathMessageToPlayer( playerid, killer, killee, weapon ){
	var out = CallNativeGDK( "SendDeathMessageToPlayer", "iiii", playerid, killer, killee, weapon );
	return out;
}
/**
 * GameTextForAll
 * @see https://wiki.sa-mp.com/wiki/GameTextForAll
 * @param {String} string
 * @param {Number} time
 * @param {Number} style
 * @return {Number} retval
 */
function GameTextForAll( string, time, style ){
	var out = CallNativeGDK( "GameTextForAll", "sii", string, time, style );
	return out;
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
function GameTextForPlayer( playerid, string, time, style ){
	var out = CallNativeGDK( "GameTextForPlayer", "isii", playerid, string, time, style );
	return out;
}
/**
 * SetTimerEx
 * @see https://wiki.sa-mp.com/wiki/SetTimerEx
 * @param {String} funcname
 * @param {Number} interval
 * @param {Number} repeating
 * @param {String} format
 * @return {Number} retval
 */
function SetTimerEx( funcname, interval, repeating, format ){
	var out = CallNativeGDK( "SetTimerEx", "siis", funcname, interval, repeating, format );
	return out;
}
/**
 * KillTimer
 * @see https://wiki.sa-mp.com/wiki/KillTimer
 * @param {Number} timerid
 * @return {Number} retval
 */
function KillTimer( timerid ){
	var out = CallNativeGDK( "KillTimer", "i", timerid );
	return out;
}
/**
 * GetTickCount
 * @see https://wiki.sa-mp.com/wiki/GetTickCount
 * @return {Number} retval
 */
function GetTickCount(){
	 return CallNativeGDK( "GetTickCount" );
}
/**
 * GetMaxPlayers
 * @see https://wiki.sa-mp.com/wiki/GetMaxPlayers
 * @return {Number} retval
 */
function GetMaxPlayers(){
	 return CallNativeGDK( "GetMaxPlayers" );
}
/**
 * CallRemoteFunction
 * @see https://wiki.sa-mp.com/wiki/CallRemoteFunction
 * @param {String} func
 * @param {String} format
 * @return {Number} retval
 */
function CallRemoteFunction( func, format ){
	var out = CallNativeGDK( "CallRemoteFunction", "ss", func, format );
	return out;
}
/**
 * CallLocalFunction
 * @see https://wiki.sa-mp.com/wiki/CallLocalFunction
 * @param {String} func
 * @param {String} format
 * @return {Number} retval
 */
function CallLocalFunction( func, format ){
	var out = CallNativeGDK( "CallLocalFunction", "ss", func, format );
	return out;
}
/**
 * VectorSize
 * @see https://wiki.sa-mp.com/wiki/VectorSize
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function VectorSize( x, y, z ){
	var out = CallNativeGDK( "VectorSize", "fff", x, y, z );
	return out;
}
/**
 * GetPlayerPoolSize
 * @see https://wiki.sa-mp.com/wiki/GetPlayerPoolSize
 * @return {Number} retval
 */
function GetPlayerPoolSize(){
	 return CallNativeGDK( "GetPlayerPoolSize" );
}
/**
 * GetVehiclePoolSize
 * @see https://wiki.sa-mp.com/wiki/GetVehiclePoolSize
 * @return {Number} retval
 */
function GetVehiclePoolSize(){
	 return CallNativeGDK( "GetVehiclePoolSize" );
}
/**
 * GetActorPoolSize
 * @see https://wiki.sa-mp.com/wiki/GetActorPoolSize
 * @return {Number} retval
 */
function GetActorPoolSize(){
	 return CallNativeGDK( "GetActorPoolSize" );
}
/**
 * SetGameModeText
 * @see https://wiki.sa-mp.com/wiki/SetGameModeText
 * @param {String} string
 * @return {Number} retval
 */
function SetGameModeText( string ){
	var out = CallNativeGDK( "SetGameModeText", "s", string );
	return out;
}
/**
 * SetTeamCount
 * @see https://wiki.sa-mp.com/wiki/SetTeamCount
 * @param {Number} count
 * @return {Number} retval
 */
function SetTeamCount( count ){
	var out = CallNativeGDK( "SetTeamCount", "i", count );
	return out;
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
function AddPlayerClass( modelid, spawn_x, spawn_y, spawn_z, z_angle, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo ){
	var out = CallNativeGDK( "AddPlayerClass", "iffffiiiiii", modelid, spawn_x, spawn_y, spawn_z, z_angle, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo );
	return out;
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
function AddPlayerClassEx( teamid, modelid, spawn_x, spawn_y, spawn_z, z_angle, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo ){
	var out = CallNativeGDK( "AddPlayerClassEx", "iiffffiiiiii", teamid, modelid, spawn_x, spawn_y, spawn_z, z_angle, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo );
	return out;
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
function AddStaticVehicle( modelid, spawn_x, spawn_y, spawn_z, z_angle, color1, color2 ){
	var out = CallNativeGDK( "AddStaticVehicle", "iffffii", modelid, spawn_x, spawn_y, spawn_z, z_angle, color1, color2 );
	return out;
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
 * @param {Number} addsiren
 * @return {Number} retval
 */
function AddStaticVehicleEx( modelid, spawn_x, spawn_y, spawn_z, z_angle, color1, color2, respawn_delay, addsiren ){
	addsiren = typeof addsiren !== 'undefined' ? addsiren : 0;
	var out = CallNativeGDK( "AddStaticVehicleEx", "iffffiiii", modelid, spawn_x, spawn_y, spawn_z, z_angle, color1, color2, respawn_delay, addsiren );
	return out;
}
/**
 * AddStaticPickup
 * @see https://wiki.sa-mp.com/wiki/AddStaticPickup
 * @param {Number} model
 * @param {Number} type
 * @param {Number} X
 * @param {Number} Y
 * @param {Number} Z
 * @param {Number} virtualworld
 * @return {Number} retval
 */
function AddStaticPickup( model, type, X, Y, Z, virtualworld ){
	virtualworld = typeof virtualworld !== 'undefined' ? virtualworld : 0;
	var out = CallNativeGDK( "AddStaticPickup", "iifffi", model, type, X, Y, Z, virtualworld );
	return out;
}
/**
 * CreatePickup
 * @see https://wiki.sa-mp.com/wiki/CreatePickup
 * @param {Number} model
 * @param {Number} type
 * @param {Number} X
 * @param {Number} Y
 * @param {Number} Z
 * @param {Number} virtualworld
 * @return {Number} retval
 */
function CreatePickup( model, type, X, Y, Z, virtualworld ){
	virtualworld = typeof virtualworld !== 'undefined' ? virtualworld : 0;
	var out = CallNativeGDK( "CreatePickup", "iifffi", model, type, X, Y, Z, virtualworld );
	return out;
}
/**
 * DestroyPickup
 * @see https://wiki.sa-mp.com/wiki/DestroyPickup
 * @param {Number} pickup
 * @return {Number} retval
 */
function DestroyPickup( pickup ){
	var out = CallNativeGDK( "DestroyPickup", "i", pickup );
	return out;
}
/**
 * ShowNameTags
 * @see https://wiki.sa-mp.com/wiki/ShowNameTags
 * @param {Number} show
 * @return {Number} retval
 */
function ShowNameTags( show ){
	var out = CallNativeGDK( "ShowNameTags", "i", show );
	return out;
}
/**
 * ShowPlayerMarkers
 * @see https://wiki.sa-mp.com/wiki/ShowPlayerMarkers
 * @param {Number} mode
 * @return {Number} retval
 */
function ShowPlayerMarkers( mode ){
	var out = CallNativeGDK( "ShowPlayerMarkers", "i", mode );
	return out;
}
/**
 * GameModeExit
 * @see https://wiki.sa-mp.com/wiki/GameModeExit
 * @return {Number} retval
 */
function GameModeExit(){
	 return CallNativeGDK( "GameModeExit" );
}
/**
 * SetWorldTime
 * @see https://wiki.sa-mp.com/wiki/SetWorldTime
 * @param {Number} hour
 * @return {Number} retval
 */
function SetWorldTime( hour ){
	var out = CallNativeGDK( "SetWorldTime", "i", hour );
	return out;
}
/**
 * GetWeaponName
 * @see https://wiki.sa-mp.com/wiki/GetWeaponName
 * @param {Number} weaponid
 * @param {Number} [len]
 * @return {String} weapon
 */
function GetWeaponName( weaponid, len ){
	len = typeof len !== 'undefined' ? len : 256;
	var out = CallNativeGDK( "GetWeaponName", "iSi", weaponid, len );
	return out;
}
/**
 * EnableTirePopping
 * @see https://wiki.sa-mp.com/wiki/EnableTirePopping
 * @param {Number} enable
 * @return {Number} retval
 */
function EnableTirePopping( enable ){
	var out = CallNativeGDK( "EnableTirePopping", "i", enable );
	return out;
}
/**
 * EnableVehicleFriendlyFire
 * @see https://wiki.sa-mp.com/wiki/EnableVehicleFriendlyFire
 * @return {Number} retval
 */
function EnableVehicleFriendlyFire(){
	 return CallNativeGDK( "EnableVehicleFriendlyFire" );
}
/**
 * AllowInteriorWeapons
 * @see https://wiki.sa-mp.com/wiki/AllowInteriorWeapons
 * @param {Number} allow
 * @return {Number} retval
 */
function AllowInteriorWeapons( allow ){
	var out = CallNativeGDK( "AllowInteriorWeapons", "i", allow );
	return out;
}
/**
 * SetWeather
 * @see https://wiki.sa-mp.com/wiki/SetWeather
 * @param {Number} weatherid
 * @return {Number} retval
 */
function SetWeather( weatherid ){
	var out = CallNativeGDK( "SetWeather", "i", weatherid );
	return out;
}
/**
 * SetGravity
 * @see https://wiki.sa-mp.com/wiki/SetGravity
 * @param {Number} gravity
 * @return {Number} retval
 */
function SetGravity( gravity ){
	var out = CallNativeGDK( "SetGravity", "f", gravity );
	return out;
}
/**
 * SetDeathDropAmount
 * @see https://wiki.sa-mp.com/wiki/SetDeathDropAmount
 * @param {Number} amount
 * @return {Number} retval
 */
function SetDeathDropAmount( amount ){
	var out = CallNativeGDK( "SetDeathDropAmount", "i", amount );
	return out;
}
/**
 * CreateExplosion
 * @see https://wiki.sa-mp.com/wiki/CreateExplosion
 * @param {Number} X
 * @param {Number} Y
 * @param {Number} Z
 * @param {Number} type
 * @param {Number} Radius
 * @return {Number} retval
 */
function CreateExplosion( X, Y, Z, type, Radius ){
	var out = CallNativeGDK( "CreateExplosion", "fffif", X, Y, Z, type, Radius );
	return out;
}
/**
 * EnableZoneNames
 * @see https://wiki.sa-mp.com/wiki/EnableZoneNames
 * @param {Number} enable
 * @return {Number} retval
 */
function EnableZoneNames( enable ){
	var out = CallNativeGDK( "EnableZoneNames", "i", enable );
	return out;
}
/**
 * UsePlayerPedAnims
 * @see https://wiki.sa-mp.com/wiki/UsePlayerPedAnims
 * @return {Number} retval
 */
function UsePlayerPedAnims(){
	 return CallNativeGDK( "UsePlayerPedAnims" );
}
/**
 * DisableInteriorEnterExits
 * @see https://wiki.sa-mp.com/wiki/DisableInteriorEnterExits
 * @return {Number} retval
 */
function DisableInteriorEnterExits(){
	 return CallNativeGDK( "DisableInteriorEnterExits" );
}
/**
 * SetNameTagDrawDistance
 * @see https://wiki.sa-mp.com/wiki/SetNameTagDrawDistance
 * @param {Number} distance
 * @return {Number} retval
 */
function SetNameTagDrawDistance( distance ){
	var out = CallNativeGDK( "SetNameTagDrawDistance", "f", distance );
	return out;
}
/**
 * DisableNameTagLOS
 * @see https://wiki.sa-mp.com/wiki/DisableNameTagLOS
 * @return {Number} retval
 */
function DisableNameTagLOS(){
	 return CallNativeGDK( "DisableNameTagLOS" );
}
/**
 * LimitGlobalChatRadius
 * @see https://wiki.sa-mp.com/wiki/LimitGlobalChatRadius
 * @param {Number} chat_radius
 * @return {Number} retval
 */
function LimitGlobalChatRadius( chat_radius ){
	var out = CallNativeGDK( "LimitGlobalChatRadius", "f", chat_radius );
	return out;
}
/**
 * LimitPlayerMarkerRadius
 * @see https://wiki.sa-mp.com/wiki/LimitPlayerMarkerRadius
 * @param {Number} marker_radius
 * @return {Number} retval
 */
function LimitPlayerMarkerRadius( marker_radius ){
	var out = CallNativeGDK( "LimitPlayerMarkerRadius", "f", marker_radius );
	return out;
}
/**
 * ConnectNPC
 * @see https://wiki.sa-mp.com/wiki/ConnectNPC
 * @param {String} name
 * @param {String} script
 * @return {Number} retval
 */
function ConnectNPC( name, script ){
	var out = CallNativeGDK( "ConnectNPC", "ss", name, script );
	return out;
}
/**
 * IsPlayerNPC
 * @see https://wiki.sa-mp.com/wiki/IsPlayerNPC
 * @param {Number} playerid
 * @return {Number} retval
 */
function IsPlayerNPC( playerid ){
	var out = CallNativeGDK( "IsPlayerNPC", "i", playerid );
	return out;
}
/**
 * IsPlayerAdmin
 * @see https://wiki.sa-mp.com/wiki/IsPlayerAdmin
 * @param {Number} playerid
 * @return {Number} retval
 */
function IsPlayerAdmin( playerid ){
	var out = CallNativeGDK( "IsPlayerAdmin", "i", playerid );
	return out;
}
/**
 * Kick
 * @see https://wiki.sa-mp.com/wiki/Kick
 * @param {Number} playerid
 * @return {Number} retval
 */
function Kick( playerid ){
	var out = CallNativeGDK( "Kick", "i", playerid );
	return out;
}
/**
 * Ban
 * @see https://wiki.sa-mp.com/wiki/Ban
 * @param {Number} playerid
 * @return {Number} retval
 */
function Ban( playerid ){
	var out = CallNativeGDK( "Ban", "i", playerid );
	return out;
}
/**
 * BanEx
 * @see https://wiki.sa-mp.com/wiki/BanEx
 * @param {Number} playerid
 * @param {String} reason
 * @return {Number} retval
 */
function BanEx( playerid, reason ){
	var out = CallNativeGDK( "BanEx", "is", playerid, reason );
	return out;
}
/**
 * SendRconCommand
 * @see https://wiki.sa-mp.com/wiki/SendRconCommand
 * @param {String} command
 * @return {Number} retval
 */
function SendRconCommand( command ){
	var out = CallNativeGDK( "SendRconCommand", "s", command );
	return out;
}
/**
 * GetServerVarAsString
 * @see https://wiki.sa-mp.com/wiki/GetServerVarAsString
 * @param {String} varname
 * @param {Number} [len]
 * @return {String} buffer
 */
function GetServerVarAsString( varname, len ){
	len = typeof len !== 'undefined' ? len : 256;
	var out = CallNativeGDK( "GetServerVarAsString", "sSi", varname, len );
	return out;
}
/**
 * GetServerVarAsInt
 * @see https://wiki.sa-mp.com/wiki/GetServerVarAsInt
 * @param {String} varname
 * @return {Number} retval
 */
function GetServerVarAsInt( varname ){
	var out = CallNativeGDK( "GetServerVarAsInt", "s", varname );
	return out;
}
/**
 * GetServerVarAsBool
 * @see https://wiki.sa-mp.com/wiki/GetServerVarAsBool
 * @param {String} varname
 * @return {Number} retval
 */
function GetServerVarAsBool( varname ){
	var out = CallNativeGDK( "GetServerVarAsBool", "s", varname );
	return out;
}
/**
 * GetPlayerNetworkStats
 * @see https://wiki.sa-mp.com/wiki/GetPlayerNetworkStats
 * @param {Number} playerid
 * @param {String} retstr
 * @param {Number} retstr_size
 * @return {Number} retval
 */
function GetPlayerNetworkStats( playerid, retstr, retstr_size ){
	var out = CallNativeGDK( "GetPlayerNetworkStats", "isi", playerid, retstr, retstr_size );
	return out;
}
/**
 * GetNetworkStats
 * @see https://wiki.sa-mp.com/wiki/GetNetworkStats
 * @param {String} retstr
 * @param {Number} retstr_size
 * @return {Number} retval
 */
function GetNetworkStats( retstr, retstr_size ){
	var out = CallNativeGDK( "GetNetworkStats", "si", retstr, retstr_size );
	return out;
}
/**
 * GetPlayerVersion
 * @see https://wiki.sa-mp.com/wiki/GetPlayerVersion
 * @param {Number} playerid
 * @param {Number} [len]
 * @return {String} version
 */
function GetPlayerVersion( playerid, len ){
	len = typeof len !== 'undefined' ? len : 256;
	var out = CallNativeGDK( "GetPlayerVersion", "iSi", playerid, len );
	return out;
}
/**
 * BlockIpAddress
 * @see https://wiki.sa-mp.com/wiki/BlockIpAddress
 * @param {String} ip_address
 * @param {Number} timems
 * @return {Number} retval
 */
function BlockIpAddress( ip_address, timems ){
	var out = CallNativeGDK( "BlockIpAddress", "si", ip_address, timems );
	return out;
}
/**
 * UnBlockIpAddress
 * @see https://wiki.sa-mp.com/wiki/UnBlockIpAddress
 * @param {String} ip_address
 * @return {Number} retval
 */
function UnBlockIpAddress( ip_address ){
	var out = CallNativeGDK( "UnBlockIpAddress", "s", ip_address );
	return out;
}
/**
 * GetServerTickRate
 * @see https://wiki.sa-mp.com/wiki/GetServerTickRate
 * @return {Number} retval
 */
function GetServerTickRate(){
	 return CallNativeGDK( "GetServerTickRate" );
}
/**
 * NetStats_GetConnectedTime
 * @see https://wiki.sa-mp.com/wiki/NetStats_GetConnectedTime
 * @param {Number} playerid
 * @return {Number} retval
 */
function NetStats_GetConnectedTime( playerid ){
	var out = CallNativeGDK( "NetStats_GetConnectedTime", "i", playerid );
	return out;
}
/**
 * NetStats_MessagesReceived
 * @see https://wiki.sa-mp.com/wiki/NetStats_MessagesReceived
 * @param {Number} playerid
 * @return {Number} retval
 */
function NetStats_MessagesReceived( playerid ){
	var out = CallNativeGDK( "NetStats_MessagesReceived", "i", playerid );
	return out;
}
/**
 * NetStats_BytesReceived
 * @see https://wiki.sa-mp.com/wiki/NetStats_BytesReceived
 * @param {Number} playerid
 * @return {Number} retval
 */
function NetStats_BytesReceived( playerid ){
	var out = CallNativeGDK( "NetStats_BytesReceived", "i", playerid );
	return out;
}
/**
 * NetStats_MessagesSent
 * @see https://wiki.sa-mp.com/wiki/NetStats_MessagesSent
 * @param {Number} playerid
 * @return {Number} retval
 */
function NetStats_MessagesSent( playerid ){
	var out = CallNativeGDK( "NetStats_MessagesSent", "i", playerid );
	return out;
}
/**
 * NetStats_BytesSent
 * @see https://wiki.sa-mp.com/wiki/NetStats_BytesSent
 * @param {Number} playerid
 * @return {Number} retval
 */
function NetStats_BytesSent( playerid ){
	var out = CallNativeGDK( "NetStats_BytesSent", "i", playerid );
	return out;
}
/**
 * NetStats_MessagesRecvPerSecond
 * @see https://wiki.sa-mp.com/wiki/NetStats_MessagesRecvPerSecond
 * @param {Number} playerid
 * @return {Number} retval
 */
function NetStats_MessagesRecvPerSecond( playerid ){
	var out = CallNativeGDK( "NetStats_MessagesRecvPerSecond", "i", playerid );
	return out;
}
/**
 * NetStats_PacketLossPercent
 * @see https://wiki.sa-mp.com/wiki/NetStats_PacketLossPercent
 * @param {Number} playerid
 * @return {Number} retval
 */
function NetStats_PacketLossPercent( playerid ){
	var out = CallNativeGDK( "NetStats_PacketLossPercent", "i", playerid );
	return out;
}
/**
 * NetStats_ConnectionStatus
 * @see https://wiki.sa-mp.com/wiki/NetStats_ConnectionStatus
 * @param {Number} playerid
 * @return {Number} retval
 */
function NetStats_ConnectionStatus( playerid ){
	var out = CallNativeGDK( "NetStats_ConnectionStatus", "i", playerid );
	return out;
}
/**
 * NetStats_GetIpPort
 * @see https://wiki.sa-mp.com/wiki/NetStats_GetIpPort
 * @param {Number} playerid
 * @param {String} ip_port
 * @param {Number} ip_port_len
 * @return {Number} retval
 */
function NetStats_GetIpPort( playerid, ip_port, ip_port_len ){
	var out = CallNativeGDK( "NetStats_GetIpPort", "isi", playerid, ip_port, ip_port_len );
	return out;
}
/**
 * CreateMenu
 * @see https://wiki.sa-mp.com/wiki/CreateMenu
 * @param {String} title
 * @param {Number} columns
 * @param {Number} x
 * @param {Number} y
 * @param {Number} col1width
 * @param {Number} col2width
 * @return {Number} retval
 */
function CreateMenu( title, columns, x, y, col1width, col2width ){
	col2width = typeof col2width !== 'undefined' ? col2width : 0.0;
	var out = CallNativeGDK( "CreateMenu", "siffff", title, columns, x, y, col1width, col2width );
	return out;
}
/**
 * DestroyMenu
 * @see https://wiki.sa-mp.com/wiki/DestroyMenu
 * @param {Number} menuid
 * @return {Number} retval
 */
function DestroyMenu( menuid ){
	var out = CallNativeGDK( "DestroyMenu", "i", menuid );
	return out;
}
/**
 * AddMenuItem
 * @see https://wiki.sa-mp.com/wiki/AddMenuItem
 * @param {Number} menuid
 * @param {Number} column
 * @param {String} menutext
 * @return {Number} retval
 */
function AddMenuItem( menuid, column, menutext ){
	var out = CallNativeGDK( "AddMenuItem", "iis", menuid, column, menutext );
	return out;
}
/**
 * SetMenuColumnHeader
 * @see https://wiki.sa-mp.com/wiki/SetMenuColumnHeader
 * @param {Number} menuid
 * @param {Number} column
 * @param {String} columnheader
 * @return {Number} retval
 */
function SetMenuColumnHeader( menuid, column, columnheader ){
	var out = CallNativeGDK( "SetMenuColumnHeader", "iis", menuid, column, columnheader );
	return out;
}
/**
 * ShowMenuForPlayer
 * @see https://wiki.sa-mp.com/wiki/ShowMenuForPlayer
 * @param {Number} menuid
 * @param {Number} playerid
 * @return {Number} retval
 */
function ShowMenuForPlayer( menuid, playerid ){
	var out = CallNativeGDK( "ShowMenuForPlayer", "ii", menuid, playerid );
	return out;
}
/**
 * HideMenuForPlayer
 * @see https://wiki.sa-mp.com/wiki/HideMenuForPlayer
 * @param {Number} menuid
 * @param {Number} playerid
 * @return {Number} retval
 */
function HideMenuForPlayer( menuid, playerid ){
	var out = CallNativeGDK( "HideMenuForPlayer", "ii", menuid, playerid );
	return out;
}
/**
 * IsValidMenu
 * @see https://wiki.sa-mp.com/wiki/IsValidMenu
 * @param {Number} menuid
 * @return {Number} retval
 */
function IsValidMenu( menuid ){
	var out = CallNativeGDK( "IsValidMenu", "i", menuid );
	return out;
}
/**
 * DisableMenu
 * @see https://wiki.sa-mp.com/wiki/DisableMenu
 * @param {Number} menuid
 * @return {Number} retval
 */
function DisableMenu( menuid ){
	var out = CallNativeGDK( "DisableMenu", "i", menuid );
	return out;
}
/**
 * DisableMenuRow
 * @see https://wiki.sa-mp.com/wiki/DisableMenuRow
 * @param {Number} menuid
 * @param {Number} row
 * @return {Number} retval
 */
function DisableMenuRow( menuid, row ){
	var out = CallNativeGDK( "DisableMenuRow", "ii", menuid, row );
	return out;
}
/**
 * GetPlayerMenu
 * @see https://wiki.sa-mp.com/wiki/GetPlayerMenu
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerMenu( playerid ){
	var out = CallNativeGDK( "GetPlayerMenu", "i", playerid );
	return out;
}
/**
 * TextDrawCreate
 * @see https://wiki.sa-mp.com/wiki/TextDrawCreate
 * @param {Number} x
 * @param {Number} y
 * @param {String} text
 * @return {Number} retval
 */
function TextDrawCreate( x, y, text ){
	var out = CallNativeGDK( "TextDrawCreate", "ffs", x, y, text );
	return out;
}
/**
 * TextDrawDestroy
 * @see https://wiki.sa-mp.com/wiki/TextDrawDestroy
 * @param {Number} text
 * @return {Number} retval
 */
function TextDrawDestroy( text ){
	var out = CallNativeGDK( "TextDrawDestroy", "i", text );
	return out;
}
/**
 * TextDrawLetterSize
 * @see https://wiki.sa-mp.com/wiki/TextDrawLetterSize
 * @param {Number} text
 * @param {Number} x
 * @param {Number} y
 * @return {Number} retval
 */
function TextDrawLetterSize( text, x, y ){
	var out = CallNativeGDK( "TextDrawLetterSize", "iff", text, x, y );
	return out;
}
/**
 * TextDrawTextSize
 * @see https://wiki.sa-mp.com/wiki/TextDrawTextSize
 * @param {Number} text
 * @param {Number} x
 * @param {Number} y
 * @return {Number} retval
 */
function TextDrawTextSize( text, x, y ){
	var out = CallNativeGDK( "TextDrawTextSize", "iff", text, x, y );
	return out;
}
/**
 * TextDrawAlignment
 * @see https://wiki.sa-mp.com/wiki/TextDrawAlignment
 * @param {Number} text
 * @param {Number} alignment
 * @return {Number} retval
 */
function TextDrawAlignment( text, alignment ){
	var out = CallNativeGDK( "TextDrawAlignment", "ii", text, alignment );
	return out;
}
/**
 * TextDrawColor
 * @see https://wiki.sa-mp.com/wiki/TextDrawColor
 * @param {Number} text
 * @param {Number} color
 * @return {Number} retval
 */
function TextDrawColor( text, color ){
	var out = CallNativeGDK( "TextDrawColor", "ii", text, color );
	return out;
}
/**
 * TextDrawUseBox
 * @see https://wiki.sa-mp.com/wiki/TextDrawUseBox
 * @param {Number} text
 * @param {Number} use
 * @return {Number} retval
 */
function TextDrawUseBox( text, use ){
	var out = CallNativeGDK( "TextDrawUseBox", "ii", text, use );
	return out;
}
/**
 * TextDrawBoxColor
 * @see https://wiki.sa-mp.com/wiki/TextDrawBoxColor
 * @param {Number} text
 * @param {Number} color
 * @return {Number} retval
 */
function TextDrawBoxColor( text, color ){
	var out = CallNativeGDK( "TextDrawBoxColor", "ii", text, color );
	return out;
}
/**
 * TextDrawSetShadow
 * @see https://wiki.sa-mp.com/wiki/TextDrawSetShadow
 * @param {Number} text
 * @param {Number} size
 * @return {Number} retval
 */
function TextDrawSetShadow( text, size ){
	var out = CallNativeGDK( "TextDrawSetShadow", "ii", text, size );
	return out;
}
/**
 * TextDrawSetOutline
 * @see https://wiki.sa-mp.com/wiki/TextDrawSetOutline
 * @param {Number} text
 * @param {Number} size
 * @return {Number} retval
 */
function TextDrawSetOutline( text, size ){
	var out = CallNativeGDK( "TextDrawSetOutline", "ii", text, size );
	return out;
}
/**
 * TextDrawBackgroundColor
 * @see https://wiki.sa-mp.com/wiki/TextDrawBackgroundColor
 * @param {Number} text
 * @param {Number} color
 * @return {Number} retval
 */
function TextDrawBackgroundColor( text, color ){
	var out = CallNativeGDK( "TextDrawBackgroundColor", "ii", text, color );
	return out;
}
/**
 * TextDrawFont
 * @see https://wiki.sa-mp.com/wiki/TextDrawFont
 * @param {Number} text
 * @param {Number} font
 * @return {Number} retval
 */
function TextDrawFont( text, font ){
	var out = CallNativeGDK( "TextDrawFont", "ii", text, font );
	return out;
}
/**
 * TextDrawSetProportional
 * @see https://wiki.sa-mp.com/wiki/TextDrawSetProportional
 * @param {Number} text
 * @param {Number} set
 * @return {Number} retval
 */
function TextDrawSetProportional( text, set ){
	var out = CallNativeGDK( "TextDrawSetProportional", "ii", text, set );
	return out;
}
/**
 * TextDrawSetSelectable
 * @see https://wiki.sa-mp.com/wiki/TextDrawSetSelectable
 * @param {Number} text
 * @param {Number} set
 * @return {Number} retval
 */
function TextDrawSetSelectable( text, set ){
	var out = CallNativeGDK( "TextDrawSetSelectable", "ii", text, set );
	return out;
}
/**
 * TextDrawShowForPlayer
 * @see https://wiki.sa-mp.com/wiki/TextDrawShowForPlayer
 * @param {Number} playerid
 * @param {Number} text
 * @return {Number} retval
 */
function TextDrawShowForPlayer( playerid, text ){
	var out = CallNativeGDK( "TextDrawShowForPlayer", "ii", playerid, text );
	return out;
}
/**
 * TextDrawHideForPlayer
 * @see https://wiki.sa-mp.com/wiki/TextDrawHideForPlayer
 * @param {Number} playerid
 * @param {Number} text
 * @return {Number} retval
 */
function TextDrawHideForPlayer( playerid, text ){
	var out = CallNativeGDK( "TextDrawHideForPlayer", "ii", playerid, text );
	return out;
}
/**
 * TextDrawShowForAll
 * @see https://wiki.sa-mp.com/wiki/TextDrawShowForAll
 * @param {Number} text
 * @return {Number} retval
 */
function TextDrawShowForAll( text ){
	var out = CallNativeGDK( "TextDrawShowForAll", "i", text );
	return out;
}
/**
 * TextDrawHideForAll
 * @see https://wiki.sa-mp.com/wiki/TextDrawHideForAll
 * @param {Number} text
 * @return {Number} retval
 */
function TextDrawHideForAll( text ){
	var out = CallNativeGDK( "TextDrawHideForAll", "i", text );
	return out;
}
/**
 * TextDrawSetString
 * @see https://wiki.sa-mp.com/wiki/TextDrawSetString
 * @param {Number} text
 * @param {String} string
 * @return {Number} retval
 */
function TextDrawSetString( text, string ){
	var out = CallNativeGDK( "TextDrawSetString", "is", text, string );
	return out;
}
/**
 * TextDrawSetPreviewModel
 * @see https://wiki.sa-mp.com/wiki/TextDrawSetPreviewModel
 * @param {Number} text
 * @param {Number} modelindex
 * @return {Number} retval
 */
function TextDrawSetPreviewModel( text, modelindex ){
	var out = CallNativeGDK( "TextDrawSetPreviewModel", "ii", text, modelindex );
	return out;
}
/**
 * TextDrawSetPreviewRot
 * @see https://wiki.sa-mp.com/wiki/TextDrawSetPreviewRot
 * @param {Number} text
 * @param {Number} fRotX
 * @param {Number} fRotY
 * @param {Number} fRotZ
 * @param {Number} fZoom
 * @return {Number} retval
 */
function TextDrawSetPreviewRot( text, fRotX, fRotY, fRotZ, fZoom ){
	fZoom = typeof fZoom !== 'undefined' ? fZoom : 1.0;
	var out = CallNativeGDK( "TextDrawSetPreviewRot", "iffff", text, fRotX, fRotY, fRotZ, fZoom );
	return out;
}
/**
 * TextDrawSetPreviewVehCol
 * @see https://wiki.sa-mp.com/wiki/TextDrawSetPreviewVehCol
 * @param {Number} text
 * @param {Number} color1
 * @param {Number} color2
 * @return {Number} retval
 */
function TextDrawSetPreviewVehCol( text, color1, color2 ){
	var out = CallNativeGDK( "TextDrawSetPreviewVehCol", "iii", text, color1, color2 );
	return out;
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
function GangZoneCreate( minx, miny, maxx, maxy ){
	var out = CallNativeGDK( "GangZoneCreate", "ffff", minx, miny, maxx, maxy );
	return out;
}
/**
 * GangZoneDestroy
 * @see https://wiki.sa-mp.com/wiki/GangZoneDestroy
 * @param {Number} zone
 * @return {Number} retval
 */
function GangZoneDestroy( zone ){
	var out = CallNativeGDK( "GangZoneDestroy", "i", zone );
	return out;
}
/**
 * GangZoneShowForPlayer
 * @see https://wiki.sa-mp.com/wiki/GangZoneShowForPlayer
 * @param {Number} playerid
 * @param {Number} zone
 * @param {Number} color
 * @return {Number} retval
 */
function GangZoneShowForPlayer( playerid, zone, color ){
	var out = CallNativeGDK( "GangZoneShowForPlayer", "iii", playerid, zone, color );
	return out;
}
/**
 * GangZoneShowForAll
 * @see https://wiki.sa-mp.com/wiki/GangZoneShowForAll
 * @param {Number} zone
 * @param {Number} color
 * @return {Number} retval
 */
function GangZoneShowForAll( zone, color ){
	var out = CallNativeGDK( "GangZoneShowForAll", "ii", zone, color );
	return out;
}
/**
 * GangZoneHideForPlayer
 * @see https://wiki.sa-mp.com/wiki/GangZoneHideForPlayer
 * @param {Number} playerid
 * @param {Number} zone
 * @return {Number} retval
 */
function GangZoneHideForPlayer( playerid, zone ){
	var out = CallNativeGDK( "GangZoneHideForPlayer", "ii", playerid, zone );
	return out;
}
/**
 * GangZoneHideForAll
 * @see https://wiki.sa-mp.com/wiki/GangZoneHideForAll
 * @param {Number} zone
 * @return {Number} retval
 */
function GangZoneHideForAll( zone ){
	var out = CallNativeGDK( "GangZoneHideForAll", "i", zone );
	return out;
}
/**
 * GangZoneFlashForPlayer
 * @see https://wiki.sa-mp.com/wiki/GangZoneFlashForPlayer
 * @param {Number} playerid
 * @param {Number} zone
 * @param {Number} flashcolor
 * @return {Number} retval
 */
function GangZoneFlashForPlayer( playerid, zone, flashcolor ){
	var out = CallNativeGDK( "GangZoneFlashForPlayer", "iii", playerid, zone, flashcolor );
	return out;
}
/**
 * GangZoneFlashForAll
 * @see https://wiki.sa-mp.com/wiki/GangZoneFlashForAll
 * @param {Number} zone
 * @param {Number} flashcolor
 * @return {Number} retval
 */
function GangZoneFlashForAll( zone, flashcolor ){
	var out = CallNativeGDK( "GangZoneFlashForAll", "ii", zone, flashcolor );
	return out;
}
/**
 * GangZoneStopFlashForPlayer
 * @see https://wiki.sa-mp.com/wiki/GangZoneStopFlashForPlayer
 * @param {Number} playerid
 * @param {Number} zone
 * @return {Number} retval
 */
function GangZoneStopFlashForPlayer( playerid, zone ){
	var out = CallNativeGDK( "GangZoneStopFlashForPlayer", "ii", playerid, zone );
	return out;
}
/**
 * GangZoneStopFlashForAll
 * @see https://wiki.sa-mp.com/wiki/GangZoneStopFlashForAll
 * @param {Number} zone
 * @return {Number} retval
 */
function GangZoneStopFlashForAll( zone ){
	var out = CallNativeGDK( "GangZoneStopFlashForAll", "i", zone );
	return out;
}
/**
 * Create3DTextLabel
 * @see https://wiki.sa-mp.com/wiki/Create3DTextLabel
 * @param {String} text
 * @param {Number} color
 * @param {Number} X
 * @param {Number} Y
 * @param {Number} Z
 * @param {Number} DrawDistance
 * @param {Number} virtualworld
 * @param {Number} testLOS
 * @return {Number} retval
 */
function Create3DTextLabel( text, color, X, Y, Z, DrawDistance, virtualworld, testLOS ){
	testLOS = typeof testLOS !== 'undefined' ? testLOS : 0;
	var out = CallNativeGDK( "Create3DTextLabel", "siffffii", text, color, X, Y, Z, DrawDistance, virtualworld, testLOS );
	return out;
}
/**
 * Delete3DTextLabel
 * @see https://wiki.sa-mp.com/wiki/Delete3DTextLabel
 * @param {Number} id
 * @return {Number} retval
 */
function Delete3DTextLabel( id ){
	var out = CallNativeGDK( "Delete3DTextLabel", "i", id );
	return out;
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
function Attach3DTextLabelToPlayer( id, playerid, OffsetX, OffsetY, OffsetZ ){
	var out = CallNativeGDK( "Attach3DTextLabelToPlayer", "iifff", id, playerid, OffsetX, OffsetY, OffsetZ );
	return out;
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
function Attach3DTextLabelToVehicle( id, vehicleid, OffsetX, OffsetY, OffsetZ ){
	var out = CallNativeGDK( "Attach3DTextLabelToVehicle", "iifff", id, vehicleid, OffsetX, OffsetY, OffsetZ );
	return out;
}
/**
 * Update3DTextLabelText
 * @see https://wiki.sa-mp.com/wiki/Update3DTextLabelText
 * @param {Number} id
 * @param {Number} color
 * @param {String} text
 * @return {Number} retval
 */
function Update3DTextLabelText( id, color, text ){
	var out = CallNativeGDK( "Update3DTextLabelText", "iis", id, color, text );
	return out;
}
/**
 * CreatePlayer3DTextLabel
 * @see https://wiki.sa-mp.com/wiki/CreatePlayer3DTextLabel
 * @param {Number} playerid
 * @param {String} text
 * @param {Number} color
 * @param {Number} X
 * @param {Number} Y
 * @param {Number} Z
 * @param {Number} DrawDistance
 * @param {Number} attachedplayer
 * @param {Number} attachedvehicle
 * @param {Number} testLOS
 * @return {Number} retval
 */
function CreatePlayer3DTextLabel( playerid, text, color, X, Y, Z, DrawDistance, attachedplayer, attachedvehicle, testLOS ){
	attachedplayer = typeof attachedplayer !== 'undefined' ? attachedplayer : INVALID_PLAYER_ID;
	attachedvehicle = typeof attachedvehicle !== 'undefined' ? attachedvehicle : INVALID_VEHICLE_ID;
	testLOS = typeof testLOS !== 'undefined' ? testLOS : 0;
	var out = CallNativeGDK( "CreatePlayer3DTextLabel", "isiffffiii", playerid, text, color, X, Y, Z, DrawDistance, attachedplayer, attachedvehicle, testLOS );
	return out;
}
/**
 * DeletePlayer3DTextLabel
 * @see https://wiki.sa-mp.com/wiki/DeletePlayer3DTextLabel
 * @param {Number} playerid
 * @param {Number} id
 * @return {Number} retval
 */
function DeletePlayer3DTextLabel( playerid, id ){
	var out = CallNativeGDK( "DeletePlayer3DTextLabel", "ii", playerid, id );
	return out;
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
function UpdatePlayer3DTextLabelText( playerid, id, color, text ){
	var out = CallNativeGDK( "UpdatePlayer3DTextLabelText", "iiis", playerid, id, color, text );
	return out;
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
function ShowPlayerDialog( playerid, dialogid, style, caption, info, button1, button2 ){
	var out = CallNativeGDK( "ShowPlayerDialog", "iiissss", playerid, dialogid, style, caption, info, button1, button2 );
	return out;
}
