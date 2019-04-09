var express = require('express');
var router = express.Router();
var jd = require('../utils/dateConv');
var tbk = require('../utils/tbk');
var token = require('../utils/token');
//var isoq = require('../utils/iso');

router.get('/', function (req, res) {
	console.log(req);
	res.send('About this api');
});

router.get('/Julian/', function (req, res) {
	res.send(jd.julianNow());
});

router.get('/toJulian/:date', function (req, res) {
	res.send(jd.toJulian(req.params.date));
});

router.get('/fromJulian/:date', function (req, res) {
	res.send(jd.fromJulian(req.params.date));
});

router.get('/tbk/read', function (req, res) {
	//var xx = interf.load('tbk_00');
	//console.log(xx);
	//iso = req.params.isoMsg;
	res.send(tbk.read('OUP4912241.DAT'));
});

router.get('/tbk/read/:file', function (req, res) {
	res.send(interf.load(req.params.file));
});

router.get('/token', function(req, res){
	res.send(token.getToken());
});

module.exports = router;