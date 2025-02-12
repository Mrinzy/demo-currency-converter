const jwt = require("jsonwebtoken");
const { UnauthorizedError, BadRequestError } = require('../utils/errors')

function verifyToken(req, res, next) {
    const token = req.header("Authorization");

    if (!token) {
        throw new BadRequestError("Access denied. No token provided.");
    }

    try {
        const verified = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        throw new UnauthorizedError("Invalid token");
    }
}

module.exports = { verifyToken };
