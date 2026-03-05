const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require("./app.js");

test('adds 14 + 9 to equal 23', () => {
  let total = sum(14, 9);
  expect(total).toEqual(23);
});

test("One euro should be 1.07 dollars", function () {
  const dollars = fromEuroToDollar(3.5);
  const expected = 3.5 * 1.07;
  expect(dollars).toBe(expected);
});

test("One dollar should be 146.26 yen", function () {
  const yen = fromDollarToYen(1);
  const expected = (1 / 1.07) * 156.5;
  expect(yen).toBeCloseTo(expected);
});

test("156.5 yen should be 0.87 pounds", function () {
  const pounds = fromYenToPound(156.5);
  const expected = 0.87;
  expect(pounds).toBeCloseTo(expected);
});