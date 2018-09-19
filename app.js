var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var db = require('./db');
var routes = require('./src/routes/appRouter');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

module.exports = app;