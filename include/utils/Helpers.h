#ifndef __SJS_HELPERS__
#define __SJS_HELPERS__

#include <vector>
#include <string>
#include <regex>

#include <stdio.h>
#include <stdarg.h>


typedef void(*logprintf_t)(char* format, ...);

namespace sjs {
	
	class logger{
	public:
		static bool DEBUG;
		static logprintf_t printf;
		static inline void log(const char* format, ...){
			va_list args;
			va_start(args, format);

	
			char buffer[4048];
			vsnprintf(buffer, 4048, format, args);
			logger::printf((char*)std::string("[samp.js] " + std::string(buffer)).c_str());
			va_end(args);
		}

		static inline void debug(const char* format, ...){
			if (DEBUG){
				va_list args;
				va_start(args, format);

				char buffer[4048];
				vsnprintf(buffer, 4048, format, args);
				logger::printf((char*)std::string("[DEBUG][samp.js] " + std::string(buffer)).c_str());
				va_end(args);
			}
		}

		static inline void error(const char* format, ...){
			
			va_list args;
			va_start(args, format);
			char buffer[4048];
			vsnprintf(buffer, 4048, format, args);
			
			logger::printf((char*)std::string("[ERROR][samp.js] " + std::string(buffer)).c_str());
			va_end(args);
		}
	};
	class string {
	public:
		static inline std::vector<std::string> split(std::string str){
			/*std::regex re("[\\s,]+");
			std::sregex_token_iterator it(str.begin(), str.end(), re, -1);
			std::sregex_token_iterator reg_end;
			std::vector<std::string> arr;
			for (; it != reg_end; ++it) {
				arr.push_back(it->str());
			}
			return arr; */

			return split(str, " ");
		}

		static inline std::vector<std::string> split(std::string str, std::string delimeter){
			std::regex re("["+delimeter+",]+");
			std::sregex_token_iterator it(str.begin(), str.end(), re, -1);
			std::sregex_token_iterator reg_end;
			std::vector<std::string> arr;
			for (; it != reg_end; ++it) {
				arr.push_back(it->str());
			}
			return arr;
		}
	};

	
};

#endif