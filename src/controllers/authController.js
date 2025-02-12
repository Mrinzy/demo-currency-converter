const AuthService = require('../services/authService')
const { ValidationError, InternalServerError } = require('../utils/errors')


//------------ Login ------------//
async function login(req, res) {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            throw new ValidationError("Invalid request body. Required: username, password");
        }

        const token = await AuthService.login(username, password);
        res.json({ token });

    } catch (error) {
        throw new InternalServerError(error.message);
    }
}

module.exports = { login };
