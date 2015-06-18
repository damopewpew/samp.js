/**
 * Remake of new.pwn in samp.js/JavaScript 
 **/

include("js/include/a_samp.inc.js");
include("js/include/a_players.inc.js");
include("js/include/a_vehicles.inc.js");
include("js/include/a_objects.inc.js");


$server.on("FilterScriptInit",function()
{
	print("\n--------------------------------------");
	print(" Blank Filterscript by your name here");
	print("--------------------------------------\n");
	return 1;
});

$server.on("FilterScriptExit",function()
{
	return 1;
});

$server.on("ScriptInit",function()
{
	print("\n----------------------------------");
	print(" Blank Gamemode by your name here");
	print("----------------------------------\n");
});


$server.on("GameModeInit",function()
{
	// Don't use these lines if it's a filterscript
	SetGameModeText("Blank Script");
	AddPlayerClass(0, 1958.3783, 1343.1572, 15.3746, 269.1425, 0, 0, 0, 0, 0, 0);
	return 1;
});

$server.on("GameModeExit",function()
{
	return 1;
});

$server.on("PlayerRequestClass",function(player, classid)
{
	player.pos = [1958.3783, 1343.1572, 15.3746];
	SetPlayerCameraPos(player.id, 1958.3783, 1343.1572, 15.3746);
	SetPlayerCameraLookAt(player, 1958.3783, 1343.1572, 15.3746);
	return 1;
});

$server.on("PlayerConnect",function(player)
{
	return 1;
});

$server.on("PlayerDisconnect",function(player, reason)
{
	return 1;
});

$server.on("PlayerSpawn",function(player)
{
	return 1;
});

$server.on("PlayerDeath",function(player, killer, reason)
{
	return 1;
});

$server.on("VehicleSpawn",function(vehicleid)
{
	return 1;
});

$server.on("VehicleDeath",function(vehicleid, killer)
{
	return 1;
});

$server.on("PlayerText",function(player, text)
{
	return 1;
});

$server.on("PlayerCommandText",function(player, cmdtext)
{
	var args = cmdtext.split(' ');
	var cmd = args.shift();
	
	if (cmd == "/mycommand")
	{
		// Do something here
		return 1;
	}
	return 0;
});

$server.on("PlayerEnterVehicle",function(player, vehicleid, ispassenger)
{
	return 1;
});

$server.on("PlayerExitVehicle",function(player, vehicleid)
{
	return 1;
});

$server.on("PlayerStateChange",function(player, newstate, oldstate)
{
	return 1;
});

$server.on("PlayerEnterCheckpoint",function(player)
{
	return 1;
});

$server.on("PlayerLeaveCheckpoint",function(player)
{
	return 1;
});

$server.on("PlayerEnterRaceCheckpoint",function(player)
{
	return 1;
});

$server.on("PlayerLeaveRaceCheckpoint",function(player)
{
	return 1;
});

$server.on("RconCommand",function(cmd)
{
	return 1;
});

$server.on("PlayerRequestSpawn",function(player)
{
	return 1;
});

$server.on("ObjectMoved",function(objectid)
{
	return 1;
});

$server.on("PlayerObjectMoved",function(player, objectid)
{
	return 1;
});

$server.on("PlayerPickUpPickup",function(player, pickupid)
{
	return 1;
});

$server.on("VehicleMod",function(player, vehicleid, componentid)
{
	return 1;
});

$server.on("VehiclePaintjob",function(player, vehicleid, paintjobid)
{
	return 1;
});

$server.on("VehicleRespray",function(player, vehicleid, color1, color2)
{
	return 1;
});

$server.on("PlayerSelectedMenuRow",function(player, row)
{
	return 1;
});

$server.on("PlayerExitedMenu",function(player)
{
	return 1;
});

$server.on("PlayerInteriorChange",function(player, newinteriorid, oldinteriorid)
{
	return 1;
});

$server.on("PlayerKeyStateChange",function(player, newkeys, oldkeys)
{
	return 1;
});

$server.on("RconLoginAttempt",function(ip, password, success)
{
	return 1;
});

$server.on("PlayerUpdate",function(player)
{
	return 1;
});

$server.on("PlayerStreamIn",function(player, forplayer)
{
	return 1;
});

$server.on("PlayerStreamOut",function(player, forplayer)
{
	return 1;
});

$server.on("VehicleStreamIn",function(vehicleid, forplayer)
{
	return 1;
});

$server.on("VehicleStreamOut",function(vehicleid, forplayer)
{
	return 1;
});

$server.on("DialogResponse",function(player, dialogid, response, listitem, inputtext)
{
	return 1;
});

$server.on("PlayerClickPlayer",function(player, clickedplayer, source)
{
	return 1;
});
