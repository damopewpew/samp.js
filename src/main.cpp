#ifdef WIN32
#pragma comment(lib, "winmm.lib")
#endif

#define NOMINMAX

#include "sdk.h"
#include "Server.h"
#include "samp/Callbacks.h"



#include <fstream>
#include <sstream>
#include <regex>
#include <iostream>
#include <string> 
#include <map>

#include "utils/Helpers.h"

#define VERSION_MAJOR 0
#define VERSION_MINOR 1
#define VERSION_BUGFIX 6

typedef void(*logprintf_t)(char* format, ...);
logprintf_t logprintf;

extern void *pAMXFunctions;

std::vector<std::string> js_scripts;


void ReadConfig(){
	std::ifstream config("server.cfg");
	if (!config){
		std::cout << "Config File does not exist" << std::endl;
	}
	else {
		std::string line;
		while (std::getline(config, line)){
			std::vector<std::string> args = sjs::string::split(line);
			if (args.size() > 1){
				if (args[0] == "jsfiles"){
					for (unsigned int i = 1; i < args.size(); i++){
						js_scripts.push_back(args[i]);
					}
				}
			}
		}
	}
}


PLUGIN_EXPORT unsigned int PLUGIN_CALL Supports(){
	return SUPPORTS_VERSION | SUPPORTS_AMX_NATIVES | SUPPORTS_PROCESS_TICK;
}

PLUGIN_EXPORT bool PLUGIN_CALL Load(void **ppData){
	pAMXFunctions = ppData[PLUGIN_DATA_AMX_EXPORTS];
	sjs::logger::printf = (logprintf_t)ppData[PLUGIN_DATA_LOGPRINTF];
	sjs::logger::log("%s samp.js %s", std::string(30, '-').c_str(),std::string(30, '-').c_str());
	sjs::logger::log("*** Loaded samp.js v%i.%i.%i by !damo!spiderman ***", VERSION_MAJOR, VERSION_MINOR, VERSION_BUGFIX);
	sjs::logger::log("%s", std::string(69, '-').c_str());

	ReadConfig();

	
	return true;
}

PLUGIN_EXPORT void PLUGIN_CALL Unload(){
	std::cout << std::endl;
	std::cout << std::string(30, '-') + " samp.js unloaded " + std::string(30, '-') << std::endl;
	std::cout << std::endl;


}
#include "samp/Natives.h"

PLUGIN_EXPORT int PLUGIN_CALL AmxLoad(AMX *amx){
	int res = 0;
	if (res = amx_Register(amx, PluginNatives, -1)){
		printf("Failed to register samp.js natives.\n");
	}

	int idx;
	if (!amx_FindPublic(amx, "SAMPJS_Init", &idx)){
		if (js_scripts.size() > 0){
			for (unsigned int i = 0; i < js_scripts.size(); i++){
				sampjs::Server::New(js_scripts[i], amx);
			}
			std::cout << std::endl;
		}
		else {
			std::cout << "[samp.js] No JS Scripts configured. Add jsfiles to your server.cfg" << std::endl;
		}
	}
	return 1;
}


PLUGIN_EXPORT int PLUGIN_CALL AmxUnload(AMX *amx){
	for (auto it = sampjs::Server::_scripts.begin(); it != sampjs::Server::_scripts.end();){
		if (it->second.GetAMX() == amx){
			it->second.Shutdown();
			sampjs::Server::_scripts.erase(it++);
		}
		else {
			++it;
		}
	}
	return AMX_ERR_NONE;
}

PLUGIN_EXPORT void PLUGIN_CALL ProcessTick(){

	for (auto it = sampjs::Server::_scripts.begin(); it != sampjs::Server::_scripts.end(); ++it){
		it->second.ProcessTick();
	
	}
}



