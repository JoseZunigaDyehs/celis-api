'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = Schema({
  nombre: String,
  precio: Number,
  stock: Number,
  costo: Number,
  fechaCompra: Date,
  fechaVencimiento: Date
});

module.exports = mongoose.model('Producto', ProductoSchema);