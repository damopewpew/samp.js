class MySQLConnection extends Events
{
	constructor(host, user, password, database)
	{
		super();	
		this.host = host;
		this.user = user;
		this.password = password;
		this.database = database;
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
		if(arguments.length == 1) {
			return this.internal.query(qry);
		}
		if(typeof arguments[1] === 'function') {
			return this.internal.query(qry, arguments[1]);
		}
		let isObject;
		
		if(Array.isArray(arguments[1]) || (isObject = typeof arguments[1] === 'object' && arguments[1] !== null))
		{
			let
				args = arguments[1],
				count = 0;
			;
			qry = qry.replace(/\?/g, function() {return this.varEscape(isObject ? args : args[count++])}.bind(this));
			
			if(typeof arguments[2] === 'function') {
				return this.internal.query(qry, arguments[2]);
			}
		}
		this.internal.query(qry);
	}
	
	parseArray(array) 
	{
		return array.map(function(v)
		{
			if(Array.isArray(v)) {
				return '(' + this.parseArray(v) +')';
			}
			return this.varEscape(v);
		}.bind(this)).join(', ');
	}
	
	parseDate(date)
	{
		//Assuming 'date' was supposed to be mysql's DATETIME (YYYY-MM-DD HH:MM:SS)
		let d = date.split(/[- :]/g);
		
		return {
			year: +d[0],
			month: +d[1],
			day: +d[2],
			hour: +d[3],
			minute: +d[4],
			second: +d[5]
		};
	}
	
	varEscape(val)
	{
		if(val === undefined || val === null) {
			return 'NULL';	
		}
		
		switch(typeof val)
		{
			case 'boolean': return (val) ? 'true' : 'false';
			case 'number': return val+'';
		}
		
		if(Array.isArray(val)) {
			return this.parseArray(val);	
		}
		
		if(typeof val === 'object') {
			var vals = [];
			
			for(var k in val) {
				var value = val[k];
				
				if(typeof value == 'function') {
					continue;	
				}
				vals.push(this.escape(k)+ ' = '+this.varEscape(value));
			}
			return vals.join(', ');
		}
		return "'"+this.escape(val)+"'";
		
	}
	
	escape(string) {
		return this.internal.escape(string);
	}
}
