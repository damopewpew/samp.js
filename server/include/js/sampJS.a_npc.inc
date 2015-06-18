forward Invoke_a_npcinc();
public Invoke_a_npcinc(){
	new Str[256];
	new iVar;
	new Float:fVar;

	format( Str, 0, "" );
	KillTimer( 0 );
	GetTickCount(  );
	asin( 0.0 );
	acos( 0.0 );
	atan( 0.0 );
	atan2( 0.0, 0.0 );
	SendChat( "" );
	SendCommand( "" );
	GetPlayerState( 0 );
	GetPlayerPos( 0, fVar, fVar, fVar );
	GetPlayerVehicleID( 0 );
	GetPlayerArmedWeapon( 0 );
	GetPlayerHealth( 0 );
	GetPlayerArmour( 0 );
	GetPlayerSpecialAction( 0 );
	IsPlayerStreamedIn( 0 );
	IsVehicleStreamedIn( 0 );
	GetPlayerKeys( 0, iVar, iVar, iVar );
	GetPlayerFacingAngle( 0, fVar );
	GetMyPos( fVar, fVar, fVar );
	SetMyPos( 0.0, 0.0, 0.0 );
	GetMyFacingAngle( fVar );
	SetMyFacingAngle( 0.0 );
	GetDistanceFromMeToPoint( 0.0, 0.0, 0.0, fVar );
	IsPlayerInRangeOfPoint( 0, 0.0, 0.0, 0.0, 0.0 );
	GetPlayerName( 0, Str, 0 );
	IsPlayerConnected( 0 );
	StartRecordingPlayback( 0, "" );
	StopRecordingPlayback(  );
	PauseRecordingPlayback(  );
	ResumeRecordingPlayback(  );
	#pragma unused iVar, fVar, Str
}
