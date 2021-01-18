const express = require('express');
const expressJwt = require('express-jwt');
const authConfig = require('../../config/auth.config');
const funkoController = require('../controllers').funko;
const { authJwt } = require("../../middleware"); 

const router = express.Router();

const jwt = expressJwt({ secret: authConfig.secret, algorithms: ['HS256'] })

router.route('/')
    /** GET /api/funko - Get all funkos */
    .get(funkoController.getAll)

    /** POST /api/funko - Create new funko */
    .post([authJwt.verifyToken], funkoController.create);

router.route('/:funkoId')
    /** GET /api/funko/:funkoId - Get funko */
    .get(funkoController.get)

    /** PUT /api/funko/:funkoId - Update funko */
    .put([authJwt.verifyToken], funkoController.update)

    /** DELETE /api/funko/:funkoId - Delete funko */
    .delete([authJwt.verifyToken], funkoController.remove);

/** Load funko when API with funkoId route parameter is hit */
router.param('funkoId', funkoController.load);

module.exports = router;

// OLD

// const serieController = require('../controllers').serie;
// const funkoController = require('../controllers').funko;
// const { authJwt } = require("../middleware"); 

// module.exports = (app) => {
//     app.use(function (req, res, next) {
//         res.header(
//             "Access-Control-Allow-Headers",
//             "x-access-token, Origin, Content-Type, Accept"
//         );
//         next();
//     });

//     app.get('/api', (req, res) => res.status(200).send({
//         message: 'Welcome to the FunkoBase API!',
//     }));

//     /** Serie routes */
//     app.post('/api/serie', serieController.create);

//     /** Funko routes */
//     app.post('/api/funko', [authJwt.verifyToken],  funkoController.create);
// }