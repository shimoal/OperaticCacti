var express = require('express');
var path = require('path');
var compression = require('compression');
var app = express();
app.use(compression());
var morgan = require('morgan');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 1337;
var controllers = require('./controllers.js');



app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../public')));


app.get('/allTours', function (req, res) {
  controllers.tours.getAll(req, res);
});

app.get('/tours/:id', function (req, res) {
  controllers.tours.getOne(req, res);
});


app.listen(PORT, function() {
  console.log('Listening on port ' + PORT + '...');
});