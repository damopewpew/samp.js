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
 * @param {Number} addsiren
 * @return {Number} retval
 */
function CreateVehicle( vehicletype, x, y, z, rotation, color1, color2, respawn_delay, addsiren ){
	addsiren = typeof addsiren !== 'undefined' ? addsiren : 0;
	return CallNative( "CreateVehicle", "iffffiiii", vehicletype, x, y, z, rotation, color1, color2, respawn_delay, addsiren );
}
/**
 * DestroyVehicle
 * @see https://wiki.sa-mp.com/wiki/DestroyVehicle
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function DestroyVehicle( vehicleid ){
	return CallNative( "DestroyVehicle", "i", vehicleid );
}
/**
 * IsVehicleStreamedIn
 * @see https://wiki.sa-mp.com/wiki/IsVehicleStreamedIn
 * @param {Number} vehicleid
 * @param {Number} forplayerid
 * @return {Number} retval
 */
function IsVehicleStreamedIn( vehicleid, forplayerid ){
	return CallNative( "IsVehicleStreamedIn", "ii", vehicleid, forplayerid );
}
/**
 * GetVehiclePos
 * @see https://wiki.sa-mp.com/wiki/GetVehiclePos
 * @param {Number} vehicleid
 * @return {{ x: Number,  y: Number,  z: Number }}
 */
function GetVehiclePos( vehicleid ){
	return CallNative( "GetVehiclePos", "iFFF", vehicleid, [ "x", "y", "z" ] );
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
function SetVehiclePos( vehicleid, x, y, z ){
	return CallNative( "SetVehiclePos", "ifff", vehicleid, x, y, z );
}
/**
 * GetVehicleZAngle
 * @see https://wiki.sa-mp.com/wiki/GetVehicleZAngle
 * @param {Number} vehicleid
 * @return {Number} z_angle
 */
function GetVehicleZAngle( vehicleid ){
	return CallNative( "GetVehicleZAngle", "iF", vehicleid );
}
/**
 * GetVehicleRotationQuat
 * @see https://wiki.sa-mp.com/wiki/GetVehicleRotationQuat
 * @param {Number} vehicleid
 * @return {{ w: Number,  x: Number,  y: Number,  z: Number }}
 */
function GetVehicleRotationQuat( vehicleid ){
	return CallNative( "GetVehicleRotationQuat", "iFFFF", vehicleid, [ "w", "x", "y", "z" ] );
}
/**
 * GetVehicleDistanceFromPoint
 * @see https://wiki.sa-mp.com/wiki/GetVehicleDistanceFromPoint
 * @param {Number} vehicleid
 * @param {Number} X
 * @param {Number} Y
 * @param {Number} Z
 * @return {Number} retval
 */
function GetVehicleDistanceFromPoint( vehicleid, X, Y, Z ){
	return CallNative( "GetVehicleDistanceFromPoint", "ifff", vehicleid, X, Y, Z );
}
/**
 * SetVehicleZAngle
 * @see https://wiki.sa-mp.com/wiki/SetVehicleZAngle
 * @param {Number} vehicleid
 * @param {Number} z_angle
 * @return {Number} retval
 */
function SetVehicleZAngle( vehicleid, z_angle ){
	return CallNative( "SetVehicleZAngle", "if", vehicleid, z_angle );
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
function SetVehicleParamsForPlayer( vehicleid, playerid, objective, doorslocked ){
	return CallNative( "SetVehicleParamsForPlayer", "iiii", vehicleid, playerid, objective, doorslocked );
}
/**
 * ManualVehicleEngineAndLights
 * @see https://wiki.sa-mp.com/wiki/ManualVehicleEngineAndLights
 * @return {Number} retval
 */
function ManualVehicleEngineAndLights(){
	CallNative( "ManualVehicleEngineAndLights" );
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
function SetVehicleParamsEx( vehicleid, engine, lights, alarm, doors, bonnet, boot, objective ){
	return CallNative( "SetVehicleParamsEx", "iiiiiiii", vehicleid, engine, lights, alarm, doors, bonnet, boot, objective );
}
/**
 * GetVehicleParamsEx
 * @see https://wiki.sa-mp.com/wiki/GetVehicleParamsEx
 * @param {Number} vehicleid
 * @return {{ engine: Number,  lights: Number,  alarm: Number,  doors: Number,  bonnet: Number,  boot: Number,  objective: Number }}
 */
function GetVehicleParamsEx( vehicleid ){
	return CallNative( "GetVehicleParamsEx", "iIIIIIII", vehicleid, [ "engine", "lights", "alarm", "doors", "bonnet", "boot", "objective" ] );
}
/**
 * GetVehicleParamsSirenState
 * @see https://wiki.sa-mp.com/wiki/GetVehicleParamsSirenState
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function GetVehicleParamsSirenState( vehicleid ){
	return CallNative( "GetVehicleParamsSirenState", "i", vehicleid );
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
function SetVehicleParamsCarDoors( vehicleid, driver, passenger, backleft, backright ){
	return CallNative( "SetVehicleParamsCarDoors", "iiiii", vehicleid, driver, passenger, backleft, backright );
}
/**
 * GetVehicleParamsCarDoors
 * @see https://wiki.sa-mp.com/wiki/GetVehicleParamsCarDoors
 * @param {Number} vehicleid
 * @return {{ driver: Number,  passenger: Number,  backleft: Number,  backright: Number }}
 */
function GetVehicleParamsCarDoors( vehicleid ){
	return CallNative( "GetVehicleParamsCarDoors", "iIIII", vehicleid, [ "driver", "passenger", "backleft", "backright" ] );
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
function SetVehicleParamsCarWindows( vehicleid, driver, passenger, backleft, backright ){
	return CallNative( "SetVehicleParamsCarWindows", "iiiii", vehicleid, driver, passenger, backleft, backright );
}
/**
 * GetVehicleParamsCarWindows
 * @see https://wiki.sa-mp.com/wiki/GetVehicleParamsCarWindows
 * @param {Number} vehicleid
 * @return {{ driver: Number,  passenger: Number,  backleft: Number,  backright: Number }}
 */
function GetVehicleParamsCarWindows( vehicleid ){
	return CallNative( "GetVehicleParamsCarWindows", "iIIII", vehicleid, [ "driver", "passenger", "backleft", "backright" ] );
}
/**
 * SetVehicleToRespawn
 * @see https://wiki.sa-mp.com/wiki/SetVehicleToRespawn
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function SetVehicleToRespawn( vehicleid ){
	return CallNative( "SetVehicleToRespawn", "i", vehicleid );
}
/**
 * LinkVehicleToInterior
 * @see https://wiki.sa-mp.com/wiki/LinkVehicleToInterior
 * @param {Number} vehicleid
 * @param {Number} interiorid
 * @return {Number} retval
 */
function LinkVehicleToInterior( vehicleid, interiorid ){
	return CallNative( "LinkVehicleToInterior", "ii", vehicleid, interiorid );
}
/**
 * AddVehicleComponent
 * @see https://wiki.sa-mp.com/wiki/AddVehicleComponent
 * @param {Number} vehicleid
 * @param {Number} componentid
 * @return {Number} retval
 */
function AddVehicleComponent( vehicleid, componentid ){
	return CallNative( "AddVehicleComponent", "ii", vehicleid, componentid );
}
/**
 * RemoveVehicleComponent
 * @see https://wiki.sa-mp.com/wiki/RemoveVehicleComponent
 * @param {Number} vehicleid
 * @param {Number} componentid
 * @return {Number} retval
 */
function RemoveVehicleComponent( vehicleid, componentid ){
	return CallNative( "RemoveVehicleComponent", "ii", vehicleid, componentid );
}
/**
 * ChangeVehicleColor
 * @see https://wiki.sa-mp.com/wiki/ChangeVehicleColor
 * @param {Number} vehicleid
 * @param {Number} color1
 * @param {Number} color2
 * @return {Number} retval
 */
function ChangeVehicleColor( vehicleid, color1, color2 ){
	return CallNative( "ChangeVehicleColor", "iii", vehicleid, color1, color2 );
}
/**
 * ChangeVehiclePaintjob
 * @see https://wiki.sa-mp.com/wiki/ChangeVehiclePaintjob
 * @param {Number} vehicleid
 * @param {Number} paintjobid
 * @return {Number} retval
 */
function ChangeVehiclePaintjob( vehicleid, paintjobid ){
	return CallNative( "ChangeVehiclePaintjob", "ii", vehicleid, paintjobid );
}
/**
 * SetVehicleHealth
 * @see https://wiki.sa-mp.com/wiki/SetVehicleHealth
 * @param {Number} vehicleid
 * @param {Number} health
 * @return {Number} retval
 */
function SetVehicleHealth( vehicleid, health ){
	return CallNative( "SetVehicleHealth", "if", vehicleid, health );
}
/**
 * GetVehicleHealth
 * @see https://wiki.sa-mp.com/wiki/GetVehicleHealth
 * @param {Number} vehicleid
 * @return {Number} health
 */
function GetVehicleHealth( vehicleid ){
	return CallNative( "GetVehicleHealth", "iF", vehicleid );
}
/**
 * AttachTrailerToVehicle
 * @see https://wiki.sa-mp.com/wiki/AttachTrailerToVehicle
 * @param {Number} trailerid
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function AttachTrailerToVehicle( trailerid, vehicleid ){
	return CallNative( "AttachTrailerToVehicle", "ii", trailerid, vehicleid );
}
/**
 * DetachTrailerFromVehicle
 * @see https://wiki.sa-mp.com/wiki/DetachTrailerFromVehicle
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function DetachTrailerFromVehicle( vehicleid ){
	return CallNative( "DetachTrailerFromVehicle", "i", vehicleid );
}
/**
 * IsTrailerAttachedToVehicle
 * @see https://wiki.sa-mp.com/wiki/IsTrailerAttachedToVehicle
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function IsTrailerAttachedToVehicle( vehicleid ){
	return CallNative( "IsTrailerAttachedToVehicle", "i", vehicleid );
}
/**
 * GetVehicleTrailer
 * @see https://wiki.sa-mp.com/wiki/GetVehicleTrailer
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function GetVehicleTrailer( vehicleid ){
	return CallNative( "GetVehicleTrailer", "i", vehicleid );
}
/**
 * SetVehicleNumberPlate
 * @see https://wiki.sa-mp.com/wiki/SetVehicleNumberPlate
 * @param {Number} vehicleid
 * @param {String} numberplate
 * @return {Number} retval
 */
function SetVehicleNumberPlate( vehicleid, numberplate ){
	return CallNative( "SetVehicleNumberPlate", "is", vehicleid, numberplate );
}
/**
 * GetVehicleModel
 * @see https://wiki.sa-mp.com/wiki/GetVehicleModel
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function GetVehicleModel( vehicleid ){
	return CallNative( "GetVehicleModel", "i", vehicleid );
}
/**
 * GetVehicleComponentInSlot
 * @see https://wiki.sa-mp.com/wiki/GetVehicleComponentInSlot
 * @param {Number} vehicleid
 * @param {Number} slot
 * @return {Number} retval
 */
function GetVehicleComponentInSlot( vehicleid, slot ){
	return CallNative( "GetVehicleComponentInSlot", "ii", vehicleid, slot );
}
/**
 * GetVehicleComponentType
 * @see https://wiki.sa-mp.com/wiki/GetVehicleComponentType
 * @param {Number} component
 * @return {Number} retval
 */
function GetVehicleComponentType( component ){
	return CallNative( "GetVehicleComponentType", "i", component );
}
/**
 * RepairVehicle
 * @see https://wiki.sa-mp.com/wiki/RepairVehicle
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function RepairVehicle( vehicleid ){
	return CallNative( "RepairVehicle", "i", vehicleid );
}
/**
 * GetVehicleVelocity
 * @see https://wiki.sa-mp.com/wiki/GetVehicleVelocity
 * @param {Number} vehicleid
 * @return {{ x: Number,  y: Number,  z: Number }}
 */
function GetVehicleVelocity( vehicleid ){
	return CallNative( "GetVehicleVelocity", "iFFF", vehicleid, [ "x", "y", "z" ] );
}
/**
 * SetVehicleVelocity
 * @see https://wiki.sa-mp.com/wiki/SetVehicleVelocity
 * @param {Number} vehicleid
 * @param {Number} X
 * @param {Number} Y
 * @param {Number} Z
 * @return {Number} retval
 */
function SetVehicleVelocity( vehicleid, X, Y, Z ){
	return CallNative( "SetVehicleVelocity", "ifff", vehicleid, X, Y, Z );
}
/**
 * SetVehicleAngularVelocity
 * @see https://wiki.sa-mp.com/wiki/SetVehicleAngularVelocity
 * @param {Number} vehicleid
 * @param {Number} X
 * @param {Number} Y
 * @param {Number} Z
 * @return {Number} retval
 */
function SetVehicleAngularVelocity( vehicleid, X, Y, Z ){
	return CallNative( "SetVehicleAngularVelocity", "ifff", vehicleid, X, Y, Z );
}
/**
 * GetVehicleDamageStatus
 * @see https://wiki.sa-mp.com/wiki/GetVehicleDamageStatus
 * @param {Number} vehicleid
 * @return {{ panels: Number,  doors: Number,  lights: Number,  tires: Number }}
 */
function GetVehicleDamageStatus( vehicleid ){
	return CallNative( "GetVehicleDamageStatus", "iIIII", vehicleid, [ "panels", "doors", "lights", "tires" ] );
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
function UpdateVehicleDamageStatus( vehicleid, panels, doors, lights, tires ){
	return CallNative( "UpdateVehicleDamageStatus", "iiiii", vehicleid, panels, doors, lights, tires );
}
/**
 * GetVehicleModelInfo
 * @see https://wiki.sa-mp.com/wiki/GetVehicleModelInfo
 * @param {Number} vehiclemodel
 * @param {Number} infotype
 * @return {{ x: Number,  y: Number,  z: Number }}
 */
function GetVehicleModelInfo( vehiclemodel, infotype ){
	return CallNative( "GetVehicleModelInfo", "iiFFF", vehiclemodel, infotype, [ "x", "y", "z" ] );
}
/**
 * SetVehicleVirtualWorld
 * @see https://wiki.sa-mp.com/wiki/SetVehicleVirtualWorld
 * @param {Number} vehicleid
 * @param {Number} worldid
 * @return {Number} retval
 */
function SetVehicleVirtualWorld( vehicleid, worldid ){
	return CallNative( "SetVehicleVirtualWorld", "ii", vehicleid, worldid );
}
/**
 * GetVehicleVirtualWorld
 * @see https://wiki.sa-mp.com/wiki/GetVehicleVirtualWorld
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function GetVehicleVirtualWorld( vehicleid ){
	return CallNative( "GetVehicleVirtualWorld", "i", vehicleid );
}
