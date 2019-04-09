const { once } = require('events');
const { createReadStream } = require('fs');
var fs = require('fs');
const { createInterface } = require('readline');

var interf = require('./loadinterface');
var token = require('./token');
//var rl = require('readline');
//var fs = require('fs');

exports.read = async function(fileName){
	// (async function processLineByLine() {

	 	try {
	 		var lCount = 0;
			var nCount = 0;
			var sCount = 0;
			var sdCount = 0;
			var cCount = 0;
			var cdCount = 0;
			var tbCount = 0;
			var file = __dirname + '../../../inputs/' + fileName;
			interf.load('tbk_00');

			const rl = createInterface({
		      input: createReadStream(file),
		      crlfDelay: Infinity
		    });

		    rl.on('line', (line) => {
			  //console.log('Line from file:', line);
			  var tc = line.substring(0,2);
			  lCount++;

			  switch (tc){
			  	case "  ":
			  		nCount = nCount + 1;
			  		break;
			  	case "05":
			  		sCount = sCount + 1;
			  		break;
			  }
console.log(lCount);
			});
			//await once(rl, 'close');
//rl.close();
console.log('File processed.');
			var response = {
				"null": nCount,
				"Sales": sCount,
				"Sales Devolution": sdCount,
				"Lines": lCount
			};

			exports.writeRespomse(response);
			//return response;
	 	} catch (err) {
	 	   console.error(err);
	 	}
	// })();
};


exports.writeRespomse = function(res){
	//const fs = require('fs');
	console.log('inicio write response');
	var fileName = token.getToken();
	var file = __dirname + '../../../outputs/' + fileName;
	fs.writeFile(file, JSON.stringify(res), function(err) {
	    if(err) {
	        return console.log(err);
	    }

	    console.log("The file was saved!");
	}); 

};


module.exports = exports;