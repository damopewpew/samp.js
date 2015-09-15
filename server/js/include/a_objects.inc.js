const OBJECT_MATERIAL_SIZE_32x32 = 10;
const OBJECT_MATERIAL_SIZE_64x32 = 20;
const OBJECT_MATERIAL_SIZE_64x64 = 30;
const OBJECT_MATERIAL_SIZE_128x32 = 40;
const OBJECT_MATERIAL_SIZE_128x64 = 50;
const OBJECT_MATERIAL_SIZE_128x128 = 60;
const OBJECT_MATERIAL_SIZE_256x32 = 70;
const OBJECT_MATERIAL_SIZE_256x64 = 80;
const OBJECT_MATERIAL_SIZE_256x128 = 90;
const OBJECT_MATERIAL_SIZE_256x256 = 100;
const OBJECT_MATERIAL_SIZE_512x64 = 110;
const OBJECT_MATERIAL_SIZE_512x128 = 120;
const OBJECT_MATERIAL_SIZE_512x256 = 130;
const OBJECT_MATERIAL_SIZE_512x512 = 140;
const OBJECT_MATERIAL_TEXT_ALIGN_LEFT = 0;
const OBJECT_MATERIAL_TEXT_ALIGN_CENTER = 1;
const OBJECT_MATERIAL_TEXT_ALIGN_RIGHT = 2;

/**
 * CreateObject
 * @see https://wiki.sa-mp.com/wiki/CreateObject
 * @param {Number} modelid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} rX
 * @param {Number} rY
 * @param {Number} rZ
 * @param {Number} [drawDistance=0.0]
 * @return {Number} retval
 */
function CreateObject(modelid, x, y, z, rX, rY, rZ, drawDistance)
{
	drawDistance = typeof drawDistance === 'undefined' ? 0.0 : drawDistance;
	return CallNativeGDK("CreateObject", "ifffffff", modelid, x, y, z, rX, rY, rZ, drawDistance);
}

/**
 * AttachObjectToVehicle
 * @see https://wiki.sa-mp.com/wiki/AttachObjectToVehicle
 * @param {Number} objectid
 * @param {Number} vehicleid
 * @param {Number} OffsetX
 * @param {Number} OffsetY
 * @param {Number} OffsetZ
 * @param {Number} RotX
 * @param {Number} RotY
 * @param {Number} RotZ
 * @return {Number} retval
 */
function AttachObjectToVehicle(objectid, vehicleid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ) {
	return CallNativeGDK("AttachObjectToVehicle", "iiffffff", objectid, vehicleid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ);
}

/**
 * AttachObjectToObject
 * @see https://wiki.sa-mp.com/wiki/AttachObjectToObject
 * @param {Number} objectid
 * @param {Number} attachtoid
 * @param {Number} OffsetX
 * @param {Number} OffsetY
 * @param {Number} OffsetZ
 * @param {Number} RotX
 * @param {Number} RotY
 * @param {Number} RotZ
 * @param {Number} [syncRotation=1]
 * @return {Number} retval
 */
function AttachObjectToObject(objectid, attachtoid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ, syncRotation)
{
	syncRotation = typeof syncRotation === 'undefined' ? 1 : syncRotation;
	return CallNativeGDK("AttachObjectToObject", "iiffffffi", objectid, attachtoid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ, syncRotation);
}

/**
 * AttachObjectToPlayer
 * @see https://wiki.sa-mp.com/wiki/AttachObjectToPlayer
 * @param {Number} objectid
 * @param {Number} playerid
 * @param {Number} OffsetX
 * @param {Number} OffsetY
 * @param {Number} OffsetZ
 * @param {Number} RotX
 * @param {Number} RotY
 * @param {Number} RotZ
 * @return {Number} retval
 */
function AttachObjectToPlayer(objectid, playerid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ) {
	return CallNativeGDK("AttachObjectToPlayer", "iiffffff", objectid, playerid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ);
}

/**
 * SetObjectPos
 * @see https://wiki.sa-mp.com/wiki/SetObjectPos
 * @param {Number} objectid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function SetObjectPos(objectid, x, y, z) {
	return CallNativeGDK("SetObjectPos", "ifff", objectid, x, y, z);
}

/**
 * GetObjectPos
 * @see https://wiki.sa-mp.com/wiki/GetObjectPos
 * @param {Number} objectid
 * @return {{x: Number, y: Number, z: Number}}
 */
function GetObjectPos(objectid)
{
	let out = CallNativeGDK("GetObjectPos", "iFFF", objectid);
	return {x: out[0], y: out[1], z: out[2]};
}

/**
 * SetObjectRot
 * @see https://wiki.sa-mp.com/wiki/SetObjectRot
 * @param {Number} objectid
 * @param {Number} RotX
 * @param {Number} RotY
 * @param {Number} RotZ
 * @return {Number} retval
 */
function SetObjectRot(objectid, RotX, RotY, RotZ) {
	return CallNativeGDK("SetObjectRot", "ifff", objectid, RotX, RotY, RotZ);
}

/**
 * GetObjectRot
 * @see https://wiki.sa-mp.com/wiki/GetObjectRot
 * @param {Number} objectid
 * @return {{RotX: Number, RotY: Number, RotZ: Number}}
 */
function GetObjectRot(objectid)
{
	let out = CallNativeGDK("GetObjectRot", "iFFF", objectid);
	return {RotX: out[0], RotY: out[1], RotZ: out[2]};
}

/**
 * GetObjectModel
 * @see https://wiki.sa-mp.com/wiki/GetObjectModel
 * @param {Number} objectid
 * @return {Number} retval
 */
function GetObjectModel(objectid) {
	return CallNativeGDK("GetObjectModel", "i", objectid);
}

/**
 * SetObjectNoCameraCol
 * @see https://wiki.sa-mp.com/wiki/SetObjectNoCameraCol
 * @param {Number} objectid
 * @return {Number} retval
 */
function SetObjectNoCameraCol(objectid) {
	return CallNativeGDK("SetObjectNoCameraCol", "i", objectid);
}

/**
 * IsValidObject
 * @see https://wiki.sa-mp.com/wiki/IsValidObject
 * @param {Number} objectid
 * @return {Number} retval
 */
function IsValidObject(objectid) {
	return CallNativeGDK("IsValidObject", "i", objectid);
}

/**
 * DestroyObject
 * @see https://wiki.sa-mp.com/wiki/DestroyObject
 * @param {Number} objectid
 * @return {Number} retval
 */
function DestroyObject(objectid) {
	return CallNativeGDK("DestroyObject", "i", objectid);
}

/**
 * MoveObject
 * @see https://wiki.sa-mp.com/wiki/MoveObject
 * @param {Number} objectid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} speed
 * @param {Number} [RotX=-1000.0]
 * @param {Number} [RotY=-1000.0]
 * @param {Number} [RotZ=-1000.0]
 * @return {Number} retval
 */
function MoveObject(objectid, x, y, z, speed, RotX, RotY, RotZ)
{
	RotX = typeof RotX === 'undefined' ? -1000.0 : RotX;
	RotY = typeof RotY === 'undefined' ? -1000.0 : RotY;
	RotZ = typeof RotZ === 'undefined' ? -1000.0 : RotZ;
	return CallNativeGDK("MoveObject", "ifffffff", objectid, x, y, z, speed, RotX, RotY, RotZ);
}

/**
 * StopObject
 * @see https://wiki.sa-mp.com/wiki/StopObject
 * @param {Number} objectid
 * @return {Number} retval
 */
function StopObject(objectid) {
	return CallNativeGDK("StopObject", "i", objectid);
}

/**
 * IsObjectMoving
 * @see https://wiki.sa-mp.com/wiki/IsObjectMoving
 * @param {Number} objectid
 * @return {Number} retval
 */
function IsObjectMoving(objectid) {
	return CallNativeGDK("IsObjectMoving", "i", objectid);
}

/**
 * EditObject
 * @see https://wiki.sa-mp.com/wiki/EditObject
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {Number} retval
 */
function EditObject(playerid, objectid) {
	return CallNativeGDK("EditObject", "ii", playerid, objectid);
}

/**
 * EditPlayerObject
 * @see https://wiki.sa-mp.com/wiki/EditPlayerObject
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {Number} retval
 */
function EditPlayerObject(playerid, objectid) {
	return CallNativeGDK("EditPlayerObject", "ii", playerid, objectid);
}

/**
 * SelectObject
 * @see https://wiki.sa-mp.com/wiki/SelectObject
 * @param {Number} playerid
 * @return {Number} retval
 */
function SelectObject(playerid) {
	return CallNativeGDK("SelectObject", "i", playerid);
}

/**
 * CancelEdit
 * @see https://wiki.sa-mp.com/wiki/CancelEdit
 * @param {Number} playerid
 * @return {Number} retval
 */
function CancelEdit(playerid) {
	return CallNativeGDK("CancelEdit", "i", playerid);
}

/**
 * CreatePlayerObject
 * @see https://wiki.sa-mp.com/wiki/CreatePlayerObject
 * @param {Number} playerid
 * @param {Number} modelid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} rX
 * @param {Number} rY
 * @param {Number} rZ
 * @param {Number} [drawDistance=0.0]
 * @return {Number} retval
 */
function CreatePlayerObject(playerid, modelid, x, y, z, rX, rY, rZ, drawDistance)
{
	drawDistance = typeof drawDistance === 'undefined' ? 0.0 : drawDistance;
	return CallNativeGDK("CreatePlayerObject", "iifffffff", playerid, modelid, x, y, z, rX, rY, rZ, drawDistance);
}

/**
 * AttachPlayerObjectToVehicle
 * @see https://wiki.sa-mp.com/wiki/AttachPlayerObjectToVehicle
 * @param {Number} playerid
 * @param {Number} objectid
 * @param {Number} vehicleid
 * @param {Number} fOffsetX
 * @param {Number} fOffsetY
 * @param {Number} fOffsetZ
 * @param {Number} fRotX
 * @param {Number} fRotY
 * @param {Number} RotZ
 * @return {Number} retval
 */
function AttachPlayerObjectToVehicle(playerid, objectid, vehicleid, fOffsetX, fOffsetY, fOffsetZ, fRotX, fRotY, RotZ) {
	return CallNativeGDK("AttachPlayerObjectToVehicle", "iiiffffff", playerid, objectid, vehicleid, fOffsetX, fOffsetY, fOffsetZ, fRotX, fRotY, RotZ);
}

/**
 * SetPlayerObjectPos
 * @see https://wiki.sa-mp.com/wiki/SetPlayerObjectPos
 * @param {Number} playerid
 * @param {Number} objectid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function SetPlayerObjectPos(playerid, objectid, x, y, z) {
	return CallNativeGDK("SetPlayerObjectPos", "iifff", playerid, objectid, x, y, z);
}

/**
 * GetPlayerObjectPos
 * @see https://wiki.sa-mp.com/wiki/GetPlayerObjectPos
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {{x: Number, y: Number, z: Number}}
 */
function GetPlayerObjectPos(playerid, objectid)
{
	let out = CallNativeGDK("GetPlayerObjectPos", "iiFFF", playerid, objectid);
	return {x: out[0], y: out[1], z: out[2]};
}

/**
 * SetPlayerObjectRot
 * @see https://wiki.sa-mp.com/wiki/SetPlayerObjectRot
 * @param {Number} playerid
 * @param {Number} objectid
 * @param {Number} RotX
 * @param {Number} RotY
 * @param {Number} RotZ
 * @return {Number} retval
 */
function SetPlayerObjectRot(playerid, objectid, RotX, RotY, RotZ) {
	return CallNativeGDK("SetPlayerObjectRot", "iifff", playerid, objectid, RotX, RotY, RotZ);
}

/**
 * GetPlayerObjectRot
 * @see https://wiki.sa-mp.com/wiki/GetPlayerObjectRot
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {{RotX: Number, RotY: Number, RotZ: Number}}
 */
function GetPlayerObjectRot(playerid, objectid)
{
	let out = CallNativeGDK("GetPlayerObjectRot", "iiFFF", playerid, objectid);
	return {RotX: out[0], RotY: out[1], RotZ: out[2]};
}

/**
 * GetPlayerObjectModel
 * @see https://wiki.sa-mp.com/wiki/GetPlayerObjectModel
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {Number} retval
 */
function GetPlayerObjectModel(playerid, objectid) {
	return CallNativeGDK("GetPlayerObjectModel", "ii", playerid, objectid);
}

/**
 * SetPlayerObjectNoCameraCol
 * @see https://wiki.sa-mp.com/wiki/SetPlayerObjectNoCameraCol
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {Number} retval
 */
function SetPlayerObjectNoCameraCol(playerid, objectid) {
	return CallNativeGDK("SetPlayerObjectNoCameraCol", "ii", playerid, objectid);
}

/**
 * IsValidPlayerObject
 * @see https://wiki.sa-mp.com/wiki/IsValidPlayerObject
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {Number} retval
 */
function IsValidPlayerObject(playerid, objectid) {
	return CallNativeGDK("IsValidPlayerObject", "ii", playerid, objectid);
}

/**
 * DestroyPlayerObject
 * @see https://wiki.sa-mp.com/wiki/DestroyPlayerObject
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {Number} retval
 */
function DestroyPlayerObject(playerid, objectid) {
	return CallNativeGDK("DestroyPlayerObject", "ii", playerid, objectid);
}

/**
 * MovePlayerObject
 * @see https://wiki.sa-mp.com/wiki/MovePlayerObject
 * @param {Number} playerid
 * @param {Number} objectid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} speed
 * @param {Number} [RotX=-1000.0]
 * @param {Number} [RotY=-1000.0]
 * @param {Number} [RotZ=-1000.0]
 * @return {Number} retval
 */
function MovePlayerObject(playerid, objectid, x, y, z, speed, RotX, RotY, RotZ)
{
	RotX = typeof RotX === 'undefined' ? -1000.0 : RotX;
	RotY = typeof RotY === 'undefined' ? -1000.0 : RotY;
	RotZ = typeof RotZ === 'undefined' ? -1000.0 : RotZ;
	return CallNativeGDK("MovePlayerObject", "iifffffff", playerid, objectid, x, y, z, speed, RotX, RotY, RotZ);
}

/**
 * StopPlayerObject
 * @see https://wiki.sa-mp.com/wiki/StopPlayerObject
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {Number} retval
 */
function StopPlayerObject(playerid, objectid) {
	return CallNativeGDK("StopPlayerObject", "ii", playerid, objectid);
}

/**
 * IsPlayerObjectMoving
 * @see https://wiki.sa-mp.com/wiki/IsPlayerObjectMoving
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {Number} retval
 */
function IsPlayerObjectMoving(playerid, objectid) {
	return CallNativeGDK("IsPlayerObjectMoving", "ii", playerid, objectid);
}

/**
 * AttachPlayerObjectToPlayer
 * @see https://wiki.sa-mp.com/wiki/AttachPlayerObjectToPlayer
 * @param {Number} objectplayer
 * @param {Number} objectid
 * @param {Number} attachplayer
 * @param {Number} OffsetX
 * @param {Number} OffsetY
 * @param {Number} OffsetZ
 * @param {Number} rX
 * @param {Number} rY
 * @param {Number} rZ
 * @return {Number} retval
 */
function AttachPlayerObjectToPlayer(objectplayer, objectid, attachplayer, OffsetX, OffsetY, OffsetZ, rX, rY, rZ) {
	return CallNativeGDK("AttachPlayerObjectToPlayer", "iiiffffff", objectplayer, objectid, attachplayer, OffsetX, OffsetY, OffsetZ, rX, rY, rZ);
}

/**
 * SetObjectMaterial
 * @see https://wiki.sa-mp.com/wiki/SetObjectMaterial
 * @param {Number} objectid
 * @param {Number} materialindex
 * @param {Number} modelid
 * @param {String} txdname
 * @param {String} texturename
 * @param {Number} [materialcolor=0]
 * @return {Number} retval
 */
function SetObjectMaterial(objectid, materialindex, modelid, txdname, texturename, materialcolor)
{
	materialcolor = typeof materialcolor === 'undefined' ? 0 : materialcolor;
	return CallNativeGDK("SetObjectMaterial", "iiissi", objectid, materialindex, modelid, txdname, texturename, materialcolor);
}

/**
 * SetPlayerObjectMaterial
 * @see https://wiki.sa-mp.com/wiki/SetPlayerObjectMaterial
 * @param {Number} playerid
 * @param {Number} objectid
 * @param {Number} materialindex
 * @param {Number} modelid
 * @param {String} txdname
 * @param {String} texturename
 * @param {Number} [materialcolor=0]
 * @return {Number} retval
 */
function SetPlayerObjectMaterial(playerid, objectid, materialindex, modelid, txdname, texturename, materialcolor)
{
	materialcolor = typeof materialcolor === 'undefined' ? 0 : materialcolor;
	return CallNativeGDK("SetPlayerObjectMaterial", "iiiissi", playerid, objectid, materialindex, modelid, txdname, texturename, materialcolor);
}

/**
 * SetObjectMaterialText
 * @see https://wiki.sa-mp.com/wiki/SetObjectMaterialText
 * @param {Number} objectid
 * @param {String} text
 * @param {Number} [materialindex=0]
 * @param {Number} [materialsize=OBJECT_MATERIAL_SIZE_256x128]
 * @param {String} [fontface="Arial"]
 * @param {Number} [fontsize=24]
 * @param {Number} [bold=1]
 * @param {Number} [fontcolor=0xFFFFFFFF]
 * @param {Number} [backcolor=0]
 * @param {Number} [textalignment=0]
 * @return {Number} retval
 */
function SetObjectMaterialText(objectid, text, materialindex, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment)
{
	materialindex = typeof materialindex === 'undefined' ? 0 : materialindex;
	materialsize = typeof materialsize === 'undefined' ? OBJECT_MATERIAL_SIZE_256x128 : materialsize;
	fontface = typeof fontface === 'undefined' ? "Arial" : fontface;
	fontsize = typeof fontsize === 'undefined' ? 24 : fontsize;
	bold = typeof bold === 'undefined' ? 1 : bold;
	fontcolor = typeof fontcolor === 'undefined' ? 0xFFFFFFFF : fontcolor;
	backcolor = typeof backcolor === 'undefined' ? 0 : backcolor;
	textalignment = typeof textalignment === 'undefined' ? 0 : textalignment;
	return CallNativeGDK("SetObjectMaterialText", "isiisiiiii", objectid, text, materialindex, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment);
}

/**
 * SetPlayerObjectMaterialText
 * @see https://wiki.sa-mp.com/wiki/SetPlayerObjectMaterialText
 * @param {Number} playerid
 * @param {Number} objectid
 * @param {String} text
 * @param {Number} [materialindex=0]
 * @param {Number} [materialsize=OBJECT_MATERIAL_SIZE_256x128]
 * @param {String} [fontface="Arial"]
 * @param {Number} [fontsize=24]
 * @param {Number} [bold=1]
 * @param {Number} [fontcolor=0xFFFFFFFF]
 * @param {Number} [backcolor=0]
 * @param {Number} [textalignment=0]
 * @return {Number} retval
 */
function SetPlayerObjectMaterialText(playerid, objectid, text, materialindex, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment)
{
	materialindex = typeof materialindex === 'undefined' ? 0 : materialindex;
	materialsize = typeof materialsize === 'undefined' ? OBJECT_MATERIAL_SIZE_256x128 : materialsize;
	fontface = typeof fontface === 'undefined' ? "Arial" : fontface;
	fontsize = typeof fontsize === 'undefined' ? 24 : fontsize;
	bold = typeof bold === 'undefined' ? 1 : bold;
	fontcolor = typeof fontcolor === 'undefined' ? 0xFFFFFFFF : fontcolor;
	backcolor = typeof backcolor === 'undefined' ? 0 : backcolor;
	textalignment = typeof textalignment === 'undefined' ? 0 : textalignment;
	return CallNativeGDK("SetPlayerObjectMaterialText", "iisiisiiiii", playerid, objectid, text, materialindex, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment);
}

/**
 * SetObjectsDefaultCameraCol
 * @see https://wiki.sa-mp.com/wiki/SetObjectsDefaultCameraCol
 * @param {Number} disable
 * @return {Number} retval
 */
function SetObjectsDefaultCameraCol(disable) {
	return CallNativeGDK("SetObjectsDefaultCameraCol", "i", disable);
}
