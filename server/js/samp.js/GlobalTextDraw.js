class GlobalTextDraw 
{
	/**
	 * Creates a new TextDraw object
	 *
	 * @param {Number} x
	 * @param {Number} y
	 * @param {String} text
	 *
	 *
	 * @param {Object|Array[2]} options.pos
	 * @param {String} options.text
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
		/*
		id
		_pos
		*/
		this._selectable = null;
		this._color = null;
		this._boxColor = null;
		this._backgroundColor = null;
		this._alignment = null;
		this._font = null;
		this._letterSize = {x: null, y: null};
		this._textSize = {x: null, y: null};
		this._outline = null;
		this._shadow = null;
		this._proportional = null;
		this._useBox = null;
		this._previewModel = null;
		this._previewRot = null;
		this._previewVehCol = null;
		this._text = null;
		
		if(arguments.length > 1)
		{
			this._pos = {x: arguments[0], y: arguments[1]};
			this._text = arguments[2];
		}
		else
		{
			if(Array.isArray(options.pos)) {
				options.pos = {x: options.pos[0], y: options.pos[1]};
			}
			this._pos = options.pos;
			this._text = options.text;
		}
		this.id = TextDrawCreate(this._pos.x, this._pos.y, this._text);
		
		for(let opt in options)
		{
			if(opt == 'pos' || opt == 'text' || !this.hasOwnProperty('_' + opt)) {
				continue;
			}
			this[opt] = options[opt];
		}
	}

	/**
	 * Shows the textdraw
	 * @description Shows the global textdraw for player
	 */
	showFor(player) 
	{
		TextDrawShowForPlayer(player, this.id);
		return this;
	}
	
	/**
	 * Hides the textdraw
	 * @description Hides the global textdraw for player
	 */
	hideFor(player)
	{
		TextDrawHideForPlayer(player, this.id);
		return this;
	}
	
	/**
	 * Shows the textdraw for everyone
	 * @description Shows the global textdraw for everyone
	 */
	showForAll() 
	{
		TextDrawShowForAll(this.id);
		return this;
	}
	
	/**
	 * Hides the textdraw for everyone
	 * @description Hides the global textdraw for everyone
	 */
	hideForAll()
	{
		TextDrawHideForAll(this.id);
		return this;
	}
	 
	 /**
	 * Destroys the textdraw
	 */
	destroy() {
		TextDrawDestroy(this.id);
	}
	
	/**
	 * Returns the global textdraw id
	 * @returns {Number} textdraw id
	 */
	 valueOf() {
		 return this.id;
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
		 TextDrawSetSelectable(this.id, set);
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
		TextDrawColor(this.id, color);
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
	 */
	set boxColor(color) 
	{
		TextDrawBoxColor(this.id, color);
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
		TextDrawBackgroundColor(this.id, color);
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
		TextDrawAlignment(this.id, align);
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
		TextDrawFont(this.id, font);
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
		TextDrawLetterSize(this.id, size.x, size.y);
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
		TextDrawTextSize(this.id, size.x, size.y);
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
		TextDrawSetOutline(this.id, size);
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
		TextDrawSetShadow(this.id, size);
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
		TextDrawSetProportional(this.id, set);
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
		TextDrawUseBox(this.id, set);
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
	 */
	set previewModel(modelindex)
	{
		TextDrawSetPreviewModel(this.id, modelindex);
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
		TextDrawSetPreviewRot(this.id, rot.x, rot.y, rot.z, rot.zoom);
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
		TextDrawSetPreviewVehCol(this.id, col.color1, col.color2);
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
		TextDrawSetString(this.id, text);
		this._text = text;
	}
	
	/**
	 * Returns textdraw text
	 * @returns {String}
	 */
	get text() {
		return this._text;
	}
};
