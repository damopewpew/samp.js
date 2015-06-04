## samp.js - JavaScript plugin for SA-MP

samp.js is a plugin which allows you to write scripts and gamemodes for [San Andreas Multiplayer](http://sa-mp.com/) in JavaScript.

##### Server Setup

Add samp.js.(dll/so) to your plugins folder. Add samp.js.(dll/so) to the plugins line in your server.cfg. You will also need to add a samp.js.amx filterscript file or gamemode. See FilterScripts/GameModes section

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
filterscripts **samp.js**
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
plugins **samp.js.dll**
**jsfiles main.js commands.js admin.js**
</pre>
