var express = require('express');
var router = express.Router();
var isoq = require('../utils/iso');

router.get('/', function (req, res) {
	console.log(req);
	res.send('About this api');
});

router.get('/iso/read/:isoMsg', function (req, res) {
	//console.log(req.params.isoMsg);
	iso = req.params.isoMsg;
	
	//console.log(jsonMsg);
	//validMti(iso);
	res.send(isoq.parseIso(iso));
});

module.exports = router;