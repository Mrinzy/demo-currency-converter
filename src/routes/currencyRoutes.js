const express = require("express");
const { convert } = require("../controllers/currencyController");
const { verifyToken } = require("../middleware/authMiddleware");
const { verifyApiKey } = require("../middleware/apiKeyMiddleware");

const router = express.Router();

router.get("/convert", verifyApiKey, verifyToken, convert);

module.exports = router;
