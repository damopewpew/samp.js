/**
 * db_open
 * @see https://wiki.sa-mp.com/wiki/db_open
 * @param {String} name
 * @return {Number} retval
 */
function db_open(name) {
	return CallNativeGDK("db_open", "s", name);
}

/**
 * db_close
 * @see https://wiki.sa-mp.com/wiki/db_close
 * @param {Number} db
 * @return {Number} retval
 */
function db_close(db) {
	return CallNativeGDK("db_close", "i", db);
}

/**
 * db_query
 * @see https://wiki.sa-mp.com/wiki/db_query
 * @param {Number} db
 * @param {String} query
 * @return {Number} retval
 */
function db_query(db, query) {
	return CallNativeGDK("db_query", "is", db, query);
}

/**
 * db_free_result
 * @see https://wiki.sa-mp.com/wiki/db_free_result
 * @param {Number} dbresult
 * @return {Number} retval
 */
function db_free_result(dbresult) {
	return CallNativeGDK("db_free_result", "i", dbresult);
}

/**
 * db_num_rows
 * @see https://wiki.sa-mp.com/wiki/db_num_rows
 * @param {Number} dbresult
 * @return {Number} retval
 */
function db_num_rows(dbresult) {
	return CallNativeGDK("db_num_rows", "i", dbresult);
}

/**
 * db_next_row
 * @see https://wiki.sa-mp.com/wiki/db_next_row
 * @param {Number} dbresult
 * @return {Number} retval
 */
function db_next_row(dbresult) {
	return CallNativeGDK("db_next_row", "i", dbresult);
}

/**
 * db_num_fields
 * @see https://wiki.sa-mp.com/wiki/db_num_fields
 * @param {Number} dbresult
 * @return {Number} retval
 */
function db_num_fields(dbresult) {
	return CallNativeGDK("db_num_fields", "i", dbresult);
}

/**
 * db_field_name
 * @see https://wiki.sa-mp.com/wiki/db_field_name
 * @param {Number} dbresult
 * @param {Number} field
 * @param {Number} [maxlength=256]
 * @return {String} result
 */
function db_field_name(dbresult, field, maxlength)
{
	maxlength = typeof maxlength === 'undefined' ? 256 : maxlength;
	return CallNativeGDK("db_field_name", "iiSi", dbresult, field, maxlength);
}

/**
 * db_get_field
 * @see https://wiki.sa-mp.com/wiki/db_get_field
 * @param {Number} dbresult
 * @param {Number} field
 * @param {Number} [maxlength=256]
 * @return {String} result
 */
function db_get_field(dbresult, field, maxlength)
{
	maxlength = typeof maxlength === 'undefined' ? 256 : maxlength;
	return CallNativeGDK("db_get_field", "iiSi", dbresult, field, maxlength);
}

/**
 * db_get_field_int
 * @see https://wiki.sa-mp.com/wiki/db_get_field_int
 * @param {Number} result
 * @param {Number} [field=0]
 * @return {Number} retval
 */
function db_get_field_int(result, field)
{
	field = typeof field === 'undefined' ? 0 : field;
	return CallNativeGDK("db_get_field_int", "ii", result, field);
}

/**
 * db_get_field_float
 * @see https://wiki.sa-mp.com/wiki/db_get_field_float
 * @param {Number} result
 * @param {Number} [field=0]
 * @return {Number} retval
 */
function db_get_field_float(result, field)
{
	field = typeof field === 'undefined' ? 0 : field;
	return CallNativeGDK("db_get_field_float", "ii", result, field);
}

/**
 * db_get_field_assoc
 * @see https://wiki.sa-mp.com/wiki/db_get_field_assoc
 * @param {Number} dbresult
 * @param {String} field
 * @param {Number} [maxlength=256]
 * @return {String} result
 */
function db_get_field_assoc(dbresult, field, maxlength)
{
	maxlength = typeof maxlength === 'undefined' ? 256 : maxlength;
	return CallNativeGDK("db_get_field_assoc", "isSi", dbresult, field, maxlength);
}

/**
 * db_get_field_assoc_int
 * @see https://wiki.sa-mp.com/wiki/db_get_field_assoc_int
 * @param {Number} result
 * @param {String} field
 * @return {Number} retval
 */
function db_get_field_assoc_int(result, field) {
	return CallNativeGDK("db_get_field_assoc_int", "is", result, field);
}

/**
 * db_get_field_assoc_float
 * @see https://wiki.sa-mp.com/wiki/db_get_field_assoc_float
 * @param {Number} result
 * @param {String} field
 * @return {Number} retval
 */
function db_get_field_assoc_float(result, field) {
	return CallNativeGDK("db_get_field_assoc_float", "is", result, field);
}

/**
 * db_get_mem_handle
 * @see https://wiki.sa-mp.com/wiki/db_get_mem_handle
 * @param {Number} db
 * @return {Number} retval
 */
function db_get_mem_handle(db) {
	return CallNativeGDK("db_get_mem_handle", "i", db);
}

/**
 * db_get_result_mem_handle
 * @see https://wiki.sa-mp.com/wiki/db_get_result_mem_handle
 * @param {Number} result
 * @return {Number} retval
 */
function db_get_result_mem_handle(result) {
	return CallNativeGDK("db_get_result_mem_handle", "i", result);
}

/**
 * db_debug_openfiles
 * @see https://wiki.sa-mp.com/wiki/db_debug_openfiles
 * @return {Number} retval
 */
function db_debug_openfiles() {
	return CallNativeGDK("db_debug_openfiles");
}

/**
 * db_debug_openresults
 * @see https://wiki.sa-mp.com/wiki/db_debug_openresults
 * @return {Number} retval
 */
function db_debug_openresults() {
	return CallNativeGDK("db_debug_openresults");
}
