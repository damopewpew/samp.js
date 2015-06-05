#ifndef __SJS_HELPERS__
#define __SJS_HELPERS__

#include <vector>
#include <string>
#include <regex>


namespace sjs {
	class string {
	public:
		static std::vector<std::string> split(std::string str){
			std::regex re("[\\s,]+");
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