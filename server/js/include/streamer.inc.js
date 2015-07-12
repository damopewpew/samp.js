const STREAMER_TYPE_OBJECT = (0);
const STREAMER_TYPE_PICKUP = (1);
const STREAMER_TYPE_CP = (2);
const STREAMER_TYPE_RACE_CP = (3);
const STREAMER_TYPE_MAP_ICON = (4);
const STREAMER_TYPE_3D_TEXT_LABEL = (5);
const STREAMER_TYPE_AREA = (6);
const STREAMER_AREA_TYPE_CIRCLE = (0);
const STREAMER_AREA_TYPE_CYLINDER = (1);
const STREAMER_AREA_TYPE_SPHERE = (2);
const STREAMER_AREA_TYPE_RECTANGLE = (3);
const STREAMER_AREA_TYPE_CUBOID = (4);
const STREAMER_AREA_TYPE_POLYGON = (5);
const STREAMER_OBJECT_TYPE_GLOBAL = (0);
const STREAMER_OBJECT_TYPE_PLAYER = (1);
const STREAMER_OBJECT_TYPE_DYNAMIC = (2);
const INVALID_STREAMER_ID = (0);
const FLOAT_INFINITY = (0x7F800000);

/**
 * Streamer_GetTickRate
 * @return {Number} retval
 */
function Streamer_GetTickRate(){
	CallNative( "Streamer_GetTickRate" );
}
/**
 * Streamer_SetTickRate
 * @param {Number} rate
 * @return {Number} retval
 */
function Streamer_SetTickRate( rate ){
	return CallNative( "Streamer_SetTickRate", "i", rate );
}
/**
 * Streamer_GetMaxItems
 * @param {Number} type
 * @return {Number} retval
 */
function Streamer_GetMaxItems( type ){
	return CallNative( "Streamer_GetMaxItems", "i", type );
}
/**
 * Streamer_SetMaxItems
 * @param {Number} type
 * @param {Number} items
 * @return {Number} retval
 */
function Streamer_SetMaxItems( type, items ){
	return CallNative( "Streamer_SetMaxItems", "ii", type, items );
}
/**
 * Streamer_GetVisibleItems
 * @param {Number} type
 * @param {Number} playerid
 * @return {Number} retval
 */
function Streamer_GetVisibleItems( type, playerid ){
	playerid = typeof playerid !== 'undefined' ? playerid : -1;
	return CallNative( "Streamer_GetVisibleItems", "ii", type, playerid );
}
/**
 * Streamer_SetVisibleItems
 * @param {Number} type
 * @param {Number} items
 * @param {Number} playerid
 * @return {Number} retval
 */
function Streamer_SetVisibleItems( type, items, playerid ){
	playerid = typeof playerid !== 'undefined' ? playerid : -1;
	return CallNative( "Streamer_SetVisibleItems", "iii", type, items, playerid );
}
/**
 * Streamer_GetRadiusMultiplier
 * @param {Number} type
 * @param {Number} playerid
 * @return {Number} multiplier
 */
function Streamer_GetRadiusMultiplier( type, playerid ){
	playerid = typeof playerid !== 'undefined' ? playerid : -1;
	return CallNative( "Streamer_GetRadiusMultiplier", "iFi", type, playerid );
}
/**
 * Streamer_SetRadiusMultiplier
 * @param {Number} type
 * @param {Number} multiplier
 * @param {Number} playerid
 * @return {Number} retval
 */
function Streamer_SetRadiusMultiplier( type, multiplier, playerid ){
	playerid = typeof playerid !== 'undefined' ? playerid : -1;
	return CallNative( "Streamer_SetRadiusMultiplier", "ifi", type, multiplier, playerid );
}
/**
 * Streamer_GetCellDistance
 * @return {Number} distance
 */
function Streamer_GetCellDistance(){
	CallNative( "Streamer_GetCellDistance" );
}
/**
 * Streamer_SetCellDistance
 * @param {Number} distance
 * @return {Number} retval
 */
function Streamer_SetCellDistance( distance ){
	return CallNative( "Streamer_SetCellDistance", "f", distance );
}
/**
 * Streamer_GetCellSize
 * @return {Number} size
 */
function Streamer_GetCellSize(){
	CallNative( "Streamer_GetCellSize" );
}
/**
 * Streamer_SetCellSize
 * @param {Number} size
 * @return {Number} retval
 */
function Streamer_SetCellSize( size ){
	return CallNative( "Streamer_SetCellSize", "f", size );
}
/**
 * Streamer_ToggleErrorCallback
 * @param {Number} toggle
 * @return {Number} retval
 */
function Streamer_ToggleErrorCallback( toggle ){
	return CallNative( "Streamer_ToggleErrorCallback", "i", toggle );
}
/**
 * Streamer_IsToggleErrorCallback
 * @return {Number} retval
 */
function Streamer_IsToggleErrorCallback(){
	CallNative( "Streamer_IsToggleErrorCallback" );
}
/**
 * Streamer_ProcessActiveItems
 * @return {Number} retval
 */
function Streamer_ProcessActiveItems(){
	CallNative( "Streamer_ProcessActiveItems" );
}
/**
 * Streamer_ToggleIdleUpdate
 * @param {Number} playerid
 * @param {Number} toggle
 * @return {Number} retval
 */
function Streamer_ToggleIdleUpdate( playerid, toggle ){
	return CallNative( "Streamer_ToggleIdleUpdate", "ii", playerid, toggle );
}
/**
 * Streamer_IsToggleIdleUpdate
 * @param {Number} playerid
 * @return {Number} retval
 */
function Streamer_IsToggleIdleUpdate( playerid ){
	return CallNative( "Streamer_IsToggleIdleUpdate", "i", playerid );
}
/**
 * Streamer_ToggleCameraUpdate
 * @param {Number} playerid
 * @param {Number} toggle
 * @return {Number} retval
 */
function Streamer_ToggleCameraUpdate( playerid, toggle ){
	return CallNative( "Streamer_ToggleCameraUpdate", "ii", playerid, toggle );
}
/**
 * Streamer_IsToggleCameraUpdate
 * @param {Number} playerid
 * @return {Number} retval
 */
function Streamer_IsToggleCameraUpdate( playerid ){
	return CallNative( "Streamer_IsToggleCameraUpdate", "i", playerid );
}
/**
 * Streamer_ToggleItemUpdate
 * @param {Number} playerid
 * @param {Number} type
 * @param {Number} toggle
 * @return {Number} retval
 */
function Streamer_ToggleItemUpdate( playerid, type, toggle ){
	return CallNative( "Streamer_ToggleItemUpdate", "iii", playerid, type, toggle );
}
/**
 * Streamer_IsToggleItemUpdate
 * @param {Number} playerid
 * @param {Number} type
 * @return {Number} retval
 */
function Streamer_IsToggleItemUpdate( playerid, type ){
	return CallNative( "Streamer_IsToggleItemUpdate", "ii", playerid, type );
}
/**
 * Streamer_Update
 * @param {Number} playerid
 * @param {Number} type
 * @return {Number} retval
 */
function Streamer_Update( playerid, type ){
	type = typeof type !== 'undefined' ? type : -1;
	return CallNative( "Streamer_Update", "ii", playerid, type );
}
/**
 * Streamer_UpdateEx
 * @param {Number} playerid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} worldid
 * @param {Number} interiorid
 * @param {Number} type
 * @return {Number} retval
 */
function Streamer_UpdateEx( playerid, x, y, z, worldid, interiorid, type ){
	worldid = typeof worldid !== 'undefined' ? worldid : -1;
	interiorid = typeof interiorid !== 'undefined' ? interiorid : -1;
	type = typeof type !== 'undefined' ? type : -1;
	return CallNative( "Streamer_UpdateEx", "ifffiii", playerid, x, y, z, worldid, interiorid, type );
}
/**
 * Streamer_GetFloatData
 * @param {Number} type
 * @param {Number} STREAMER_ALL_TAGS id
 * @param {Number} data
 * @return {Number} result
 */
function Streamer_GetFloatData( type, STREAMER_ALL_TAGS id, data ){
	return CallNative( "Streamer_GetFloatData", "iiiF", type, STREAMER_ALL_TAGS id, data );
}
/**
 * Streamer_SetFloatData
 * @param {Number} type
 * @param {Number} STREAMER_ALL_TAGS id
 * @param {Number} data
 * @param {Number} value
 * @return {Number} retval
 */
function Streamer_SetFloatData( type, STREAMER_ALL_TAGS id, data, value ){
	return CallNative( "Streamer_SetFloatData", "iiif", type, STREAMER_ALL_TAGS id, data, value );
}
/**
 * Streamer_GetIntData
 * @param {Number} type
 * @param {Number} STREAMER_ALL_TAGS id
 * @param {Number} data
 * @return {Number} retval
 */
function Streamer_GetIntData( type, STREAMER_ALL_TAGS id, data ){
	return CallNative( "Streamer_GetIntData", "iii", type, STREAMER_ALL_TAGS id, data );
}
/**
 * Streamer_SetIntData
 * @param {Number} type
 * @param {Number} STREAMER_ALL_TAGS id
 * @param {Number} data
 * @param {Number} value
 * @return {Number} retval
 */
function Streamer_SetIntData( type, STREAMER_ALL_TAGS id, data, value ){
	return CallNative( "Streamer_SetIntData", "iiii", type, STREAMER_ALL_TAGS id, data, value );
}
/**
 * Streamer_GetArrayData
 * @param {Number} type
 * @param {Number} STREAMER_ALL_TAGS id
 * @param {Number} data
 * @param {Number} maxdest
 * @return {String} dest
 */
function Streamer_GetArrayData( type, STREAMER_ALL_TAGS id, data, maxdest ){
	maxdest = typeof maxdest !== 'undefined' ? maxdest : 256;
	return CallNative( "Streamer_GetArrayData", "iiiSi", type, STREAMER_ALL_TAGS id, data, maxdest );
}
/**
 * Streamer_SetArrayData
 * @param {Number} type
 * @param {Number} STREAMER_ALL_TAGS id
 * @param {Number} data
 * @param {Number} maxsrc
 * @return {String} src
 */
function Streamer_SetArrayData( type, STREAMER_ALL_TAGS id, data, maxsrc ){
	maxsrc = typeof maxsrc !== 'undefined' ? maxsrc : 256;
	return CallNative( "Streamer_SetArrayData", "iiiSi", type, STREAMER_ALL_TAGS id, data, maxsrc );
}
/**
 * Streamer_IsInArrayData
 * @param {Number} type
 * @param {Number} STREAMER_ALL_TAGS id
 * @param {Number} data
 * @param {Number} value
 * @return {Number} retval
 */
function Streamer_IsInArrayData( type, STREAMER_ALL_TAGS id, data, value ){
	return CallNative( "Streamer_IsInArrayData", "iiii", type, STREAMER_ALL_TAGS id, data, value );
}
/**
 * Streamer_AppendArrayData
 * @param {Number} type
 * @param {Number} STREAMER_ALL_TAGS id
 * @param {Number} data
 * @param {Number} value
 * @return {Number} retval
 */
function Streamer_AppendArrayData( type, STREAMER_ALL_TAGS id, data, value ){
	return CallNative( "Streamer_AppendArrayData", "iiii", type, STREAMER_ALL_TAGS id, data, value );
}
/**
 * Streamer_RemoveArrayData
 * @param {Number} type
 * @param {Number} STREAMER_ALL_TAGS id
 * @param {Number} data
 * @param {Number} value
 * @return {Number} retval
 */
function Streamer_RemoveArrayData( type, STREAMER_ALL_TAGS id, data, value ){
	return CallNative( "Streamer_RemoveArrayData", "iiii", type, STREAMER_ALL_TAGS id, data, value );
}
/**
 * Streamer_GetUpperBound
 * @param {Number} type
 * @return {Number} retval
 */
function Streamer_GetUpperBound( type ){
	return CallNative( "Streamer_GetUpperBound", "i", type );
}
/**
 * Streamer_GetDistanceToItem
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} type
 * @param {Number} STREAMER_ALL_TAGS id
 * @param {Number} dimensions
 * @return {Number} distance
 */
function Streamer_GetDistanceToItem( x, y, z, type, STREAMER_ALL_TAGS id, dimensions ){
	dimensions = typeof dimensions !== 'undefined' ? dimensions : 3;
	return CallNative( "Streamer_GetDistanceToItem", "fffiiFi", x, y, z, type, STREAMER_ALL_TAGS id, dimensions );
}
/**
 * Streamer_ToggleStaticItem
 * @param {Number} type
 * @param {Number} STREAMER_ALL_TAGS id
 * @param {Number} toggle
 * @return {Number} retval
 */
function Streamer_ToggleStaticItem( type, STREAMER_ALL_TAGS id, toggle ){
	return CallNative( "Streamer_ToggleStaticItem", "iii", type, STREAMER_ALL_TAGS id, toggle );
}
/**
 * Streamer_IsToggleStaticItem
 * @param {Number} type
 * @param {Number} STREAMER_ALL_TAGS id
 * @return {Number} retval
 */
function Streamer_IsToggleStaticItem( type, STREAMER_ALL_TAGS id ){
	return CallNative( "Streamer_IsToggleStaticItem", "ii", type, STREAMER_ALL_TAGS id );
}
/**
 * Streamer_GetItemInternalID
 * @param {Number} playerid
 * @param {Number} type
 * @param {Number} STREAMER_ALL_TAGS streamerid
 * @return {Number} retval
 */
function Streamer_GetItemInternalID( playerid, type, STREAMER_ALL_TAGS streamerid ){
	return CallNative( "Streamer_GetItemInternalID", "iii", playerid, type, STREAMER_ALL_TAGS streamerid );
}
/**
 * Streamer_GetItemStreamerID
 * @param {Number} playerid
 * @param {Number} type
 * @param {Number} STREAMER_ALL_TAGS internalid
 * @return {Number} retval
 */
function Streamer_GetItemStreamerID( playerid, type, STREAMER_ALL_TAGS internalid ){
	return CallNative( "Streamer_GetItemStreamerID", "iii", playerid, type, STREAMER_ALL_TAGS internalid );
}
/**
 * Streamer_IsItemVisible
 * @param {Number} playerid
 * @param {Number} type
 * @param {Number} STREAMER_ALL_TAGS id
 * @return {Number} retval
 */
function Streamer_IsItemVisible( playerid, type, STREAMER_ALL_TAGS id ){
	return CallNative( "Streamer_IsItemVisible", "iii", playerid, type, STREAMER_ALL_TAGS id );
}
/**
 * Streamer_DestroyAllVisibleItems
 * @param {Number} playerid
 * @param {Number} type
 * @param {Number} serverwide
 * @return {Number} retval
 */
function Streamer_DestroyAllVisibleItems( playerid, type, serverwide ){
	serverwide = typeof serverwide !== 'undefined' ? serverwide : 1;
	return CallNative( "Streamer_DestroyAllVisibleItems", "iii", playerid, type, serverwide );
}
/**
 * Streamer_CountVisibleItems
 * @param {Number} playerid
 * @param {Number} type
 * @param {Number} serverwide
 * @return {Number} retval
 */
function Streamer_CountVisibleItems( playerid, type, serverwide ){
	serverwide = typeof serverwide !== 'undefined' ? serverwide : 1;
	return CallNative( "Streamer_CountVisibleItems", "iii", playerid, type, serverwide );
}
/**
 * Streamer_DestroyAllItems
 * @param {Number} type
 * @param {Number} serverwide
 * @return {Number} retval
 */
function Streamer_DestroyAllItems( type, serverwide ){
	serverwide = typeof serverwide !== 'undefined' ? serverwide : 1;
	return CallNative( "Streamer_DestroyAllItems", "ii", type, serverwide );
}
/**
 * Streamer_CountItems
 * @param {Number} type
 * @param {Number} serverwide
 * @return {Number} retval
 */
function Streamer_CountItems( type, serverwide ){
	serverwide = typeof serverwide !== 'undefined' ? serverwide : 1;
	return CallNative( "Streamer_CountItems", "ii", type, serverwide );
}
/**
 * CreateDynamicObject
 * @param {Number} modelid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} rx
 * @param {Number} ry
 * @param {Number} rz
 * @param {Number} worldid
 * @param {Number} interiorid
 * @param {Number} playerid
 * @param {Number} streamdistance
 * @param {Number} drawdistance
 * @return {Number} retval
 */
function CreateDynamicObject( modelid, x, y, z, rx, ry, rz, worldid, interiorid, playerid, streamdistance, drawdistance ){
	worldid = typeof worldid !== 'undefined' ? worldid : -1;
	interiorid = typeof interiorid !== 'undefined' ? interiorid : -1;
	playerid = typeof playerid !== 'undefined' ? playerid : -1;
	streamdistance = typeof streamdistance !== 'undefined' ? streamdistance : 200.0;
	drawdistance = typeof drawdistance !== 'undefined' ? drawdistance : 0.0;
	return CallNative( "CreateDynamicObject", "iffffffiiiff", modelid, x, y, z, rx, ry, rz, worldid, interiorid, playerid, streamdistance, drawdistance );
}
/**
 * DestroyDynamicObject
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @return {Number} retval
 */
function DestroyDynamicObject( STREAMER_TAG_OBJECT objectid ){
	return CallNative( "DestroyDynamicObject", "i", STREAMER_TAG_OBJECT objectid );
}
/**
 * IsValidDynamicObject
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @return {Number} retval
 */
function IsValidDynamicObject( STREAMER_TAG_OBJECT objectid ){
	return CallNative( "IsValidDynamicObject", "i", STREAMER_TAG_OBJECT objectid );
}
/**
 * SetDynamicObjectPos
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function SetDynamicObjectPos( STREAMER_TAG_OBJECT objectid, x, y, z ){
	return CallNative( "SetDynamicObjectPos", "ifff", STREAMER_TAG_OBJECT objectid, x, y, z );
}
/**
 * GetDynamicObjectPos
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @return {{ x: Number,  y: Number,  z: Number }}
 */
function GetDynamicObjectPos( STREAMER_TAG_OBJECT objectid ){
	return CallNative( "GetDynamicObjectPos", "iFFF", STREAMER_TAG_OBJECT objectid, [ "x", "y", "z" ] );
}
/**
 * SetDynamicObjectRot
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @param {Number} rx
 * @param {Number} ry
 * @param {Number} rz
 * @return {Number} retval
 */
function SetDynamicObjectRot( STREAMER_TAG_OBJECT objectid, rx, ry, rz ){
	return CallNative( "SetDynamicObjectRot", "ifff", STREAMER_TAG_OBJECT objectid, rx, ry, rz );
}
/**
 * GetDynamicObjectRot
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @return {{ rx: Number,  ry: Number,  rz: Number }}
 */
function GetDynamicObjectRot( STREAMER_TAG_OBJECT objectid ){
	return CallNative( "GetDynamicObjectRot", "iFFF", STREAMER_TAG_OBJECT objectid, [ "rx", "ry", "rz" ] );
}
/**
 * SetDynamicObjectNoCameraCol
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @return {Number} retval
 */
function SetDynamicObjectNoCameraCol( STREAMER_TAG_OBJECT objectid ){
	return CallNative( "SetDynamicObjectNoCameraCol", "i", STREAMER_TAG_OBJECT objectid );
}
/**
 * MoveDynamicObject
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} speed
 * @param {Number} rx
 * @param {Number} ry
 * @param {Number} rz
 * @return {Number} retval
 */
function MoveDynamicObject( STREAMER_TAG_OBJECT objectid, x, y, z, speed, rx, ry, rz ){
	rx = typeof rx !== 'undefined' ? rx : -1000.0;
	ry = typeof ry !== 'undefined' ? ry : -1000.0;
	rz = typeof rz !== 'undefined' ? rz : -1000.0;
	return CallNative( "MoveDynamicObject", "ifffffff", STREAMER_TAG_OBJECT objectid, x, y, z, speed, rx, ry, rz );
}
/**
 * StopDynamicObject
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @return {Number} retval
 */
function StopDynamicObject( STREAMER_TAG_OBJECT objectid ){
	return CallNative( "StopDynamicObject", "i", STREAMER_TAG_OBJECT objectid );
}
/**
 * IsDynamicObjectMoving
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @return {Number} retval
 */
function IsDynamicObjectMoving( STREAMER_TAG_OBJECT objectid ){
	return CallNative( "IsDynamicObjectMoving", "i", STREAMER_TAG_OBJECT objectid );
}
/**
 * AttachCameraToDynamicObject
 * @param {Number} playerid
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @return {Number} retval
 */
function AttachCameraToDynamicObject( playerid, STREAMER_TAG_OBJECT objectid ){
	return CallNative( "AttachCameraToDynamicObject", "ii", playerid, STREAMER_TAG_OBJECT objectid );
}
/**
 * AttachDynamicObjectToObject
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @param {Number} attachtoid
 * @param {Number} offsetx
 * @param {Number} offsety
 * @param {Number} offsetz
 * @param {Number} rx
 * @param {Number} ry
 * @param {Number} rz
 * @param {Number} syncrotation
 * @return {Number} retval
 */
function AttachDynamicObjectToObject( STREAMER_TAG_OBJECT objectid, attachtoid, offsetx, offsety, offsetz, rx, ry, rz, syncrotation ){
	syncrotation = typeof syncrotation !== 'undefined' ? syncrotation : 1;
	return CallNative( "AttachDynamicObjectToObject", "iiffffffi", STREAMER_TAG_OBJECT objectid, attachtoid, offsetx, offsety, offsetz, rx, ry, rz, syncrotation );
}
/**
 * AttachDynamicObjectToPlayer
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @param {Number} playerid
 * @param {Number} offsetx
 * @param {Number} offsety
 * @param {Number} offsetz
 * @param {Number} rx
 * @param {Number} ry
 * @param {Number} rz
 * @return {Number} retval
 */
function AttachDynamicObjectToPlayer( STREAMER_TAG_OBJECT objectid, playerid, offsetx, offsety, offsetz, rx, ry, rz ){
	return CallNative( "AttachDynamicObjectToPlayer", "iiffffff", STREAMER_TAG_OBJECT objectid, playerid, offsetx, offsety, offsetz, rx, ry, rz );
}
/**
 * AttachDynamicObjectToVehicle
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @param {Number} vehicleid
 * @param {Number} offsetx
 * @param {Number} offsety
 * @param {Number} offsetz
 * @param {Number} rx
 * @param {Number} ry
 * @param {Number} rz
 * @return {Number} retval
 */
function AttachDynamicObjectToVehicle( STREAMER_TAG_OBJECT objectid, vehicleid, offsetx, offsety, offsetz, rx, ry, rz ){
	return CallNative( "AttachDynamicObjectToVehicle", "iiffffff", STREAMER_TAG_OBJECT objectid, vehicleid, offsetx, offsety, offsetz, rx, ry, rz );
}
/**
 * EditDynamicObject
 * @param {Number} playerid
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @return {Number} retval
 */
function EditDynamicObject( playerid, STREAMER_TAG_OBJECT objectid ){
	return CallNative( "EditDynamicObject", "ii", playerid, STREAMER_TAG_OBJECT objectid );
}
/**
 * IsDynamicObjectMaterialUsed
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @param {Number} materialindex
 * @return {Number} retval
 */
function IsDynamicObjectMaterialUsed( STREAMER_TAG_OBJECT objectid, materialindex ){
	return CallNative( "IsDynamicObjectMaterialUsed", "ii", STREAMER_TAG_OBJECT objectid, materialindex );
}
/**
 * GetDynamicObjectMaterial
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @param {Number} materialindex
 * @param {Number} maxtxdname
 * @param {Number} maxtexturename
 * @return {{ modelid: Number,  txdname: String,  texturename: String,  materialcolor: Number }}
 */
function GetDynamicObjectMaterial( STREAMER_TAG_OBJECT objectid, materialindex, maxtxdname, maxtexturename ){
	maxtxdname = typeof maxtxdname !== 'undefined' ? maxtxdname : 256;
	maxtexturename = typeof maxtexturename !== 'undefined' ? maxtexturename : 256;
	return CallNative( "GetDynamicObjectMaterial", "iiISSIii", STREAMER_TAG_OBJECT objectid, materialindex, maxtxdname, maxtexturename, [ "modelid", "txdname", "texturename", "materialcolor" ] );
}
/**
 * SetDynamicObjectMaterial
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @param {Number} materialindex
 * @param {Number} modelid
 * @param {String} txdname
 * @param {String} texturename
 * @param {Number} materialcolor
 * @return {Number} retval
 */
function SetDynamicObjectMaterial( STREAMER_TAG_OBJECT objectid, materialindex, modelid, txdname, texturename, materialcolor ){
	materialcolor = typeof materialcolor !== 'undefined' ? materialcolor : 0;
	return CallNative( "SetDynamicObjectMaterial", "iiissi", STREAMER_TAG_OBJECT objectid, materialindex, modelid, txdname, texturename, materialcolor );
}
/**
 * IsDynamicObjectMaterialTextUsed
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @param {Number} materialindex
 * @return {Number} retval
 */
function IsDynamicObjectMaterialTextUsed( STREAMER_TAG_OBJECT objectid, materialindex ){
	return CallNative( "IsDynamicObjectMaterialTextUsed", "ii", STREAMER_TAG_OBJECT objectid, materialindex );
}
/**
 * GetDynamicObjectMaterialText
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @param {Number} materialindex
 * @param {Number} maxtext
 * @param {Number} maxfontface
 * @return {{ text: String,  materialsize: Number,  fontface: String,  fontsize: Number,  bold: Number,  fontcolor: Number,  backcolor: Number,  textalignment: Number }}
 */
function GetDynamicObjectMaterialText( STREAMER_TAG_OBJECT objectid, materialindex, maxtext, maxfontface ){
	maxtext = typeof maxtext !== 'undefined' ? maxtext : 256;
	maxfontface = typeof maxfontface !== 'undefined' ? maxfontface : 256;
	return CallNative( "GetDynamicObjectMaterialText", "iiSISIIIIIii", STREAMER_TAG_OBJECT objectid, materialindex, maxtext, maxfontface, [ "text", "materialsize", "fontface", "fontsize", "bold", "fontcolor", "backcolor", "textalignment" ] );
}
/**
 * SetDynamicObjectMaterialText
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @param {Number} materialindex
 * @param {String} text
 * @param {Number} materialsize
 * @param {String} fontface
 * @param {Number} fontsize
 * @param {Number} bold
 * @param {Number} fontcolor
 * @param {Number} backcolor
 * @param {Number} textalignment
 * @return {Number} retval
 */
function SetDynamicObjectMaterialText( STREAMER_TAG_OBJECT objectid, materialindex, text, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment ){
	materialsize = typeof materialsize !== 'undefined' ? materialsize : OBJECT_MATERIAL_SIZE_256x128;
	fontface = typeof fontface !== 'undefined' ? fontface : "Arial";
	fontsize = typeof fontsize !== 'undefined' ? fontsize : 24;
	bold = typeof bold !== 'undefined' ? bold : 1;
	fontcolor = typeof fontcolor !== 'undefined' ? fontcolor : 0xFFFFFFFF;
	backcolor = typeof backcolor !== 'undefined' ? backcolor : 0;
	textalignment = typeof textalignment !== 'undefined' ? textalignment : 0;
	return CallNative( "SetDynamicObjectMaterialText", "iisisiiiii", STREAMER_TAG_OBJECT objectid, materialindex, text, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment );
}
/**
 * CreateDynamicPickup
 * @param {Number} modelid
 * @param {Number} type
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} worldid
 * @param {Number} interiorid
 * @param {Number} playerid
 * @param {Number} streamdistance
 * @return {Number} retval
 */
function CreateDynamicPickup( modelid, type, x, y, z, worldid, interiorid, playerid, streamdistance ){
	worldid = typeof worldid !== 'undefined' ? worldid : -1;
	interiorid = typeof interiorid !== 'undefined' ? interiorid : -1;
	playerid = typeof playerid !== 'undefined' ? playerid : -1;
	streamdistance = typeof streamdistance !== 'undefined' ? streamdistance : 100.0;
	return CallNative( "CreateDynamicPickup", "iifffiiif", modelid, type, x, y, z, worldid, interiorid, playerid, streamdistance );
}
/**
 * DestroyDynamicPickup
 * @param {Number} STREAMER_TAG_PICKUP pickupid
 * @return {Number} retval
 */
function DestroyDynamicPickup( STREAMER_TAG_PICKUP pickupid ){
	return CallNative( "DestroyDynamicPickup", "i", STREAMER_TAG_PICKUP pickupid );
}
/**
 * IsValidDynamicPickup
 * @param {Number} STREAMER_TAG_PICKUP pickupid
 * @return {Number} retval
 */
function IsValidDynamicPickup( STREAMER_TAG_PICKUP pickupid ){
	return CallNative( "IsValidDynamicPickup", "i", STREAMER_TAG_PICKUP pickupid );
}
/**
 * CreateDynamicCP
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} size
 * @param {Number} worldid
 * @param {Number} interiorid
 * @param {Number} playerid
 * @param {Number} streamdistance
 * @return {Number} retval
 */
function CreateDynamicCP( x, y, z, size, worldid, interiorid, playerid, streamdistance ){
	worldid = typeof worldid !== 'undefined' ? worldid : -1;
	interiorid = typeof interiorid !== 'undefined' ? interiorid : -1;
	playerid = typeof playerid !== 'undefined' ? playerid : -1;
	streamdistance = typeof streamdistance !== 'undefined' ? streamdistance : 100.0;
	return CallNative( "CreateDynamicCP", "ffffiiif", x, y, z, size, worldid, interiorid, playerid, streamdistance );
}
/**
 * DestroyDynamicCP
 * @param {Number} STREAMER_TAG_CP checkpointid
 * @return {Number} retval
 */
function DestroyDynamicCP( STREAMER_TAG_CP checkpointid ){
	return CallNative( "DestroyDynamicCP", "i", STREAMER_TAG_CP checkpointid );
}
/**
 * IsValidDynamicCP
 * @param {Number} STREAMER_TAG_CP checkpointid
 * @return {Number} retval
 */
function IsValidDynamicCP( STREAMER_TAG_CP checkpointid ){
	return CallNative( "IsValidDynamicCP", "i", STREAMER_TAG_CP checkpointid );
}
/**
 * TogglePlayerDynamicCP
 * @param {Number} playerid
 * @param {Number} STREAMER_TAG_CP checkpointid
 * @param {Number} toggle
 * @return {Number} retval
 */
function TogglePlayerDynamicCP( playerid, STREAMER_TAG_CP checkpointid, toggle ){
	return CallNative( "TogglePlayerDynamicCP", "iii", playerid, STREAMER_TAG_CP checkpointid, toggle );
}
/**
 * TogglePlayerAllDynamicCPs
 * @param {Number} playerid
 * @param {Number} toggle
 * @return {Number} retval
 */
function TogglePlayerAllDynamicCPs( playerid, toggle ){
	return CallNative( "TogglePlayerAllDynamicCPs", "ii", playerid, toggle );
}
/**
 * IsPlayerInDynamicCP
 * @param {Number} playerid
 * @param {Number} STREAMER_TAG_CP checkpointid
 * @return {Number} retval
 */
function IsPlayerInDynamicCP( playerid, STREAMER_TAG_CP checkpointid ){
	return CallNative( "IsPlayerInDynamicCP", "ii", playerid, STREAMER_TAG_CP checkpointid );
}
/**
 * GetPlayerVisibleDynamicCP
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerVisibleDynamicCP( playerid ){
	return CallNative( "GetPlayerVisibleDynamicCP", "i", playerid );
}
/**
 * CreateDynamicRaceCP
 * @param {Number} type
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} nextx
 * @param {Number} nexty
 * @param {Number} nextz
 * @param {Number} size
 * @param {Number} worldid
 * @param {Number} interiorid
 * @param {Number} playerid
 * @param {Number} streamdistance
 * @return {Number} retval
 */
function CreateDynamicRaceCP( type, x, y, z, nextx, nexty, nextz, size, worldid, interiorid, playerid, streamdistance ){
	worldid = typeof worldid !== 'undefined' ? worldid : -1;
	interiorid = typeof interiorid !== 'undefined' ? interiorid : -1;
	playerid = typeof playerid !== 'undefined' ? playerid : -1;
	streamdistance = typeof streamdistance !== 'undefined' ? streamdistance : 100.0;
	return CallNative( "CreateDynamicRaceCP", "ifffffffiiif", type, x, y, z, nextx, nexty, nextz, size, worldid, interiorid, playerid, streamdistance );
}
/**
 * DestroyDynamicRaceCP
 * @param {Number} STREAMER_TAG_RACE_CP checkpointid
 * @return {Number} retval
 */
function DestroyDynamicRaceCP( STREAMER_TAG_RACE_CP checkpointid ){
	return CallNative( "DestroyDynamicRaceCP", "i", STREAMER_TAG_RACE_CP checkpointid );
}
/**
 * IsValidDynamicRaceCP
 * @param {Number} STREAMER_TAG_RACE_CP checkpointid
 * @return {Number} retval
 */
function IsValidDynamicRaceCP( STREAMER_TAG_RACE_CP checkpointid ){
	return CallNative( "IsValidDynamicRaceCP", "i", STREAMER_TAG_RACE_CP checkpointid );
}
/**
 * TogglePlayerDynamicRaceCP
 * @param {Number} playerid
 * @param {Number} STREAMER_TAG_RACE_CP checkpointid
 * @param {Number} toggle
 * @return {Number} retval
 */
function TogglePlayerDynamicRaceCP( playerid, STREAMER_TAG_RACE_CP checkpointid, toggle ){
	return CallNative( "TogglePlayerDynamicRaceCP", "iii", playerid, STREAMER_TAG_RACE_CP checkpointid, toggle );
}
/**
 * TogglePlayerAllDynamicRaceCPs
 * @param {Number} playerid
 * @param {Number} toggle
 * @return {Number} retval
 */
function TogglePlayerAllDynamicRaceCPs( playerid, toggle ){
	return CallNative( "TogglePlayerAllDynamicRaceCPs", "ii", playerid, toggle );
}
/**
 * IsPlayerInDynamicRaceCP
 * @param {Number} playerid
 * @param {Number} STREAMER_TAG_RACE_CP checkpointid
 * @return {Number} retval
 */
function IsPlayerInDynamicRaceCP( playerid, STREAMER_TAG_RACE_CP checkpointid ){
	return CallNative( "IsPlayerInDynamicRaceCP", "ii", playerid, STREAMER_TAG_RACE_CP checkpointid );
}
/**
 * GetPlayerVisibleDynamicRaceCP
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerVisibleDynamicRaceCP( playerid ){
	return CallNative( "GetPlayerVisibleDynamicRaceCP", "i", playerid );
}
/**
 * CreateDynamicMapIcon
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} type
 * @param {Number} color
 * @param {Number} worldid
 * @param {Number} interiorid
 * @param {Number} playerid
 * @param {Number} streamdistance
 * @param {Number} style
 * @return {Number} retval
 */
function CreateDynamicMapIcon( x, y, z, type, color, worldid, interiorid, playerid, streamdistance, style ){
	worldid = typeof worldid !== 'undefined' ? worldid : -1;
	interiorid = typeof interiorid !== 'undefined' ? interiorid : -1;
	playerid = typeof playerid !== 'undefined' ? playerid : -1;
	streamdistance = typeof streamdistance !== 'undefined' ? streamdistance : 100.0;
	style = typeof style !== 'undefined' ? style : MAPICON_LOCAL;
	return CallNative( "CreateDynamicMapIcon", "fffiiiiifi", x, y, z, type, color, worldid, interiorid, playerid, streamdistance, style );
}
/**
 * DestroyDynamicMapIcon
 * @param {Number} STREAMER_TAG_MAP_ICON iconid
 * @return {Number} retval
 */
function DestroyDynamicMapIcon( STREAMER_TAG_MAP_ICON iconid ){
	return CallNative( "DestroyDynamicMapIcon", "i", STREAMER_TAG_MAP_ICON iconid );
}
/**
 * IsValidDynamicMapIcon
 * @param {Number} STREAMER_TAG_MAP_ICON iconid
 * @return {Number} retval
 */
function IsValidDynamicMapIcon( STREAMER_TAG_MAP_ICON iconid ){
	return CallNative( "IsValidDynamicMapIcon", "i", STREAMER_TAG_MAP_ICON iconid );
}
/**
 * CreateDynamic3DTextLabel
 * @param {String} text
 * @param {Number} color
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} drawdistance
 * @param {Number} attachedplayer
 * @param {Number} attachedvehicle
 * @param {Number} testlos
 * @param {Number} worldid
 * @param {Number} interiorid
 * @param {Number} playerid
 * @param {Number} streamdistance
 * @return {Number} retval
 */
function CreateDynamic3DTextLabel( text, color, x, y, z, drawdistance, attachedplayer, attachedvehicle, testlos, worldid, interiorid, playerid, streamdistance ){
	attachedplayer = typeof attachedplayer !== 'undefined' ? attachedplayer : INVALID_PLAYER_ID;
	attachedvehicle = typeof attachedvehicle !== 'undefined' ? attachedvehicle : INVALID_VEHICLE_ID;
	testlos = typeof testlos !== 'undefined' ? testlos : 0;
	worldid = typeof worldid !== 'undefined' ? worldid : -1;
	interiorid = typeof interiorid !== 'undefined' ? interiorid : -1;
	playerid = typeof playerid !== 'undefined' ? playerid : -1;
	streamdistance = typeof streamdistance !== 'undefined' ? streamdistance : 100.0;
	return CallNative( "CreateDynamic3DTextLabel", "siffffiiiiiif", text, color, x, y, z, drawdistance, attachedplayer, attachedvehicle, testlos, worldid, interiorid, playerid, streamdistance );
}
/**
 * DestroyDynamic3DTextLabel
 * @param {Number} STREAMER_TAG_3D_TEXT_LABEL id
 * @return {Number} retval
 */
function DestroyDynamic3DTextLabel( STREAMER_TAG_3D_TEXT_LABEL id ){
	return CallNative( "DestroyDynamic3DTextLabel", "i", STREAMER_TAG_3D_TEXT_LABEL id );
}
/**
 * IsValidDynamic3DTextLabel
 * @param {Number} STREAMER_TAG_3D_TEXT_LABEL id
 * @return {Number} retval
 */
function IsValidDynamic3DTextLabel( STREAMER_TAG_3D_TEXT_LABEL id ){
	return CallNative( "IsValidDynamic3DTextLabel", "i", STREAMER_TAG_3D_TEXT_LABEL id );
}
/**
 * GetDynamic3DTextLabelText
 * @param {Number} STREAMER_TAG_3D_TEXT_LABEL id
 * @param {Number} maxtext
 * @return {String} text
 */
function GetDynamic3DTextLabelText( STREAMER_TAG_3D_TEXT_LABEL id, maxtext ){
	maxtext = typeof maxtext !== 'undefined' ? maxtext : 256;
	return CallNative( "GetDynamic3DTextLabelText", "iSi", STREAMER_TAG_3D_TEXT_LABEL id, maxtext );
}
/**
 * UpdateDynamic3DTextLabelText
 * @param {Number} STREAMER_TAG_3D_TEXT_LABEL id
 * @param {Number} color
 * @param {String} text
 * @return {Number} retval
 */
function UpdateDynamic3DTextLabelText( STREAMER_TAG_3D_TEXT_LABEL id, color, text ){
	return CallNative( "UpdateDynamic3DTextLabelText", "iis", STREAMER_TAG_3D_TEXT_LABEL id, color, text );
}
/**
 * CreateDynamicCircle
 * @param {Number} x
 * @param {Number} y
 * @param {Number} size
 * @param {Number} worldid
 * @param {Number} interiorid
 * @param {Number} playerid
 * @return {Number} retval
 */
function CreateDynamicCircle( x, y, size, worldid, interiorid, playerid ){
	worldid = typeof worldid !== 'undefined' ? worldid : -1;
	interiorid = typeof interiorid !== 'undefined' ? interiorid : -1;
	playerid = typeof playerid !== 'undefined' ? playerid : -1;
	return CallNative( "CreateDynamicCircle", "fffiii", x, y, size, worldid, interiorid, playerid );
}
/**
 * CreateDynamicCylinder
 * @param {Number} x
 * @param {Number} y
 * @param {Number} minz
 * @param {Number} maxz
 * @param {Number} size
 * @param {Number} worldid
 * @param {Number} interiorid
 * @param {Number} playerid
 * @return {Number} retval
 */
function CreateDynamicCylinder( x, y, minz, maxz, size, worldid, interiorid, playerid ){
	worldid = typeof worldid !== 'undefined' ? worldid : -1;
	interiorid = typeof interiorid !== 'undefined' ? interiorid : -1;
	playerid = typeof playerid !== 'undefined' ? playerid : -1;
	return CallNative( "CreateDynamicCylinder", "fffffiii", x, y, minz, maxz, size, worldid, interiorid, playerid );
}
/**
 * CreateDynamicSphere
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} size
 * @param {Number} worldid
 * @param {Number} interiorid
 * @param {Number} playerid
 * @return {Number} retval
 */
function CreateDynamicSphere( x, y, z, size, worldid, interiorid, playerid ){
	worldid = typeof worldid !== 'undefined' ? worldid : -1;
	interiorid = typeof interiorid !== 'undefined' ? interiorid : -1;
	playerid = typeof playerid !== 'undefined' ? playerid : -1;
	return CallNative( "CreateDynamicSphere", "ffffiii", x, y, z, size, worldid, interiorid, playerid );
}
/**
 * CreateDynamicRectangle
 * @param {Number} minx
 * @param {Number} miny
 * @param {Number} maxx
 * @param {Number} maxy
 * @param {Number} worldid
 * @param {Number} interiorid
 * @param {Number} playerid
 * @return {Number} retval
 */
function CreateDynamicRectangle( minx, miny, maxx, maxy, worldid, interiorid, playerid ){
	worldid = typeof worldid !== 'undefined' ? worldid : -1;
	interiorid = typeof interiorid !== 'undefined' ? interiorid : -1;
	playerid = typeof playerid !== 'undefined' ? playerid : -1;
	return CallNative( "CreateDynamicRectangle", "ffffiii", minx, miny, maxx, maxy, worldid, interiorid, playerid );
}
/**
 * CreateDynamicCuboid
 * @param {Number} minx
 * @param {Number} miny
 * @param {Number} minz
 * @param {Number} maxx
 * @param {Number} maxy
 * @param {Number} maxz
 * @param {Number} worldid
 * @param {Number} interiorid
 * @param {Number} playerid
 * @return {Number} retval
 */
function CreateDynamicCuboid( minx, miny, minz, maxx, maxy, maxz, worldid, interiorid, playerid ){
	worldid = typeof worldid !== 'undefined' ? worldid : -1;
	interiorid = typeof interiorid !== 'undefined' ? interiorid : -1;
	playerid = typeof playerid !== 'undefined' ? playerid : -1;
	return CallNative( "CreateDynamicCuboid", "ffffffiii", minx, miny, minz, maxx, maxy, maxz, worldid, interiorid, playerid );
}
/**
 * CreateDynamicCube
 * @param {Number} minx
 * @param {Number} miny
 * @param {Number} minz
 * @param {Number} maxx
 * @param {Number} maxy
 * @param {Number} maxz
 * @param {Number} worldid
 * @param {Number} interiorid
 * @param {Number} playerid
 * @return {Number} retval
 */
function CreateDynamicCube( minx, miny, minz, maxx, maxy, maxz, worldid, interiorid, playerid ){
	worldid = typeof worldid !== 'undefined' ? worldid : -1;
	interiorid = typeof interiorid !== 'undefined' ? interiorid : -1;
	playerid = typeof playerid !== 'undefined' ? playerid : -1;
	return CallNative( "CreateDynamicCube", "ffffffiii", minx, miny, minz, maxx, maxy, maxz, worldid, interiorid, playerid );
}
/**
 * CreateDynamicPolygon
 * @param {Number} points[]
 * @param {Number} minz
 * @param {Number} maxz
 * @param {Number} maxpoints
 * @param {Number} worldid
 * @param {Number} interiorid
 * @param {Number} playerid
 * @return {Number} retval
 */
function CreateDynamicPolygon( points[], minz, maxz, maxpoints, worldid, interiorid, playerid ){
	minz = typeof minz !== 'undefined' ? minz : -FLOAT_INFINITY;
	maxz = typeof maxz !== 'undefined' ? maxz : FLOAT_INFINITY;
	maxpoints = typeof maxpoints !== 'undefined' ? maxpoints : 256;
	worldid = typeof worldid !== 'undefined' ? worldid : -1;
	interiorid = typeof interiorid !== 'undefined' ? interiorid : -1;
	playerid = typeof playerid !== 'undefined' ? playerid : -1;
	return CallNative( "CreateDynamicPolygon", "fffiiii", points[], minz, maxz, maxpoints, worldid, interiorid, playerid );
}
/**
 * DestroyDynamicArea
 * @param {Number} STREAMER_TAG_AREA areaid
 * @return {Number} retval
 */
function DestroyDynamicArea( STREAMER_TAG_AREA areaid ){
	return CallNative( "DestroyDynamicArea", "i", STREAMER_TAG_AREA areaid );
}
/**
 * IsValidDynamicArea
 * @param {Number} STREAMER_TAG_AREA areaid
 * @return {Number} retval
 */
function IsValidDynamicArea( STREAMER_TAG_AREA areaid ){
	return CallNative( "IsValidDynamicArea", "i", STREAMER_TAG_AREA areaid );
}
/**
 * GetDynamicPolygonPoints
 * @param {Number} STREAMER_TAG_AREA areaid
 * @param {Number} points[]
 * @param {Number} maxpoints
 * @return {Number} retval
 */
function GetDynamicPolygonPoints( STREAMER_TAG_AREA areaid, points[], maxpoints ){
	maxpoints = typeof maxpoints !== 'undefined' ? maxpoints : 256;
	return CallNative( "GetDynamicPolygonPoints", "ifi", STREAMER_TAG_AREA areaid, points[], maxpoints );
}
/**
 * GetDynamicPolygonNumberPoints
 * @param {Number} STREAMER_TAG_AREA areaid
 * @return {Number} retval
 */
function GetDynamicPolygonNumberPoints( STREAMER_TAG_AREA areaid ){
	return CallNative( "GetDynamicPolygonNumberPoints", "i", STREAMER_TAG_AREA areaid );
}
/**
 * TogglePlayerDynamicArea
 * @param {Number} playerid
 * @param {Number} STREAMER_TAG_AREA areaid
 * @param {Number} toggle
 * @return {Number} retval
 */
function TogglePlayerDynamicArea( playerid, STREAMER_TAG_AREA areaid, toggle ){
	return CallNative( "TogglePlayerDynamicArea", "iii", playerid, STREAMER_TAG_AREA areaid, toggle );
}
/**
 * TogglePlayerAllDynamicAreas
 * @param {Number} playerid
 * @param {Number} toggle
 * @return {Number} retval
 */
function TogglePlayerAllDynamicAreas( playerid, toggle ){
	return CallNative( "TogglePlayerAllDynamicAreas", "ii", playerid, toggle );
}
/**
 * IsPlayerInDynamicArea
 * @param {Number} playerid
 * @param {Number} STREAMER_TAG_AREA areaid
 * @param {Number} recheck
 * @return {Number} retval
 */
function IsPlayerInDynamicArea( playerid, STREAMER_TAG_AREA areaid, recheck ){
	recheck = typeof recheck !== 'undefined' ? recheck : 0;
	return CallNative( "IsPlayerInDynamicArea", "iii", playerid, STREAMER_TAG_AREA areaid, recheck );
}
/**
 * IsPlayerInAnyDynamicArea
 * @param {Number} playerid
 * @param {Number} recheck
 * @return {Number} retval
 */
function IsPlayerInAnyDynamicArea( playerid, recheck ){
	recheck = typeof recheck !== 'undefined' ? recheck : 0;
	return CallNative( "IsPlayerInAnyDynamicArea", "ii", playerid, recheck );
}
/**
 * IsAnyPlayerInDynamicArea
 * @param {Number} STREAMER_TAG_AREA areaid
 * @param {Number} recheck
 * @return {Number} retval
 */
function IsAnyPlayerInDynamicArea( STREAMER_TAG_AREA areaid, recheck ){
	recheck = typeof recheck !== 'undefined' ? recheck : 0;
	return CallNative( "IsAnyPlayerInDynamicArea", "ii", STREAMER_TAG_AREA areaid, recheck );
}
/**
 * IsAnyPlayerInAnyDynamicArea
 * @param {Number} recheck
 * @return {Number} retval
 */
function IsAnyPlayerInAnyDynamicArea( recheck ){
	recheck = typeof recheck !== 'undefined' ? recheck : 0;
	return CallNative( "IsAnyPlayerInAnyDynamicArea", "i", recheck );
}
/**
 * GetPlayerDynamicAreas
 * @param {Number} playerid
 * @param {String} STREAMER_TAG_AREA areas
 * @param {Number} maxareas
 * @return {Number} retval
 */
function GetPlayerDynamicAreas( playerid, STREAMER_TAG_AREA areas, maxareas ){
	maxareas = typeof maxareas !== 'undefined' ? maxareas : 256;
	return CallNative( "GetPlayerDynamicAreas", "isi", playerid, STREAMER_TAG_AREA areas, maxareas );
}
/**
 * GetPlayerNumberDynamicAreas
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerNumberDynamicAreas( playerid ){
	return CallNative( "GetPlayerNumberDynamicAreas", "i", playerid );
}
/**
 * IsPointInDynamicArea
 * @param {Number} STREAMER_TAG_AREA areaid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function IsPointInDynamicArea( STREAMER_TAG_AREA areaid, x, y, z ){
	return CallNative( "IsPointInDynamicArea", "ifff", STREAMER_TAG_AREA areaid, x, y, z );
}
/**
 * IsPointInAnyDynamicArea
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function IsPointInAnyDynamicArea( x, y, z ){
	return CallNative( "IsPointInAnyDynamicArea", "fff", x, y, z );
}
/**
 * GetDynamicAreasForPoint
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {String} STREAMER_TAG_AREA areas
 * @param {Number} maxareas
 * @return {Number} retval
 */
function GetDynamicAreasForPoint( x, y, z, STREAMER_TAG_AREA areas, maxareas ){
	maxareas = typeof maxareas !== 'undefined' ? maxareas : 256;
	return CallNative( "GetDynamicAreasForPoint", "fffsi", x, y, z, STREAMER_TAG_AREA areas, maxareas );
}
/**
 * GetNumberDynamicAreasForPoint
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function GetNumberDynamicAreasForPoint( x, y, z ){
	return CallNative( "GetNumberDynamicAreasForPoint", "fff", x, y, z );
}
/**
 * AttachDynamicAreaToObject
 * @param {Number} STREAMER_TAG_AREA areaid
 * @param {Number} STREAMER_ALL_TAGS objectid
 * @param {Number} type
 * @param {Number} playerid
 * @return {Number} retval
 */
function AttachDynamicAreaToObject( STREAMER_TAG_AREA areaid, STREAMER_ALL_TAGS objectid, type, playerid ){
	type = typeof type !== 'undefined' ? type : STREAMER_OBJECT_TYPE_DYNAMIC;
	playerid = typeof playerid !== 'undefined' ? playerid : INVALID_PLAYER_ID;
	return CallNative( "AttachDynamicAreaToObject", "iiii", STREAMER_TAG_AREA areaid, STREAMER_ALL_TAGS objectid, type, playerid );
}
/**
 * AttachDynamicAreaToPlayer
 * @param {Number} STREAMER_TAG_AREA areaid
 * @param {Number} playerid
 * @return {Number} retval
 */
function AttachDynamicAreaToPlayer( STREAMER_TAG_AREA areaid, playerid ){
	return CallNative( "AttachDynamicAreaToPlayer", "ii", STREAMER_TAG_AREA areaid, playerid );
}
/**
 * AttachDynamicAreaToVehicle
 * @param {Number} STREAMER_TAG_AREA areaid
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function AttachDynamicAreaToVehicle( STREAMER_TAG_AREA areaid, vehicleid ){
	return CallNative( "AttachDynamicAreaToVehicle", "ii", STREAMER_TAG_AREA areaid, vehicleid );
}
/**
 * CreateDynamicObjectEx
 * @param {Number} modelid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} rx
 * @param {Number} ry
 * @param {Number} rz
 * @param {Number} drawdistance
 * @param {Number} streamdistance
 * @param {Number} maxworlds
 * @param {Number} maxinteriors
 * @param {Number} maxplayers
 * @return {{ worlds: String,  interiors: String,  players: String }}
 */
function CreateDynamicObjectEx( modelid, x, y, z, rx, ry, rz, drawdistance, streamdistance, maxworlds, maxinteriors, maxplayers ){
	drawdistance = typeof drawdistance !== 'undefined' ? drawdistance : 0.0;
	streamdistance = typeof streamdistance !== 'undefined' ? streamdistance : 200.0;
	worlds = typeof worlds !== 'undefined' ? worlds : { -1 };
	interiors = typeof interiors !== 'undefined' ? interiors : { -1 };
	players = typeof players !== 'undefined' ? players : { -1 };
	maxworlds = typeof maxworlds !== 'undefined' ? maxworlds : 256;
	maxinteriors = typeof maxinteriors !== 'undefined' ? maxinteriors : 256;
	maxplayers = typeof maxplayers !== 'undefined' ? maxplayers : 256;
	return CallNative( "CreateDynamicObjectEx", "iffffffffSSSiii", modelid, x, y, z, rx, ry, rz, drawdistance, streamdistance, maxworlds, maxinteriors, maxplayers, [ "worlds", "interiors", "players" ] );
}
/**
 * CreateDynamicPickupEx
 * @param {Number} modelid
 * @param {Number} type
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} streamdistance
 * @param {Number} maxworlds
 * @param {Number} maxinteriors
 * @param {Number} maxplayers
 * @return {{ worlds: String,  interiors: String,  players: String }}
 */
function CreateDynamicPickupEx( modelid, type, x, y, z, streamdistance, maxworlds, maxinteriors, maxplayers ){
	streamdistance = typeof streamdistance !== 'undefined' ? streamdistance : 100.0;
	worlds = typeof worlds !== 'undefined' ? worlds : { -1 };
	interiors = typeof interiors !== 'undefined' ? interiors : { -1 };
	players = typeof players !== 'undefined' ? players : { -1 };
	maxworlds = typeof maxworlds !== 'undefined' ? maxworlds : 256;
	maxinteriors = typeof maxinteriors !== 'undefined' ? maxinteriors : 256;
	maxplayers = typeof maxplayers !== 'undefined' ? maxplayers : 256;
	return CallNative( "CreateDynamicPickupEx", "iiffffSSSiii", modelid, type, x, y, z, streamdistance, maxworlds, maxinteriors, maxplayers, [ "worlds", "interiors", "players" ] );
}
/**
 * CreateDynamicCPEx
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} size
 * @param {Number} streamdistance
 * @param {Number} maxworlds
 * @param {Number} maxinteriors
 * @param {Number} maxplayers
 * @return {{ worlds: String,  interiors: String,  players: String }}
 */
function CreateDynamicCPEx( x, y, z, size, streamdistance, maxworlds, maxinteriors, maxplayers ){
	streamdistance = typeof streamdistance !== 'undefined' ? streamdistance : 100.0;
	worlds = typeof worlds !== 'undefined' ? worlds : { -1 };
	interiors = typeof interiors !== 'undefined' ? interiors : { -1 };
	players = typeof players !== 'undefined' ? players : { -1 };
	maxworlds = typeof maxworlds !== 'undefined' ? maxworlds : 256;
	maxinteriors = typeof maxinteriors !== 'undefined' ? maxinteriors : 256;
	maxplayers = typeof maxplayers !== 'undefined' ? maxplayers : 256;
	return CallNative( "CreateDynamicCPEx", "fffffSSSiii", x, y, z, size, streamdistance, maxworlds, maxinteriors, maxplayers, [ "worlds", "interiors", "players" ] );
}
/**
 * CreateDynamicRaceCPEx
 * @param {Number} type
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} nextx
 * @param {Number} nexty
 * @param {Number} nextz
 * @param {Number} size
 * @param {Number} streamdistance
 * @param {Number} maxworlds
 * @param {Number} maxinteriors
 * @param {Number} maxplayers
 * @return {{ worlds: String,  interiors: String,  players: String }}
 */
function CreateDynamicRaceCPEx( type, x, y, z, nextx, nexty, nextz, size, streamdistance, maxworlds, maxinteriors, maxplayers ){
	streamdistance = typeof streamdistance !== 'undefined' ? streamdistance : 100.0;
	worlds = typeof worlds !== 'undefined' ? worlds : { -1 };
	interiors = typeof interiors !== 'undefined' ? interiors : { -1 };
	players = typeof players !== 'undefined' ? players : { -1 };
	maxworlds = typeof maxworlds !== 'undefined' ? maxworlds : 256;
	maxinteriors = typeof maxinteriors !== 'undefined' ? maxinteriors : 256;
	maxplayers = typeof maxplayers !== 'undefined' ? maxplayers : 256;
	return CallNative( "CreateDynamicRaceCPEx", "iffffffffSSSiii", type, x, y, z, nextx, nexty, nextz, size, streamdistance, maxworlds, maxinteriors, maxplayers, [ "worlds", "interiors", "players" ] );
}
/**
 * CreateDynamicMapIconEx
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} type
 * @param {Number} color
 * @param {Number} style
 * @param {Number} streamdistance
 * @param {Number} maxworlds
 * @param {Number} maxinteriors
 * @param {Number} maxplayers
 * @return {{ worlds: String,  interiors: String,  players: String }}
 */
function CreateDynamicMapIconEx( x, y, z, type, color, style, streamdistance, maxworlds, maxinteriors, maxplayers ){
	style = typeof style !== 'undefined' ? style : MAPICON_LOCAL;
	streamdistance = typeof streamdistance !== 'undefined' ? streamdistance : 100.0;
	worlds = typeof worlds !== 'undefined' ? worlds : { -1 };
	interiors = typeof interiors !== 'undefined' ? interiors : { -1 };
	players = typeof players !== 'undefined' ? players : { -1 };
	maxworlds = typeof maxworlds !== 'undefined' ? maxworlds : 256;
	maxinteriors = typeof maxinteriors !== 'undefined' ? maxinteriors : 256;
	maxplayers = typeof maxplayers !== 'undefined' ? maxplayers : 256;
	return CallNative( "CreateDynamicMapIconEx", "fffiiifSSSiii", x, y, z, type, color, style, streamdistance, maxworlds, maxinteriors, maxplayers, [ "worlds", "interiors", "players" ] );
}
/**
 * CreateDynamic3DTextLabelEx
 * @param {String} text
 * @param {Number} color
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} drawdistance
 * @param {Number} attachedplayer
 * @param {Number} attachedvehicle
 * @param {Number} testlos
 * @param {Number} streamdistance
 * @param {Number} maxworlds
 * @param {Number} maxinteriors
 * @param {Number} maxplayers
 * @return {{ worlds: String,  interiors: String,  players: String }}
 */
function CreateDynamic3DTextLabelEx( text, color, x, y, z, drawdistance, attachedplayer, attachedvehicle, testlos, streamdistance, maxworlds, maxinteriors, maxplayers ){
	attachedplayer = typeof attachedplayer !== 'undefined' ? attachedplayer : INVALID_PLAYER_ID;
	attachedvehicle = typeof attachedvehicle !== 'undefined' ? attachedvehicle : INVALID_VEHICLE_ID;
	testlos = typeof testlos !== 'undefined' ? testlos : 0;
	streamdistance = typeof streamdistance !== 'undefined' ? streamdistance : 100.0;
	worlds = typeof worlds !== 'undefined' ? worlds : { -1 };
	interiors = typeof interiors !== 'undefined' ? interiors : { -1 };
	players = typeof players !== 'undefined' ? players : { -1 };
	maxworlds = typeof maxworlds !== 'undefined' ? maxworlds : 256;
	maxinteriors = typeof maxinteriors !== 'undefined' ? maxinteriors : 256;
	maxplayers = typeof maxplayers !== 'undefined' ? maxplayers : 256;
	return CallNative( "CreateDynamic3DTextLabelEx", "siffffiiifSSSiii", text, color, x, y, z, drawdistance, attachedplayer, attachedvehicle, testlos, streamdistance, maxworlds, maxinteriors, maxplayers, [ "worlds", "interiors", "players" ] );
}
/**
 * CreateDynamicCircleEx
 * @param {Number} x
 * @param {Number} y
 * @param {Number} size
 * @param {Number} maxworlds
 * @param {Number} maxinteriors
 * @param {Number} maxplayers
 * @return {{ worlds: String,  interiors: String,  players: String }}
 */
function CreateDynamicCircleEx( x, y, size, maxworlds, maxinteriors, maxplayers ){
	worlds = typeof worlds !== 'undefined' ? worlds : { -1 };
	interiors = typeof interiors !== 'undefined' ? interiors : { -1 };
	players = typeof players !== 'undefined' ? players : { -1 };
	maxworlds = typeof maxworlds !== 'undefined' ? maxworlds : 256;
	maxinteriors = typeof maxinteriors !== 'undefined' ? maxinteriors : 256;
	maxplayers = typeof maxplayers !== 'undefined' ? maxplayers : 256;
	return CallNative( "CreateDynamicCircleEx", "fffSSSiii", x, y, size, maxworlds, maxinteriors, maxplayers, [ "worlds", "interiors", "players" ] );
}
/**
 * CreateDynamicCylinderEx
 * @param {Number} x
 * @param {Number} y
 * @param {Number} minz
 * @param {Number} maxz
 * @param {Number} size
 * @param {Number} maxworlds
 * @param {Number} maxinteriors
 * @param {Number} maxplayers
 * @return {{ worlds: String,  interiors: String,  players: String }}
 */
function CreateDynamicCylinderEx( x, y, minz, maxz, size, maxworlds, maxinteriors, maxplayers ){
	worlds = typeof worlds !== 'undefined' ? worlds : { -1 };
	interiors = typeof interiors !== 'undefined' ? interiors : { -1 };
	players = typeof players !== 'undefined' ? players : { -1 };
	maxworlds = typeof maxworlds !== 'undefined' ? maxworlds : 256;
	maxinteriors = typeof maxinteriors !== 'undefined' ? maxinteriors : 256;
	maxplayers = typeof maxplayers !== 'undefined' ? maxplayers : 256;
	return CallNative( "CreateDynamicCylinderEx", "fffffSSSiii", x, y, minz, maxz, size, maxworlds, maxinteriors, maxplayers, [ "worlds", "interiors", "players" ] );
}
/**
 * CreateDynamicSphereEx
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} size
 * @param {Number} maxworlds
 * @param {Number} maxinteriors
 * @param {Number} maxplayers
 * @return {{ worlds: String,  interiors: String,  players: String }}
 */
function CreateDynamicSphereEx( x, y, z, size, maxworlds, maxinteriors, maxplayers ){
	worlds = typeof worlds !== 'undefined' ? worlds : { -1 };
	interiors = typeof interiors !== 'undefined' ? interiors : { -1 };
	players = typeof players !== 'undefined' ? players : { -1 };
	maxworlds = typeof maxworlds !== 'undefined' ? maxworlds : 256;
	maxinteriors = typeof maxinteriors !== 'undefined' ? maxinteriors : 256;
	maxplayers = typeof maxplayers !== 'undefined' ? maxplayers : 256;
	return CallNative( "CreateDynamicSphereEx", "ffffSSSiii", x, y, z, size, maxworlds, maxinteriors, maxplayers, [ "worlds", "interiors", "players" ] );
}
/**
 * CreateDynamicRectangleEx
 * @param {Number} minx
 * @param {Number} miny
 * @param {Number} maxx
 * @param {Number} maxy
 * @param {Number} maxworlds
 * @param {Number} maxinteriors
 * @param {Number} maxplayers
 * @return {{ worlds: String,  interiors: String,  players: String }}
 */
function CreateDynamicRectangleEx( minx, miny, maxx, maxy, maxworlds, maxinteriors, maxplayers ){
	worlds = typeof worlds !== 'undefined' ? worlds : { -1 };
	interiors = typeof interiors !== 'undefined' ? interiors : { -1 };
	players = typeof players !== 'undefined' ? players : { -1 };
	maxworlds = typeof maxworlds !== 'undefined' ? maxworlds : 256;
	maxinteriors = typeof maxinteriors !== 'undefined' ? maxinteriors : 256;
	maxplayers = typeof maxplayers !== 'undefined' ? maxplayers : 256;
	return CallNative( "CreateDynamicRectangleEx", "ffffSSSiii", minx, miny, maxx, maxy, maxworlds, maxinteriors, maxplayers, [ "worlds", "interiors", "players" ] );
}
/**
 * CreateDynamicCuboidEx
 * @param {Number} minx
 * @param {Number} miny
 * @param {Number} minz
 * @param {Number} maxx
 * @param {Number} maxy
 * @param {Number} maxz
 * @param {Number} maxworlds
 * @param {Number} maxinteriors
 * @param {Number} maxplayers
 * @return {{ worlds: String,  interiors: String,  players: String }}
 */
function CreateDynamicCuboidEx( minx, miny, minz, maxx, maxy, maxz, maxworlds, maxinteriors, maxplayers ){
	worlds = typeof worlds !== 'undefined' ? worlds : { -1 };
	interiors = typeof interiors !== 'undefined' ? interiors : { -1 };
	players = typeof players !== 'undefined' ? players : { -1 };
	maxworlds = typeof maxworlds !== 'undefined' ? maxworlds : 256;
	maxinteriors = typeof maxinteriors !== 'undefined' ? maxinteriors : 256;
	maxplayers = typeof maxplayers !== 'undefined' ? maxplayers : 256;
	return CallNative( "CreateDynamicCuboidEx", "ffffffSSSiii", minx, miny, minz, maxx, maxy, maxz, maxworlds, maxinteriors, maxplayers, [ "worlds", "interiors", "players" ] );
}
/**
 * CreateDynamicCubeEx
 * @param {Number} minx
 * @param {Number} miny
 * @param {Number} minz
 * @param {Number} maxx
 * @param {Number} maxy
 * @param {Number} maxz
 * @param {Number} maxworlds
 * @param {Number} maxinteriors
 * @param {Number} maxplayers
 * @return {{ worlds: String,  interiors: String,  players: String }}
 */
function CreateDynamicCubeEx( minx, miny, minz, maxx, maxy, maxz, maxworlds, maxinteriors, maxplayers ){
	worlds = typeof worlds !== 'undefined' ? worlds : { -1 };
	interiors = typeof interiors !== 'undefined' ? interiors : { -1 };
	players = typeof players !== 'undefined' ? players : { -1 };
	maxworlds = typeof maxworlds !== 'undefined' ? maxworlds : 256;
	maxinteriors = typeof maxinteriors !== 'undefined' ? maxinteriors : 256;
	maxplayers = typeof maxplayers !== 'undefined' ? maxplayers : 256;
	return CallNative( "CreateDynamicCubeEx", "ffffffSSSiii", minx, miny, minz, maxx, maxy, maxz, maxworlds, maxinteriors, maxplayers, [ "worlds", "interiors", "players" ] );
}
/**
 * CreateDynamicPolygonEx
 * @param {Number} points[]
 * @param {Number} minz
 * @param {Number} maxz
 * @param {Number} maxpoints
 * @param {Number} maxworlds
 * @param {Number} maxinteriors
 * @param {Number} maxplayers
 * @return {{ worlds: String,  interiors: String,  players: String }}
 */
function CreateDynamicPolygonEx( points[], minz, maxz, maxpoints, maxworlds, maxinteriors, maxplayers ){
	minz = typeof minz !== 'undefined' ? minz : -FLOAT_INFINITY;
	maxz = typeof maxz !== 'undefined' ? maxz : FLOAT_INFINITY;
	maxpoints = typeof maxpoints !== 'undefined' ? maxpoints : 256;
	worlds = typeof worlds !== 'undefined' ? worlds : { -1 };
	interiors = typeof interiors !== 'undefined' ? interiors : { -1 };
	players = typeof players !== 'undefined' ? players : { -1 };
	maxworlds = typeof maxworlds !== 'undefined' ? maxworlds : 256;
	maxinteriors = typeof maxinteriors !== 'undefined' ? maxinteriors : 256;
	maxplayers = typeof maxplayers !== 'undefined' ? maxplayers : 256;
	return CallNative( "CreateDynamicPolygonEx", "fffiSSSiii", points[], minz, maxz, maxpoints, maxworlds, maxinteriors, maxplayers, [ "worlds", "interiors", "players" ] );
}
/**
 * Streamer_TickRate
 * @param {Number} rate
 * @return {Number} retval
 */
function Streamer_TickRate( rate ){
	return CallNative( "Streamer_TickRate", "i", rate );
}
/**
 * Streamer_MaxItems
 * @param {Number} type
 * @param {Number} items
 * @return {Number} retval
 */
function Streamer_MaxItems( type, items ){
	return CallNative( "Streamer_MaxItems", "ii", type, items );
}
/**
 * Streamer_VisibleItems
 * @param {Number} type
 * @param {Number} items
 * @param {Number} playerid
 * @return {Number} retval
 */
function Streamer_VisibleItems( type, items, playerid ){
	playerid = typeof playerid !== 'undefined' ? playerid : -1;
	return CallNative( "Streamer_VisibleItems", "iii", type, items, playerid );
}
/**
 * Streamer_CellDistance
 * @param {Number} distance
 * @return {Number} retval
 */
function Streamer_CellDistance( distance ){
	return CallNative( "Streamer_CellDistance", "f", distance );
}
/**
 * Streamer_CellSize
 * @param {Number} size
 * @return {Number} retval
 */
function Streamer_CellSize( size ){
	return CallNative( "Streamer_CellSize", "f", size );
}
/**
 * Streamer_CallbackHook
 * @param {Number} callback
 * @return {Number} retval
 */
function Streamer_CallbackHook( callback ){
	return CallNative( "Streamer_CallbackHook", "i", callback );
}
/**
 * DestroyAllDynamicObjects
 * @return {Number} retval
 */
function DestroyAllDynamicObjects(){
	CallNative( "DestroyAllDynamicObjects" );
}
/**
 * CountDynamicObjects
 * @return {Number} retval
 */
function CountDynamicObjects(){
	CallNative( "CountDynamicObjects" );
}
/**
 * DestroyAllDynamicPickups
 * @return {Number} retval
 */
function DestroyAllDynamicPickups(){
	CallNative( "DestroyAllDynamicPickups" );
}
/**
 * CountDynamicPickups
 * @return {Number} retval
 */
function CountDynamicPickups(){
	CallNative( "CountDynamicPickups" );
}
/**
 * DestroyAllDynamicCPs
 * @return {Number} retval
 */
function DestroyAllDynamicCPs(){
	CallNative( "DestroyAllDynamicCPs" );
}
/**
 * CountDynamicCPs
 * @return {Number} retval
 */
function CountDynamicCPs(){
	CallNative( "CountDynamicCPs" );
}
/**
 * DestroyAllDynamicRaceCPs
 * @return {Number} retval
 */
function DestroyAllDynamicRaceCPs(){
	CallNative( "DestroyAllDynamicRaceCPs" );
}
/**
 * CountDynamicRaceCPs
 * @return {Number} retval
 */
function CountDynamicRaceCPs(){
	CallNative( "CountDynamicRaceCPs" );
}
/**
 * DestroyAllDynamicMapIcons
 * @return {Number} retval
 */
function DestroyAllDynamicMapIcons(){
	CallNative( "DestroyAllDynamicMapIcons" );
}
/**
 * CountDynamicMapIcons
 * @return {Number} retval
 */
function CountDynamicMapIcons(){
	CallNative( "CountDynamicMapIcons" );
}
/**
 * DestroyAllDynamic3DTextLabels
 * @return {Number} retval
 */
function DestroyAllDynamic3DTextLabels(){
	CallNative( "DestroyAllDynamic3DTextLabels" );
}
/**
 * CountDynamic3DTextLabels
 * @return {Number} retval
 */
function CountDynamic3DTextLabels(){
	CallNative( "CountDynamic3DTextLabels" );
}
/**
 * DestroyAllDynamicAreas
 * @return {Number} retval
 */
function DestroyAllDynamicAreas(){
	CallNative( "DestroyAllDynamicAreas" );
}
/**
 * CountDynamicAreas
 * @return {Number} retval
 */
function CountDynamicAreas(){
	CallNative( "CountDynamicAreas" );
}
