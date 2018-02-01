'use strict'
const Alerta = require('../model/alerta');

function create(req, res) {
  let alerta = new Alerta(req.body);

  alerta.save((err, alertaStored) => {
    if (err) {
      res.status(500).send({ message: 'Error al guardar la alerta' });
    } else {
      if (!alertaStored) {
        res.status(404).send({ message: 'No se ha registrado la alerta' });
      } else {
        res.status(200).send({ alerta: alertaStored });
      }
    }
  });

}

function findById(req, res) {
  Alerta.findOne({ '_id': req.params.id }, (err, alerta) => {
    if (err) {
      res.status(500).send(err);
    }
    if (valoracion) {
      res.status(200).send(alerta);
    } else {
      res.status(404).send("No se ha encontrado la alerta");
    }
  });
}

function update(req, res) {
  var alertaId = req.params.id;
  var update = req.body;

  Alerta.update(alertaId, update, (err, alertaUpdated) => {
    if (err) {
      res.status(500).send({ message: 'Error al actualizar la alerta' });
    } else {
      if (!alertaUpdated) {
        res.status(404).send({ message: 'No se ha podido actualizar la alerta' });
      } else {
        res.status(200).send({ alerta: alertaUpdated });
      }
    }
  });

}

function remove(req,res){
  var alertaId = req.params.id;

  Alerta.delete(alertaId, (err, alerta) => {
    if (err) {
      res.status(500).send({ message: 'Error al eliminar la alerta' });
    } else {
      if (!alerta) {
        res.status(404).send({ message: 'No se ha podido eliminar la alerta' });
      } else {
        res.status(200).send({ alerta: alerta });
      }
    }
  });
}

function findAll(req,res){
  Alerta.find((err, alertas) => {
    if (err) {
      res.status(500).send(err);
    }
    if (alertas) {
      res.status(200).send(alertas);
    } else {
      res.status(404).send("No se han encontrado las alertas");
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