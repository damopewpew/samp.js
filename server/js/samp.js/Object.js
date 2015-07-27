class Object
{
	constructor(modelid, x, y, z, rx, ry, rz, drawDistance)
	{
		this._model = modelid;
		this._pos = {x: x, y: y, z: z};
		this._rot = {rx: rx, ry: ry, rz: rz};
		this._drawDistance = drawDistance;
		this.id = CreateObject(this._model, this._pos.x, this._pos.y, this._pos.z, this._rot.x, this._rot.y, this._rot.z, this._drawDistance);
	}
	
	destroy() {
		DestroyObject(this.id);
	}
	
	valueOf() {
		return this.id;
	}
	
	isValid() {
		return IsValidObject(this.id);
	}
	
	isMoving() {
		return IsObjectMoving(this.id);
	}
	
	move(pos, speed, rot)
	{
		if(Array.isArray(pos)) {
			pos = {x: pos[0], y: pos[1], z: pos[2]};
		}
		this._pos = pos;
		
		if(Array.isArray(rot)) {
			rot = {x: rot[0], y: rot[1], z: rot[2]};
		}
		this._rot = rot;
		return MoveObject(this.id, pos.x, pos.y, pos.z, speed, rot.x, rot.y, rot.z);
	}
	
	stop() {
		return StopObject(this.id);
	}
	
	edit(player) {
		EditObject(this.id, player);
	}
	
	setNoCameraCol() {
		return SetObjectNoCameraCol(this.id);
	}
	
	attachToVehicle(vehicle, offset, rot)
	{
		if(Array.isArray(offset)) {
			offset = {x: offset[0], y: offset[1], z: offset[2]};
		}
		if(Array.isArray(rot)) {
			rot = {x: rot[0], y: rot[1], z: rot[2]};
		}
		return AttachObjectToVehicle(this.id, vehicle, offset.x, offset.y, offset.z, rot.x, rot.y, rot.z);
	}
	
	attachToObject(object, offset, rot, syncRot)
	{
		if(Array.isArray(offset)) {
			offset = {x: offset[0], y: offset[1], z: offset[2]};
		}
		if(Array.isArray(rot)) {
			rot = {x: rot[0], y: rot[1], z: rot[2]};
		}
		return AttachObjectToObject(this.id, object, offset.x, offset.y, offset.z, rot.x, rot.y, rot.z, syncRot);
	}
	
	attachToPlayer(player, offset, rot)
	{
		if(Array.isArray(offset)) {
			offset = {x: offset[0], y: offset[1], z: offset[2]};
		}
		if(Array.isArray(rot)) {
			rot = {x: rot[0], y: rot[1], z: rot[2]};
		}
		return AttachObjectToPlayer(this.id, player, offset.x, offset.y, offset.z, rot.x, rot.y, rot.z);
	}
	
	setMaterial(matIndex, modelid, txdName, textureName, matColor) {
		return SetObjectMaterial(this.id, matIndex, modelid, txdName, textureName, matColor);
	}
	
	setMaterialText(text, matIndex, matSize, fontFace, fontSize, bold, fontColor, backColor, textAlign) {
		return SetObjectMaterialText(this.id, matIndex, matSize, fontFace, fontSize, bold, fontColor, backColor, textAlign);
	}

	get isValid() {
		return (this.id < INVALID_OBJECT_ID);
	}
	
	get model() {
		return this._model;
		//return GetObjectModel(this.id);
	}
	
	set pos(pos) 
	{
		if(Array.isArray(pos)) {
			pos = {x: pos[0], y: pos[1], z: pos[2]};
		}
		this._pos = pos;
		return SetObjectPos(this.id, pos.x, pos.y, pos.z);
	}
	
	get pos() {
		return (this._pos = GetObjectPos(this.id));
	}
	
	set rot(rot) 
	{
		if(Array.isArray(rot)) {
			rot = {x: rot[0], y: rot[1], z: rot[2]};
		}
		this._rot = rot;
		return SetObjectPos(this.id, rot.x, rot.y, rot.z);
	}
	
	get rot() {
		return (this._rot = GetObjectRot(this.id));
	}
}