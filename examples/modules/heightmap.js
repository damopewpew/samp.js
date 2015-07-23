/**
 * Heightmap module by !damo!spiderman based on MapAndreas by Kye
 */

class HeightMap {
	Get(x,y){
		return 0.0;	
	}
}


class HeightMapFull extends HeightMap {
	constructor(filename){
		super();
		this.filename = filename;
		
		$fs.readFile(this.filename, function(data){
			this.map = data.toUint16Array();
		}.bind(this));
		
		
	}
	Get(x,y){
		let iGridX = Math.floor(x) + 3000;
		let iGridY = (Math.floor(y)-3000) * -1;
		let iDataPos3 = ((iGridY * 6000)+iGridX);
		return (this.map[iDataPos3]*0.01);
	}
}

class HeightMapNoBuffer extends HeightMap {
	constructor(filename){
		super();
		this.filename = filename;
		this.file = $fs.open(this.filename);
	}
	
	Get(x,y){
		let iGridX = (Math.floor(x)) + 3000;
		let iGridY = ((Math.floor(y))-3000) * -1;
		let iDataPos = (iGridY * 6000)+iGridX;
		let data = $fs.read(this.file,(iDataPos*2),2);
		let ab = data.toUint16Array();
		return (ab[0]*0.01);
	}
}

var fullmap = null;
var nobuffer = null;

exports.full = function(filename){
	if(fullmap) return fullmap;
	else return fullmap = new HeightMapFull(filename);
}

exports.nobuffer = function(filename){
	if(nobuffer) return nobuffer;
	else return nobuffer = new HeightMapNoBuffer(filename);
}