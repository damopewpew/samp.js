class Vehicle
{
	constructor(modelid, x, y, z, a, color1, color2, respawnDelay, addSiren)
	{
		this._modelid = modelid;
		this._pos = {x: x, y: y, z: z};
		this._angle = a;
		this._color = {color1: color1, color2: color2};
		this._respawnDelay = respawnDelay;
		this._addSiren = addSiren;
	}
	
	create()
	{
		this.id = CreateVehicle(this._modelid, this._pos.x, this._pos.y, this._pos.z, this._pos.a, this._color.color1, this._color.color2, this._respawnDelay, this._addSiren);
		return this;
	}
	
	createStatic() 
	{
		this.id = AddStaticVehicle(this._modelid, this._pos.x, this._pos.y, this._pos.z, this._pos.a, this._color.color1, this._color.color2);
		return this;
	}
	
	createStaticEx() 
	{
		this.id = AddStaticVehicleEx(this._modelid, this._pos.x, this._pos.y, this._pos.z, this._pos.a, this._color.color1, this._color.color2, this._respawnDelay, this._addSiren);
		return this;
	}
	
	destroy() {
		return DestroyVehicle(this.id);
	}
	
	valueOf() {
		return this.id;
	}
	
	streamedInFor(player) {
		return IsVehicleStreamedIn(this.id, player);
	}
	
	paramsFor(player, objective, doorsLocked) {
		return SetVehicleParamsForPlayer(this.id, player, objective, doorsLocked);
	}
	
	hasTrailer() {
		return IsTrailerAttachedToVehicle(this.id);
	}
	
	distanceFromPoint(point)
	{
		if(arguments.length > 1) {
			return GetVehicleDistanceFromPoint(this.id, arguments[0], arguments[1], arguments[2]);
		}
		if(Array.isArray(point)) {
			return GetVehicleDistanceFromPoint(this.id, point[0], point[1], point[2]);
		}
		return GetVehicleDistanceFromPoint(this.id, point.x, point.y, point.z);
	}
	
	addComponent(componentid) 
	{
		AddVehicleComponent(this.id, componentid);
		return this;
	}
	
	removeComponent(componentid) 
	{
		RemoveVehicleComponent(this.id, componentid);
		return this;
	}
	
	respawn()
	{
		SetVehicleToRespawn(this.id);
		return this;
	}
	
	repair() 
	{
		RepairVehicle(this.id);
		return this;
	}
	
	modelInfo(infoType) {
		return GetVehicleModelInfo(this.model, infoType);
	}
	
	detachTrailer() 
	{
		DetachTrailerFromVehicle(this.id);
		return this;
	}
	
	componentInSlot(slot) {
		return GetVehicleComponentInSlot(this.id, slot);
	}
	
	set interior(interior) {
		LinkVehicleToInterior(this.id, interior);
	}
	
	set numberPlate(text) {
		SetVehicleNumberPlate(this.id, text);
	}
	
	set angularVelocity(pos)
	{
		if(Array.isArray(pos)) {
			pos = {x: pos[0], y: pos[1], z: pos[2]};
		}
		SetVehicleAngularVelocity(this.id, pos.x, pos.y, pos.z);
	}
	
	set color(color)
	{
		if(Array.isArray(color)) {
			color = {color1: color[0], color2; color[1]};
		}
		ChangeVehicleColor(this.id, color.color1, color.color2);
	}
	
	set paintjob(id) {
		ChangeVehiclePaintjob(this.id, id);
	}
	
	get isValid() {
		return (this.id < INVALID_VEHICLE_ID);
	}
	
	get rotationQuat() {
		return GetVehicleRotationQuat(this.id);
	}
	
	get sirenState() {
		return GetVehicleParamsSirenState(this.id);
	}
	
	get model() {
		return this._modelid;
	}
	
	set pos(pos)
	{
		if(Array.isArray(pos))
		{
			if(pos.length > 3) {
				this.zAngle = pos[3]
			}
			pos = {x: pos[0], y: pos[1], z: pos[2]};
		}
		if(pos.hasOwnProperty('a')) {
			this.zAngle = pos.a;
		}
		SetVehiclePos(this.id, pos.x, pos.y, pos.z);
	}
	
	get pos() {
		return (this._pos = GetVehiclePos(this.id));
	}
	
	set zAngle(a) {
		SetVehicleZAngle(this.id, (this._angle = a));
	}
	
	get zAngle() {
		return (this._angle = GetVehicleZAngle(this.id));
	}
	
	set world(id) {
		SetVehicleVirtualWorld(this.id, id);
	}
	
	get world() {
		return GetVehicleVirtualWorld(this.id);
	}
	
	set paramsEx(params)
	{
		if(Array.isArray(params)) {
			params = {engine: params[0], lights: params[1], alarm: params[2], doors: params[3], bonnet: params[4], boot: params[5], objective: params[6]};
		}
		SetVehicleParamsEx(this.id, params.engine, params.lights, params.alarm, params.doors, params.bonnet, params.boot, params.objective);
	}
	
	get paramsEx() {
		return GetVehicleParamsEx(this.id);
	}
	
	set doors(door)
	{
		if(Array.isArray(door)) {
			door = {driver: door[0], passenger: door[1], backleft: door[2], backright: door[3]};
		}
		SetVehicleParamsCarDoors(this.id, door.driver, door.passenger, door.backleft, door.backright);
	}
	
	get doors() {
		return GetVehicleParamsCarDoors(this.id);
	}
	
	set windows(window)
	{
		if(Array.isArray(window)) {
			window = {driver: window[0], passenger: window[1], backleft: window[2], backright: window[3]};
		}
		SetVehicleParamsCarWindows(this.id, window.driver, window.passenger, window.backleft, window.backright);
	}
	
	get windows() {
		return GetVehicleParamsCarWindows(this.id);
	}
	
	set health(hp) {
		SetVehicleHealth(this.id, hp);
	}
	
	get health() {
		return GetVehicleHealth(this.id);
	}
	
	set trailer(trailer) {
		AttachTrailerToVehicle(trailer, this.id);
	}
	
	get trailer() {
		return GetVehicleTrailer(this.id);
	}
	
	set velocity(pos)
	{
		if(Array.isArray(pos)) {
			pos = {x: pos[0], y: pos[1], z: pos[2]};
		}
		SetVehicleVelocity(this.id, pos.x, pos.y, pos.z);
	}
	
	get velocity() {
		return GetVehicleVelocity(this.id);
	}
	
	set damageStatus(damage)
	{
		if(Array.isArray(damage)) {
			damage = {panels: damage[0], doors: damage[1], lights: damage[2], tires: damage[3]};
		}
		UpdateVehicleDamageStatus(this.id, damage.panels, damage.doors, damage.lights, damage.tires);
	}
	
	get damageStatus() {
		return GetVehicleDamageStatus(this.id);
	}
}
