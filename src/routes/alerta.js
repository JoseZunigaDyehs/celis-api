'use strict'

var express = require('express');
var AlertaController = require('../controller/alerta');

var api = express.Router();

api.get('/alerta/:id', AlertaController.findById);
api.post('/alerta', AlertaController.create);
api.put('/alerta/:id', AlertaController.update);
api.get('/alerta',AlertaController.findAll);
api.delete('/alerta/:id',AlertaController.remove);
//api.put('/update-user/:id', md_auth.ensureAuth, UserController.updateUser);

module.exports = api;