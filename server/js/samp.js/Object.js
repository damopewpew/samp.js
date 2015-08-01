class Object extends Events {
	constructor(modelid,x,y,z,rx,ry,rz,drawdistance){
		super();
		this.id = INVALID_OBJECT_ID;
		this._model = modelid || -1;
		this._pos = { x:x || 0.0, y: y || 0.0, z: z || 0.0 };
		this._rotation = { x: rx || 0.0, y: ry || 0.0, z:rz || 0.0 };
		this._drawdistance = drawdistance || 0.0;
	}
	
	create(){
		if(this.id == INVALID_OBJECT_ID || !this.valid()){
			this.id = CreateObject(this.model, 
								   this.pos.x, 
								   this.pos.y, 
								   this.pos.z,
								   this.rotation.x,
								   this.rotation.y,
								   this.rotation.z,
								   this.drawdistance );
		}
		return this;
	}
	
		
	destroy(){
		if(this.valid()) DestroyObject( this.id );
		this.id = INVALID_OBJECT_ID;		
	}
	
	valid(){
		return IsValidObject(this.id);	
	}
	
	attach( attachto, offsetx, offsety, offsetz, rotx, roty, rotz, sync ){
		if(attachto instanceof 'Object'){
			AttachObjectToObject(this.id, 
								 attachto.id, 
								 offsetx, 
								 offsety, 
								 offsetz,
								 rotx,
								 roty,
								 rotz,
								 sync );
		}
		
		else if(attachto instanceof 'Player'){
			AttachObjectToPlayer(this.id,
								 attachto.id,
								 offsetx,
								 offsety,
								 offsetz,
								 rotx,
								 roty,
								 rotz );
								  
		} else if(attachto instanceof 'Vehicle'){
			AttachObjectToVehicle(this.id,
								  attachto.id,
								  offsetx,
								  offsety,
								  offsetz,
								  rotx,
								  roty,
								  rotz);
		}
		
		return this;
	}
	
	attachCamera( player ){
		AttachCameraToObject( player, this.id );	
		return this;
	}
	
	edit( player ){
		EditObject(player, this.id );
		return this;
	}
	
	move( x,y,z, speed, rotx, roty, rotz ){
		rotx = rotx || -1000.0;
		roty = roty || -1000.0;
		rotz = rotz || -1000.0;
		return MoveObject(this.id, x,y,z, speed, rotx, roty, rotz );	
	}
	
	stop(){
		StopObject(this.id);
		return this;
	}
	
	pos(x,y,z){
		if(typeof x == 'undefined'){
			return GetObjectPos(this.id);
		} else {
			this.pos = { x: x, y: y, z: z };
			SetObjectPos(this.id,x,y,z);
		}
		return;
	}
	
	rotate(rx,ry,rz){
		this.rotation
	}
	
	rotation(){
			
	}
	
	

}