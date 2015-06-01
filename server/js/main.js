include("js/include/a_samp.inc.js");
include("js/include/a_players.inc.js");
include("js/include/a_vehicles.inc.js");
include("js/include/a_objects.inc.js");
include("js/mysql/sql.inc.js");
include("js/libs/crypto/md5.js");
include("js/libs/crypto/sha3.js");
include("js/libs/crypto/sha2.js");

var vehicles = require('vehicles');


function benchmark(func,times){
	var start = new Date().getTime();
	for(var i = 0; i < times; i++){
		func();	
	}
	var end = new Date().getTime();
	
	return end-start;
}

$events.on("FilterScriptInit", function () {
	
});

$events.on("GameModeInit", function () {
	
});

$events.on("PlayerCommandText", function (player, cmd) {
	//player.pos = { x: 400, y:1000, z:20, a:360 };
	print(player.pos);
	
	var args = cmd.split(' ');

	switch (args[0]) {
	case '/veh':
		{
			var time = benchmark(function(){
				for(var player of $players){
					print("Player: "+player);
				}
				if (args[1]) {
					var vehid = 0;
					if(args[1] >= 400 && args[1] <= 611)vehid = args[1];
					else {

						var newargs = args;
						newargs.shift();
						var search =newargs.join(' ');
						//print("Searching: "+search);
						var vehlist = vehicles.GetVehicleByName(search);
						if(vehlist.length < 1){
							SendClientMessage(player.id, -1, "Cannot find any vehicles by that name/id");
							return 1;	
						} else if(vehlist.length > 1){
							var vnames = [];
							for(var i in vehlist){
								vnames.push(vehlist[i].name+"("+vehlist[i].id+")");
							}
							var msg = "Found multiple vehicles by that name: "+vnames.join(', ');

							if(msg.length >=144){
								//var msgs = [];
								while(msg.length > 144){
									//msgs.push(msg.substr(0,144));
									var newmsg = msg.substr(0,144);
									var idx = newmsg.lastIndexOf(",");
									if(idx > -1){
										msg = newmsg.substr(idx)+msg;
										newmsg = newmsg.substr(0,idx);
									}
									SendClientMessage(player.id, -1,newmsg);
								}
							}
							SendClientMessage(player.id, -1, msg );
							return 1;
						} else {
							vehid = vehlist[0].id;	
						}
					}
					if(vehid > 0){
						var vname = vehicles.GetVehicleName(vehid);

						var pos = player.pos;
						CreateVehicle(vehid, pos.x+2, pos.y + 2, pos.z+1, 0, 0, 0, 0, 0);
						SendClientMessage(player.id, -1, "Spawning you a " + vname);

					} else {
						SendClientMessage(player.id, -1, "Invalid vehicle id");	
					}
				} else {
					SendClientMessage(player.id, -1, "Error: /veh [typeid/name]");	
				}
			},1);
			
			print("Func Time: "+time);
			return 1;
			break;
		}
	case '/all':
		{
			var pos = player.pos;
			for (var i in vehicleNames) {
				print("Loading Vehicle: " + (i + 400));
				CreateVehicle((i * 1) + 400, pos.x + (i * 1), pos.y, pos.z + 1, 0, -1, -1, 0, 0);
			}
			return 1;
			break;
		}

	case '/kill':
		{
			SetPlayerHealth(player.id, 0.0);
			return 1;
			break;
		}

	case '/obj':
		{
			var pos = player.pos;
			var objid = CreateObject(args[1], pos.x, pos.y, pos.z, 0.0, 0.0, pos.a + 96.0, 300.0);
			SendClientMessage(player.id, 0xFFFF00FF, `Spawned Object ${args[1]} - ${objid}`);
			if (args[2] == 1) {
				AttachObjectToPlayer(objid, player.id, 1.5, 0.5, -1.0, 0.0, 1.5, 2);
			}
			return 1;
			break;
		}

	case '/help':
		{
			var pos = player.pos;
			SetPlayerPos(player.id, pos.x, pos.y, pos.z + 3);
			return 1;
			break;
		}

	case '/md5':
		{
			var hash = CryptoJS.MD5(args[1]);
			SendClientMessage(player.id, -1, "Hash: " + hash);
			return 1;
			break;
		}
	case '/eval':
		{
			var newargs = args;
			newargs.shift();
			var msg =newargs.join(' ');
			var ret = eval(msg);
			
			SendClientMessage(player.id, -1, "Result: "+ret);
			return 1;
			break;
		}
	}
	
	return 0;

});


$events.on("PlayerConnect", function(player){

});

$events.on("IncomingConnection", function (player, ip_address, port) {
	print("Player Connection: " + player.id + " (" + ip_address + ":" + port + ")");
	
	print("Player Connected: "+player);

});

$events.on("PlayerTakeDamage", function (player, issuerid, amount, weaponid, bodypart) {
	//var health = CallNative("GetPlayerHealth","iF", playerid);
	//print("On Player Take Damage - "+playerid);
	//print("Amount of Damage "+amount);
	//print("Health: "+health);
});

$events.on("PlayerKeyStateChange", function (player, newkeys, oldkeys) {

});

$events.on("PlayerEnterVehicle", function(player, vehicleid){

	for(var i = 0; i < 194; i++){
		AddVehicleComponent(vehicleid, 1000+i);	
	}
});


$events.on("PlayerSpawn", function (player) {
	print("Player Spawned");
	var name = player.name;
	SendClientMessage(player.id, -1, `Welcome to {7DF0B3}samp.js {EE94EA}${name}`);
});