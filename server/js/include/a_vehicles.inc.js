const CARMODTYPE_SPOILER = 0;
const CARMODTYPE_HOOD = 1;
const CARMODTYPE_ROOF = 2;
const CARMODTYPE_SIDESKIRT = 3;
const CARMODTYPE_LAMPS = 4;
const CARMODTYPE_NITRO = 5;
const CARMODTYPE_EXHAUST = 6;
const CARMODTYPE_WHEELS = 7;
const CARMODTYPE_STEREO = 8;
const CARMODTYPE_HYDRAULICS = 9;
const CARMODTYPE_FRONT_BUMPER = 10;
const CARMODTYPE_REAR_BUMPER = 11;
const CARMODTYPE_VENT_RIGHT = 12;
const CARMODTYPE_VENT_LEFT = 13;
const VEHICLE_PARAMS_UNSET = -1;
const VEHICLE_PARAMS_OFF = 0;
const VEHICLE_PARAMS_ON = 1;
const VEHICLE_MODEL_INFO_SIZE = 1;
const VEHICLE_MODEL_INFO_FRONTSEAT = 2;
const VEHICLE_MODEL_INFO_REARSEAT = 3;
const VEHICLE_MODEL_INFO_PETROLCAP = 4;
const VEHICLE_MODEL_INFO_WHEELSFRONT = 5;
const VEHICLE_MODEL_INFO_WHEELSREAR = 6;
const VEHICLE_MODEL_INFO_WHEELSMID = 7;
const VEHICLE_MODEL_INFO_FRONT_BUMPER_Z = 8;
const VEHICLE_MODEL_INFO_REAR_BUMPER_Z = 9;

/**
 * CreateVehicle
 * @see https://wiki.sa-mp.com/wiki/CreateVehicle
 * @param {Number} vehicletype
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} rotation
 * @param {Number} color1
 * @param {Number} color2
 * @param {Number} respawn_delay
 * @param {Number} [addsiren=0]
 * @return {Number} retval
 */
function CreateVehicle(vehicletype, x, y, z, rotation, color1, color2, respawn_delay, addsiren)
{
	addsiren = typeof addsiren === 'undefined' ? 0 : addsiren;
	return CallNativeGDK("CreateVehicle", "iffffiiii", vehicletype, x, y, z, rotation, color1, color2, respawn_delay, addsiren);
}

/**
 * DestroyVehicle
 * @see https://wiki.sa-mp.com/wiki/DestroyVehicle
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function DestroyVehicle(vehicleid) {
	return CallNativeGDK("DestroyVehicle", "i", vehicleid);
}

/**
 * IsVehicleStreamedIn
 * @see https://wiki.sa-mp.com/wiki/IsVehicleStreamedIn
 * @param {Number} vehicleid
 * @param {Number} forplayerid
 * @return {Number} retval
 */
function IsVehicleStreamedIn(vehicleid, forplayerid) {
	return CallNativeGDK("IsVehicleStreamedIn", "ii", vehicleid, forplayerid);
}

/**
 * GetVehiclePos
 * @see https://wiki.sa-mp.com/wiki/GetVehiclePos
 * @param {Number} vehicleid
 * @return {x: Number, y: Number, z: Number}
 */
function GetVehiclePos(vehicleid)
{
	let out = CallNativeGDK("GetVehiclePos", "iFFF", vehicleid);
	return {x: out[0], y: out[1], z: out[2]};
}

/**
 * SetVehiclePos
 * @see https://wiki.sa-mp.com/wiki/SetVehiclePos
 * @param {Number} vehicleid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function SetVehiclePos(vehicleid, x, y, z) {
	return CallNativeGDK("SetVehiclePos", "ifff", vehicleid, x, y, z);
}

/**
 * GetVehicleZAngle
 * @see https://wiki.sa-mp.com/wiki/GetVehicleZAngle
 * @param {Number} vehicleid
 * @return {Number} z_angle
 */
function GetVehicleZAngle(vehicleid) {
	return CallNativeGDK("GetVehicleZAngle", "iF", vehicleid);
}

/**
 * GetVehicleRotationQuat
 * @see https://wiki.sa-mp.com/wiki/GetVehicleRotationQuat
 * @param {Number} vehicleid
 * @return {w: Number, x: Number, y: Number, z: Number}
 */
function GetVehicleRotationQuat(vehicleid)
{
	let out = CallNativeGDK("GetVehicleRotationQuat", "iFFFF", vehicleid);
	return {w: out[0], x: out[1], y: out[2], z: out[3]};
}

/**
 * GetVehicleDistanceFromPoint
 * @see https://wiki.sa-mp.com/wiki/GetVehicleDistanceFromPoint
 * @param {Number} vehicleid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function GetVehicleDistanceFromPoint(vehicleid, x, y, z) {
	return CallNativeGDK("GetVehicleDistanceFromPoint", "ifff", vehicleid, x, y, z);
}

/**
 * SetVehicleZAngle
 * @see https://wiki.sa-mp.com/wiki/SetVehicleZAngle
 * @param {Number} vehicleid
 * @param {Number} z_angle
 * @return {Number} retval
 */
function SetVehicleZAngle(vehicleid, z_angle) {
	return CallNativeGDK("SetVehicleZAngle", "if", vehicleid, z_angle);
}

/**
 * SetVehicleParamsForPlayer
 * @see https://wiki.sa-mp.com/wiki/SetVehicleParamsForPlayer
 * @param {Number} vehicleid
 * @param {Number} playerid
 * @param {Number} objective
 * @param {Number} doorslocked
 * @return {Number} retval
 */
function SetVehicleParamsForPlayer(vehicleid, playerid, objective, doorslocked) {
	return CallNativeGDK("SetVehicleParamsForPlayer", "iiii", vehicleid, playerid, objective, doorslocked);
}

/**
 * ManualVehicleEngineAndLights
 * @see https://wiki.sa-mp.com/wiki/ManualVehicleEngineAndLights
 * @return {Number} retval
 */
function ManualVehicleEngineAndLights() {
	return CallNativeGDK("ManualVehicleEngineAndLights");
}

/**
 * SetVehicleParamsEx
 * @see https://wiki.sa-mp.com/wiki/SetVehicleParamsEx
 * @param {Number} vehicleid
 * @param {Number} engine
 * @param {Number} lights
 * @param {Number} alarm
 * @param {Number} doors
 * @param {Number} bonnet
 * @param {Number} boot
 * @param {Number} objective
 * @return {Number} retval
 */
function SetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective) {
	return CallNativeGDK("SetVehicleParamsEx", "iiiiiiii", vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);
}

/**
 * GetVehicleParamsEx
 * @see https://wiki.sa-mp.com/wiki/GetVehicleParamsEx
 * @param {Number} vehicleid
 * @return {engine: Number, lights: Number, alarm: Number, doors: Number, bonnet: Number, boot: Number, objective: Number}
 */
function GetVehicleParamsEx(vehicleid)
{
	let out = CallNativeGDK("GetVehicleParamsEx", "iIIIIIII", vehicleid);
	return {engine: out[0], lights: out[1], alarm: out[2], doors: out[3], bonnet: out[4], boot: out[5], objective: out[6]};
}

/**
 * GetVehicleParamsSirenState
 * @see https://wiki.sa-mp.com/wiki/GetVehicleParamsSirenState
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function GetVehicleParamsSirenState(vehicleid) {
	return CallNativeGDK("GetVehicleParamsSirenState", "i", vehicleid);
}

/**
 * SetVehicleParamsCarDoors
 * @see https://wiki.sa-mp.com/wiki/SetVehicleParamsCarDoors
 * @param {Number} vehicleid
 * @param {Number} driver
 * @param {Number} passenger
 * @param {Number} backleft
 * @param {Number} backright
 * @return {Number} retval
 */
function SetVehicleParamsCarDoors(vehicleid, driver, passenger, backleft, backright) {
	return CallNativeGDK("SetVehicleParamsCarDoors", "iiiii", vehicleid, driver, passenger, backleft, backright);
}

/**
 * GetVehicleParamsCarDoors
 * @see https://wiki.sa-mp.com/wiki/GetVehicleParamsCarDoors
 * @param {Number} vehicleid
 * @return {driver: Number, passenger: Number, backleft: Number, backright: Number}
 */
function GetVehicleParamsCarDoors(vehicleid)
{
	let out = CallNativeGDK("GetVehicleParamsCarDoors", "iIIII", vehicleid);
	return {driver: out[0], passenger: out[1], backleft: out[2], backright: out[3]};
}

/**
 * SetVehicleParamsCarWindows
 * @see https://wiki.sa-mp.com/wiki/SetVehicleParamsCarWindows
 * @param {Number} vehicleid
 * @param {Number} driver
 * @param {Number} passenger
 * @param {Number} backleft
 * @param {Number} backright
 * @return {Number} retval
 */
function SetVehicleParamsCarWindows(vehicleid, driver, passenger, backleft, backright) {
	return CallNativeGDK("SetVehicleParamsCarWindows", "iiiii", vehicleid, driver, passenger, backleft, backright);
}

/**
 * GetVehicleParamsCarWindows
 * @see https://wiki.sa-mp.com/wiki/GetVehicleParamsCarWindows
 * @param {Number} vehicleid
 * @return {driver: Number, passenger: Number, backleft: Number, backright: Number}
 */
function GetVehicleParamsCarWindows(vehicleid)
{
	let out = CallNativeGDK("GetVehicleParamsCarWindows", "iIIII", vehicleid);
	return {driver: out[0], passenger: out[1], backleft: out[2], backright: out[3]};
}

/**
 * SetVehicleToRespawn
 * @see https://wiki.sa-mp.com/wiki/SetVehicleToRespawn
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function SetVehicleToRespawn(vehicleid) {
	return CallNativeGDK("SetVehicleToRespawn", "i", vehicleid);
}

/**
 * LinkVehicleToInterior
 * @see https://wiki.sa-mp.com/wiki/LinkVehicleToInterior
 * @param {Number} vehicleid
 * @param {Number} interiorid
 * @return {Number} retval
 */
function LinkVehicleToInterior(vehicleid, interiorid) {
	return CallNativeGDK("LinkVehicleToInterior", "ii", vehicleid, interiorid);
}

/**
 * AddVehicleComponent
 * @see https://wiki.sa-mp.com/wiki/AddVehicleComponent
 * @param {Number} vehicleid
 * @param {Number} componentid
 * @return {Number} retval
 */
function AddVehicleComponent(vehicleid, componentid) {
	return CallNativeGDK("AddVehicleComponent", "ii", vehicleid, componentid);
}

/**
 * RemoveVehicleComponent
 * @see https://wiki.sa-mp.com/wiki/RemoveVehicleComponent
 * @param {Number} vehicleid
 * @param {Number} componentid
 * @return {Number} retval
 */
function RemoveVehicleComponent(vehicleid, componentid) {
	return CallNativeGDK("RemoveVehicleComponent", "ii", vehicleid, componentid);
}

/**
 * ChangeVehicleColor
 * @see https://wiki.sa-mp.com/wiki/ChangeVehicleColor
 * @param {Number} vehicleid
 * @param {Number} color1
 * @param {Number} color2
 * @return {Number} retval
 */
function ChangeVehicleColor(vehicleid, color1, color2) {
	return CallNativeGDK("ChangeVehicleColor", "iii", vehicleid, color1, color2);
}

/**
 * ChangeVehiclePaintjob
 * @see https://wiki.sa-mp.com/wiki/ChangeVehiclePaintjob
 * @param {Number} vehicleid
 * @param {Number} paintjobid
 * @return {Number} retval
 */
function ChangeVehiclePaintjob(vehicleid, paintjobid) {
	return CallNativeGDK("ChangeVehiclePaintjob", "ii", vehicleid, paintjobid);
}

/**
 * SetVehicleHealth
 * @see https://wiki.sa-mp.com/wiki/SetVehicleHealth
 * @param {Number} vehicleid
 * @param {Number} health
 * @return {Number} retval
 */
function SetVehicleHealth(vehicleid, health) {
	return CallNativeGDK("SetVehicleHealth", "if", vehicleid, health);
}

/**
 * GetVehicleHealth
 * @see https://wiki.sa-mp.com/wiki/GetVehicleHealth
 * @param {Number} vehicleid
 * @return {Number} health
 */
function GetVehicleHealth(vehicleid) {
	return CallNativeGDK("GetVehicleHealth", "iF", vehicleid);
}

/**
 * AttachTrailerToVehicle
 * @see https://wiki.sa-mp.com/wiki/AttachTrailerToVehicle
 * @param {Number} trailerid
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function AttachTrailerToVehicle(trailerid, vehicleid) {
	return CallNativeGDK("AttachTrailerToVehicle", "ii", trailerid, vehicleid);
}

/**
 * DetachTrailerFromVehicle
 * @see https://wiki.sa-mp.com/wiki/DetachTrailerFromVehicle
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function DetachTrailerFromVehicle(vehicleid) {
	return CallNativeGDK("DetachTrailerFromVehicle", "i", vehicleid);
}

/**
 * IsTrailerAttachedToVehicle
 * @see https://wiki.sa-mp.com/wiki/IsTrailerAttachedToVehicle
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function IsTrailerAttachedToVehicle(vehicleid) {
	return CallNativeGDK("IsTrailerAttachedToVehicle", "i", vehicleid);
}

/**
 * GetVehicleTrailer
 * @see https://wiki.sa-mp.com/wiki/GetVehicleTrailer
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function GetVehicleTrailer(vehicleid) {
	return CallNativeGDK("GetVehicleTrailer", "i", vehicleid);
}

/**
 * SetVehicleNumberPlate
 * @see https://wiki.sa-mp.com/wiki/SetVehicleNumberPlate
 * @param {Number} vehicleid
 * @param {String} numberplate
 * @return {Number} retval
 */
function SetVehicleNumberPlate(vehicleid, numberplate) {
	return CallNativeGDK("SetVehicleNumberPlate", "is", vehicleid, numberplate);
}

/**
 * GetVehicleModel
 * @see https://wiki.sa-mp.com/wiki/GetVehicleModel
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function GetVehicleModel(vehicleid) {
	return CallNativeGDK("GetVehicleModel", "i", vehicleid);
}

/**
 * GetVehicleComponentInSlot
 * @see https://wiki.sa-mp.com/wiki/GetVehicleComponentInSlot
 * @param {Number} vehicleid
 * @param {Number} slot
 * @return {Number} retval
 */
function GetVehicleComponentInSlot(vehicleid, slot) {
	return CallNativeGDK("GetVehicleComponentInSlot", "ii", vehicleid, slot);
}

/**
 * GetVehicleComponentType
 * @see https://wiki.sa-mp.com/wiki/GetVehicleComponentType
 * @param {Number} component
 * @return {Number} retval
 */
function GetVehicleComponentType(component) {
	return CallNativeGDK("GetVehicleComponentType", "i", component);
}

/**
 * RepairVehicle
 * @see https://wiki.sa-mp.com/wiki/RepairVehicle
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function RepairVehicle(vehicleid) {
	return CallNativeGDK("RepairVehicle", "i", vehicleid);
}

/**
 * GetVehicleVelocity
 * @see https://wiki.sa-mp.com/wiki/GetVehicleVelocity
 * @param {Number} vehicleid
 * @return {x: Number, y: Number, z: Number}
 */
function GetVehicleVelocity(vehicleid)
{
	let out = CallNativeGDK("GetVehicleVelocity", "iFFF", vehicleid);
	return {x: out[0], y: out[1], z: out[2]};
}

/**
 * SetVehicleVelocity
 * @see https://wiki.sa-mp.com/wiki/SetVehicleVelocity
 * @param {Number} vehicleid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function SetVehicleVelocity(vehicleid, x, y, z) {
	return CallNativeGDK("SetVehicleVelocity", "ifff", vehicleid, x, y, z);
}

/**
 * SetVehicleAngularVelocity
 * @see https://wiki.sa-mp.com/wiki/SetVehicleAngularVelocity
 * @param {Number} vehicleid
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return {Number} retval
 */
function SetVehicleAngularVelocity(vehicleid, x, y, z) {
	return CallNativeGDK("SetVehicleAngularVelocity", "ifff", vehicleid, x, y, z);
}

/**
 * GetVehicleDamageStatus
 * @see https://wiki.sa-mp.com/wiki/GetVehicleDamageStatus
 * @param {Number} vehicleid
 * @return {panels: Number, doors: Number, lights: Number, tires: Number}
 */
function GetVehicleDamageStatus(vehicleid)
{
	let out = CallNativeGDK("GetVehicleDamageStatus", "iIIII", vehicleid);
	return {panels: out[0], doors: out[1], lights: out[2], tires: out[3]};
}

/**
 * UpdateVehicleDamageStatus
 * @see https://wiki.sa-mp.com/wiki/UpdateVehicleDamageStatus
 * @param {Number} vehicleid
 * @param {Number} panels
 * @param {Number} doors
 * @param {Number} lights
 * @param {Number} tires
 * @return {Number} retval
 */
function UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, tires) {
	return CallNativeGDK("UpdateVehicleDamageStatus", "iiiii", vehicleid, panels, doors, lights, tires);
}

/**
 * GetVehicleModelInfo
 * @see https://wiki.sa-mp.com/wiki/GetVehicleModelInfo
 * @param {Number} vehiclemodel
 * @param {Number} infotype
 * @return {x: Number, y: Number, z: Number}
 */
function GetVehicleModelInfo(vehiclemodel, infotype)
{
	let out = CallNativeGDK("GetVehicleModelInfo", "iiFFF", vehiclemodel, infotype);
	return {x: out[0], y: out[1], z: out[2]};
}

/**
 * SetVehicleVirtualWorld
 * @see https://wiki.sa-mp.com/wiki/SetVehicleVirtualWorld
 * @param {Number} vehicleid
 * @param {Number} worldid
 * @return {Number} retval
 */
function SetVehicleVirtualWorld(vehicleid, worldid) {
	return CallNativeGDK("SetVehicleVirtualWorld", "ii", vehicleid, worldid);
}

/**
 * GetVehicleVirtualWorld
 * @see https://wiki.sa-mp.com/wiki/GetVehicleVirtualWorld
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function GetVehicleVirtualWorld(vehicleid) {
	return CallNativeGDK("GetVehicleVirtualWorld", "i", vehicleid);
}
