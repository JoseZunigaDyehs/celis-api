'use strict'
const Usuario = require('../model/usuario');

function create(req, res) {
  let usuario = new Usuario(req.body);

  usuario.save((err, usuarioStored) => {
    if (err) {
      res.status(500).send({ message: 'Error al guardar el usuario' });
    } else {
      if (!usuarioStored) {
        res.status(404).send({ message: 'No se ha registrado el usuario' });
      } else {
        res.status(200).send({ usuario: usuarioStored });
      }
    }
  });

}

function findById(req, res) {
  Usuario.findOne({ '_id': req.params.id }, (err, usuario) => {
    if (err) {
      res.status(500).send(err);
    }
    if (valoracion) {
      res.status(200).send(usuario);
    } else {
      res.status(404).send("No se ha encontrado el usuario");
    }
  });
}

function update(req, res) {
  var usuarioId = req.params.id;
  var update = req.body;

  Usuario.update(usuarioId, update, (err, usuarioUpdated) => {
    if (err) {
      res.status(500).send({ message: 'Error al actualizar el usuario' });
    } else {
      if (!usuarioUpdated) {
        res.status(404).send({ message: 'No se ha podido actualizar el usuario' });
      } else {
        res.status(200).send({ usuario: usuarioUpdated });
      }
    }
  });

}

function remove(req,res){
  var usuarioId = req.params.id;

  Usuario.delete(usuarioId, (err, usuario) => {
    if (err) {
      res.status(500).send({ message: 'Error al eliminar el usuario' });
    } else {
      if (!usuario) {
        res.status(404).send({ message: 'No se ha podido eliminar el usuario' });
      } else {
        res.status(200).send({ usuario: usuario });
      }
    }
  });
}

function findAll(req,res){
  Usuario.find((err, usuarios) => {
    if (err) {
      res.status(500).send(err);
    }
    if (usuarios) {
      res.status(200).send(usuarios);
    } else {
      res.status(404).send("No se han encontrado los usuarios");
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