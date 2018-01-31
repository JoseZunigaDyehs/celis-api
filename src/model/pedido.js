'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PedidoSchema = Schema({
  nombre: String,
  descripcion: String,
  cantidadCarro: Number,
  cantidadFaltante: Number,
  carro: {type: Schema.ObjectId, ref: 'Carro'}
});

module.exports = mongoose.model('Pedido', PedidoSchema);