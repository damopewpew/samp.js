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
const MAX_PLAYER_ATTACHED_OBJECTS = 10; // This is the number of attached indexes available ie 10 = 0-9
const PLAYER_VARTYPE_NONE = 0;
const PLAYER_VARTYPE_INT = 1;
const PLAYER_VARTYPE_STRING = 2;
const PLAYER_VARTYPE_FLOAT = 3;
const MAX_CHATBUBBLE_LENGTH = 144;
const MAPICON_LOCAL = 0; // displays in the player's local are
const MAPICON_GLOBAL = 1; // displays always
const MAPICON_LOCAL_CHECKPOINT = 2; // displays in the player's local area and has a checkpoint marker
const MAPICON_GLOBAL_CHECKPOINT = 3; // displays always and has a checkpoint marker
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
 * @see https://wiki.sa-mp.com/wiki/SetSpawnInfo
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
function SetSpawnInfo(playerid, team, skin, x, y, z, rotation, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo) {
	return CallNativeGDK("SetSpawnInfo", "iiiffffiiiiii", playerid, team, skin, x, y, z, rotation, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo);
}

/**
 * SpawnPlayer
 * @see https://wiki.sa-mp.com/wiki/SpawnPlayer
 * @param {Number} playerid
 * @return {Number} retval
 */
function SpawnPlayer(playerid) {
	return CallNativeGDK("SpawnPlayer", "i", playerid);
}

/**
 * SetPlayerPos
 * @see https://wiki.sa-mp.com/wiki/SetPlayerPos
 * @param {Number} playerid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function SetPlayerPos(playerid, x, y, z) {
	return CallNativeGDK("SetPlayerPos", "ifff", playerid, x, y, z);
}

/**
 * SetPlayerPosFindZ
 * @see https://wiki.sa-mp.com/wiki/SetPlayerPosFindZ
 * @param {Number} playerid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function SetPlayerPosFindZ(playerid, x, y, z) {
	return CallNativeGDK("SetPlayerPosFindZ", "ifff", playerid, x, y, z);
}

/**
 * GetPlayerPos
 * @see https://wiki.sa-mp.com/wiki/GetPlayerPos
 * @param {Number} playerid
 * @return {{x: Number, y: Number, z: Number}}
 */
function GetPlayerPos(playerid)
{
	let out = CallNativeGDK("GetPlayerPos", "iFFF", playerid);
	return {x: out[0], y: out[1], z: out[2]};
}

/**
 * SetPlayerFacingAngle
 * @see https://wiki.sa-mp.com/wiki/SetPlayerFacingAngle
 * @param {Number} playerid
 * @param {Number} ang
 * @return {Number} retval
 */
function SetPlayerFacingAngle(playerid, ang) {
	return CallNativeGDK("SetPlayerFacingAngle", "if", playerid, ang);
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
 * GetPlayerDistanceFromPoint
 * @see https://wiki.sa-mp.com/wiki/GetPlayerDistanceFromPoint
 * @param {Number} playerid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function GetPlayerDistanceFromPoint(playerid, x, y, z) {
	return CallNativeGDK("GetPlayerDistanceFromPoint", "ifff", playerid, x, y, z);
}

/**
 * IsPlayerStreamedIn
 * @see https://wiki.sa-mp.com/wiki/IsPlayerStreamedIn
 * @param {Number} playerid
 * @param {Number} forplayerid
 * @return {Number} retval
 */
function IsPlayerStreamedIn(playerid, forplayerid) {
	return CallNativeGDK("IsPlayerStreamedIn", "ii", playerid, forplayerid);
}

/**
 * SetPlayerInterior
 * @see https://wiki.sa-mp.com/wiki/SetPlayerInterior
 * @param {Number} playerid
 * @param {Number} interiorid
 * @return {Number} retval
 */
function SetPlayerInterior(playerid, interiorid) {
	return CallNativeGDK("SetPlayerInterior", "ii", playerid, interiorid);
}

/**
 * GetPlayerInterior
 * @see https://wiki.sa-mp.com/wiki/GetPlayerInterior
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerInterior(playerid) {
	return CallNativeGDK("GetPlayerInterior", "i", playerid);
}

/**
 * SetPlayerHealth
 * @see https://wiki.sa-mp.com/wiki/SetPlayerHealth
 * @param {Number} playerid
 * @param {Number} health
 * @return {Number} retval
 */
function SetPlayerHealth(playerid, health) {
	return CallNativeGDK("SetPlayerHealth", "if", playerid, health);
}

/**
 * GetPlayerHealth
 * @see https://wiki.sa-mp.com/wiki/GetPlayerHealth
 * @param {Number} playerid
 * @return {Number} health
 */
function GetPlayerHealth(playerid) {
	return CallNativeGDK("GetPlayerHealth", "iF", playerid);
}

/**
 * SetPlayerArmour
 * @see https://wiki.sa-mp.com/wiki/SetPlayerArmour
 * @param {Number} playerid
 * @param {Number} armour
 * @return {Number} retval
 */
function SetPlayerArmour(playerid, armour) {
	return CallNativeGDK("SetPlayerArmour", "if", playerid, armour);
}

/**
 * GetPlayerArmour
 * @see https://wiki.sa-mp.com/wiki/GetPlayerArmour
 * @param {Number} playerid
 * @return {Number} armour
 */
function GetPlayerArmour(playerid) {
	return CallNativeGDK("GetPlayerArmour", "iF", playerid);
}

/**
 * SetPlayerAmmo
 * @see https://wiki.sa-mp.com/wiki/SetPlayerAmmo
 * @param {Number} playerid
 * @param {Number} weaponslot
 * @param {Number} ammo
 * @return {Number} retval
 */
function SetPlayerAmmo(playerid, weaponslot, ammo) {
	return CallNativeGDK("SetPlayerAmmo", "iii", playerid, weaponslot, ammo);
}

/**
 * GetPlayerAmmo
 * @see https://wiki.sa-mp.com/wiki/GetPlayerAmmo
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerAmmo(playerid) {
	return CallNativeGDK("GetPlayerAmmo", "i", playerid);
}

/**
 * GetPlayerWeaponState
 * @see https://wiki.sa-mp.com/wiki/GetPlayerWeaponState
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerWeaponState(playerid) {
	return CallNativeGDK("GetPlayerWeaponState", "i", playerid);
}

/**
 * GetPlayerTargetPlayer
 * @see https://wiki.sa-mp.com/wiki/GetPlayerTargetPlayer
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerTargetPlayer(playerid) {
	return CallNativeGDK("GetPlayerTargetPlayer", "i", playerid);
}

/**
 * GetPlayerTargetActor
 * @see https://wiki.sa-mp.com/wiki/GetPlayerTargetActor
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerTargetActor(playerid) {
	return CallNativeGDK("GetPlayerTargetActor", "i", playerid);
}

/**
 * SetPlayerTeam
 * @see https://wiki.sa-mp.com/wiki/SetPlayerTeam
 * @param {Number} playerid
 * @param {Number} teamid
 * @return {Number} retval
 */
function SetPlayerTeam(playerid, teamid) {
	return CallNativeGDK("SetPlayerTeam", "ii", playerid, teamid);
}

/**
 * GetPlayerTeam
 * @see https://wiki.sa-mp.com/wiki/GetPlayerTeam
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerTeam(playerid) {
	return CallNativeGDK("GetPlayerTeam", "i", playerid);
}

/**
 * SetPlayerScore
 * @see https://wiki.sa-mp.com/wiki/SetPlayerScore
 * @param {Number} playerid
 * @param {Number} score
 * @return {Number} retval
 */
function SetPlayerScore(playerid, score) {
	return CallNativeGDK("SetPlayerScore", "ii", playerid, score);
}

/**
 * GetPlayerScore
 * @see https://wiki.sa-mp.com/wiki/GetPlayerScore
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerScore(playerid) {
	return CallNativeGDK("GetPlayerScore", "i", playerid);
}

/**
 * GetPlayerDrunkLevel
 * @see https://wiki.sa-mp.com/wiki/GetPlayerDrunkLevel
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerDrunkLevel(playerid) {
	return CallNativeGDK("GetPlayerDrunkLevel", "i", playerid);
}

/**
 * SetPlayerDrunkLevel
 * @see https://wiki.sa-mp.com/wiki/SetPlayerDrunkLevel
 * @param {Number} playerid
 * @param {Number} level
 * @return {Number} retval
 */
function SetPlayerDrunkLevel(playerid, level) {
	return CallNativeGDK("SetPlayerDrunkLevel", "ii", playerid, level);
}

/**
 * SetPlayerColor
 * @see https://wiki.sa-mp.com/wiki/SetPlayerColor
 * @param {Number} playerid
 * @param {Number} color
 * @return {Number} retval
 */
function SetPlayerColor(playerid, color) {
	return CallNativeGDK("SetPlayerColor", "ii", playerid, color);
}

/**
 * GetPlayerColor
 * @see https://wiki.sa-mp.com/wiki/GetPlayerColor
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerColor(playerid) {
	return CallNativeGDK("GetPlayerColor", "i", playerid);
}

/**
 * SetPlayerSkin
 * @see https://wiki.sa-mp.com/wiki/SetPlayerSkin
 * @param {Number} playerid
 * @param {Number} skinid
 * @return {Number} retval
 */
function SetPlayerSkin(playerid, skinid) {
	return CallNativeGDK("SetPlayerSkin", "ii", playerid, skinid);
}

/**
 * GetPlayerSkin
 * @see https://wiki.sa-mp.com/wiki/GetPlayerSkin
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerSkin(playerid) {
	return CallNativeGDK("GetPlayerSkin", "i", playerid);
}

/**
 * GivePlayerWeapon
 * @see https://wiki.sa-mp.com/wiki/GivePlayerWeapon
 * @param {Number} playerid
 * @param {Number} weaponid
 * @param {Number} ammo
 * @return {Number} retval
 */
function GivePlayerWeapon(playerid, weaponid, ammo) {
	return CallNativeGDK("GivePlayerWeapon", "iii", playerid, weaponid, ammo);
}

/**
 * ResetPlayerWeapons
 * @see https://wiki.sa-mp.com/wiki/ResetPlayerWeapons
 * @param {Number} playerid
 * @return {Number} retval
 */
function ResetPlayerWeapons(playerid) {
	return CallNativeGDK("ResetPlayerWeapons", "i", playerid);
}

/**
 * SetPlayerArmedWeapon
 * @see https://wiki.sa-mp.com/wiki/SetPlayerArmedWeapon
 * @param {Number} playerid
 * @param {Number} weaponid
 * @return {Number} retval
 */
function SetPlayerArmedWeapon(playerid, weaponid) {
	return CallNativeGDK("SetPlayerArmedWeapon", "ii", playerid, weaponid);
}

/**
 * GetPlayerWeaponData
 * @see https://wiki.sa-mp.com/wiki/GetPlayerWeaponData
 * @param {Number} playerid
 * @param {Number} slot
 * @return {{weapons: Number, ammo: Number}}
 */
function GetPlayerWeaponData(playerid, slot)
{
	let out = CallNativeGDK("GetPlayerWeaponData", "iiII", playerid, slot);
	return {weapons: out[0], ammo: out[1]};
}

/**
 * GivePlayerMoney
 * @see https://wiki.sa-mp.com/wiki/GivePlayerMoney
 * @param {Number} playerid
 * @param {Number} money
 * @return {Number} retval
 */
function GivePlayerMoney(playerid, money) {
	return CallNativeGDK("GivePlayerMoney", "ii", playerid, money);
}

/**
 * ResetPlayerMoney
 * @see https://wiki.sa-mp.com/wiki/ResetPlayerMoney
 * @param {Number} playerid
 * @return {Number} retval
 */
function ResetPlayerMoney(playerid) {
	return CallNativeGDK("ResetPlayerMoney", "i", playerid);
}

/**
 * SetPlayerName
 * @see https://wiki.sa-mp.com/wiki/SetPlayerName
 * @param {Number} playerid
 * @param {String} name
 * @return {Number} retval
 */
function SetPlayerName(playerid, name) {
	return CallNativeGDK("SetPlayerName", "is", playerid, name);
}

/**
 * GetPlayerMoney
 * @see https://wiki.sa-mp.com/wiki/GetPlayerMoney
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerMoney(playerid) {
	return CallNativeGDK("GetPlayerMoney", "i", playerid);
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
 * GetPlayerIp
 * @see https://wiki.sa-mp.com/wiki/GetPlayerIp
 * @param {Number} playerid
 * @param {Number} [len=256]
 * @return {String} name
 */
function GetPlayerIp(playerid, len)
{
	len = typeof len === 'undefined' ? 256 : len;
	return CallNativeGDK("GetPlayerIp", "iSi", playerid, len);
}

/**
 * GetPlayerPing
 * @see https://wiki.sa-mp.com/wiki/GetPlayerPing
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerPing(playerid) {
	return CallNativeGDK("GetPlayerPing", "i", playerid);
}

/**
 * GetPlayerWeapon
 * @see https://wiki.sa-mp.com/wiki/GetPlayerWeapon
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerWeapon(playerid) {
	return CallNativeGDK("GetPlayerWeapon", "i", playerid);
}

/**
 * GetPlayerKeys
 * @see https://wiki.sa-mp.com/wiki/GetPlayerKeys
 * @param {Number} playerid
 * @return {{keys: Number, updown: Number, leftright: Number}}
 */
function GetPlayerKeys(playerid)
{
	let out = CallNativeGDK("GetPlayerKeys", "iIII", playerid);
	return {keys: out[0], updown: out[1], leftright: out[2]};
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
 * SetPlayerTime
 * @see https://wiki.sa-mp.com/wiki/SetPlayerTime
 * @param {Number} playerid
 * @param {Number} hour
 * @param {Number} minute
 * @return {Number} retval
 */
function SetPlayerTime(playerid, hour, minute) {
	return CallNativeGDK("SetPlayerTime", "iii", playerid, hour, minute);
}

/**
 * GetPlayerTime
 * @see https://wiki.sa-mp.com/wiki/GetPlayerTime
 * @param {Number} playerid
 * @return {{hour: Number, minute: Number}}
 */
function GetPlayerTime(playerid)
{
	let out = CallNativeGDK("GetPlayerTime", "iII", playerid);
	return {hour: out[0], minute: out[1]};
}

/**
 * TogglePlayerClock
 * @see https://wiki.sa-mp.com/wiki/TogglePlayerClock
 * @param {Number} playerid
 * @param {Number} toggle
 * @return {Number} retval
 */
function TogglePlayerClock(playerid, toggle) {
	return CallNativeGDK("TogglePlayerClock", "ii", playerid, toggle);
}

/**
 * SetPlayerWeather
 * @see https://wiki.sa-mp.com/wiki/SetPlayerWeather
 * @param {Number} playerid
 * @param {Number} weather
 * @return {Number} retval
 */
function SetPlayerWeather(playerid, weather) {
	return CallNativeGDK("SetPlayerWeather", "ii", playerid, weather);
}

/**
 * ForceClassSelection
 * @see https://wiki.sa-mp.com/wiki/ForceClassSelection
 * @param {Number} playerid
 * @return {Number} retval
 */
function ForceClassSelection(playerid) {
	return CallNativeGDK("ForceClassSelection", "i", playerid);
}

/**
 * SetPlayerWantedLevel
 * @see https://wiki.sa-mp.com/wiki/SetPlayerWantedLevel
 * @param {Number} playerid
 * @param {Number} level
 * @return {Number} retval
 */
function SetPlayerWantedLevel(playerid, level) {
	return CallNativeGDK("SetPlayerWantedLevel", "ii", playerid, level);
}

/**
 * GetPlayerWantedLevel
 * @see https://wiki.sa-mp.com/wiki/GetPlayerWantedLevel
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerWantedLevel(playerid) {
	return CallNativeGDK("GetPlayerWantedLevel", "i", playerid);
}

/**
 * SetPlayerFightingStyle
 * @see https://wiki.sa-mp.com/wiki/SetPlayerFightingStyle
 * @param {Number} playerid
 * @param {Number} style
 * @return {Number} retval
 */
function SetPlayerFightingStyle(playerid, style) {
	return CallNativeGDK("SetPlayerFightingStyle", "ii", playerid, style);
}

/**
 * GetPlayerFightingStyle
 * @see https://wiki.sa-mp.com/wiki/GetPlayerFightingStyle
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerFightingStyle(playerid) {
	return CallNativeGDK("GetPlayerFightingStyle", "i", playerid);
}

/**
 * SetPlayerVelocity
 * @see https://wiki.sa-mp.com/wiki/SetPlayerVelocity
 * @param {Number} playerid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function SetPlayerVelocity(playerid, x, y, z) {
	return CallNativeGDK("SetPlayerVelocity", "ifff", playerid, x, y, z);
}

/**
 * GetPlayerVelocity
 * @see https://wiki.sa-mp.com/wiki/GetPlayerVelocity
 * @param {Number} playerid
 * @return {{x: Number, y: Number, z: Number}}
 */
function GetPlayerVelocity(playerid)
{
	let out = CallNativeGDK("GetPlayerVelocity", "iFFF", playerid);
	return {x: out[0], y: out[1], z: out[2]};
}

/**
 * PlayCrimeReportForPlayer
 * @see https://wiki.sa-mp.com/wiki/PlayCrimeReportForPlayer
 * @param {Number} playerid
 * @param {Number} suspectid
 * @param {Number} crime
 * @return {Number} retval
 */
function PlayCrimeReportForPlayer(playerid, suspectid, crime) {
	return CallNativeGDK("PlayCrimeReportForPlayer", "iii", playerid, suspectid, crime);
}

/**
 * PlayAudioStreamForPlayer
 * @see https://wiki.sa-mp.com/wiki/PlayAudioStreamForPlayer
 * @param {Number} playerid
 * @param {String} url
 * @param {Number} [posX=0.0]
 * @param {Number} [posY=0.0]
 * @param {Number} [posZ=0.0]
 * @param {Number} [distance=50.0]
 * @param {Number} [usepos=0]
 * @return {Number} retval
 */
function PlayAudioStreamForPlayer(playerid, url, posX, posY, posZ, distance, usepos)
{
	posX = typeof posX === 'undefined' ? 0.0 : posX;
	posY = typeof posY === 'undefined' ? 0.0 : posY;
	posZ = typeof posZ === 'undefined' ? 0.0 : posZ;
	distance = typeof distance === 'undefined' ? 50.0 : distance;
	usepos = typeof usepos === 'undefined' ? 0 : usepos;
	return CallNativeGDK("PlayAudioStreamForPlayer", "isffffi", playerid, url, posX, posY, posZ, distance, usepos);
}

/**
 * StopAudioStreamForPlayer
 * @see https://wiki.sa-mp.com/wiki/StopAudioStreamForPlayer
 * @param {Number} playerid
 * @return {Number} retval
 */
function StopAudioStreamForPlayer(playerid) {
	return CallNativeGDK("StopAudioStreamForPlayer", "i", playerid);
}

/**
 * SetPlayerShopName
 * @see https://wiki.sa-mp.com/wiki/SetPlayerShopName
 * @param {Number} playerid
 * @param {String} shopname
 * @return {Number} retval
 */
function SetPlayerShopName(playerid, shopname) {
	return CallNativeGDK("SetPlayerShopName", "is", playerid, shopname);
}

/**
 * SetPlayerSkillLevel
 * @see https://wiki.sa-mp.com/wiki/SetPlayerSkillLevel
 * @param {Number} playerid
 * @param {Number} skill
 * @param {Number} level
 * @return {Number} retval
 */
function SetPlayerSkillLevel(playerid, skill, level) {
	return CallNativeGDK("SetPlayerSkillLevel", "iii", playerid, skill, level);
}

/**
 * GetPlayerSurfingVehicleID
 * @see https://wiki.sa-mp.com/wiki/GetPlayerSurfingVehicleID
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerSurfingVehicleID(playerid) {
	return CallNativeGDK("GetPlayerSurfingVehicleID", "i", playerid);
}

/**
 * GetPlayerSurfingObjectID
 * @see https://wiki.sa-mp.com/wiki/GetPlayerSurfingObjectID
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerSurfingObjectID(playerid) {
	return CallNativeGDK("GetPlayerSurfingObjectID", "i", playerid);
}

/**
 * RemoveBuildingForPlayer
 * @see https://wiki.sa-mp.com/wiki/RemoveBuildingForPlayer
 * @param {Number} playerid
 * @param {Number} modelid
 * @param {Number} fX
 * @param {Number} fY
 * @param {Number} fZ
 * @param {Number} fRadius
 * @return {Number} retval
 */
function RemoveBuildingForPlayer(playerid, modelid, fX, fY, fZ, fRadius) {
	return CallNativeGDK("RemoveBuildingForPlayer", "iiffff", playerid, modelid, fX, fY, fZ, fRadius);
}

/**
 * GetPlayerLastShotVectors
 * @see https://wiki.sa-mp.com/wiki/GetPlayerLastShotVectors
 * @param {Number} playerid
 * @return {{fOriginX: Number, fOriginY: Number, fOriginZ: Number, fHitPosX: Number, fHitPosY: Number, fHitPosZ: Number}}
 */
function GetPlayerLastShotVectors(playerid)
{
	let out = CallNativeGDK("GetPlayerLastShotVectors", "iFFFFFF", playerid);
	return {fOriginX: out[0], fOriginY: out[1], fOriginZ: out[2], fHitPosX: out[3], fHitPosY: out[4], fHitPosZ: out[5]};
}

/**
 * SetPlayerAttachedObject
 * @see https://wiki.sa-mp.com/wiki/SetPlayerAttachedObject
 * @param {Number} playerid
 * @param {Number} index
 * @param {Number} modelid
 * @param {Number} bone
 * @param {Number} [fOffsetX=0.0]
 * @param {Number} [fOffsetY=0.0]
 * @param {Number} [fOffsetZ=0.0]
 * @param {Number} [fRotX=0.0]
 * @param {Number} [fRotY=0.0]
 * @param {Number} [fRotZ=0.0]
 * @param {Number} [fScaleX=1.0]
 * @param {Number} [fScaleY=1.0]
 * @param {Number} [fScaleZ=1.0]
 * @param {Number} [materialcolor1=0]
 * @param {Number} [materialcolor2=0]
 * @return {Number} retval
 */
function SetPlayerAttachedObject(playerid, index, modelid, bone, fOffsetX, fOffsetY, fOffsetZ, fRotX, fRotY, fRotZ, fScaleX, fScaleY, fScaleZ, materialcolor1, materialcolor2)
{
	fOffsetX = typeof fOffsetX === 'undefined' ? 0.0 : fOffsetX;
	fOffsetY = typeof fOffsetY === 'undefined' ? 0.0 : fOffsetY;
	fOffsetZ = typeof fOffsetZ === 'undefined' ? 0.0 : fOffsetZ;
	fRotX = typeof fRotX === 'undefined' ? 0.0 : fRotX;
	fRotY = typeof fRotY === 'undefined' ? 0.0 : fRotY;
	fRotZ = typeof fRotZ === 'undefined' ? 0.0 : fRotZ;
	fScaleX = typeof fScaleX === 'undefined' ? 1.0 : fScaleX;
	fScaleY = typeof fScaleY === 'undefined' ? 1.0 : fScaleY;
	fScaleZ = typeof fScaleZ === 'undefined' ? 1.0 : fScaleZ;
	materialcolor1 = typeof materialcolor1 === 'undefined' ? 0 : materialcolor1;
	materialcolor2 = typeof materialcolor2 === 'undefined' ? 0 : materialcolor2;
	return CallNativeGDK("SetPlayerAttachedObject", "iiiifffffffffii", playerid, index, modelid, bone, fOffsetX, fOffsetY, fOffsetZ, fRotX, fRotY, fRotZ, fScaleX, fScaleY, fScaleZ, materialcolor1, materialcolor2);
}

/**
 * RemovePlayerAttachedObject
 * @see https://wiki.sa-mp.com/wiki/RemovePlayerAttachedObject
 * @param {Number} playerid
 * @param {Number} index
 * @return {Number} retval
 */
function RemovePlayerAttachedObject(playerid, index) {
	return CallNativeGDK("RemovePlayerAttachedObject", "ii", playerid, index);
}

/**
 * IsPlayerAttachedObjectSlotUsed
 * @see https://wiki.sa-mp.com/wiki/IsPlayerAttachedObjectSlotUsed
 * @param {Number} playerid
 * @param {Number} index
 * @return {Number} retval
 */
function IsPlayerAttachedObjectSlotUsed(playerid, index) {
	return CallNativeGDK("IsPlayerAttachedObjectSlotUsed", "ii", playerid, index);
}

/**
 * EditAttachedObject
 * @see https://wiki.sa-mp.com/wiki/EditAttachedObject
 * @param {Number} playerid
 * @param {Number} index
 * @return {Number} retval
 */
function EditAttachedObject(playerid, index) {
	return CallNativeGDK("EditAttachedObject", "ii", playerid, index);
}

/**
 * CreatePlayerTextDraw
 * @see https://wiki.sa-mp.com/wiki/CreatePlayerTextDraw
 * @param {Number} playerid
 * @param {Number} x
 * @param {Number} y
 * @param {String} text
 * @return {Number} retval
 */
function CreatePlayerTextDraw(playerid, x, y, text) {
	return CallNativeGDK("CreatePlayerTextDraw", "iffs", playerid, x, y, text);
}

/**
 * PlayerTextDrawDestroy
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawDestroy
 * @param {Number} playerid
 * @param {Number} text
 * @return {Number} retval
 */
function PlayerTextDrawDestroy(playerid, text) {
	return CallNativeGDK("PlayerTextDrawDestroy", "ii", playerid, text);
}

/**
 * PlayerTextDrawLetterSize
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawLetterSize
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} x
 * @param {Number} y
 * @return {Number} retval
 */
function PlayerTextDrawLetterSize(playerid, text, x, y) {
	return CallNativeGDK("PlayerTextDrawLetterSize", "iiff", playerid, text, x, y);
}

/**
 * PlayerTextDrawTextSize
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawTextSize
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} x
 * @param {Number} y
 * @return {Number} retval
 */
function PlayerTextDrawTextSize(playerid, text, x, y) {
	return CallNativeGDK("PlayerTextDrawTextSize", "iiff", playerid, text, x, y);
}

/**
 * PlayerTextDrawAlignment
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawAlignment
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} alignment
 * @return {Number} retval
 */
function PlayerTextDrawAlignment(playerid, text, alignment) {
	return CallNativeGDK("PlayerTextDrawAlignment", "iii", playerid, text, alignment);
}

/**
 * PlayerTextDrawColor
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawColor
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} color
 * @return {Number} retval
 */
function PlayerTextDrawColor(playerid, text, color) {
	return CallNativeGDK("PlayerTextDrawColor", "iii", playerid, text, color);
}

/**
 * PlayerTextDrawUseBox
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawUseBox
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} use
 * @return {Number} retval
 */
function PlayerTextDrawUseBox(playerid, text, use) {
	return CallNativeGDK("PlayerTextDrawUseBox", "iii", playerid, text, use);
}

/**
 * PlayerTextDrawBoxColor
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawBoxColor
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} color
 * @return {Number} retval
 */
function PlayerTextDrawBoxColor(playerid, text, color) {
	return CallNativeGDK("PlayerTextDrawBoxColor", "iii", playerid, text, color);
}

/**
 * PlayerTextDrawSetShadow
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawSetShadow
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} size
 * @return {Number} retval
 */
function PlayerTextDrawSetShadow(playerid, text, size) {
	return CallNativeGDK("PlayerTextDrawSetShadow", "iii", playerid, text, size);
}

/**
 * PlayerTextDrawSetOutline
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawSetOutline
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} size
 * @return {Number} retval
 */
function PlayerTextDrawSetOutline(playerid, text, size) {
	return CallNativeGDK("PlayerTextDrawSetOutline", "iii", playerid, text, size);
}

/**
 * PlayerTextDrawBackgroundColor
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawBackgroundColor
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} color
 * @return {Number} retval
 */
function PlayerTextDrawBackgroundColor(playerid, text, color) {
	return CallNativeGDK("PlayerTextDrawBackgroundColor", "iii", playerid, text, color);
}

/**
 * PlayerTextDrawFont
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawFont
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} font
 * @return {Number} retval
 */
function PlayerTextDrawFont(playerid, text, font) {
	return CallNativeGDK("PlayerTextDrawFont", "iii", playerid, text, font);
}

/**
 * PlayerTextDrawSetProportional
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawSetProportional
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} set
 * @return {Number} retval
 */
function PlayerTextDrawSetProportional(playerid, text, set) {
	return CallNativeGDK("PlayerTextDrawSetProportional", "iii", playerid, text, set);
}

/**
 * PlayerTextDrawSetSelectable
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawSetSelectable
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} set
 * @return {Number} retval
 */
function PlayerTextDrawSetSelectable(playerid, text, set) {
	return CallNativeGDK("PlayerTextDrawSetSelectable", "iii", playerid, text, set);
}

/**
 * PlayerTextDrawShow
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawShow
 * @param {Number} playerid
 * @param {Number} text
 * @return {Number} retval
 */
function PlayerTextDrawShow(playerid, text) {
	return CallNativeGDK("PlayerTextDrawShow", "ii", playerid, text);
}

/**
 * PlayerTextDrawHide
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawHide
 * @param {Number} playerid
 * @param {Number} text
 * @return {Number} retval
 */
function PlayerTextDrawHide(playerid, text) {
	return CallNativeGDK("PlayerTextDrawHide", "ii", playerid, text);
}

/**
 * PlayerTextDrawSetString
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawSetString
 * @param {Number} playerid
 * @param {Number} text
 * @param {String} string
 * @return {Number} retval
 */
function PlayerTextDrawSetString(playerid, text, string) {
	return CallNativeGDK("PlayerTextDrawSetString", "iis", playerid, text, string);
}

/**
 * PlayerTextDrawSetPreviewModel
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawSetPreviewModel
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} modelindex
 * @return {Number} retval
 */
function PlayerTextDrawSetPreviewModel(playerid, text, modelindex) {
	return CallNativeGDK("PlayerTextDrawSetPreviewModel", "iii", playerid, text, modelindex);
}

/**
 * PlayerTextDrawSetPreviewRot
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawSetPreviewRot
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} fRotX
 * @param {Number} fRotY
 * @param {Number} fRotZ
 * @param {Number} [fZoom=1.0]
 * @return {Number} retval
 */
function PlayerTextDrawSetPreviewRot(playerid, text, fRotX, fRotY, fRotZ, fZoom)
{
	fZoom = typeof fZoom === 'undefined' ? 1.0 : fZoom;
	return CallNativeGDK("PlayerTextDrawSetPreviewRot", "iiffff", playerid, text, fRotX, fRotY, fRotZ, fZoom);
}

/**
 * PlayerTextDrawSetPreviewVehCol
 * @see https://wiki.sa-mp.com/wiki/PlayerTextDrawSetPreviewVehCol
 * @param {Number} playerid
 * @param {Number} text
 * @param {Number} color1
 * @param {Number} color2
 * @return {Number} retval
 */
function PlayerTextDrawSetPreviewVehCol(playerid, text, color1, color2) {
	return CallNativeGDK("PlayerTextDrawSetPreviewVehCol", "iiii", playerid, text, color1, color2);
}

/**
 * SetPVarInt
 * @see https://wiki.sa-mp.com/wiki/SetPVarInt
 * @param {Number} playerid
 * @param {String} varname
 * @param {Number} int_value
 * @return {Number} retval
 */
function SetPVarInt(playerid, varname, int_value) {
	return CallNativeGDK("SetPVarInt", "isi", playerid, varname, int_value);
}

/**
 * GetPVarInt
 * @see https://wiki.sa-mp.com/wiki/GetPVarInt
 * @param {Number} playerid
 * @param {String} varname
 * @return {Number} retval
 */
function GetPVarInt(playerid, varname) {
	return CallNativeGDK("GetPVarInt", "is", playerid, varname);
}

/**
 * SetPVarString
 * @see https://wiki.sa-mp.com/wiki/SetPVarString
 * @param {Number} playerid
 * @param {String} varname
 * @param {String} string_value
 * @return {Number} retval
 */
function SetPVarString(playerid, varname, string_value) {
	return CallNativeGDK("SetPVarString", "iss", playerid, varname, string_value);
}

/**
 * GetPVarString
 * @see https://wiki.sa-mp.com/wiki/GetPVarString
 * @param {Number} playerid
 * @param {String} varname
 * @param {Number} [len=256]
 * @return {String} string_return
 */
function GetPVarString(playerid, varname, len)
{
	len = typeof len === 'undefined' ? 256 : len;
	return CallNativeGDK("GetPVarString", "isSi", playerid, varname, len);
}

/**
 * SetPVarFloat
 * @see https://wiki.sa-mp.com/wiki/SetPVarFloat
 * @param {Number} playerid
 * @param {String} varname
 * @param {Number} float_value
 * @return {Number} retval
 */
function SetPVarFloat(playerid, varname, float_value) {
	return CallNativeGDK("SetPVarFloat", "isf", playerid, varname, float_value);
}

/**
 * GetPVarFloat
 * @see https://wiki.sa-mp.com/wiki/GetPVarFloat
 * @param {Number} playerid
 * @param {String} varname
 * @return {Number} retval
 */
function GetPVarFloat(playerid, varname) {
	return CallNativeGDK("GetPVarFloat", "is", playerid, varname);
}

/**
 * DeletePVar
 * @see https://wiki.sa-mp.com/wiki/DeletePVar
 * @param {Number} playerid
 * @param {String} varname
 * @return {Number} retval
 */
function DeletePVar(playerid, varname) {
	return CallNativeGDK("DeletePVar", "is", playerid, varname);
}

/**
 * GetPVarsUpperIndex
 * @see https://wiki.sa-mp.com/wiki/GetPVarsUpperIndex
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPVarsUpperIndex(playerid) {
	return CallNativeGDK("GetPVarsUpperIndex", "i", playerid);
}

/**
 * GetPVarNameAtIndex
 * @see https://wiki.sa-mp.com/wiki/GetPVarNameAtIndex
 * @param {Number} playerid
 * @param {Number} index
 * @param {Number} [ret_len=256]
 * @return {String} ret_varname
 */
function GetPVarNameAtIndex(playerid, index, ret_len)
{
	ret_len = typeof ret_len === 'undefined' ? 256 : ret_len;
	return CallNativeGDK("GetPVarNameAtIndex", "iiSi", playerid, index, ret_len);
}

/**
 * GetPVarType
 * @see https://wiki.sa-mp.com/wiki/GetPVarType
 * @param {Number} playerid
 * @param {String} varname
 * @return {Number} retval
 */
function GetPVarType(playerid, varname) {
	return CallNativeGDK("GetPVarType", "is", playerid, varname);
}

/**
 * SetPlayerChatBubble
 * @see https://wiki.sa-mp.com/wiki/SetPlayerChatBubble
 * @param {Number} playerid
 * @param {String} text
 * @param {Number} color
 * @param {Number} drawdistance
 * @param {Number} expiretime
 * @return {Number} retval
 */
function SetPlayerChatBubble(playerid, text, color, drawdistance, expiretime) {
	return CallNativeGDK("SetPlayerChatBubble", "isifi", playerid, text, color, drawdistance, expiretime);
}

/**
 * PutPlayerInVehicle
 * @see https://wiki.sa-mp.com/wiki/PutPlayerInVehicle
 * @param {Number} playerid
 * @param {Number} vehicleid
 * @param {Number} seatid
 * @return {Number} retval
 */
function PutPlayerInVehicle(playerid, vehicleid, seatid) {
	return CallNativeGDK("PutPlayerInVehicle", "iii", playerid, vehicleid, seatid);
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
 * GetPlayerVehicleSeat
 * @see https://wiki.sa-mp.com/wiki/GetPlayerVehicleSeat
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerVehicleSeat(playerid) {
	return CallNativeGDK("GetPlayerVehicleSeat", "i", playerid);
}

/**
 * RemovePlayerFromVehicle
 * @see https://wiki.sa-mp.com/wiki/RemovePlayerFromVehicle
 * @param {Number} playerid
 * @return {Number} retval
 */
function RemovePlayerFromVehicle(playerid) {
	return CallNativeGDK("RemovePlayerFromVehicle", "i", playerid);
}

/**
 * TogglePlayerControllable
 * @see https://wiki.sa-mp.com/wiki/TogglePlayerControllable
 * @param {Number} playerid
 * @param {Number} toggle
 * @return {Number} retval
 */
function TogglePlayerControllable(playerid, toggle) {
	return CallNativeGDK("TogglePlayerControllable", "ii", playerid, toggle);
}

/**
 * PlayerPlaySound
 * @see https://wiki.sa-mp.com/wiki/PlayerPlaySound
 * @param {Number} playerid
 * @param {Number} soundid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function PlayerPlaySound(playerid, soundid, x, y, z) {
	return CallNativeGDK("PlayerPlaySound", "iifff", playerid, soundid, x, y, z);
}

/**
 * ApplyAnimation
 * @see https://wiki.sa-mp.com/wiki/ApplyAnimation
 * @param {Number} playerid
 * @param {String} animlib
 * @param {String} animname
 * @param {Number} fDelta
 * @param {Number} loop
 * @param {Number} lockx
 * @param {Number} locky
 * @param {Number} freeze
 * @param {Number} time
 * @param {Number} [forcesync=0]
 * @return {Number} retval
 */
function ApplyAnimation(playerid, animlib, animname, fDelta, loop, lockx, locky, freeze, time, forcesync)
{
	forcesync = typeof forcesync === 'undefined' ? 0 : forcesync;
	return CallNativeGDK("ApplyAnimation", "issfiiiiii", playerid, animlib, animname, fDelta, loop, lockx, locky, freeze, time, forcesync);
}

/**
 * ClearAnimations
 * @see https://wiki.sa-mp.com/wiki/ClearAnimations
 * @param {Number} playerid
 * @param {Number} [forcesync=0]
 * @return {Number} retval
 */
function ClearAnimations(playerid, forcesync)
{
	forcesync = typeof forcesync === 'undefined' ? 0 : forcesync;
	return CallNativeGDK("ClearAnimations", "ii", playerid, forcesync);
}

/**
 * GetPlayerAnimationIndex
 * @see https://wiki.sa-mp.com/wiki/GetPlayerAnimationIndex
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerAnimationIndex(playerid) {
	return CallNativeGDK("GetPlayerAnimationIndex", "i", playerid);
}

/**
 * GetAnimationName
 * @see https://wiki.sa-mp.com/wiki/GetAnimationName
 * @param {Number} index
 * @param {Number} [len1=256]
 * @param {Number} [len2=256]
 * @return {{animlib: String, animname: String}}
 */
function GetAnimationName(index, len1, len2)
{
	len1 = typeof len1 === 'undefined' ? 256 : len1;
	len2 = typeof len2 === 'undefined' ? 256 : len2;

	let out = CallNativeGDK("GetAnimationName", "iSiSi", index, len1, len2);
	return {animlib: out[0], animname: out[1]};
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
 * SetPlayerSpecialAction
 * @see https://wiki.sa-mp.com/wiki/SetPlayerSpecialAction
 * @param {Number} playerid
 * @param {Number} actionid
 * @return {Number} retval
 */
function SetPlayerSpecialAction(playerid, actionid) {
	return CallNativeGDK("SetPlayerSpecialAction", "ii", playerid, actionid);
}

/**
 * DisableRemoteVehicleCollisions
 * @see https://wiki.sa-mp.com/wiki/DisableRemoteVehicleCollisions
 * @param {Number} playerid
 * @param {Number} disable
 * @return {Number} retval
 */
function DisableRemoteVehicleCollisions(playerid, disable) {
	return CallNativeGDK("DisableRemoteVehicleCollisions", "ii", playerid, disable);
}

/**
 * SetPlayerCheckpoint
 * @see https://wiki.sa-mp.com/wiki/SetPlayerCheckpoint
 * @param {Number} playerid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} size
 * @return {Number} retval
 */
function SetPlayerCheckpoint(playerid, x, y, z, size) {
	return CallNativeGDK("SetPlayerCheckpoint", "iffff", playerid, x, y, z, size);
}

/**
 * DisablePlayerCheckpoint
 * @see https://wiki.sa-mp.com/wiki/DisablePlayerCheckpoint
 * @param {Number} playerid
 * @return {Number} retval
 */
function DisablePlayerCheckpoint(playerid) {
	return CallNativeGDK("DisablePlayerCheckpoint", "i", playerid);
}

/**
 * SetPlayerRaceCheckpoint
 * @see https://wiki.sa-mp.com/wiki/SetPlayerRaceCheckpoint
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
function SetPlayerRaceCheckpoint(playerid, type, x, y, z, nextx, nexty, nextz, size) {
	return CallNativeGDK("SetPlayerRaceCheckpoint", "iifffffff", playerid, type, x, y, z, nextx, nexty, nextz, size);
}

/**
 * DisablePlayerRaceCheckpoint
 * @see https://wiki.sa-mp.com/wiki/DisablePlayerRaceCheckpoint
 * @param {Number} playerid
 * @return {Number} retval
 */
function DisablePlayerRaceCheckpoint(playerid) {
	return CallNativeGDK("DisablePlayerRaceCheckpoint", "i", playerid);
}

/**
 * SetPlayerWorldBounds
 * @see https://wiki.sa-mp.com/wiki/SetPlayerWorldBounds
 * @param {Number} playerid
 * @param {Number} x_max
 * @param {Number} x_min
 * @param {Number} y_max
 * @param {Number} y_min
 * @return {Number} retval
 */
function SetPlayerWorldBounds(playerid, x_max, x_min, y_max, y_min) {
	return CallNativeGDK("SetPlayerWorldBounds", "iffff", playerid, x_max, x_min, y_max, y_min);
}

/**
 * SetPlayerMarkerForPlayer
 * @see https://wiki.sa-mp.com/wiki/SetPlayerMarkerForPlayer
 * @param {Number} playerid
 * @param {Number} showplayerid
 * @param {Number} color
 * @return {Number} retval
 */
function SetPlayerMarkerForPlayer(playerid, showplayerid, color) {
	return CallNativeGDK("SetPlayerMarkerForPlayer", "iii", playerid, showplayerid, color);
}

/**
 * ShowPlayerNameTagForPlayer
 * @see https://wiki.sa-mp.com/wiki/ShowPlayerNameTagForPlayer
 * @param {Number} playerid
 * @param {Number} showplayerid
 * @param {Number} show
 * @return {Number} retval
 */
function ShowPlayerNameTagForPlayer(playerid, showplayerid, show) {
	return CallNativeGDK("ShowPlayerNameTagForPlayer", "iii", playerid, showplayerid, show);
}

/**
 * SetPlayerMapIcon
 * @see https://wiki.sa-mp.com/wiki/SetPlayerMapIcon
 * @param {Number} playerid
 * @param {Number} iconid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} markertype
 * @param {Number} color
 * @param {Number} [style=MAPICON_LOCAL]
 * @return {Number} retval
 */
function SetPlayerMapIcon(playerid, iconid, x, y, z, markertype, color, style)
{
	style = typeof style === 'undefined' ? MAPICON_LOCAL : style;
	return CallNativeGDK("SetPlayerMapIcon", "iifffiii", playerid, iconid, x, y, z, markertype, color, style);
}

/**
 * RemovePlayerMapIcon
 * @see https://wiki.sa-mp.com/wiki/RemovePlayerMapIcon
 * @param {Number} playerid
 * @param {Number} iconid
 * @return {Number} retval
 */
function RemovePlayerMapIcon(playerid, iconid) {
	return CallNativeGDK("RemovePlayerMapIcon", "ii", playerid, iconid);
}

/**
 * AllowPlayerTeleport
 * @see https://wiki.sa-mp.com/wiki/AllowPlayerTeleport
 * @param {Number} playerid
 * @param {Number} allow
 * @return {Number} retval
 */
function AllowPlayerTeleport(playerid, allow) {
	return CallNativeGDK("AllowPlayerTeleport", "ii", playerid, allow);
}

/**
 * SetPlayerCameraPos
 * @see https://wiki.sa-mp.com/wiki/SetPlayerCameraPos
 * @param {Number} playerid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function SetPlayerCameraPos(playerid, x, y, z) {
	return CallNativeGDK("SetPlayerCameraPos", "ifff", playerid, x, y, z);
}

/**
 * SetPlayerCameraLookAt
 * @see https://wiki.sa-mp.com/wiki/SetPlayerCameraLookAt
 * @param {Number} playerid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} [cut=CAMERA_CUT]
 * @return {Number} retval
 */
function SetPlayerCameraLookAt(playerid, x, y, z, cut)
{
	cut = typeof cut === 'undefined' ? CAMERA_CUT : cut;
	return CallNativeGDK("SetPlayerCameraLookAt", "ifffi", playerid, x, y, z, cut);
}

/**
 * SetCameraBehindPlayer
 * @see https://wiki.sa-mp.com/wiki/SetCameraBehindPlayer
 * @param {Number} playerid
 * @return {Number} retval
 */
function SetCameraBehindPlayer(playerid) {
	return CallNativeGDK("SetCameraBehindPlayer", "i", playerid);
}

/**
 * GetPlayerCameraPos
 * @see https://wiki.sa-mp.com/wiki/GetPlayerCameraPos
 * @param {Number} playerid
 * @return {{x: Number, y: Number, z: Number}}
 */
function GetPlayerCameraPos(playerid)
{
	let out = CallNativeGDK("GetPlayerCameraPos", "iFFF", playerid);
	return {x: out[0], y: out[1], z: out[2]};
}

/**
 * GetPlayerCameraFrontVector
 * @see https://wiki.sa-mp.com/wiki/GetPlayerCameraFrontVector
 * @param {Number} playerid
 * @return {{x: Number, y: Number, z: Number}}
 */
function GetPlayerCameraFrontVector(playerid)
{
	let out = CallNativeGDK("GetPlayerCameraFrontVector", "iFFF", playerid);
	return {x: out[0], y: out[1], z: out[2]};
}

/**
 * GetPlayerCameraMode
 * @see https://wiki.sa-mp.com/wiki/GetPlayerCameraMode
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerCameraMode(playerid) {
	return CallNativeGDK("GetPlayerCameraMode", "i", playerid);
}

/**
 * EnablePlayerCameraTarget
 * @see https://wiki.sa-mp.com/wiki/EnablePlayerCameraTarget
 * @param {Number} playerid
 * @param {Number} enable
 * @return {Number} retval
 */
function EnablePlayerCameraTarget(playerid, enable) {
	return CallNativeGDK("EnablePlayerCameraTarget", "ii", playerid, enable);
}

/**
 * GetPlayerCameraTargetObject
 * @see https://wiki.sa-mp.com/wiki/GetPlayerCameraTargetObject
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerCameraTargetObject(playerid) {
	return CallNativeGDK("GetPlayerCameraTargetObject", "i", playerid);
}

/**
 * GetPlayerCameraTargetVehicle
 * @see https://wiki.sa-mp.com/wiki/GetPlayerCameraTargetVehicle
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerCameraTargetVehicle(playerid) {
	return CallNativeGDK("GetPlayerCameraTargetVehicle", "i", playerid);
}

/**
 * GetPlayerCameraTargetPlayer
 * @see https://wiki.sa-mp.com/wiki/GetPlayerCameraTargetPlayer
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerCameraTargetPlayer(playerid) {
	return CallNativeGDK("GetPlayerCameraTargetPlayer", "i", playerid);
}

/**
 * GetPlayerCameraTargetActor
 * @see https://wiki.sa-mp.com/wiki/GetPlayerCameraTargetActor
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerCameraTargetActor(playerid) {
	return CallNativeGDK("GetPlayerCameraTargetActor", "i", playerid);
}

/**
 * GetPlayerCameraAspectRatio
 * @see https://wiki.sa-mp.com/wiki/GetPlayerCameraAspectRatio
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerCameraAspectRatio(playerid) {
	return CallNativeGDK("GetPlayerCameraAspectRatio", "i", playerid);
}

/**
 * GetPlayerCameraZoom
 * @see https://wiki.sa-mp.com/wiki/GetPlayerCameraZoom
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerCameraZoom(playerid) {
	return CallNativeGDK("GetPlayerCameraZoom", "i", playerid);
}

/**
 * AttachCameraToObject
 * @see https://wiki.sa-mp.com/wiki/AttachCameraToObject
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {Number} retval
 */
function AttachCameraToObject(playerid, objectid) {
	return CallNativeGDK("AttachCameraToObject", "ii", playerid, objectid);
}

/**
 * AttachCameraToPlayerObject
 * @see https://wiki.sa-mp.com/wiki/AttachCameraToPlayerObject
 * @param {Number} playerid
 * @param {Number} playerobjectid
 * @return {Number} retval
 */
function AttachCameraToPlayerObject(playerid, playerobjectid) {
	return CallNativeGDK("AttachCameraToPlayerObject", "ii", playerid, playerobjectid);
}

/**
 * InterpolateCameraPos
 * @see https://wiki.sa-mp.com/wiki/InterpolateCameraPos
 * @param {Number} playerid
 * @param {Number} FromX
 * @param {Number} FromY
 * @param {Number} FromZ
 * @param {Number} ToX
 * @param {Number} ToY
 * @param {Number} ToZ
 * @param {Number} time
 * @param {Number} [cut=CAMERA_CUT]
 * @return {Number} retval
 */
function InterpolateCameraPos(playerid, FromX, FromY, FromZ, ToX, ToY, ToZ, time, cut)
{
	cut = typeof cut === 'undefined' ? CAMERA_CUT : cut;
	return CallNativeGDK("InterpolateCameraPos", "iffffffii", playerid, FromX, FromY, FromZ, ToX, ToY, ToZ, time, cut);
}

/**
 * InterpolateCameraLookAt
 * @see https://wiki.sa-mp.com/wiki/InterpolateCameraLookAt
 * @param {Number} playerid
 * @param {Number} FromX
 * @param {Number} FromY
 * @param {Number} FromZ
 * @param {Number} ToX
 * @param {Number} ToY
 * @param {Number} ToZ
 * @param {Number} time
 * @param {Number} [cut=CAMERA_CUT]
 * @return {Number} retval
 */
function InterpolateCameraLookAt(playerid, FromX, FromY, FromZ, ToX, ToY, ToZ, time, cut)
{
	cut = typeof cut === 'undefined' ? CAMERA_CUT : cut;
	return CallNativeGDK("InterpolateCameraLookAt", "iffffffii", playerid, FromX, FromY, FromZ, ToX, ToY, ToZ, time, cut);
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
 * IsPlayerInVehicle
 * @see https://wiki.sa-mp.com/wiki/IsPlayerInVehicle
 * @param {Number} playerid
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function IsPlayerInVehicle(playerid, vehicleid) {
	return CallNativeGDK("IsPlayerInVehicle", "ii", playerid, vehicleid);
}

/**
 * IsPlayerInAnyVehicle
 * @see https://wiki.sa-mp.com/wiki/IsPlayerInAnyVehicle
 * @param {Number} playerid
 * @return {Number} retval
 */
function IsPlayerInAnyVehicle(playerid) {
	return CallNativeGDK("IsPlayerInAnyVehicle", "i", playerid);
}

/**
 * IsPlayerInCheckpoint
 * @see https://wiki.sa-mp.com/wiki/IsPlayerInCheckpoint
 * @param {Number} playerid
 * @return {Number} retval
 */
function IsPlayerInCheckpoint(playerid) {
	return CallNativeGDK("IsPlayerInCheckpoint", "i", playerid);
}

/**
 * IsPlayerInRaceCheckpoint
 * @see https://wiki.sa-mp.com/wiki/IsPlayerInRaceCheckpoint
 * @param {Number} playerid
 * @return {Number} retval
 */
function IsPlayerInRaceCheckpoint(playerid) {
	return CallNativeGDK("IsPlayerInRaceCheckpoint", "i", playerid);
}

/**
 * SetPlayerVirtualWorld
 * @see https://wiki.sa-mp.com/wiki/SetPlayerVirtualWorld
 * @param {Number} playerid
 * @param {Number} worldid
 * @return {Number} retval
 */
function SetPlayerVirtualWorld(playerid, worldid) {
	return CallNativeGDK("SetPlayerVirtualWorld", "ii", playerid, worldid);
}

/**
 * GetPlayerVirtualWorld
 * @see https://wiki.sa-mp.com/wiki/GetPlayerVirtualWorld
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerVirtualWorld(playerid) {
	return CallNativeGDK("GetPlayerVirtualWorld", "i", playerid);
}

/**
 * EnableStuntBonusForPlayer
 * @see https://wiki.sa-mp.com/wiki/EnableStuntBonusForPlayer
 * @param {Number} playerid
 * @param {Number} enable
 * @return {Number} retval
 */
function EnableStuntBonusForPlayer(playerid, enable) {
	return CallNativeGDK("EnableStuntBonusForPlayer", "ii", playerid, enable);
}

/**
 * EnableStuntBonusForAll
 * @see https://wiki.sa-mp.com/wiki/EnableStuntBonusForAll
 * @param {Number} enable
 * @return {Number} retval
 */
function EnableStuntBonusForAll(enable) {
	return CallNativeGDK("EnableStuntBonusForAll", "i", enable);
}

/**
 * TogglePlayerSpectating
 * @see https://wiki.sa-mp.com/wiki/TogglePlayerSpectating
 * @param {Number} playerid
 * @param {Number} toggle
 * @return {Number} retval
 */
function TogglePlayerSpectating(playerid, toggle) {
	return CallNativeGDK("TogglePlayerSpectating", "ii", playerid, toggle);
}

/**
 * PlayerSpectatePlayer
 * @see https://wiki.sa-mp.com/wiki/PlayerSpectatePlayer
 * @param {Number} playerid
 * @param {Number} targetplayerid
 * @param {Number} [mode=SPECTATE_MODE_NORMAL]
 * @return {Number} retval
 */
function PlayerSpectatePlayer(playerid, targetplayerid, mode)
{
	mode = typeof mode === 'undefined' ? SPECTATE_MODE_NORMAL : mode;
	return CallNativeGDK("PlayerSpectatePlayer", "iii", playerid, targetplayerid, mode);
}

/**
 * PlayerSpectateVehicle
 * @see https://wiki.sa-mp.com/wiki/PlayerSpectateVehicle
 * @param {Number} playerid
 * @param {Number} targetvehicleid
 * @param {Number} [mode=SPECTATE_MODE_NORMAL]
 * @return {Number} retval
 */
function PlayerSpectateVehicle(playerid, targetvehicleid, mode)
{
	mode = typeof mode === 'undefined' ? SPECTATE_MODE_NORMAL : mode;
	return CallNativeGDK("PlayerSpectateVehicle", "iii", playerid, targetvehicleid, mode);
}

/**
 * StartRecordingPlayerData
 * @see https://wiki.sa-mp.com/wiki/StartRecordingPlayerData
 * @param {Number} playerid
 * @param {Number} recordtype
 * @param {String} recordname
 * @return {Number} retval
 */
function StartRecordingPlayerData(playerid, recordtype, recordname) {
	return CallNativeGDK("StartRecordingPlayerData", "iis", playerid, recordtype, recordname);
}

/**
 * StopRecordingPlayerData
 * @see https://wiki.sa-mp.com/wiki/StopRecordingPlayerData
 * @param {Number} playerid
 * @return {Number} retval
 */
function StopRecordingPlayerData(playerid) {
	return CallNativeGDK("StopRecordingPlayerData", "i", playerid);
}

/**
 * SelectTextDraw
 * @see https://wiki.sa-mp.com/wiki/SelectTextDraw
 * @param {Number} playerid
 * @param {Number} hovercolor
 * @return {Number} retval
 */
function SelectTextDraw(playerid, hovercolor) {
	return CallNativeGDK("SelectTextDraw", "ii", playerid, hovercolor);
}

/**
 * CancelSelectTextDraw
 * @see https://wiki.sa-mp.com/wiki/CancelSelectTextDraw
 * @param {Number} playerid
 * @return {Number} retval
 */
function CancelSelectTextDraw(playerid) {
	return CallNativeGDK("CancelSelectTextDraw", "i", playerid);
}

/**
 * CreateExplosionForPlayer
 * @see https://wiki.sa-mp.com/wiki/CreateExplosionForPlayer
 * @param {Number} playerid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} type
 * @param {Number} radius
 * @return {Number} retval
 */
function CreateExplosionForPlayer(playerid, x, y, z, type, radius) {
	return CallNativeGDK("CreateExplosionForPlayer", "ifffif", playerid, x, y, z, type, radius);
}
