'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = Schema({
  rut: String,
  nombre: String,
  apellido: String,
  email: String,
  telefono: String,
  direccion: String,
  password: String,
  rol: String,
  image: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);