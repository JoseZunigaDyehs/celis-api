'use strict'

var express = require('express');
var ProductoController = require('../controller/producto');

var api = express.Router();

api.get('/producto/:id', ProductoController.findById);
api.post('/producto', ProductoController.create);
api.put('/producto/:id', ProductoController.update);
api.get('/producto',ProductoController.findAll);
api.delete('/producto/:id',ProductoController.remove);
//api.put('/update-user/:id', md_auth.ensureAuth, UserController.updateUser);

module.exports = api;