const express = require('express');
const authController = require("../controllers/auth.js");
const { verifySignUp } = require("../../middleware");

const router = express.Router();

router.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

router.post("/signup", [ verifySignUp.checkDuplicateUsername ], authController.signup);

router.post("/signin", authController.signin);

// router.post ("/signout", authController.signOut);

module.exports = router;