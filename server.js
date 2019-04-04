
var express = require('express');
var app = express();
var Config = require('node-json-config');
var conf = new Config("./app/config.json");
//var interf = require('./app/utils/loadinterface');

global.test = "asdads";

//router
var router = require('./app/router/router');
app.use('/', router);
var api = require('./app/router/api');
app.use('/api', api);

console.log(conf);
app.listen(conf.get('port'), function () {
  console.log('Example app listening on port ' + conf.get('port') + '!');
});