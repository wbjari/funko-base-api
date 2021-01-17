const Serie = require('../../models').Serie;

module.exports = {
    create(req, res) {
return Serie
    .create({
        name: req.body.name
    })
    .then(serie => res.status(201).send(serie))
    .catch(error => res.status(400).send(error));
    }
}