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
// To numbers with length 2
test("Given a roman numeral 'CM' Roman Calculator should return 900", () => {
    const calculator = new RomanCalculator
    expect(calculator.toDecimalNumber('CM')).toBe(900)
})

test("Given a roman numeral 'XC' Roman Calculator should return 90", () => {
    const calculator = new RomanCalculator
    expect(calculator.toDecimalNumber('XC')).toBe(90)
})
test("Given a roman numeral 'IX' Roman Calculator should return 9", () => {
    const calculator = new RomanCalculator
    expect(calculator.toDecimalNumber('IX')).toBe(9)
})


test("Given a roman numeral 'CD' Roman Calculator should return 400", () => {
    const calculator = new RomanCalculator
    expect(calculator.toDecimalNumber('CD')).toBe(400)
})

test("Given a roman numeral 'XL' Roman Calculator should return 40", () => {
    const calculator = new RomanCalculator
    expect(calculator.toDecimalNumber('XL')).toBe(40)
})

test("Given a roman numeral 'IV' Roman Calculator should return 4", () => {
    const calculator = new RomanCalculator
    expect(calculator.toDecimalNumber('IV')).toBe(4)
})

test("Given a roman numeral 'XIV' Roman Calculator should return 14", () => {
    const calculator = new RomanCalculator
    expect(calculator.toDecimalNumber('XIV')).toBe(14)
})

test("Given a roman numeral 'LX' Roman Calculator should return 60", () => {
    const calculator = new RomanCalculator
    expect(calculator.toDecimalNumber('LX')).toBe(60)
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