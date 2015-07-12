/**
 * CreateActor
 * @see https://wiki.sa-mp.com/wiki/CreateActor
 * @param {Number} modelid
 * @param {Number} X
 * @param {Number} Y
 * @param {Number} Z
 * @param {Number} Rotation
 * @return {Number} retval
 */
function CreateActor( modelid, X, Y, Z, Rotation ){
	var out = CallNativeGDK( "CreateActor", "iffff", modelid, X, Y, Z, Rotation );
	return out;
}
/**
 * DestroyActor
 * @see https://wiki.sa-mp.com/wiki/DestroyActor
 * @param {Number} actorid
 * @return {Number} retval
 */
function DestroyActor( actorid ){
	var out = CallNativeGDK( "DestroyActor", "i", actorid );
	return out;
}
/**
 * IsActorStreamedIn
 * @see https://wiki.sa-mp.com/wiki/IsActorStreamedIn
 * @param {Number} actorid
 * @param {Number} forplayerid
 * @return {Number} retval
 */
function IsActorStreamedIn( actorid, forplayerid ){
	var out = CallNativeGDK( "IsActorStreamedIn", "ii", actorid, forplayerid );
	return out;
}
/**
 * SetActorVirtualWorld
 * @see https://wiki.sa-mp.com/wiki/SetActorVirtualWorld
 * @param {Number} actorid
 * @param {Number} vworld
 * @return {Number} retval
 */
function SetActorVirtualWorld( actorid, vworld ){
	var out = CallNativeGDK( "SetActorVirtualWorld", "ii", actorid, vworld );
	return out;
}
/**
 * GetActorVirtualWorld
 * @see https://wiki.sa-mp.com/wiki/GetActorVirtualWorld
 * @param {Number} actorid
 * @return {Number} retval
 */
function GetActorVirtualWorld( actorid ){
	var out = CallNativeGDK( "GetActorVirtualWorld", "i", actorid );
	return out;
}
/**
 * ApplyActorAnimation
 * @see https://wiki.sa-mp.com/wiki/ApplyActorAnimation
 * @param {Number} actorid
 * @param {String} animlib
 * @param {String} animname
 * @param {Number} fDelta
 * @param {Number} loop
 * @param {Number} lockx
 * @param {Number} locky
 * @param {Number} freeze
 * @param {Number} time
 * @return {Number} retval
 */
function ApplyActorAnimation( actorid, animlib, animname, fDelta, loop, lockx, locky, freeze, time ){
	var out = CallNativeGDK( "ApplyActorAnimation", "issfiiiii", actorid, animlib, animname, fDelta, loop, lockx, locky, freeze, time );
	return out;
}
/**
 * ClearActorAnimations
 * @see https://wiki.sa-mp.com/wiki/ClearActorAnimations
 * @param {Number} actorid
 * @return {Number} retval
 */
function ClearActorAnimations( actorid ){
	var out = CallNativeGDK( "ClearActorAnimations", "i", actorid );
	return out;
}
/**
 * SetActorPos
 * @see https://wiki.sa-mp.com/wiki/SetActorPos
 * @param {Number} actorid
 * @param {Number} X
 * @param {Number} Y
 * @param {Number} Z
 * @return {Number} retval
 */
function SetActorPos( actorid, X, Y, Z ){
	var out = CallNativeGDK( "SetActorPos", "ifff", actorid, X, Y, Z );
	return out;
}
/**
 * GetActorPos
 * @see https://wiki.sa-mp.com/wiki/GetActorPos
 * @param {Number} actorid
 * @return {{ x: Number,  y: Number,  z: Number }}
 */
function GetActorPos( actorid ){
	var out = CallNativeGDK( "GetActorPos", "iFFF", actorid, [ "x", "y", "z" ] );
	return {X: out[0],Y: out[1],Z: out[2]};
}
/**
 * SetActorFacingAngle
 * @see https://wiki.sa-mp.com/wiki/SetActorFacingAngle
 * @param {Number} actorid
 * @param {Number} ang
 * @return {Number} retval
 */
function SetActorFacingAngle( actorid, ang ){
	var out = CallNativeGDK( "SetActorFacingAngle", "if", actorid, ang );
	return out;
}
/**
 * GetActorFacingAngle
 * @see https://wiki.sa-mp.com/wiki/GetActorFacingAngle
 * @param {Number} actorid
 * @return {Number} ang
 */
function GetActorFacingAngle( actorid ){
	var out = CallNativeGDK( "GetActorFacingAngle", "iF", actorid );
	return out;
}
/**
 * SetActorHealth
 * @see https://wiki.sa-mp.com/wiki/SetActorHealth
 * @param {Number} actorid
 * @param {Number} health
 * @return {Number} retval
 */
function SetActorHealth( actorid, health ){
	var out = CallNativeGDK( "SetActorHealth", "if", actorid, health );
	return out;
}
/**
 * GetActorHealth
 * @see https://wiki.sa-mp.com/wiki/GetActorHealth
 * @param {Number} actorid
 * @return {Number} health
 */
function GetActorHealth( actorid ){
	var out = CallNativeGDK( "GetActorHealth", "iF", actorid );
	return out;
}
/**
 * SetActorInvulnerable
 * @see https://wiki.sa-mp.com/wiki/SetActorInvulnerable
 * @param {Number} actorid
 * @param {Number} invulnerable
 * @return {Number} retval
 */
function SetActorInvulnerable( actorid, invulnerable ){
	invulnerable = typeof invulnerable !== 'undefined' ? invulnerable : true;
	var out = CallNativeGDK( "SetActorInvulnerable", "ii", actorid, invulnerable );
	return out;
}
/**
 * IsActorInvulnerable
 * @see https://wiki.sa-mp.com/wiki/IsActorInvulnerable
 * @param {Number} actorid
 * @return {Number} retval
 */
function IsActorInvulnerable( actorid ){
	var out = CallNativeGDK( "IsActorInvulnerable", "i", actorid );
	return out;
}
/**
 * IsValidActor
 * @see https://wiki.sa-mp.com/wiki/IsValidActor
 * @param {Number} actorid
 * @return {Number} retval
 */
function IsValidActor( actorid ){
	var out = CallNativeGDK( "IsValidActor", "i", actorid );
	return out;
}
