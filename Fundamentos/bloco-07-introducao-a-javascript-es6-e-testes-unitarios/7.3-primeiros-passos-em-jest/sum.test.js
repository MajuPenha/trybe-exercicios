const sum = require('./sum')

it('returns sum(4, 5) to equals 9', () => {
  expect(sum(4, 5)).toBe(9);
});

it('returns sum(0, 0) to equals 0', () => {
  expect(sum(0, 0)).toBe(0);
});

it('returns sum(4,"5") to throw error', () => {
  expect(() => { sum(4, '5') }).toThrow(Error);
});

it('returns sum(4,"5") to throw error', () => {
  expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
});