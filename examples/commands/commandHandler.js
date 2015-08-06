class CmdMap extends Map
{
	add(key, value)
	{
		if(Array.isArray(key))
		{
			for(let i = 0, len = key.length; i < len; i++) {
				this.set(key[i], value);
			}
			return this;
		}
		this.set(key, value);
		return this;
	}
}
let cmds = exports = new CmdMap();

$server.on('PlayerCommandText', function(player, cmdtext)
{
	let 
		args = cmdtext.split(' '),
		cmd = args.shift().substr(1)
	;
	let data = {cmd: cmd, args: args, text: cmdtext.substr(cmd.length + 1).trim()};
	
	if(!$server.fire('PlayerCommandReceived', player, data)) {
		return true;
	}
	/*
	 * This command handler don't take the command return value into account to determine whether it was successful or not like zcmd,
	 * however this can be changed by replacing the two lines below with this: let success = cmds.has(cmd) && cmds.get(cmd)(player, data);
	 */
	let success = cmds.has(cmd);
	success && cmds.get(cmd)(player, data);
	
	if($server.ids.hasOwnProperty('PlayerCommandPerformed')) {
		return $server.fire('PlayerCommandPerformed', player, data, success);
	}
	return success;
});