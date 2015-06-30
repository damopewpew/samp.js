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
	return CallNative( "CreateActor", "iffff", modelid, X, Y, Z, Rotation );
}
/**
 * DestroyActor
 * @see https://wiki.sa-mp.com/wiki/DestroyActor
 * @param {Number} actorid
 * @return {Number} retval
 */
function DestroyActor( actorid ){
	return CallNative( "DestroyActor", "i", actorid );
}
/**
 * IsActorStreamedIn
 * @see https://wiki.sa-mp.com/wiki/IsActorStreamedIn
 * @param {Number} actorid
 * @param {Number} forplayerid
 * @return {Number} retval
 */
function IsActorStreamedIn( actorid, forplayerid ){
	return CallNative( "IsActorStreamedIn", "ii", actorid, forplayerid );
}
/**
 * SetActorVirtualWorld
 * @see https://wiki.sa-mp.com/wiki/SetActorVirtualWorld
 * @param {Number} actorid
 * @param {Number} vworld
 * @return {Number} retval
 */
function SetActorVirtualWorld( actorid, vworld ){
	return CallNative( "SetActorVirtualWorld", "ii", actorid, vworld );
}
/**
 * GetActorVirtualWorld
 * @see https://wiki.sa-mp.com/wiki/GetActorVirtualWorld
 * @param {Number} actorid
 * @return {Number} retval
 */
function GetActorVirtualWorld( actorid ){
	return CallNative( "GetActorVirtualWorld", "i", actorid );
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
	return CallNative( "ApplyActorAnimation", "issfiiiii", actorid, animlib, animname, fDelta, loop, lockx, locky, freeze, time );
}
/**
 * ClearActorAnimations
 * @see https://wiki.sa-mp.com/wiki/ClearActorAnimations
 * @param {Number} actorid
 * @return {Number} retval
 */
function ClearActorAnimations( actorid ){
	return CallNative( "ClearActorAnimations", "i", actorid );
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
	return CallNative( "SetActorPos", "ifff", actorid, X, Y, Z );
}
/**
 * GetActorPos
 * @see https://wiki.sa-mp.com/wiki/GetActorPos
 * @param {Number} actorid
 * @return {{ x: Number,  y: Number,  z: Number }}
 */
function GetActorPos( actorid ){
	return CallNative( "GetActorPos", "iFFF", actorid, [ "x", "y", "z" ] );
}
/**
 * SetActorFacingAngle
 * @see https://wiki.sa-mp.com/wiki/SetActorFacingAngle
 * @param {Number} actorid
 * @param {Number} ang
 * @return {Number} retval
 */
function SetActorFacingAngle( actorid, ang ){
	return CallNative( "SetActorFacingAngle", "if", actorid, ang );
}
/**
 * GetActorFacingAngle
 * @see https://wiki.sa-mp.com/wiki/GetActorFacingAngle
 * @param {Number} actorid
 * @return {Number} ang
 */
function GetActorFacingAngle( actorid ){
	return CallNative( "GetActorFacingAngle", "iF", actorid );
}
/**
 * SetActorHealth
 * @see https://wiki.sa-mp.com/wiki/SetActorHealth
 * @param {Number} actorid
 * @param {Number} health
 * @return {Number} retval
 */
function SetActorHealth( actorid, health ){
	return CallNative( "SetActorHealth", "if", actorid, health );
}
/**
 * GetActorHealth
 * @see https://wiki.sa-mp.com/wiki/GetActorHealth
 * @param {Number} actorid
 * @return {Number} health
 */
function GetActorHealth( actorid ){
	return CallNative( "GetActorHealth", "iF", actorid );
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
	return CallNative( "SetActorInvulnerable", "ii", actorid, invulnerable );
}
/**
 * IsActorInvulnerable
 * @see https://wiki.sa-mp.com/wiki/IsActorInvulnerable
 * @param {Number} actorid
 * @return {Number} retval
 */
function IsActorInvulnerable( actorid ){
	return CallNative( "IsActorInvulnerable", "i", actorid );
}
/**
 * IsValidActor
 * @see https://wiki.sa-mp.com/wiki/IsValidActor
 * @param {Number} actorid
 * @return {Number} retval
 */
function IsValidActor( actorid ){
	return CallNative( "IsValidActor", "i", actorid );
}
