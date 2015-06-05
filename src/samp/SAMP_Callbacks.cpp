#include "samp/SAMP_Callbacks.h"
#include "utils/Helpers.h"
#include"SAMP_JS.h"
#include "samp/SAMP_Events.h"


using namespace v8;

cell AMX_NATIVE_CALL SAMP_Callbacks::OnGameModeInit(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("GameModeInit", "", {}, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnGameModeExit(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("GameModeExit", "", {}, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnFilterScriptInit(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("FilterScriptInit", "", {}, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnFilterScriptExit(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("FilterScriptExit", "", {}, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerConnect(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerConnect", "i", { "playerid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerDisconnect(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerDisconnect", "ii", { "playerid", "reason" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerSpawn(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerSpawn", "i", { "playerid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerDeath(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerDeath", "iii", { "playerid", "killerid", "reason" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnVehicleSpawn(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("VehicleSpawn", "i", { "vehicleid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnVehicleDeath(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("VehicleDeath", "ii", { "vehicleid", "killerid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerText(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerText", "is", { "playerid", "text" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerCommandText(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (script.second->EventManager()->FireNative("PlayerCommandText", "is", { "playerid", "cmdtext" }, amx, params)){
			return 1;
		}
	}
	return 0;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerRequestClass(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerRequestClass", "ii", { "playerid", "classid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerEnterVehicle(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerEnterVehicle", "iii", { "playerid", "vehicleid", "ispassenger" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerExitVehicle(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerExitVehicle", "ii", { "playerid", "vehicleid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerStateChange(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerStateChange", "iii", { "playerid", "newstate", "oldstate" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerEnterCheckpoint(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerEnterCheckpoint", "i", { "playerid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerLeaveCheckpoint(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerLeaveCheckpoint", "i", { "playerid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerEnterRaceCheckpoint(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerEnterRaceCheckpoint", "i", { "playerid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerLeaveRaceCheckpoint(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerLeaveRaceCheckpoint", "i", { "playerid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnRconCommand(AMX* amx, cell* params){
	/**
	 * Parse our own rcon commands here first /loadjs /unloadjs /reloadjs
	 **/
	cell* addr = NULL;
	int len = 0;
	amx_GetAddr(amx, params[1], &addr);
	amx_StrLen(addr, &len);
	char* val = new char[len + 2];
	amx_GetString(val, addr, 0, len + 2);
	std::string cmd(val);
	std::vector<std::string> args = sjs::string::split(cmd);

	if (args[0] == "loadjs"){
		if (args.size() > 1){
			SAMP_JS::New(args[1], amx);
		}
		return 1;
	}
	else if (args[0] == "unloadjs"){
		if (args.size() > 1){
			SAMP_JS::Unload(args[1]);
		}
		return 1;
	}
	else if (args[0] == "reloadjs"){
		if (args.size() > 1){
			SAMP_JS::Reload(args[1], amx);
		}
		return 1;
	}

	for (auto& script : SAMP_JS::_scripts){
		if (script.second->EventManager()->FireNative("RconCommand", "s", { "cmd" }, amx, params)){
			return 1;
		}
	}
	return 0;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerRequestSpawn(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerRequestSpawn", "i", { "playerid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnObjectMoved(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("ObjectMoved", "i", { "objectid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerObjectMoved(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerObjectMoved", "ii", { "playerid", "objectid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerPickUpPickup(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerPickUpPickup", "ii", { "playerid", "pickupid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnVehicleMod(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("VehicleMod", "iii", { "playerid", "vehicleid", "componentid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnEnterExitModShop(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("EnterExitModShop", "iii", { "playerid", "enterexit", "interiorid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnVehiclePaintjob(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("VehiclePaintjob", "iii", { "playerid", "vehicleid", "paintjobid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnVehicleRespray(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("VehicleRespray", "iiii", { "playerid", "vehicleid", "color1", "color2" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnVehicleDamageStatusUpdate(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("VehicleDamageStatusUpdate", "ii", { "vehicleid", "playerid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnUnoccupiedVehicleUpdate(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("UnoccupiedVehicleUpdate", "iiiffffff", { "vehicleid", "playerid", "passenger_seat", "new_x", "new_y", "new_z", "vel_x", "vel_y", "vel_z" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerSelectedMenuRow(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerSelectedMenuRow", "ii", { "playerid", "row" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerExitedMenu(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerExitedMenu", "i", { "playerid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerInteriorChange(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerInteriorChange", "iii", { "playerid", "newinteriorid", "oldinteriorid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerKeyStateChange(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerKeyStateChange", "iii", { "playerid", "newkeys", "oldkeys" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnRconLoginAttempt(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("RconLoginAttempt", "ssi", { "ip", "password", "success" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerUpdate(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerUpdate", "i", { "playerid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerStreamIn(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerStreamIn", "ii", { "playerid", "forplayerid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerStreamOut(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerStreamOut", "ii", { "playerid", "forplayerid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnVehicleStreamIn(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("VehicleStreamIn", "ii", { "vehicleid", "forplayerid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnVehicleStreamOut(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("VehicleStreamOut", "ii", { "vehicleid", "forplayerid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnActorStreamIn(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("ActorStreamIn", "ii", { "actorid", "forplayerid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnActorStreamOut(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("ActorStreamOut", "ii", { "actorid", "forplayerid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnDialogResponse(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("DialogResponse", "iiiis", { "playerid", "dialogid", "response", "listitem", "inputtext" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerTakeDamage(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerTakeDamage", "iifii", { "playerid", "issuerid", "amount", "weaponid", "bodypart" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerGiveDamage(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerGiveDamage", "iifii", { "playerid", "damagedid", "amount", "weaponid", "bodypart" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerGiveDamageActor(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerGiveDamageActor", "iifii", { "playerid", "damaged_actorid", "amount", "weaponid", "bodypart" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerClickMap(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerClickMap", "ifff", { "playerid", "fX", "fY", "fZ" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerClickTextDraw(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerClickTextDraw", "ii", { "playerid", "clickedid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerClickPlayerTextDraw(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerClickPlayerTextDraw", "ii", { "playerid", "playertextid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnIncomingConnection(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("IncomingConnection", "isi", { "playerid", "ip_address", "port" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnTrailerUpdate(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("TrailerUpdate", "ii", { "playerid", "vehicleid" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnVehicleSirenStateChange(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("VehicleSirenStateChange", "iii", { "playerid", "vehicleid", "newstate" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerClickPlayer(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerClickPlayer", "iii", { "playerid", "clickedplayerid", "source" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerSelectObject(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerSelectObject", "iiiifff", { "playerid", "type", "objectid", "modelid", "fX", "fY", "fZ" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL SAMP_Callbacks::OnPlayerWeaponShot(AMX* amx, cell* params){
	for (auto& script : SAMP_JS::_scripts){
		if (!script.second->EventManager()->FireNative("PlayerWeaponShot", "iiiifff", { "playerid", "weaponid", "hittype", "hitid", "fX", "fY", "fZ" }, amx, params)){
			return 0;
		}
	}
	return 1;
}
