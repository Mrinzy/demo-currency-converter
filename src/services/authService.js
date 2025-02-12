const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UnauthorizedError } = require('../utils/errors')

const JWT_TOKEN_VALIDITY = process.env.JWT_TOKEN_VALIDITY;

// Simulated user database , for demo simplicity did not use Mongo or other DB
const users = [
    { id: 1, username: "admin", password: bcrypt.hashSync("password123", 10) }
];

//----------------login--------------//
async function login(username, password) {
    const user = users.find(u => u.username === username);

    if (!user || !bcrypt.compareSync(password, user.password)) {
        throw new UnauthorizedError( "Invalid credentials" );
    }

    return jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: `${JWT_TOKEN_VALIDITY}` });
}

module.exports = { login };