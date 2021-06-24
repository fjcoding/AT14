import { RomanCalculator } from "../roman-calculator/Calculator";
const { test, expect } = require("@jest/globals");

test("Given a roman numeral 'V' Roman Calculator should return 5", () => {
  const calculator = new RomanCalculator();
  expect(calculator.toDecimal("V")).toBe(5);
});

test("Given a roman numeral 'I' Roman Calculator should return 1", () => {
  const calculator = new RomanCalculator();
  expect(calculator.toDecimal("I")).toBe(1);
});

test("Given a roman numeral 'X' Roman Calculator should return 10", () => {
  const calculator = new RomanCalculator();
  expect(calculator.toDecimal("X")).toBe(10);
});
test("Given a roman numeral 'L' Roman Calculator should return 50", () => {
  const calculator = new RomanCalculator();
  expect(calculator.toDecimal("L")).toBe(50);
});

test("Given a roman numeral 'D' Roman Calculator should return 500", () => {
  const calculator = new RomanCalculator();
  expect(calculator.toDecimal("D")).toBe(500);
});
test("Given a roman numeral 'C' Roman Calculator should return 100", () => {
  const calculator = new RomanCalculator();
  expect(calculator.toDecimal("C")).toBe(100);
});
test("Given a roman numeral 'M' Roman Calculator should return 1000", () => {
  const calculator = new RomanCalculator();
  expect(calculator.toDecimal("M")).toBe(1000);
});
// To numbers with length 2

test("Verify that you enter a invalid roman character, the caracter is 'm'", () => {
  const calculator = new RomanCalculator();
  expect(calculator.toDecimal("m")).toBe(undefined);
});

test("Verify that you enter a invalid roman character, the caracter is '8'", () => {
  const calculator = new RomanCalculator();
  expect(calculator.toDecimal("8")).toBe(undefined);
});

test("Make a string whith the next values 'XX' and 'II'", () => {
  const calculator = new RomanCalculator();

  expect(calculator.toPutIntoStrings("XX", "II")).toStrictEqual([
    ["X", "X"],
    ["I", "I"]
  ]);
});

test("Make a string whith the next values 'II' and 'X'", () => {
  const calculator = new RomanCalculator();

  expect(calculator.toPutIntoStrings("II", "X")).toStrictEqual([
    ["I", "I"],
    ["X"]
  ]);
});

test("Verify that the characthers giver are Roman numbers -> characters 'XX' y 'II' ", () => {
  const calculator = new RomanCalculator();
  const listOfStrings = calculator.toPutIntoStrings("XX", "II");

  expect(calculator.verifyString(listOfStrings)).toBe(true);
});

test("Verify that the characthers giver are not Roman numbers -> characters 'XX' y 'I8I' ", () => {
  const calculator = new RomanCalculator();
  const listOfStrings = calculator.toPutIntoStrings("XX", "I8I");

  expect(calculator.verifyString(listOfStrings)).toBe(false);
});

test("Verify that the characthers giver are not Roman numbers -> characters 'a' y 'II' ", () => {
  const calculator = new RomanCalculator();
  const listOfStrings = calculator.toPutIntoStrings("a", "II");

  expect(calculator.verifyString(listOfStrings)).toBe(false);
});

test("Get the value of the character -> IX", () => {
  const calculator = new RomanCalculator();

  expect(calculator.getValue("IX")).toBe(9);
});

test("Get the value of the character -> CCCLXIV", () => {
  const calculator = new RomanCalculator();

  expect(calculator.getValue("CCCLXIV")).toBe(364);
});

test("Concatenate two numbers taking first the bigger number and later de lower one -> 'XX'+'II", () => {
  const calculator = new RomanCalculator();

  expect(calculator.concatenate("XX", "II")).toBe("XXII");
});

test("Concatenate two numbers taking first the bigger number and later de lower one -> 'L'+'DC", () => {
  const calculator = new RomanCalculator();

  expect(calculator.concatenate("L", "DC")).toBe("DCL");
});

test("Concatenate two numbers taking first the bigger number and later de lower one -> 'I'+'C'", () => {
  const calculator = new RomanCalculator();

  expect(calculator.concatenate("I", "C")).toBe("CI");
});

test("Get the limit times that a character could appear-> 'C'", () => {
  const calculator = new RomanCalculator();

  expect(calculator.getLimits("C")).toBe(3);
});

test("Get the limit times that a character could appear-> 'V'", () => {
  const calculator = new RomanCalculator();

  expect(calculator.getLimits("V")).toBe(1);
});

test("The Roman number has a character more times than allowed, testing -> CCCC", () => {
  const calculator = new RomanCalculator();

  expect(calculator.limiting("CCCC")).toBe(true);
});

test("The Roman number has a character more times than allowed, testing -> I ", () => {
  const calculator = new RomanCalculator();

  expect(calculator.limiting("I")).toBe(false);
});
