

class MySQLConnection extends Events {
	constructor( host, user, password, database ){
		super();	
		this.host = host;
		this.user = user;
		this.password = password;
		this.database = database;
	}
	
	connect(callback){
			this.internal.connect(
				this.host,
				this.user,
				this.password,
				this.database,
				callback
			);	
	}
	
	close(){
		this.internal.close();	
	}
	
	ping(){
		this.internal.ping();	
	}
	
	connected(){
		return this.internal.connected();	
	}
	
	query(qry){
		if(arguments.length > 1){
			if(typeof(arguments[1]) == 'function'){
				this.internal.query(qry,arguments[1]);
				return this;
			}

			if(Array.isArray(arguments[1])){
				let args = arguments[1];
				let j = 0;
				for(let i = 0; i < qry.length; i++){
					if(qry[i] == '?'){
						print(args[j]);
						let escaped = this.varEscape(args[j]);
						qry = qry.slice(0,i)+escaped+qry.slice(i+1);
					}
				}
				
				if(arguments.length > 2 && typeof(arguments[2])==='function'){
					this.internal.query(qry,arguments[2]);
					return this;
				}
				
				return this.internal.query(qry);
				
			}
			
			return this;
		} 
		
		this.internal.query(qry);
	}
	
	parseArray(array){
		return array.map(function(v){
			if(Array.isArray(v)) return '(' + this.parseArray(v) +')';
			return this.varEscape(v);
		}.bind(this)).join(', ');
	}
	
	parseDate(date){
		let year = date.getFullYear();
		let month = date.g
	}
	
	varEscape(val){
		if(val === undefined || val === null){
			return 'NULL';	
		}
		
		switch(typeof val){
			case 'boolean': return (val) ? 'true' : 'false';
			case 'number': return val+'';
		}
		
		
		if(Array.isArray(val)){
			return this.parseArray(val);	
		}
		
		if(typeof val === 'object'){
			var vals = [];
			for(var k in val){
				var value = val[k];
				if(typeof value == 'function'){
					continue;	
				}
				
				vals.push(this.escape(k)+ ' = '+this.varEscape(value));
			}
			
			return vals.join(', ');
		}
		
		
		return "'"+this.escape(val)+"'";
		
	}
	
	escape(string){
		return this.internal.escape(string);	
	}
	
	
}