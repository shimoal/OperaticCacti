var express = require('express');
var path = require('path');
app.use(compression());

var app = express();

var morgan = require('morgan');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var PORT = process.env.PORT || 1337;

var compression = require('compression');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../public')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});



app.listen(PORT, function() {
  console.log('Listening on port ' + PORT + '...');
});