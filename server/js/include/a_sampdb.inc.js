/**
 * db_open

{@link https://wiki.sa-mp.com/wiki/db_open}

 * @param {String} name
 * @return {Number} retval

*/
function db_open( name ){
	return CallNative( "db_open", "s", name );
}
/**
 * db_close

{@link https://wiki.sa-mp.com/wiki/db_close}

 * @param {Number} db
 * @return {Number} retval

*/
function db_close( db ){
	return CallNative( "db_close", "i", db );
}
/**
 * db_query

{@link https://wiki.sa-mp.com/wiki/db_query}

 * @param {Number} db
 * @param {String} query
 * @return {Number} retval

*/
function db_query( db, query ){
	return CallNative( "db_query", "is", db, query );
}
/**
 * db_free_result

{@link https://wiki.sa-mp.com/wiki/db_free_result}

 * @param {Number} dbresult
 * @return {Number} retval

*/
function db_free_result( dbresult ){
	return CallNative( "db_free_result", "i", dbresult );
}
/**
 * db_num_rows

{@link https://wiki.sa-mp.com/wiki/db_num_rows}

 * @param {Number} dbresult
 * @return {Number} retval

*/
function db_num_rows( dbresult ){
	return CallNative( "db_num_rows", "i", dbresult );
}
/**
 * db_next_row

{@link https://wiki.sa-mp.com/wiki/db_next_row}

 * @param {Number} dbresult
 * @return {Number} retval

*/
function db_next_row( dbresult ){
	return CallNative( "db_next_row", "i", dbresult );
}
/**
 * db_num_fields

{@link https://wiki.sa-mp.com/wiki/db_num_fields}

 * @param {Number} dbresult
 * @return {Number} retval

*/
function db_num_fields( dbresult ){
	return CallNative( "db_num_fields", "i", dbresult );
}
/**
 * db_field_name

{@link https://wiki.sa-mp.com/wiki/db_field_name}

 * @param {Number} dbresult
 * @param {Number} field
 * @param {String} result
 * @param {Number} maxlength
 * @return {Number} retval

*/
function db_field_name( dbresult, field, result, maxlength ){
	return CallNative( "db_field_name", "iisi", dbresult, field, result, maxlength );
}
/**
 * db_get_field

{@link https://wiki.sa-mp.com/wiki/db_get_field}

 * @param {Number} dbresult
 * @param {Number} field
 * @param {String} result
 * @param {Number} maxlength
 * @return {Number} retval

*/
function db_get_field( dbresult, field, result, maxlength ){
	return CallNative( "db_get_field", "iisi", dbresult, field, result, maxlength );
}
/**
 * db_get_field_assoc

{@link https://wiki.sa-mp.com/wiki/db_get_field_assoc}

 * @param {Number} dbresult
 * @param {String} field
 * @param {String} result
 * @param {Number} maxlength
 * @return {Number} retval

*/
function db_get_field_assoc( dbresult, field, result, maxlength ){
	return CallNative( "db_get_field_assoc", "issi", dbresult, field, result, maxlength );
}
