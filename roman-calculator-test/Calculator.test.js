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

test("Given a roman numeral 'II' Roman Calculator should return 2", () => {
    const calculator = new RomanCalculator
    expect(calculator.toDecimalNumber('II')).toBe(2)
})

test("Given a roman numeral 'VII' Roman Calculator should return 7", () => {
    const calculator = new RomanCalculator
    expect(calculator.toDecimalNumber('VII')).toBe(7)
})

test("Given a roman numeral 'VIII' Roman Calculator should return 8", () => {
    const calculator = new RomanCalculator
    expect(calculator.toDecimalNumber('VIII')).toBe(8)
})

test("Given a roman numeral 'III' Roman Calculator should return 3", () => {
    const calculator = new RomanCalculator
    expect(calculator.toDecimalNumber('III')).toBe(3)
})


test("Given a roman numeral 'LIX' Roman Calculator should return 59", () => {
    const calculator = new RomanCalculator
    expect(calculator.toDecimalNumber('LIX')).toBe(59)
})

test("Given a roman numeral 'LIV' Roman Calculator should return 54", () => {
    const calculator = new RomanCalculator
    expect(calculator.toDecimalNumber('LIV')).toBe(54)
})

test("Verify that you only enter valid roman character", () => {
    const calculator = new RomanCalculator
    expect(calculator.isCharacterValid('8')).toBe(false)
})

test("Given a decimal numeral 5 Roman Calculator should return V", () => {
    const calculator = new RomanCalculator
    expect(calculator.toRomanNumber(5)).toBe("V")
})

test("Given a decimal numeral 4 Roman Calculator should return IV", () => {
    const calculator = new RomanCalculator
    expect(calculator.toRomanNumber(4)).toBe("IV")
})

test("Given a decimal numeral 6 Roman Calculator should return VI", () => {
    const calculator = new RomanCalculator
    expect(calculator.toRomanNumber(6)).toBe("VI")
})

test("Given a decimal numeral 14 Roman Calculator should return XIV", () => {
    const calculator = new RomanCalculator
    expect(calculator.toRomanNumber(14)).toBe("XIV")
})

test("Given a decimal numeral 3 Roman Calculator should return III", () => {
    const calculator = new RomanCalculator
    expect(calculator.toRomanNumber(3)).toBe("III")
})

test("Given two roman numbers I and V Calculator should return VI", () => {
    const calculator = new RomanCalculator;
    const number1    = calculator.toDecimalNumber('I');
    const number2    = calculator.toDecimalNumber('V');
    const result     = number1 + number2;
    expect(calculator.toRomanNumber(result)).toBe("VI")
})

test("Given two roman numbers XX and II Calculator should return XXII", () => {
    const calculator = new RomanCalculator;
    const number1    = calculator.toDecimalNumber('XX');
    const number2    = calculator.toDecimalNumber('II');
    const result     = number1 + number2;
    expect(calculator.toRomanNumber(result)).toBe("XXII")
})


test("Given two roman numbers XIV and LX Calculator should return LXXIV", () => {
    const calculator = new RomanCalculator;
    const number1    = calculator.toDecimalNumber('XIV');
    const number2    = calculator.toDecimalNumber('LX');
    const result     = number1 + number2;
    expect(calculator.toRomanNumber(result)).toBe("LXXIV")
})
