'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RolSchema = Schema({
  rol: Number,
  nombre: String,
  descripcion: String
});

module.exports = mongoose.model('Rol', RolSchema);