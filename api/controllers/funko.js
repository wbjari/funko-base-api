const Funko = require('../../models').Funko;

module.exports = {
    create(req, res) {
        return Funko
        .create({
            name: req.body.name,
            number: req.body.number,
            description: req.body.description
        })
        .then(funko => res.status(201).send(funko))
        .catch(error => res.status(400).send(error));
    }
}