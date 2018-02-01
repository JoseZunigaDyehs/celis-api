'use strict'
var express = require('express');
var bodyParser = require('body-parser');
//const path = require('path');
const logger = require('morgan');

var app = express();
// cargar rutas
var alerta_routes = require('./routes/alerta');
var carro_routes = require('./routes/carro');
var inventario_routes = require('./routes/inventario');
var pedido_routes = require('./routes/pedido');
var permiso_routes = require('./routes/permiso');
var producto_routes = require('./routes/producto');
var rol_routes = require('./routes/rol');
var usuario_routes = require('./routes/usuario');

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(logger('dev'));

// configuracion view engine
// app.set('views',path.join(__dirname,'/views'));
// app.set('view engine','ejs');
// app.use(express.static('assets'));

// rutas base
app.use('/api', alerta_routes);
app.use('/api', carro_routes);
app.use('/api', inventario_routes);
app.use('/api', pedido_routes);
app.use('/api', permiso_routes);
app.use('/api', producto_routes);
app.use('/api', rol_routes);
app.use('/api', usuario_routes);

module.exports = app;