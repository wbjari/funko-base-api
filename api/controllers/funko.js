const Funko = require('../../models').Funko;
const Serie = require('../../models').Serie;
const Like = require('../../models').Like;
const User = require('../../models').User;
const httpStatus = require('http-status');

exports.load = (req, res, next, id) => {
    this.id = id;
    return Funko.findOne({
        where: {id: this.id}
    })
        .then((funko) => {
            req.funko = funko;
            return next();
        })
        .catch(error => res.status(httpStatus.BAD_GATEWAY).send(error))
}

exports.update = (req, res) => {
    return Funko.update({
        name: req.body.name,
        number: req.body.number,
        description: req.body.description,
        serieId: req.body.serieId
    }, {
        where: {id: this.id, userId: req.userId}
    })
    .then(funko => res.status(httpStatus.OK).send(funko))
    .catch(error => res.status(httpStatus.BAD_GATEWAY).send(error));
}

exports.remove = (req, res) => {
    return Funko.destroy({
        where: {
            id: this.id
        }
    })
    .then((result) => {
        if(result == 1) {
            res.send(true);
        } else {
            res.send(false);
        }
    });
}

exports.get = (req, res) => {
    if (req.funko === null) {
        return res.status(httpStatus.NOT_FOUND).json();
    } else {
        return res.status(httpStatus.OK).json(req.funko);
    }
}

exports.create = (req, res) => {
    return Funko.create({
        name: req.body.name,
        number: req.body.number,
        description: req.body.description,
        userId: req.userId,
        serieId: req.body.serieId
    })
    .then(funko => res.status(httpStatus.OK).send(funko))
    .catch(error => res.status(httpStatus.BAD_GATEWAY).send(error));
}

exports.getAll = (req, res) => {
    return Funko.findAll({
        include: { all: true, nested: true, attributes: { exclude: ['password'] } },
        order: [
            ['serieId', 'ASC'],
            ['number', 'ASC']
        ]
    })
        .then(result => res.status(httpStatus.OK).send(result))
        .catch(error => res.status(httpStatus.BAD_GATEWAY).send(error));
}
