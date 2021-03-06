const Sum = require("./Sum");

class Money {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  static dollar(amount) {
    return new Money(amount, "USD");
  }

  static franc(amount) {
    return new Money(amount, "CHF");
  }

  equals(object) {
    return this.amount === object.amount && object.currency === this.currency;
  }

  times(multiplier) {
    return new Money(this.amount * multiplier, this.currency);
  }

  plus(object) {
    const sum = new Sum(this, object);

    return sum;
  }

  reduce(to, Money, Bank) {
    const rate = Bank.rate(this.currency, to);

    return new Money(this.amount / rate, to);
  }
}

module.exports = Money;
