'use strict'

var express = require('express');
var PedidoController = require('../controller/pedido');

var api = express.Router();

api.get('/pedido/:id', PedidoController.findById);
api.post('/pedido', PedidoController.create);
api.put('/pedido/:id', PedidoController.update);
api.get('/pedido',PedidoController.findAll);
api.delete('/pedido/:id',PedidoController.remove);
//api.put('/update-user/:id', md_auth.ensureAuth, UserController.updateUser);

module.exports = api;