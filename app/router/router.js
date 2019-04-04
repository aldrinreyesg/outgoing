var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	console.log(test);
  res.send('About this wiki');
});

module.exports = router;