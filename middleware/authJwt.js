const jwt = require("jsonwebtoken");
const authConfig = require("../utils/auth.config.json");
const User = require("../models").user;

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    console.log(token);
    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        req.userId = decoded.id;
        next();
    });
};

const authJwt = {
    verifyToken: verifyToken
};

module.exports = authJwt;