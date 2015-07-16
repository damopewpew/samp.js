/**
 * Events base class for subscribing to and firing events
 * 
 * @example 
 * class MyObject extends Events { };
 * $events = new MyObject();
 * $events.on("test",function);
 * $events.fire("test", args...);
 * $events.off("test", function);
 */
class Events {
	/** Creates an events system | Should be extended */
	constructor(){
		/** @type {Object} */
		this.ids = {};
	}
	
/**
 * Subscribe to an event
 * @param {String}   event Event name
 * @param {Function} fn    Event callback
 */
	on(event, fn){
		this.addEvent(event,fn,-1);
	}

/**
 * Subscribe to an event and unsubscribe after it has been fired once
 * @param {String}   event Event name
 * @param {Function} fn    Event callback		
 */
	one(event,fn){
		this.addEvent(event,fn,0);
	}
/**
 * Subscribe to an event and unsubscribe after a set amount of times
 * @param {String}   event Event name
 * @param {Function} fn    Event callback
 * @param {Number}   times Times event can fire	
 */
	some(event,fn,times){
		this.addEvent(event,fn,times-1);
	}
	
/**
 * Unsubscribe from an event
 * @param {String}   event Event name
 * @param {Function} fn    Function/Callback used to subscribe
 */
	off(event,fn){
		if(this.ids[event])
			for(var id in this.ids[event])
				if(this.ids[event][id].fn == fn)
					delete this.ids[event][id];
	}
	
/**
 * Add an event
 * @param {String}   event Event name
 * @param {Function} fn    Event callback
 * @param {Number}   type  Event type (-1 infinite, 0 once, 0 > times)
 */
	addEvent(event,fn,type){
		if(!this.ids[event])this.ids[event] = [];
		this.ids[event].push(new Event(event,fn,type));	
	}

/**
 * Fire an event
 * @param   {String}  event Event name
 * @returns {Boolean} Returning 0 will cancel the event bubble
 */
	fire( event ){
		var args = [];
		for(var i in arguments){
			if(i != 0) args.push(arguments[i]);
		}
		
		var ret = -1;
		for(var id in this.ids[event]){
			var fn = this.ids[event][id].fn;
			ret = fn.apply(null, args);	
			
			if(this.ids[event][id].type == 0) delete this.ids[event][id];
			else if(this.ids[event][id].type > 0) this.ids[event][id].type--;

			// This is a special case for PlayerCommandText and RconCommand so it returns correctly
			if(event == "PlayerCommandText" || event == "RconCommand"){
				if(ret === 1){
					return 1;
				}
			} else {
				if(ret === 0){
					return 0;
				}
			}
		}
		
		return ret;
	}
};