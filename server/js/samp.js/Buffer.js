/**
 * ArrayBuffer wrapper/Helper class 
 */
class Buffer {
/**
 * Constructor for buffer class
 * @param {ArrayBuffer} buffer ArrayBuffer to wrap
 */
	constructor(buffer){
/**
 * @type {ArrayBuffer}
 */
		this.buffer = buffer;	
	}
	
/**
 * Pointer to raw ArrayBuffer
 * @returns {ArrayBuffer} Underlying ArrayBuffer object
 */
	buffer(){
		return this.buffer;	
	}
	
/**
 * Converts our buffer to a string
 * @param   {String} [format='utf8']             String format ( utf8|utf16 )
 * @param   {Number} [offset=0]                  Offset in bytes to start our string at
 * @param   {Number} [length=this.buffer.length] Length of returned string
 * @returns {String}
 */
	toString(format,offset,length){
		format = format||'utf8';
		offset = offset||0;
		length=  length||this.buffer.length;
		
		let arr = {};
		if(format =='utf8'){
			arr = new Uint8Array(this.buffer, offset, length )
		} else if(format == 'utf16' || format == 'unicode'){
			arr = new Uint16Array(this.buffer,offset,length)
		}
		//return arr;
		return String.fromCharCode.apply(null, arr);	
	}
	
/**
 * Converts ArrayBuffer into a Uint16Array
 * @returns {Uint16Array} Uint16 Array
 */
	toUint16Array(){
		return new Uint16Array(this.buffer);
	}
/**
 * Converts ArrayBuffer into a Uint8Array
 * @returns {Uint8Array} Uint8 Array
 */
	toUint8Array(){
		return new Uint8Array(this.buffer);	
	}
	
/**
 * @returns {ArrayBuffer}
 */
	toValue(){
		return this.buffer;	
	}
	
/**
 * @returns {ArrayBuffer}
 */
	toObject(){
		return this.buffer;
	}
};