'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlertaSchema = Schema({
  tipoAlerta: String,
  nombre: String,
  usuario: {type: Schema.ObjectId, ref: 'Usuario'}
});

module.exports = mongoose.model('Alerta', AlertaSchema);