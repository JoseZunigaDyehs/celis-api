'use strict'
const Rol = require('../model/rol');

function create(req, res) {
  let rol = new Rol(req.body);

  rol.save((err, rolStored) => {
    if (err) {
      res.status(500).send({ message: 'Error al guardar el rol' });
    } else {
      if (!rolStored) {
        res.status(404).send({ message: 'No se ha registrado el rol' });
      } else {
        res.status(200).send({ rol: rolStored });
      }
    }
  });

}

function findById(req, res) {
  Rol.findOne({ '_id': req.params.id }, (err, rol) => {
    if (err) {
      res.status(500).send(err);
    }
    if (valoracion) {
      res.status(200).send(rol);
    } else {
      res.status(404).send("No se ha encontrado el rol");
    }
  });
}

function update(req, res) {
  var rolId = req.params.id;
  var update = req.body;

  Rol.update(rolId, update, (err, rolUpdated) => {
    if (err) {
      res.status(500).send({ message: 'Error al actualizar el rol' });
    } else {
      if (!rolUpdated) {
        res.status(404).send({ message: 'No se ha podido actualizar el rol' });
      } else {
        res.status(200).send({ rol: rolUpdated });
      }
    }
  });

}

function remove(req,res){
  var rolId = req.params.id;

  Rol.delete(rolId, (err, rol) => {
    if (err) {
      res.status(500).send({ message: 'Error al eliminar el rol' });
    } else {
      if (!rol) {
        res.status(404).send({ message: 'No se ha podido eliminar el rol' });
      } else {
        res.status(200).send({ rol: rol });
      }
    }
  });
}

function findAll(req,res){
  Rol.find({ '_id': req.params.id }, (err, roles) => {
    if (err) {
      res.status(500).send(err);
    }
    if (roles) {
      res.status(200).send(roles);
    } else {
      res.status(404).send("No se han encontrado los roles");
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