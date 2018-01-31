'use strict'
var express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');

var app = express();
// cargar rutas
// var user_routes = require('./routes/user');
// var service_routes = require('./routes/service');
// var valoracion_routes = require('./routes/valoracion');
// var index_routes = require('./routes/index');

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(logger('dev'));

// configuracion view engine
// app.set('views',path.join(__dirname,'/views'));
// app.set('view engine','ejs');
// app.use(express.static('assets'));

// rutas base
app.use('/api', user_routes);

module.exports = app;