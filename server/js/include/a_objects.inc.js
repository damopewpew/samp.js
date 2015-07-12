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
	var out = CallNativeGDK( "CreateObject", "ifffffff", modelid, X, Y, Z, rX, rY, rZ, DrawDistance );
	return out;
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
	var out = CallNativeGDK( "AttachObjectToVehicle", "iiffffff", objectid, vehicleid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ );
	return out;
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
	var out = CallNativeGDK( "AttachObjectToObject", "iiffffffi", objectid, attachtoid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ, SyncRotation );
	return out;
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
	var out = CallNativeGDK( "AttachObjectToPlayer", "iiffffff", objectid, playerid, OffsetX, OffsetY, OffsetZ, RotX, RotY, RotZ );
	return out;
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
	var out = CallNativeGDK( "SetObjectPos", "ifff", objectid, X, Y, Z );
	return out;
}
/**
 * GetObjectPos
 * @see https://wiki.sa-mp.com/wiki/GetObjectPos
 * @param {Number} objectid
 * @return {{ x: Number,  y: Number,  z: Number }}
 */
function GetObjectPos( objectid ){
	var out = CallNativeGDK( "GetObjectPos", "iFFF", objectid, [ "x", "y", "z" ] );
	return {X: out[0],Y: out[1],Z: out[2]};
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
	var out = CallNativeGDK( "SetObjectRot", "ifff", objectid, RotX, RotY, RotZ );
	return out;
}
/**
 * GetObjectRot
 * @see https://wiki.sa-mp.com/wiki/GetObjectRot
 * @param {Number} objectid
 * @return {{ rotx: Number,  roty: Number,  rotz: Number }}
 */
function GetObjectRot( objectid ){
	var out = CallNativeGDK( "GetObjectRot", "iFFF", objectid, [ "rotx", "roty", "rotz" ] );
	return {RotX: out[0],RotY: out[1],RotZ: out[2]};
}
/**
 * GetObjectModel
 * @see https://wiki.sa-mp.com/wiki/GetObjectModel
 * @param {Number} objectid
 * @return {Number} retval
 */
function GetObjectModel( objectid ){
	var out = CallNativeGDK( "GetObjectModel", "i", objectid );
	return out;
}
/**
 * SetObjectNoCameraCol
 * @see https://wiki.sa-mp.com/wiki/SetObjectNoCameraCol
 * @param {Number} objectid
 * @return {Number} retval
 */
function SetObjectNoCameraCol( objectid ){
	var out = CallNativeGDK( "SetObjectNoCameraCol", "i", objectid );
	return out;
}
/**
 * IsValidObject
 * @see https://wiki.sa-mp.com/wiki/IsValidObject
 * @param {Number} objectid
 * @return {Number} retval
 */
function IsValidObject( objectid ){
	var out = CallNativeGDK( "IsValidObject", "i", objectid );
	return out;
}
/**
 * DestroyObject
 * @see https://wiki.sa-mp.com/wiki/DestroyObject
 * @param {Number} objectid
 * @return {Number} retval
 */
function DestroyObject( objectid ){
	var out = CallNativeGDK( "DestroyObject", "i", objectid );
	return out;
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
	var out = CallNativeGDK( "MoveObject", "ifffffff", objectid, X, Y, Z, Speed, RotX, RotY, RotZ );
	return out;
}
/**
 * StopObject
 * @see https://wiki.sa-mp.com/wiki/StopObject
 * @param {Number} objectid
 * @return {Number} retval
 */
function StopObject( objectid ){
	var out = CallNativeGDK( "StopObject", "i", objectid );
	return out;
}
/**
 * IsObjectMoving
 * @see https://wiki.sa-mp.com/wiki/IsObjectMoving
 * @param {Number} objectid
 * @return {Number} retval
 */
function IsObjectMoving( objectid ){
	var out = CallNativeGDK( "IsObjectMoving", "i", objectid );
	return out;
}
/**
 * EditObject
 * @see https://wiki.sa-mp.com/wiki/EditObject
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {Number} retval
 */
function EditObject( playerid, objectid ){
	var out = CallNativeGDK( "EditObject", "ii", playerid, objectid );
	return out;
}
/**
 * EditPlayerObject
 * @see https://wiki.sa-mp.com/wiki/EditPlayerObject
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {Number} retval
 */
function EditPlayerObject( playerid, objectid ){
	var out = CallNativeGDK( "EditPlayerObject", "ii", playerid, objectid );
	return out;
}
/**
 * SelectObject
 * @see https://wiki.sa-mp.com/wiki/SelectObject
 * @param {Number} playerid
 * @return {Number} retval
 */
function SelectObject( playerid ){
	var out = CallNativeGDK( "SelectObject", "i", playerid );
	return out;
}
/**
 * CancelEdit
 * @see https://wiki.sa-mp.com/wiki/CancelEdit
 * @param {Number} playerid
 * @return {Number} retval
 */
function CancelEdit( playerid ){
	var out = CallNativeGDK( "CancelEdit", "i", playerid );
	return out;
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
	var out = CallNativeGDK( "CreatePlayerObject", "iifffffff", playerid, modelid, X, Y, Z, rX, rY, rZ, DrawDistance );
	return out;
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
	var out = CallNativeGDK( "AttachPlayerObjectToVehicle", "iiiffffff", playerid, objectid, vehicleid, fOffsetX, fOffsetY, fOffsetZ, fRotX, fRotY, RotZ );
	return out;
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
	var out = CallNativeGDK( "SetPlayerObjectPos", "iifff", playerid, objectid, X, Y, Z );
	return out;
}
/**
 * GetPlayerObjectPos
 * @see https://wiki.sa-mp.com/wiki/GetPlayerObjectPos
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {{ x: Number,  y: Number,  z: Number }}
 */
function GetPlayerObjectPos( playerid, objectid ){
	var out = CallNativeGDK( "GetPlayerObjectPos", "iiFFF", playerid, objectid, [ "x", "y", "z" ] );
	return {X: out[0],Y: out[1],Z: out[2]};
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
	var out = CallNativeGDK( "SetPlayerObjectRot", "iifff", playerid, objectid, RotX, RotY, RotZ );
	return out;
}
/**
 * GetPlayerObjectRot
 * @see https://wiki.sa-mp.com/wiki/GetPlayerObjectRot
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {{ rotx: Number,  roty: Number,  rotz: Number }}
 */
function GetPlayerObjectRot( playerid, objectid ){
	var out = CallNativeGDK( "GetPlayerObjectRot", "iiFFF", playerid, objectid, [ "rotx", "roty", "rotz" ] );
	return {RotX: out[0],RotY: out[1],RotZ: out[2]};
}
/**
 * GetPlayerObjectModel
 * @see https://wiki.sa-mp.com/wiki/GetPlayerObjectModel
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {Number} retval
 */
function GetPlayerObjectModel( playerid, objectid ){
	var out = CallNativeGDK( "GetPlayerObjectModel", "ii", playerid, objectid );
	return out;
}
/**
 * SetPlayerObjectNoCameraCol
 * @see https://wiki.sa-mp.com/wiki/SetPlayerObjectNoCameraCol
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {Number} retval
 */
function SetPlayerObjectNoCameraCol( playerid, objectid ){
	var out = CallNativeGDK( "SetPlayerObjectNoCameraCol", "ii", playerid, objectid );
	return out;
}
/**
 * IsValidPlayerObject
 * @see https://wiki.sa-mp.com/wiki/IsValidPlayerObject
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {Number} retval
 */
function IsValidPlayerObject( playerid, objectid ){
	var out = CallNativeGDK( "IsValidPlayerObject", "ii", playerid, objectid );
	return out;
}
/**
 * DestroyPlayerObject
 * @see https://wiki.sa-mp.com/wiki/DestroyPlayerObject
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {Number} retval
 */
function DestroyPlayerObject( playerid, objectid ){
	var out = CallNativeGDK( "DestroyPlayerObject", "ii", playerid, objectid );
	return out;
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
	var out = CallNativeGDK( "MovePlayerObject", "iifffffff", playerid, objectid, X, Y, Z, Speed, RotX, RotY, RotZ );
	return out;
}
/**
 * StopPlayerObject
 * @see https://wiki.sa-mp.com/wiki/StopPlayerObject
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {Number} retval
 */
function StopPlayerObject( playerid, objectid ){
	var out = CallNativeGDK( "StopPlayerObject", "ii", playerid, objectid );
	return out;
}
/**
 * IsPlayerObjectMoving
 * @see https://wiki.sa-mp.com/wiki/IsPlayerObjectMoving
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {Number} retval
 */
function IsPlayerObjectMoving( playerid, objectid ){
	var out = CallNativeGDK( "IsPlayerObjectMoving", "ii", playerid, objectid );
	return out;
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
	var out = CallNativeGDK( "AttachPlayerObjectToPlayer", "iiiffffff", objectplayer, objectid, attachplayer, OffsetX, OffsetY, OffsetZ, rX, rY, rZ );
	return out;
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
	var out = CallNativeGDK( "SetObjectMaterial", "iiissi", objectid, materialindex, modelid, txdname, texturename, materialcolor );
	return out;
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
	var out = CallNativeGDK( "SetPlayerObjectMaterial", "iiiissi", playerid, objectid, materialindex, modelid, txdname, texturename, materialcolor );
	return out;
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
	var out = CallNativeGDK( "SetObjectMaterialText", "isiisiiiii", objectid, text, materialindex, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment );
	return out;
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
	var out = CallNativeGDK( "SetPlayerObjectMaterialText", "iisiisiiiii", playerid, objectid, text, materialindex, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment );
	return out;
}
/**
 * SetObjectsDefaultCameraCol
 * @see https://wiki.sa-mp.com/wiki/SetObjectsDefaultCameraCol
 * @param {Number} disable
 * @return {Number} retval
 */
function SetObjectsDefaultCameraCol( disable ){
	var out = CallNativeGDK( "SetObjectsDefaultCameraCol", "i", disable );
	return out;
}
