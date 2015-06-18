forward Invoke_a_sampdbinc();
public Invoke_a_sampdbinc(){
	new Str[256];
	new iVar;
	new Float:fVar;

	db_open( "" );
	db_close( DB:0 );
	db_query( DB:0, "" );
	db_free_result( DBResult:0 );
	db_num_rows( DBResult:0 );
	db_next_row( DBResult:0 );
	db_num_fields( DBResult:0 );
	db_field_name( DBResult:0, 0, "", 0 );
	db_get_field( DBResult:0, 0, "", 0 );
	db_get_field_assoc( DBResult:0, "", "", 0 );
	#pragma unused iVar, fVar, Str
}
