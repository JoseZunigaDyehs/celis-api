'use strict'

var express = require('express');
var InventarioController = require('../controller/inventario');

var api = express.Router();

api.get('/inventario/:id', InventarioController.findById);
api.post('/inventario', InventarioController.create);
api.put('/inventario/:id', InventarioController.update);
api.get('/inventario',InventarioController.findAll);
api.delete('/inventario/:id',InventarioController.remove);
//api.put('/update-user/:id', md_auth.ensureAuth, UserController.updateUser);

module.exports = api;