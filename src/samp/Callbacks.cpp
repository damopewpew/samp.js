#include "samp/Callbacks.h"
#include "utils/Helpers.h"
#include "samp/Events.h"

#include "SAMPJS.h"

#include <sdk.h>

using namespace v8;
using namespace sampjs;

cell AMX_NATIVE_CALL Callbacks::ExecuteJS(AMX *amx, cell* params){
	cell* addr = NULL;
	int len = 0;
	amx_GetAddr(amx, params[1], &addr);
	amx_StrLen(addr, &len);
	char* val = new char[len + 2];
	amx_GetString(val, addr, 0, len + 2);

	for (auto& script : SAMPJS::GetScripts()){
		script.second->ExecuteCode("[PAWN]", val);
	}
	return 1;
}

