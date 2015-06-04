## samp.js - JavaScript plugin for SA-MP

samp.js is a plugin which allows you to write scripts and gamemodes for [San Andreas Multiplayer](http://sa-mp.com/) in JavaScript.

##### Server Setup

Add samp.js.(dll/so) to your plugins folder. Add samp.js.(dll/so) to the plugins line in your server.cfg. You will also need to add a samp.js.amx filterscript file or gamemode. See <a href="#gamemodesfilterscripts">FilterScripts/GameModes</a> section

Create a new line in server.cfg and add jsfiles yourscript.js

Each script on the jsfiles line will be loaded by samp.js and be each given their own context, scripts in different contexts cannot access each others variables. 

###### Example server.cfg
<pre>
echo Executing Server Config...
lanmode 0
rcon_password changeme
maxplayers 50
port 7777
hostname samp.js server
gamemode0 blank 1
filterscripts <b>samp.js</b>
query 1
chatlogging 0
weburl www.sa-mp.com
onfoot_rate 40
incar_rate 40
weapon_rate 40
stream_distance 300.0
stream_rate 1000
maxnpc 0
logtimeformat [%H:%M:%S]
language English
plugins <b>samp.js.dll</b>
<b>jsfiles main.js commands.js admin.js</b>
</pre>

###### <a name="gamemodesfilterscripts"></a>GameModes/FilterScripts

With samp.js you should only have one samp.js filterscript or gamemode, not both. We recommend you use a filterscript otherwise OnRconCommand may not work. 

For samp.js to load any scripts a gamemode/filterscript should include sampJS.inc. This registers callbacks to samp.js and also includes other files which registers SAMP functions with samp.js.

The only other requirement for the script is a public function called public SAMPJS_Init(){}, which is empty. samp.js checks if this fucntion exists in the AMX then loads any scripts you have added to the server.cfg

Here is an example of a simple filterscript

```
#include <a_samp>
#include "../include/sampJS.inc"

main(){}
forward SAMPJS_Init();
public SAMPJS_Init(){}
```

##### Native Functions

All of SAMPs native functions have been converted to JavaScript. To use these functions you will need to include the appropriate "a_{name}.inc.js" file, as you would in pawn.

Any object with pass by references now return that value or an object with multiple values. For instance GetPlayerPos:

```
var pos = GetPlayerPos(playerid);
// pos is now an object with the attributes x,y,z
```

##### Events

samp.js registers all SAMPs' events. For example OnGameModeInit. However samp.js uses it's own event system.

Use the following code to register an event in your JavaScript.

```
/***
 *	$events is samp.js native event object. 
 *	All SAMP events have On removed from them
 *	function(){} is a callback which carries the same arguments as normal SAMP callbacks with the exception of playerid
***/
$events.on("GameModeInit",function(){

});

$events.on("PlayerConnect", function(player/playerid){
	
});
```

You can register as many of these events as many times as you want in any script.

Returning 0 will stop event propagation for that event ( except for in the case of OnPlayerCommandText and OnRconCommand ).


###### The Player Object

Any event which would normally pass a playerid now passes in a player object instead. This player object can either be used as an object or can be used in the old playerid fashion.

The player object has a bunch of handy attributes and functions which makes it easy to do lots of things.

For instance instead of the old SetPlayerName(playerid, "newname"); and GetPlayerName(playerid) you can now do player.name = "newname"; and print(player.name);

Documentation for all the available functions can be found in the docs page.








