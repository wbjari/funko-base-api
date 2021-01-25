const express = require('express');
const expressJwt = require('express-jwt');
const authConfig = require('../../config/auth.config');
const likeController = require('../controllers').like;
const { authJwt } = require("../../middleware");

const router = express.Router();

const jwt = expressJwt({ secret: authConfig.secret, algorithms: ['HS256'] })

router.route('/')
    /** GET /api/like - Get all likes */
    .get(likeController.getAll)

    /** POST /api/like - Create new like */
    .post([authJwt.verifyToken], likeController.create);
    
router.route('/byFunko/:funkoId')
    /* GET /api/like/byFunko/:funkoId - Get all likes by funko */
    .get([authJwt.verifyToken], likeController.getAllByFunko)

router.route('/:funkoId')
    /** DELETE /api/like/:funkoId - Delete like */
    .delete([authJwt.verifyToken], likeController.remove);

/** Load like when API with likeId route parameter is hit */
router.param('likeId', likeController.load);

module.exports = router;