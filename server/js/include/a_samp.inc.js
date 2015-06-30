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
	return CallNative( "SendClientMessage", "iis", playerid, color, message );
}
/**
 * SendClientMessageToAll
 * @see https://wiki.sa-mp.com/wiki/SendClientMessageToAll
 * @param {Number} color
 * @param {String} message
 * @return {Number} retval
 */
function SendClientMessageToAll( color, message ){
	return CallNative( "SendClientMessageToAll", "is", color, message );
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
	return CallNative( "SendPlayerMessageToPlayer", "iis", playerid, senderid, message );
}
/**
 * SendPlayerMessageToAll
 * @see https://wiki.sa-mp.com/wiki/SendPlayerMessageToAll
 * @param {Number} senderid
 * @param {String} message
 * @return {Number} retval
 */
function SendPlayerMessageToAll( senderid, message ){
	return CallNative( "SendPlayerMessageToAll", "is", senderid, message );
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
	return CallNative( "SendDeathMessage", "iii", killer, killee, weapon );
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
	return CallNative( "SendDeathMessageToPlayer", "iiii", playerid, killer, killee, weapon );
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
	return CallNative( "GameTextForAll", "sii", string, time, style );
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
	return CallNative( "GameTextForPlayer", "isii", playerid, string, time, style );
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
	return CallNative( "SetTimerEx", "siis", funcname, interval, repeating, format );
}
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
 * GetMaxPlayers
 * @see https://wiki.sa-mp.com/wiki/GetMaxPlayers
 * @return {Number} retval
 */
function GetMaxPlayers(){
	CallNative( "GetMaxPlayers" );
}
/**
 * CallRemoteFunction
 * @see https://wiki.sa-mp.com/wiki/CallRemoteFunction
 * @param {String} func
 * @param {String} format
 * @return {Number} retval
 */
function CallRemoteFunction( func, format ){
	return CallNative( "CallRemoteFunction", "ss", func, format );
}
/**
 * CallLocalFunction
 * @see https://wiki.sa-mp.com/wiki/CallLocalFunction
 * @param {String} func
 * @param {String} format
 * @return {Number} retval
 */
function CallLocalFunction( func, format ){
	return CallNative( "CallLocalFunction", "ss", func, format );
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
	return CallNative( "VectorSize", "fff", x, y, z );
}
/**
 * GetPlayerPoolSize
 * @see https://wiki.sa-mp.com/wiki/GetPlayerPoolSize
 * @return {Number} retval
 */
function GetPlayerPoolSize(){
	CallNative( "GetPlayerPoolSize" );
}
/**
 * GetVehiclePoolSize
 * @see https://wiki.sa-mp.com/wiki/GetVehiclePoolSize
 * @return {Number} retval
 */
function GetVehiclePoolSize(){
	CallNative( "GetVehiclePoolSize" );
}
/**
 * GetActorPoolSize
 * @see https://wiki.sa-mp.com/wiki/GetActorPoolSize
 * @return {Number} retval
 */
function GetActorPoolSize(){
	CallNative( "GetActorPoolSize" );
}
/**
 * SetGameModeText
 * @see https://wiki.sa-mp.com/wiki/SetGameModeText
 * @param {String} string
 * @return {Number} retval
 */
function SetGameModeText( string ){
	return CallNative( "SetGameModeText", "s", string );
}
/**
 * SetTeamCount
 * @see https://wiki.sa-mp.com/wiki/SetTeamCount
 * @param {Number} count
 * @return {Number} retval
 */
function SetTeamCount( count ){
	return CallNative( "SetTeamCount", "i", count );
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
	return CallNative( "AddPlayerClass", "iffffiiiiii", modelid, spawn_x, spawn_y, spawn_z, z_angle, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo );
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
	return CallNative( "AddPlayerClassEx", "iiffffiiiiii", teamid, modelid, spawn_x, spawn_y, spawn_z, z_angle, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo );
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
	return CallNative( "AddStaticVehicle", "iffffii", modelid, spawn_x, spawn_y, spawn_z, z_angle, color1, color2 );
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
	return CallNative( "AddStaticVehicleEx", "iffffiiii", modelid, spawn_x, spawn_y, spawn_z, z_angle, color1, color2, respawn_delay, addsiren );
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
	return CallNative( "AddStaticPickup", "iifffi", model, type, X, Y, Z, virtualworld );
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
	return CallNative( "CreatePickup", "iifffi", model, type, X, Y, Z, virtualworld );
}
/**
 * DestroyPickup
 * @see https://wiki.sa-mp.com/wiki/DestroyPickup
 * @param {Number} pickup
 * @return {Number} retval
 */
function DestroyPickup( pickup ){
	return CallNative( "DestroyPickup", "i", pickup );
}
/**
 * ShowNameTags
 * @see https://wiki.sa-mp.com/wiki/ShowNameTags
 * @param {Number} show
 * @return {Number} retval
 */
function ShowNameTags( show ){
	return CallNative( "ShowNameTags", "i", show );
}
/**
 * ShowPlayerMarkers
 * @see https://wiki.sa-mp.com/wiki/ShowPlayerMarkers
 * @param {Number} mode
 * @return {Number} retval
 */
function ShowPlayerMarkers( mode ){
	return CallNative( "ShowPlayerMarkers", "i", mode );
}
/**
 * GameModeExit
 * @see https://wiki.sa-mp.com/wiki/GameModeExit
 * @return {Number} retval
 */
function GameModeExit(){
	CallNative( "GameModeExit" );
}
/**
 * SetWorldTime
 * @see https://wiki.sa-mp.com/wiki/SetWorldTime
 * @param {Number} hour
 * @return {Number} retval
 */
function SetWorldTime( hour ){
	return CallNative( "SetWorldTime", "i", hour );
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
	return CallNative( "GetWeaponName", "iSi", weaponid, len );
}
/**
 * EnableTirePopping
 * @see https://wiki.sa-mp.com/wiki/EnableTirePopping
 * @param {Number} enable
 * @return {Number} retval
 */
function EnableTirePopping( enable ){
	return CallNative( "EnableTirePopping", "i", enable );
}
/**
 * EnableVehicleFriendlyFire
 * @see https://wiki.sa-mp.com/wiki/EnableVehicleFriendlyFire
 * @return {Number} retval
 */
function EnableVehicleFriendlyFire(){
	CallNative( "EnableVehicleFriendlyFire" );
}
/**
 * AllowInteriorWeapons
 * @see https://wiki.sa-mp.com/wiki/AllowInteriorWeapons
 * @param {Number} allow
 * @return {Number} retval
 */
function AllowInteriorWeapons( allow ){
	return CallNative( "AllowInteriorWeapons", "i", allow );
}
/**
 * SetWeather
 * @see https://wiki.sa-mp.com/wiki/SetWeather
 * @param {Number} weatherid
 * @return {Number} retval
 */
function SetWeather( weatherid ){
	return CallNative( "SetWeather", "i", weatherid );
}
/**
 * SetGravity
 * @see https://wiki.sa-mp.com/wiki/SetGravity
 * @param {Number} gravity
 * @return {Number} retval
 */
function SetGravity( gravity ){
	return CallNative( "SetGravity", "f", gravity );
}
/**
 * SetDeathDropAmount
 * @see https://wiki.sa-mp.com/wiki/SetDeathDropAmount
 * @param {Number} amount
 * @return {Number} retval
 */
function SetDeathDropAmount( amount ){
	return CallNative( "SetDeathDropAmount", "i", amount );
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
	return CallNative( "CreateExplosion", "fffif", X, Y, Z, type, Radius );
}
/**
 * EnableZoneNames
 * @see https://wiki.sa-mp.com/wiki/EnableZoneNames
 * @param {Number} enable
 * @return {Number} retval
 */
function EnableZoneNames( enable ){
	return CallNative( "EnableZoneNames", "i", enable );
}
/**
 * UsePlayerPedAnims
 * @see https://wiki.sa-mp.com/wiki/UsePlayerPedAnims
 * @return {Number} retval
 */
function UsePlayerPedAnims(){
	CallNative( "UsePlayerPedAnims" );
}
/**
 * DisableInteriorEnterExits
 * @see https://wiki.sa-mp.com/wiki/DisableInteriorEnterExits
 * @return {Number} retval
 */
function DisableInteriorEnterExits(){
	CallNative( "DisableInteriorEnterExits" );
}
/**
 * SetNameTagDrawDistance
 * @see https://wiki.sa-mp.com/wiki/SetNameTagDrawDistance
 * @param {Number} distance
 * @return {Number} retval
 */
function SetNameTagDrawDistance( distance ){
	return CallNative( "SetNameTagDrawDistance", "f", distance );
}
/**
 * DisableNameTagLOS
 * @see https://wiki.sa-mp.com/wiki/DisableNameTagLOS
 * @return {Number} retval
 */
function DisableNameTagLOS(){
	CallNative( "DisableNameTagLOS" );
}
/**
 * LimitGlobalChatRadius
 * @see https://wiki.sa-mp.com/wiki/LimitGlobalChatRadius
 * @param {Number} chat_radius
 * @return {Number} retval
 */
function LimitGlobalChatRadius( chat_radius ){
	return CallNative( "LimitGlobalChatRadius", "f", chat_radius );
}
/**
 * LimitPlayerMarkerRadius
 * @see https://wiki.sa-mp.com/wiki/LimitPlayerMarkerRadius
 * @param {Number} marker_radius
 * @return {Number} retval
 */
function LimitPlayerMarkerRadius( marker_radius ){
	return CallNative( "LimitPlayerMarkerRadius", "f", marker_radius );
}
/**
 * ConnectNPC
 * @see https://wiki.sa-mp.com/wiki/ConnectNPC
 * @param {String} name
 * @param {String} script
 * @return {Number} retval
 */
function ConnectNPC( name, script ){
	return CallNative( "ConnectNPC", "ss", name, script );
}
/**
 * IsPlayerNPC
 * @see https://wiki.sa-mp.com/wiki/IsPlayerNPC
 * @param {Number} playerid
 * @return {Number} retval
 */
function IsPlayerNPC( playerid ){
	return CallNative( "IsPlayerNPC", "i", playerid );
}
/**
 * IsPlayerAdmin
 * @see https://wiki.sa-mp.com/wiki/IsPlayerAdmin
 * @param {Number} playerid
 * @return {Number} retval
 */
function IsPlayerAdmin( playerid ){
	return CallNative( "IsPlayerAdmin", "i", playerid );
}
/**
 * Kick
 * @see https://wiki.sa-mp.com/wiki/Kick
 * @param {Number} playerid
 * @return {Number} retval
 */
function Kick( playerid ){
	return CallNative( "Kick", "i", playerid );
}
/**
 * Ban
 * @see https://wiki.sa-mp.com/wiki/Ban
 * @param {Number} playerid
 * @return {Number} retval
 */
function Ban( playerid ){
	return CallNative( "Ban", "i", playerid );
}
/**
 * BanEx
 * @see https://wiki.sa-mp.com/wiki/BanEx
 * @param {Number} playerid
 * @param {String} reason
 * @return {Number} retval
 */
function BanEx( playerid, reason ){
	return CallNative( "BanEx", "is", playerid, reason );
}
/**
 * SendRconCommand
 * @see https://wiki.sa-mp.com/wiki/SendRconCommand
 * @param {String} command
 * @return {Number} retval
 */
function SendRconCommand( command ){
	return CallNative( "SendRconCommand", "s", command );
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
	return CallNative( "GetServerVarAsString", "sSi", varname, len );
}
/**
 * GetServerVarAsInt
 * @see https://wiki.sa-mp.com/wiki/GetServerVarAsInt
 * @param {String} varname
 * @return {Number} retval
 */
function GetServerVarAsInt( varname ){
	return CallNative( "GetServerVarAsInt", "s", varname );
}
/**
 * GetServerVarAsBool
 * @see https://wiki.sa-mp.com/wiki/GetServerVarAsBool
 * @param {String} varname
 * @return {Number} retval
 */
function GetServerVarAsBool( varname ){
	return CallNative( "GetServerVarAsBool", "s", varname );
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
	return CallNative( "GetPlayerNetworkStats", "isi", playerid, retstr, retstr_size );
}
/**
 * GetNetworkStats
 * @see https://wiki.sa-mp.com/wiki/GetNetworkStats
 * @param {String} retstr
 * @param {Number} retstr_size
 * @return {Number} retval
 */
function GetNetworkStats( retstr, retstr_size ){
	return CallNative( "GetNetworkStats", "si", retstr, retstr_size );
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
	return CallNative( "GetPlayerVersion", "iSi", playerid, len );
}
/**
 * BlockIpAddress
 * @see https://wiki.sa-mp.com/wiki/BlockIpAddress
 * @param {String} ip_address
 * @param {Number} timems
 * @return {Number} retval
 */
function BlockIpAddress( ip_address, timems ){
	return CallNative( "BlockIpAddress", "si", ip_address, timems );
}
/**
 * UnBlockIpAddress
 * @see https://wiki.sa-mp.com/wiki/UnBlockIpAddress
 * @param {String} ip_address
 * @return {Number} retval
 */
function UnBlockIpAddress( ip_address ){
	return CallNative( "UnBlockIpAddress", "s", ip_address );
}
/**
 * GetServerTickRate
 * @see https://wiki.sa-mp.com/wiki/GetServerTickRate
 * @return {Number} retval
 */
function GetServerTickRate(){
	CallNative( "GetServerTickRate" );
}
/**
 * NetStats_GetConnectedTime
 * @see https://wiki.sa-mp.com/wiki/NetStats_GetConnectedTime
 * @param {Number} playerid
 * @return {Number} retval
 */
function NetStats_GetConnectedTime( playerid ){
	return CallNative( "NetStats_GetConnectedTime", "i", playerid );
}
/**
 * NetStats_MessagesReceived
 * @see https://wiki.sa-mp.com/wiki/NetStats_MessagesReceived
 * @param {Number} playerid
 * @return {Number} retval
 */
function NetStats_MessagesReceived( playerid ){
	return CallNative( "NetStats_MessagesReceived", "i", playerid );
}
/**
 * NetStats_BytesReceived
 * @see https://wiki.sa-mp.com/wiki/NetStats_BytesReceived
 * @param {Number} playerid
 * @return {Number} retval
 */
function NetStats_BytesReceived( playerid ){
	return CallNative( "NetStats_BytesReceived", "i", playerid );
}
/**
 * NetStats_MessagesSent
 * @see https://wiki.sa-mp.com/wiki/NetStats_MessagesSent
 * @param {Number} playerid
 * @return {Number} retval
 */
function NetStats_MessagesSent( playerid ){
	return CallNative( "NetStats_MessagesSent", "i", playerid );
}
/**
 * NetStats_BytesSent
 * @see https://wiki.sa-mp.com/wiki/NetStats_BytesSent
 * @param {Number} playerid
 * @return {Number} retval
 */
function NetStats_BytesSent( playerid ){
	return CallNative( "NetStats_BytesSent", "i", playerid );
}
/**
 * NetStats_MessagesRecvPerSecond
 * @see https://wiki.sa-mp.com/wiki/NetStats_MessagesRecvPerSecond
 * @param {Number} playerid
 * @return {Number} retval
 */
function NetStats_MessagesRecvPerSecond( playerid ){
	return CallNative( "NetStats_MessagesRecvPerSecond", "i", playerid );
}
/**
 * NetStats_PacketLossPercent
 * @see https://wiki.sa-mp.com/wiki/NetStats_PacketLossPercent
 * @param {Number} playerid
 * @return {Number} retval
 */
function NetStats_PacketLossPercent( playerid ){
	return CallNative( "NetStats_PacketLossPercent", "i", playerid );
}
/**
 * NetStats_ConnectionStatus
 * @see https://wiki.sa-mp.com/wiki/NetStats_ConnectionStatus
 * @param {Number} playerid
 * @return {Number} retval
 */
function NetStats_ConnectionStatus( playerid ){
	return CallNative( "NetStats_ConnectionStatus", "i", playerid );
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
	return CallNative( "NetStats_GetIpPort", "isi", playerid, ip_port, ip_port_len );
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
	return CallNative( "CreateMenu", "siffff", title, columns, x, y, col1width, col2width );
}
/**
 * DestroyMenu
 * @see https://wiki.sa-mp.com/wiki/DestroyMenu
 * @param {Number} menuid
 * @return {Number} retval
 */
function DestroyMenu( menuid ){
	return CallNative( "DestroyMenu", "i", menuid );
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
	return CallNative( "AddMenuItem", "iis", menuid, column, menutext );
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
	return CallNative( "SetMenuColumnHeader", "iis", menuid, column, columnheader );
}
/**
 * ShowMenuForPlayer
 * @see https://wiki.sa-mp.com/wiki/ShowMenuForPlayer
 * @param {Number} menuid
 * @param {Number} playerid
 * @return {Number} retval
 */
function ShowMenuForPlayer( menuid, playerid ){
	return CallNative( "ShowMenuForPlayer", "ii", menuid, playerid );
}
/**
 * HideMenuForPlayer
 * @see https://wiki.sa-mp.com/wiki/HideMenuForPlayer
 * @param {Number} menuid
 * @param {Number} playerid
 * @return {Number} retval
 */
function HideMenuForPlayer( menuid, playerid ){
	return CallNative( "HideMenuForPlayer", "ii", menuid, playerid );
}
/**
 * IsValidMenu
 * @see https://wiki.sa-mp.com/wiki/IsValidMenu
 * @param {Number} menuid
 * @return {Number} retval
 */
function IsValidMenu( menuid ){
	return CallNative( "IsValidMenu", "i", menuid );
}
/**
 * DisableMenu
 * @see https://wiki.sa-mp.com/wiki/DisableMenu
 * @param {Number} menuid
 * @return {Number} retval
 */
function DisableMenu( menuid ){
	return CallNative( "DisableMenu", "i", menuid );
}
/**
 * DisableMenuRow
 * @see https://wiki.sa-mp.com/wiki/DisableMenuRow
 * @param {Number} menuid
 * @param {Number} row
 * @return {Number} retval
 */
function DisableMenuRow( menuid, row ){
	return CallNative( "DisableMenuRow", "ii", menuid, row );
}
/**
 * GetPlayerMenu
 * @see https://wiki.sa-mp.com/wiki/GetPlayerMenu
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerMenu( playerid ){
	return CallNative( "GetPlayerMenu", "i", playerid );
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
	return CallNative( "TextDrawCreate", "ffs", x, y, text );
}
/**
 * TextDrawDestroy
 * @see https://wiki.sa-mp.com/wiki/TextDrawDestroy
 * @param {Number} text
 * @return {Number} retval
 */
function TextDrawDestroy( text ){
	return CallNative( "TextDrawDestroy", "i", text );
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
	return CallNative( "TextDrawLetterSize", "iff", text, x, y );
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
	return CallNative( "TextDrawTextSize", "iff", text, x, y );
}
/**
 * TextDrawAlignment
 * @see https://wiki.sa-mp.com/wiki/TextDrawAlignment
 * @param {Number} text
 * @param {Number} alignment
 * @return {Number} retval
 */
function TextDrawAlignment( text, alignment ){
	return CallNative( "TextDrawAlignment", "ii", text, alignment );
}
/**
 * TextDrawColor
 * @see https://wiki.sa-mp.com/wiki/TextDrawColor
 * @param {Number} text
 * @param {Number} color
 * @return {Number} retval
 */
function TextDrawColor( text, color ){
	return CallNative( "TextDrawColor", "ii", text, color );
}
/**
 * TextDrawUseBox
 * @see https://wiki.sa-mp.com/wiki/TextDrawUseBox
 * @param {Number} text
 * @param {Number} use
 * @return {Number} retval
 */
function TextDrawUseBox( text, use ){
	return CallNative( "TextDrawUseBox", "ii", text, use );
}
/**
 * TextDrawBoxColor
 * @see https://wiki.sa-mp.com/wiki/TextDrawBoxColor
 * @param {Number} text
 * @param {Number} color
 * @return {Number} retval
 */
function TextDrawBoxColor( text, color ){
	return CallNative( "TextDrawBoxColor", "ii", text, color );
}
/**
 * TextDrawSetShadow
 * @see https://wiki.sa-mp.com/wiki/TextDrawSetShadow
 * @param {Number} text
 * @param {Number} size
 * @return {Number} retval
 */
function TextDrawSetShadow( text, size ){
	return CallNative( "TextDrawSetShadow", "ii", text, size );
}
/**
 * TextDrawSetOutline
 * @see https://wiki.sa-mp.com/wiki/TextDrawSetOutline
 * @param {Number} text
 * @param {Number} size
 * @return {Number} retval
 */
function TextDrawSetOutline( text, size ){
	return CallNative( "TextDrawSetOutline", "ii", text, size );
}
/**
 * TextDrawBackgroundColor
 * @see https://wiki.sa-mp.com/wiki/TextDrawBackgroundColor
 * @param {Number} text
 * @param {Number} color
 * @return {Number} retval
 */
function TextDrawBackgroundColor( text, color ){
	return CallNative( "TextDrawBackgroundColor", "ii", text, color );
}
/**
 * TextDrawFont
 * @see https://wiki.sa-mp.com/wiki/TextDrawFont
 * @param {Number} text
 * @param {Number} font
 * @return {Number} retval
 */
function TextDrawFont( text, font ){
	return CallNative( "TextDrawFont", "ii", text, font );
}
/**
 * TextDrawSetProportional
 * @see https://wiki.sa-mp.com/wiki/TextDrawSetProportional
 * @param {Number} text
 * @param {Number} set
 * @return {Number} retval
 */
function TextDrawSetProportional( text, set ){
	return CallNative( "TextDrawSetProportional", "ii", text, set );
}
/**
 * TextDrawSetSelectable
 * @see https://wiki.sa-mp.com/wiki/TextDrawSetSelectable
 * @param {Number} text
 * @param {Number} set
 * @return {Number} retval
 */
function TextDrawSetSelectable( text, set ){
	return CallNative( "TextDrawSetSelectable", "ii", text, set );
}
/**
 * TextDrawShowForPlayer
 * @see https://wiki.sa-mp.com/wiki/TextDrawShowForPlayer
 * @param {Number} playerid
 * @param {Number} text
 * @return {Number} retval
 */
function TextDrawShowForPlayer( playerid, text ){
	return CallNative( "TextDrawShowForPlayer", "ii", playerid, text );
}
/**
 * TextDrawHideForPlayer
 * @see https://wiki.sa-mp.com/wiki/TextDrawHideForPlayer
 * @param {Number} playerid
 * @param {Number} text
 * @return {Number} retval
 */
function TextDrawHideForPlayer( playerid, text ){
	return CallNative( "TextDrawHideForPlayer", "ii", playerid, text );
}
/**
 * TextDrawShowForAll
 * @see https://wiki.sa-mp.com/wiki/TextDrawShowForAll
 * @param {Number} text
 * @return {Number} retval
 */
function TextDrawShowForAll( text ){
	return CallNative( "TextDrawShowForAll", "i", text );
}
/**
 * TextDrawHideForAll
 * @see https://wiki.sa-mp.com/wiki/TextDrawHideForAll
 * @param {Number} text
 * @return {Number} retval
 */
function TextDrawHideForAll( text ){
	return CallNative( "TextDrawHideForAll", "i", text );
}
/**
 * TextDrawSetString
 * @see https://wiki.sa-mp.com/wiki/TextDrawSetString
 * @param {Number} text
 * @param {String} string
 * @return {Number} retval
 */
function TextDrawSetString( text, string ){
	return CallNative( "TextDrawSetString", "is", text, string );
}
/**
 * TextDrawSetPreviewModel
 * @see https://wiki.sa-mp.com/wiki/TextDrawSetPreviewModel
 * @param {Number} text
 * @param {Number} modelindex
 * @return {Number} retval
 */
function TextDrawSetPreviewModel( text, modelindex ){
	return CallNative( "TextDrawSetPreviewModel", "ii", text, modelindex );
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
	return CallNative( "TextDrawSetPreviewRot", "iffff", text, fRotX, fRotY, fRotZ, fZoom );
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
	return CallNative( "TextDrawSetPreviewVehCol", "iii", text, color1, color2 );
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
	return CallNative( "GangZoneCreate", "ffff", minx, miny, maxx, maxy );
}
/**
 * GangZoneDestroy
 * @see https://wiki.sa-mp.com/wiki/GangZoneDestroy
 * @param {Number} zone
 * @return {Number} retval
 */
function GangZoneDestroy( zone ){
	return CallNative( "GangZoneDestroy", "i", zone );
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
	return CallNative( "GangZoneShowForPlayer", "iii", playerid, zone, color );
}
/**
 * GangZoneShowForAll
 * @see https://wiki.sa-mp.com/wiki/GangZoneShowForAll
 * @param {Number} zone
 * @param {Number} color
 * @return {Number} retval
 */
function GangZoneShowForAll( zone, color ){
	return CallNative( "GangZoneShowForAll", "ii", zone, color );
}
/**
 * GangZoneHideForPlayer
 * @see https://wiki.sa-mp.com/wiki/GangZoneHideForPlayer
 * @param {Number} playerid
 * @param {Number} zone
 * @return {Number} retval
 */
function GangZoneHideForPlayer( playerid, zone ){
	return CallNative( "GangZoneHideForPlayer", "ii", playerid, zone );
}
/**
 * GangZoneHideForAll
 * @see https://wiki.sa-mp.com/wiki/GangZoneHideForAll
 * @param {Number} zone
 * @return {Number} retval
 */
function GangZoneHideForAll( zone ){
	return CallNative( "GangZoneHideForAll", "i", zone );
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
	return CallNative( "GangZoneFlashForPlayer", "iii", playerid, zone, flashcolor );
}
/**
 * GangZoneFlashForAll
 * @see https://wiki.sa-mp.com/wiki/GangZoneFlashForAll
 * @param {Number} zone
 * @param {Number} flashcolor
 * @return {Number} retval
 */
function GangZoneFlashForAll( zone, flashcolor ){
	return CallNative( "GangZoneFlashForAll", "ii", zone, flashcolor );
}
/**
 * GangZoneStopFlashForPlayer
 * @see https://wiki.sa-mp.com/wiki/GangZoneStopFlashForPlayer
 * @param {Number} playerid
 * @param {Number} zone
 * @return {Number} retval
 */
function GangZoneStopFlashForPlayer( playerid, zone ){
	return CallNative( "GangZoneStopFlashForPlayer", "ii", playerid, zone );
}
/**
 * GangZoneStopFlashForAll
 * @see https://wiki.sa-mp.com/wiki/GangZoneStopFlashForAll
 * @param {Number} zone
 * @return {Number} retval
 */
function GangZoneStopFlashForAll( zone ){
	return CallNative( "GangZoneStopFlashForAll", "i", zone );
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
	return CallNative( "Create3DTextLabel", "siffffii", text, color, X, Y, Z, DrawDistance, virtualworld, testLOS );
}
/**
 * Delete3DTextLabel
 * @see https://wiki.sa-mp.com/wiki/Delete3DTextLabel
 * @param {Number} id
 * @return {Number} retval
 */
function Delete3DTextLabel( id ){
	return CallNative( "Delete3DTextLabel", "i", id );
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
	return CallNative( "Attach3DTextLabelToPlayer", "iifff", id, playerid, OffsetX, OffsetY, OffsetZ );
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
	return CallNative( "Attach3DTextLabelToVehicle", "iifff", id, vehicleid, OffsetX, OffsetY, OffsetZ );
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
	return CallNative( "Update3DTextLabelText", "iis", id, color, text );
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
	return CallNative( "CreatePlayer3DTextLabel", "isiffffiii", playerid, text, color, X, Y, Z, DrawDistance, attachedplayer, attachedvehicle, testLOS );
}
/**
 * DeletePlayer3DTextLabel
 * @see https://wiki.sa-mp.com/wiki/DeletePlayer3DTextLabel
 * @param {Number} playerid
 * @param {Number} id
 * @return {Number} retval
 */
function DeletePlayer3DTextLabel( playerid, id ){
	return CallNative( "DeletePlayer3DTextLabel", "ii", playerid, id );
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
	return CallNative( "UpdatePlayer3DTextLabelText", "iiis", playerid, id, color, text );
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
	return CallNative( "ShowPlayerDialog", "iiissss", playerid, dialogid, style, caption, info, button1, button2 );
}
