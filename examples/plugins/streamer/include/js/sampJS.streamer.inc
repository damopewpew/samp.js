#include <streamer>

#if !defined ExecuteJS
native ExecuteJS(code[]);
#endif

public OnDynamicObjectMoved(STREAMER_TAG_OBJECT objectid){
	new code[255];
	format( code, sizeof(code), "$server.fire(\"DynamicObjectMoved\", %i);", objectid );
	ExecuteJS(code);
}

public OnPlayerEditDynamicObject(playerid, STREAMER_TAG_OBJECT objectid, response, Float:x, Float:y, Float:z, Float:rx, Float:ry, Float:rz){
	new code[1024];
	format(code, sizeof(code), "$server.fire(\"PlayerEditDynamicObject\", $players[%i], %i, %i, %f, %f, %f, %f, %f, %f);", playerid, objectid, response, x,y,z,rx,ry,rz);
	ExecuteJS(code);
}


public OnPlayerSelectDynamicObject(playerid, STREAMER_TAG_OBJECT objectid, modelid, Float:x, Float:y, Float:z){
	new code[1024];
	format(code, sizeof(code), "$server.fire(\"PlayerSelectDynamicObject\", $players[%i], %i, %i, %f, %f, %f );", playerid, objectid, modelid, x,y,z);
	ExecuteJS(code);
}

public OnPlayerShootDynamicObject(playerid, weaponid, STREAMER_TAG_OBJECT objectid, Float:x, Float:y, Float:z){
	new code[1024];
	format(code, sizeof(code), "$server.fire(\"PlayerShootDynamicObject\", $players[%i], %i, %i, %f, %f, %f );", playerid, weaponid, objectid, x,y,z);
	ExecuteJS(code);
}

public OnPlayerPickUpDynamicPickup(playerid, STREAMER_TAG_PICKUP pickupid){
	new code[1024];
	format(code, sizeof(code), "$server.fire(\"PlayerPickUpDynamicPickup\", $players[%i], %i );", playerid, pickupid );
	ExecuteJS(code);
}

public OnPlayerEnterDynamicCP(playerid, STREAMER_TAG_CP checkpointid){
	new code[1024];
	format(code, sizeof(code), "$server.fire(\"PlayerEnterDynamicCP\", $players[%i], %i );", playerid, checkpointid );
	ExecuteJS(code);
}

public OnPlayerLeaveDynamicCP(playerid, STREAMER_TAG_CP checkpointid){
	new code[1024];
	format(code, sizeof(code), "$server.fire(\"PlayerLeaveDynamicCP\", $players[%i], %i );", playerid, checkpointid );
	ExecuteJS(code);
}


public OnPlayerEnterDynamicRaceCP(playerid, STREAMER_TAG_RACE_CP checkpointid){
	new code[1024];
	format(code, sizeof(code), "$server.fire(\"PlayerEnterDynamicRaceCP\", $players[%i], %i );", playerid, checkpointid );
	ExecuteJS(code);
}

public OnPlayerLeaveDynamicRaceCP(playerid, STREAMER_TAG_RACE_CP checkpointid){
	new code[1024];
	format(code, sizeof(code), "$server.fire(\"PlayerLeaveDynamicRaceCP\", $players[%i], %i );", playerid, checkpointid );
	ExecuteJS(code);
}

public OnPlayerEnterDynamicArea(playerid, STREAMER_TAG_AREA areaid){
	new code[1024];
	format(code, sizeof(code), "$server.fire(\"PlayerEnterDynamicArea(\", $players[%i], %i );", playerid, areaid );
	ExecuteJS(code);
}

public OnPlayerLeaveDynamicArea(playerid, STREAMER_TAG_AREA areaid){
	new code[1024];
	format(code, sizeof(code), "$server.fire(\"PlayerLeaveDynamicArea\", $players[%i], %i );", playerid, areaid );
	ExecuteJS(code);
}

public Streamer_OnPluginError(error[]){
	new code[1024];
	format(code, sizeof(code), "$server.fire(\"PluginError\", \"%s\" );", error );
	ExecuteJS(code);
}


forward Invoke_streamerinc();
public Invoke_streamerinc(){
	new Str[256];
	new iVar;
	new Float:fVar;

	Streamer_GetTickRate(  );
	Streamer_SetTickRate( 0 );
	Streamer_GetMaxItems( 0 );
	Streamer_SetMaxItems( 0, 0 );
	Streamer_GetVisibleItems( 0, 0 );
	Streamer_SetVisibleItems( 0, 0, 0 );
	Streamer_GetRadiusMultiplier( 0, fVar, 0 );
	Streamer_SetRadiusMultiplier( 0, 0.0, 0 );
	Streamer_GetCellDistance( fVar );
	Streamer_SetCellDistance( 0.0 );
	Streamer_GetCellSize( fVar );
	Streamer_SetCellSize( 0.0 );
	Streamer_ToggleErrorCallback( 0 );
	Streamer_IsToggleErrorCallback(  );
	Streamer_ProcessActiveItems(  );
	Streamer_ToggleIdleUpdate( 0, 0 );
	Streamer_IsToggleIdleUpdate( 0 );
	Streamer_ToggleCameraUpdate( 0, 0 );
	Streamer_IsToggleCameraUpdate( 0 );
	Streamer_ToggleItemUpdate( 0, 0, 0 );
	Streamer_IsToggleItemUpdate( 0, 0 );
	Streamer_Update( 0, 0 );
	Streamer_UpdateEx( 0, 0.0, 0.0, 0.0, 0, 0, 0 );
	Streamer_GetFloatData( 0, 0, 0, fVar );
	Streamer_SetFloatData( 0, 0, 0, 0.0 );
	Streamer_GetIntData( 0, 0, 0 );
	Streamer_SetIntData( 0, 0, 0, 0 );
	Streamer_GetArrayData( 0, 0, 0, Str, 0 );
	Streamer_SetArrayData( 0, 0, 0, Str, 0 );
	Streamer_IsInArrayData( 0, 0, 0, 0 );
	Streamer_AppendArrayData( 0, 0, 0, 0 );
	Streamer_RemoveArrayData( 0, 0, 0, 0 );
	Streamer_GetUpperBound( 0 );
	Streamer_GetDistanceToItem( 0.0, 0.0, 0.0, 0, 0, fVar, 0 );
	Streamer_ToggleStaticItem( 0, 0, 0 );
	Streamer_IsToggleStaticItem( 0, 0 );
	Streamer_GetItemInternalID( 0, 0, 0 );
	Streamer_GetItemStreamerID( 0, 0, 0 );
	Streamer_IsItemVisible( 0, 0, 0 );
	Streamer_DestroyAllVisibleItems( 0, 0, 0 );
	Streamer_CountVisibleItems( 0, 0, 0 );
	Streamer_DestroyAllItems( 0, 0 );
	Streamer_CountItems( 0, 0 );
	CreateDynamicObject( 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0, 0, 0, 0.0, 0.0 );
	DestroyDynamicObject( 0 );
	IsValidDynamicObject( 0 );
	SetDynamicObjectPos( 0, 0.0, 0.0, 0.0 );
	GetDynamicObjectPos( 0, fVar, fVar, fVar );
	SetDynamicObjectRot( 0, 0.0, 0.0, 0.0 );
	GetDynamicObjectRot( 0, fVar, fVar, fVar );
	SetDynamicObjectNoCameraCol( 0 );
	MoveDynamicObject( 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 );
	StopDynamicObject( 0 );
	IsDynamicObjectMoving( 0 );
	AttachCameraToDynamicObject( 0, 0 );
	AttachDynamicObjectToObject( 0, 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0 );
	AttachDynamicObjectToPlayer( 0, 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 );
	AttachDynamicObjectToVehicle( 0, 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 );
	EditDynamicObject( 0, 0 );
	IsDynamicObjectMaterialUsed( 0, 0 );
	GetDynamicObjectMaterial( 0, 0, iVar, Str, Str, iVar, 0, 0 );
	SetDynamicObjectMaterial( 0, 0, 0, "", "", 0 );
	IsDynamicObjectMaterialTextUsed( 0, 0 );
	GetDynamicObjectMaterialText( 0, 0, Str, iVar, Str, iVar, iVar, iVar, iVar, iVar, 0, 0 );
	SetDynamicObjectMaterialText( 0, 0, "", 0, "", 0, 0, 0, 0, 0 );
	CreateDynamicPickup( 0, 0, 0.0, 0.0, 0.0, 0, 0, 0, 0.0 );
	DestroyDynamicPickup( 0 );
	IsValidDynamicPickup( 0 );
	CreateDynamicCP( 0.0, 0.0, 0.0, 0.0, 0, 0, 0, 0.0 );
	DestroyDynamicCP( 0 );
	IsValidDynamicCP( 0 );
	TogglePlayerDynamicCP( 0, 0, 0 );
	TogglePlayerAllDynamicCPs( 0, 0 );
	IsPlayerInDynamicCP( 0, 0 );
	GetPlayerVisibleDynamicCP( 0 );
	CreateDynamicRaceCP( 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0, 0, 0, 0.0 );
	DestroyDynamicRaceCP( 0 );
	IsValidDynamicRaceCP( 0 );
	TogglePlayerDynamicRaceCP( 0, 0, 0 );
	TogglePlayerAllDynamicRaceCPs( 0, 0 );
	IsPlayerInDynamicRaceCP( 0, 0 );
	GetPlayerVisibleDynamicRaceCP( 0 );
	CreateDynamicMapIcon( 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0.0, 0 );
	DestroyDynamicMapIcon( 0 );
	IsValidDynamicMapIcon( 0 );
	CreateDynamic3DTextLabel( "", 0, 0.0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0, 0.0 );
	

	DestroyDynamic3DTextLabel( Text3D:0 );
	IsValidDynamic3DTextLabel( Text3D:0 );
	GetDynamic3DTextLabelText(  Text3D:0, Str, 0 );
	UpdateDynamic3DTextLabelText(  Text3D:0, 0, "" );
	CreateDynamicCircle( 0.0, 0.0, 0.0, 0, 0, 0 );
	CreateDynamicCylinder( 0.0, 0.0, 0.0, 0.0, 0.0, 0, 0, 0 );
	CreateDynamicSphere( 0.0, 0.0, 0.0, 0.0, 0, 0, 0 );
	CreateDynamicRectangle( 0.0, 0.0, 0.0, 0.0, 0, 0, 0 );
	CreateDynamicCuboid( 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0, 0, 0 );
	CreateDynamicCube( 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0, 0, 0 );
	CreateDynamicPolygon( Float:{0.0}, 0.0, 0.0, 0, 0, 0, 0 );
	DestroyDynamicArea( 0 );
	IsValidDynamicArea( 0 );
	GetDynamicPolygonPoints( 0,Float:{ 0.0 }, 0 );
	GetDynamicPolygonNumberPoints( 0 );
	TogglePlayerDynamicArea( 0, 0, 0 );
	TogglePlayerAllDynamicAreas( 0, 0 );
	IsPlayerInDynamicArea( 0, 0, 0 );
	IsPlayerInAnyDynamicArea( 0, 0 );
	IsAnyPlayerInDynamicArea( 0, 0 );
	IsAnyPlayerInAnyDynamicArea( 0 );
	GetPlayerDynamicAreas( 0, "", 0 );
	GetPlayerNumberDynamicAreas( 0 );
	IsPointInDynamicArea( 0, 0.0, 0.0, 0.0 );
	IsPointInAnyDynamicArea( 0.0, 0.0, 0.0 );
	GetDynamicAreasForPoint( 0.0, 0.0, 0.0, "", 0 );
	GetNumberDynamicAreasForPoint( 0.0, 0.0, 0.0 );
	AttachDynamicAreaToObject( 0, 0, 0, 0 );
	AttachDynamicAreaToPlayer( 0, 0 );
	AttachDynamicAreaToVehicle( 0, 0 );
	CreateDynamicObjectEx( 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, Str, Str, Str, 0, 0, 0 );
	CreateDynamicPickupEx( 0, 0, 0.0, 0.0, 0.0, 0.0, Str, Str, Str, 0, 0, 0 );
	CreateDynamicCPEx( 0.0, 0.0, 0.0, 0.0, 0.0, Str, Str, Str, 0, 0, 0 );
	CreateDynamicRaceCPEx( 0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, Str, Str, Str, 0, 0, 0 );
	CreateDynamicMapIconEx( 0.0, 0.0, 0.0, 0, 0, 0, 0.0, Str, Str, Str, 0, 0, 0 );
	CreateDynamic3DTextLabelEx( "", 0, 0.0, 0.0, 0.0, 0.0, 0, 0, 0, 0.0, Str, Str, Str, 0, 0, 0 );
	CreateDynamicCircleEx( 0.0, 0.0, 0.0, Str, Str, Str, 0, 0, 0 );
	CreateDynamicCylinderEx( 0.0, 0.0, 0.0, 0.0, 0.0, Str, Str, Str, 0, 0, 0 );
	CreateDynamicSphereEx( 0.0, 0.0, 0.0, 0.0, Str, Str, Str, 0, 0, 0 );
	CreateDynamicRectangleEx( 0.0, 0.0, 0.0, 0.0, Str, Str, Str, 0, 0, 0 );
	CreateDynamicCuboidEx( 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, Str, Str, Str, 0, 0, 0 );
	CreateDynamicCubeEx( 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, Str, Str, Str, 0, 0, 0 );
	CreateDynamicPolygonEx( Float:{ 0.0 }, 0.0, 0.0, 0, Str, Str, Str, 0, 0, 0 );
	Streamer_TickRate( 0 );
	Streamer_MaxItems( 0, 0 );
	Streamer_VisibleItems( 0, 0, 0 );
	Streamer_CellDistance( 0.0 );
	Streamer_CellSize( 0.0 );
	Streamer_CallbackHook( 0 );
	DestroyAllDynamicObjects(  );
	CountDynamicObjects(  );
	DestroyAllDynamicPickups(  );
	CountDynamicPickups(  );
	DestroyAllDynamicCPs(  );
	CountDynamicCPs(  );
	DestroyAllDynamicRaceCPs(  );
	CountDynamicRaceCPs(  );
	DestroyAllDynamicMapIcons(  );
	CountDynamicMapIcons(  );
	DestroyAllDynamic3DTextLabels(  );
	CountDynamic3DTextLabels(  );
	DestroyAllDynamicAreas(  );
	CountDynamicAreas(  );
	#pragma unused iVar, fVar, Str
}
