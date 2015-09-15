/**
 * CreateActor
 * @see https://wiki.sa-mp.com/wiki/CreateActor
 * @param {Number} modelid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} rotation
 * @return {Number} retval
 */
function CreateActor(modelid, x, y, z, rotation) {
	return CallNativeGDK("CreateActor", "iffff", modelid, x, y, z, rotation);
}

/**
 * DestroyActor
 * @see https://wiki.sa-mp.com/wiki/DestroyActor
 * @param {Number} actorid
 * @return {Number} retval
 */
function DestroyActor(actorid) {
	return CallNativeGDK("DestroyActor", "i", actorid);
}

/**
 * IsActorStreamedIn
 * @see https://wiki.sa-mp.com/wiki/IsActorStreamedIn
 * @param {Number} actorid
 * @param {Number} forplayerid
 * @return {Number} retval
 */
function IsActorStreamedIn(actorid, forplayerid) {
	return CallNativeGDK("IsActorStreamedIn", "ii", actorid, forplayerid);
}

/**
 * SetActorVirtualWorld
 * @see https://wiki.sa-mp.com/wiki/SetActorVirtualWorld
 * @param {Number} actorid
 * @param {Number} vworld
 * @return {Number} retval
 */
function SetActorVirtualWorld(actorid, vworld) {
	return CallNativeGDK("SetActorVirtualWorld", "ii", actorid, vworld);
}

/**
 * GetActorVirtualWorld
 * @see https://wiki.sa-mp.com/wiki/GetActorVirtualWorld
 * @param {Number} actorid
 * @return {Number} retval
 */
function GetActorVirtualWorld(actorid) {
	return CallNativeGDK("GetActorVirtualWorld", "i", actorid);
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
function ApplyActorAnimation(actorid, animlib, animname, fDelta, loop, lockx, locky, freeze, time) {
	return CallNativeGDK("ApplyActorAnimation", "issfiiiii", actorid, animlib, animname, fDelta, loop, lockx, locky, freeze, time);
}

/**
 * ClearActorAnimations
 * @see https://wiki.sa-mp.com/wiki/ClearActorAnimations
 * @param {Number} actorid
 * @return {Number} retval
 */
function ClearActorAnimations(actorid) {
	return CallNativeGDK("ClearActorAnimations", "i", actorid);
}

/**
 * SetActorPos
 * @see https://wiki.sa-mp.com/wiki/SetActorPos
 * @param {Number} actorid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function SetActorPos(actorid, x, y, z) {
	return CallNativeGDK("SetActorPos", "ifff", actorid, x, y, z);
}

/**
 * GetActorPos
 * @see https://wiki.sa-mp.com/wiki/GetActorPos
 * @param {Number} actorid
 * @return {{x: Number, y: Number, z: Number}}
 */
function GetActorPos(actorid)
{
	let out = CallNativeGDK("GetActorPos", "iFFF", actorid);
	return {x: out[0], y: out[1], z: out[2]};
}

/**
 * SetActorFacingAngle
 * @see https://wiki.sa-mp.com/wiki/SetActorFacingAngle
 * @param {Number} actorid
 * @param {Number} ang
 * @return {Number} retval
 */
function SetActorFacingAngle(actorid, ang) {
	return CallNativeGDK("SetActorFacingAngle", "if", actorid, ang);
}

/**
 * GetActorFacingAngle
 * @see https://wiki.sa-mp.com/wiki/GetActorFacingAngle
 * @param {Number} actorid
 * @return {Number} ang
 */
function GetActorFacingAngle(actorid) {
	return CallNativeGDK("GetActorFacingAngle", "iF", actorid);
}

/**
 * SetActorHealth
 * @see https://wiki.sa-mp.com/wiki/SetActorHealth
 * @param {Number} actorid
 * @param {Number} health
 * @return {Number} retval
 */
function SetActorHealth(actorid, health) {
	return CallNativeGDK("SetActorHealth", "if", actorid, health);
}

/**
 * GetActorHealth
 * @see https://wiki.sa-mp.com/wiki/GetActorHealth
 * @param {Number} actorid
 * @return {Number} health
 */
function GetActorHealth(actorid) {
	return CallNativeGDK("GetActorHealth", "iF", actorid);
}

/**
 * SetActorInvulnerable
 * @see https://wiki.sa-mp.com/wiki/SetActorInvulnerable
 * @param {Number} actorid
 * @param {Number} [invulnerable=true]
 * @return {Number} retval
 */
function SetActorInvulnerable(actorid, invulnerable)
{
	invulnerable = typeof invulnerable === 'undefined' ? true : invulnerable;
	return CallNativeGDK("SetActorInvulnerable", "ii", actorid, invulnerable);
}

/**
 * IsActorInvulnerable
 * @see https://wiki.sa-mp.com/wiki/IsActorInvulnerable
 * @param {Number} actorid
 * @return {Number} retval
 */
function IsActorInvulnerable(actorid) {
	return CallNativeGDK("IsActorInvulnerable", "i", actorid);
}

/**
 * IsValidActor
 * @see https://wiki.sa-mp.com/wiki/IsValidActor
 * @param {Number} actorid
 * @return {Number} retval
 */
function IsValidActor(actorid) {
	return CallNativeGDK("IsValidActor", "i", actorid);
}
