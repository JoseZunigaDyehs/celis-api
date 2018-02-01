'use strict'
const Inventario = require('../model/inventario');

function create(req, res) {
  let inventario = new Inventario(req.body);

  inventario.save((err, inventarioStored) => {
    if (err) {
      res.status(500).send({ message: 'Error al guardar el inventario' });
    } else {
      if (!inventarioStored) {
        res.status(404).send({ message: 'No se ha registrado el inventario' });
      } else {
        res.status(200).send({ inventario: inventarioStored });
      }
    }
  });

}

function findById(req, res) {
  Inventario.findOne({ '_id': req.params.id }, (err, inventario) => {
    if (err) {
      res.status(500).send(err);
    }
    if (valoracion) {
      res.status(200).send(inventario);
    } else {
      res.status(404).send("No se ha encontrado el inventario");
    }
  });
}

function update(req, res) {
  var inventarioId = req.params.id;
  var update = req.body;

  Inventario.update(inventarioId, update, (err, inventarioUpdated) => {
    if (err) {
      res.status(500).send({ message: 'Error al actualizar el inventario' });
    } else {
      if (!inventarioUpdated) {
        res.status(404).send({ message: 'No se ha podido actualizar el inventario' });
      } else {
        res.status(200).send({ inventario: inventarioUpdated });
      }
    }
  });

}

function remove(req,res){
  var inventarioId = req.params.id;

  Inventario.delete(inventarioId, (err, inventario) => {
    if (err) {
      res.status(500).send({ message: 'Error al eliminar el inventario' });
    } else {
      if (!inventario) {
        res.status(404).send({ message: 'No se ha podido eliminar el inventario' });
      } else {
        res.status(200).send({ inventario: inventario });
      }
    }
  });
}

function findAll(req,res){
  Inventario.find((err, inventarios) => {
    if (err) {
      res.status(500).send(err);
    }
    if (inventarios) {
      res.status(200).send(inventarios);
    } else {
      res.status(404).send("No se han encontrado los inventarios");
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