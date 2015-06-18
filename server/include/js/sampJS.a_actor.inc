forward Invoke_a_actorinc();
public Invoke_a_actorinc(){
	new Str[256];
	new iVar;
	new Float:fVar;

	CreateActor( 0, 0.0, 0.0, 0.0, 0.0 );
	DestroyActor( 0 );
	IsActorStreamedIn( 0, 0 );
	SetActorVirtualWorld( 0, 0 );
	GetActorVirtualWorld( 0 );
	ApplyActorAnimation( 0, "", "", 0.0, 0, 0, 0, 0, 0 );
	ClearActorAnimations( 0 );
	SetActorPos( 0, 0.0, 0.0, 0.0 );
	GetActorPos( 0, fVar, fVar, fVar );
	SetActorFacingAngle( 0, 0.0 );
	GetActorFacingAngle( 0, fVar );
	SetActorHealth( 0, 0.0 );
	GetActorHealth( 0, fVar );
	SetActorInvulnerable( 0, 0 );
	IsActorInvulnerable( 0 );
	IsValidActor( 0 );
	#pragma unused iVar, fVar, Str
}
