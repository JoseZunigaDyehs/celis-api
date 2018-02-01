'use strict'
const Carro = require('../model/carro');

function create(req, res) {
  let carro = new Carro(req.body);

  carro.save((err, carroStored) => {
    if (err) {
      res.status(500).send({ message: 'Error al guardar el carro' });
    } else {
      if (!carroStored) {
        res.status(404).send({ message: 'No se ha registrado el carro' });
      } else {
        res.status(200).send({ carro: carroStored });
      }
    }
  });

}

function findById(req, res) {
  Carro.findOne({ '_id': req.params.id }, (err, carro) => {
    if (err) {
      res.status(500).send(err);
    }
    if (carro) {
      res.status(200).send(carro);
    } else {
      res.status(404).send("No se ha encontrado el carro");
    }
  });
}

function update(req, res) {
  var carroId = req.params.id;
  var update = req.body;

  Carro.update(carroId, update, (err, carroUpdated) => {
    if (err) {
      res.status(500).send({ message: 'Error al actualizar el carro' });
    } else {
      if (!carroUpdated) {
        res.status(404).send({ message: 'No se ha podido actualizar el carro' });
      } else {
        res.status(200).send({ carro: carroUpdated });
      }
    }
  });

}

function remove(req,res){
  var carroId = req.params.id;

  Carro.delete(carroId, (err, carro) => {
    if (err) {
      res.status(500).send({ message: 'Error al eliminar el carro' });
    } else {
      if (!carro) {
        res.status(404).send({ message: 'No se ha podido eliminar el carro' });
      } else {
        res.status(200).send({ carro: carro });
      }
    }
  });
}

function findAll(req,res){
  Carro.find((err, carros) => {
    if (err) {
      res.status(500).send(err);
    }
    if (carros) {
      res.status(200).send(carros);
    } else {
      res.status(404).send("No se han encontrado los carros");
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