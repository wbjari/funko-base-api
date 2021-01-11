const serieController = require('../controllers').serie;
const funkoController = require('../controllers').funko;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the FunkoBase API!',
    }));

    /** Serie routes */
    app.post('/api/serie', serieController.create);

    /** Funko routes */
    app.post('/api/funko', funkoController.create);
}