#include "samp/Callbacks.h"
#include "utils/Helpers.h"
#include "samp/Events.h"

#include "SAMPJS.h"

#include <sdk.h>

using namespace v8;
using namespace sampjs;

cell AMX_NATIVE_CALL Callbacks::OnGameModeInit(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("GameModeInit", "", {}, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnGameModeExit(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("GameModeExit", "", {}, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnFilterScriptInit(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("FilterScriptInit", "", {}, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnFilterScriptExit(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("FilterScriptExit", "", {}, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerConnect(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerConnect", "i", { "playerid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerDisconnect(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerDisconnect", "ii", { "playerid", "reason" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerSpawn(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerSpawn", "i", { "playerid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerDeath(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerDeath", "iii", { "playerid", "killerid", "reason" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnVehicleSpawn(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("VehicleSpawn", "i", { "vehicleid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnVehicleDeath(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("VehicleDeath", "ii", { "vehicleid", "killerid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerText(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerText", "is", { "playerid", "text" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerCommandText(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (script.second->Server()->FireNative("PlayerCommandText", "is", { "playerid", "cmdtext" }, params)){
			return 1;
		}
	}
	return 0;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerRequestClass(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerRequestClass", "ii", { "playerid", "classid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerEnterVehicle(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerEnterVehicle", "iii", { "playerid", "vehicleid", "ispassenger" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerExitVehicle(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerExitVehicle", "ii", { "playerid", "vehicleid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerStateChange(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerStateChange", "iii", { "playerid", "newstate", "oldstate" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerEnterCheckpoint(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerEnterCheckpoint", "i", { "playerid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerLeaveCheckpoint(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerLeaveCheckpoint", "i", { "playerid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerEnterRaceCheckpoint(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerEnterRaceCheckpoint", "i", { "playerid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerLeaveRaceCheckpoint(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerLeaveRaceCheckpoint", "i", { "playerid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnRconCommand(AMX* amx, cell* params){
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
	delete[] val;
	if (args[0] == "loadjs"){
		if (args.size() > 1){
			SAMPJS::CreateScript(args[1]);
		}
		return 1;
	}
	else if (args[0] == "unloadjs"){
		if (args.size() > 1){
			SAMPJS::RemoveScript(args[1]);
		}
		return 1;
	}
	else if (args[0] == "reloadjs"){
		if (args.size() > 1){
			SAMPJS::RemoveScript(args[1]);
			SAMPJS::CreateScript(args[1]);
		}
		return 1;
	}

	for (auto& script : SAMPJS::GetScripts()){
		if (script.second->Server()->FireNative("RconCommand", "s", { "cmd" }, params)){
			return 1;
		}
	} 
	return 0;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerRequestSpawn(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerRequestSpawn", "i", { "playerid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnObjectMoved(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("ObjectMoved", "i", { "objectid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerObjectMoved(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerObjectMoved", "ii", { "playerid", "objectid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerPickUpPickup(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerPickUpPickup", "ii", { "playerid", "pickupid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnVehicleMod(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("VehicleMod", "iii", { "playerid", "vehicleid", "componentid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnEnterExitModShop(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("EnterExitModShop", "iii", { "playerid", "enterexit", "interiorid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnVehiclePaintjob(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("VehiclePaintjob", "iii", { "playerid", "vehicleid", "paintjobid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnVehicleRespray(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("VehicleRespray", "iiii", { "playerid", "vehicleid", "color1", "color2" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnVehicleDamageStatusUpdate(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("VehicleDamageStatusUpdate", "ii", { "vehicleid", "playerid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnUnoccupiedVehicleUpdate(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("UnoccupiedVehicleUpdate", "iiiffffff", { "vehicleid", "playerid", "passenger_seat", "new_x", "new_y", "new_z", "vel_x", "vel_y", "vel_z" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerSelectedMenuRow(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerSelectedMenuRow", "ii", { "playerid", "row" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerExitedMenu(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerExitedMenu", "i", { "playerid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerInteriorChange(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerInteriorChange", "iii", { "playerid", "newinteriorid", "oldinteriorid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerKeyStateChange(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerKeyStateChange", "iii", { "playerid", "newkeys", "oldkeys" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnRconLoginAttempt(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("RconLoginAttempt", "ssi", { "ip", "password", "success" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerUpdate(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerUpdate", "i", { "playerid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerStreamIn(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerStreamIn", "ii", { "playerid", "forplayerid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerStreamOut(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerStreamOut", "ii", { "playerid", "forplayerid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnVehicleStreamIn(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("VehicleStreamIn", "ii", { "vehicleid", "forplayerid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnVehicleStreamOut(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("VehicleStreamOut", "ii", { "vehicleid", "forplayerid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnActorStreamIn(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("ActorStreamIn", "ii", { "actorid", "forplayerid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnActorStreamOut(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("ActorStreamOut", "ii", { "actorid", "forplayerid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnDialogResponse(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("DialogResponse", "iiiis", { "playerid", "dialogid", "response", "listitem", "inputtext" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerTakeDamage(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerTakeDamage", "iifii", { "playerid", "issuerid", "amount", "weaponid", "bodypart" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerGiveDamage(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerGiveDamage", "iifii", { "playerid", "damagedid", "amount", "weaponid", "bodypart" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerGiveDamageActor(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerGiveDamageActor", "iifii", { "playerid", "damaged_actorid", "amount", "weaponid", "bodypart" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerClickMap(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerClickMap", "ifff", { "playerid", "fX", "fY", "fZ" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerClickTextDraw(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerClickTextDraw", "ii", { "playerid", "clickedid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerClickPlayerTextDraw(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerClickPlayerTextDraw", "ii", { "playerid", "playertextid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnIncomingConnection(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("IncomingConnection", "isi", { "playerid", "ip_address", "port" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnTrailerUpdate(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("TrailerUpdate", "ii", { "playerid", "vehicleid" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnVehicleSirenStateChange(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("VehicleSirenStateChange", "iii", { "playerid", "vehicleid", "newstate" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerClickPlayer(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerClickPlayer", "iii", { "playerid", "clickedplayerid", "source" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerSelectObject(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerSelectObject", "iiiifff", { "playerid", "type", "objectid", "modelid", "fX", "fY", "fZ" }, params)){
			return 0;
		}
	}
	return 1;
}
cell AMX_NATIVE_CALL Callbacks::OnPlayerWeaponShot(AMX* amx, cell* params){
	for (auto& script : SAMPJS::GetScripts()){
		if (!script.second->Server()->FireNative("PlayerWeaponShot", "iiiifff", { "playerid", "weaponid", "hittype", "hitid", "fX", "fY", "fZ" }, params)){
			return 0;
		}
	}
	return 1;
}
