const STREAMER_TYPE_OBJECT = 0;
const STREAMER_TYPE_PICKUP = 1;
const STREAMER_TYPE_CP = 2;
const STREAMER_TYPE_RACE_CP = 3;
const STREAMER_TYPE_MAP_ICON = 4;
const STREAMER_TYPE_3D_TEXT_LABEL = 5;
const STREAMER_TYPE_AREA = 6;
const STREAMER_AREA_TYPE_CIRCLE = 0;
const STREAMER_AREA_TYPE_CYLINDER = 1;
const STREAMER_AREA_TYPE_SPHERE = 2;
const STREAMER_AREA_TYPE_RECTANGLE = 3;
const STREAMER_AREA_TYPE_CUBOID = 4;
const STREAMER_AREA_TYPE_POLYGON = 5;
const STREAMER_OBJECT_TYPE_GLOBAL = 0;
const STREAMER_OBJECT_TYPE_PLAYER = 1;
const STREAMER_OBJECT_TYPE_DYNAMIC = 2;
const INVALID_STREAMER_ID = 0;
const FLOAT_INFINITY = 0x7F800000;

RegisterPublic("OnDynamicObjectMoved", "DynamicObjectMoved", "i", ['objectid']);
RegisterPublic("OnPlayerEditDynamicObject", "PlayerEditDynamicObject", "iiiffffff", ['playerid', 'objectid', 'response', 'x', 'y', 'z', 'rx', 'ry', 'rz']);
RegisterPublic("OnPlayerSelectDynamicObject", "PlayerSelectDynamicObject", "iiifff", ['playerid', 'objectid', 'modelid', 'x', 'y', 'z']);
RegisterPublic("OnPlayerShootDynamicObject", "PlayerShootDynamicObject", "iiifff", ['playerid', 'weaponid', 'objectid', 'x', 'y', 'z']);
RegisterPublic("OnPlayerPickUpDynamicPickup", "PlayerPickUpDynamicPickup", "ii", ['playerid', 'pickupid']);
RegisterPublic("OnPlayerEnterDynamicCP", "PlayerEnterDynamicCP", "ii", ['playerid', 'checkpointid']);
RegisterPublic("OnPlayerLeaveDynamicCP", "PlayerLeaveDynamicCP", "ii", ['playerid', 'checkpointid']);
RegisterPublic("OnPlayerEnterDynamicRaceCP", "PlayerEnterDynamicRaceCP", "ii", ['playerid', 'checkpointid']);
RegisterPublic("OnPlayerLeaveDynamicRaceCP", "PlayerLeaveDynamicRaceCP", "ii", ['playerid', 'checkpointid']);
RegisterPublic("OnPlayerEnterDynamicArea", "PlayerEnterDynamicArea", "ii", ['playerid', 'areaid']);
RegisterPublic("OnPlayerLeaveDynamicArea", "PlayerLeaveDynamicArea", "ii", ['playerid', 'areaid']);
RegisterPublic("Streamer_OnPluginError", "Streamer_OnPluginError", "s", ['error']);

/**
 * Streamer_GetTickRate
 * @see https://wiki.sa-mp.com/wiki/Streamer_GetTickRate
 * @return {Number} retval
 */
function Streamer_GetTickRate() {
	return CallNativeGDK("Streamer_GetTickRate");
}

/**
 * Streamer_SetTickRate
 * @see https://wiki.sa-mp.com/wiki/Streamer_SetTickRate
 * @param {Number} rate
 * @return {Number} retval
 */
function Streamer_SetTickRate(rate) {
	return CallNativeGDK("Streamer_SetTickRate", "i", rate);
}

/**
 * Streamer_GetMaxItems
 * @see https://wiki.sa-mp.com/wiki/Streamer_GetMaxItems
 * @param {Number} type
 * @return {Number} retval
 */
function Streamer_GetMaxItems(type) {
	return CallNativeGDK("Streamer_GetMaxItems", "i", type);
}

/**
 * Streamer_SetMaxItems
 * @see https://wiki.sa-mp.com/wiki/Streamer_SetMaxItems
 * @param {Number} type
 * @param {Number} items
 * @return {Number} retval
 */
function Streamer_SetMaxItems(type, items) {
	return CallNativeGDK("Streamer_SetMaxItems", "ii", type, items);
}

/**
 * Streamer_GetVisibleItems
 * @see https://wiki.sa-mp.com/wiki/Streamer_GetVisibleItems
 * @param {Number} type
 * @param {Number} [playerid=-1]
 * @return {Number} retval
 */
function Streamer_GetVisibleItems(type, playerid)
{
	playerid = typeof playerid === 'undefined' ? -1 : playerid;
	return CallNativeGDK("Streamer_GetVisibleItems", "ii", type, playerid);
}

/**
 * Streamer_SetVisibleItems
 * @see https://wiki.sa-mp.com/wiki/Streamer_SetVisibleItems
 * @param {Number} type
 * @param {Number} items
 * @param {Number} [playerid=-1]
 * @return {Number} retval
 */
function Streamer_SetVisibleItems(type, items, playerid)
{
	playerid = typeof playerid === 'undefined' ? -1 : playerid;
	return CallNativeGDK("Streamer_SetVisibleItems", "iii", type, items, playerid);
}

/**
 * Streamer_GetRadiusMultiplier
 * @see https://wiki.sa-mp.com/wiki/Streamer_GetRadiusMultiplier
 * @param {Number} type
 * @param {Number} [playerid=-1]
 * @return {Number} multiplier
 */
function Streamer_GetRadiusMultiplier(type, playerid)
{
	playerid = typeof playerid === 'undefined' ? -1 : playerid;
	return CallNativeGDK("Streamer_GetRadiusMultiplier", "iFi", type, playerid);
}

/**
 * Streamer_SetRadiusMultiplier
 * @see https://wiki.sa-mp.com/wiki/Streamer_SetRadiusMultiplier
 * @param {Number} type
 * @param {Number} multiplier
 * @param {Number} [playerid=-1]
 * @return {Number} retval
 */
function Streamer_SetRadiusMultiplier(type, multiplier, playerid)
{
	playerid = typeof playerid === 'undefined' ? -1 : playerid;
	return CallNativeGDK("Streamer_SetRadiusMultiplier", "ifi", type, multiplier, playerid);
}

/**
 * Streamer_GetCellDistance
 * @see https://wiki.sa-mp.com/wiki/Streamer_GetCellDistance
 * @return {Number} distance
 */
function Streamer_GetCellDistance() {
	return CallNativeGDK("Streamer_GetCellDistance");
}

/**
 * Streamer_SetCellDistance
 * @see https://wiki.sa-mp.com/wiki/Streamer_SetCellDistance
 * @param {Number} distance
 * @return {Number} retval
 */
function Streamer_SetCellDistance(distance) {
	return CallNativeGDK("Streamer_SetCellDistance", "f", distance);
}

/**
 * Streamer_GetCellSize
 * @see https://wiki.sa-mp.com/wiki/Streamer_GetCellSize
 * @return {Number} size
 */
function Streamer_GetCellSize() {
	return CallNativeGDK("Streamer_GetCellSize");
}

/**
 * Streamer_SetCellSize
 * @see https://wiki.sa-mp.com/wiki/Streamer_SetCellSize
 * @param {Number} size
 * @return {Number} retval
 */
function Streamer_SetCellSize(size) {
	return CallNativeGDK("Streamer_SetCellSize", "f", size);
}

/**
 * Streamer_ToggleErrorCallback
 * @see https://wiki.sa-mp.com/wiki/Streamer_ToggleErrorCallback
 * @param {Number} toggle
 * @return {Number} retval
 */
function Streamer_ToggleErrorCallback(toggle) {
	return CallNativeGDK("Streamer_ToggleErrorCallback", "i", toggle);
}

/**
 * Streamer_IsToggleErrorCallback
 * @see https://wiki.sa-mp.com/wiki/Streamer_IsToggleErrorCallback
 * @return {Number} retval
 */
function Streamer_IsToggleErrorCallback() {
	return CallNativeGDK("Streamer_IsToggleErrorCallback");
}

/**
 * Streamer_ProcessActiveItems
 * @see https://wiki.sa-mp.com/wiki/Streamer_ProcessActiveItems
 * @return {Number} retval
 */
function Streamer_ProcessActiveItems() {
	return CallNativeGDK("Streamer_ProcessActiveItems");
}

/**
 * Streamer_ToggleIdleUpdate
 * @see https://wiki.sa-mp.com/wiki/Streamer_ToggleIdleUpdate
 * @param {Number} playerid
 * @param {Number} toggle
 * @return {Number} retval
 */
function Streamer_ToggleIdleUpdate(playerid, toggle) {
	return CallNativeGDK("Streamer_ToggleIdleUpdate", "ii", playerid, toggle);
}

/**
 * Streamer_IsToggleIdleUpdate
 * @see https://wiki.sa-mp.com/wiki/Streamer_IsToggleIdleUpdate
 * @param {Number} playerid
 * @return {Number} retval
 */
function Streamer_IsToggleIdleUpdate(playerid) {
	return CallNativeGDK("Streamer_IsToggleIdleUpdate", "i", playerid);
}

/**
 * Streamer_ToggleCameraUpdate
 * @see https://wiki.sa-mp.com/wiki/Streamer_ToggleCameraUpdate
 * @param {Number} playerid
 * @param {Number} toggle
 * @return {Number} retval
 */
function Streamer_ToggleCameraUpdate(playerid, toggle) {
	return CallNativeGDK("Streamer_ToggleCameraUpdate", "ii", playerid, toggle);
}

/**
 * Streamer_IsToggleCameraUpdate
 * @see https://wiki.sa-mp.com/wiki/Streamer_IsToggleCameraUpdate
 * @param {Number} playerid
 * @return {Number} retval
 */
function Streamer_IsToggleCameraUpdate(playerid) {
	return CallNativeGDK("Streamer_IsToggleCameraUpdate", "i", playerid);
}

/**
 * Streamer_ToggleItemUpdate
 * @see https://wiki.sa-mp.com/wiki/Streamer_ToggleItemUpdate
 * @param {Number} playerid
 * @param {Number} type
 * @param {Number} toggle
 * @return {Number} retval
 */
function Streamer_ToggleItemUpdate(playerid, type, toggle) {
	return CallNativeGDK("Streamer_ToggleItemUpdate", "iii", playerid, type, toggle);
}

/**
 * Streamer_IsToggleItemUpdate
 * @see https://wiki.sa-mp.com/wiki/Streamer_IsToggleItemUpdate
 * @param {Number} playerid
 * @param {Number} type
 * @return {Number} retval
 */
function Streamer_IsToggleItemUpdate(playerid, type) {
	return CallNativeGDK("Streamer_IsToggleItemUpdate", "ii", playerid, type);
}

/**
 * Streamer_Update
 * @see https://wiki.sa-mp.com/wiki/Streamer_Update
 * @param {Number} playerid
 * @param {Number} [type=-1]
 * @return {Number} retval
 */
function Streamer_Update(playerid, type)
{
	type = typeof type === 'undefined' ? -1 : type;
	return CallNativeGDK("Streamer_Update", "ii", playerid, type);
}

/**
 * Streamer_UpdateEx
 * @see https://wiki.sa-mp.com/wiki/Streamer_UpdateEx
 * @param {Number} playerid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} [worldid=-1]
 * @param {Number} [interiorid=-1]
 * @param {Number} [type=-1]
 * @return {Number} retval
 */
function Streamer_UpdateEx(playerid, x, y, z, worldid, interiorid, type)
{
	worldid = typeof worldid === 'undefined' ? -1 : worldid;
	interiorid = typeof interiorid === 'undefined' ? -1 : interiorid;
	type = typeof type === 'undefined' ? -1 : type;
	return CallNativeGDK("Streamer_UpdateEx", "ifffiii", playerid, x, y, z, worldid, interiorid, type);
}

/**
 * Streamer_GetFloatData
 * @see https://wiki.sa-mp.com/wiki/Streamer_GetFloatData
 * @param {Number} type
 * @param {Number} id
 * @param {Number} data
 * @return {Number} result
 */
function Streamer_GetFloatData(type, id, data) {
	return CallNativeGDK("Streamer_GetFloatData", "iiiF", type, id, data);
}

/**
 * Streamer_SetFloatData
 * @see https://wiki.sa-mp.com/wiki/Streamer_SetFloatData
 * @param {Number} type
 * @param {Number} id
 * @param {Number} data
 * @param {Number} value
 * @return {Number} retval
 */
function Streamer_SetFloatData(type, id, data, value) {
	return CallNativeGDK("Streamer_SetFloatData", "iiif", type, id, data, value);
}

/**
 * Streamer_GetIntData
 * @see https://wiki.sa-mp.com/wiki/Streamer_GetIntData
 * @param {Number} type
 * @param {Number} id
 * @param {Number} data
 * @return {Number} retval
 */
function Streamer_GetIntData(type, id, data) {
	return CallNativeGDK("Streamer_GetIntData", "iii", type, id, data);
}

/**
 * Streamer_SetIntData
 * @see https://wiki.sa-mp.com/wiki/Streamer_SetIntData
 * @param {Number} type
 * @param {Number} id
 * @param {Number} data
 * @param {Number} value
 * @return {Number} retval
 */
function Streamer_SetIntData(type, id, data, value) {
	return CallNativeGDK("Streamer_SetIntData", "iiii", type, id, data, value);
}

/**
 * Streamer_GetArrayData
 * @see https://wiki.sa-mp.com/wiki/Streamer_GetArrayData
 * @param {Number} type
 * @param {Number} id
 * @param {Number} data
 * @param {Number} [maxdest=256]
 * @return {String} dest
 */
function Streamer_GetArrayData(type, id, data, maxdest)
{
	maxdest = typeof maxdest === 'undefined' ? 256 : maxdest;
	return CallNativeGDK("Streamer_GetArrayData", "iiiSi", type, id, data, maxdest);
}

/**
 * Streamer_SetArrayData
 * @see https://wiki.sa-mp.com/wiki/Streamer_SetArrayData
 * @param {Number} type
 * @param {Number} id
 * @param {Number} data
 * @param {Number} [maxsrc=256]
 * @return {String} src
 */
function Streamer_SetArrayData(type, id, data, maxsrc)
{
	maxsrc = typeof maxsrc === 'undefined' ? 256 : maxsrc;
	return CallNativeGDK("Streamer_SetArrayData", "iiiSi", type, id, data, maxsrc);
}

/**
 * Streamer_IsInArrayData
 * @see https://wiki.sa-mp.com/wiki/Streamer_IsInArrayData
 * @param {Number} type
 * @param {Number} id
 * @param {Number} data
 * @param {Number} value
 * @return {Number} retval
 */
function Streamer_IsInArrayData(type, id, data, value) {
	return CallNativeGDK("Streamer_IsInArrayData", "iiii", type, id, data, value);
}

/**
 * Streamer_AppendArrayData
 * @see https://wiki.sa-mp.com/wiki/Streamer_AppendArrayData
 * @param {Number} type
 * @param {Number} id
 * @param {Number} data
 * @param {Number} value
 * @return {Number} retval
 */
function Streamer_AppendArrayData(type, id, data, value) {
	return CallNativeGDK("Streamer_AppendArrayData", "iiii", type, id, data, value);
}

/**
 * Streamer_RemoveArrayData
 * @see https://wiki.sa-mp.com/wiki/Streamer_RemoveArrayData
 * @param {Number} type
 * @param {Number} id
 * @param {Number} data
 * @param {Number} value
 * @return {Number} retval
 */
function Streamer_RemoveArrayData(type, id, data, value) {
	return CallNativeGDK("Streamer_RemoveArrayData", "iiii", type, id, data, value);
}

/**
 * Streamer_GetUpperBound
 * @see https://wiki.sa-mp.com/wiki/Streamer_GetUpperBound
 * @param {Number} type
 * @return {Number} retval
 */
function Streamer_GetUpperBound(type) {
	return CallNativeGDK("Streamer_GetUpperBound", "i", type);
}

/**
 * Streamer_GetDistanceToItem
 * @see https://wiki.sa-mp.com/wiki/Streamer_GetDistanceToItem
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} type
 * @param {Number} id
 * @param {Number} [dimensions=3]
 * @return {Number} distance
 */
function Streamer_GetDistanceToItem(x, y, z, type, id, dimensions)
{
	dimensions = typeof dimensions === 'undefined' ? 3 : dimensions;
	return CallNativeGDK("Streamer_GetDistanceToItem", "fffiiFi", x, y, z, type, id, dimensions);
}

/**
 * Streamer_ToggleStaticItem
 * @see https://wiki.sa-mp.com/wiki/Streamer_ToggleStaticItem
 * @param {Number} type
 * @param {Number} id
 * @param {Number} toggle
 * @return {Number} retval
 */
function Streamer_ToggleStaticItem(type, id, toggle) {
	return CallNativeGDK("Streamer_ToggleStaticItem", "iii", type, id, toggle);
}

/**
 * Streamer_IsToggleStaticItem
 * @see https://wiki.sa-mp.com/wiki/Streamer_IsToggleStaticItem
 * @param {Number} type
 * @param {Number} id
 * @return {Number} retval
 */
function Streamer_IsToggleStaticItem(type, id) {
	return CallNativeGDK("Streamer_IsToggleStaticItem", "ii", type, id);
}

/**
 * Streamer_GetItemInternalID
 * @see https://wiki.sa-mp.com/wiki/Streamer_GetItemInternalID
 * @param {Number} playerid
 * @param {Number} type
 * @param {Number} streamerid
 * @return {Number} retval
 */
function Streamer_GetItemInternalID(playerid, type, streamerid) {
	return CallNativeGDK("Streamer_GetItemInternalID", "iii", playerid, type, streamerid);
}

/**
 * Streamer_GetItemStreamerID
 * @see https://wiki.sa-mp.com/wiki/Streamer_GetItemStreamerID
 * @param {Number} playerid
 * @param {Number} type
 * @param {Number} internalid
 * @return {Number} retval
 */
function Streamer_GetItemStreamerID(playerid, type, internalid) {
	return CallNativeGDK("Streamer_GetItemStreamerID", "iii", playerid, type, internalid);
}

/**
 * Streamer_IsItemVisible
 * @see https://wiki.sa-mp.com/wiki/Streamer_IsItemVisible
 * @param {Number} playerid
 * @param {Number} type
 * @param {Number} id
 * @return {Number} retval
 */
function Streamer_IsItemVisible(playerid, type, id) {
	return CallNativeGDK("Streamer_IsItemVisible", "iii", playerid, type, id);
}

/**
 * Streamer_DestroyAllVisibleItems
 * @see https://wiki.sa-mp.com/wiki/Streamer_DestroyAllVisibleItems
 * @param {Number} playerid
 * @param {Number} type
 * @param {Number} [serverwide=1]
 * @return {Number} retval
 */
function Streamer_DestroyAllVisibleItems(playerid, type, serverwide)
{
	serverwide = typeof serverwide === 'undefined' ? 1 : serverwide;
	return CallNativeGDK("Streamer_DestroyAllVisibleItems", "iii", playerid, type, serverwide);
}

/**
 * Streamer_CountVisibleItems
 * @see https://wiki.sa-mp.com/wiki/Streamer_CountVisibleItems
 * @param {Number} playerid
 * @param {Number} type
 * @param {Number} [serverwide=1]
 * @return {Number} retval
 */
function Streamer_CountVisibleItems(playerid, type, serverwide)
{
	serverwide = typeof serverwide === 'undefined' ? 1 : serverwide;
	return CallNativeGDK("Streamer_CountVisibleItems", "iii", playerid, type, serverwide);
}

/**
 * Streamer_DestroyAllItems
 * @see https://wiki.sa-mp.com/wiki/Streamer_DestroyAllItems
 * @param {Number} type
 * @param {Number} [serverwide=1]
 * @return {Number} retval
 */
function Streamer_DestroyAllItems(type, serverwide)
{
	serverwide = typeof serverwide === 'undefined' ? 1 : serverwide;
	return CallNativeGDK("Streamer_DestroyAllItems", "ii", type, serverwide);
}

/**
 * Streamer_CountItems
 * @see https://wiki.sa-mp.com/wiki/Streamer_CountItems
 * @param {Number} type
 * @param {Number} [serverwide=1]
 * @return {Number} retval
 */
function Streamer_CountItems(type, serverwide)
{
	serverwide = typeof serverwide === 'undefined' ? 1 : serverwide;
	return CallNativeGDK("Streamer_CountItems", "ii", type, serverwide);
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
 * @param {Number} [worldid=-1]
 * @param {Number} [interiorid=-1]
 * @param {Number} [playerid=-1]
 * @param {Number} [streamdistance=200.0]
 * @param {Number} [drawdistance=0.0]
 * @return {Number} retval
 */
function CreateDynamicObject(modelid, x, y, z, rx, ry, rz, worldid, interiorid, playerid, streamdistance, drawdistance)
{
	worldid = typeof worldid === 'undefined' ? -1 : worldid;
	interiorid = typeof interiorid === 'undefined' ? -1 : interiorid;
	playerid = typeof playerid === 'undefined' ? -1 : playerid;
	streamdistance = typeof streamdistance === 'undefined' ? 200.0 : streamdistance;
	drawdistance = typeof drawdistance === 'undefined' ? 0.0 : drawdistance;
	return CallNativeGDK("CreateDynamicObject", "iffffffiiiff", modelid, x, y, z, rx, ry, rz, worldid, interiorid, playerid, streamdistance, drawdistance);
}

/**
 * DestroyDynamicObject
 * @see https://wiki.sa-mp.com/wiki/DestroyDynamicObject
 * @param {Number} objectid
 * @return {Number} retval
 */
function DestroyDynamicObject(objectid) {
	return CallNativeGDK("DestroyDynamicObject", "i", objectid);
}

/**
 * IsValidDynamicObject
 * @see https://wiki.sa-mp.com/wiki/IsValidDynamicObject
 * @param {Number} objectid
 * @return {Number} retval
 */
function IsValidDynamicObject(objectid) {
	return CallNativeGDK("IsValidDynamicObject", "i", objectid);
}

/**
 * SetDynamicObjectPos
 * @see https://wiki.sa-mp.com/wiki/SetDynamicObjectPos
 * @param {Number} objectid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function SetDynamicObjectPos(objectid, x, y, z) {
	return CallNativeGDK("SetDynamicObjectPos", "ifff", objectid, x, y, z);
}

/**
 * GetDynamicObjectPos
 * @see https://wiki.sa-mp.com/wiki/GetDynamicObjectPos
 * @param {Number} objectid
 * @return {x: Number, y: Number, z: Number}
 */
function GetDynamicObjectPos(objectid)
{
	let out = CallNativeGDK("GetDynamicObjectPos", "iFFF", objectid);
	return {x: out[0], y: out[1], z: out[2]};
}

/**
 * SetDynamicObjectRot
 * @see https://wiki.sa-mp.com/wiki/SetDynamicObjectRot
 * @param {Number} objectid
 * @param {Number} rx
 * @param {Number} ry
 * @param {Number} rz
 * @return {Number} retval
 */
function SetDynamicObjectRot(objectid, rx, ry, rz) {
	return CallNativeGDK("SetDynamicObjectRot", "ifff", objectid, rx, ry, rz);
}

/**
 * GetDynamicObjectRot
 * @see https://wiki.sa-mp.com/wiki/GetDynamicObjectRot
 * @param {Number} objectid
 * @return {rx: Number, ry: Number, rz: Number}
 */
function GetDynamicObjectRot(objectid)
{
	let out = CallNativeGDK("GetDynamicObjectRot", "iFFF", objectid);
	return {rx: out[0], ry: out[1], rz: out[2]};
}

/**
 * SetDynamicObjectNoCameraCol
 * @see https://wiki.sa-mp.com/wiki/SetDynamicObjectNoCameraCol
 * @param {Number} objectid
 * @return {Number} retval
 */
function SetDynamicObjectNoCameraCol(objectid) {
	return CallNativeGDK("SetDynamicObjectNoCameraCol", "i", objectid);
}

/**
 * MoveDynamicObject
 * @see https://wiki.sa-mp.com/wiki/MoveDynamicObject
 * @param {Number} objectid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} speed
 * @param {Number} [rx=-1000.0]
 * @param {Number} [ry=-1000.0]
 * @param {Number} [rz=-1000.0]
 * @return {Number} retval
 */
function MoveDynamicObject(objectid, x, y, z, speed, rx, ry, rz)
{
	rx = typeof rx === 'undefined' ? -1000.0 : rx;
	ry = typeof ry === 'undefined' ? -1000.0 : ry;
	rz = typeof rz === 'undefined' ? -1000.0 : rz;
	return CallNativeGDK("MoveDynamicObject", "ifffffff", objectid, x, y, z, speed, rx, ry, rz);
}

/**
 * StopDynamicObject
 * @see https://wiki.sa-mp.com/wiki/StopDynamicObject
 * @param {Number} objectid
 * @return {Number} retval
 */
function StopDynamicObject(objectid) {
	return CallNativeGDK("StopDynamicObject", "i", objectid);
}

/**
 * IsDynamicObjectMoving
 * @see https://wiki.sa-mp.com/wiki/IsDynamicObjectMoving
 * @param {Number} objectid
 * @return {Number} retval
 */
function IsDynamicObjectMoving(objectid) {
	return CallNativeGDK("IsDynamicObjectMoving", "i", objectid);
}

/**
 * AttachCameraToDynamicObject
 * @see https://wiki.sa-mp.com/wiki/AttachCameraToDynamicObject
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {Number} retval
 */
function AttachCameraToDynamicObject(playerid, objectid) {
	return CallNativeGDK("AttachCameraToDynamicObject", "ii", playerid, objectid);
}

/**
 * AttachDynamicObjectToObject
 * @see https://wiki.sa-mp.com/wiki/AttachDynamicObjectToObject
 * @param {Number} objectid
 * @param {Number} attachtoid
 * @param {Number} offsetx
 * @param {Number} offsety
 * @param {Number} offsetz
 * @param {Number} rx
 * @param {Number} ry
 * @param {Number} rz
 * @param {Number} [syncrotation=1]
 * @return {Number} retval
 */
function AttachDynamicObjectToObject(objectid, attachtoid, offsetx, offsety, offsetz, rx, ry, rz, syncrotation)
{
	syncrotation = typeof syncrotation === 'undefined' ? 1 : syncrotation;
	return CallNativeGDK("AttachDynamicObjectToObject", "iiffffffi", objectid, attachtoid, offsetx, offsety, offsetz, rx, ry, rz, syncrotation);
}

/**
 * AttachDynamicObjectToPlayer
 * @see https://wiki.sa-mp.com/wiki/AttachDynamicObjectToPlayer
 * @param {Number} objectid
 * @param {Number} playerid
 * @param {Number} offsetx
 * @param {Number} offsety
 * @param {Number} offsetz
 * @param {Number} rx
 * @param {Number} ry
 * @param {Number} rz
 * @return {Number} retval
 */
function AttachDynamicObjectToPlayer(objectid, playerid, offsetx, offsety, offsetz, rx, ry, rz) {
	return CallNativeGDK("AttachDynamicObjectToPlayer", "iiffffff", objectid, playerid, offsetx, offsety, offsetz, rx, ry, rz);
}

/**
 * AttachDynamicObjectToVehicle
 * @see https://wiki.sa-mp.com/wiki/AttachDynamicObjectToVehicle
 * @param {Number} objectid
 * @param {Number} vehicleid
 * @param {Number} offsetx
 * @param {Number} offsety
 * @param {Number} offsetz
 * @param {Number} rx
 * @param {Number} ry
 * @param {Number} rz
 * @return {Number} retval
 */
function AttachDynamicObjectToVehicle(objectid, vehicleid, offsetx, offsety, offsetz, rx, ry, rz) {
	return CallNativeGDK("AttachDynamicObjectToVehicle", "iiffffff", objectid, vehicleid, offsetx, offsety, offsetz, rx, ry, rz);
}

/**
 * EditDynamicObject
 * @see https://wiki.sa-mp.com/wiki/EditDynamicObject
 * @param {Number} playerid
 * @param {Number} objectid
 * @return {Number} retval
 */
function EditDynamicObject(playerid, objectid) {
	return CallNativeGDK("EditDynamicObject", "ii", playerid, objectid);
}

/**
 * IsDynamicObjectMaterialUsed
 * @see https://wiki.sa-mp.com/wiki/IsDynamicObjectMaterialUsed
 * @param {Number} objectid
 * @param {Number} materialindex
 * @return {Number} retval
 */
function IsDynamicObjectMaterialUsed(objectid, materialindex) {
	return CallNativeGDK("IsDynamicObjectMaterialUsed", "ii", objectid, materialindex);
}

/**
 * GetDynamicObjectMaterial
 * @see https://wiki.sa-mp.com/wiki/GetDynamicObjectMaterial
 * @param {Number} objectid
 * @param {Number} materialindex
 * @param {Number} [maxtxdname=256]
 * @param {Number} [maxtexturename=256]
 * @return {modelid: Number, txdname: String, texturename: String, materialcolor: Number}
 */
function GetDynamicObjectMaterial(objectid, materialindex, maxtxdname, maxtexturename)
{
	maxtxdname = typeof maxtxdname === 'undefined' ? 256 : maxtxdname;
	maxtexturename = typeof maxtexturename === 'undefined' ? 256 : maxtexturename;

	let out = CallNativeGDK("GetDynamicObjectMaterial", "iiISSIii", objectid, materialindex, maxtxdname, maxtexturename);
	return {modelid: out[0], txdname: out[1], texturename: out[2], materialcolor: out[3]};
}

/**
 * SetDynamicObjectMaterial
 * @see https://wiki.sa-mp.com/wiki/SetDynamicObjectMaterial
 * @param {Number} objectid
 * @param {Number} materialindex
 * @param {Number} modelid
 * @param {String} txdname
 * @param {String} texturename
 * @param {Number} [materialcolor=0]
 * @return {Number} retval
 */
function SetDynamicObjectMaterial(objectid, materialindex, modelid, txdname, texturename, materialcolor)
{
	materialcolor = typeof materialcolor === 'undefined' ? 0 : materialcolor;
	return CallNativeGDK("SetDynamicObjectMaterial", "iiissi", objectid, materialindex, modelid, txdname, texturename, materialcolor);
}

/**
 * IsDynamicObjectMaterialTextUsed
 * @see https://wiki.sa-mp.com/wiki/IsDynamicObjectMaterialTextUsed
 * @param {Number} objectid
 * @param {Number} materialindex
 * @return {Number} retval
 */
function IsDynamicObjectMaterialTextUsed(objectid, materialindex) {
	return CallNativeGDK("IsDynamicObjectMaterialTextUsed", "ii", objectid, materialindex);
}

/**
 * GetDynamicObjectMaterialText
 * @see https://wiki.sa-mp.com/wiki/GetDynamicObjectMaterialText
 * @param {Number} objectid
 * @param {Number} materialindex
 * @param {Number} [maxtext=256]
 * @param {Number} [maxfontface=256]
 * @return {text: String, materialsize: Number, fontface: String, fontsize: Number, bold: Number, fontcolor: Number, backcolor: Number, textalignment: Number}
 */
function GetDynamicObjectMaterialText(objectid, materialindex, maxtext, maxfontface)
{
	maxtext = typeof maxtext === 'undefined' ? 256 : maxtext;
	maxfontface = typeof maxfontface === 'undefined' ? 256 : maxfontface;

	let out = CallNativeGDK("GetDynamicObjectMaterialText", "iiSISIIIIIii", objectid, materialindex, maxtext, maxfontface);
	return {text: out[0], materialsize: out[1], fontface: out[2], fontsize: out[3], bold: out[4], fontcolor: out[5], backcolor: out[6], textalignment: out[7]};
}

/**
 * SetDynamicObjectMaterialText
 * @see https://wiki.sa-mp.com/wiki/SetDynamicObjectMaterialText
 * @param {Number} objectid
 * @param {Number} materialindex
 * @param {String} text
 * @param {Number} [materialsize=OBJECT_MATERIAL_SIZE_256x128]
 * @param {String} [fontface="Arial"]
 * @param {Number} [fontsize=24]
 * @param {Number} [bold=1]
 * @param {Number} [fontcolor=0xFFFFFFFF]
 * @param {Number} [backcolor=0]
 * @param {Number} [textalignment=0]
 * @return {Number} retval
 */
function SetDynamicObjectMaterialText(objectid, materialindex, text, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment)
{
	materialsize = typeof materialsize === 'undefined' ? OBJECT_MATERIAL_SIZE_256x128 : materialsize;
	fontface = typeof fontface === 'undefined' ? "Arial" : fontface;
	fontsize = typeof fontsize === 'undefined' ? 24 : fontsize;
	bold = typeof bold === 'undefined' ? 1 : bold;
	fontcolor = typeof fontcolor === 'undefined' ? 0xFFFFFFFF : fontcolor;
	backcolor = typeof backcolor === 'undefined' ? 0 : backcolor;
	textalignment = typeof textalignment === 'undefined' ? 0 : textalignment;
	return CallNativeGDK("SetDynamicObjectMaterialText", "iisisiiiii", objectid, materialindex, text, materialsize, fontface, fontsize, bold, fontcolor, backcolor, textalignment);
}

/**
 * CreateDynamicPickup
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicPickup
 * @param {Number} modelid
 * @param {Number} type
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} [worldid=-1]
 * @param {Number} [interiorid=-1]
 * @param {Number} [playerid=-1]
 * @param {Number} [streamdistance=100.0]
 * @return {Number} retval
 */
function CreateDynamicPickup(modelid, type, x, y, z, worldid, interiorid, playerid, streamdistance)
{
	worldid = typeof worldid === 'undefined' ? -1 : worldid;
	interiorid = typeof interiorid === 'undefined' ? -1 : interiorid;
	playerid = typeof playerid === 'undefined' ? -1 : playerid;
	streamdistance = typeof streamdistance === 'undefined' ? 100.0 : streamdistance;
	return CallNativeGDK("CreateDynamicPickup", "iifffiiif", modelid, type, x, y, z, worldid, interiorid, playerid, streamdistance);
}

/**
 * DestroyDynamicPickup
 * @see https://wiki.sa-mp.com/wiki/DestroyDynamicPickup
 * @param {Number} pickupid
 * @return {Number} retval
 */
function DestroyDynamicPickup(pickupid) {
	return CallNativeGDK("DestroyDynamicPickup", "i", pickupid);
}

/**
 * IsValidDynamicPickup
 * @see https://wiki.sa-mp.com/wiki/IsValidDynamicPickup
 * @param {Number} pickupid
 * @return {Number} retval
 */
function IsValidDynamicPickup(pickupid) {
	return CallNativeGDK("IsValidDynamicPickup", "i", pickupid);
}

/**
 * CreateDynamicCP
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicCP
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} size
 * @param {Number} [worldid=-1]
 * @param {Number} [interiorid=-1]
 * @param {Number} [playerid=-1]
 * @param {Number} [streamdistance=100.0]
 * @return {Number} retval
 */
function CreateDynamicCP(x, y, z, size, worldid, interiorid, playerid, streamdistance)
{
	worldid = typeof worldid === 'undefined' ? -1 : worldid;
	interiorid = typeof interiorid === 'undefined' ? -1 : interiorid;
	playerid = typeof playerid === 'undefined' ? -1 : playerid;
	streamdistance = typeof streamdistance === 'undefined' ? 100.0 : streamdistance;
	return CallNativeGDK("CreateDynamicCP", "ffffiiif", x, y, z, size, worldid, interiorid, playerid, streamdistance);
}

/**
 * DestroyDynamicCP
 * @see https://wiki.sa-mp.com/wiki/DestroyDynamicCP
 * @param {Number} checkpointid
 * @return {Number} retval
 */
function DestroyDynamicCP(checkpointid) {
	return CallNativeGDK("DestroyDynamicCP", "i", checkpointid);
}

/**
 * IsValidDynamicCP
 * @see https://wiki.sa-mp.com/wiki/IsValidDynamicCP
 * @param {Number} checkpointid
 * @return {Number} retval
 */
function IsValidDynamicCP(checkpointid) {
	return CallNativeGDK("IsValidDynamicCP", "i", checkpointid);
}

/**
 * TogglePlayerDynamicCP
 * @see https://wiki.sa-mp.com/wiki/TogglePlayerDynamicCP
 * @param {Number} playerid
 * @param {Number} checkpointid
 * @param {Number} toggle
 * @return {Number} retval
 */
function TogglePlayerDynamicCP(playerid, checkpointid, toggle) {
	return CallNativeGDK("TogglePlayerDynamicCP", "iii", playerid, checkpointid, toggle);
}

/**
 * TogglePlayerAllDynamicCPs
 * @see https://wiki.sa-mp.com/wiki/TogglePlayerAllDynamicCPs
 * @param {Number} playerid
 * @param {Number} toggle
 * @return {Number} retval
 */
function TogglePlayerAllDynamicCPs(playerid, toggle) {
	return CallNativeGDK("TogglePlayerAllDynamicCPs", "ii", playerid, toggle);
}

/**
 * IsPlayerInDynamicCP
 * @see https://wiki.sa-mp.com/wiki/IsPlayerInDynamicCP
 * @param {Number} playerid
 * @param {Number} checkpointid
 * @return {Number} retval
 */
function IsPlayerInDynamicCP(playerid, checkpointid) {
	return CallNativeGDK("IsPlayerInDynamicCP", "ii", playerid, checkpointid);
}

/**
 * GetPlayerVisibleDynamicCP
 * @see https://wiki.sa-mp.com/wiki/GetPlayerVisibleDynamicCP
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerVisibleDynamicCP(playerid) {
	return CallNativeGDK("GetPlayerVisibleDynamicCP", "i", playerid);
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
 * @param {Number} [worldid=-1]
 * @param {Number} [interiorid=-1]
 * @param {Number} [playerid=-1]
 * @param {Number} [streamdistance=100.0]
 * @return {Number} retval
 */
function CreateDynamicRaceCP(type, x, y, z, nextx, nexty, nextz, size, worldid, interiorid, playerid, streamdistance)
{
	worldid = typeof worldid === 'undefined' ? -1 : worldid;
	interiorid = typeof interiorid === 'undefined' ? -1 : interiorid;
	playerid = typeof playerid === 'undefined' ? -1 : playerid;
	streamdistance = typeof streamdistance === 'undefined' ? 100.0 : streamdistance;
	return CallNativeGDK("CreateDynamicRaceCP", "ifffffffiiif", type, x, y, z, nextx, nexty, nextz, size, worldid, interiorid, playerid, streamdistance);
}

/**
 * DestroyDynamicRaceCP
 * @see https://wiki.sa-mp.com/wiki/DestroyDynamicRaceCP
 * @param {Number} checkpointid
 * @return {Number} retval
 */
function DestroyDynamicRaceCP(checkpointid) {
	return CallNativeGDK("DestroyDynamicRaceCP", "i", checkpointid);
}

/**
 * IsValidDynamicRaceCP
 * @see https://wiki.sa-mp.com/wiki/IsValidDynamicRaceCP
 * @param {Number} checkpointid
 * @return {Number} retval
 */
function IsValidDynamicRaceCP(checkpointid) {
	return CallNativeGDK("IsValidDynamicRaceCP", "i", checkpointid);
}

/**
 * TogglePlayerDynamicRaceCP
 * @see https://wiki.sa-mp.com/wiki/TogglePlayerDynamicRaceCP
 * @param {Number} playerid
 * @param {Number} checkpointid
 * @param {Number} toggle
 * @return {Number} retval
 */
function TogglePlayerDynamicRaceCP(playerid, checkpointid, toggle) {
	return CallNativeGDK("TogglePlayerDynamicRaceCP", "iii", playerid, checkpointid, toggle);
}

/**
 * TogglePlayerAllDynamicRaceCPs
 * @see https://wiki.sa-mp.com/wiki/TogglePlayerAllDynamicRaceCPs
 * @param {Number} playerid
 * @param {Number} toggle
 * @return {Number} retval
 */
function TogglePlayerAllDynamicRaceCPs(playerid, toggle) {
	return CallNativeGDK("TogglePlayerAllDynamicRaceCPs", "ii", playerid, toggle);
}

/**
 * IsPlayerInDynamicRaceCP
 * @see https://wiki.sa-mp.com/wiki/IsPlayerInDynamicRaceCP
 * @param {Number} playerid
 * @param {Number} checkpointid
 * @return {Number} retval
 */
function IsPlayerInDynamicRaceCP(playerid, checkpointid) {
	return CallNativeGDK("IsPlayerInDynamicRaceCP", "ii", playerid, checkpointid);
}

/**
 * GetPlayerVisibleDynamicRaceCP
 * @see https://wiki.sa-mp.com/wiki/GetPlayerVisibleDynamicRaceCP
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerVisibleDynamicRaceCP(playerid) {
	return CallNativeGDK("GetPlayerVisibleDynamicRaceCP", "i", playerid);
}

/**
 * CreateDynamicMapIcon
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicMapIcon
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} type
 * @param {Number} color
 * @param {Number} [worldid=-1]
 * @param {Number} [interiorid=-1]
 * @param {Number} [playerid=-1]
 * @param {Number} [streamdistance=100.0]
 * @param {Number} [style=MAPICON_LOCAL]
 * @return {Number} retval
 */
function CreateDynamicMapIcon(x, y, z, type, color, worldid, interiorid, playerid, streamdistance, style)
{
	worldid = typeof worldid === 'undefined' ? -1 : worldid;
	interiorid = typeof interiorid === 'undefined' ? -1 : interiorid;
	playerid = typeof playerid === 'undefined' ? -1 : playerid;
	streamdistance = typeof streamdistance === 'undefined' ? 100.0 : streamdistance;
	style = typeof style === 'undefined' ? MAPICON_LOCAL : style;
	return CallNativeGDK("CreateDynamicMapIcon", "fffiiiiifi", x, y, z, type, color, worldid, interiorid, playerid, streamdistance, style);
}

/**
 * DestroyDynamicMapIcon
 * @see https://wiki.sa-mp.com/wiki/DestroyDynamicMapIcon
 * @param {Number} iconid
 * @return {Number} retval
 */
function DestroyDynamicMapIcon(iconid) {
	return CallNativeGDK("DestroyDynamicMapIcon", "i", iconid);
}

/**
 * IsValidDynamicMapIcon
 * @see https://wiki.sa-mp.com/wiki/IsValidDynamicMapIcon
 * @param {Number} iconid
 * @return {Number} retval
 */
function IsValidDynamicMapIcon(iconid) {
	return CallNativeGDK("IsValidDynamicMapIcon", "i", iconid);
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
 * @param {Number} [attachedplayer=INVALID_PLAYER_ID]
 * @param {Number} [attachedvehicle=INVALID_VEHICLE_ID]
 * @param {Number} [testlos=0]
 * @param {Number} [worldid=-1]
 * @param {Number} [interiorid=-1]
 * @param {Number} [playerid=-1]
 * @param {Number} [streamdistance=100.0]
 * @return {Number} retval
 */
function CreateDynamic3DTextLabel(text, color, x, y, z, drawdistance, attachedplayer, attachedvehicle, testlos, worldid, interiorid, playerid, streamdistance)
{
	attachedplayer = typeof attachedplayer === 'undefined' ? INVALID_PLAYER_ID : attachedplayer;
	attachedvehicle = typeof attachedvehicle === 'undefined' ? INVALID_VEHICLE_ID : attachedvehicle;
	testlos = typeof testlos === 'undefined' ? 0 : testlos;
	worldid = typeof worldid === 'undefined' ? -1 : worldid;
	interiorid = typeof interiorid === 'undefined' ? -1 : interiorid;
	playerid = typeof playerid === 'undefined' ? -1 : playerid;
	streamdistance = typeof streamdistance === 'undefined' ? 100.0 : streamdistance;
	return CallNativeGDK("CreateDynamic3DTextLabel", "siffffiiiiiif", text, color, x, y, z, drawdistance, attachedplayer, attachedvehicle, testlos, worldid, interiorid, playerid, streamdistance);
}

/**
 * DestroyDynamic3DTextLabel
 * @see https://wiki.sa-mp.com/wiki/DestroyDynamic3DTextLabel
 * @param {Number} id
 * @return {Number} retval
 */
function DestroyDynamic3DTextLabel(id) {
	return CallNativeGDK("DestroyDynamic3DTextLabel", "i", id);
}

/**
 * IsValidDynamic3DTextLabel
 * @see https://wiki.sa-mp.com/wiki/IsValidDynamic3DTextLabel
 * @param {Number} id
 * @return {Number} retval
 */
function IsValidDynamic3DTextLabel(id) {
	return CallNativeGDK("IsValidDynamic3DTextLabel", "i", id);
}

/**
 * GetDynamic3DTextLabelText
 * @see https://wiki.sa-mp.com/wiki/GetDynamic3DTextLabelText
 * @param {Number} id
 * @param {Number} [maxtext=256]
 * @return {String} text
 */
function GetDynamic3DTextLabelText(id, maxtext)
{
	maxtext = typeof maxtext === 'undefined' ? 256 : maxtext;
	return CallNativeGDK("GetDynamic3DTextLabelText", "iSi", id, maxtext);
}

/**
 * UpdateDynamic3DTextLabelText
 * @see https://wiki.sa-mp.com/wiki/UpdateDynamic3DTextLabelText
 * @param {Number} id
 * @param {Number} color
 * @param {String} text
 * @return {Number} retval
 */
function UpdateDynamic3DTextLabelText(id, color, text) {
	return CallNativeGDK("UpdateDynamic3DTextLabelText", "iis", id, color, text);
}

/**
 * CreateDynamicCircle
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicCircle
 * @param {Number} x
 * @param {Number} y
 * @param {Number} size
 * @param {Number} [worldid=-1]
 * @param {Number} [interiorid=-1]
 * @param {Number} [playerid=-1]
 * @return {Number} retval
 */
function CreateDynamicCircle(x, y, size, worldid, interiorid, playerid)
{
	worldid = typeof worldid === 'undefined' ? -1 : worldid;
	interiorid = typeof interiorid === 'undefined' ? -1 : interiorid;
	playerid = typeof playerid === 'undefined' ? -1 : playerid;
	return CallNativeGDK("CreateDynamicCircle", "fffiii", x, y, size, worldid, interiorid, playerid);
}

/**
 * CreateDynamicCylinder
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicCylinder
 * @param {Number} x
 * @param {Number} y
 * @param {Number} minz
 * @param {Number} maxz
 * @param {Number} size
 * @param {Number} [worldid=-1]
 * @param {Number} [interiorid=-1]
 * @param {Number} [playerid=-1]
 * @return {Number} retval
 */
function CreateDynamicCylinder(x, y, minz, maxz, size, worldid, interiorid, playerid)
{
	worldid = typeof worldid === 'undefined' ? -1 : worldid;
	interiorid = typeof interiorid === 'undefined' ? -1 : interiorid;
	playerid = typeof playerid === 'undefined' ? -1 : playerid;
	return CallNativeGDK("CreateDynamicCylinder", "fffffiii", x, y, minz, maxz, size, worldid, interiorid, playerid);
}

/**
 * CreateDynamicSphere
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicSphere
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} size
 * @param {Number} [worldid=-1]
 * @param {Number} [interiorid=-1]
 * @param {Number} [playerid=-1]
 * @return {Number} retval
 */
function CreateDynamicSphere(x, y, z, size, worldid, interiorid, playerid)
{
	worldid = typeof worldid === 'undefined' ? -1 : worldid;
	interiorid = typeof interiorid === 'undefined' ? -1 : interiorid;
	playerid = typeof playerid === 'undefined' ? -1 : playerid;
	return CallNativeGDK("CreateDynamicSphere", "ffffiii", x, y, z, size, worldid, interiorid, playerid);
}

/**
 * CreateDynamicRectangle
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicRectangle
 * @param {Number} minx
 * @param {Number} miny
 * @param {Number} maxx
 * @param {Number} maxy
 * @param {Number} [worldid=-1]
 * @param {Number} [interiorid=-1]
 * @param {Number} [playerid=-1]
 * @return {Number} retval
 */
function CreateDynamicRectangle(minx, miny, maxx, maxy, worldid, interiorid, playerid)
{
	worldid = typeof worldid === 'undefined' ? -1 : worldid;
	interiorid = typeof interiorid === 'undefined' ? -1 : interiorid;
	playerid = typeof playerid === 'undefined' ? -1 : playerid;
	return CallNativeGDK("CreateDynamicRectangle", "ffffiii", minx, miny, maxx, maxy, worldid, interiorid, playerid);
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
 * @param {Number} [worldid=-1]
 * @param {Number} [interiorid=-1]
 * @param {Number} [playerid=-1]
 * @return {Number} retval
 */
function CreateDynamicCuboid(minx, miny, minz, maxx, maxy, maxz, worldid, interiorid, playerid)
{
	worldid = typeof worldid === 'undefined' ? -1 : worldid;
	interiorid = typeof interiorid === 'undefined' ? -1 : interiorid;
	playerid = typeof playerid === 'undefined' ? -1 : playerid;
	return CallNativeGDK("CreateDynamicCuboid", "ffffffiii", minx, miny, minz, maxx, maxy, maxz, worldid, interiorid, playerid);
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
 * @param {Number} [worldid=-1]
 * @param {Number} [interiorid=-1]
 * @param {Number} [playerid=-1]
 * @return {Number} retval
 */
function CreateDynamicCube(minx, miny, minz, maxx, maxy, maxz, worldid, interiorid, playerid)
{
	worldid = typeof worldid === 'undefined' ? -1 : worldid;
	interiorid = typeof interiorid === 'undefined' ? -1 : interiorid;
	playerid = typeof playerid === 'undefined' ? -1 : playerid;
	return CallNativeGDK("CreateDynamicCube", "ffffffiii", minx, miny, minz, maxx, maxy, maxz, worldid, interiorid, playerid);
}

/**
 * CreateDynamicPolygon
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicPolygon
 * @param {String} points
 * @param {Number} [minz=-FLOAT_INFINITY]
 * @param {Number} [maxz=FLOAT_INFINITY]
 * @param {Number} [maxpoints=256]
 * @param {Number} [worldid=-1]
 * @param {Number} [interiorid=-1]
 * @param {Number} [playerid=-1]
 * @return {Number} retval
 */
function CreateDynamicPolygon(points, minz, maxz, maxpoints, worldid, interiorid, playerid)
{
	minz = typeof minz === 'undefined' ? -FLOAT_INFINITY : minz;
	maxz = typeof maxz === 'undefined' ? FLOAT_INFINITY : maxz;
	maxpoints = typeof maxpoints === 'undefined' ? 256 : maxpoints;
	worldid = typeof worldid === 'undefined' ? -1 : worldid;
	interiorid = typeof interiorid === 'undefined' ? -1 : interiorid;
	playerid = typeof playerid === 'undefined' ? -1 : playerid;
	return CallNativeGDK("CreateDynamicPolygon", "sffiiii", points, minz, maxz, maxpoints, worldid, interiorid, playerid);
}

/**
 * DestroyDynamicArea
 * @see https://wiki.sa-mp.com/wiki/DestroyDynamicArea
 * @param {Number} areaid
 * @return {Number} retval
 */
function DestroyDynamicArea(areaid) {
	return CallNativeGDK("DestroyDynamicArea", "i", areaid);
}

/**
 * IsValidDynamicArea
 * @see https://wiki.sa-mp.com/wiki/IsValidDynamicArea
 * @param {Number} areaid
 * @return {Number} retval
 */
function IsValidDynamicArea(areaid) {
	return CallNativeGDK("IsValidDynamicArea", "i", areaid);
}

/**
 * GetDynamicPolygonPoints
 * @see https://wiki.sa-mp.com/wiki/GetDynamicPolygonPoints
 * @param {Number} areaid
 * @param {Number} [maxpoints=256]
 * @return {String} points
 */
function GetDynamicPolygonPoints(areaid, maxpoints)
{
	maxpoints = typeof maxpoints === 'undefined' ? 256 : maxpoints;
	return CallNativeGDK("GetDynamicPolygonPoints", "iSi", areaid, maxpoints);
}

/**
 * GetDynamicPolygonNumberPoints
 * @see https://wiki.sa-mp.com/wiki/GetDynamicPolygonNumberPoints
 * @param {Number} areaid
 * @return {Number} retval
 */
function GetDynamicPolygonNumberPoints(areaid) {
	return CallNativeGDK("GetDynamicPolygonNumberPoints", "i", areaid);
}

/**
 * TogglePlayerDynamicArea
 * @see https://wiki.sa-mp.com/wiki/TogglePlayerDynamicArea
 * @param {Number} playerid
 * @param {Number} areaid
 * @param {Number} toggle
 * @return {Number} retval
 */
function TogglePlayerDynamicArea(playerid, areaid, toggle) {
	return CallNativeGDK("TogglePlayerDynamicArea", "iii", playerid, areaid, toggle);
}

/**
 * TogglePlayerAllDynamicAreas
 * @see https://wiki.sa-mp.com/wiki/TogglePlayerAllDynamicAreas
 * @param {Number} playerid
 * @param {Number} toggle
 * @return {Number} retval
 */
function TogglePlayerAllDynamicAreas(playerid, toggle) {
	return CallNativeGDK("TogglePlayerAllDynamicAreas", "ii", playerid, toggle);
}

/**
 * IsPlayerInDynamicArea
 * @see https://wiki.sa-mp.com/wiki/IsPlayerInDynamicArea
 * @param {Number} playerid
 * @param {Number} areaid
 * @param {Number} [recheck=0]
 * @return {Number} retval
 */
function IsPlayerInDynamicArea(playerid, areaid, recheck)
{
	recheck = typeof recheck === 'undefined' ? 0 : recheck;
	return CallNativeGDK("IsPlayerInDynamicArea", "iii", playerid, areaid, recheck);
}

/**
 * IsPlayerInAnyDynamicArea
 * @see https://wiki.sa-mp.com/wiki/IsPlayerInAnyDynamicArea
 * @param {Number} playerid
 * @param {Number} [recheck=0]
 * @return {Number} retval
 */
function IsPlayerInAnyDynamicArea(playerid, recheck)
{
	recheck = typeof recheck === 'undefined' ? 0 : recheck;
	return CallNativeGDK("IsPlayerInAnyDynamicArea", "ii", playerid, recheck);
}

/**
 * IsAnyPlayerInDynamicArea
 * @see https://wiki.sa-mp.com/wiki/IsAnyPlayerInDynamicArea
 * @param {Number} areaid
 * @param {Number} [recheck=0]
 * @return {Number} retval
 */
function IsAnyPlayerInDynamicArea(areaid, recheck)
{
	recheck = typeof recheck === 'undefined' ? 0 : recheck;
	return CallNativeGDK("IsAnyPlayerInDynamicArea", "ii", areaid, recheck);
}

/**
 * IsAnyPlayerInAnyDynamicArea
 * @see https://wiki.sa-mp.com/wiki/IsAnyPlayerInAnyDynamicArea
 * @param {Number} [recheck=0]
 * @return {Number} retval
 */
function IsAnyPlayerInAnyDynamicArea(recheck)
{
	recheck = typeof recheck === 'undefined' ? 0 : recheck;
	return CallNativeGDK("IsAnyPlayerInAnyDynamicArea", "i", recheck);
}

/**
 * GetPlayerDynamicAreas
 * @see https://wiki.sa-mp.com/wiki/GetPlayerDynamicAreas
 * @param {Number} playerid
 * @param {Number} [maxareas=256]
 * @return {String} areas
 */
function GetPlayerDynamicAreas(playerid, maxareas)
{
	maxareas = typeof maxareas === 'undefined' ? 256 : maxareas;
	return CallNativeGDK("GetPlayerDynamicAreas", "iSi", playerid, maxareas);
}

/**
 * GetPlayerNumberDynamicAreas
 * @see https://wiki.sa-mp.com/wiki/GetPlayerNumberDynamicAreas
 * @param {Number} playerid
 * @return {Number} retval
 */
function GetPlayerNumberDynamicAreas(playerid) {
	return CallNativeGDK("GetPlayerNumberDynamicAreas", "i", playerid);
}

/**
 * IsPointInDynamicArea
 * @see https://wiki.sa-mp.com/wiki/IsPointInDynamicArea
 * @param {Number} areaid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function IsPointInDynamicArea(areaid, x, y, z) {
	return CallNativeGDK("IsPointInDynamicArea", "ifff", areaid, x, y, z);
}

/**
 * IsPointInAnyDynamicArea
 * @see https://wiki.sa-mp.com/wiki/IsPointInAnyDynamicArea
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function IsPointInAnyDynamicArea(x, y, z) {
	return CallNativeGDK("IsPointInAnyDynamicArea", "fff", x, y, z);
}

/**
 * GetDynamicAreasForPoint
 * @see https://wiki.sa-mp.com/wiki/GetDynamicAreasForPoint
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} [maxareas=256]
 * @return {String} areas
 */
function GetDynamicAreasForPoint(x, y, z, maxareas)
{
	maxareas = typeof maxareas === 'undefined' ? 256 : maxareas;
	return CallNativeGDK("GetDynamicAreasForPoint", "fffSi", x, y, z, maxareas);
}

/**
 * GetNumberDynamicAreasForPoint
 * @see https://wiki.sa-mp.com/wiki/GetNumberDynamicAreasForPoint
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function GetNumberDynamicAreasForPoint(x, y, z) {
	return CallNativeGDK("GetNumberDynamicAreasForPoint", "fff", x, y, z);
}

/**
 * AttachDynamicAreaToObject
 * @see https://wiki.sa-mp.com/wiki/AttachDynamicAreaToObject
 * @param {Number} areaid
 * @param {Number} objectid
 * @param {Number} [type=STREAMER_OBJECT_TYPE_DYNAMIC]
 * @param {Number} [playerid=INVALID_PLAYER_ID]
 * @return {Number} retval
 */
function AttachDynamicAreaToObject(areaid, objectid, type, playerid)
{
	type = typeof type === 'undefined' ? STREAMER_OBJECT_TYPE_DYNAMIC : type;
	playerid = typeof playerid === 'undefined' ? INVALID_PLAYER_ID : playerid;
	return CallNativeGDK("AttachDynamicAreaToObject", "iiii", areaid, objectid, type, playerid);
}

/**
 * AttachDynamicAreaToPlayer
 * @see https://wiki.sa-mp.com/wiki/AttachDynamicAreaToPlayer
 * @param {Number} areaid
 * @param {Number} playerid
 * @return {Number} retval
 */
function AttachDynamicAreaToPlayer(areaid, playerid) {
	return CallNativeGDK("AttachDynamicAreaToPlayer", "ii", areaid, playerid);
}

/**
 * AttachDynamicAreaToVehicle
 * @see https://wiki.sa-mp.com/wiki/AttachDynamicAreaToVehicle
 * @param {Number} areaid
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function AttachDynamicAreaToVehicle(areaid, vehicleid) {
	return CallNativeGDK("AttachDynamicAreaToVehicle", "ii", areaid, vehicleid);
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
 * @param {Number} [drawdistance=0.0]
 * @param {Number} [streamdistance=200.0]
 * @param {Array} [worlds=[-1]]
 * @param {Array} [interiors=[-1]]
 * @param {Array} [players=[-1]]
 * @param {Number} [maxworlds=256]
 * @param {Number} [maxinteriors=256]
 * @param {Number} [maxplayers=256]
 * @return {Number} retval
 */
function CreateDynamicObjectEx(modelid, x, y, z, rx, ry, rz, drawdistance, streamdistance, worlds, interiors, players, maxworlds, maxinteriors, maxplayers)
{
	drawdistance = typeof drawdistance === 'undefined' ? 0.0 : drawdistance;
	streamdistance = typeof streamdistance === 'undefined' ? 200.0 : streamdistance;
	worlds = typeof worlds === 'undefined' ? [-1] : worlds;
	interiors = typeof interiors === 'undefined' ? [-1] : interiors;
	players = typeof players === 'undefined' ? [-1] : players;
	maxworlds = typeof maxworlds === 'undefined' ? 256 : maxworlds;
	maxinteriors = typeof maxinteriors === 'undefined' ? 256 : maxinteriors;
	maxplayers = typeof maxplayers === 'undefined' ? 256 : maxplayers;
	return CallNativeGDK("CreateDynamicObjectEx", "iffffffffaaaiii", modelid, x, y, z, rx, ry, rz, drawdistance, streamdistance, worlds, interiors, players, maxworlds, maxinteriors, maxplayers);
}

/**
 * CreateDynamicPickupEx
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicPickupEx
 * @param {Number} modelid
 * @param {Number} type
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} [streamdistance=100.0]
 * @param {Array} [worlds=[-1]]
 * @param {Array} [interiors=[-1]]
 * @param {Array} [players=[-1]]
 * @param {Number} [maxworlds=256]
 * @param {Number} [maxinteriors=256]
 * @param {Number} [maxplayers=256]
 * @return {Number} retval
 */
function CreateDynamicPickupEx(modelid, type, x, y, z, streamdistance, worlds, interiors, players, maxworlds, maxinteriors, maxplayers)
{
	streamdistance = typeof streamdistance === 'undefined' ? 100.0 : streamdistance;
	worlds = typeof worlds === 'undefined' ? [-1] : worlds;
	interiors = typeof interiors === 'undefined' ? [-1] : interiors;
	players = typeof players === 'undefined' ? [-1] : players;
	maxworlds = typeof maxworlds === 'undefined' ? 256 : maxworlds;
	maxinteriors = typeof maxinteriors === 'undefined' ? 256 : maxinteriors;
	maxplayers = typeof maxplayers === 'undefined' ? 256 : maxplayers;
	return CallNativeGDK("CreateDynamicPickupEx", "iiffffaaaiii", modelid, type, x, y, z, streamdistance, worlds, interiors, players, maxworlds, maxinteriors, maxplayers);
}

/**
 * CreateDynamicCPEx
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicCPEx
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} size
 * @param {Number} [streamdistance=100.0]
 * @param {Array} [worlds=[-1]]
 * @param {Array} [interiors=[-1]]
 * @param {Array} [players=[-1]]
 * @param {Number} [maxworlds=256]
 * @param {Number} [maxinteriors=256]
 * @param {Number} [maxplayers=256]
 * @return {Number} retval
 */
function CreateDynamicCPEx(x, y, z, size, streamdistance, worlds, interiors, players, maxworlds, maxinteriors, maxplayers)
{
	streamdistance = typeof streamdistance === 'undefined' ? 100.0 : streamdistance;
	worlds = typeof worlds === 'undefined' ? [-1] : worlds;
	interiors = typeof interiors === 'undefined' ? [-1] : interiors;
	players = typeof players === 'undefined' ? [-1] : players;
	maxworlds = typeof maxworlds === 'undefined' ? 256 : maxworlds;
	maxinteriors = typeof maxinteriors === 'undefined' ? 256 : maxinteriors;
	maxplayers = typeof maxplayers === 'undefined' ? 256 : maxplayers;
	return CallNativeGDK("CreateDynamicCPEx", "fffffaaaiii", x, y, z, size, streamdistance, worlds, interiors, players, maxworlds, maxinteriors, maxplayers);
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
 * @param {Number} [streamdistance=100.0]
 * @param {Array} [worlds=[-1]]
 * @param {Array} [interiors=[-1]]
 * @param {Array} [players=[-1]]
 * @param {Number} [maxworlds=256]
 * @param {Number} [maxinteriors=256]
 * @param {Number} [maxplayers=256]
 * @return {Number} retval
 */
function CreateDynamicRaceCPEx(type, x, y, z, nextx, nexty, nextz, size, streamdistance, worlds, interiors, players, maxworlds, maxinteriors, maxplayers)
{
	streamdistance = typeof streamdistance === 'undefined' ? 100.0 : streamdistance;
	worlds = typeof worlds === 'undefined' ? [-1] : worlds;
	interiors = typeof interiors === 'undefined' ? [-1] : interiors;
	players = typeof players === 'undefined' ? [-1] : players;
	maxworlds = typeof maxworlds === 'undefined' ? 256 : maxworlds;
	maxinteriors = typeof maxinteriors === 'undefined' ? 256 : maxinteriors;
	maxplayers = typeof maxplayers === 'undefined' ? 256 : maxplayers;
	return CallNativeGDK("CreateDynamicRaceCPEx", "iffffffffaaaiii", type, x, y, z, nextx, nexty, nextz, size, streamdistance, worlds, interiors, players, maxworlds, maxinteriors, maxplayers);
}

/**
 * CreateDynamicMapIconEx
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicMapIconEx
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} type
 * @param {Number} color
 * @param {Number} [style=MAPICON_LOCAL]
 * @param {Number} [streamdistance=100.0]
 * @param {Array} [worlds=[-1]]
 * @param {Array} [interiors=[-1]]
 * @param {Array} [players=[-1]]
 * @param {Number} [maxworlds=256]
 * @param {Number} [maxinteriors=256]
 * @param {Number} [maxplayers=256]
 * @return {Number} retval
 */
function CreateDynamicMapIconEx(x, y, z, type, color, style, streamdistance, worlds, interiors, players, maxworlds, maxinteriors, maxplayers)
{
	style = typeof style === 'undefined' ? MAPICON_LOCAL : style;
	streamdistance = typeof streamdistance === 'undefined' ? 100.0 : streamdistance;
	worlds = typeof worlds === 'undefined' ? [-1] : worlds;
	interiors = typeof interiors === 'undefined' ? [-1] : interiors;
	players = typeof players === 'undefined' ? [-1] : players;
	maxworlds = typeof maxworlds === 'undefined' ? 256 : maxworlds;
	maxinteriors = typeof maxinteriors === 'undefined' ? 256 : maxinteriors;
	maxplayers = typeof maxplayers === 'undefined' ? 256 : maxplayers;
	return CallNativeGDK("CreateDynamicMapIconEx", "fffiiifaaaiii", x, y, z, type, color, style, streamdistance, worlds, interiors, players, maxworlds, maxinteriors, maxplayers);
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
 * @param {Number} [attachedplayer=INVALID_PLAYER_ID]
 * @param {Number} [attachedvehicle=INVALID_VEHICLE_ID]
 * @param {Number} [testlos=0]
 * @param {Number} [streamdistance=100.0]
 * @param {Array} [worlds=[-1]]
 * @param {Array} [interiors=[-1]]
 * @param {Array} [players=[-1]]
 * @param {Number} [maxworlds=256]
 * @param {Number} [maxinteriors=256]
 * @param {Number} [maxplayers=256]
 * @return {Number} retval
 */
function CreateDynamic3DTextLabelEx(text, color, x, y, z, drawdistance, attachedplayer, attachedvehicle, testlos, streamdistance, worlds, interiors, players, maxworlds, maxinteriors, maxplayers)
{
	attachedplayer = typeof attachedplayer === 'undefined' ? INVALID_PLAYER_ID : attachedplayer;
	attachedvehicle = typeof attachedvehicle === 'undefined' ? INVALID_VEHICLE_ID : attachedvehicle;
	testlos = typeof testlos === 'undefined' ? 0 : testlos;
	streamdistance = typeof streamdistance === 'undefined' ? 100.0 : streamdistance;
	worlds = typeof worlds === 'undefined' ? [-1] : worlds;
	interiors = typeof interiors === 'undefined' ? [-1] : interiors;
	players = typeof players === 'undefined' ? [-1] : players;
	maxworlds = typeof maxworlds === 'undefined' ? 256 : maxworlds;
	maxinteriors = typeof maxinteriors === 'undefined' ? 256 : maxinteriors;
	maxplayers = typeof maxplayers === 'undefined' ? 256 : maxplayers;
	return CallNativeGDK("CreateDynamic3DTextLabelEx", "siffffiiifaaaiii", text, color, x, y, z, drawdistance, attachedplayer, attachedvehicle, testlos, streamdistance, worlds, interiors, players, maxworlds, maxinteriors, maxplayers);
}

/**
 * CreateDynamicCircleEx
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicCircleEx
 * @param {Number} x
 * @param {Number} y
 * @param {Number} size
 * @param {Array} [worlds=[-1]]
 * @param {Array} [interiors=[-1]]
 * @param {Array} [players=[-1]]
 * @param {Number} [maxworlds=256]
 * @param {Number} [maxinteriors=256]
 * @param {Number} [maxplayers=256]
 * @return {Number} retval
 */
function CreateDynamicCircleEx(x, y, size, worlds, interiors, players, maxworlds, maxinteriors, maxplayers)
{
	worlds = typeof worlds === 'undefined' ? [-1] : worlds;
	interiors = typeof interiors === 'undefined' ? [-1] : interiors;
	players = typeof players === 'undefined' ? [-1] : players;
	maxworlds = typeof maxworlds === 'undefined' ? 256 : maxworlds;
	maxinteriors = typeof maxinteriors === 'undefined' ? 256 : maxinteriors;
	maxplayers = typeof maxplayers === 'undefined' ? 256 : maxplayers;
	return CallNativeGDK("CreateDynamicCircleEx", "fffaaaiii", x, y, size, worlds, interiors, players, maxworlds, maxinteriors, maxplayers);
}

/**
 * CreateDynamicCylinderEx
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicCylinderEx
 * @param {Number} x
 * @param {Number} y
 * @param {Number} minz
 * @param {Number} maxz
 * @param {Number} size
 * @param {Array} [worlds=[-1]]
 * @param {Array} [interiors=[-1]]
 * @param {Array} [players=[-1]]
 * @param {Number} [maxworlds=256]
 * @param {Number} [maxinteriors=256]
 * @param {Number} [maxplayers=256]
 * @return {Number} retval
 */
function CreateDynamicCylinderEx(x, y, minz, maxz, size, worlds, interiors, players, maxworlds, maxinteriors, maxplayers)
{
	worlds = typeof worlds === 'undefined' ? [-1] : worlds;
	interiors = typeof interiors === 'undefined' ? [-1] : interiors;
	players = typeof players === 'undefined' ? [-1] : players;
	maxworlds = typeof maxworlds === 'undefined' ? 256 : maxworlds;
	maxinteriors = typeof maxinteriors === 'undefined' ? 256 : maxinteriors;
	maxplayers = typeof maxplayers === 'undefined' ? 256 : maxplayers;
	return CallNativeGDK("CreateDynamicCylinderEx", "fffffaaaiii", x, y, minz, maxz, size, worlds, interiors, players, maxworlds, maxinteriors, maxplayers);
}

/**
 * CreateDynamicSphereEx
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicSphereEx
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} size
 * @param {Array} [worlds=[-1]]
 * @param {Array} [interiors=[-1]]
 * @param {Array} [players=[-1]]
 * @param {Number} [maxworlds=256]
 * @param {Number} [maxinteriors=256]
 * @param {Number} [maxplayers=256]
 * @return {Number} retval
 */
function CreateDynamicSphereEx(x, y, z, size, worlds, interiors, players, maxworlds, maxinteriors, maxplayers)
{
	worlds = typeof worlds === 'undefined' ? [-1] : worlds;
	interiors = typeof interiors === 'undefined' ? [-1] : interiors;
	players = typeof players === 'undefined' ? [-1] : players;
	maxworlds = typeof maxworlds === 'undefined' ? 256 : maxworlds;
	maxinteriors = typeof maxinteriors === 'undefined' ? 256 : maxinteriors;
	maxplayers = typeof maxplayers === 'undefined' ? 256 : maxplayers;
	return CallNativeGDK("CreateDynamicSphereEx", "ffffaaaiii", x, y, z, size, worlds, interiors, players, maxworlds, maxinteriors, maxplayers);
}

/**
 * CreateDynamicRectangleEx
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicRectangleEx
 * @param {Number} minx
 * @param {Number} miny
 * @param {Number} maxx
 * @param {Number} maxy
 * @param {Array} [worlds=[-1]]
 * @param {Array} [interiors=[-1]]
 * @param {Array} [players=[-1]]
 * @param {Number} [maxworlds=256]
 * @param {Number} [maxinteriors=256]
 * @param {Number} [maxplayers=256]
 * @return {Number} retval
 */
function CreateDynamicRectangleEx(minx, miny, maxx, maxy, worlds, interiors, players, maxworlds, maxinteriors, maxplayers)
{
	worlds = typeof worlds === 'undefined' ? [-1] : worlds;
	interiors = typeof interiors === 'undefined' ? [-1] : interiors;
	players = typeof players === 'undefined' ? [-1] : players;
	maxworlds = typeof maxworlds === 'undefined' ? 256 : maxworlds;
	maxinteriors = typeof maxinteriors === 'undefined' ? 256 : maxinteriors;
	maxplayers = typeof maxplayers === 'undefined' ? 256 : maxplayers;
	return CallNativeGDK("CreateDynamicRectangleEx", "ffffaaaiii", minx, miny, maxx, maxy, worlds, interiors, players, maxworlds, maxinteriors, maxplayers);
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
 * @param {Array} [worlds=[-1]]
 * @param {Array} [interiors=[-1]]
 * @param {Array} [players=[-1]]
 * @param {Number} [maxworlds=256]
 * @param {Number} [maxinteriors=256]
 * @param {Number} [maxplayers=256]
 * @return {Number} retval
 */
function CreateDynamicCuboidEx(minx, miny, minz, maxx, maxy, maxz, worlds, interiors, players, maxworlds, maxinteriors, maxplayers)
{
	worlds = typeof worlds === 'undefined' ? [-1] : worlds;
	interiors = typeof interiors === 'undefined' ? [-1] : interiors;
	players = typeof players === 'undefined' ? [-1] : players;
	maxworlds = typeof maxworlds === 'undefined' ? 256 : maxworlds;
	maxinteriors = typeof maxinteriors === 'undefined' ? 256 : maxinteriors;
	maxplayers = typeof maxplayers === 'undefined' ? 256 : maxplayers;
	return CallNativeGDK("CreateDynamicCuboidEx", "ffffffaaaiii", minx, miny, minz, maxx, maxy, maxz, worlds, interiors, players, maxworlds, maxinteriors, maxplayers);
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
 * @param {Array} [worlds=[-1]]
 * @param {Array} [interiors=[-1]]
 * @param {Array} [players=[-1]]
 * @param {Number} [maxworlds=256]
 * @param {Number} [maxinteriors=256]
 * @param {Number} [maxplayers=256]
 * @return {Number} retval
 */
function CreateDynamicCubeEx(minx, miny, minz, maxx, maxy, maxz, worlds, interiors, players, maxworlds, maxinteriors, maxplayers)
{
	worlds = typeof worlds === 'undefined' ? [-1] : worlds;
	interiors = typeof interiors === 'undefined' ? [-1] : interiors;
	players = typeof players === 'undefined' ? [-1] : players;
	maxworlds = typeof maxworlds === 'undefined' ? 256 : maxworlds;
	maxinteriors = typeof maxinteriors === 'undefined' ? 256 : maxinteriors;
	maxplayers = typeof maxplayers === 'undefined' ? 256 : maxplayers;
	return CallNativeGDK("CreateDynamicCubeEx", "ffffffaaaiii", minx, miny, minz, maxx, maxy, maxz, worlds, interiors, players, maxworlds, maxinteriors, maxplayers);
}

/**
 * CreateDynamicPolygonEx
 * @see https://wiki.sa-mp.com/wiki/CreateDynamicPolygonEx
 * @param {String} points
 * @param {Number} [minz=-FLOAT_INFINITY]
 * @param {Number} [maxz=FLOAT_INFINITY]
 * @param {Number} [maxpoints=256]
 * @param {Array} [worlds=[-1]]
 * @param {Array} [interiors=[-1]]
 * @param {Array} [players=[-1]]
 * @param {Number} [maxworlds=256]
 * @param {Number} [maxinteriors=256]
 * @param {Number} [maxplayers=256]
 * @return {Number} retval
 */
function CreateDynamicPolygonEx(points, minz, maxz, maxpoints, worlds, interiors, players, maxworlds, maxinteriors, maxplayers)
{
	minz = typeof minz === 'undefined' ? -FLOAT_INFINITY : minz;
	maxz = typeof maxz === 'undefined' ? FLOAT_INFINITY : maxz;
	maxpoints = typeof maxpoints === 'undefined' ? 256 : maxpoints;
	worlds = typeof worlds === 'undefined' ? [-1] : worlds;
	interiors = typeof interiors === 'undefined' ? [-1] : interiors;
	players = typeof players === 'undefined' ? [-1] : players;
	maxworlds = typeof maxworlds === 'undefined' ? 256 : maxworlds;
	maxinteriors = typeof maxinteriors === 'undefined' ? 256 : maxinteriors;
	maxplayers = typeof maxplayers === 'undefined' ? 256 : maxplayers;
	return CallNativeGDK("CreateDynamicPolygonEx", "sffiaaaiii", points, minz, maxz, maxpoints, worlds, interiors, players, maxworlds, maxinteriors, maxplayers);
}

/**
 * Streamer_TickRate
 * @see https://wiki.sa-mp.com/wiki/Streamer_TickRate
 * @param {Number} rate
 * @return {Number} retval
 */
function Streamer_TickRate(rate) {
	return CallNativeGDK("Streamer_TickRate", "i", rate);
}

/**
 * Streamer_MaxItems
 * @see https://wiki.sa-mp.com/wiki/Streamer_MaxItems
 * @param {Number} type
 * @param {Number} items
 * @return {Number} retval
 */
function Streamer_MaxItems(type, items) {
	return CallNativeGDK("Streamer_MaxItems", "ii", type, items);
}

/**
 * Streamer_VisibleItems
 * @see https://wiki.sa-mp.com/wiki/Streamer_VisibleItems
 * @param {Number} type
 * @param {Number} items
 * @param {Number} [playerid=-1]
 * @return {Number} retval
 */
function Streamer_VisibleItems(type, items, playerid)
{
	playerid = typeof playerid === 'undefined' ? -1 : playerid;
	return CallNativeGDK("Streamer_VisibleItems", "iii", type, items, playerid);
}

/**
 * Streamer_CellDistance
 * @see https://wiki.sa-mp.com/wiki/Streamer_CellDistance
 * @param {Number} distance
 * @return {Number} retval
 */
function Streamer_CellDistance(distance) {
	return CallNativeGDK("Streamer_CellDistance", "f", distance);
}

/**
 * Streamer_CellSize
 * @see https://wiki.sa-mp.com/wiki/Streamer_CellSize
 * @param {Number} size
 * @return {Number} retval
 */
function Streamer_CellSize(size) {
	return CallNativeGDK("Streamer_CellSize", "f", size);
}

/**
 * Streamer_CallbackHook
 * @see https://wiki.sa-mp.com/wiki/Streamer_CallbackHook
 * @param {Number} callback
 * @param {Mixed} ...
 * @return {Number} retval
 */
function Streamer_CallbackHook(callback) {
	return CallNativeGDK("Streamer_CallbackHook", "i", callback);
}

/**
 * DestroyAllDynamicObjects
 * @see https://wiki.sa-mp.com/wiki/DestroyAllDynamicObjects
 * @return {Number} retval
 */
function DestroyAllDynamicObjects() {
	return CallNativeGDK("DestroyAllDynamicObjects");
}

/**
 * CountDynamicObjects
 * @see https://wiki.sa-mp.com/wiki/CountDynamicObjects
 * @return {Number} retval
 */
function CountDynamicObjects() {
	return CallNativeGDK("CountDynamicObjects");
}

/**
 * DestroyAllDynamicPickups
 * @see https://wiki.sa-mp.com/wiki/DestroyAllDynamicPickups
 * @return {Number} retval
 */
function DestroyAllDynamicPickups() {
	return CallNativeGDK("DestroyAllDynamicPickups");
}

/**
 * CountDynamicPickups
 * @see https://wiki.sa-mp.com/wiki/CountDynamicPickups
 * @return {Number} retval
 */
function CountDynamicPickups() {
	return CallNativeGDK("CountDynamicPickups");
}

/**
 * DestroyAllDynamicCPs
 * @see https://wiki.sa-mp.com/wiki/DestroyAllDynamicCPs
 * @return {Number} retval
 */
function DestroyAllDynamicCPs() {
	return CallNativeGDK("DestroyAllDynamicCPs");
}

/**
 * CountDynamicCPs
 * @see https://wiki.sa-mp.com/wiki/CountDynamicCPs
 * @return {Number} retval
 */
function CountDynamicCPs() {
	return CallNativeGDK("CountDynamicCPs");
}

/**
 * DestroyAllDynamicRaceCPs
 * @see https://wiki.sa-mp.com/wiki/DestroyAllDynamicRaceCPs
 * @return {Number} retval
 */
function DestroyAllDynamicRaceCPs() {
	return CallNativeGDK("DestroyAllDynamicRaceCPs");
}

/**
 * CountDynamicRaceCPs
 * @see https://wiki.sa-mp.com/wiki/CountDynamicRaceCPs
 * @return {Number} retval
 */
function CountDynamicRaceCPs() {
	return CallNativeGDK("CountDynamicRaceCPs");
}

/**
 * DestroyAllDynamicMapIcons
 * @see https://wiki.sa-mp.com/wiki/DestroyAllDynamicMapIcons
 * @return {Number} retval
 */
function DestroyAllDynamicMapIcons() {
	return CallNativeGDK("DestroyAllDynamicMapIcons");
}

/**
 * CountDynamicMapIcons
 * @see https://wiki.sa-mp.com/wiki/CountDynamicMapIcons
 * @return {Number} retval
 */
function CountDynamicMapIcons() {
	return CallNativeGDK("CountDynamicMapIcons");
}

/**
 * DestroyAllDynamic3DTextLabels
 * @see https://wiki.sa-mp.com/wiki/DestroyAllDynamic3DTextLabels
 * @return {Number} retval
 */
function DestroyAllDynamic3DTextLabels() {
	return CallNativeGDK("DestroyAllDynamic3DTextLabels");
}

/**
 * CountDynamic3DTextLabels
 * @see https://wiki.sa-mp.com/wiki/CountDynamic3DTextLabels
 * @return {Number} retval
 */
function CountDynamic3DTextLabels() {
	return CallNativeGDK("CountDynamic3DTextLabels");
}

/**
 * DestroyAllDynamicAreas
 * @see https://wiki.sa-mp.com/wiki/DestroyAllDynamicAreas
 * @return {Number} retval
 */
function DestroyAllDynamicAreas() {
	return CallNativeGDK("DestroyAllDynamicAreas");
}

/**
 * CountDynamicAreas
 * @see https://wiki.sa-mp.com/wiki/CountDynamicAreas
 * @return {Number} retval
 */
function CountDynamicAreas() {
	return CallNativeGDK("CountDynamicAreas");
}
