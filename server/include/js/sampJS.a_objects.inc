forward Invoke_a_objectsinc();
public Invoke_a_objectsinc(){
	new Str[256];
	new iVar;
	new Float:fVar;

	CreateObject( 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 );
	AttachObjectToVehicle( 0, 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 );
	AttachObjectToObject( 0, 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0 );
	AttachObjectToPlayer( 0, 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 );
	SetObjectPos( 0, 0.0, 0.0, 0.0 );
	GetObjectPos( 0, fVar, fVar, fVar );
	SetObjectRot( 0, 0.0, 0.0, 0.0 );
	GetObjectRot( 0, fVar, fVar, fVar );
	GetObjectModel( 0 );
	SetObjectNoCameraCol( 0 );
	IsValidObject( 0 );
	DestroyObject( 0 );
	MoveObject( 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 );
	StopObject( 0 );
	IsObjectMoving( 0 );
	EditObject( 0, 0 );
	EditPlayerObject( 0, 0 );
	SelectObject( 0 );
	CancelEdit( 0 );
	CreatePlayerObject( 0, 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 );
	AttachPlayerObjectToVehicle( 0, 0, 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 );
	SetPlayerObjectPos( 0, 0, 0.0, 0.0, 0.0 );
	GetPlayerObjectPos( 0, 0, fVar, fVar, fVar );
	SetPlayerObjectRot( 0, 0, 0.0, 0.0, 0.0 );
	GetPlayerObjectRot( 0, 0, fVar, fVar, fVar );
	GetPlayerObjectModel( 0, 0 );
	SetPlayerObjectNoCameraCol( 0, 0 );
	IsValidPlayerObject( 0, 0 );
	DestroyPlayerObject( 0, 0 );
	MovePlayerObject( 0, 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 );
	StopPlayerObject( 0, 0 );
	IsPlayerObjectMoving( 0, 0 );
	AttachPlayerObjectToPlayer( 0, 0, 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 );
	SetObjectMaterial( 0, 0, 0, "", "", 0 );
	SetPlayerObjectMaterial( 0, 0, 0, 0, "", "", 0 );
	SetObjectMaterialText( 0, "", 0, 0, "", 0, 0, 0, 0, 0 );
	SetPlayerObjectMaterialText( 0, 0, "", 0, 0, "", 0, 0, 0, 0, 0 );
	SetObjectsDefaultCameraCol( 0 );
	#pragma unused iVar, fVar, Str
}
