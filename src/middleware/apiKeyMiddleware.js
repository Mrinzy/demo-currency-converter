const { ForbiddenError } = require('../utils/errors')

function verifyApiKey(req, res, next) {
    const apiKey = req.header("x-api-key");

    if (!apiKey || apiKey !== process.env.API_CLIENT_KEY) {
        throw new ForbiddenError("Forbidden: Invalid API Key");
    }

    next();
}

module.exports = { verifyApiKey };
