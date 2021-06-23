import { RomanCalculator } from "../roman-calculator/Calculator";
const { test, expect } = require("@jest/globals");

test("Given a roman numeral 'V' Roman Calculator should return 5", () => {
    const calculator = new RomanCalculator
    expect(calculator.toDecimalNumber('V')).toBe(5)
})

test("Given a roman numeral 'I' Roman Calculator should return 1", () => {
    const calculator = new RomanCalculator
    expect(calculator.toDecimalNumber('I')).toBe(1)
})

test("Given a roman numeral 'X' Roman Calculator should return 10", () => {
    const calculator = new RomanCalculator
    expect(calculator.toDecimalNumber('X')).toBe(10)
})
test("Given a roman numeral 'L' Roman Calculator should return 50", () => {
    const calculator = new RomanCalculator
    expect(calculator.toDecimalNumber('L')).toBe(50)
})

test("Given a roman numeral 'D' Roman Calculator should return 500", () => {
    const calculator = new RomanCalculator
    expect(calculator.toDecimalNumber('D')).toBe(500)
})
test("Given a roman numeral 'C' Roman Calculator should return 100", () => {
    const calculator = new RomanCalculator
    expect(calculator.toDecimalNumber('C')).toBe(100)
})
test("Given a roman numeral 'M' Roman Calculator should return 1000", () => {
    const calculator = new RomanCalculator
    expect(calculator.toDecimalNumber('M')).toBe(1000)
})

test("Verify that you only enter valid roman character", () => {
    const calculator = new RomanCalculator
    expect(calculator.isCharacterValid('8')).toBe(false)
})

/*
test("Given two roman numbers I and V Calculator should return 6", () => {
    const calculator = new RomanCalculator;
    const number1 = calculator.toDecimalNumber('I');
    const number2 = calculator.toDecimalNumber('V');
    expect(calculator.isCharacterValid('8')).toBe(true)
})
*/

test("Given a roman two numerals 'II' Roman Calculator should return 2", () => {
    const calculator = new RomanCalculator
    expect(calculator.twoRoman('II')).toBe(2)
})

test("Given a roman three numerals 'III' Roman Calculator should return 3", () => {
    const calculator = new RomanCalculator
    expect(calculator.twoRoman('III')).toBe(3)
})
test("Given a roman two numerals 'VII' Roman Calculator should return 7", () => {
    const calculator = new RomanCalculator
    expect(calculator.twoRoman('VII')).toBe(7)
})

test("Given a roman four numerals 'XXII' Roman Calculator should return 22", () => {
    const calculator = new RomanCalculator
    expect(calculator.twoRoman('XXII')).toBe(22)
})

test("Given a roman two numerals 'IV' Roman Calculator first one is less than the second one, should return 4", () => {
    const calculator = new RomanCalculator
    expect(calculator.isLess('IV')).toBe(4)
})

test("Given a roman two numerals 'IX' Roman Calculator first one is less than the second one, should return 9", () => {
    const calculator = new RomanCalculator
    expect(calculator.isLess('IX')).toBe(9)
})

test("Given a roman two numeral 'XC' Roman Calculator first one is less than the second one should return 90", () => {
    const calculator = new RomanCalculator
    expect(calculator.isLess('XC')).toBe(90)
})

test("Given a roman two numeral 'CM' Roman Calculator first one is less than the second one should return 900", () => {
    const calculator = new RomanCalculator
    expect(calculator.isLess('CM')).toBe(900)
})

/*test("Given a roman verify number of digits 'I' can't have more than three", () => {
    const calculator = new RomanCalculator
    expect(calculator.verifyNumberDigits('IIII')).toBe(false)
})*/

test("Given two roman numeral 'I' and 'V' sum roman numbers, should return 6", () => {
    const calculator = new RomanCalculator
    expect(calculator.sumRomanNumeral('I', 'V')).toBe(6)
})

test("Given two roman numeral 'X' and 'C' sum roman numbers, should return 110", () => {
    const calculator = new RomanCalculator
    expect(calculator.sumRomanNumeral('X', 'C')).toBe(110)
})
