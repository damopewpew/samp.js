/** samp.js by !damo!spiderman **/


#include "../include/js/sampJS.a_actor.inc"
#include "../include/js/sampJS.a_objects.inc"
#include "../include/js/sampJS.a_players.inc"
#include "../include/js/sampJS.a_samp.inc"
#include "../include/js/sampJS.a_vehicles.inc"

native sJS_OnGameModeInit();
public OnGameModeInit(){
	return sJS_OnGameModeInit();
}
native sJS_OnGameModeExit();
public OnGameModeExit(){
	return sJS_OnGameModeExit();
}
native sJS_OnFilterScriptInit();
public OnFilterScriptInit(){
	return sJS_OnFilterScriptInit();
}
native sJS_OnFilterScriptExit();
public OnFilterScriptExit(){
	return sJS_OnFilterScriptExit();
}
native sJS_OnPlayerConnect(playerid);
public OnPlayerConnect(playerid){
	return sJS_OnPlayerConnect(playerid);
}
native sJS_OnPlayerDisconnect(playerid, reason);
public OnPlayerDisconnect(playerid, reason){
	return sJS_OnPlayerDisconnect(playerid, reason);
}
native sJS_OnPlayerSpawn(playerid);
public OnPlayerSpawn(playerid){
	return sJS_OnPlayerSpawn(playerid);
}
native sJS_OnPlayerDeath(playerid, killerid, reason);
public OnPlayerDeath(playerid, killerid, reason){
	return sJS_OnPlayerDeath(playerid, killerid, reason);
}
native sJS_OnVehicleSpawn(vehicleid);
public OnVehicleSpawn(vehicleid){
	return sJS_OnVehicleSpawn(vehicleid);
}
native sJS_OnVehicleDeath(vehicleid, killerid);
public OnVehicleDeath(vehicleid, killerid){
	return sJS_OnVehicleDeath(vehicleid, killerid);
}
native sJS_OnPlayerText(playerid, text[]);
public OnPlayerText(playerid, text[]){
	return sJS_OnPlayerText(playerid, text);
}
native sJS_OnPlayerCommandText(playerid, cmdtext[]);
public OnPlayerCommandText(playerid, cmdtext[]){
	return sJS_OnPlayerCommandText(playerid, cmdtext);
}
native sJS_OnPlayerRequestClass(playerid, classid);
public OnPlayerRequestClass(playerid, classid){
	return sJS_OnPlayerRequestClass(playerid, classid);
}
native sJS_OnPlayerEnterVehicle(playerid, vehicleid, ispassenger);
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger){
	return sJS_OnPlayerEnterVehicle(playerid, vehicleid, ispassenger);
}
native sJS_OnPlayerExitVehicle(playerid, vehicleid);
public OnPlayerExitVehicle(playerid, vehicleid){
	return sJS_OnPlayerExitVehicle(playerid, vehicleid);
}
native sJS_OnPlayerStateChange(playerid, newstate, oldstate);
public OnPlayerStateChange(playerid, newstate, oldstate){
	return sJS_OnPlayerStateChange(playerid, newstate, oldstate);
}
native sJS_OnPlayerEnterCheckpoint(playerid);
public OnPlayerEnterCheckpoint(playerid){
	return sJS_OnPlayerEnterCheckpoint(playerid);
}
native sJS_OnPlayerLeaveCheckpoint(playerid);
public OnPlayerLeaveCheckpoint(playerid){
	return sJS_OnPlayerLeaveCheckpoint(playerid);
}
native sJS_OnPlayerEnterRaceCheckpoint(playerid);
public OnPlayerEnterRaceCheckpoint(playerid){
	return sJS_OnPlayerEnterRaceCheckpoint(playerid);
}
native sJS_OnPlayerLeaveRaceCheckpoint(playerid);
public OnPlayerLeaveRaceCheckpoint(playerid){
	return sJS_OnPlayerLeaveRaceCheckpoint(playerid);
}
native sJS_OnRconCommand(cmd[]);
public OnRconCommand(cmd[]){
	return sJS_OnRconCommand(cmd);
}
native sJS_OnPlayerRequestSpawn(playerid);
public OnPlayerRequestSpawn(playerid){
	return sJS_OnPlayerRequestSpawn(playerid);
}
native sJS_OnObjectMoved(objectid);
public OnObjectMoved(objectid){
	return sJS_OnObjectMoved(objectid);
}
native sJS_OnPlayerObjectMoved(playerid, objectid);
public OnPlayerObjectMoved(playerid, objectid){
	return sJS_OnPlayerObjectMoved(playerid, objectid);
}
native sJS_OnPlayerPickUpPickup(playerid, pickupid);
public OnPlayerPickUpPickup(playerid, pickupid){
	return sJS_OnPlayerPickUpPickup(playerid, pickupid);
}
native sJS_OnVehicleMod(playerid, vehicleid, componentid);
public OnVehicleMod(playerid, vehicleid, componentid){
	return sJS_OnVehicleMod(playerid, vehicleid, componentid);
}
native sJS_OnEnterExitModShop(playerid, enterexit, interiorid);
public OnEnterExitModShop(playerid, enterexit, interiorid){
	return sJS_OnEnterExitModShop(playerid, enterexit, interiorid);
}
native sJS_OnVehiclePaintjob(playerid, vehicleid, paintjobid);
public OnVehiclePaintjob(playerid, vehicleid, paintjobid){
	return sJS_OnVehiclePaintjob(playerid, vehicleid, paintjobid);
}
native sJS_OnVehicleRespray(playerid, vehicleid, color1, color2);
public OnVehicleRespray(playerid, vehicleid, color1, color2){
	return sJS_OnVehicleRespray(playerid, vehicleid, color1, color2);
}
native sJS_OnVehicleDamageStatusUpdate(vehicleid, playerid);
public OnVehicleDamageStatusUpdate(vehicleid, playerid){
	return sJS_OnVehicleDamageStatusUpdate(vehicleid, playerid);
}
native sJS_OnUnoccupiedVehicleUpdate(vehicleid, playerid, passenger_seat, Float:new_x, Float:new_y, Float:new_z, Float:vel_x, Float:vel_y, Float:vel_z);
public OnUnoccupiedVehicleUpdate(vehicleid, playerid, passenger_seat, Float:new_x, Float:new_y, Float:new_z, Float:vel_x, Float:vel_y, Float:vel_z){
	return sJS_OnUnoccupiedVehicleUpdate(vehicleid, playerid, passenger_seat, new_x, new_y, new_z, vel_x, vel_y, vel_z);
}
native sJS_OnPlayerSelectedMenuRow(playerid, row);
public OnPlayerSelectedMenuRow(playerid, row){
	return sJS_OnPlayerSelectedMenuRow(playerid, row);
}
native sJS_OnPlayerExitedMenu(playerid);
public OnPlayerExitedMenu(playerid){
	return sJS_OnPlayerExitedMenu(playerid);
}
native sJS_OnPlayerInteriorChange(playerid, newinteriorid, oldinteriorid);
public OnPlayerInteriorChange(playerid, newinteriorid, oldinteriorid){
	return sJS_OnPlayerInteriorChange(playerid, newinteriorid, oldinteriorid);
}
native sJS_OnPlayerKeyStateChange(playerid, newkeys, oldkeys);
public OnPlayerKeyStateChange(playerid, newkeys, oldkeys){
	return sJS_OnPlayerKeyStateChange(playerid, newkeys, oldkeys);
}
native sJS_OnRconLoginAttempt(ip[], password[], success);
public OnRconLoginAttempt(ip[], password[], success){
	return sJS_OnRconLoginAttempt(ip, password, success);
}
native sJS_OnPlayerUpdate(playerid);
public OnPlayerUpdate(playerid){
	return sJS_OnPlayerUpdate(playerid);
}
native sJS_OnPlayerStreamIn(playerid, forplayerid);
public OnPlayerStreamIn(playerid, forplayerid){
	return sJS_OnPlayerStreamIn(playerid, forplayerid);
}
native sJS_OnPlayerStreamOut(playerid, forplayerid);
public OnPlayerStreamOut(playerid, forplayerid){
	return sJS_OnPlayerStreamOut(playerid, forplayerid);
}
native sJS_OnVehicleStreamIn(vehicleid, forplayerid);
public OnVehicleStreamIn(vehicleid, forplayerid){
	return sJS_OnVehicleStreamIn(vehicleid, forplayerid);
}
native sJS_OnVehicleStreamOut(vehicleid, forplayerid);
public OnVehicleStreamOut(vehicleid, forplayerid){
	return sJS_OnVehicleStreamOut(vehicleid, forplayerid);
}
native sJS_OnActorStreamIn(actorid, forplayerid);
public OnActorStreamIn(actorid, forplayerid){
	return sJS_OnActorStreamIn(actorid, forplayerid);
}
native sJS_OnActorStreamOut(actorid, forplayerid);
public OnActorStreamOut(actorid, forplayerid){
	return sJS_OnActorStreamOut(actorid, forplayerid);
}
native sJS_OnDialogResponse(playerid, dialogid, response, listitem, inputtext[]);
public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[]){
	return sJS_OnDialogResponse(playerid, dialogid, response, listitem, inputtext);
}
native sJS_OnPlayerTakeDamage(playerid, issuerid, Float:amount, weaponid, bodypart);
public OnPlayerTakeDamage(playerid, issuerid, Float:amount, weaponid, bodypart){
	return sJS_OnPlayerTakeDamage(playerid, issuerid, amount, weaponid, bodypart);
}
native sJS_OnPlayerGiveDamage(playerid, damagedid, Float:amount, weaponid, bodypart);
public OnPlayerGiveDamage(playerid, damagedid, Float:amount, weaponid, bodypart){
	return sJS_OnPlayerGiveDamage(playerid, damagedid, amount, weaponid, bodypart);
}
native sJS_OnPlayerGiveDamageActor(playerid, damaged_actorid, Float:amount, weaponid, bodypart);
public OnPlayerGiveDamageActor(playerid, damaged_actorid, Float:amount, weaponid, bodypart){
	return sJS_OnPlayerGiveDamageActor(playerid, damaged_actorid, amount, weaponid, bodypart);
}
native sJS_OnPlayerClickMap(playerid, Float:fX, Float:fY, Float:fZ);
public OnPlayerClickMap(playerid, Float:fX, Float:fY, Float:fZ){
	return sJS_OnPlayerClickMap(playerid, fX, fY, fZ);
}
native sJS_OnPlayerClickTextDraw(playerid, Text:clickedid);
public OnPlayerClickTextDraw(playerid, Text:clickedid){
	return sJS_OnPlayerClickTextDraw(playerid, clickedid);
}
native sJS_OnPlayerClickPlayerTextDraw(playerid, PlayerText:playertextid);
public OnPlayerClickPlayerTextDraw(playerid, PlayerText:playertextid){
	return sJS_OnPlayerClickPlayerTextDraw(playerid, playertextid);
}
native sJS_OnIncomingConnection(playerid, ip_address[], port);
public OnIncomingConnection(playerid, ip_address[], port){
	return sJS_OnIncomingConnection(playerid, ip_address, port);
}
native sJS_OnTrailerUpdate(playerid, vehicleid);
public OnTrailerUpdate(playerid, vehicleid){
	return sJS_OnTrailerUpdate(playerid, vehicleid);
}
native sJS_OnVehicleSirenStateChange(playerid, vehicleid, newstate);
public OnVehicleSirenStateChange(playerid, vehicleid, newstate){
	return sJS_OnVehicleSirenStateChange(playerid, vehicleid, newstate);
}
native sJS_OnPlayerClickPlayer(playerid, clickedplayerid, source);
public OnPlayerClickPlayer(playerid, clickedplayerid, source){
	return sJS_OnPlayerClickPlayer(playerid, clickedplayerid, source);
}
native sJS_OnPlayerSelectObject(playerid, type, objectid, modelid, Float:fX, Float:fY, Float:fZ);
public OnPlayerSelectObject(playerid, type, objectid, modelid, Float:fX, Float:fY, Float:fZ){
	return sJS_OnPlayerSelectObject(playerid, type, objectid, modelid, fX, fY, fZ);
}
native sJS_OnPlayerWeaponShot(playerid, weaponid, hittype, hitid, Float:fX, Float:fY, Float:fZ);
public OnPlayerWeaponShot(playerid, weaponid, hittype, hitid, Float:fX, Float:fY, Float:fZ){
	return sJS_OnPlayerWeaponShot(playerid, weaponid, hittype, hitid, fX, fY, fZ);
}
