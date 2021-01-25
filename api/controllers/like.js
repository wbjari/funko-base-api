const Like = require('../../models').Like;
const User = require('../../models').User;
const httpStatus = require('http-status');

exports.load = (req, res, next, id) => {
    this.id = id;
    return Like.findByPk(id)
        .then((like) => {
            req.like = like;
            return next();
        })
        .catch(error => res.status(httpStatus.BAD_GATEWAY).send(error))
}

exports.remove = (req, res) => {
    console.log(req.params.funkoId);
    return Like.destroy({
        where: {
            funkoId: req.params.funkoId,
            userId: req.userId
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

exports.create = (req, res) => {
    return Like.count({ where: { 
        funkoId: req.body.funkoId, 
        userId: req.userId }
    }).then(count => {
        if (count == 0) {
            Like.create({
                funkoId: req.body.funkoId,
                userId: req.userId
            })
                .then(like => res.status(httpStatus.OK).send(like))
                .catch(error => res.status(httpStatus.BAD_GATEWAY).send(error));
        } else {
            res.status(httpStatus.ALREADY_REPORTED).send(error);
        }
    })
    
    
}

exports.getAll = (req, res) => {
    return Like.findAll({})
        .then(result => res.status(httpStatus.OK).send(result))
        .catch(error => res.status(httpStatus.BAD_GATEWAY).send(error));
}

exports.getAllByFunko = (req, res) => {
    return Like.findAll({
        where: { funkoId: req.params.funkoId },
        include: { 
            model: User, 
            attributes: ["username"] 
        }
    })
        .then(result => res.status(httpStatus.OK).send(result))
        .catch(error => res.status(httpStatus.BAD_GATEWAY).send(error));
}
