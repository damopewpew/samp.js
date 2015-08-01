const HTTP_GET = 1;
const HTTP_POST = 2;
const HTTP_HEAD = 3;
const HTTP_ERROR_BAD_HOST = 1;
const HTTP_ERROR_NO_SOCKET = 2;
const HTTP_ERROR_CANT_CONNECT = 3;
const HTTP_ERROR_CANT_WRITE = 4;
const HTTP_ERROR_CONTENT_TOO_BIG = 5;
const HTTP_ERROR_MALFORMED_RESPONSE = 6;

/**
 * HTTP
 * @see https://wiki.sa-mp.com/wiki/HTTP
 * @param {Number} index
 * @param {Number} type
 * @param {String} url
 * @param {String} data
 * @param {String} callback
 * @return {Number} retval
 */
function HTTP(index, type, url, data, callback) {
	return CallNativeGDK("HTTP", "iisss", index, type, url, data, callback);
}
