/*
 * Grand Larceny for samp.js by !damo!spiderman 2015
 * based of Grand Larceny by the SA-MP Team
 */

include("a_samp.inc.js");
include("a_players.inc.js");
include("a_vehicles.inc.js");
include("a_objects.inc.js");
include("a_actor.inc.js");



const CITY_LOS_SANTOS = 0;
const CITY_SAN_FIERRO = 1;
const CITY_LAS_VENTURAS = 2;

var spawns = {};

var td = {};



function randInt(min,max){
	return Math.floor(Math.random() * (max - min )) + min;
}

$server.on('ScriptInit', function(){
	print("\n---------------------------------------");
	print("Running Grand Larceny for samp.js\n");
	print("---------------------------------------\n");
});

$server.on('ScriptExit', function(){
	for(let player of $players){
		player.hideTextDraw(player.td.test);
		TextDrawDestroy(player.td.test);
	}
});

$server.on('PlayerConnect', function(player){
	player.gameText("~w~Grand Larceny", 3000, 4);
	player.message("Welcome to {88AA88}G{FFFFFF}rand {88AA88}L{FFFFFF}arceny");
	
	player.citySelection = -1;
	player.citySelected = 0;
	player.lastCityTick = new Date().getTime();
	
});

$server.on('PlayerSpawn', function(player){
	if(player.isNPC()) return 1;
	
	let randSpawn = 0;
	
	player.interior = 0;
	player.toggleClock(0);
	player.resetMoney();
	player.money = 30000;
	
	
	switch(player.citySelection){
		case CITY_LOS_SANTOS:
			randSpawn = randInt(0,spawns.lossantos.length);	
			player.pos = spawns.lossantos[randSpawn];
		break;
			
		case CITY_SAN_FIERRO:
			randSpawn = randInt(0,spawns.sanfierro.length);	
			player.pos = spawns.sanfierro[randSpawn];
		break;
		
		case CITY_LAS_VENTURAS:
			randSpawn = randInt(0,spawns.lasventuras.length);	
			player.pos = spawns.lasventuras[randSpawn]; 
		break;
	}
	
	player.giveWeapon(WEAPON_COLT45, 100);
	
	return 1;
});


$server.on('PlayerDeath', function(player, killer, reason ){
	player.citySelected = 0;
	
	if(!killer.isValid()){
		player.resetMoney();	
	} else {
		if(player.money > 0){
			killer.giveMoney(player._money); // Use cached value
			player.resetMoney();
		}
	}
	
	return 1;
});


function ClassSel_SetupCharSelection(player){
	if(player.citySelection == CITY_LOS_SANTOS){
		player.interior = 11;
		player.pos = [ 508.7362,-87.4335,998.9609, 0.0 ];
		player.cameraPos = [ 508.7362,-83.4335,998.9609 ];
		player.cameraLookAt = [ 508.7362,-87.4335,998.9609 ];
		
	} else if(player.citySelection == CITY_SAN_FIERRO){
		player.interior = 3;
		player.pos = [ -2673.8381,1399.7424,918.3516, 181.0 ];
		player.cameraPos = [ -2673.2776,1394.3859,918.3516 ];
		player.cameraLookAt = [ -2673.8381,1399.7424,918.3516 ];
		
	} else if(player.citySelection == CITY_LAS_VENTURAS){
		player.interior = 3;
		player.pos = [ 349.0453,193.2271,1014.1797, 286.25 ];
		player.cameraPos = [ 352.9164,194.5702,1014.1875 ];
		player.cameraLookAt = [ 349.0453,193.2271,1014.1797 ];
		
	}
}

function ClassSel_InitCityNameText(txtid){
 	TextDrawUseBox(txtid, 0);
	TextDrawLetterSize(txtid,1.25,3.0);
	TextDrawFont(txtid, 0);
	TextDrawSetShadow(txtid,0);
    TextDrawSetOutline(txtid,1);
    TextDrawColor(txtid,0xEEEEEEFF);
    TextDrawBackgroundColor(txtid,0x000000FF);
}


function ClassSel_InitTextDraws(){
	td.lossantos = TextDrawCreate(10.0, 380.0, "Los Santos");
	ClassSel_InitCityNameText(td.lossantos);
	td.sanfierro = TextDrawCreate(10.0, 380.0, "San Fierro");
	ClassSel_InitCityNameText(td.sanfierro);
	td.lasventuras = TextDrawCreate(10.0, 380.0, "Las Venturas");
	ClassSel_InitCityNameText(td.lasventuras);
	
	 // Init our observer helper text display
	td.classSelHelper = TextDrawCreate(10.0, 415.0,
	   " Press ~b~~k~~GO_LEFT~ ~w~or ~b~~k~~GO_RIGHT~ ~w~to switch cities.~n~ Press ~r~~k~~PED_FIREWEAPON~ ~w~to select.");
	
	TextDrawUseBox(td.classSelHelper, 1);
	TextDrawBoxColor(td.classSelHelper,0x222222BB);
	TextDrawLetterSize(td.classSelHelper,0.3,1.0);
	TextDrawTextSize(td.classSelHelper,400.0,40.0);
	TextDrawFont(td.classSelHelper, 2);
	TextDrawSetShadow(td.classSelHelper,0);
    TextDrawSetOutline(td.classSelHelper,1);
    TextDrawBackgroundColor(td.classSelHelper,0x000000FF);
    TextDrawColor(td.classSelHelper,0xFFFFFFFF);
}

function ClassSel_SetupSelectedCity(player){
	
	if(player.citySelection == -1){
		player.citySelection = CITY_LOS_SANTOS;	
	}
	
	if(player.citySelection == CITY_LOS_SANTOS){
		
		player.interior = 0;
		//player.cameraPos = [ 1630.6136,-2286.0298,110.0 ];
		//player.cameraLookAt = [ 1887.6034,-1682.1442,47.6167 ];
		
		var camPos = player.cameraPos;
		var camLook = player.cameraLookAt;
		InterpolateCameraPos(player.id,camPos.x,camPos.y,camPos.z, 1630.6136,-2286.0298,110.0, 10000, 1 );
		InterpolateCameraLookAt( player.id, camLook.x, camLook.y, camLook.z, 1887.6034,-1682.1442,47.6167, 1000, 1 );
		
		player.showTextDraw(td.lossantos);
		player.hideTextDraw(td.sanfierro);
		player.hideTextDraw(td.lasventuras);
		
		
	} else if(player.citySelection == CITY_SAN_FIERRO){
		player.interior = 0;
	//	player.cameraPos = [ -1300.8754,68.0546,129.4823 ];
	//	player.cameraLookAt = [ -1817.9412,769.3878,132.6589 ];
		
		var camPos = player.cameraPos;
		var camLook = player.cameraLookAt;
		InterpolateCameraPos(player.id,camPos.x,camPos.y,camPos.z, -1300.8754,68.0546,129.4823, 10000, 1 );
		InterpolateCameraLookAt( player.id, camLook.x, camLook.y, camLook.z, -1817.9412,769.3878,132.6589, 1000, 1 );
		
		player.showTextDraw(td.sanfierro);
		player.hideTextDraw(td.lossantos);
		player.hideTextDraw(td.lasventuras);
		
	} else if(player.citySelection == CITY_LAS_VENTURAS){
		player.interior = 0;
		//player.cameraPos = [ 1310.6155,1675.9182,110.7390];
		//player.cameraLookAt = [ 2285.2944,1919.3756,68.2275 ];
		var camPos = player.cameraPos;
		var camLook = player.cameraLookAt;
		InterpolateCameraPos(player.id,camPos.x,camPos.y,camPos.z, 1310.6155,1675.9182,110.7390, 10000, 1 );
		InterpolateCameraLookAt( player.id, camLook.x, camLook.y, camLook.z, 2285.2944,1919.3756,68.2275, 1000, 1 );
		
		player.showTextDraw(td.lasventuras);
		player.hideTextDraw(td.lossantos);
		player.hideTextDraw(td.sanfierro);
	}
	
	
}

function ClassSel_SwitchToNextCity(player){
	player.citySelection++;
	if(player.citySelection > CITY_LAS_VENTURAS){
		player.citySelection = CITY_LOS_SANTOS;	
	}
	
	player.playSound(1052,0.0,0.0,0.0);
	player.lastCityTick = new Date().getTime();
	ClassSel_SetupSelectedCity(player);
}

function ClassSel_SwitchToPreviousCity(player){
	player.citySelection--;
	if(player.citySelection < CITY_LOS_SANTOS){
		player.citySelection = CITY_LAS_VENTURAS;	
	}
	
	player.playSound(1053, 0.0,0.0,0.0);
	player.lastCityTick = new Date().getTime();
	ClassSel_SetupSelectedCity(player);
}

function ClassSel_HandleCitySelection(player){
	let keys = player.keys;
	let ak = player.arrowKeys;
	
	if(player.citySelection == -1){
		ClassSel_SwitchToNextCity(player);
		return;
	}
	
	if( (new Date().getTime() - player.lastCityTick) < 500 ) return;
	
	if(keys & KEY_FIRE){
		player.citySelected = 1;
		player.hideTextDraw(td.classSelHelper);
		player.hideTextDraw(td.lossantos);
		player.hideTextDraw(td.sanfierro);
		player.hideTextDraw(td.lasventuras);
		player.toggleSpectate = false;
		return;
	}
	
	if(ak.leftright > 0){
		ClassSel_SwitchToNextCity(player);	
	} else if( ak.leftright < 0 ){
		ClassSel_SwitchToPreviousCity(player);	
	}
	
}


function LoadSpawns(){
	let dir = $fs.readdir("js/grandlarc/spawns");
	for(let f of dir){
		$fs.readFile("js/grandlarc/spawns/"+f,function(file){

			let name = f.substring(0,f.length-4);
			let lines = file.toString().split('\r\n');
			spawns[name] = [];
			for(let line of lines){
				let pos = line.split(',');
				spawns[name].push({ x: pos[0], y: pos[1], z: pos[2], a: pos[3] });
			}
			
	
		});
	}
}


// We do this syncronously because AddStaticVehicle needs to be called in GameModeInit
function ReadVehicleFile(filename){
	let numveh = 0;
	let data = $fs.readFile(filename);
	
	let lines = data.toString().split('\r\n');
	for(let line of lines){
		let parts = line.split(',');
		parts[parts.length-1] = parts[parts.length-1].split(';')[0];
		parts.push(30*60);
		AddStaticVehicleEx.apply(null, parts);
		numveh++;
	}
	return numveh++;
}

function LoadVehicles(resume){
	let totalVeh = 0;
	let dir = $fs.readdir("js/grandlarc/vehicles");
	
	let files = [];
	for(let f of dir){
		totalVeh += ReadVehicleFile("js/grandlarc/vehicles/"+f);
	}
	
	print("Total vehicles from files: "+totalVeh);
}

$server.on("PlayerRequestClass", function(player, classid){
	if(player.isNPC()) return 1;
	
	if(player.citySelected){
		ClassSel_SetupCharSelection(player);
		return 1;
	} else {
		if(player.state != PLAYER_STATE_SPECTATING){
			player.toggleSpectate = true;
			player.showTextDraw(td.classSelHelper);
			player.citySelection = -1;
		}
	}
	return 0;
});

$server.on("GameModeInit", function(){
	$server.gamemode = "Grand Larceny - JS";
	$server.markers = PLAYER_MARKERS_MODE_GLOBAL;
	$server.nameTags = true;
	$server.nameTagDrawDistance = 40.0;
	$server.stuntBonus = 0;
	$server.weather = 2;
	$server.time = 11;
	
	LoadSpawns();
	LoadVehicles();
		
	DisableInteriorEnterExits();
	
	ClassSel_InitTextDraws();
	
	let classes = [ 
		[298, 305], 
		[280, 289], 
		[265, 270], 
		[ 1, 6 ],
		8,42,65,86, 119, 149, 208, 273, 289,
		[ 47, 58 ],
		[ 68, 73 ],
		[ 75, 85 ],
		[ 87, 89 ],
		91,92,93,95,96,97,98,99
	];
	for(let cl of classes){
		if(Array.isArray(cl)){
			for(let i = cl[0]; i <= cl[1]; i++){
				AddPlayerClass(i,1759.0189,-1898.1260,13.5622,266.4503,-1,-1,-1,-1,-1,-1);	
			}
		}
		else {
			AddPlayerClass(cl,1759.0189,-1898.1260,13.5622,266.4503,-1,-1,-1,-1,-1,-1);
		}
	}
	
	
});

$server.on("PlayerUpdate", function(player){
	if(player.isNPC()) return 1;
	
	if(!player.citySelected && player.state == PLAYER_STATE_SPECTATING){
		ClassSel_HandleCitySelection(player);	
		return 1;
	}
	return 1;
	
	
});