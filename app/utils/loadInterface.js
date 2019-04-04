var fs = require('fs');


interf.loadIso = function(){
	var file = './../interfaces/iso.json';
	var obj = JSON.parse(fs.readFileSync(file, 'utf8'));
	return JSON.parse(obj);
}


interf.load = function(){
	return interf.loadIso();
}


module.exports = interf;