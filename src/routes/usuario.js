'use strict'

var express = require('express');
var UsuarioController = require('../');

var api = express.Router();

api.get('/usuario/:id', UsuarioController.findById);
api.post('/usuario', UsuarioController.create);
api.put('/usuario/:id', UsuarioController.update);
api.get('/usuarios',UsuarioController.findAll);
api.delete('/usuario/:id',UsuarioController.delete);
//api.put('/update-user/:id', md_auth.ensureAuth, UserController.updateUser);

module.exports = api;