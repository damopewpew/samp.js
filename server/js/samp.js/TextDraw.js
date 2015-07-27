/**
 * @example
 * //Create a new GLOBAL textdraw:
 * var gTextDraw = new TextDraw(
 * {
 * 	   pos: [220.0, 320.0],
 *     text: 'Hello world!',
 *     color: 0xFF0000FF
 * });
 * gTextDraw.alignment = 2;
 * gTextDraw.showFor(player);
 * 
 * //Create a new PLAYER textdraw
 * player.td.example = new TextDraw(
 * {
 *     playerid: player,
 * 	   pos: [220.0, 320.0],
 *     text: 'Hello world!',
 *     color: 0xFF0000FF
 * });
 * player.td.example.alignment = 2;
 * player.td.example.show();
 */

class TextDraw 
{
	/**
	 * Creates a new TextDraw object
	 * @param {Object|Array[2]} options.pos
	 * @param {Number} [options.playerid]
	 * @param {String} [options.text='']
	 * @param {Boolean} [options.selectable]
	 * @param {Number} [options.color]
	 * @param {Number} [options.boxColor]
	 * @param {Number} [options.backgroundColor]
	 * @param {Number} [options.alignment]
	 * @param {Number} [options.font]
	 * @param {Object|Array[2]} [options.letterSize]
	 * @param {Object|Array[2]} [options.textSize]
	 * @param {Number} [options.outline]
	 * @param {Number} [options.shadow]
	 * @param {Boolean} [options.proportional]
	 * @param {Boolean} [options.useBox]
	 * @param {Number} [options.previewModel]
	 * @param {Object|Array[4]} [options.previewRot]
	 * @param {Object|Array[2]} [options.previewVehCol]
	 * @see http://wiki.sa-mp.com/wiki/Textdraw
	 */
	constructor(options)
	{
		if(Array.isArray(options.pos)) {
			options.pos = {x: options.pos[0], y: options.pos[1]};
		}
		this._pos = options.pos;
		this._playerid = options.playerid;
		this._text = options.hasOwnProperty('text') ? options.text : '';
		
		if(this.isGlobal()) {
			this._id = TextDrawCreate(this._pos.x, this._pos.y, this._text);
		}
		else this._id = CreatePlayerTextDraw(this._playerid, this._pos.x, this._pos.y, this._text);
		
		for(let me in options) //plz let me in
		{
			if(me.charAt(0) == '_' || me == 'playerid' || me == 'pos' || me == 'text') {
				continue;
			}
			this[me] = options[me];
		}
	}

	/**
	 * Shows the textdraw
	 * @description Shows the player-textdraw
	 */
	show() {
		PlayerTextDrawShow(this._playerid, this._id);
	}
	
	/**
	 * Hides the textdraw
	 * @description Hides the player-textdraw
	 */
	hide() {
		PlayerTextDrawHide(this._playerid, this._id);
	}
	
	/**
	 * Shows the textdraw
	 * @description Shows the global textdraw for player
	 */
	showFor(player) {
		TextDrawShowForPlayer(player, this._id);
	}
	
	/**
	 * Hides the textdraw
	 * @description Hides the global textdraw for player
	 */
	hideFor(player) {
		TextDrawHideForPlayer(player, this._id);
	}
	
	/**
	 * Shows the textdraw for everyone
	 * @description Shows the global textdraw for everyone
	 */
	showForAll() {
		TextDrawShowForAll(this._id);
	}
	
	/**
	 * Hides the textdraw for everyone
	 * @description Hides the global textdraw for everyone
	 */
	hideForAll() {
		TextDrawHideForAll(this._id);
	}
	 
	 /**
	 * Destroys the textdraw
	 */
	destroy()
	{
		if(this.isGlobal()) {
			TextDrawDestroy(this._id);
		}
		else PlayerTextDrawDestroy(this._playerid, this._id);
	}
	
	/**
	 * Returns textdraw position
	 * @returns {Object}
	 */
	 get pos() {
		 return this._pos;
	 }
	 
	 /**
	 * Toggles whether a textdraw can be selected or not
	 * @param {Boolean} set
	 */
	 set selectable(set)
	 {
		 if(this.isGlobal()) {
			 TextDrawSetSelectable(this._id, set);
		 }
		 else PlayerTextDrawSetSelectable(this._playerid, this._id, set);
		 this._selectable = !!set;
	 }
	 
	 /**
	 * Returns whether a textdraw is selectable or not
	 * @returns {Boolean}
	 */
	 get selectable() {
		 return this._selectable;
	 }
	 
	 /**
	 * Sets textdraw text color
	 * @param {Number} color
	 */
	set color(color) 
	{
		if(this.isGlobal()) {
			TextDrawColor(this._id, color);
		}
		else PlayerTextDrawColor(this._playerid, this._id, color);
		this._color = color;
	}
	
	/**
	 * Returns textdraw text color
	 * @returns {Number}
	 */
	get color() {
		return this._color;
	}
	
	/**
	 * Sets textdraw box color
	 * @param {Number} color
	 * @description Will auto-enable "useBox"
	 */
	set boxColor(color) 
	{
		if(this.isGlobal()) {
			TextDrawBoxColor(this._id, color);
		}
		else PlayerTextDrawBoxColor(this._playerid, this._id, color);
		
		if(!this._useBox) {
			this.useBox = true;
		}
		this._boxColor = color;
	}
	
	/**
	 * Returns textdraw box color
	 * @returns {Number}
	 */
	get boxColor() {
		return this._boxColor;
	}
	
	/**
	 * Sets textdraw background color
	 * @param {Number} color
	 */
	set backgroundColor(color) 
	{
		if(this.isGlobal()) {
			TextDrawBackgroundColor(this._id, color);
		}
		else PlayerTextDrawBackgroundColor(this._playerid, this._id, color);
		this._backgroundColor = color;
	}
	
	/**
	 * Returns textdraw background color
	 * @returns {Number}
	 */
	get backgroundColor() {
		return this._backgroundColor;
	}
	
	/**
	 * Sets textdraw text alignment
	 * @param {Number} align
	 */
	set alignment(align) 
	{
		if(this.isGlobal()) {
			TextDrawAlignment(this._id, align);
		}
		else PlayerTextDrawAlignment(this._playerid, this._id, align);
		this._alignment = align;
	}
	
	/**
	 * Returns textdraw text alignment
	 * @returns {Number}
	 */
	get alignment() {
		return this._alignment;
	}
	
	/**
	 * Sets textdraw font
	 * @param {Number} font
	 */
	set font(font) 
	{
		if(this.isGlobal()) {
			TextDrawFont(this._id, font);
		}
		else PlayerTextDrawFont(this._playerid, this._id, font);
		this._font = font;
	}
	
	/**
	 * Returns textdraw font
	 * @returns {Number}
	 */
	get font() {
		return this._font;
	}
	
	/**
	 * Sets textdraw letter size
	 * @param {Object|Array} size
	 */
	set letterSize(size)
	{
		if(Array.isArray(size)) {
			size = {x: size[0], y: size[1]};
		}
		if(this.isGlobal()) {
			TextDrawLetterSize(this._id, size.x, size.y);
		}
		else PlayerTextDrawLetterSize(this._playerid, this._id, size.x, size.y);
		this._letterSize = size;
	}
	
	/**
	 * Returns textdraw letter size
	 * @returns {Object}
	 */
	get letterSize() {
		return this._letterSize;
	}
	
	/**
	 * Sets textdraw text size
	 * @param {Object|Array} size
	 */
	set textSize(size)
	{
		if(Array.isArray(size)) {
			size = {x: size[0], y: size[1]};
		}
		if(this.isGlobal()) {
			TextDrawTextSize(this._id, size.x, size.y);
		}
		else PlayerTextDrawTextSize(this._playerid, this._id, size.x, size.y);
		this._textSize = size;
	}
	
	/**
	 * Returns textdraw text size
	 * @returns {Object}
	 */
	get textSize() {
		return this._textSize;
	}
	
	/**
	 * Sets textdraw text outline
	 * @param {Number} size
	 */
	set outline(size)
	{
		if(this.isGlobal()) {
			TextDrawSetOutline(this._id, size);
		}
		else PlayerTextDrawSetOutline(this._playerid, this._id, size);
		this._outline = size;
	}
	
	/**
	 * Returns textdraw text outline
	 * @returns {Number}
	 */
	get outline() {
		return this._outline;
	}
	
	/**
	 * Sets textdraw text shadow
	 * @param {Number} size
	 */
	set shadow(size)
	{
		if(this.isGlobal()) {
			TextDrawSetShadow(this._id, size);
		}
		else PlayerTextDrawSetShadow(this._playerid, this._id, size);
		this._shadow = size;
	}
	
	/**
	 * Returns textdraw text shadow
	 * @returns {Number}
	 */
	get shadow() {
		return this._shadow;
	}
	
	/**
	 * Sets textdraw text proportional
	 * @param {Boolean} set
	 */
	set proportional(set)
	{
		if(this.isGlobal()) {
			TextDrawSetProportional(this._id, set);
		}
		else PlayerTextDrawSetProportional(this._playerid, this._id, set);
		this._proportional = !!set;
	}
	
	/**
	 * Returns textdraw text proportional
	 * @returns {Boolean}
	 */
	get proportional() {
		this._proportional;
	}
	
	/**
	 * Sets textdraw use box
	 * @param {Boolean} set
	 */
	set useBox(set)
	{
		if(this.isGlobal()) {
			TextDrawUseBox(this._id, set);
		}
		else PlayerTextDrawUseBox(this._playerid, this._id, set);
		this._useBox = !!set;
	}
	
	/**
	 * Returns textdraw use box
	 * @returns {Boolean}
	 */
	get useBox() {
		return this._useBox;
	}
	
	/**
	 * Set the model for a textdraw model preview
	 * @param {Number} modelindex
	 * @description Will automatically change font to 4
	 */
	set previewModel(modelindex)
	{
		if(this.isGlobal()) {
			TextDrawSetPreviewModel(this._id, modelindex);
		}
		else PlayerTextDrawSetPreviewModel(this._playerid, this._id, modelindex);
		
		if(this._font != TEXT_DRAW_FONT_MODEL_PREVIEW) {
			this._font = TEXT_DRAW_FONT_MODEL_PREVIEW;
		}
		this._previewModel = modelindex;
	}
	
	/**
	 * Returns preview model
	 * @returns {Number}
	 */
	get previewModel() {
		return this._previewModel;
	}
	
	/**
	 * Sets the rotation and zoom of a 3D model preview textdraw.
	 * @param {Object|Array} rot
	 */
	set previewRot(rot)
	{
		if(Array.isArray(rot)) {
			rot = {x: rot[0], y: rot[1], z: rot[2], zoom: rot[3]};
		}
		if(this.isGlobal()) {
			TextDrawSetPreviewRot(this._id, rot.x, rot.y, rot.z, rot.zoom);
		}
		else PlayerTextDrawSetPreviewRot(this._playerid, this._id, rot.x, rot.y, rot.z, rot.zoom);
		this._previewRot = rot;
	}
	
	/**
	 * Returns the rotation and zoom of a 3D model preview textdraw.
	 * @returns {Object}
	 */
	get previewRot() {
		return this._previewRot;
	}
	
	/**
	 * If a vehicle model is used in a 3D preview textdraw, this sets the two colour values for that vehicle.
	 * @param {Object|Array[2]} col
	 */
	set previewVehCol(col)
	{
		if(Array.isArray(col)) {
			col = {color1: col[0], color2: col[1]};
		}
		if(this.isGlobal()) {
			TextDrawSetPreviewVehCol(this._id, col.color1, col.color2);
		}
		else PlayerTextDrawSetPreviewVehCol(this._playerid, this._id, col.color1, col.color2);
		this._previewVehCol = col;
	}
	
	/**
	 * Returns vehicle colors of a 3D model preview textdraw.
	 * @returns {Object}
	 */
	get previewVehCol() {
		return this._previewVehCol;
	}
	
	/**
	 * Sets textdraw text
	 * @param {String} text
	 */
	set text(text)
	{
		if(this.isGlobal()) {
			TextDrawSetString(this._id, text);
		}
		else PlayerTextDrawSetString(this._playerid, this._id, text);
		this._text = text;
	}
	
	/**
	 * Returns textdraw text
	 * @returns {String}
	 */
	get text() {
		return this._text;
	}
	
	/**
	 * Returns the id of a textdraw
	 * @returns {Boolean}
	 */
	get id() {
		return this._id;
	}
	
	/**
	 * Checks if its a global textdraw
	 * @returns {Boolean}
	 */
	isGlobal() {
		return (this._playerid === undefined);
	}
};
