var julian = require('julian');
var moment = require('moment');

exports.julianNow = function(){
	var now = new Date();
	return julian(now);
};

exports.toJulian = function(date){
	
	var newJulian = julian(date);
	return newJulian;
};

exports.fromJulian = function(date){
	//console.log(date.substring(2,5));
	var newDate = new Date(2000 + parseInt(date.substring(0,2)), 0,1);
	var days = date.substring(2,5);
	//console.log(newDate);
	//var xxDate = new Date();
	//xxDate.setDate(newDate.getDate() + days);
	//console.log(xxDate);
	var mt = moment(newDate);
	
	return mt.add(days -1, 'days').format('YYYY-MM-DD');
};



module.exports = exports;