'use strict'
const Permiso = require('../model/permiso');

function create(req, res) {
  let permiso = new Permiso(req.body);

  permiso.save((err, permisoStored) => {
    if (err) {
      res.status(500).send({ message: 'Error al guardar el permiso' });
    } else {
      if (!permisoStored) {
        res.status(404).send({ message: 'No se ha registrado el permiso' });
      } else {
        res.status(200).send({ permiso: permisoStored });
      }
    }
  });

}

function findById(req, res) {
  Permiso.findOne({ '_id': req.params.id }, (err, permiso) => {
    if (err) {
      res.status(500).send(err);
    }
    if (valoracion) {
      res.status(200).send(permiso);
    } else {
      res.status(404).send("No se ha encontrado el permiso");
    }
  });
}

function update(req, res) {
  var permisoId = req.params.id;
  var update = req.body;

  Permiso.update(permisoId, update, (err, permisoUpdated) => {
    if (err) {
      res.status(500).send({ message: 'Error al actualizar el permiso' });
    } else {
      if (!permisoUpdated) {
        res.status(404).send({ message: 'No se ha podido actualizar el permiso' });
      } else {
        res.status(200).send({ permiso: permisoUpdated });
      }
    }
  });

}

function remove(req,res){
  var permisoId = req.params.id;

  Permiso.delete(permisoId, (err, permiso) => {
    if (err) {
      res.status(500).send({ message: 'Error al eliminar el permiso' });
    } else {
      if (!permiso) {
        res.status(404).send({ message: 'No se ha podido eliminar el permiso' });
      } else {
        res.status(200).send({ permiso: permiso });
      }
    }
  });
}

function findAll(req,res){
  Permiso.find((err, permisos) => {
    if (err) {
      res.status(500).send(err);
    }
    if (permisos) {
      res.status(200).send(permisos);
    } else {
      res.status(404).send("No se han encontrado los permisos");
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