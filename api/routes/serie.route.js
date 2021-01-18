const express = require('express');
const expressJwt = require('express-jwt');
const authConfig = require('../../config/auth.config');
const serieController = require('../controllers').serie;
const { authJwt } = require("../../middleware");

const router = express.Router();

const jwt = expressJwt({ secret: authConfig.secret, algorithms: ['HS256'] })

router.route('/')
    /** GET /api/serie - Get all series */
    // .get(serieController.getAll)

    /** POST /api/serie - Create new serie */
    .post(jwt, serieController.create);

// router.route('/:serieId')
/** GET /api/serie/:serieId - Get serie */
// .get(serieController.get)

/** PUT /api/serie/:serieId - Update serie */
// .put(expressJwt({ secret: authConfig.secret }), serieController.update)

/** DELETE /api/serie/:serieId - Delete serie */
// .delete(expressJwt({ secret: authConfig.secret }), serieController.remove);

/** Load serie when API with serieId route parameter is hit */
// router.param('serieId', serieController.load);

module.exports = router;