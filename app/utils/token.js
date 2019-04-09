var crypto = require('crypto');

exports.getToken = function(){
	var token = crypto.randomBytes(64).toString('hex').substring(0,24);
	return token;
};

module.exports = exports;