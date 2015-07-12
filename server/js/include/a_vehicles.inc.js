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
	var out = CallNativeGDK( "CreateVehicle", "iffffiiii", vehicletype, x, y, z, rotation, color1, color2, respawn_delay, addsiren );
	return out;
}
/**
 * DestroyVehicle
 * @see https://wiki.sa-mp.com/wiki/DestroyVehicle
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function DestroyVehicle( vehicleid ){
	var out = CallNativeGDK( "DestroyVehicle", "i", vehicleid );
	return out;
}
/**
 * IsVehicleStreamedIn
 * @see https://wiki.sa-mp.com/wiki/IsVehicleStreamedIn
 * @param {Number} vehicleid
 * @param {Number} forplayerid
 * @return {Number} retval
 */
function IsVehicleStreamedIn( vehicleid, forplayerid ){
	var out = CallNativeGDK( "IsVehicleStreamedIn", "ii", vehicleid, forplayerid );
	return out;
}
/**
 * GetVehiclePos
 * @see https://wiki.sa-mp.com/wiki/GetVehiclePos
 * @param {Number} vehicleid
 * @return {{ x: Number,  y: Number,  z: Number }}
 */
function GetVehiclePos( vehicleid ){
	var out = CallNativeGDK( "GetVehiclePos", "iFFF", vehicleid, [ "x", "y", "z" ] );
	return {x: out[0],y: out[1],z: out[2]};
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
	var out = CallNativeGDK( "SetVehiclePos", "ifff", vehicleid, x, y, z );
	return out;
}
/**
 * GetVehicleZAngle
 * @see https://wiki.sa-mp.com/wiki/GetVehicleZAngle
 * @param {Number} vehicleid
 * @return {Number} z_angle
 */
function GetVehicleZAngle( vehicleid ){
	var out = CallNativeGDK( "GetVehicleZAngle", "iF", vehicleid );
	return out;
}
/**
 * GetVehicleRotationQuat
 * @see https://wiki.sa-mp.com/wiki/GetVehicleRotationQuat
 * @param {Number} vehicleid
 * @return {{ w: Number,  x: Number,  y: Number,  z: Number }}
 */
function GetVehicleRotationQuat( vehicleid ){
	var out = CallNativeGDK( "GetVehicleRotationQuat", "iFFFF", vehicleid, [ "w", "x", "y", "z" ] );
	return {w: out[0],x: out[1],y: out[2],z: out[3]};
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
	var out = CallNativeGDK( "GetVehicleDistanceFromPoint", "ifff", vehicleid, X, Y, Z );
	return out;
}
/**
 * SetVehicleZAngle
 * @see https://wiki.sa-mp.com/wiki/SetVehicleZAngle
 * @param {Number} vehicleid
 * @param {Number} z_angle
 * @return {Number} retval
 */
function SetVehicleZAngle( vehicleid, z_angle ){
	var out = CallNativeGDK( "SetVehicleZAngle", "if", vehicleid, z_angle );
	return out;
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
	var out = CallNativeGDK( "SetVehicleParamsForPlayer", "iiii", vehicleid, playerid, objective, doorslocked );
	return out;
}
/**
 * ManualVehicleEngineAndLights
 * @see https://wiki.sa-mp.com/wiki/ManualVehicleEngineAndLights
 * @return {Number} retval
 */
function ManualVehicleEngineAndLights(){
	 return CallNativeGDK( "ManualVehicleEngineAndLights" );
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
	var out = CallNativeGDK( "SetVehicleParamsEx", "iiiiiiii", vehicleid, engine, lights, alarm, doors, bonnet, boot, objective );
	return out;
}
/**
 * GetVehicleParamsEx
 * @see https://wiki.sa-mp.com/wiki/GetVehicleParamsEx
 * @param {Number} vehicleid
 * @return {{ engine: Number,  lights: Number,  alarm: Number,  doors: Number,  bonnet: Number,  boot: Number,  objective: Number }}
 */
function GetVehicleParamsEx( vehicleid ){
	var out = CallNativeGDK( "GetVehicleParamsEx", "iIIIIIII", vehicleid, [ "engine", "lights", "alarm", "doors", "bonnet", "boot", "objective" ] );
	return {engine: out[0],lights: out[1],alarm: out[2],doors: out[3],bonnet: out[4],boot: out[5],objective: out[6]};
}
/**
 * GetVehicleParamsSirenState
 * @see https://wiki.sa-mp.com/wiki/GetVehicleParamsSirenState
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function GetVehicleParamsSirenState( vehicleid ){
	var out = CallNativeGDK( "GetVehicleParamsSirenState", "i", vehicleid );
	return out;
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
	var out = CallNativeGDK( "SetVehicleParamsCarDoors", "iiiii", vehicleid, driver, passenger, backleft, backright );
	return out;
}
/**
 * GetVehicleParamsCarDoors
 * @see https://wiki.sa-mp.com/wiki/GetVehicleParamsCarDoors
 * @param {Number} vehicleid
 * @return {{ driver: Number,  passenger: Number,  backleft: Number,  backright: Number }}
 */
function GetVehicleParamsCarDoors( vehicleid ){
	var out = CallNativeGDK( "GetVehicleParamsCarDoors", "iIIII", vehicleid, [ "driver", "passenger", "backleft", "backright" ] );
	return {driver: out[0],passenger: out[1],backleft: out[2],backright: out[3]};
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
	var out = CallNativeGDK( "SetVehicleParamsCarWindows", "iiiii", vehicleid, driver, passenger, backleft, backright );
	return out;
}
/**
 * GetVehicleParamsCarWindows
 * @see https://wiki.sa-mp.com/wiki/GetVehicleParamsCarWindows
 * @param {Number} vehicleid
 * @return {{ driver: Number,  passenger: Number,  backleft: Number,  backright: Number }}
 */
function GetVehicleParamsCarWindows( vehicleid ){
	var out = CallNativeGDK( "GetVehicleParamsCarWindows", "iIIII", vehicleid, [ "driver", "passenger", "backleft", "backright" ] );
	return {driver: out[0],passenger: out[1],backleft: out[2],backright: out[3]};
}
/**
 * SetVehicleToRespawn
 * @see https://wiki.sa-mp.com/wiki/SetVehicleToRespawn
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function SetVehicleToRespawn( vehicleid ){
	var out = CallNativeGDK( "SetVehicleToRespawn", "i", vehicleid );
	return out;
}
/**
 * LinkVehicleToInterior
 * @see https://wiki.sa-mp.com/wiki/LinkVehicleToInterior
 * @param {Number} vehicleid
 * @param {Number} interiorid
 * @return {Number} retval
 */
function LinkVehicleToInterior( vehicleid, interiorid ){
	var out = CallNativeGDK( "LinkVehicleToInterior", "ii", vehicleid, interiorid );
	return out;
}
/**
 * AddVehicleComponent
 * @see https://wiki.sa-mp.com/wiki/AddVehicleComponent
 * @param {Number} vehicleid
 * @param {Number} componentid
 * @return {Number} retval
 */
function AddVehicleComponent( vehicleid, componentid ){
	var out = CallNativeGDK( "AddVehicleComponent", "ii", vehicleid, componentid );
	return out;
}
/**
 * RemoveVehicleComponent
 * @see https://wiki.sa-mp.com/wiki/RemoveVehicleComponent
 * @param {Number} vehicleid
 * @param {Number} componentid
 * @return {Number} retval
 */
function RemoveVehicleComponent( vehicleid, componentid ){
	var out = CallNativeGDK( "RemoveVehicleComponent", "ii", vehicleid, componentid );
	return out;
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
	var out = CallNativeGDK( "ChangeVehicleColor", "iii", vehicleid, color1, color2 );
	return out;
}
/**
 * ChangeVehiclePaintjob
 * @see https://wiki.sa-mp.com/wiki/ChangeVehiclePaintjob
 * @param {Number} vehicleid
 * @param {Number} paintjobid
 * @return {Number} retval
 */
function ChangeVehiclePaintjob( vehicleid, paintjobid ){
	var out = CallNativeGDK( "ChangeVehiclePaintjob", "ii", vehicleid, paintjobid );
	return out;
}
/**
 * SetVehicleHealth
 * @see https://wiki.sa-mp.com/wiki/SetVehicleHealth
 * @param {Number} vehicleid
 * @param {Number} health
 * @return {Number} retval
 */
function SetVehicleHealth( vehicleid, health ){
	var out = CallNativeGDK( "SetVehicleHealth", "if", vehicleid, health );
	return out;
}
/**
 * GetVehicleHealth
 * @see https://wiki.sa-mp.com/wiki/GetVehicleHealth
 * @param {Number} vehicleid
 * @return {Number} health
 */
function GetVehicleHealth( vehicleid ){
	var out = CallNativeGDK( "GetVehicleHealth", "iF", vehicleid );
	return out;
}
/**
 * AttachTrailerToVehicle
 * @see https://wiki.sa-mp.com/wiki/AttachTrailerToVehicle
 * @param {Number} trailerid
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function AttachTrailerToVehicle( trailerid, vehicleid ){
	var out = CallNativeGDK( "AttachTrailerToVehicle", "ii", trailerid, vehicleid );
	return out;
}
/**
 * DetachTrailerFromVehicle
 * @see https://wiki.sa-mp.com/wiki/DetachTrailerFromVehicle
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function DetachTrailerFromVehicle( vehicleid ){
	var out = CallNativeGDK( "DetachTrailerFromVehicle", "i", vehicleid );
	return out;
}
/**
 * IsTrailerAttachedToVehicle
 * @see https://wiki.sa-mp.com/wiki/IsTrailerAttachedToVehicle
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function IsTrailerAttachedToVehicle( vehicleid ){
	var out = CallNativeGDK( "IsTrailerAttachedToVehicle", "i", vehicleid );
	return out;
}
/**
 * GetVehicleTrailer
 * @see https://wiki.sa-mp.com/wiki/GetVehicleTrailer
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function GetVehicleTrailer( vehicleid ){
	var out = CallNativeGDK( "GetVehicleTrailer", "i", vehicleid );
	return out;
}
/**
 * SetVehicleNumberPlate
 * @see https://wiki.sa-mp.com/wiki/SetVehicleNumberPlate
 * @param {Number} vehicleid
 * @param {String} numberplate
 * @return {Number} retval
 */
function SetVehicleNumberPlate( vehicleid, numberplate ){
	var out = CallNativeGDK( "SetVehicleNumberPlate", "is", vehicleid, numberplate );
	return out;
}
/**
 * GetVehicleModel
 * @see https://wiki.sa-mp.com/wiki/GetVehicleModel
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function GetVehicleModel( vehicleid ){
	var out = CallNativeGDK( "GetVehicleModel", "i", vehicleid );
	return out;
}
/**
 * GetVehicleComponentInSlot
 * @see https://wiki.sa-mp.com/wiki/GetVehicleComponentInSlot
 * @param {Number} vehicleid
 * @param {Number} slot
 * @return {Number} retval
 */
function GetVehicleComponentInSlot( vehicleid, slot ){
	var out = CallNativeGDK( "GetVehicleComponentInSlot", "ii", vehicleid, slot );
	return out;
}
/**
 * GetVehicleComponentType
 * @see https://wiki.sa-mp.com/wiki/GetVehicleComponentType
 * @param {Number} component
 * @return {Number} retval
 */
function GetVehicleComponentType( component ){
	var out = CallNativeGDK( "GetVehicleComponentType", "i", component );
	return out;
}
/**
 * RepairVehicle
 * @see https://wiki.sa-mp.com/wiki/RepairVehicle
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function RepairVehicle( vehicleid ){
	var out = CallNativeGDK( "RepairVehicle", "i", vehicleid );
	return out;
}
/**
 * GetVehicleVelocity
 * @see https://wiki.sa-mp.com/wiki/GetVehicleVelocity
 * @param {Number} vehicleid
 * @return {{ x: Number,  y: Number,  z: Number }}
 */
function GetVehicleVelocity( vehicleid ){
	var out = CallNativeGDK( "GetVehicleVelocity", "iFFF", vehicleid, [ "x", "y", "z" ] );
	return {X: out[0],Y: out[1],Z: out[2]};
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
	var out = CallNativeGDK( "SetVehicleVelocity", "ifff", vehicleid, X, Y, Z );
	return out;
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
	var out = CallNativeGDK( "SetVehicleAngularVelocity", "ifff", vehicleid, X, Y, Z );
	return out;
}
/**
 * GetVehicleDamageStatus
 * @see https://wiki.sa-mp.com/wiki/GetVehicleDamageStatus
 * @param {Number} vehicleid
 * @return {{ panels: Number,  doors: Number,  lights: Number,  tires: Number }}
 */
function GetVehicleDamageStatus( vehicleid ){
	var out = CallNativeGDK( "GetVehicleDamageStatus", "iIIII", vehicleid, [ "panels", "doors", "lights", "tires" ] );
	return {panels: out[0],doors: out[1],lights: out[2],tires: out[3]};
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
	var out = CallNativeGDK( "UpdateVehicleDamageStatus", "iiiii", vehicleid, panels, doors, lights, tires );
	return out;
}
/**
 * GetVehicleModelInfo
 * @see https://wiki.sa-mp.com/wiki/GetVehicleModelInfo
 * @param {Number} vehiclemodel
 * @param {Number} infotype
 * @return {{ x: Number,  y: Number,  z: Number }}
 */
function GetVehicleModelInfo( vehiclemodel, infotype ){
	var out = CallNativeGDK( "GetVehicleModelInfo", "iiFFF", vehiclemodel, infotype, [ "x", "y", "z" ] );
	return {X: out[0],Y: out[1],Z: out[2]};
}
/**
 * SetVehicleVirtualWorld
 * @see https://wiki.sa-mp.com/wiki/SetVehicleVirtualWorld
 * @param {Number} vehicleid
 * @param {Number} worldid
 * @return {Number} retval
 */
function SetVehicleVirtualWorld( vehicleid, worldid ){
	var out = CallNativeGDK( "SetVehicleVirtualWorld", "ii", vehicleid, worldid );
	return out;
}
/**
 * GetVehicleVirtualWorld
 * @see https://wiki.sa-mp.com/wiki/GetVehicleVirtualWorld
 * @param {Number} vehicleid
 * @return {Number} retval
 */
function GetVehicleVirtualWorld( vehicleid ){
	var out = CallNativeGDK( "GetVehicleVirtualWorld", "i", vehicleid );
	return out;
}
