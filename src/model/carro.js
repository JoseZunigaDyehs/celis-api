'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CarroSchema = Schema({
  numero: String,
  ubicacion: String,
  stock: Number,
  stockIdeal: Number,
  productos: [],
  inventario: {type: Schema.ObjectId, ref: 'Inventario'}
});

module.exports = mongoose.model('Carro', CarroSchema);