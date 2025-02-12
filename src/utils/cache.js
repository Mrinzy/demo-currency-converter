const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: process.env.CACHE_TTL || 600 }); // Cache for 10 mins
module.exports = cache;
