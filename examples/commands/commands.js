include('a_samp.inc.js');
include('a_players.inc.js');

var cmds = require('js/commandHandler.js');

/*
 * Object 'data'
 * @returns {{cmd: String, args: Array, text: String}}
 */
$server.on('PlayerCommandReceived', function(player, data)
{
	if(['foo', 'rape'].indexOf(data.cmd) > -1) {
		return !player.message(`/${data.cmd} has been disabled until further notice.`);
	}
	return true;
});

$server.on('PlayerCommandPerformed', function(player, data, success)
{
	if(!success) {
		player.message(0xFF0000AA, `Unknown command /${data.cmd}, check out /foo`);
	}
	//returning false will trigger "SERVER: Unknown command."
	return true;
});

cmds.set('akill', function(player, data)
{
	let
		target = $players.getPlayer(data.args[0]),
		reason = data.args.splice(1).join(' ')
	;
	if(!data.text || isNaN(data.args[0])) {
		return player.message("Usage: /akill [target] (reason=i can)");
	}
	if(!target.isValid) {
		return player.message(`Player ID ${data.args[0]} is not connected to the server.`);
	}
	reason = reason.trim() || "i can";
	
	target.health = 0.0;
	$server.message(`Server administrator ${player.name} killed ${target.name} because ${reason}`);
});

cmds.set('slap', function(player, data)
{
	let
		target = $players.getPlayer(data.args[0]),
		height = +data.args[1] || 10.0
	;
	if(!data.text || isNaN(data.args[0])) {
		return player.message("Usage: /slap [target] (height=10.0)");
	}
	if(!target.isValid) {
		return player.message(`Player ID ${data.args[0]} is not connected to the server.`);
	}
	let pos = target.pos;
	pos.z += height;
	
	target.pos = pos;
	$server.message(`${target.name}: HOW CAN SHE SLAP!?`);
});

cmds.set('rape', function(player, data) {
	let target = $players.getPlayer(data.args[0]);
	
	if(!data.text) {
		return player.message("Usage: /rape [target]");
	}
	if(!target.isValid) {
		return player.message(`Player ID ${data.args[0]} is not connected to the server.`);
	}
	if(!player.inRange(4.0, target.pos)) {
		return player.message(`${target.name} is not close enough to be raped.`);
	}
	if(target.rapeTimer > -1) {
		return player.message(`${target.name} has already been raped, please show some mercy!`);
	}
	player.rapeTimer = SetTimer(function(victim)
	{
		if(victim.health <= 3.0)
		{
			$server.message(`${victim.name} has died from an STI`);
			CancelTimer(player.rapeTimer); //kill on disconnect & death
			
			victim.rapeTimer = -1; //reset on death
			victim.health = 0.0;
		}
		else victim.health -= 2.0;
	}.bind(this, target), 3e3, -1);
	
	player.score++;
	player.message(`You have raped ${target.name}`);
});

cmds.set('announce', function(player, data)
{
	if(!data.text) {
		return player.message(`Usage: /${data.cmd} [msg]`);
	}
	$server.message(`Announcement: ${data.text}`);
});
cmds.set('anno', cmds.get('announce'));

cmds.set('foo', function(player) {
	player.message("bar");
});