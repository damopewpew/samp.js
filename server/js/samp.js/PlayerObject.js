class PlayerObject
{
	constructor(playerid, modelid, x, y, z, rx, ry, rz, drawDistance)
	{
		this._playerid = playerid;
		this._model = modelid;
		this._pos = {x: x, y: y, z: z};
		this._rot = {rx: rx, ry: ry, rz: rz};
		this._drawDistance = drawDistance;
		this.id = CreatePlayerObject(this._playerid, this._model, this._pos.x, this._pos.y, this._pos.z, this._rot.x, this._rot.y, this._rot.z, this._drawDistance);
	}
	
	destroy() {
		DestroyPlayerObject(this._playerid, this.id);
	}
	
	valueOf() {
		return this.id;
	}
	
	isValid() {
		return IsValidPlayerObject(this._playerid, this.id);
	}
	
	isMoving() {
		return IsPlayerObjectMoving(this._playerid, this.id);
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
		return MovePlayerObject(this._playerid, this.id, pos.x, pos.y, pos.z, speed, rot.x, rot.y, rot.z);
	}
	
	stop() {
		return StopPlayerObject(this._playerid, this.id);
	}
	
	edit() {
		EditPlayerObject(this._playerid, this.id);
	}
	
	setNoCameraCol() {
		return SetPlayerObjectNoCameraCol(this._playerid, this.id);
	}
	
	attachToVehicle(vehicle, ox, oy, oz, rx, ry, rz) {
		return AttachPlayerObjectToVehicle(this._playerid, this.id, vehicle, attachTo.id, ox, oy, oz, rx, ry, rz);
	}
	
	setMaterial(matIndex, modelid, txdName, textureName, matColor) {
		return SetPlayerObjectMaterial(this._playerid, this.id, matIndex, modelid, txdName, textureName, matColor);
	}
	
	setMaterialText(text, matIndex, matSize, fontFace, fontSize, bold, fontColor, backColor, textAlign) {
		return SetPlayerObjectMaterialText(this._playerid, this.id, matIndex, matSize, fontFace, fontSize, bold, fontColor, backColor, textAlign);
	}

	get isValid() {
		return (this.id < INVALID_OBJECT_ID);
	}
	
	get model() {
		return this._model;
		//return GetPlayerObjectModel(this._playerid, this.id);
	}
	
	set pos(pos) 
	{
		if(Array.isArray(pos)) {
			pos = {x: pos[0], y: pos[1], z: pos[2]};
		}
		this._pos = pos;
		return SetPlayerObjectPos(this._playerid, this.id, pos.x, pos.y, pos.z);
	}
	
	get pos() {
		return (this._pos = GetPlayerObjectPos(this._playerid, this.id));
	}
	
	set rot(rot) 
	{
		if(Array.isArray(rot)) {
			rot = {x: rot[0], y: rot[1], z: rot[2]};
		}
		this._rot = rot;
		return SetPlayerObjectPos(this._playerid, this.id, rot.x, rot.y, rot.z);
	}
	
	get rot() {
		return (this._rot = GetPlayerObjectRot(this._playerid, this.id));
	}
}
