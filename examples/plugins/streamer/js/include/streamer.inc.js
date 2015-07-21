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
const FLOAT_INFINITY = (Float:0x7F800000);
const STREAMER_TAG_3D_TEXT_LABEL = Text3D:;
const STREAMER_ALL_TAGS = {Text3D,_}:;
const STREAMER_TAG_3D_TEXT_LABEL = DynamicText3D:;
const STREAMER_ALL_TAGS = {DynamicText3D,_}:;
const STREAMER_TAG_OBJECT = DynamicObject:;
const STREAMER_TAG_PICKUP = DynamicPickup:;
const STREAMER_TAG_CP = DynamicCP:;
const STREAMER_TAG_RACE_CP = DynamicRaceCP:;
const STREAMER_TAG_MAP_ICON = DynamicMapIcon:;
const STREAMER_TAG_3D_TEXT_LABEL = DynamicText3D:;
const STREAMER_TAG_AREA = DynamicArea:;
const STREAMER_ALL_TAGS = {DynamicObject,DynamicPickup,DynamicCP,DynamicRaceCP,DynamicMapIcon,DynamicText3D,DynamicArea,_}:;
/**
 * Streamer_GetTickRate
 * @see https://wiki.sa-mp.com/wiki/Streamer_GetTickRate
 * @return {Number} retval
 */
function Streamer_GetTickRate(){
	 return CallNativeGDK( "Streamer_GetTickRate" );
}
/**
 * Streamer_SetTickRate
 * @see https://wiki.sa-mp.com/wiki/Streamer_SetTickRate
 * @param {Number} rate
 * @return {Number} retval
 */
function Streamer_SetTickRate( rate ){
	var out = CallNativeGDK( "Streamer_SetTickRate", "i", rate );
	return out;
}
/**
 * Streamer_GetMaxItems
 * @see https://wiki.sa-mp.com/wiki/Streamer_GetMaxItems
 * @param {Number} type
 * @return {Number} retval
 */
function Streamer_GetMaxItems( type ){
	var out = CallNativeGDK( "Streamer_GetMaxItems", "i", type );
	return out;
}
/**
 * Streamer_SetMaxItems
 * @see https://wiki.sa-mp.com/wiki/Streamer_SetMaxItems
 * @param {Number} type
 * @param {Number} items
 * @return {Number} retval
 */
function Streamer_SetMaxItems( type, items ){
	var out = CallNativeGDK( "Streamer_SetMaxItems", "ii", type, items );
	return out;
}
/**
 * Streamer_GetVisibleItems
 * @see https://wiki.sa-mp.com/wiki/Streamer_GetVisibleItems
 * @param {Number} type
 * @param {Number} playerid
 * @return {Number} retval
 */
function Streamer_GetVisibleItems( type, playerid ){
	playerid = typeof playerid !== 'undefined' ? playerid : -1;
	var out = CallNativeGDK( "Streamer_GetVisibleItems", "ii", type, playerid );
	return out;
}
/**
 * Streamer_SetVisibleItems
 * @see https://wiki.sa-mp.com/wiki/Streamer_SetVisibleItems
 * @param {Number} type
 * @param {Number} items
 * @param {Number} playerid
 * @return {Number} retval
 */
function Streamer_SetVisibleItems( type, items, playerid ){
	playerid = typeof playerid !== 'undefined' ? playerid : -1;
	var out = CallNativeGDK( "Streamer_SetVisibleItems", "iii", type, items, playerid );
	return out;
}
/**
 * Streamer_GetRadiusMultiplier
 * @see https://wiki.sa-mp.com/wiki/Streamer_GetRadiusMultiplier
 * @param {Number} type
 * @param {Number} playerid
 * @return {Number} multiplier
 */
function Streamer_GetRadiusMultiplier( type, playerid ){
	playerid = typeof playerid !== 'undefined' ? playerid : -1;
	var out = CallNativeGDK( "Streamer_GetRadiusMultiplier", "iFi", type, playerid );
	return out;
}
/**
 * Streamer_SetRadiusMultiplier
 * @see https://wiki.sa-mp.com/wiki/Streamer_SetRadiusMultiplier
 * @param {Number} type
 * @param {Number} multiplier
 * @param {Number} playerid
 * @return {Number} retval
 */
function Streamer_SetRadiusMultiplier( type, multiplier, playerid ){
	playerid = typeof playerid !== 'undefined' ? playerid : -1;
	var out = CallNativeGDK( "Streamer_SetRadiusMultiplier", "ifi", type, multiplier, playerid );
	return out;
}
/**
 * Streamer_GetCellDistance
 * @see https://wiki.sa-mp.com/wiki/Streamer_GetCellDistance
 * @return {Number} distance
 */
function Streamer_GetCellDistance(){
	 return CallNativeGDK( "Streamer_GetCellDistance" );
}
/**
 * Streamer_SetCellDistance
 * @see https://wiki.sa-mp.com/wiki/Streamer_SetCellDistance
 * @param {Number} distance
 * @return {Number} retval
 */
function Streamer_SetCellDistance( distance ){
	var out = CallNativeGDK( "Streamer_SetCellDistance", "f", distance );
	return out;
}
/**
 * Streamer_GetCellSize
 * @see https://wiki.sa-mp.com/wiki/Streamer_GetCellSize
 * @return {Number} size
 */
function Streamer_GetCellSize(){
	 return CallNativeGDK( "Streamer_GetCellSize" );
}
/**
 * Streamer_SetCellSize
 * @see https://wiki.sa-mp.com/wiki/Streamer_SetCellSize
 * @param {Number} size
 * @return {Number} retval
 */
function Streamer_SetCellSize( size ){
	var out = CallNativeGDK( "Streamer_SetCellSize", "f", size );
	return out;
}
/**
 * Streamer_ToggleErrorCallback
 * @see https://wiki.sa-mp.com/wiki/Streamer_ToggleErrorCallback
 * @param {Number} toggle
 * @return {Number} retval
 */
function Streamer_ToggleErrorCallback( toggle ){
	var out = CallNativeGDK( "Streamer_ToggleErrorCallback", "i", toggle );
	return out;
}
/**
 * Streamer_IsToggleErrorCallback
 * @see https://wiki.sa-mp.com/wiki/Streamer_IsToggleErrorCallback
 * @return {Number} retval
 */
function Streamer_IsToggleErrorCallback(){
	 return CallNativeGDK( "Streamer_IsToggleErrorCallback" );
}
/**
 * Streamer_ProcessActiveItems
 * @see https://wiki.sa-mp.com/wiki/Streamer_ProcessActiveItems
 * @return {Number} retval
 */
function Streamer_ProcessActiveItems(){
	 return CallNativeGDK( "Streamer_ProcessActiveItems" );
}
/**
 * Streamer_ToggleIdleUpdate
 * @see https://wiki.sa-mp.com/wiki/Streamer_ToggleIdleUpdate
 * @param {Number} playerid
 * @param {Number} toggle
 * @return {Number} retval
 */
function Streamer_ToggleIdleUpdate( playerid, toggle ){
	var out = CallNativeGDK( "Streamer_ToggleIdleUpdate", "ii", playerid, toggle );
	return out;
}
/**
 * Streamer_IsToggleIdleUpdate
 * @see https://wiki.sa-mp.com/wiki/Streamer_IsToggleIdleUpdate
 * @param {Number} playerid
 * @return {Number} retval
 */
function Streamer_IsToggleIdleUpdate( playerid ){
	var out = CallNativeGDK( "Streamer_IsToggleIdleUpdate", "i", playerid );
	return out;
}
/**
 * Streamer_ToggleCameraUpdate
 * @see https://wiki.sa-mp.com/wiki/Streamer_ToggleCameraUpdate
 * @param {Number} playerid
 * @param {Number} toggle
 * @return {Number} retval
 */
function Streamer_ToggleCameraUpdate( playerid, toggle ){
	var out = CallNativeGDK( "Streamer_ToggleCameraUpdate", "ii", playerid, toggle );
	return out;
}
/**
 * Streamer_IsToggleCameraUpdate
 * @see https://wiki.sa-mp.com/wiki/Streamer_IsToggleCameraUpdate
 * @param {Number} playerid
 * @return {Number} retval
 */
function Streamer_IsToggleCameraUpdate( playerid ){
	var out = CallNativeGDK( "Streamer_IsToggleCameraUpdate", "i", playerid );
	return out;
}
/**
 * Streamer_ToggleItemUpdate
 * @see https://wiki.sa-mp.com/wiki/Streamer_ToggleItemUpdate
 * @param {Number} playerid
 * @param {Number} type
 * @param {Number} toggle
 * @return {Number} retval
 */
function Streamer_ToggleItemUpdate( playerid, type, toggle ){
	var out = CallNativeGDK( "Streamer_ToggleItemUpdate", "iii", playerid, type, toggle );
	return out;
}
/**
 * Streamer_IsToggleItemUpdate
 * @see https://wiki.sa-mp.com/wiki/Streamer_IsToggleItemUpdate
 * @param {Number} playerid
 * @param {Number} type
 * @return {Number} retval
 */
function Streamer_IsToggleItemUpdate( playerid, type ){
	var out = CallNativeGDK( "Streamer_IsToggleItemUpdate", "ii", playerid, type );
	return out;
}
/**
 * Streamer_Update
 * @see https://wiki.sa-mp.com/wiki/Streamer_Update
 * @param {Number} playerid
 * @param {Number} type
 * @return {Number} retval
 */
function Streamer_Update( playerid, type ){
	type = typeof type !== 'undefined' ? type : -1;
	var out = CallNativeGDK( "Streamer_Update", "ii", playerid, type );
	return out;
}
/**
 * Streamer_UpdateEx
 * @see https://wiki.sa-mp.com/wiki/Streamer_UpdateEx
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
	var out = CallNativeGDK( "Streamer_UpdateEx", "ifffiii", playerid, x, y, z, worldid, interiorid, type );
	return out;
}
/**
 * Streamer_GetFloatData
 * @see https://wiki.sa-mp.com/wiki/Streamer_GetFloatData
 * @param {Number} type
 * @param {Number} STREAMER_ALL_TAGS id
 * @param {Number} data
 * @return {Number} result
 */
function Streamer_GetFloatData( type, STREAMER_ALL_TAGS id, data ){
	var out = CallNativeGDK( "Streamer_GetFloatData", "iiiF", type, STREAMER_ALL_TAGS id, data );
	return out;
}
/**
 * Streamer_SetFloatData
 * @see https://wiki.sa-mp.com/wiki/Streamer_SetFloatData
 * @param {Number} type
 * @param {Number} STREAMER_ALL_TAGS id
 * @param {Number} data
 * @param {Number} value
 * @return {Number} retval
 */
function Streamer_SetFloatData( type, STREAMER_ALL_TAGS id, data, value ){
	var out = CallNativeGDK( "Streamer_SetFloatData", "iiif", type, STREAMER_ALL_TAGS id, data, value );
	return out;
}
/**
 * Streamer_GetIntData
 * @see https://wiki.sa-mp.com/wiki/Streamer_GetIntData
 * @param {Number} type
 * @param {Number} STREAMER_ALL_TAGS id
 * @param {Number} data
 * @return {Number} retval
 */
function Streamer_GetIntData( type, STREAMER_ALL_TAGS id, data ){
	var out = CallNativeGDK( "Streamer_GetIntData", "iii", type, STREAMER_ALL_TAGS id, data );
	return out;
}
/**
 * Streamer_SetIntData
 * @see https://wiki.sa-mp.com/wiki/Streamer_SetIntData
 * @param {Number} type
 * @param {Number} STREAMER_ALL_TAGS id
 * @param {Number} data
 * @param {Number} value
 * @return {Number} retval
 */
function Streamer_SetIntData( type, STREAMER_ALL_TAGS id, data, value ){
	var out = CallNativeGDK( "Streamer_SetIntData", "iiii", type, STREAMER_ALL_TAGS id, data, value );
	return out;
}
/**
 * Streamer_GetArrayData
 * @see https://wiki.sa-mp.com/wiki/Streamer_GetArrayData
 * @param {Number} type
 * @param {Number} STREAMER_ALL_TAGS id
 * @param {Number} data
 * @param {Number} maxdest
 * @return {String} dest
 */
function Streamer_GetArrayData( type, STREAMER_ALL_TAGS id, data, maxdest ){
	maxdest = typeof maxdest !== 'undefined' ? maxdest : 256;
	var out = CallNativeGDK( "Streamer_GetArrayData", "iiiSi", type, STREAMER_ALL_TAGS id, data, maxdest );
	return out;
}
/**
 * Streamer_SetArrayData
 * @see https://wiki.sa-mp.com/wiki/Streamer_SetArrayData
 * @param {Number} type
 * @param {Number} STREAMER_ALL_TAGS id
 * @param {Number} data
 * @param {Number} maxsrc
 * @return {String} src
 */
function Streamer_SetArrayData( type, STREAMER_ALL_TAGS id, data, maxsrc ){
	maxsrc = typeof maxsrc !== 'undefined' ? maxsrc : 256;
	var out = CallNativeGDK( "Streamer_SetArrayData", "iiiSi", type, STREAMER_ALL_TAGS id, data, maxsrc );
	return out;
}
/**
 * Streamer_IsInArrayData
 * @see https://wiki.sa-mp.com/wiki/Streamer_IsInArrayData
 * @param {Number} type
 * @param {Number} STREAMER_ALL_TAGS id
 * @param {Number} data
 * @param {Number} value
 * @return {Number} retval
 */
function Streamer_IsInArrayData( type, STREAMER_ALL_TAGS id, data, value ){
	var out = CallNativeGDK( "Streamer_IsInArrayData", "iiii", type, STREAMER_ALL_TAGS id, data, value );
	return out;
}
/**
 * Streamer_AppendArrayData
 * @see https://wiki.sa-mp.com/wiki/Streamer_AppendArrayData
 * @param {Number} type
 * @param {Number} STREAMER_ALL_TAGS id
 * @param {Number} data
 * @param {Number} value
 * @return {Number} retval
 */
function Streamer_AppendArrayData( type, STREAMER_ALL_TAGS id, data, value ){
	var out = CallNativeGDK( "Streamer_AppendArrayData", "iiii", type, STREAMER_ALL_TAGS id, data, value );
	return out;
}
/**
 * Streamer_RemoveArrayData
 * @see https://wiki.sa-mp.com/wiki/Streamer_RemoveArrayData
 * @param {Number} type
 * @param {Number} STREAMER_ALL_TAGS id
 * @param {Number} data
 * @param {Number} value
 * @return {Number} retval
 */
function Streamer_RemoveArrayData( type, STREAMER_ALL_TAGS id, data, value ){
	var out = CallNativeGDK( "Streamer_RemoveArrayData", "iiii", type, STREAMER_ALL_TAGS id, data, value );
	return out;
}
/**
 * Streamer_GetUpperBound
 * @see https://wiki.sa-mp.com/wiki/Streamer_GetUpperBound
 * @param {Number} type
 * @return {Number} retval
 */
function Streamer_GetUpperBound( type ){
	var out = CallNativeGDK( "Streamer_GetUpperBound", "i", type );
	return out;
}
/**
 * Streamer_GetDistanceToItem
 * @see https://wiki.sa-mp.com/wiki/Streamer_GetDistanceToItem
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
	var out = CallNativeGDK( "Streamer_GetDistanceToItem", "fffiiFi", x, y, z, type, STREAMER_ALL_TAGS id, dimensions );
	return out;
}
/**
 * Streamer_ToggleStaticItem
 * @see https://wiki.sa-mp.com/wiki/Streamer_ToggleStaticItem
 * @param {Number} type
 * @param {Number} STREAMER_ALL_TAGS id
 * @param {Number} toggle
 * @return {Number} retval
 */
function Streamer_ToggleStaticItem( type, STREAMER_ALL_TAGS id, toggle ){
	var out = CallNativeGDK( "Streamer_ToggleStaticItem", "iii", type, STREAMER_ALL_TAGS id, toggle );
	return out;
}
/**
 * Streamer_IsToggleStaticItem
 * @see https://wiki.sa-mp.com/wiki/Streamer_IsToggleStaticItem
 * @param {Number} type
 * @param {Number} STREAMER_ALL_TAGS id
 * @return {Number} retval
 */
function Streamer_IsToggleStaticItem( type, STREAMER_ALL_TAGS id ){
	var out = CallNativeGDK( "Streamer_IsToggleStaticItem", "ii", type, STREAMER_ALL_TAGS id );
	return out;
}
/**
 * Streamer_GetItemInternalID
 * @see https://wiki.sa-mp.com/wiki/Streamer_GetItemInternalID
 * @param {Number} playerid
 * @param {Number} type
 * @param {Number} STREAMER_ALL_TAGS streamerid
 * @return {Number} retval
 */
function Streamer_GetItemInternalID( playerid, type, STREAMER_ALL_TAGS streamerid ){
	var out = CallNativeGDK( "Streamer_GetItemInternalID", "iii", playerid, type, STREAMER_ALL_TAGS streamerid );
	return out;
}
/**
 * Streamer_GetItemStreamerID
 * @see https://wiki.sa-mp.com/wiki/Streamer_GetItemStreamerID
 * @param {Number} playerid
 * @param {Number} type
 * @param {Number} STREAMER_ALL_TAGS internalid
 * @return {Number} retval
 */
function Streamer_GetItemStreamerID( playerid, type, STREAMER_ALL_TAGS internalid ){
	var out = CallNativeGDK( "Streamer_GetItemStreamerID", "iii", playerid, type, STREAMER_ALL_TAGS internalid );
	return out;
}
/**
 * Streamer_IsItemVisible
 * @see https://wiki.sa-mp.com/wiki/Streamer_IsItemVisible
 * @param {Number} playerid
 * @param {Number} type
 * @param {Number} STREAMER_ALL_TAGS id
 * @return {Number} retval
 */
function Streamer_IsItemVisible( playerid, type, STREAMER_ALL_TAGS id ){
	var out = CallNativeGDK( "Streamer_IsItemVisible", "iii", playerid, type, STREAMER_ALL_TAGS id );
	return out;
}
/**
 * Streamer_DestroyAllVisibleItems
 * @see https://wiki.sa-mp.com/wiki/Streamer_DestroyAllVisibleItems
 * @param {Number} playerid
 * @param {Number} type
 * @param {Number} serverwide
 * @return {Number} retval
 */
function Streamer_DestroyAllVisibleItems( playerid, type, serverwide ){
	serverwide = typeof serverwide !== 'undefined' ? serverwide : 1;
	var out = CallNativeGDK( "Streamer_DestroyAllVisibleItems", "iii", playerid, type, serverwide );
	return out;
}
/**
 * Streamer_CountVisibleItems
 * @see https://wiki.sa-mp.com/wiki/Streamer_CountVisibleItems
 * @param {Number} playerid
 * @param {Number} type
 * @param {Number} serverwide
 * @return {Number} retval
 */
function Streamer_CountVisibleItems( playerid, type, serverwide ){
	serverwide = typeof serverwide !== 'undefined' ? serverwide : 1;
	var out = CallNativeGDK( "Streamer_CountVisibleItems", "iii", playerid, type, serverwide );
	return out;
}
/**
 * Streamer_DestroyAllItems
 * @see https://wiki.sa-mp.com/wiki/Streamer_DestroyAllItems
 * @param {Number} type
 * @param {Number} serverwide
 * @return {Number} retval
 */
function Streamer_DestroyAllItems( type, serverwide ){
	serverwide = typeof serverwide !== 'undefined' ? serverwide : 1;
	var out = CallNativeGDK( "Streamer_DestroyAllItems", "ii", type, serverwide );
	return out;
}
/**
 * Streamer_CountItems
 * @see https://wiki.sa-mp.com/wiki/Streamer_CountItems
 * @param {Number} type
 * @param {Number} serverwide
 * @return {Number} retval
 */
function Streamer_CountItems( type, serverwide ){
	serverwide = typeof serverwide !== 'undefined' ? serverwide : 1;
	var out = CallNativeGDK( "Streamer_CountItems", "ii", type, serverwide );
	return out;
}
/**
 * CreateDynamicObject
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicObject
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
	var out = CallNativeGDK( "CreateDynamicObject", "iffffffiiiff", modelid, x, y, z, rx, ry, rz, worldid, interiorid, playerid, streamdistance, drawdistance );
	return out;
}
/**
 * DestroyDynamicObject
 * @see https://wiki.sa-mp.com/wiki/DestroyDynamicObject
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @return {Number} retval
 */
function DestroyDynamicObject( STREAMER_TAG_OBJECT objectid ){
	var out = CallNativeGDK( "DestroyDynamicObject", "i", STREAMER_TAG_OBJECT objectid );
	return out;
}
/**
 * IsValidDynamicObject
 * @see https://wiki.sa-mp.com/wiki/IsValidDynamicObject
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @return {Number} retval
 */
function IsValidDynamicObject( STREAMER_TAG_OBJECT objectid ){
	var out = CallNativeGDK( "IsValidDynamicObject", "i", STREAMER_TAG_OBJECT objectid );
	return out;
}
/**
 * SetDynamicObjectPos
 * @see https://wiki.sa-mp.com/wiki/SetDynamicObjectPos
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function SetDynamicObjectPos( STREAMER_TAG_OBJECT objectid, x, y, z ){
	var out = CallNativeGDK( "SetDynamicObjectPos", "ifff", STREAMER_TAG_OBJECT objectid, x, y, z );
	return out;
}
/**
 * GetDynamicObjectPos
 * @see https://wiki.sa-mp.com/wiki/GetDynamicObjectPos
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @return {{ x: Number,  y: Number,  z: Number }}
 */
function GetDynamicObjectPos( STREAMER_TAG_OBJECT objectid ){
	var out = CallNativeGDK( "GetDynamicObjectPos", "iFFF", STREAMER_TAG_OBJECT objectid, [ "x", "y", "z" ] );
	return {x: out[0],y: out[1],z: out[2]};
}
/**
 * SetDynamicObjectRot
 * @see https://wiki.sa-mp.com/wiki/SetDynamicObjectRot
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @param {Number} rx
 * @param {Number} ry
 * @param {Number} rz
 * @return {Number} retval
 */
function SetDynamicObjectRot( STREAMER_TAG_OBJECT objectid, rx, ry, rz ){
	var out = CallNativeGDK( "SetDynamicObjectRot", "ifff", STREAMER_TAG_OBJECT objectid, rx, ry, rz );
	return out;
}
/**
 * GetDynamicObjectRot
 * @see https://wiki.sa-mp.com/wiki/GetDynamicObjectRot
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @return {{ rx: Number,  ry: Number,  rz: Number }}
 */
function GetDynamicObjectRot( STREAMER_TAG_OBJECT objectid ){
	var out = CallNativeGDK( "GetDynamicObjectRot", "iFFF", STREAMER_TAG_OBJECT objectid, [ "rx", "ry", "rz" ] );
	return {rx: out[0],ry: out[1],rz: out[2]};
}
/**
 * SetDynamicObjectNoCameraCol
 * @see https://wiki.sa-mp.com/wiki/SetDynamicObjectNoCameraCol
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @return {Number} retval
 */
function SetDynamicObjectNoCameraCol( STREAMER_TAG_OBJECT objectid ){
	var out = CallNativeGDK( "SetDynamicObjectNoCameraCol", "i", STREAMER_TAG_OBJECT objectid );
	return out;
}
/**
 * MoveDynamicObject
 * @see https://wiki.sa-mp.com/wiki/MoveDynamicObject
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
	var out = CallNativeGDK( "MoveDynamicObject", "ifffffff", STREAMER_TAG_OBJECT objectid, x, y, z, speed, rx, ry, rz );
	return out;
}
/**
 * StopDynamicObject
 * @see https://wiki.sa-mp.com/wiki/StopDynamicObject
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @return {Number} retval
 */
function StopDynamicObject( STREAMER_TAG_OBJECT objectid ){
	var out = CallNativeGDK( "StopDynamicObject", "i", STREAMER_TAG_OBJECT objectid );
	return out;
}
/**
 * IsDynamicObjectMoving
 * @see https://wiki.sa-mp.com/wiki/IsDynamicObjectMoving
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @return {Number} retval
 */
function IsDynamicObjectMoving( STREAMER_TAG_OBJECT objectid ){
	var out = CallNativeGDK( "IsDynamicObjectMoving", "i", STREAMER_TAG_OBJECT objectid );
	return out;
}
/**
 * AttachCameraToDynamicObject
 * @see https://wiki.sa-mp.com/wiki/AttachCameraToDynamicObject
 * @param {Number} playerid
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @return {Number} retval
 */
function AttachCameraToDynamicObject( playerid, STREAMER_TAG_OBJECT objectid ){
	var out = CallNativeGDK( "AttachCameraToDynamicObject", "ii", playerid, STREAMER_TAG_OBJECT objectid );
	return out;
}
/**
 * AttachDynamicObjectToObject
 * @see https://wiki.sa-mp.com/wiki/AttachDynamicObjectToObject
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
	var out = CallNativeGDK( "AttachDynamicObjectToObject", "iiffffffi", STREAMER_TAG_OBJECT objectid, attachtoid, offsetx, offsety, offsetz, rx, ry, rz, syncrotation );
	return out;
}
/**
 * AttachDynamicObjectToPlayer
 * @see https://wiki.sa-mp.com/wiki/AttachDynamicObjectToPlayer
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
	var out = CallNativeGDK( "AttachDynamicObjectToPlayer", "iiffffff", STREAMER_TAG_OBJECT objectid, playerid, offsetx, offsety, offsetz, rx, ry, rz );
	return out;
}
/**
 * AttachDynamicObjectToVehicle
 * @see https://wiki.sa-mp.com/wiki/AttachDynamicObjectToVehicle
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
	var out = CallNativeGDK( "AttachDynamicObjectToVehicle", "iiffffff", STREAMER_TAG_OBJECT objectid, vehicleid, offsetx, offsety, offsetz, rx, ry, rz );
	return out;
}
/**
 * EditDynamicObject
 * @see https://wiki.sa-mp.com/wiki/EditDynamicObject
 * @param {Number} playerid
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @return {Number} retval
 */
function EditDynamicObject( playerid, STREAMER_TAG_OBJECT objectid ){
	var out = CallNativeGDK( "EditDynamicObject", "ii", playerid, STREAMER_TAG_OBJECT objectid );
	return out;
}
/**
 * IsDynamicObjectMaterialUsed
 * @see https://wiki.sa-mp.com/wiki/IsDynamicObjectMaterialUsed
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @param {Number} materialindex
 * @return {Number} retval
 */
function IsDynamicObjectMaterialUsed( STREAMER_TAG_OBJECT objectid, materialindex ){
	var out = CallNativeGDK( "IsDynamicObjectMaterialUsed", "ii", STREAMER_TAG_OBJECT objectid, materialindex );
	return out;
}
/**
 * GetDynamicObjectMaterial
 * @see https://wiki.sa-mp.com/wiki/GetDynamicObjectMaterial
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @param {Number} materialindex
 * @param {Number} maxtxdname
 * @param {Number} maxtexturename
 * @return {{ modelid: Number,  txdname: String,  texturename: String,  materialcolor: Number }}
 */
function GetDynamicObjectMaterial( STREAMER_TAG_OBJECT objectid, materialindex, maxtxdname, maxtexturename ){
	maxtxdname = typeof maxtxdname !== 'undefined' ? maxtxdname : 256;
	maxtexturename = typeof maxtexturename !== 'undefined' ? maxtexturename : 256;
	var out = CallNativeGDK( "GetDynamicObjectMaterial", "iiISSIii", STREAMER_TAG_OBJECT objectid, materialindex, maxtxdname, maxtexturename, [ "modelid", "txdname", "texturename", "materialcolor" ] );
	return {modelid: out[0],txdname: out[1],texturename: out[2],materialcolor: out[3]};
}
/**
 * SetDynamicObjectMaterial
 * @see https://wiki.sa-mp.com/wiki/SetDynamicObjectMaterial
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
	var out = CallNativeGDK( "SetDynamicObjectMaterial", "iiissi", STREAMER_TAG_OBJECT objectid, materialindex, modelid, txdname, texturename, materialcolor );
	return out;
}
/**
 * IsDynamicObjectMaterialTextUsed
 * @see https://wiki.sa-mp.com/wiki/IsDynamicObjectMaterialTextUsed
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @param {Number} materialindex
 * @return {Number} retval
 */
function IsDynamicObjectMaterialTextUsed( STREAMER_TAG_OBJECT objectid, materialindex ){
	var out = CallNativeGDK( "IsDynamicObjectMaterialTextUsed", "ii", STREAMER_TAG_OBJECT objectid, materialindex );
	return out;
}
/**
 * GetDynamicObjectMaterialText
 * @see https://wiki.sa-mp.com/wiki/GetDynamicObjectMaterialText
 * @param {Number} STREAMER_TAG_OBJECT objectid
 * @param {Number} materialindex
 * @param {Number} maxtext
 * @param {Number} maxfontface
 * @return {{ text: String,  materialsize: Number,  fontface: String,  fontsize: Number,  bold: Number,  fontcolor: Number,  backcolor: Number,  textalignment: Number }}
 */
function GetDynamicObjectMaterialText( STREAMER_TAG_OBJECT objectid, materialindex, maxtext, maxfontface ){
	maxtext = typeof maxtext !== 'undefined' ? maxtext : 256;
	maxfontface = typeof maxfontface !== 'undefined' ? maxfontface : 256;
	var out = CallNativeGDK( "GetDynamicObjectMaterialText", "iiSISIIIIIii", STREAMER_TAG_OBJECT objectid, materialindex, maxtext, maxfontface, [ "text", "materialsize", "fontface", "fontsize", "bold", "fontcolor", "backcolor", "textalignment" ] );
	return {text: out[0],materialsize: out[1],fontface: out[2],fontsize: out[3],bold: out[4],fontcolor: out[5],backcolor: out[6],textalignment: out[7]};
}
/**
 * SetDynamicObjectMaterialText
 * @see https://wiki.sa-mp.com/wiki/SetDynamicObjectMaterialText
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
	var out = CallNativeGDK( "SetDynamicObjectMaterialText", "iisisiiiii", STREAMER_TAG_OBJECT objectid, materialindex, text, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment );
	return out;
}
/**
 * CreateDynamicPickup
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicPickup
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
	var out = CallNativeGDK( "CreateDynamicPickup", "iifffiiif", modelid, type, x, y, z, worldid, interiorid, playerid, streamdistance );
	return out;
}
/**
 * DestroyDynamicPickup
 * @see https://wiki.sa-mp.com/wiki/DestroyDynamicPickup
 * @param {Number} STREAMER_TAG_PICKUP pickupid
 * @return {Number} retval
 */
function DestroyDynamicPickup( STREAMER_TAG_PICKUP pickupid ){
	var out = CallNativeGDK( "DestroyDynamicPickup", "i", STREAMER_TAG_PICKUP pickupid );
	return out;
}
/**
 * IsValidDynamicPickup
 * @see https://wiki.sa-mp.com/wiki/IsValidDynamicPickup
 * @param {Number} STREAMER_TAG_PICKUP pickupid
 * @return {Number} retval
 */
function IsValidDynamicPickup( STREAMER_TAG_PICKUP pickupid ){
	var out = CallNativeGDK( "IsValidDynamicPickup", "i", STREAMER_TAG_PICKUP pickupid );
	return out;
}
/**
 * CreateDynamicCP
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicCP
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
	var out = CallNativeGDK( "CreateDynamicCP", "ffffiiif", x, y, z, size, worldid, interiorid, playerid, streamdistance );
	return out;
}
/**
 * DestroyDynamicCP
 * @see https://wiki.sa-mp.com/wiki/DestroyDynamicCP
 * @param {Number} STREAMER_TAG_CP checkpointid
 * @return {Number} retval
 */
function DestroyDynamicCP( STREAMER_TAG_CP checkpointid ){
	var out = CallNativeGDK( "DestroyDynamicCP", "i", STREAMER_TAG_CP checkpointid );
	return out;
}
/**
 * IsValidDynamicCP
 * @see https://wiki.sa-mp.com/wiki/IsValidDynamicCP
 * @param {Number} STREAMER_TAG_CP checkpointid
 * @return {Number} retval
 */
function IsValidDynamicCP( STREAMER_TAG_CP checkpointid ){
	var out = CallNativeGDK( "IsValidDynamicCP", "i", STREAMER_TAG_CP checkpointid );
	return out;
}
/**
 * TogglePlayerDynamicCP
 * @see https://wiki.sa-mp.com/wiki/TogglePlayerDynamicCP
 * @param {Number} playerid
 * @param {Number} STREAMER_TAG_CP checkpointid
 * @param {Number} toggle
 * @return {Number} retval
 */
function TogglePlayerDynamicCP( playerid, STREAMER_TAG_CP checkpointid, toggle ){
	var out = CallNativeGDK( "TogglePlayerDynamicCP", "iii", playerid, STREAMER_TAG_CP checkpointid, toggle );
	return out;
}
/**
 * TogglePlayerAllDynamicCPs
 * @see https://wiki.sa-mp.com/wiki/TogglePlayerAllDynamicCPs
 * @param {Number} playerid
 * @param {Number} toggle
 * @return {Number} retval
 */
function TogglePlayerAllDynamicCPs( playerid, toggle ){
	var out = CallNativeGDK( "TogglePlayerAllDynamicCPs", "ii", playerid, toggle );
	return out;
}
/**
 * IsPlayerInDynamicCP
 * @see https://wiki.sa-mp.com/wiki/IsPlayerInDynamicCP
 * @param {Number} playerid
 * @param {Number} STREAMER_TAG_CP checkpointid
 * @return {Number} retval
 */
function IsPlayerInDynamicCP( playerid, STREAMER_TAG_CP checkpointid ){
	var out = CallNativeGDK( "IsPlayerInDynamicCP", "ii", playerid, STREAMER_TAG_CP checkpointid );
	return out;
}
/**
 * GetPlayerVisibleDynamicCP
 * @see https://wiki.sa-mp.com/wiki/GetPlayerVisibleDynamicCP
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerVisibleDynamicCP( playerid ){
	var out = CallNativeGDK( "GetPlayerVisibleDynamicCP", "i", playerid );
	return out;
}
/**
 * CreateDynamicRaceCP
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicRaceCP
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
	var out = CallNativeGDK( "CreateDynamicRaceCP", "ifffffffiiif", type, x, y, z, nextx, nexty, nextz, size, worldid, interiorid, playerid, streamdistance );
	return out;
}
/**
 * DestroyDynamicRaceCP
 * @see https://wiki.sa-mp.com/wiki/DestroyDynamicRaceCP
 * @param {Number} STREAMER_TAG_RACE_CP checkpointid
 * @return {Number} retval
 */
function DestroyDynamicRaceCP( STREAMER_TAG_RACE_CP checkpointid ){
	var out = CallNativeGDK( "DestroyDynamicRaceCP", "i", STREAMER_TAG_RACE_CP checkpointid );
	return out;
}
/**
 * IsValidDynamicRaceCP
 * @see https://wiki.sa-mp.com/wiki/IsValidDynamicRaceCP
 * @param {Number} STREAMER_TAG_RACE_CP checkpointid
 * @return {Number} retval
 */
function IsValidDynamicRaceCP( STREAMER_TAG_RACE_CP checkpointid ){
	var out = CallNativeGDK( "IsValidDynamicRaceCP", "i", STREAMER_TAG_RACE_CP checkpointid );
	return out;
}
/**
 * TogglePlayerDynamicRaceCP
 * @see https://wiki.sa-mp.com/wiki/TogglePlayerDynamicRaceCP
 * @param {Number} playerid
 * @param {Number} STREAMER_TAG_RACE_CP checkpointid
 * @param {Number} toggle
 * @return {Number} retval
 */
function TogglePlayerDynamicRaceCP( playerid, STREAMER_TAG_RACE_CP checkpointid, toggle ){
	var out = CallNativeGDK( "TogglePlayerDynamicRaceCP", "iii", playerid, STREAMER_TAG_RACE_CP checkpointid, toggle );
	return out;
}
/**
 * TogglePlayerAllDynamicRaceCPs
 * @see https://wiki.sa-mp.com/wiki/TogglePlayerAllDynamicRaceCPs
 * @param {Number} playerid
 * @param {Number} toggle
 * @return {Number} retval
 */
function TogglePlayerAllDynamicRaceCPs( playerid, toggle ){
	var out = CallNativeGDK( "TogglePlayerAllDynamicRaceCPs", "ii", playerid, toggle );
	return out;
}
/**
 * IsPlayerInDynamicRaceCP
 * @see https://wiki.sa-mp.com/wiki/IsPlayerInDynamicRaceCP
 * @param {Number} playerid
 * @param {Number} STREAMER_TAG_RACE_CP checkpointid
 * @return {Number} retval
 */
function IsPlayerInDynamicRaceCP( playerid, STREAMER_TAG_RACE_CP checkpointid ){
	var out = CallNativeGDK( "IsPlayerInDynamicRaceCP", "ii", playerid, STREAMER_TAG_RACE_CP checkpointid );
	return out;
}
/**
 * GetPlayerVisibleDynamicRaceCP
 * @see https://wiki.sa-mp.com/wiki/GetPlayerVisibleDynamicRaceCP
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerVisibleDynamicRaceCP( playerid ){
	var out = CallNativeGDK( "GetPlayerVisibleDynamicRaceCP", "i", playerid );
	return out;
}
/**
 * CreateDynamicMapIcon
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicMapIcon
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
	var out = CallNativeGDK( "CreateDynamicMapIcon", "fffiiiiifi", x, y, z, type, color, worldid, interiorid, playerid, streamdistance, style );
	return out;
}
/**
 * DestroyDynamicMapIcon
 * @see https://wiki.sa-mp.com/wiki/DestroyDynamicMapIcon
 * @param {Number} STREAMER_TAG_MAP_ICON iconid
 * @return {Number} retval
 */
function DestroyDynamicMapIcon( STREAMER_TAG_MAP_ICON iconid ){
	var out = CallNativeGDK( "DestroyDynamicMapIcon", "i", STREAMER_TAG_MAP_ICON iconid );
	return out;
}
/**
 * IsValidDynamicMapIcon
 * @see https://wiki.sa-mp.com/wiki/IsValidDynamicMapIcon
 * @param {Number} STREAMER_TAG_MAP_ICON iconid
 * @return {Number} retval
 */
function IsValidDynamicMapIcon( STREAMER_TAG_MAP_ICON iconid ){
	var out = CallNativeGDK( "IsValidDynamicMapIcon", "i", STREAMER_TAG_MAP_ICON iconid );
	return out;
}
/**
 * CreateDynamic3DTextLabel
 * @see https://wiki.sa-mp.com/wiki/CreateDynamic3DTextLabel
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
	var out = CallNativeGDK( "CreateDynamic3DTextLabel", "siffffiiiiiif", text, color, x, y, z, drawdistance, attachedplayer, attachedvehicle, testlos, worldid, interiorid, playerid, streamdistance );
	return out;
}
/**
 * DestroyDynamic3DTextLabel
 * @see https://wiki.sa-mp.com/wiki/DestroyDynamic3DTextLabel
 * @param {Number} STREAMER_TAG_3D_TEXT_LABEL id
 * @return {Number} retval
 */
function DestroyDynamic3DTextLabel( STREAMER_TAG_3D_TEXT_LABEL id ){
	var out = CallNativeGDK( "DestroyDynamic3DTextLabel", "i", STREAMER_TAG_3D_TEXT_LABEL id );
	return out;
}
/**
 * IsValidDynamic3DTextLabel
 * @see https://wiki.sa-mp.com/wiki/IsValidDynamic3DTextLabel
 * @param {Number} STREAMER_TAG_3D_TEXT_LABEL id
 * @return {Number} retval
 */
function IsValidDynamic3DTextLabel( STREAMER_TAG_3D_TEXT_LABEL id ){
	var out = CallNativeGDK( "IsValidDynamic3DTextLabel", "i", STREAMER_TAG_3D_TEXT_LABEL id );
	return out;
}
/**
 * GetDynamic3DTextLabelText
 * @see https://wiki.sa-mp.com/wiki/GetDynamic3DTextLabelText
 * @param {Number} STREAMER_TAG_3D_TEXT_LABEL id
 * @param {Number} maxtext
 * @return {String} text
 */
function GetDynamic3DTextLabelText( STREAMER_TAG_3D_TEXT_LABEL id, maxtext ){
	maxtext = typeof maxtext !== 'undefined' ? maxtext : 256;
	var out = CallNativeGDK( "GetDynamic3DTextLabelText", "iSi", STREAMER_TAG_3D_TEXT_LABEL id, maxtext );
	return out;
}
/**
 * UpdateDynamic3DTextLabelText
 * @see https://wiki.sa-mp.com/wiki/UpdateDynamic3DTextLabelText
 * @param {Number} STREAMER_TAG_3D_TEXT_LABEL id
 * @param {Number} color
 * @param {String} text
 * @return {Number} retval
 */
function UpdateDynamic3DTextLabelText( STREAMER_TAG_3D_TEXT_LABEL id, color, text ){
	var out = CallNativeGDK( "UpdateDynamic3DTextLabelText", "iis", STREAMER_TAG_3D_TEXT_LABEL id, color, text );
	return out;
}
/**
 * CreateDynamicCircle
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicCircle
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
	var out = CallNativeGDK( "CreateDynamicCircle", "fffiii", x, y, size, worldid, interiorid, playerid );
	return out;
}
/**
 * CreateDynamicCylinder
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicCylinder
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
	var out = CallNativeGDK( "CreateDynamicCylinder", "fffffiii", x, y, minz, maxz, size, worldid, interiorid, playerid );
	return out;
}
/**
 * CreateDynamicSphere
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicSphere
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
	var out = CallNativeGDK( "CreateDynamicSphere", "ffffiii", x, y, z, size, worldid, interiorid, playerid );
	return out;
}
/**
 * CreateDynamicRectangle
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicRectangle
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
	var out = CallNativeGDK( "CreateDynamicRectangle", "ffffiii", minx, miny, maxx, maxy, worldid, interiorid, playerid );
	return out;
}
/**
 * CreateDynamicCuboid
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicCuboid
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
	var out = CallNativeGDK( "CreateDynamicCuboid", "ffffffiii", minx, miny, minz, maxx, maxy, maxz, worldid, interiorid, playerid );
	return out;
}
/**
 * CreateDynamicCube
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicCube
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
	var out = CallNativeGDK( "CreateDynamicCube", "ffffffiii", minx, miny, minz, maxx, maxy, maxz, worldid, interiorid, playerid );
	return out;
}
/**
 * CreateDynamicPolygon
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicPolygon
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
	var out = CallNativeGDK( "CreateDynamicPolygon", "fffiiii", points[], minz, maxz, maxpoints, worldid, interiorid, playerid );
	return out;
}
/**
 * DestroyDynamicArea
 * @see https://wiki.sa-mp.com/wiki/DestroyDynamicArea
 * @param {Number} STREAMER_TAG_AREA areaid
 * @return {Number} retval
 */
function DestroyDynamicArea( STREAMER_TAG_AREA areaid ){
	var out = CallNativeGDK( "DestroyDynamicArea", "i", STREAMER_TAG_AREA areaid );
	return out;
}
/**
 * IsValidDynamicArea
 * @see https://wiki.sa-mp.com/wiki/IsValidDynamicArea
 * @param {Number} STREAMER_TAG_AREA areaid
 * @return {Number} retval
 */
function IsValidDynamicArea( STREAMER_TAG_AREA areaid ){
	var out = CallNativeGDK( "IsValidDynamicArea", "i", STREAMER_TAG_AREA areaid );
	return out;
}
/**
 * GetDynamicPolygonPoints
 * @see https://wiki.sa-mp.com/wiki/GetDynamicPolygonPoints
 * @param {Number} STREAMER_TAG_AREA areaid
 * @param {Number} points[]
 * @param {Number} maxpoints
 * @return {Number} retval
 */
function GetDynamicPolygonPoints( STREAMER_TAG_AREA areaid, points[], maxpoints ){
	maxpoints = typeof maxpoints !== 'undefined' ? maxpoints : 256;
	var out = CallNativeGDK( "GetDynamicPolygonPoints", "ifi", STREAMER_TAG_AREA areaid, points[], maxpoints );
	return out;
}
/**
 * GetDynamicPolygonNumberPoints
 * @see https://wiki.sa-mp.com/wiki/GetDynamicPolygonNumberPoints
 * @param {Number} STREAMER_TAG_AREA areaid
 * @return {Number} retval
 */
function GetDynamicPolygonNumberPoints( STREAMER_TAG_AREA areaid ){
	var out = CallNativeGDK( "GetDynamicPolygonNumberPoints", "i", STREAMER_TAG_AREA areaid );
	return out;
}
/**
 * TogglePlayerDynamicArea
 * @see https://wiki.sa-mp.com/wiki/TogglePlayerDynamicArea
 * @param {Number} playerid
 * @param {Number} STREAMER_TAG_AREA areaid
 * @param {Number} toggle
 * @return {Number} retval
 */
function TogglePlayerDynamicArea( playerid, STREAMER_TAG_AREA areaid, toggle ){
	var out = CallNativeGDK( "TogglePlayerDynamicArea", "iii", playerid, STREAMER_TAG_AREA areaid, toggle );
	return out;
}
/**
 * TogglePlayerAllDynamicAreas
 * @see https://wiki.sa-mp.com/wiki/TogglePlayerAllDynamicAreas
 * @param {Number} playerid
 * @param {Number} toggle
 * @return {Number} retval
 */
function TogglePlayerAllDynamicAreas( playerid, toggle ){
	var out = CallNativeGDK( "TogglePlayerAllDynamicAreas", "ii", playerid, toggle );
	return out;
}
/**
 * IsPlayerInDynamicArea
 * @see https://wiki.sa-mp.com/wiki/IsPlayerInDynamicArea
 * @param {Number} playerid
 * @param {Number} STREAMER_TAG_AREA areaid
 * @param {Number} recheck
 * @return {Number} retval
 */
function IsPlayerInDynamicArea( playerid, STREAMER_TAG_AREA areaid, recheck ){
	recheck = typeof recheck !== 'undefined' ? recheck : 0;
	var out = CallNativeGDK( "IsPlayerInDynamicArea", "iii", playerid, STREAMER_TAG_AREA areaid, recheck );
	return out;
}
/**
 * IsPlayerInAnyDynamicArea
 * @see https://wiki.sa-mp.com/wiki/IsPlayerInAnyDynamicArea
 * @param {Number} playerid
 * @param {Number} recheck
 * @return {Number} retval
 */
function IsPlayerInAnyDynamicArea( playerid, recheck ){
	recheck = typeof recheck !== 'undefined' ? recheck : 0;
	var out = CallNativeGDK( "IsPlayerInAnyDynamicArea", "ii", playerid, recheck );
	return out;
}
/**
 * IsAnyPlayerInDynamicArea
 * @see https://wiki.sa-mp.com/wiki/IsAnyPlayerInDynamicArea
 * @param {Number} STREAMER_TAG_AREA areaid
 * @param {Number} recheck
 * @return {Number} retval
 */
function IsAnyPlayerInDynamicArea( STREAMER_TAG_AREA areaid, recheck ){
	recheck = typeof recheck !== 'undefined' ? recheck : 0;
	var out = CallNativeGDK( "IsAnyPlayerInDynamicArea", "ii", STREAMER_TAG_AREA areaid, recheck );
	return out;
}
/**
 * IsAnyPlayerInAnyDynamicArea
 * @see https://wiki.sa-mp.com/wiki/IsAnyPlayerInAnyDynamicArea
 * @param {Number} recheck
 * @return {Number} retval
 */
function IsAnyPlayerInAnyDynamicArea( recheck ){
	recheck = typeof recheck !== 'undefined' ? recheck : 0;
	var out = CallNativeGDK( "IsAnyPlayerInAnyDynamicArea", "i", recheck );
	return out;
}
/**
 * GetPlayerDynamicAreas
 * @see https://wiki.sa-mp.com/wiki/GetPlayerDynamicAreas
 * @param {Number} playerid
 * @param {String} STREAMER_TAG_AREA areas
 * @param {Number} maxareas
 * @return {Number} retval
 */
function GetPlayerDynamicAreas( playerid, STREAMER_TAG_AREA areas, maxareas ){
	maxareas = typeof maxareas !== 'undefined' ? maxareas : 256;
	var out = CallNativeGDK( "GetPlayerDynamicAreas", "isi", playerid, STREAMER_TAG_AREA areas, maxareas );
	return out;
}
/**
 * GetPlayerNumberDynamicAreas
 * @see https://wiki.sa-mp.com/wiki/GetPlayerNumberDynamicAreas
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerNumberDynamicAreas( playerid ){
	var out = CallNativeGDK( "GetPlayerNumberDynamicAreas", "i", playerid );
	return out;
}
/**
 * IsPointInDynamicArea
 * @see https://wiki.sa-mp.com/wiki/IsPointInDynamicArea
 * @param {Number} STREAMER_TAG_AREA areaid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function IsPointInDynamicArea( STREAMER_TAG_AREA areaid, x, y, z ){
	var out = CallNativeGDK( "IsPointInDynamicArea", "ifff", STREAMER_TAG_AREA areaid, x, y, z );
	return out;
}
/**
 * IsPointInAnyDynamicArea
 * @see https://wiki.sa-mp.com/wiki/IsPointInAnyDynamicArea
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function IsPointInAnyDynamicArea( x, y, z ){
	var out = CallNativeGDK( "IsPointInAnyDynamicArea", "fff", x, y, z );
	return out;
}
/**
 * GetDynamicAreasForPoint
 * @see https://wiki.sa-mp.com/wiki/GetDynamicAreasForPoint
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {String} STREAMER_TAG_AREA areas
 * @param {Number} maxareas
 * @return {Number} retval
 */
function GetDynamicAreasForPoint( x, y, z, STREAMER_TAG_AREA areas, maxareas ){
	maxareas = typeof maxareas !== 'undefined' ? maxareas : 256;
	var out = CallNativeGDK( "GetDynamicAreasForPoint", "fffsi", x, y, z, STREAMER_TAG_AREA areas, maxareas );
	return out;
}
/**
 * GetNumberDynamicAreasForPoint
 * @see https://wiki.sa-mp.com/wiki/GetNumberDynamicAreasForPoint
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function GetNumberDynamicAreasForPoint( x, y, z ){
	var out = CallNativeGDK( "GetNumberDynamicAreasForPoint", "fff", x, y, z );
	return out;
}
/**
 * AttachDynamicAreaToObject
 * @see https://wiki.sa-mp.com/wiki/AttachDynamicAreaToObject
 * @param {Number} STREAMER_TAG_AREA areaid
 * @param {Number} STREAMER_ALL_TAGS objectid
 * @param {Number} type
 * @param {Number} playerid
 * @return {Number} retval
 */
function AttachDynamicAreaToObject( STREAMER_TAG_AREA areaid, STREAMER_ALL_TAGS objectid, type, playerid ){
	type = typeof type !== 'undefined' ? type : STREAMER_OBJECT_TYPE_DYNAMIC;
	playerid = typeof playerid !== 'undefined' ? playerid : INVALID_PLAYER_ID;
	var out = CallNativeGDK( "AttachDynamicAreaToObject", "iiii", STREAMER_TAG_AREA areaid, STREAMER_ALL_TAGS objectid, type, playerid );
	return out;
}
/**
 * AttachDynamicAreaToPlayer
 * @see https://wiki.sa-mp.com/wiki/AttachDynamicAreaToPlayer
 * @param {Number} STREAMER_TAG_AREA areaid
 * @param {Number} playerid
 * @return {Number} retval
 */
function AttachDynamicAreaToPlayer( STREAMER_TAG_AREA areaid, playerid ){
	var out = CallNativeGDK( "AttachDynamicAreaToPlayer", "ii", STREAMER_TAG_AREA areaid, playerid );
	return out;
}
/**
 * AttachDynamicAreaToVehicle
 * @see https://wiki.sa-mp.com/wiki/AttachDynamicAreaToVehicle
 * @param {Number} STREAMER_TAG_AREA areaid
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function AttachDynamicAreaToVehicle( STREAMER_TAG_AREA areaid, vehicleid ){
	var out = CallNativeGDK( "AttachDynamicAreaToVehicle", "ii", STREAMER_TAG_AREA areaid, vehicleid );
	return out;
}
/**
 * CreateDynamicObjectEx
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicObjectEx
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
	var out = CallNativeGDK( "CreateDynamicObjectEx", "iffffffffSSSiii", modelid, x, y, z, rx, ry, rz, drawdistance, streamdistance, maxworlds, maxinteriors, maxplayers, [ "worlds", "interiors", "players" ] );
	return {worlds: out[0],interiors: out[1],players: out[2]};
}
/**
 * CreateDynamicPickupEx
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicPickupEx
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
	var out = CallNativeGDK( "CreateDynamicPickupEx", "iiffffSSSiii", modelid, type, x, y, z, streamdistance, maxworlds, maxinteriors, maxplayers, [ "worlds", "interiors", "players" ] );
	return {worlds: out[0],interiors: out[1],players: out[2]};
}
/**
 * CreateDynamicCPEx
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicCPEx
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
	var out = CallNativeGDK( "CreateDynamicCPEx", "fffffSSSiii", x, y, z, size, streamdistance, maxworlds, maxinteriors, maxplayers, [ "worlds", "interiors", "players" ] );
	return {worlds: out[0],interiors: out[1],players: out[2]};
}
/**
 * CreateDynamicRaceCPEx
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicRaceCPEx
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
	var out = CallNativeGDK( "CreateDynamicRaceCPEx", "iffffffffSSSiii", type, x, y, z, nextx, nexty, nextz, size, streamdistance, maxworlds, maxinteriors, maxplayers, [ "worlds", "interiors", "players" ] );
	return {worlds: out[0],interiors: out[1],players: out[2]};
}
/**
 * CreateDynamicMapIconEx
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicMapIconEx
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
	var out = CallNativeGDK( "CreateDynamicMapIconEx", "fffiiifSSSiii", x, y, z, type, color, style, streamdistance, maxworlds, maxinteriors, maxplayers, [ "worlds", "interiors", "players" ] );
	return {worlds: out[0],interiors: out[1],players: out[2]};
}
/**
 * CreateDynamic3DTextLabelEx
 * @see https://wiki.sa-mp.com/wiki/CreateDynamic3DTextLabelEx
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
	var out = CallNativeGDK( "CreateDynamic3DTextLabelEx", "siffffiiifSSSiii", text, color, x, y, z, drawdistance, attachedplayer, attachedvehicle, testlos, streamdistance, maxworlds, maxinteriors, maxplayers, [ "worlds", "interiors", "players" ] );
	return {worlds: out[0],interiors: out[1],players: out[2]};
}
/**
 * CreateDynamicCircleEx
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicCircleEx
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
	var out = CallNativeGDK( "CreateDynamicCircleEx", "fffSSSiii", x, y, size, maxworlds, maxinteriors, maxplayers, [ "worlds", "interiors", "players" ] );
	return {worlds: out[0],interiors: out[1],players: out[2]};
}
/**
 * CreateDynamicCylinderEx
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicCylinderEx
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
	var out = CallNativeGDK( "CreateDynamicCylinderEx", "fffffSSSiii", x, y, minz, maxz, size, maxworlds, maxinteriors, maxplayers, [ "worlds", "interiors", "players" ] );
	return {worlds: out[0],interiors: out[1],players: out[2]};
}
/**
 * CreateDynamicSphereEx
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicSphereEx
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
	var out = CallNativeGDK( "CreateDynamicSphereEx", "ffffSSSiii", x, y, z, size, maxworlds, maxinteriors, maxplayers, [ "worlds", "interiors", "players" ] );
	return {worlds: out[0],interiors: out[1],players: out[2]};
}
/**
 * CreateDynamicRectangleEx
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicRectangleEx
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
	var out = CallNativeGDK( "CreateDynamicRectangleEx", "ffffSSSiii", minx, miny, maxx, maxy, maxworlds, maxinteriors, maxplayers, [ "worlds", "interiors", "players" ] );
	return {worlds: out[0],interiors: out[1],players: out[2]};
}
/**
 * CreateDynamicCuboidEx
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicCuboidEx
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
	var out = CallNativeGDK( "CreateDynamicCuboidEx", "ffffffSSSiii", minx, miny, minz, maxx, maxy, maxz, maxworlds, maxinteriors, maxplayers, [ "worlds", "interiors", "players" ] );
	return {worlds: out[0],interiors: out[1],players: out[2]};
}
/**
 * CreateDynamicCubeEx
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicCubeEx
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
	var out = CallNativeGDK( "CreateDynamicCubeEx", "ffffffSSSiii", minx, miny, minz, maxx, maxy, maxz, maxworlds, maxinteriors, maxplayers, [ "worlds", "interiors", "players" ] );
	return {worlds: out[0],interiors: out[1],players: out[2]};
}
/**
 * CreateDynamicPolygonEx
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicPolygonEx
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
	var out = CallNativeGDK( "CreateDynamicPolygonEx", "fffiSSSiii", points[], minz, maxz, maxpoints, maxworlds, maxinteriors, maxplayers, [ "worlds", "interiors", "players" ] );
	return {worlds: out[0],interiors: out[1],players: out[2]};
}
/**
 * Streamer_TickRate
 * @see https://wiki.sa-mp.com/wiki/Streamer_TickRate
 * @param {Number} rate
 * @return {Number} retval
 */
function Streamer_TickRate( rate ){
	var out = CallNativeGDK( "Streamer_TickRate", "i", rate );
	return out;
}
/**
 * Streamer_MaxItems
 * @see https://wiki.sa-mp.com/wiki/Streamer_MaxItems
 * @param {Number} type
 * @param {Number} items
 * @return {Number} retval
 */
function Streamer_MaxItems( type, items ){
	var out = CallNativeGDK( "Streamer_MaxItems", "ii", type, items );
	return out;
}
/**
 * Streamer_VisibleItems
 * @see https://wiki.sa-mp.com/wiki/Streamer_VisibleItems
 * @param {Number} type
 * @param {Number} items
 * @param {Number} playerid
 * @return {Number} retval
 */
function Streamer_VisibleItems( type, items, playerid ){
	playerid = typeof playerid !== 'undefined' ? playerid : -1;
	var out = CallNativeGDK( "Streamer_VisibleItems", "iii", type, items, playerid );
	return out;
}
/**
 * Streamer_CellDistance
 * @see https://wiki.sa-mp.com/wiki/Streamer_CellDistance
 * @param {Number} distance
 * @return {Number} retval
 */
function Streamer_CellDistance( distance ){
	var out = CallNativeGDK( "Streamer_CellDistance", "f", distance );
	return out;
}
/**
 * Streamer_CellSize
 * @see https://wiki.sa-mp.com/wiki/Streamer_CellSize
 * @param {Number} size
 * @return {Number} retval
 */
function Streamer_CellSize( size ){
	var out = CallNativeGDK( "Streamer_CellSize", "f", size );
	return out;
}
/**
 * Streamer_CallbackHook
 * @see https://wiki.sa-mp.com/wiki/Streamer_CallbackHook
 * @param {Number} callback
 * @return {Number} retval
 */
function Streamer_CallbackHook( callback ){
	var out = CallNativeGDK( "Streamer_CallbackHook", "i", callback );
	return out;
}
/**
 * DestroyAllDynamicObjects
 * @see https://wiki.sa-mp.com/wiki/DestroyAllDynamicObjects
 * @return {Number} retval
 */
function DestroyAllDynamicObjects(){
	 return CallNativeGDK( "DestroyAllDynamicObjects" );
}
/**
 * CountDynamicObjects
 * @see https://wiki.sa-mp.com/wiki/CountDynamicObjects
 * @return {Number} retval
 */
function CountDynamicObjects(){
	 return CallNativeGDK( "CountDynamicObjects" );
}
/**
 * DestroyAllDynamicPickups
 * @see https://wiki.sa-mp.com/wiki/DestroyAllDynamicPickups
 * @return {Number} retval
 */
function DestroyAllDynamicPickups(){
	 return CallNativeGDK( "DestroyAllDynamicPickups" );
}
/**
 * CountDynamicPickups
 * @see https://wiki.sa-mp.com/wiki/CountDynamicPickups
 * @return {Number} retval
 */
function CountDynamicPickups(){
	 return CallNativeGDK( "CountDynamicPickups" );
}
/**
 * DestroyAllDynamicCPs
 * @see https://wiki.sa-mp.com/wiki/DestroyAllDynamicCPs
 * @return {Number} retval
 */
function DestroyAllDynamicCPs(){
	 return CallNativeGDK( "DestroyAllDynamicCPs" );
}
/**
 * CountDynamicCPs
 * @see https://wiki.sa-mp.com/wiki/CountDynamicCPs
 * @return {Number} retval
 */
function CountDynamicCPs(){
	 return CallNativeGDK( "CountDynamicCPs" );
}
/**
 * DestroyAllDynamicRaceCPs
 * @see https://wiki.sa-mp.com/wiki/DestroyAllDynamicRaceCPs
 * @return {Number} retval
 */
function DestroyAllDynamicRaceCPs(){
	 return CallNativeGDK( "DestroyAllDynamicRaceCPs" );
}
/**
 * CountDynamicRaceCPs
 * @see https://wiki.sa-mp.com/wiki/CountDynamicRaceCPs
 * @return {Number} retval
 */
function CountDynamicRaceCPs(){
	 return CallNativeGDK( "CountDynamicRaceCPs" );
}
/**
 * DestroyAllDynamicMapIcons
 * @see https://wiki.sa-mp.com/wiki/DestroyAllDynamicMapIcons
 * @return {Number} retval
 */
function DestroyAllDynamicMapIcons(){
	 return CallNativeGDK( "DestroyAllDynamicMapIcons" );
}
/**
 * CountDynamicMapIcons
 * @see https://wiki.sa-mp.com/wiki/CountDynamicMapIcons
 * @return {Number} retval
 */
function CountDynamicMapIcons(){
	 return CallNativeGDK( "CountDynamicMapIcons" );
}
/**
 * DestroyAllDynamic3DTextLabels
 * @see https://wiki.sa-mp.com/wiki/DestroyAllDynamic3DTextLabels
 * @return {Number} retval
 */
function DestroyAllDynamic3DTextLabels(){
	 return CallNativeGDK( "DestroyAllDynamic3DTextLabels" );
}
/**
 * CountDynamic3DTextLabels
 * @see https://wiki.sa-mp.com/wiki/CountDynamic3DTextLabels
 * @return {Number} retval
 */
function CountDynamic3DTextLabels(){
	 return CallNativeGDK( "CountDynamic3DTextLabels" );
}
/**
 * DestroyAllDynamicAreas
 * @see https://wiki.sa-mp.com/wiki/DestroyAllDynamicAreas
 * @return {Number} retval
 */
function DestroyAllDynamicAreas(){
	 return CallNativeGDK( "DestroyAllDynamicAreas" );
}
/**
 * CountDynamicAreas
 * @see https://wiki.sa-mp.com/wiki/CountDynamicAreas
 * @return {Number} retval
 */
function CountDynamicAreas(){
	 return CallNativeGDK( "CountDynamicAreas" );
}
