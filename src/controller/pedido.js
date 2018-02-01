'use strict'
const Pedido = require('../model/pedido');

function create(req, res) {
  let pedido = new Pedido(req.body);

  pedido.save((err, pedidoStored) => {
    if (err) {
      res.status(500).send({ message: 'Error al guardar el pedido' });
    } else {
      if (!pedidoStored) {
        res.status(404).send({ message: 'No se ha registrado el pedido' });
      } else {
        res.status(200).send({ pedido: pedidoStored });
      }
    }
  });

}

function findById(req, res) {
  Pedido.findOne({ '_id': req.params.id }, (err, pedido) => {
    if (err) {
      res.status(500).send(err);
    }
    if (valoracion) {
      res.status(200).send(pedido);
    } else {
      res.status(404).send("No se ha encontrado el pedido");
    }
  });
}

function update(req, res) {
  var pedidoId = req.params.id;
  var update = req.body;

  Pedido.update(pedidoId, update, (err, pedidoUpdated) => {
    if (err) {
      res.status(500).send({ message: 'Error al actualizar el pedido' });
    } else {
      if (!pedidoUpdated) {
        res.status(404).send({ message: 'No se ha podido actualizar el pedido' });
      } else {
        res.status(200).send({ pedido: pedidoUpdated });
      }
    }
  });

}

function remove(req,res){
  var pedidoId = req.params.id;

  Pedido.delete(pedidoId, (err, pedido) => {
    if (err) {
      res.status(500).send({ message: 'Error al eliminar el pedido' });
    } else {
      if (!pedido) {
        res.status(404).send({ message: 'No se ha podido eliminar el pedido' });
      } else {
        res.status(200).send({ pedido: pedido });
      }
    }
  });
}

function findAll(req,res){
  Pedido.find((err, pedidos) => {
    if (err) {
      res.status(500).send(err);
    }
    if (pedidos) {
      res.status(200).send(pedidos);
    } else {
      res.status(404).send("No se han encontrado los pedidos");
    }
  });
}

module.exports = {
  create,
  findById,
  update,
  remove,
  findAll
};