/**
 * Wrapper for Events
 */
class Event {
/**
 * Event Constructor
 * @param {String}   name Event Name
 * @param {Function} fn   Callback
 * @param {Number}   type Type of event ( -1 infinite, 0 once, > 0 times )
 */
	constructor(name,fn,type){
		/** @type {string} */
		this.name = name;
		/** @type {function} */
		this.fn = fn;
		/** @type {number} */
		this.type = type;
	}	
}