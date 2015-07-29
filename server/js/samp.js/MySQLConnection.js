class MySQLConnection extends Events
{
	constructor(host, user, password, database)
	{
		super();	
		this.host = host;
		this.user = user;
		this.password = password;
		this.database = database;
		this._utc = true;
	}
	
	connect(callback)
	{
		this.internal.connect
		(
			this.host,
			this.user,
			this.password,
			this.database,
			callback
		);	
	}
	
	close() {
		this.internal.close();	
	}
	
	ping() {
		return this.internal.ping();	
	}
	
	connected() {
		return this.internal.connected();	
	}
	
	query(qry) 
	{
		if(arguments.length == 1)
		{
			this.internal.query(qry);
			return this;
		}
		if(typeof arguments[1] === 'function')
		{
			this.internal.query(qry, arguments[1]);
			return this;
		}
		let isObject;
		
		if(Array.isArray(arguments[1]) || (isObject = typeof arguments[1] === 'object'))
		{
			let
				args = arguments[1],
				count = 0;
			;
			qry = qry.replace(/\?/g, function() {return this.varEscape(isObject ? args : args[count++])}.bind(this));
			
			if(typeof arguments[2] === 'function')
			{
				this.internal.query(qry, arguments[2]);
				return this;
			}
		}
		this.internal.query(qry);
		return this;
	}
	
	parseArray(array) 
	{
		return array.map(function(v)
		{
			if(Array.isArray(v)) {
				return '(' + this.parseArray(v) + ')';
			}
			return this.varEscape(v);
		}.bind(this)).join(', ');
	}
	
	parseObject(object) {
		var vals = [];
			
		for(let key in object)
		{
			if(typeof object[key] == 'function'){
				continue;	
			}
			vals.push(this.escape(key) + ' = ' + this.varEscape(object[key]));
		}
		return vals.join(', ');
	}
	
	parseDate(date)
	{
		let
			year   = this._utc ? date.getUTCFullYear() : date.getFullYear(),
			month  = this._utc ? date.getUTCMonth() : date.getMonth(),
			day    = this._utc ? date.getUTCDate() : date.getDate(),
			hour   = this._utc ? date.getUTCHours() : date.getHours(),
			minute = this._utc ? date.getUTCMinutes() : date.getMinutes(),
			second = this._utc ? date.getUTCSeconds() : date.getSeconds()
		;
		month  = ('0' + (month + 1)).slice(-2);
		day    = ('0' + day).slice(-2);
		hour   = ('0' + hour).slice(-2);
		minute = ('0' + minute).slice(-2);
		second = ('0' + second).slice(-2);
		return `'${year}-${month}-${day} ${hour}:${minute}:${second}'`;
	}
	
	varEscape(val)
	{
		if(val === undefined || val === null) {
			return 'NULL';	
		}
		
		switch(typeof val)
		{
			case 'boolean': return (val) ? 'true' : 'false';
			case 'number': return val + '';
		}
		
		if(Array.isArray(val)){
			return this.parseArray(val);	
		}
		
		if(typeof val === 'object')
		{
			if(val instanceof Date) {
				return this.parseDate(val);
			}
			return this.parseObject(val);
		}
		return "'" + this.escape(val) + "'";
		
	}
	
	escape(string) {
		return this.internal.escape(string);
	}
	
	set utc(toggle) {
		this._utc = toggle;
	}
}
