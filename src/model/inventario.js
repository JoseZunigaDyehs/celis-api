'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InventarioSchema = Schema({
  productos: [],
  total: Number,
  costo: Number
});

module.exports = mongoose.model('Inventario', InventarioSchema);