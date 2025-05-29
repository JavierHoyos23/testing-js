const {substract, isEven, max} = require('./03-math-helpers.js')

test('subtract 10 - 3 should be 7', () => {
  const result = substract(10,3);
  expect(result).toBe(7);
});

test('subtract 3 - 10 should be -7', () => {
  const result = substract(3,10);
  expect(result).toBe(-7);
});

test('10 should be Even', () => {
  const result = isEven(10);
  expect(result).toBe(true);
});

test('3 should not be Even', () => {
  const result = isEven(3);
  expect(result).toBe(false);
});

test('0 should be Even', () => {
  const result = isEven(0);
  expect(result).toBe(true);
});

test('Max number should be 8', () => {
  const values = [4, 8, 1]
  const result = max(values)
  expect(result).toBe(8);
});

test('Should be null', () => {
  const values = []
  const result = max(values)
  expect(result).toBe(null);
});
