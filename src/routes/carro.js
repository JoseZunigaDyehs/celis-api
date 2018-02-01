'use strict'

var express = require('express');
var CarroController = require('../controller/carro');

var api = express.Router();

api.get('/carro/:id', CarroController.findById);
api.post('/carro', CarroController.create);
api.put('/carro/:id', CarroController.update);
api.get('/carro',CarroController.findAll);
api.delete('/carro/:id',CarroController.remove);
//api.put('/update-user/:id', md_auth.ensureAuth, UserController.updateUser);

module.exports = api;