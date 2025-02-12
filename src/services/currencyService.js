const axios = require("axios");
const cache = require("../utils/cache");
const { ServerUnavailableError , BadRequestError } = require('../utils/errors')

const API_KEY = process.env.API_KEY;
const EXCHANGE_API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

//----------------fetchExchangeRate--------------//
async function fetchExchangeRate(from) {
    const cacheKey = `exchange_rate_${from}`;

    // Check if data is in cache
    if (cache.has(cacheKey)) {
        console.log("Fetching from cache...");
        return cache.get(cacheKey);
    }

    console.log("Fetching from API..." );
    const response = await axios.get(`${EXCHANGE_API_URL}${from.toUpperCase()}`);

    if (!response.data || response.data.result !== "success") {
        throw new ServerUnavailableError("Failed to fetch exchange rates");
    }

    const rates = response.data.conversion_rates;

    // Store in cache
    cache.set(cacheKey, rates);

    return rates;
}

//----------------convertCurrency--------------//
async function convertCurrency(from, to, amount) {
    const rates = await fetchExchangeRate(from);

    if (!rates[to.toUpperCase()]) {
        throw new BadRequestError("Invalid target currency code");
    }

    const exchangeRate = rates[to.toUpperCase()];
    const convertedAmount = (amount * exchangeRate).toFixed(2);

    return { exchangeRate, convertedAmount };
}

module.exports = { convertCurrency };
