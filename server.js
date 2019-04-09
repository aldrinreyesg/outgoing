
var express = require('express');
var app = express();

//config
const port = 3000;

app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/node_modules/jquery/dist'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//router
var router = require('./app/router/router');
app.use('/', router);
var api = require('./app/router/api');
app.use('/api', api);

app.listen(port, function () {
  console.log('Outgoing Processor app listening on port ' + port + '!');
});