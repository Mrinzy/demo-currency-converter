class Currency {
    constructor(from, to, amount, convertedAmount, exchangeRate) {
        this.from = from.toUpperCase();
        this.to = to.toUpperCase();
        this.amount = amount;
        this.convertedAmount = convertedAmount;
        this.exchangeRate = exchangeRate;
    }
}
module.exports = Currency;
