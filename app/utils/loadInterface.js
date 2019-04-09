var fs = require('fs');

exports.load = function(fileName){
	//var jsonData = "";
	var file = 'app/interfaces/' + fileName + '.json';
	var obj = JSON.parse(fs.readFileSync(file, 'utf8'));
	// console.log(obj);
	// try{
	// 	jsonData = JSON.parse(obj);
	// }catch(err){
	// 	console.error(err)
	// }
	return obj;
}

module.exports = exports;