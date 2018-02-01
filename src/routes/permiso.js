'use strict'

var express = require('express');
var PermisoController = require('../controller/permiso');

var api = express.Router();

api.get('/permiso/:id', PermisoController.findById);
api.post('/permiso', PermisoController.create);
api.put('/permiso/:id', PermisoController.update);
api.get('/permiso',PermisoController.findAll);
api.delete('/permiso/:id',PermisoController.remove);
//api.put('/update-user/:id', md_auth.ensureAuth, UserController.updateUser);

module.exports = api;