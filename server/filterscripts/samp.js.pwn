#include <a_samp>
#include "../include/sql.inc"
#include "../include/sampJS.inc"


main(){}
forward SAMPJS_Init();
public SAMPJS_Init(){}

forward Invoke_sqlinc();
public Invoke_sqlinc(){
	new Str[256];
	new iVar;
	new Float:fVar;

	sql_debug( 0, 0 );
	sql_connect( 0, "", "", "", "", 0 );
	sql_disconnect( SQL:0 );
	sql_wait( SQL:0 );
	sql_set_charset( SQL:0, "" );
	sql_get_charset( SQL:0, Str, 0 );
	sql_ping( SQL:0 );
	sql_get_stat( SQL:0, Str, 0 );
	sql_escape_string( SQL:0, "", Str, 0 );
	sql_query( SQL:0, "", 0, "", "" );
	sql_store_result( Result:0 );
	sql_free_result( Result:0 );
	sql_affected_rows( Result:0 );
	sql_insert_id( Result:0 );
	sql_error( Result:0 );
	sql_error_string( Result:0, Str, 0 );
	sql_num_rows( Result:0 );
	sql_num_fields( Result:0 );
	sql_next_result( Result:0, 0 );
	sql_field_name( Result:0, 0, Str, 0 );
	sql_fetch_row( Result:0, "", Str, 0 );
	sql_next_row( Result:0, 0 );
	sql_get_field( Result:0, 0, Str, 0 );
	sql_get_field_assoc( Result:0, "", Str, 0 );
	sql_get_field_int( Result:0, 0 );
	sql_get_field_assoc_int( Result:0, "" );
	sql_get_field_float( Result:0, 0 );
	sql_get_field_assoc_float( Result:0, "" );
	sql_get_field_ex( Result:0, 0, 0, Str, 0 );
	sql_get_field_assoc_ex( Result:0, 0, "", Str, 0 );
	sql_get_field_int_ex( Result:0, 0, 0 );
	sql_get_field_assoc_int_ex( Result:0, 0, "" );
	sql_get_field_float_ex( Result:0, 0, 0 );
	sql_get_field_assoc_float_ex( Result:0, 0, "" );
	#pragma unused iVar, fVar, Str
}