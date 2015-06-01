
#include "sdk.h"

class SAMP_Callbacks {
public:
	static cell AMX_NATIVE_CALL OnGameModeInit(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnGameModeExit(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnFilterScriptInit(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnFilterScriptExit(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerConnect(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerDisconnect(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerSpawn(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerDeath(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnVehicleSpawn(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnVehicleDeath(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerText(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerCommandText(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerRequestClass(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerEnterVehicle(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerExitVehicle(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerStateChange(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerEnterCheckpoint(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerLeaveCheckpoint(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerEnterRaceCheckpoint(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerLeaveRaceCheckpoint(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnRconCommand(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerRequestSpawn(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnObjectMoved(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerObjectMoved(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerPickUpPickup(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnVehicleMod(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnEnterExitModShop(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnVehiclePaintjob(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnVehicleRespray(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnVehicleDamageStatusUpdate(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnUnoccupiedVehicleUpdate(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerSelectedMenuRow(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerExitedMenu(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerInteriorChange(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerKeyStateChange(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnRconLoginAttempt(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerUpdate(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerStreamIn(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerStreamOut(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnVehicleStreamIn(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnVehicleStreamOut(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnActorStreamIn(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnActorStreamOut(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnDialogResponse(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerTakeDamage(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerGiveDamage(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerGiveDamageActor(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerClickMap(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerClickTextDraw(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerClickPlayerTextDraw(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnIncomingConnection(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnTrailerUpdate(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnVehicleSirenStateChange(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerClickPlayer(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerSelectObject(AMX* amx, cell* params);
	static cell AMX_NATIVE_CALL OnPlayerWeaponShot(AMX* amx, cell* params);

};
