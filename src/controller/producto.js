'use strict'
const producto = require('../model/producto');

function create(req, res) {
  let producto = new Producto(req.body);

  producto.save((err, productoStored) => {
    if (err) {
      res.status(500).send({ message: 'Error al guardar el producto' });
    } else {
      if (!productoStored) {
        res.status(404).send({ message: 'No se ha registrado el producto' });
      } else {
        res.status(200).send({ producto: productoStored });
      }
    }
  });

}

function findById(req, res) {
  Producto.findOne({ '_id': req.params.id }, (err, producto) => {
    if (err) {
      res.status(500).send(err);
    }
    if (valoracion) {
      res.status(200).send(producto);
    } else {
      res.status(404).send("No se ha encontrado el producto");
    }
  });
}

function update(req, res) {
  var productoId = req.params.id;
  var update = req.body;

  Producto.update(productoId, update, (err, productoUpdated) => {
    if (err) {
      res.status(500).send({ message: 'Error al actualizar el producto' });
    } else {
      if (!productoUpdated) {
        res.status(404).send({ message: 'No se ha podido actualizar el producto' });
      } else {
        res.status(200).send({ producto: productoUpdated });
      }
    }
  });

}

function remove(req,res){
  var productoId = req.params.id;

  Producto.delete(productoId, (err, producto) => {
    if (err) {
      res.status(500).send({ message: 'Error al eliminar el producto' });
    } else {
      if (!producto) {
        res.status(404).send({ message: 'No se ha podido eliminar el producto' });
      } else {
        res.status(200).send({ producto: producto });
      }
    }
  });
}

function findAll(req,res){
  Producto.find({ '_id': req.params.id }, (err, producto) => {
    if (err) {
      res.status(500).send(err);
    }
    if (producto) {
      res.status(200).send(producto);
    } else {
      res.status(404).send("No se han encontrado los productos");
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