const { findConsecutive, primeFactors } = require("./prime.js");

describe("Find prime number", () => {
  test("Number 14", () => {
    expect(Array.from(primeFactors(14))).toEqual([2, 7]);
  });
  test("Number 15", () => {
    expect(Array.from(primeFactors(15))).toEqual([3, 5]);
  });
  test("Number 644", () => {
    expect(Array.from(primeFactors(644))).toEqual([2, 7, 23]);
  });
  test("Number 645", () => {
    expect(Array.from(primeFactors(645))).toEqual([3, 5, 43]);
  });
  test("Number 646", () => {
    expect(Array.from(primeFactors(646))).toEqual([2, 17, 19]);
  });
});

describe("Find first number", () => {
  test("Find first of 2 consecutive", () => {
    expect(findConsecutive(2)).toEqual(14);
  });
  test("Find first of 3 consecutive", () => {
    expect(findConsecutive(3)).toEqual(644);
  });
  test("Find first of 4 consecutive", () => {
    expect(findConsecutive(4)).toEqual(134043);
  });
});
