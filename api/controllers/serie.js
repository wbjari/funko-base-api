const Serie = require('../../models').Serie;
const httpStatus = require('http-status');

exports.load = (req, res, next, id) => {
    this.id = id;
    return Serie.findByPk(id)
        .then((serie) => {
            req.serie = serie;
            return next();
        })
        .catch(error => res.status(httpStatus.BAD_GATEWAY).send(error))
}

// exports.update = (req, res) => {
//     return Serie.update({
//         name: req.body.name
//     }, {
//         where: { id: this.id, userId: req.userId }
//     })
//         .then(serie => res.status(httpStatus.OK).send(serie))
//         .catch(error => res.status(httpStatus.BAD_GATEWAY).send(error));
// }

exports.remove = (req, res) => {
    return Serie.destroy({
        where: {
            id: this.id
        }
    })
        .then((result) => {
            if (result == 1) {
                res.send(true);
            } else {
                res.send(false);
            }
        });
}

exports.get = (req, res) => {
    if (req.serie === null) {
        return res.status(httpStatus.NOT_FOUND).json();
    } else {
        return res.status(httpStatus.OK).json(req.serie);
    }
}

exports.create = (req, res) => {
    return Serie.create({
        name: req.body.name,
        userId: req.userId
    })
        .then(serie => res.status(httpStatus.OK).send(serie))
        .catch(error => res.status(httpStatus.BAD_GATEWAY).send(error));
}

exports.getAll = (req, res) => {
    return Serie.findAll({})
        .then(result => res.status(httpStatus.OK).send(result))
        .catch(error => res.status(httpStatus.BAD_GATEWAY).send(error));
}

exports.getAllByUser = (req, res) => {
    console.log(req.userId);
    return Serie.findAll({
        where: {userId: req.userId}
    })
        .then(result => res.status(httpStatus.OK).send(result))
        .catch(error => res.status(httpStatus.BAD_GATEWAY).send(error));
}
