const Currency = require("../models/currencyModel");
const currencyService = require("../services/currencyService");
const { BadRequestError, InternalServerError } = require('../utils/errors')

//------------ convert ------------//
async function convert(req, res) {
    try {
        const { from, to, amount } = req.query;

        if (!from || !to || !amount || isNaN(amount)) {
            throw new BadRequestError("Invalid parameters. Required: from, to, amount (numeric)");
        }

        const { exchangeRate, convertedAmount } = await currencyService.convertCurrency(from, to, parseFloat(amount));

        const result = new Currency(from, to, amount, convertedAmount, exchangeRate);

        res.json(result);
    } catch (error) {
        throw new InternalServerError(error.message);
    }
}

module.exports = { convert };