#include "sdk.h"

namespace sampjs {
	class Callbacks {
	public:
		static cell AMX_NATIVE_CALL ExecuteJS(AMX* amx, cell* params);
	};

};
