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
 * @param {Number} X
 * @param {Number} Y
 * @param {Number} Z
 * @param {Number} rX
 * @param {Number} rY
 * @param {Number} rZ
 * @param {Number} DrawDistance
 * @return {Number} retval
 */
function CreateObject( modelid, X, Y, Z, rX, rY, rZ, DrawDistance ){
	DrawDistance = typeof DrawDistance !== 'undefined' ? DrawDistance : 0.0;
	return CallNative( "CreateObject", "ifffffff", modelid, X, Y, Z, rX, rY, rZ, DrawDistance );
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
function AttachObjectToVehicle( objectid, vehicleid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ ){
	return CallNative( "AttachObjectToVehicle", "iiffffff", objectid, vehicleid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ );
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
 * @param {Number} SyncRotation
 * @return {Number} retval
 */
function AttachObjectToObject( objectid, attachtoid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ, SyncRotation ){
	SyncRotation = typeof SyncRotation !== 'undefined' ? SyncRotation : 1;
	return CallNative( "AttachObjectToObject", "iiffffffi", objectid, attachtoid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ, SyncRotation );
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
function AttachObjectToPlayer( objectid, playerid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ ){
	return CallNative( "AttachObjectToPlayer", "iiffffff", objectid, playerid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ );
}
/**
 * SetObjectPos
 * @see https://wiki.sa-mp.com/wiki/SetObjectPos
 * @param {Number} objectid
 * @param {Number} X
 * @param {Number} Y
 * @param {Number} Z
 * @return {Number} retval
 */
function SetObjectPos( objectid, X, Y, Z ){
	return CallNative( "SetObjectPos", "ifff", objectid, X, Y, Z );
}
/**
 * GetObjectPos
 * @see https://wiki.sa-mp.com/wiki/GetObjectPos
 * @param {Number} objectid
 * @return {{ x: Number,  y: Number,  z: Number }}
 */
function GetObjectPos( objectid ){
	return CallNative( "GetObjectPos", "iFFF", objectid, [ "x", "y", "z" ] );
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
function SetObjectRot( objectid, RotX, RotY, RotZ ){
	return CallNative( "SetObjectRot", "ifff", objectid, RotX, RotY, RotZ );
}
/**
 * GetObjectRot
 * @see https://wiki.sa-mp.com/wiki/GetObjectRot
 * @param {Number} objectid
 * @return {{ rotx: Number,  roty: Number,  rotz: Number }}
 */
function GetObjectRot( objectid ){
	return CallNative( "GetObjectRot", "iFFF", objectid, [ "rotx", "roty", "rotz" ] );
}
/**
 * GetObjectModel
 * @see https://wiki.sa-mp.com/wiki/GetObjectModel
 * @param {Number} objectid
 * @return {Number} retval
 */
function GetObjectModel( objectid ){
	return CallNative( "GetObjectModel", "i", objectid );
}
/**
 * SetObjectNoCameraCol
 * @see https://wiki.sa-mp.com/wiki/SetObjectNoCameraCol
 * @param {Number} objectid
 * @return {Number} retval
 */
function SetObjectNoCameraCol( objectid ){
	return CallNative( "SetObjectNoCameraCol", "i", objectid );
}
/**
 * IsValidObject
 * @see https://wiki.sa-mp.com/wiki/IsValidObject
 * @param {Number} objectid
 * @return {Number} retval
 */
function IsValidObject( objectid ){
	return CallNative( "IsValidObject", "i", objectid );
}
/**
 * DestroyObject
 * @see https://wiki.sa-mp.com/wiki/DestroyObject
 * @param {Number} objectid
 * @return {Number} retval
 */
function DestroyObject( objectid ){
	return CallNative( "DestroyObject", "i", objectid );
}
/**
 * MoveObject
 * @see https://wiki.sa-mp.com/wiki/MoveObject
 * @param {Number} objectid
 * @param {Number} X
 * @param {Number} Y
 * @param {Number} Z
 * @param {Number} Speed
 * @param {Number} RotX
 * @param {Number} RotY
 * @param {Number} RotZ
 * @return {Number} retval
 */
function MoveObject( objectid, X, Y, Z, Speed, RotX, RotY, RotZ ){
	RotX = typeof RotX !== 'undefined' ? RotX : -1000.0;
	RotY = typeof RotY !== 'undefined' ? RotY : -1000.0;
	RotZ = typeof RotZ !== 'undefined' ? RotZ : -1000.0;
	return CallNative( "MoveObject", "ifffffff", objectid, X, Y, Z, Speed, RotX, RotY, RotZ );
}
/**
 * StopObject
 * @see https://wiki.sa-mp.com/wiki/StopObject
 * @param {Number} objectid
 * @return {Number} retval
 */
function StopObject( objectid ){
	return CallNative( "StopObject", "i", objectid );
}
/**
 * IsObjectMoving
 * @see https://wiki.sa-mp.com/wiki/IsObjectMoving
 * @param {Number} objectid
 * @return {Number} retval
 */
function IsObjectMoving( objectid ){
	return CallNative( "IsObjectMoving", "i", objectid );
}
/**
 * EditObject
 * @see https://wiki.sa-mp.com/wiki/EditObject
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {Number} retval
 */
function EditObject( playerid, objectid ){
	return CallNative( "EditObject", "ii", playerid, objectid );
}
/**
 * EditPlayerObject
 * @see https://wiki.sa-mp.com/wiki/EditPlayerObject
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {Number} retval
 */
function EditPlayerObject( playerid, objectid ){
	return CallNative( "EditPlayerObject", "ii", playerid, objectid );
}
/**
 * SelectObject
 * @see https://wiki.sa-mp.com/wiki/SelectObject
 * @param {Number} playerid
 * @return {Number} retval
 */
function SelectObject( playerid ){
	return CallNative( "SelectObject", "i", playerid );
}
/**
 * CancelEdit
 * @see https://wiki.sa-mp.com/wiki/CancelEdit
 * @param {Number} playerid
 * @return {Number} retval
 */
function CancelEdit( playerid ){
	return CallNative( "CancelEdit", "i", playerid );
}
/**
 * CreatePlayerObject
 * @see https://wiki.sa-mp.com/wiki/CreatePlayerObject
 * @param {Number} playerid
 * @param {Number} modelid
 * @param {Number} X
 * @param {Number} Y
 * @param {Number} Z
 * @param {Number} rX
 * @param {Number} rY
 * @param {Number} rZ
 * @param {Number} DrawDistance
 * @return {Number} retval
 */
function CreatePlayerObject( playerid, modelid, X, Y, Z, rX, rY, rZ, DrawDistance ){
	DrawDistance = typeof DrawDistance !== 'undefined' ? DrawDistance : 0.0;
	return CallNative( "CreatePlayerObject", "iifffffff", playerid, modelid, X, Y, Z, rX, rY, rZ, DrawDistance );
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
function AttachPlayerObjectToVehicle( playerid, objectid, vehicleid, fOffsetX, fOffsetY, fOffsetZ, fRotX, fRotY, RotZ ){
	return CallNative( "AttachPlayerObjectToVehicle", "iiiffffff", playerid, objectid, vehicleid, fOffsetX, fOffsetY, fOffsetZ, fRotX, fRotY, RotZ );
}
/**
 * SetPlayerObjectPos
 * @see https://wiki.sa-mp.com/wiki/SetPlayerObjectPos
 * @param {Number} playerid
 * @param {Number} objectid
 * @param {Number} X
 * @param {Number} Y
 * @param {Number} Z
 * @return {Number} retval
 */
function SetPlayerObjectPos( playerid, objectid, X, Y, Z ){
	return CallNative( "SetPlayerObjectPos", "iifff", playerid, objectid, X, Y, Z );
}
/**
 * GetPlayerObjectPos
 * @see https://wiki.sa-mp.com/wiki/GetPlayerObjectPos
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {{ x: Number,  y: Number,  z: Number }}
 */
function GetPlayerObjectPos( playerid, objectid ){
	return CallNative( "GetPlayerObjectPos", "iiFFF", playerid, objectid, [ "x", "y", "z" ] );
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
function SetPlayerObjectRot( playerid, objectid, RotX, RotY, RotZ ){
	return CallNative( "SetPlayerObjectRot", "iifff", playerid, objectid, RotX, RotY, RotZ );
}
/**
 * GetPlayerObjectRot
 * @see https://wiki.sa-mp.com/wiki/GetPlayerObjectRot
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {{ rotx: Number,  roty: Number,  rotz: Number }}
 */
function GetPlayerObjectRot( playerid, objectid ){
	return CallNative( "GetPlayerObjectRot", "iiFFF", playerid, objectid, [ "rotx", "roty", "rotz" ] );
}
/**
 * GetPlayerObjectModel
 * @see https://wiki.sa-mp.com/wiki/GetPlayerObjectModel
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {Number} retval
 */
function GetPlayerObjectModel( playerid, objectid ){
	return CallNative( "GetPlayerObjectModel", "ii", playerid, objectid );
}
/**
 * SetPlayerObjectNoCameraCol
 * @see https://wiki.sa-mp.com/wiki/SetPlayerObjectNoCameraCol
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {Number} retval
 */
function SetPlayerObjectNoCameraCol( playerid, objectid ){
	return CallNative( "SetPlayerObjectNoCameraCol", "ii", playerid, objectid );
}
/**
 * IsValidPlayerObject
 * @see https://wiki.sa-mp.com/wiki/IsValidPlayerObject
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {Number} retval
 */
function IsValidPlayerObject( playerid, objectid ){
	return CallNative( "IsValidPlayerObject", "ii", playerid, objectid );
}
/**
 * DestroyPlayerObject
 * @see https://wiki.sa-mp.com/wiki/DestroyPlayerObject
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {Number} retval
 */
function DestroyPlayerObject( playerid, objectid ){
	return CallNative( "DestroyPlayerObject", "ii", playerid, objectid );
}
/**
 * MovePlayerObject
 * @see https://wiki.sa-mp.com/wiki/MovePlayerObject
 * @param {Number} playerid
 * @param {Number} objectid
 * @param {Number} X
 * @param {Number} Y
 * @param {Number} Z
 * @param {Number} Speed
 * @param {Number} RotX
 * @param {Number} RotY
 * @param {Number} RotZ
 * @return {Number} retval
 */
function MovePlayerObject( playerid, objectid, X, Y, Z, Speed, RotX, RotY, RotZ ){
	RotX = typeof RotX !== 'undefined' ? RotX : -1000.0;
	RotY = typeof RotY !== 'undefined' ? RotY : -1000.0;
	RotZ = typeof RotZ !== 'undefined' ? RotZ : -1000.0;
	return CallNative( "MovePlayerObject", "iifffffff", playerid, objectid, X, Y, Z, Speed, RotX, RotY, RotZ );
}
/**
 * StopPlayerObject
 * @see https://wiki.sa-mp.com/wiki/StopPlayerObject
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {Number} retval
 */
function StopPlayerObject( playerid, objectid ){
	return CallNative( "StopPlayerObject", "ii", playerid, objectid );
}
/**
 * IsPlayerObjectMoving
 * @see https://wiki.sa-mp.com/wiki/IsPlayerObjectMoving
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {Number} retval
 */
function IsPlayerObjectMoving( playerid, objectid ){
	return CallNative( "IsPlayerObjectMoving", "ii", playerid, objectid );
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
function AttachPlayerObjectToPlayer( objectplayer, objectid, attachplayer, OffsetX, OffsetY, OffsetZ, rX, rY, rZ ){
	return CallNative( "AttachPlayerObjectToPlayer", "iiiffffff", objectplayer, objectid, attachplayer, OffsetX, OffsetY, OffsetZ, rX, rY, rZ );
}
/**
 * SetObjectMaterial
 * @see https://wiki.sa-mp.com/wiki/SetObjectMaterial
 * @param {Number} objectid
 * @param {Number} materialindex
 * @param {Number} modelid
 * @param {String} txdname
 * @param {String} texturename
 * @param {Number} materialcolor
 * @return {Number} retval
 */
function SetObjectMaterial( objectid, materialindex, modelid, txdname, texturename, materialcolor ){
	materialcolor = typeof materialcolor !== 'undefined' ? materialcolor : 0;
	return CallNative( "SetObjectMaterial", "iiissi", objectid, materialindex, modelid, txdname, texturename, materialcolor );
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
 * @param {Number} materialcolor
 * @return {Number} retval
 */
function SetPlayerObjectMaterial( playerid, objectid, materialindex, modelid, txdname, texturename, materialcolor ){
	materialcolor = typeof materialcolor !== 'undefined' ? materialcolor : 0;
	return CallNative( "SetPlayerObjectMaterial", "iiiissi", playerid, objectid, materialindex, modelid, txdname, texturename, materialcolor );
}
/**
 * SetObjectMaterialText
 * @see https://wiki.sa-mp.com/wiki/SetObjectMaterialText
 * @param {Number} objectid
 * @param {String} text
 * @param {Number} materialindex
 * @param {Number} materialsize
 * @param {String} fontface
 * @param {Number} fontsize
 * @param {Number} bold
 * @param {Number} fontcolor
 * @param {Number} backcolor
 * @param {Number} textalignment
 * @return {Number} retval
 */
function SetObjectMaterialText( objectid, text, materialindex, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment ){
	materialindex = typeof materialindex !== 'undefined' ? materialindex : 0;
	materialsize = typeof materialsize !== 'undefined' ? materialsize : OBJECT_MATERIAL_SIZE_256x128;
	fontface = typeof fontface !== 'undefined' ? fontface : "Arial";
	fontsize = typeof fontsize !== 'undefined' ? fontsize : 24;
	bold = typeof bold !== 'undefined' ? bold : 1;
	fontcolor = typeof fontcolor !== 'undefined' ? fontcolor : 0xFFFFFFFF;
	backcolor = typeof backcolor !== 'undefined' ? backcolor : 0;
	textalignment = typeof textalignment !== 'undefined' ? textalignment : 0;
	return CallNative( "SetObjectMaterialText", "isiisiiiii", objectid, text, materialindex, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment );
}
/**
 * SetPlayerObjectMaterialText
 * @see https://wiki.sa-mp.com/wiki/SetPlayerObjectMaterialText
 * @param {Number} playerid
 * @param {Number} objectid
 * @param {String} text
 * @param {Number} materialindex
 * @param {Number} materialsize
 * @param {String} fontface
 * @param {Number} fontsize
 * @param {Number} bold
 * @param {Number} fontcolor
 * @param {Number} backcolor
 * @param {Number} textalignment
 * @return {Number} retval
 */
function SetPlayerObjectMaterialText( playerid, objectid, text, materialindex, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment ){
	materialindex = typeof materialindex !== 'undefined' ? materialindex : 0;
	materialsize = typeof materialsize !== 'undefined' ? materialsize : OBJECT_MATERIAL_SIZE_256x128;
	fontface = typeof fontface !== 'undefined' ? fontface : "Arial";
	fontsize = typeof fontsize !== 'undefined' ? fontsize : 24;
	bold = typeof bold !== 'undefined' ? bold : 1;
	fontcolor = typeof fontcolor !== 'undefined' ? fontcolor : 0xFFFFFFFF;
	backcolor = typeof backcolor !== 'undefined' ? backcolor : 0;
	textalignment = typeof textalignment !== 'undefined' ? textalignment : 0;
	return CallNative( "SetPlayerObjectMaterialText", "iisiisiiiii", playerid, objectid, text, materialindex, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment );
}
/**
 * SetObjectsDefaultCameraCol
 * @see https://wiki.sa-mp.com/wiki/SetObjectsDefaultCameraCol
 * @param {Number} disable
 * @return {Number} retval
 */
function SetObjectsDefaultCameraCol( disable ){
	return CallNative( "SetObjectsDefaultCameraCol", "i", disable );
}
