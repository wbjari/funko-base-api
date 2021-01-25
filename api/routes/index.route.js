'user strict';
const express = require('express');

const authRoutes = require ('./auth.route');
const userRoutes = require ('./user.route');
const serieRoutes = require ('./serie.route');
const funkoRoutes = require ('./funko.route');
const likeRoutes = require ('./like.route');

const router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
    res.send('OK')
);

router.use('/auth', authRoutes);

// mount user routes at /user
router.use('/user', userRoutes);

// mount serie routes at /series
router.use('/serie', serieRoutes);

// mount funko routes at /funko
router.use('/funko', funkoRoutes);

// mount like routes at /like
router.use('/like', likeRoutes);

module.exports = router;