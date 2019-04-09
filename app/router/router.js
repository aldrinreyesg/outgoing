var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  //res.send('Outgoing Transbank Parser');
  //app.use(express.static(__dirname + '/public'));
  res.render('index.ejs');
});

module.exports = router;