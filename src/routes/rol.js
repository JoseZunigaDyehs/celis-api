'use strict'

var express = require('express');
var RolController = require('../controller/rol');

var api = express.Router();

api.get('/rol/:rol', RolController.findById);
api.post('/rol', RolController.create);
api.put('/rol/:id', RolController.update);
api.get('/rol',RolController.findAll);
api.delete('/rol/:id',RolController.remove);
//api.put('/update-user/:id', md_auth.ensureAuth, UserController.updateUser);

module.exports = api;