'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PermisoSchema = Schema({
  nombre: String,
  descripcion: String,
  fecha: Date,
  rol: Number,
  carro: {type: Schema.ObjectId, ref: 'Carro'}
});

module.exports = mongoose.model('Permiso', PermisoSchema);