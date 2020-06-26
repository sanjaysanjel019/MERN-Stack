const {
    verify
} = require('jsonwebtoken');
const {
    JWT_ACCESS_SECRET_KEY
} = require('../config')
const {
    User
} = require('../models');

exports.auth = async (req, res, next) => {
    /*
    Get autorization header from request and then check it. We then verify our JWT.
    */
    const authorization = req.headers.authorization;
    console.log(headerData);

    if (req.path == "/api/login") {
        next();
        return;
    }
    if (!authorization) throw new Error("Unauthorized")
    const accessToken = authorization.split(' ')[1]; //We do this becausewe get authorization in form af an array as Authtoken in ins 2nd place of the array
    const access_payload = verify(accessToken, JWT_ACCESS_SECRET_KEY);
    if (!access_payload) {
        throw new Error("Unauthorized");
    }

    if (access_payload.type !== 'accessToken') {
        throw new Error("Unauthorized");
    }

    const user = await User.findById(access_payload.userId);
    if (!user) {
        throw new Error("User not found");
    }
    next();
}