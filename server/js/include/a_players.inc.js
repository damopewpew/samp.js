const SPECIAL_ACTION_NONE = 0;
const SPECIAL_ACTION_DUCK = 1;
const SPECIAL_ACTION_USEJETPACK = 2;
const SPECIAL_ACTION_ENTER_VEHICLE = 3;
const SPECIAL_ACTION_EXIT_VEHICLE = 4;
const SPECIAL_ACTION_DANCE1 = 5;
const SPECIAL_ACTION_DANCE2 = 6;
const SPECIAL_ACTION_DANCE3 = 7;
const SPECIAL_ACTION_DANCE4 = 8;
const SPECIAL_ACTION_HANDSUP = 10;
const SPECIAL_ACTION_USECELLPHONE = 11;
const SPECIAL_ACTION_SITTING = 12;
const SPECIAL_ACTION_STOPUSECELLPHONE = 13;
const SPECIAL_ACTION_DRINK_BEER = 20;
const SPECIAL_ACTION_SMOKE_CIGGY = 21;
const SPECIAL_ACTION_DRINK_WINE = 22;
const SPECIAL_ACTION_DRINK_SPRUNK = 23;
const SPECIAL_ACTION_CUFFED = 24;
const SPECIAL_ACTION_CARRY = 25;
const FIGHT_STYLE_NORMAL = 4;
const FIGHT_STYLE_BOXING = 5;
const FIGHT_STYLE_KUNGFU = 6;
const FIGHT_STYLE_KNEEHEAD = 7;
const FIGHT_STYLE_GRABKICK = 15;
const FIGHT_STYLE_ELBOW = 16;
const WEAPONSKILL_PISTOL = 0;
const WEAPONSKILL_PISTOL_SILENCED = 1;
const WEAPONSKILL_DESERT_EAGLE = 2;
const WEAPONSKILL_SHOTGUN = 3;
const WEAPONSKILL_SAWNOFF_SHOTGUN = 4;
const WEAPONSKILL_SPAS12_SHOTGUN = 5;
const WEAPONSKILL_MICRO_UZI = 6;
const WEAPONSKILL_MP5 = 7;
const WEAPONSKILL_AK47 = 8;
const WEAPONSKILL_M4 = 9;
const WEAPONSKILL_SNIPERRIFLE = 10;
const WEAPONSTATE_UNKNOWN = -1;
const WEAPONSTATE_NO_BULLETS = 0;
const WEAPONSTATE_LAST_BULLET = 1;
const WEAPONSTATE_MORE_BULLETS = 2;
const WEAPONSTATE_RELOADING = 3;
const MAX_PLAYER_ATTACHED_OBJECTS = 10 // This is the number of attached indexes available ie 10 = 0-9;
const PLAYER_VARTYPE_NONE = 0;
const PLAYER_VARTYPE_INT = 1;
const PLAYER_VARTYPE_STRING = 2;
const PLAYER_VARTYPE_FLOAT = 3;
const MAX_CHATBUBBLE_LENGTH = 144;
const MAPICON_LOCAL = 0 // displays in the player's local are;
const MAPICON_GLOBAL = 1 // displays always;
const MAPICON_LOCAL_CHECKPOINT = 2 // displays in the player's local area and has a checkpoint marker;
const MAPICON_GLOBAL_CHECKPOINT = 3 // displays always and has a checkpoint marker;
const CAMERA_CUT = 2;
const CAMERA_MOVE = 1;
const SPECTATE_MODE_NORMAL = 1;
const SPECTATE_MODE_FIXED = 2;
const SPECTATE_MODE_SIDE = 3;
const PLAYER_RECORDING_TYPE_NONE = 0;
const PLAYER_RECORDING_TYPE_DRIVER = 1;
const PLAYER_RECORDING_TYPE_ONFOOT = 2;
/**
 * SetSpawnInfo

{@link https://wiki.sa-mp.com/wiki/SetSpawnInfo}

 * @param {Number} playerid
 * @param {Number} team
 * @param {Number} skin
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} rotation
 * @param {Number} weapon1
 * @param {Number} weapon1_ammo
 * @param {Number} weapon2
 * @param {Number} weapon2_ammo
 * @param {Number} weapon3
 * @param {Number} weapon3_ammo
 * @return {Number} retval

*/
function SetSpawnInfo( playerid, team, skin, x, y, z, rotation, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo ){
	return CallNative( "SetSpawnInfo", "iiiffffiiiiii", playerid, team, skin, x, y, z, rotation, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo );
}
/**
 * SpawnPlayer

{@link https://wiki.sa-mp.com/wiki/SpawnPlayer}

 * @param {Number} playerid
 * @return {Number} retval

*/
function SpawnPlayer( playerid ){
	return CallNative( "SpawnPlayer", "i", playerid );
}
/**
 * SetPlayerPos

{@link https://wiki.sa-mp.com/wiki/SetPlayerPos}

 * @param {Number} playerid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval

*/
function SetPlayerPos( playerid, x, y, z ){
	return CallNative( "SetPlayerPos", "ifff", playerid, x, y, z );
}
/**
 * SetPlayerPosFindZ

{@link https://wiki.sa-mp.com/wiki/SetPlayerPosFindZ}

 * @param {Number} playerid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval

*/
function SetPlayerPosFindZ( playerid, x, y, z ){
	return CallNative( "SetPlayerPosFindZ", "ifff", playerid, x, y, z );
}
/**
 * GetPlayerPos

{@link https://wiki.sa-mp.com/wiki/GetPlayerPos}

 * @param {Number} playerid
 * @return {{ x: Number,  y: Number,  z: Number }}
*/
function GetPlayerPos( playerid ){
	return CallNative( "GetPlayerPos", "iFFF", playerid, [ "x", "y", "z" ] );
}
/**
 * SetPlayerFacingAngle

{@link https://wiki.sa-mp.com/wiki/SetPlayerFacingAngle}

 * @param {Number} playerid
 * @param {Number} ang
 * @return {Number} retval

*/
function SetPlayerFacingAngle( playerid, ang ){
	return CallNative( "SetPlayerFacingAngle", "if", playerid, ang );
}
/**
 * GetPlayerFacingAngle

{@link https://wiki.sa-mp.com/wiki/GetPlayerFacingAngle}

 * @param {Number} playerid
 * @return {Number} ang
*/
function GetPlayerFacingAngle( playerid ){
	return CallNative( "GetPlayerFacingAngle", "iF", playerid );
}
/**
 * IsPlayerInRangeOfPoint

{@link https://wiki.sa-mp.com/wiki/IsPlayerInRangeOfPoint}

 * @param {Number} playerid
 * @param {Number} range
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval

*/
function IsPlayerInRangeOfPoint( playerid, range, x, y, z ){
	return CallNative( "IsPlayerInRangeOfPoint", "iffff", playerid, range, x, y, z );
}
/**
 * GetPlayerDistanceFromPoint

{@link https://wiki.sa-mp.com/wiki/GetPlayerDistanceFromPoint}

 * @param {Number} playerid
 * @param {Number} X
 * @param {Number} Y
 * @param {Number} Z
 * @return {Number} retval

*/
function GetPlayerDistanceFromPoint( playerid, X, Y, Z ){
	return CallNative( "GetPlayerDistanceFromPoint", "ifff", playerid, X, Y, Z );
}
/**
 * IsPlayerStreamedIn

{@link https://wiki.sa-mp.com/wiki/IsPlayerStreamedIn}

 * @param {Number} playerid
 * @param {Number} forplayerid
 * @return {Number} retval

*/
function IsPlayerStreamedIn( playerid, forplayerid ){
	return CallNative( "IsPlayerStreamedIn", "ii", playerid, forplayerid );
}
/**
 * SetPlayerInterior

{@link https://wiki.sa-mp.com/wiki/SetPlayerInterior}

 * @param {Number} playerid
 * @param {Number} interiorid
 * @return {Number} retval

*/
function SetPlayerInterior( playerid, interiorid ){
	return CallNative( "SetPlayerInterior", "ii", playerid, interiorid );
}
/**
 * GetPlayerInterior

{@link https://wiki.sa-mp.com/wiki/GetPlayerInterior}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerInterior( playerid ){
	return CallNative( "GetPlayerInterior", "i", playerid );
}
/**
 * SetPlayerHealth

{@link https://wiki.sa-mp.com/wiki/SetPlayerHealth}

 * @param {Number} playerid
 * @param {Number} health
 * @return {Number} retval

*/
function SetPlayerHealth( playerid, health ){
	return CallNative( "SetPlayerHealth", "if", playerid, health );
}
/**
 * GetPlayerHealth

{@link https://wiki.sa-mp.com/wiki/GetPlayerHealth}

 * @param {Number} playerid
 * @return {Number} health
*/
function GetPlayerHealth( playerid ){
	return CallNative( "GetPlayerHealth", "iF", playerid );
}
/**
 * SetPlayerArmour

{@link https://wiki.sa-mp.com/wiki/SetPlayerArmour}

 * @param {Number} playerid
 * @param {Number} armour
 * @return {Number} retval

*/
function SetPlayerArmour( playerid, armour ){
	return CallNative( "SetPlayerArmour", "if", playerid, armour );
}
/**
 * GetPlayerArmour

{@link https://wiki.sa-mp.com/wiki/GetPlayerArmour}

 * @param {Number} playerid
 * @return {Number} armour
*/
function GetPlayerArmour( playerid ){
	return CallNative( "GetPlayerArmour", "iF", playerid );
}
/**
 * SetPlayerAmmo

{@link https://wiki.sa-mp.com/wiki/SetPlayerAmmo}

 * @param {Number} playerid
 * @param {Number} weaponslot
 * @param {Number} ammo
 * @return {Number} retval

*/
function SetPlayerAmmo( playerid, weaponslot, ammo ){
	return CallNative( "SetPlayerAmmo", "iii", playerid, weaponslot, ammo );
}
/**
 * GetPlayerAmmo

{@link https://wiki.sa-mp.com/wiki/GetPlayerAmmo}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerAmmo( playerid ){
	return CallNative( "GetPlayerAmmo", "i", playerid );
}
/**
 * GetPlayerWeaponState

{@link https://wiki.sa-mp.com/wiki/GetPlayerWeaponState}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerWeaponState( playerid ){
	return CallNative( "GetPlayerWeaponState", "i", playerid );
}
/**
 * GetPlayerTargetPlayer

{@link https://wiki.sa-mp.com/wiki/GetPlayerTargetPlayer}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerTargetPlayer( playerid ){
	return CallNative( "GetPlayerTargetPlayer", "i", playerid );
}
/**
 * GetPlayerTargetActor

{@link https://wiki.sa-mp.com/wiki/GetPlayerTargetActor}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerTargetActor( playerid ){
	return CallNative( "GetPlayerTargetActor", "i", playerid );
}
/**
 * SetPlayerTeam

{@link https://wiki.sa-mp.com/wiki/SetPlayerTeam}

 * @param {Number} playerid
 * @param {Number} teamid
 * @return {Number} retval

*/
function SetPlayerTeam( playerid, teamid ){
	return CallNative( "SetPlayerTeam", "ii", playerid, teamid );
}
/**
 * GetPlayerTeam

{@link https://wiki.sa-mp.com/wiki/GetPlayerTeam}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerTeam( playerid ){
	return CallNative( "GetPlayerTeam", "i", playerid );
}
/**
 * SetPlayerScore

{@link https://wiki.sa-mp.com/wiki/SetPlayerScore}

 * @param {Number} playerid
 * @param {Number} score
 * @return {Number} retval

*/
function SetPlayerScore( playerid, score ){
	return CallNative( "SetPlayerScore", "ii", playerid, score );
}
/**
 * GetPlayerScore

{@link https://wiki.sa-mp.com/wiki/GetPlayerScore}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerScore( playerid ){
	return CallNative( "GetPlayerScore", "i", playerid );
}
/**
 * GetPlayerDrunkLevel

{@link https://wiki.sa-mp.com/wiki/GetPlayerDrunkLevel}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerDrunkLevel( playerid ){
	return CallNative( "GetPlayerDrunkLevel", "i", playerid );
}
/**
 * SetPlayerDrunkLevel

{@link https://wiki.sa-mp.com/wiki/SetPlayerDrunkLevel}

 * @param {Number} playerid
 * @param {Number} level
 * @return {Number} retval

*/
function SetPlayerDrunkLevel( playerid, level ){
	return CallNative( "SetPlayerDrunkLevel", "ii", playerid, level );
}
/**
 * SetPlayerColor

{@link https://wiki.sa-mp.com/wiki/SetPlayerColor}

 * @param {Number} playerid
 * @param {Number} color
 * @return {Number} retval

*/
function SetPlayerColor( playerid, color ){
	return CallNative( "SetPlayerColor", "ii", playerid, color );
}
/**
 * GetPlayerColor

{@link https://wiki.sa-mp.com/wiki/GetPlayerColor}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerColor( playerid ){
	return CallNative( "GetPlayerColor", "i", playerid );
}
/**
 * SetPlayerSkin

{@link https://wiki.sa-mp.com/wiki/SetPlayerSkin}

 * @param {Number} playerid
 * @param {Number} skinid
 * @return {Number} retval

*/
function SetPlayerSkin( playerid, skinid ){
	return CallNative( "SetPlayerSkin", "ii", playerid, skinid );
}
/**
 * GetPlayerSkin

{@link https://wiki.sa-mp.com/wiki/GetPlayerSkin}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerSkin( playerid ){
	return CallNative( "GetPlayerSkin", "i", playerid );
}
/**
 * GivePlayerWeapon

{@link https://wiki.sa-mp.com/wiki/GivePlayerWeapon}

 * @param {Number} playerid
 * @param {Number} weaponid
 * @param {Number} ammo
 * @return {Number} retval

*/
function GivePlayerWeapon( playerid, weaponid, ammo ){
	return CallNative( "GivePlayerWeapon", "iii", playerid, weaponid, ammo );
}
/**
 * ResetPlayerWeapons

{@link https://wiki.sa-mp.com/wiki/ResetPlayerWeapons}

 * @param {Number} playerid
 * @return {Number} retval

*/
function ResetPlayerWeapons( playerid ){
	return CallNative( "ResetPlayerWeapons", "i", playerid );
}
/**
 * SetPlayerArmedWeapon

{@link https://wiki.sa-mp.com/wiki/SetPlayerArmedWeapon}

 * @param {Number} playerid
 * @param {Number} weaponid
 * @return {Number} retval

*/
function SetPlayerArmedWeapon( playerid, weaponid ){
	return CallNative( "SetPlayerArmedWeapon", "ii", playerid, weaponid );
}
/**
 * GetPlayerWeaponData

{@link https://wiki.sa-mp.com/wiki/GetPlayerWeaponData}

 * @param {Number} playerid
 * @param {Number} slot
 * @return {{ weapons: Number,  ammo: Number }}
*/
function GetPlayerWeaponData( playerid, slot ){
	return CallNative( "GetPlayerWeaponData", "iiII", playerid, slot, [ "weapons", "ammo" ] );
}
/**
 * GivePlayerMoney

{@link https://wiki.sa-mp.com/wiki/GivePlayerMoney}

 * @param {Number} playerid
 * @param {Number} money
 * @return {Number} retval

*/
function GivePlayerMoney( playerid, money ){
	return CallNative( "GivePlayerMoney", "ii", playerid, money );
}
/**
 * ResetPlayerMoney

{@link https://wiki.sa-mp.com/wiki/ResetPlayerMoney}

 * @param {Number} playerid
 * @return {Number} retval

*/
function ResetPlayerMoney( playerid ){
	return CallNative( "ResetPlayerMoney", "i", playerid );
}
/**
 * SetPlayerName

{@link https://wiki.sa-mp.com/wiki/SetPlayerName}

 * @param {Number} playerid
 * @param {String} name
 * @return {Number} retval

*/
function SetPlayerName( playerid, name ){
	return CallNative( "SetPlayerName", "is", playerid, name );
}
/**
 * GetPlayerMoney

{@link https://wiki.sa-mp.com/wiki/GetPlayerMoney}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerMoney( playerid ){
	return CallNative( "GetPlayerMoney", "i", playerid );
}
/**
 * GetPlayerState

{@link https://wiki.sa-mp.com/wiki/GetPlayerState}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerState( playerid ){
	return CallNative( "GetPlayerState", "i", playerid );
}
/**
 * GetPlayerIp

{@link https://wiki.sa-mp.com/wiki/GetPlayerIp}

 * @param {Number} playerid
 * @param {Number} len
 * @return {String} name
*/
function GetPlayerIp( playerid, len ){
	len = typeof len !== 'undefined' ? len : 256;
	return CallNative( "GetPlayerIp", "iSi", playerid, len );
}
/**
 * GetPlayerPing

{@link https://wiki.sa-mp.com/wiki/GetPlayerPing}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerPing( playerid ){
	return CallNative( "GetPlayerPing", "i", playerid );
}
/**
 * GetPlayerWeapon

{@link https://wiki.sa-mp.com/wiki/GetPlayerWeapon}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerWeapon( playerid ){
	return CallNative( "GetPlayerWeapon", "i", playerid );
}
/**
 * GetPlayerKeys

{@link https://wiki.sa-mp.com/wiki/GetPlayerKeys}

 * @param {Number} playerid
 * @return {{ keys: Number,  updown: Number,  leftright: Number }}
*/
function GetPlayerKeys( playerid ){
	return CallNative( "GetPlayerKeys", "iIII", playerid, [ "keys", "updown", "leftright" ] );
}
/**
 * GetPlayerName

{@link https://wiki.sa-mp.com/wiki/GetPlayerName}

 * @param {Number} playerid
 * @param {Number} len
 * @return {String} name
*/
function GetPlayerName( playerid, len ){
	len = typeof len !== 'undefined' ? len : 256;
	return CallNative( "GetPlayerName", "iSi", playerid, len );
}
/**
 * SetPlayerTime

{@link https://wiki.sa-mp.com/wiki/SetPlayerTime}

 * @param {Number} playerid
 * @param {Number} hour
 * @param {Number} minute
 * @return {Number} retval

*/
function SetPlayerTime( playerid, hour, minute ){
	return CallNative( "SetPlayerTime", "iii", playerid, hour, minute );
}
/**
 * GetPlayerTime

{@link https://wiki.sa-mp.com/wiki/GetPlayerTime}

 * @param {Number} playerid
 * @return {{ hour: Number,  minute: Number }}
*/
function GetPlayerTime( playerid ){
	return CallNative( "GetPlayerTime", "iII", playerid, [ "hour", "minute" ] );
}
/**
 * TogglePlayerClock

{@link https://wiki.sa-mp.com/wiki/TogglePlayerClock}

 * @param {Number} playerid
 * @param {Number} toggle
 * @return {Number} retval

*/
function TogglePlayerClock( playerid, toggle ){
	return CallNative( "TogglePlayerClock", "ii", playerid, toggle );
}
/**
 * SetPlayerWeather

{@link https://wiki.sa-mp.com/wiki/SetPlayerWeather}

 * @param {Number} playerid
 * @param {Number} weather
 * @return {Number} retval

*/
function SetPlayerWeather( playerid, weather ){
	return CallNative( "SetPlayerWeather", "ii", playerid, weather );
}
/**
 * ForceClassSelection

{@link https://wiki.sa-mp.com/wiki/ForceClassSelection}

 * @param {Number} playerid
 * @return {Number} retval

*/
function ForceClassSelection( playerid ){
	return CallNative( "ForceClassSelection", "i", playerid );
}
/**
 * SetPlayerWantedLevel

{@link https://wiki.sa-mp.com/wiki/SetPlayerWantedLevel}

 * @param {Number} playerid
 * @param {Number} level
 * @return {Number} retval

*/
function SetPlayerWantedLevel( playerid, level ){
	return CallNative( "SetPlayerWantedLevel", "ii", playerid, level );
}
/**
 * GetPlayerWantedLevel

{@link https://wiki.sa-mp.com/wiki/GetPlayerWantedLevel}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerWantedLevel( playerid ){
	return CallNative( "GetPlayerWantedLevel", "i", playerid );
}
/**
 * SetPlayerFightingStyle

{@link https://wiki.sa-mp.com/wiki/SetPlayerFightingStyle}

 * @param {Number} playerid
 * @param {Number} style
 * @return {Number} retval

*/
function SetPlayerFightingStyle( playerid, style ){
	return CallNative( "SetPlayerFightingStyle", "ii", playerid, style );
}
/**
 * GetPlayerFightingStyle

{@link https://wiki.sa-mp.com/wiki/GetPlayerFightingStyle}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerFightingStyle( playerid ){
	return CallNative( "GetPlayerFightingStyle", "i", playerid );
}
/**
 * SetPlayerVelocity

{@link https://wiki.sa-mp.com/wiki/SetPlayerVelocity}

 * @param {Number} playerid
 * @param {Number} X
 * @param {Number} Y
 * @param {Number} Z
 * @return {Number} retval

*/
function SetPlayerVelocity( playerid, X, Y, Z ){
	return CallNative( "SetPlayerVelocity", "ifff", playerid, X, Y, Z );
}
/**
 * GetPlayerVelocity

{@link https://wiki.sa-mp.com/wiki/GetPlayerVelocity}

 * @param {Number} playerid
 * @return {{ X: Number,  Y: Number,  Z: Number }}
*/
function GetPlayerVelocity( playerid ){
	return CallNative( "GetPlayerVelocity", "iFFF", playerid, [ "X", "Y", "Z" ] );
}
/**
 * PlayCrimeReportForPlayer

{@link https://wiki.sa-mp.com/wiki/PlayCrimeReportForPlayer}

 * @param {Number} playerid
 * @param {Number} suspectid
 * @param {Number} crime
 * @return {Number} retval

*/
function PlayCrimeReportForPlayer( playerid, suspectid, crime ){
	return CallNative( "PlayCrimeReportForPlayer", "iii", playerid, suspectid, crime );
}
/**
 * PlayAudioStreamForPlayer

{@link https://wiki.sa-mp.com/wiki/PlayAudioStreamForPlayer}

 * @param {Number} playerid
 * @param {String} url
 * @param {Number} posX
 * @param {Number} posY
 * @param {Number} posZ
 * @param {Number} distance
 * @param {Number} usepos
 * @return {Number} retval

*/
function PlayAudioStreamForPlayer( playerid, url, posX, posY, posZ, distance, usepos ){
	posX = typeof posX !== 'undefined' ? posX : 0.0;
	posY = typeof posY !== 'undefined' ? posY : 0.0;
	posZ = typeof posZ !== 'undefined' ? posZ : 0.0;
	distance = typeof distance !== 'undefined' ? distance : 50.0;
	usepos = typeof usepos !== 'undefined' ? usepos : 0;
	return CallNative( "PlayAudioStreamForPlayer", "isffffi", playerid, url, posX, posY, posZ, distance, usepos );
}
/**
 * StopAudioStreamForPlayer

{@link https://wiki.sa-mp.com/wiki/StopAudioStreamForPlayer}

 * @param {Number} playerid
 * @return {Number} retval

*/
function StopAudioStreamForPlayer( playerid ){
	return CallNative( "StopAudioStreamForPlayer", "i", playerid );
}
/**
 * SetPlayerShopName

{@link https://wiki.sa-mp.com/wiki/SetPlayerShopName}

 * @param {Number} playerid
 * @param {String} shopname
 * @return {Number} retval

*/
function SetPlayerShopName( playerid, shopname ){
	return CallNative( "SetPlayerShopName", "is", playerid, shopname );
}
/**
 * SetPlayerSkillLevel

{@link https://wiki.sa-mp.com/wiki/SetPlayerSkillLevel}

 * @param {Number} playerid
 * @param {Number} skill
 * @param {Number} level
 * @return {Number} retval

*/
function SetPlayerSkillLevel( playerid, skill, level ){
	return CallNative( "SetPlayerSkillLevel", "iii", playerid, skill, level );
}
/**
 * GetPlayerSurfingVehicleID

{@link https://wiki.sa-mp.com/wiki/GetPlayerSurfingVehicleID}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerSurfingVehicleID( playerid ){
	return CallNative( "GetPlayerSurfingVehicleID", "i", playerid );
}
/**
 * GetPlayerSurfingObjectID

{@link https://wiki.sa-mp.com/wiki/GetPlayerSurfingObjectID}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerSurfingObjectID( playerid ){
	return CallNative( "GetPlayerSurfingObjectID", "i", playerid );
}
/**
 * RemoveBuildingForPlayer

{@link https://wiki.sa-mp.com/wiki/RemoveBuildingForPlayer}

 * @param {Number} playerid
 * @param {Number} modelid
 * @param {Number} fX
 * @param {Number} fY
 * @param {Number} fZ
 * @param {Number} fRadius
 * @return {Number} retval

*/
function RemoveBuildingForPlayer( playerid, modelid, fX, fY, fZ, fRadius ){
	return CallNative( "RemoveBuildingForPlayer", "iiffff", playerid, modelid, fX, fY, fZ, fRadius );
}
/**
 * GetPlayerLastShotVectors

{@link https://wiki.sa-mp.com/wiki/GetPlayerLastShotVectors}

 * @param {Number} playerid
 * @return {{ fOriginX: Number,  fOriginY: Number,  fOriginZ: Number,  fHitPosX: Number,  fHitPosY: Number,  fHitPosZ: Number }}
*/
function GetPlayerLastShotVectors( playerid ){
	return CallNative( "GetPlayerLastShotVectors", "iFFFFFF", playerid, [ "fOriginX", "fOriginY", "fOriginZ", "fHitPosX", "fHitPosY", "fHitPosZ" ] );
}
/**
 * SetPlayerAttachedObject

{@link https://wiki.sa-mp.com/wiki/SetPlayerAttachedObject}

 * @param {Number} playerid
 * @param {Number} index
 * @param {Number} modelid
 * @param {Number} bone
 * @param {Number} fOffsetX
 * @param {Number} fOffsetY
 * @param {Number} fOffsetZ
 * @param {Number} fRotX
 * @param {Number} fRotY
 * @param {Number} fRotZ
 * @param {Number} fScaleX
 * @param {Number} fScaleY
 * @param {Number} fScaleZ
 * @param {Number} materialcolor1
 * @param {Number} materialcolor2
 * @return {Number} retval

*/
function SetPlayerAttachedObject( playerid, index, modelid, bone, fOffsetX, fOffsetY, fOffsetZ, fRotX, fRotY, fRotZ, fScaleX, fScaleY, fScaleZ, materialcolor1, materialcolor2 ){
	fOffsetX = typeof fOffsetX !== 'undefined' ? fOffsetX : 0.0;
	fOffsetY = typeof fOffsetY !== 'undefined' ? fOffsetY : 0.0;
	fOffsetZ = typeof fOffsetZ !== 'undefined' ? fOffsetZ : 0.0;
	fRotX = typeof fRotX !== 'undefined' ? fRotX : 0.0;
	fRotY = typeof fRotY !== 'undefined' ? fRotY : 0.0;
	fRotZ = typeof fRotZ !== 'undefined' ? fRotZ : 0.0;
	fScaleX = typeof fScaleX !== 'undefined' ? fScaleX : 1.0;
	fScaleY = typeof fScaleY !== 'undefined' ? fScaleY : 1.0;
	fScaleZ = typeof fScaleZ !== 'undefined' ? fScaleZ : 1.0;
	materialcolor1 = typeof materialcolor1 !== 'undefined' ? materialcolor1 : 0;
	materialcolor2 = typeof materialcolor2 !== 'undefined' ? materialcolor2 : 0;
	return CallNative( "SetPlayerAttachedObject", "iiiifffffffffii", playerid, index, modelid, bone, fOffsetX, fOffsetY, fOffsetZ, fRotX, fRotY, fRotZ, fScaleX, fScaleY, fScaleZ, materialcolor1, materialcolor2 );
}
/**
 * RemovePlayerAttachedObject

{@link https://wiki.sa-mp.com/wiki/RemovePlayerAttachedObject}

 * @param {Number} playerid
 * @param {Number} index
 * @return {Number} retval

*/
function RemovePlayerAttachedObject( playerid, index ){
	return CallNative( "RemovePlayerAttachedObject", "ii", playerid, index );
}
/**
 * IsPlayerAttachedObjectSlotUsed

{@link https://wiki.sa-mp.com/wiki/IsPlayerAttachedObjectSlotUsed}

 * @param {Number} playerid
 * @param {Number} index
 * @return {Number} retval

*/
function IsPlayerAttachedObjectSlotUsed( playerid, index ){
	return CallNative( "IsPlayerAttachedObjectSlotUsed", "ii", playerid, index );
}
/**
 * EditAttachedObject

{@link https://wiki.sa-mp.com/wiki/EditAttachedObject}

 * @param {Number} playerid
 * @param {Number} index
 * @return {Number} retval

*/
function EditAttachedObject( playerid, index ){
	return CallNative( "EditAttachedObject", "ii", playerid, index );
}
/**
 * CreatePlayerTextDraw

{@link https://wiki.sa-mp.com/wiki/CreatePlayerTextDraw}

 * @param {Number} playerid
 * @param {Number} x
 * @param {Number} y
 * @param {String} text
 * @return {Number} retval

*/
function CreatePlayerTextDraw( playerid, x, y, text ){
	return CallNative( "CreatePlayerTextDraw", "iffs", playerid, x, y, text );
}
/**
 * PlayerTextDrawDestroy

{@link https://wiki.sa-mp.com/wiki/PlayerTextDrawDestroy}

 * @param {Number} playerid
 * @param {Number} text
 * @return {Number} retval

*/
function PlayerTextDrawDestroy( playerid, text ){
	return CallNative( "PlayerTextDrawDestroy", "ii", playerid, text );
}
/**
 * PlayerTextDrawLetterSize

{@link https://wiki.sa-mp.com/wiki/PlayerTextDrawLetterSize}

 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} x
 * @param {Number} y
 * @return {Number} retval

*/
function PlayerTextDrawLetterSize( playerid, text, x, y ){
	return CallNative( "PlayerTextDrawLetterSize", "iiff", playerid, text, x, y );
}
/**
 * PlayerTextDrawTextSize

{@link https://wiki.sa-mp.com/wiki/PlayerTextDrawTextSize}

 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} x
 * @param {Number} y
 * @return {Number} retval

*/
function PlayerTextDrawTextSize( playerid, text, x, y ){
	return CallNative( "PlayerTextDrawTextSize", "iiff", playerid, text, x, y );
}
/**
 * PlayerTextDrawAlignment

{@link https://wiki.sa-mp.com/wiki/PlayerTextDrawAlignment}

 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} alignment
 * @return {Number} retval

*/
function PlayerTextDrawAlignment( playerid, text, alignment ){
	return CallNative( "PlayerTextDrawAlignment", "iii", playerid, text, alignment );
}
/**
 * PlayerTextDrawColor

{@link https://wiki.sa-mp.com/wiki/PlayerTextDrawColor}

 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} color
 * @return {Number} retval

*/
function PlayerTextDrawColor( playerid, text, color ){
	return CallNative( "PlayerTextDrawColor", "iii", playerid, text, color );
}
/**
 * PlayerTextDrawUseBox

{@link https://wiki.sa-mp.com/wiki/PlayerTextDrawUseBox}

 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} use
 * @return {Number} retval

*/
function PlayerTextDrawUseBox( playerid, text, use ){
	return CallNative( "PlayerTextDrawUseBox", "iii", playerid, text, use );
}
/**
 * PlayerTextDrawBoxColor

{@link https://wiki.sa-mp.com/wiki/PlayerTextDrawBoxColor}

 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} color
 * @return {Number} retval

*/
function PlayerTextDrawBoxColor( playerid, text, color ){
	return CallNative( "PlayerTextDrawBoxColor", "iii", playerid, text, color );
}
/**
 * PlayerTextDrawSetShadow

{@link https://wiki.sa-mp.com/wiki/PlayerTextDrawSetShadow}

 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} size
 * @return {Number} retval

*/
function PlayerTextDrawSetShadow( playerid, text, size ){
	return CallNative( "PlayerTextDrawSetShadow", "iii", playerid, text, size );
}
/**
 * PlayerTextDrawSetOutline

{@link https://wiki.sa-mp.com/wiki/PlayerTextDrawSetOutline}

 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} size
 * @return {Number} retval

*/
function PlayerTextDrawSetOutline( playerid, text, size ){
	return CallNative( "PlayerTextDrawSetOutline", "iii", playerid, text, size );
}
/**
 * PlayerTextDrawBackgroundColor

{@link https://wiki.sa-mp.com/wiki/PlayerTextDrawBackgroundColor}

 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} color
 * @return {Number} retval

*/
function PlayerTextDrawBackgroundColor( playerid, text, color ){
	return CallNative( "PlayerTextDrawBackgroundColor", "iii", playerid, text, color );
}
/**
 * PlayerTextDrawFont

{@link https://wiki.sa-mp.com/wiki/PlayerTextDrawFont}

 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} font
 * @return {Number} retval

*/
function PlayerTextDrawFont( playerid, text, font ){
	return CallNative( "PlayerTextDrawFont", "iii", playerid, text, font );
}
/**
 * PlayerTextDrawSetProportional

{@link https://wiki.sa-mp.com/wiki/PlayerTextDrawSetProportional}

 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} set
 * @return {Number} retval

*/
function PlayerTextDrawSetProportional( playerid, text, set ){
	return CallNative( "PlayerTextDrawSetProportional", "iii", playerid, text, set );
}
/**
 * PlayerTextDrawSetSelectable

{@link https://wiki.sa-mp.com/wiki/PlayerTextDrawSetSelectable}

 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} set
 * @return {Number} retval

*/
function PlayerTextDrawSetSelectable( playerid, text, set ){
	return CallNative( "PlayerTextDrawSetSelectable", "iii", playerid, text, set );
}
/**
 * PlayerTextDrawShow

{@link https://wiki.sa-mp.com/wiki/PlayerTextDrawShow}

 * @param {Number} playerid
 * @param {Number} text
 * @return {Number} retval

*/
function PlayerTextDrawShow( playerid, text ){
	return CallNative( "PlayerTextDrawShow", "ii", playerid, text );
}
/**
 * PlayerTextDrawHide

{@link https://wiki.sa-mp.com/wiki/PlayerTextDrawHide}

 * @param {Number} playerid
 * @param {Number} text
 * @return {Number} retval

*/
function PlayerTextDrawHide( playerid, text ){
	return CallNative( "PlayerTextDrawHide", "ii", playerid, text );
}
/**
 * PlayerTextDrawSetString

{@link https://wiki.sa-mp.com/wiki/PlayerTextDrawSetString}

 * @param {Number} playerid
 * @param {Number} text
 * @param {String} string
 * @return {Number} retval

*/
function PlayerTextDrawSetString( playerid, text, string ){
	return CallNative( "PlayerTextDrawSetString", "iis", playerid, text, string );
}
/**
 * PlayerTextDrawSetPreviewModel

{@link https://wiki.sa-mp.com/wiki/PlayerTextDrawSetPreviewModel}

 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} modelindex
 * @return {Number} retval

*/
function PlayerTextDrawSetPreviewModel( playerid, text, modelindex ){
	return CallNative( "PlayerTextDrawSetPreviewModel", "iii", playerid, text, modelindex );
}
/**
 * PlayerTextDrawSetPreviewRot

{@link https://wiki.sa-mp.com/wiki/PlayerTextDrawSetPreviewRot}

 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} fRotX
 * @param {Number} fRotY
 * @param {Number} fRotZ
 * @param {Number} fZoom
 * @return {Number} retval

*/
function PlayerTextDrawSetPreviewRot( playerid, text, fRotX, fRotY, fRotZ, fZoom ){
	fZoom = typeof fZoom !== 'undefined' ? fZoom : 1.0;
	return CallNative( "PlayerTextDrawSetPreviewRot", "iiffff", playerid, text, fRotX, fRotY, fRotZ, fZoom );
}
/**
 * PlayerTextDrawSetPreviewVehCol

{@link https://wiki.sa-mp.com/wiki/PlayerTextDrawSetPreviewVehCol}

 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} color1
 * @param {Number} color2
 * @return {Number} retval

*/
function PlayerTextDrawSetPreviewVehCol( playerid, text, color1, color2 ){
	return CallNative( "PlayerTextDrawSetPreviewVehCol", "iiii", playerid, text, color1, color2 );
}
/**
 * SetPVarInt

{@link https://wiki.sa-mp.com/wiki/SetPVarInt}

 * @param {Number} playerid
 * @param {String} varname
 * @param {Number} int_value
 * @return {Number} retval

*/
function SetPVarInt( playerid, varname, int_value ){
	return CallNative( "SetPVarInt", "isi", playerid, varname, int_value );
}
/**
 * GetPVarInt

{@link https://wiki.sa-mp.com/wiki/GetPVarInt}

 * @param {Number} playerid
 * @param {String} varname
 * @return {Number} retval

*/
function GetPVarInt( playerid, varname ){
	return CallNative( "GetPVarInt", "is", playerid, varname );
}
/**
 * SetPVarString

{@link https://wiki.sa-mp.com/wiki/SetPVarString}

 * @param {Number} playerid
 * @param {String} varname
 * @param {String} string_value
 * @return {Number} retval

*/
function SetPVarString( playerid, varname, string_value ){
	return CallNative( "SetPVarString", "iss", playerid, varname, string_value );
}
/**
 * GetPVarString

{@link https://wiki.sa-mp.com/wiki/GetPVarString}

 * @param {Number} playerid
 * @param {String} varname
 * @param {Number} len
 * @return {String} string_return
*/
function GetPVarString( playerid, varname, len ){
	len = typeof len !== 'undefined' ? len : 256;
	return CallNative( "GetPVarString", "isSi", playerid, varname, len );
}
/**
 * SetPVarFloat

{@link https://wiki.sa-mp.com/wiki/SetPVarFloat}

 * @param {Number} playerid
 * @param {String} varname
 * @param {Number} float_value
 * @return {Number} retval

*/
function SetPVarFloat( playerid, varname, float_value ){
	return CallNative( "SetPVarFloat", "isf", playerid, varname, float_value );
}
/**
 * GetPVarFloat

{@link https://wiki.sa-mp.com/wiki/GetPVarFloat}

 * @param {Number} playerid
 * @param {String} varname
 * @return {Number} retval

*/
function GetPVarFloat( playerid, varname ){
	return CallNative( "GetPVarFloat", "is", playerid, varname );
}
/**
 * DeletePVar

{@link https://wiki.sa-mp.com/wiki/DeletePVar}

 * @param {Number} playerid
 * @param {String} varname
 * @return {Number} retval

*/
function DeletePVar( playerid, varname ){
	return CallNative( "DeletePVar", "is", playerid, varname );
}
/**
 * GetPVarsUpperIndex

{@link https://wiki.sa-mp.com/wiki/GetPVarsUpperIndex}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPVarsUpperIndex( playerid ){
	return CallNative( "GetPVarsUpperIndex", "i", playerid );
}
/**
 * GetPVarNameAtIndex

{@link https://wiki.sa-mp.com/wiki/GetPVarNameAtIndex}

 * @param {Number} playerid
 * @param {Number} index
 * @param {String} ret_varname
 * @param {Number} ret_len
 * @return {Number} retval

*/
function GetPVarNameAtIndex( playerid, index, ret_varname, ret_len ){
	return CallNative( "GetPVarNameAtIndex", "iisi", playerid, index, ret_varname, ret_len );
}
/**
 * GetPVarType

{@link https://wiki.sa-mp.com/wiki/GetPVarType}

 * @param {Number} playerid
 * @param {String} varname
 * @return {Number} retval

*/
function GetPVarType( playerid, varname ){
	return CallNative( "GetPVarType", "is", playerid, varname );
}
/**
 * SetPlayerChatBubble

{@link https://wiki.sa-mp.com/wiki/SetPlayerChatBubble}

 * @param {Number} playerid
 * @param {String} text
 * @param {Number} color
 * @param {Number} drawdistance
 * @param {Number} expiretime
 * @return {Number} retval

*/
function SetPlayerChatBubble( playerid, text, color, drawdistance, expiretime ){
	return CallNative( "SetPlayerChatBubble", "isifi", playerid, text, color, drawdistance, expiretime );
}
/**
 * PutPlayerInVehicle

{@link https://wiki.sa-mp.com/wiki/PutPlayerInVehicle}

 * @param {Number} playerid
 * @param {Number} vehicleid
 * @param {Number} seatid
 * @return {Number} retval

*/
function PutPlayerInVehicle( playerid, vehicleid, seatid ){
	return CallNative( "PutPlayerInVehicle", "iii", playerid, vehicleid, seatid );
}
/**
 * GetPlayerVehicleID

{@link https://wiki.sa-mp.com/wiki/GetPlayerVehicleID}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerVehicleID( playerid ){
	return CallNative( "GetPlayerVehicleID", "i", playerid );
}
/**
 * GetPlayerVehicleSeat

{@link https://wiki.sa-mp.com/wiki/GetPlayerVehicleSeat}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerVehicleSeat( playerid ){
	return CallNative( "GetPlayerVehicleSeat", "i", playerid );
}
/**
 * RemovePlayerFromVehicle

{@link https://wiki.sa-mp.com/wiki/RemovePlayerFromVehicle}

 * @param {Number} playerid
 * @return {Number} retval

*/
function RemovePlayerFromVehicle( playerid ){
	return CallNative( "RemovePlayerFromVehicle", "i", playerid );
}
/**
 * TogglePlayerControllable

{@link https://wiki.sa-mp.com/wiki/TogglePlayerControllable}

 * @param {Number} playerid
 * @param {Number} toggle
 * @return {Number} retval

*/
function TogglePlayerControllable( playerid, toggle ){
	return CallNative( "TogglePlayerControllable", "ii", playerid, toggle );
}
/**
 * PlayerPlaySound

{@link https://wiki.sa-mp.com/wiki/PlayerPlaySound}

 * @param {Number} playerid
 * @param {Number} soundid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval

*/
function PlayerPlaySound( playerid, soundid, x, y, z ){
	return CallNative( "PlayerPlaySound", "iifff", playerid, soundid, x, y, z );
}
/**
 * ApplyAnimation

{@link https://wiki.sa-mp.com/wiki/ApplyAnimation}

 * @param {Number} playerid
 * @param {String} animlib
 * @param {String} animname
 * @param {Number} fDelta
 * @param {Number} loop
 * @param {Number} lockx
 * @param {Number} locky
 * @param {Number} freeze
 * @param {Number} time
 * @param {Number} forcesync
 * @return {Number} retval

*/
function ApplyAnimation( playerid, animlib, animname, fDelta, loop, lockx, locky, freeze, time, forcesync ){
	forcesync = typeof forcesync !== 'undefined' ? forcesync : 0;
	return CallNative( "ApplyAnimation", "issfiiiiii", playerid, animlib, animname, fDelta, loop, lockx, locky, freeze, time, forcesync );
}
/**
 * ClearAnimations

{@link https://wiki.sa-mp.com/wiki/ClearAnimations}

 * @param {Number} playerid
 * @param {Number} forcesync
 * @return {Number} retval

*/
function ClearAnimations( playerid, forcesync ){
	forcesync = typeof forcesync !== 'undefined' ? forcesync : 0;
	return CallNative( "ClearAnimations", "ii", playerid, forcesync );
}
/**
 * GetPlayerAnimationIndex

{@link https://wiki.sa-mp.com/wiki/GetPlayerAnimationIndex}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerAnimationIndex( playerid ){
	return CallNative( "GetPlayerAnimationIndex", "i", playerid );
}
/**
 * GetAnimationName

{@link https://wiki.sa-mp.com/wiki/GetAnimationName}

 * @param {Number} index
 * @param {String} animlib
 * @param {Number} len1
 * @param {String} animname
 * @param {Number} len2
 * @return {Number} retval

*/
function GetAnimationName( index, animlib, len1, animname, len2 ){
	return CallNative( "GetAnimationName", "isisi", index, animlib, len1, animname, len2 );
}
/**
 * GetPlayerSpecialAction

{@link https://wiki.sa-mp.com/wiki/GetPlayerSpecialAction}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerSpecialAction( playerid ){
	return CallNative( "GetPlayerSpecialAction", "i", playerid );
}
/**
 * SetPlayerSpecialAction

{@link https://wiki.sa-mp.com/wiki/SetPlayerSpecialAction}

 * @param {Number} playerid
 * @param {Number} actionid
 * @return {Number} retval

*/
function SetPlayerSpecialAction( playerid, actionid ){
	return CallNative( "SetPlayerSpecialAction", "ii", playerid, actionid );
}
/**
 * DisableRemoteVehicleCollisions

{@link https://wiki.sa-mp.com/wiki/DisableRemoteVehicleCollisions}

 * @param {Number} playerid
 * @param {Number} disable
 * @return {Number} retval

*/
function DisableRemoteVehicleCollisions( playerid, disable ){
	return CallNative( "DisableRemoteVehicleCollisions", "ii", playerid, disable );
}
/**
 * SetPlayerCheckpoint

{@link https://wiki.sa-mp.com/wiki/SetPlayerCheckpoint}

 * @param {Number} playerid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} size
 * @return {Number} retval

*/
function SetPlayerCheckpoint( playerid, x, y, z, size ){
	return CallNative( "SetPlayerCheckpoint", "iffff", playerid, x, y, z, size );
}
/**
 * DisablePlayerCheckpoint

{@link https://wiki.sa-mp.com/wiki/DisablePlayerCheckpoint}

 * @param {Number} playerid
 * @return {Number} retval

*/
function DisablePlayerCheckpoint( playerid ){
	return CallNative( "DisablePlayerCheckpoint", "i", playerid );
}
/**
 * SetPlayerRaceCheckpoint

{@link https://wiki.sa-mp.com/wiki/SetPlayerRaceCheckpoint}

 * @param {Number} playerid
 * @param {Number} type
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} nextx
 * @param {Number} nexty
 * @param {Number} nextz
 * @param {Number} size
 * @return {Number} retval

*/
function SetPlayerRaceCheckpoint( playerid, type, x, y, z, nextx, nexty, nextz, size ){
	return CallNative( "SetPlayerRaceCheckpoint", "iifffffff", playerid, type, x, y, z, nextx, nexty, nextz, size );
}
/**
 * DisablePlayerRaceCheckpoint

{@link https://wiki.sa-mp.com/wiki/DisablePlayerRaceCheckpoint}

 * @param {Number} playerid
 * @return {Number} retval

*/
function DisablePlayerRaceCheckpoint( playerid ){
	return CallNative( "DisablePlayerRaceCheckpoint", "i", playerid );
}
/**
 * SetPlayerWorldBounds

{@link https://wiki.sa-mp.com/wiki/SetPlayerWorldBounds}

 * @param {Number} playerid
 * @param {Number} x_max
 * @param {Number} x_min
 * @param {Number} y_max
 * @param {Number} y_min
 * @return {Number} retval

*/
function SetPlayerWorldBounds( playerid, x_max, x_min, y_max, y_min ){
	return CallNative( "SetPlayerWorldBounds", "iffff", playerid, x_max, x_min, y_max, y_min );
}
/**
 * SetPlayerMarkerForPlayer

{@link https://wiki.sa-mp.com/wiki/SetPlayerMarkerForPlayer}

 * @param {Number} playerid
 * @param {Number} showplayerid
 * @param {Number} color
 * @return {Number} retval

*/
function SetPlayerMarkerForPlayer( playerid, showplayerid, color ){
	return CallNative( "SetPlayerMarkerForPlayer", "iii", playerid, showplayerid, color );
}
/**
 * ShowPlayerNameTagForPlayer

{@link https://wiki.sa-mp.com/wiki/ShowPlayerNameTagForPlayer}

 * @param {Number} playerid
 * @param {Number} showplayerid
 * @param {Number} show
 * @return {Number} retval

*/
function ShowPlayerNameTagForPlayer( playerid, showplayerid, show ){
	return CallNative( "ShowPlayerNameTagForPlayer", "iii", playerid, showplayerid, show );
}
/**
 * SetPlayerMapIcon

{@link https://wiki.sa-mp.com/wiki/SetPlayerMapIcon}

 * @param {Number} playerid
 * @param {Number} iconid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} markertype
 * @param {Number} color
 * @param {Number} style
 * @return {Number} retval

*/
function SetPlayerMapIcon( playerid, iconid, x, y, z, markertype, color, style ){
	style = typeof style !== 'undefined' ? style : MAPICON_LOCAL;
	return CallNative( "SetPlayerMapIcon", "iifffiii", playerid, iconid, x, y, z, markertype, color, style );
}
/**
 * RemovePlayerMapIcon

{@link https://wiki.sa-mp.com/wiki/RemovePlayerMapIcon}

 * @param {Number} playerid
 * @param {Number} iconid
 * @return {Number} retval

*/
function RemovePlayerMapIcon( playerid, iconid ){
	return CallNative( "RemovePlayerMapIcon", "ii", playerid, iconid );
}
/**
 * AllowPlayerTeleport

{@link https://wiki.sa-mp.com/wiki/AllowPlayerTeleport}

 * @param {Number} playerid
 * @param {Number} allow
 * @return {Number} retval

*/
function AllowPlayerTeleport( playerid, allow ){
	return CallNative( "AllowPlayerTeleport", "ii", playerid, allow );
}
/**
 * SetPlayerCameraPos

{@link https://wiki.sa-mp.com/wiki/SetPlayerCameraPos}

 * @param {Number} playerid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval

*/
function SetPlayerCameraPos( playerid, x, y, z ){
	return CallNative( "SetPlayerCameraPos", "ifff", playerid, x, y, z );
}
/**
 * SetPlayerCameraLookAt

{@link https://wiki.sa-mp.com/wiki/SetPlayerCameraLookAt}

 * @param {Number} playerid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} cut
 * @return {Number} retval

*/
function SetPlayerCameraLookAt( playerid, x, y, z, cut ){
	cut = typeof cut !== 'undefined' ? cut : CAMERA_CUT;
	return CallNative( "SetPlayerCameraLookAt", "ifffi", playerid, x, y, z, cut );
}
/**
 * SetCameraBehindPlayer

{@link https://wiki.sa-mp.com/wiki/SetCameraBehindPlayer}

 * @param {Number} playerid
 * @return {Number} retval

*/
function SetCameraBehindPlayer( playerid ){
	return CallNative( "SetCameraBehindPlayer", "i", playerid );
}
/**
 * GetPlayerCameraPos

{@link https://wiki.sa-mp.com/wiki/GetPlayerCameraPos}

 * @param {Number} playerid
 * @return {{ x: Number,  y: Number,  z: Number }}
*/
function GetPlayerCameraPos( playerid ){
	return CallNative( "GetPlayerCameraPos", "iFFF", playerid, [ "x", "y", "z" ] );
}
/**
 * GetPlayerCameraFrontVector

{@link https://wiki.sa-mp.com/wiki/GetPlayerCameraFrontVector}

 * @param {Number} playerid
 * @return {{ x: Number,  y: Number,  z: Number }}
*/
function GetPlayerCameraFrontVector( playerid ){
	return CallNative( "GetPlayerCameraFrontVector", "iFFF", playerid, [ "x", "y", "z" ] );
}
/**
 * GetPlayerCameraMode

{@link https://wiki.sa-mp.com/wiki/GetPlayerCameraMode}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerCameraMode( playerid ){
	return CallNative( "GetPlayerCameraMode", "i", playerid );
}
/**
 * EnablePlayerCameraTarget

{@link https://wiki.sa-mp.com/wiki/EnablePlayerCameraTarget}

 * @param {Number} playerid
 * @param {Number} enable
 * @return {Number} retval

*/
function EnablePlayerCameraTarget( playerid, enable ){
	return CallNative( "EnablePlayerCameraTarget", "ii", playerid, enable );
}
/**
 * GetPlayerCameraTargetObject

{@link https://wiki.sa-mp.com/wiki/GetPlayerCameraTargetObject}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerCameraTargetObject( playerid ){
	return CallNative( "GetPlayerCameraTargetObject", "i", playerid );
}
/**
 * GetPlayerCameraTargetVehicle

{@link https://wiki.sa-mp.com/wiki/GetPlayerCameraTargetVehicle}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerCameraTargetVehicle( playerid ){
	return CallNative( "GetPlayerCameraTargetVehicle", "i", playerid );
}
/**
 * GetPlayerCameraTargetPlayer

{@link https://wiki.sa-mp.com/wiki/GetPlayerCameraTargetPlayer}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerCameraTargetPlayer( playerid ){
	return CallNative( "GetPlayerCameraTargetPlayer", "i", playerid );
}
/**
 * GetPlayerCameraTargetActor

{@link https://wiki.sa-mp.com/wiki/GetPlayerCameraTargetActor}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerCameraTargetActor( playerid ){
	return CallNative( "GetPlayerCameraTargetActor", "i", playerid );
}
/**
 * GetPlayerCameraAspectRatio

{@link https://wiki.sa-mp.com/wiki/GetPlayerCameraAspectRatio}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerCameraAspectRatio( playerid ){
	return CallNative( "GetPlayerCameraAspectRatio", "i", playerid );
}
/**
 * GetPlayerCameraZoom

{@link https://wiki.sa-mp.com/wiki/GetPlayerCameraZoom}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerCameraZoom( playerid ){
	return CallNative( "GetPlayerCameraZoom", "i", playerid );
}
/**
 * AttachCameraToObject

{@link https://wiki.sa-mp.com/wiki/AttachCameraToObject}

 * @param {Number} playerid
 * @param {Number} objectid
 * @return {Number} retval

*/
function AttachCameraToObject( playerid, objectid ){
	return CallNative( "AttachCameraToObject", "ii", playerid, objectid );
}
/**
 * AttachCameraToPlayerObject

{@link https://wiki.sa-mp.com/wiki/AttachCameraToPlayerObject}

 * @param {Number} playerid
 * @param {Number} playerobjectid
 * @return {Number} retval

*/
function AttachCameraToPlayerObject( playerid, playerobjectid ){
	return CallNative( "AttachCameraToPlayerObject", "ii", playerid, playerobjectid );
}
/**
 * InterpolateCameraPos

{@link https://wiki.sa-mp.com/wiki/InterpolateCameraPos}

 * @param {Number} playerid
 * @param {Number} FromX
 * @param {Number} FromY
 * @param {Number} FromZ
 * @param {Number} ToX
 * @param {Number} ToY
 * @param {Number} ToZ
 * @param {Number} time
 * @param {Number} cut
 * @return {Number} retval

*/
function InterpolateCameraPos( playerid, FromX, FromY, FromZ, ToX, ToY, ToZ, time, cut ){
	cut = typeof cut !== 'undefined' ? cut : CAMERA_CUT;
	return CallNative( "InterpolateCameraPos", "iffffffii", playerid, FromX, FromY, FromZ, ToX, ToY, ToZ, time, cut );
}
/**
 * InterpolateCameraLookAt

{@link https://wiki.sa-mp.com/wiki/InterpolateCameraLookAt}

 * @param {Number} playerid
 * @param {Number} FromX
 * @param {Number} FromY
 * @param {Number} FromZ
 * @param {Number} ToX
 * @param {Number} ToY
 * @param {Number} ToZ
 * @param {Number} time
 * @param {Number} cut
 * @return {Number} retval

*/
function InterpolateCameraLookAt( playerid, FromX, FromY, FromZ, ToX, ToY, ToZ, time, cut ){
	cut = typeof cut !== 'undefined' ? cut : CAMERA_CUT;
	return CallNative( "InterpolateCameraLookAt", "iffffffii", playerid, FromX, FromY, FromZ, ToX, ToY, ToZ, time, cut );
}
/**
 * IsPlayerConnected

{@link https://wiki.sa-mp.com/wiki/IsPlayerConnected}

 * @param {Number} playerid
 * @return {Number} retval

*/
function IsPlayerConnected( playerid ){
	return CallNative( "IsPlayerConnected", "i", playerid );
}
/**
 * IsPlayerInVehicle

{@link https://wiki.sa-mp.com/wiki/IsPlayerInVehicle}

 * @param {Number} playerid
 * @param {Number} vehicleid
 * @return {Number} retval

*/
function IsPlayerInVehicle( playerid, vehicleid ){
	return CallNative( "IsPlayerInVehicle", "ii", playerid, vehicleid );
}
/**
 * IsPlayerInAnyVehicle

{@link https://wiki.sa-mp.com/wiki/IsPlayerInAnyVehicle}

 * @param {Number} playerid
 * @return {Number} retval

*/
function IsPlayerInAnyVehicle( playerid ){
	return CallNative( "IsPlayerInAnyVehicle", "i", playerid );
}
/**
 * IsPlayerInCheckpoint

{@link https://wiki.sa-mp.com/wiki/IsPlayerInCheckpoint}

 * @param {Number} playerid
 * @return {Number} retval

*/
function IsPlayerInCheckpoint( playerid ){
	return CallNative( "IsPlayerInCheckpoint", "i", playerid );
}
/**
 * IsPlayerInRaceCheckpoint

{@link https://wiki.sa-mp.com/wiki/IsPlayerInRaceCheckpoint}

 * @param {Number} playerid
 * @return {Number} retval

*/
function IsPlayerInRaceCheckpoint( playerid ){
	return CallNative( "IsPlayerInRaceCheckpoint", "i", playerid );
}
/**
 * SetPlayerVirtualWorld

{@link https://wiki.sa-mp.com/wiki/SetPlayerVirtualWorld}

 * @param {Number} playerid
 * @param {Number} worldid
 * @return {Number} retval

*/
function SetPlayerVirtualWorld( playerid, worldid ){
	return CallNative( "SetPlayerVirtualWorld", "ii", playerid, worldid );
}
/**
 * GetPlayerVirtualWorld

{@link https://wiki.sa-mp.com/wiki/GetPlayerVirtualWorld}

 * @param {Number} playerid
 * @return {Number} retval

*/
function GetPlayerVirtualWorld( playerid ){
	return CallNative( "GetPlayerVirtualWorld", "i", playerid );
}
/**
 * EnableStuntBonusForPlayer

{@link https://wiki.sa-mp.com/wiki/EnableStuntBonusForPlayer}

 * @param {Number} playerid
 * @param {Number} enable
 * @return {Number} retval

*/
function EnableStuntBonusForPlayer( playerid, enable ){
	return CallNative( "EnableStuntBonusForPlayer", "ii", playerid, enable );
}
/**
 * EnableStuntBonusForAll

{@link https://wiki.sa-mp.com/wiki/EnableStuntBonusForAll}

 * @param {Number} enable
 * @return {Number} retval

*/
function EnableStuntBonusForAll( enable ){
	return CallNative( "EnableStuntBonusForAll", "i", enable );
}
/**
 * TogglePlayerSpectating

{@link https://wiki.sa-mp.com/wiki/TogglePlayerSpectating}

 * @param {Number} playerid
 * @param {Number} toggle
 * @return {Number} retval

*/
function TogglePlayerSpectating( playerid, toggle ){
	return CallNative( "TogglePlayerSpectating", "ii", playerid, toggle );
}
/**
 * PlayerSpectatePlayer

{@link https://wiki.sa-mp.com/wiki/PlayerSpectatePlayer}

 * @param {Number} playerid
 * @param {Number} targetplayerid
 * @param {Number} mode
 * @return {Number} retval

*/
function PlayerSpectatePlayer( playerid, targetplayerid, mode ){
	mode = typeof mode !== 'undefined' ? mode : SPECTATE_MODE_NORMAL;
	return CallNative( "PlayerSpectatePlayer", "iii", playerid, targetplayerid, mode );
}
/**
 * PlayerSpectateVehicle

{@link https://wiki.sa-mp.com/wiki/PlayerSpectateVehicle}

 * @param {Number} playerid
 * @param {Number} targetvehicleid
 * @param {Number} mode
 * @return {Number} retval

*/
function PlayerSpectateVehicle( playerid, targetvehicleid, mode ){
	mode = typeof mode !== 'undefined' ? mode : SPECTATE_MODE_NORMAL;
	return CallNative( "PlayerSpectateVehicle", "iii", playerid, targetvehicleid, mode );
}
/**
 * StartRecordingPlayerData

{@link https://wiki.sa-mp.com/wiki/StartRecordingPlayerData}

 * @param {Number} playerid
 * @param {Number} recordtype
 * @param {String} recordname
 * @return {Number} retval

*/
function StartRecordingPlayerData( playerid, recordtype, recordname ){
	return CallNative( "StartRecordingPlayerData", "iis", playerid, recordtype, recordname );
}
/**
 * StopRecordingPlayerData

{@link https://wiki.sa-mp.com/wiki/StopRecordingPlayerData}

 * @param {Number} playerid
 * @return {Number} retval

*/
function StopRecordingPlayerData( playerid ){
	return CallNative( "StopRecordingPlayerData", "i", playerid );
}
/**
 * SelectTextDraw

{@link https://wiki.sa-mp.com/wiki/SelectTextDraw}

 * @param {Number} playerid
 * @param {Number} hovercolor
 * @return {Number} retval

*/
function SelectTextDraw( playerid, hovercolor ){
	return CallNative( "SelectTextDraw", "ii", playerid, hovercolor );
}
/**
 * CancelSelectTextDraw

{@link https://wiki.sa-mp.com/wiki/CancelSelectTextDraw}

 * @param {Number} playerid
 * @return {Number} retval

*/
function CancelSelectTextDraw( playerid ){
	return CallNative( "CancelSelectTextDraw", "i", playerid );
}
/**
 * CreateExplosionForPlayer

{@link https://wiki.sa-mp.com/wiki/CreateExplosionForPlayer}

 * @param {Number} playerid
 * @param {Number} X
 * @param {Number} Y
 * @param {Number} Z
 * @param {Number} type
 * @param {Number} Radius
 * @return {Number} retval

*/
function CreateExplosionForPlayer( playerid, X, Y, Z, type, Radius ){
	return CallNative( "CreateExplosionForPlayer", "ifffif", playerid, X, Y, Z, type, Radius );
}
