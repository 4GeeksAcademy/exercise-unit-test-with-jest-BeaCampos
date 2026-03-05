const sum = (a, b) => {
  return a + b;
};

// tasas de conversión
let oneEuroIs = {
  "JPY": 156.5,
  "USD": 1.07,
  "GBP": 0.87
};

// euro → dollar
const fromEuroToDollar = function(valueInEuro) {
  return valueInEuro * oneEuroIs.USD;
};

// dollar → yen
const fromDollarToYen = function(dollar) {
  const euro = dollar / oneEuroIs.USD;
  return euro * oneEuroIs.JPY;
};

// yen → pound
const fromYenToPound = function(yen) {
  const euro = yen / oneEuroIs.JPY;
  return euro * oneEuroIs.GBP;
};

module.exports = {
  sum,
  fromEuroToDollar,
  fromDollarToYen,
  fromYenToPound
};