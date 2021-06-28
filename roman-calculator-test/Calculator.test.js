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
test("Verify that you only enter valid roman character", () => {
    const calculator = new RomanCalculator
    expect(calculator.isCharacterValid('L')).toBe(true)
})

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

test("Given two roman numeral 'I' and 'V' sum roman numbers, should return 6", () => {
    const calculator = new RomanCalculator
    expect(calculator.sumRomanNumeral('I', 'V')).toBe(6)
})

test("Given two roman numeral 'X' and 'C' sum roman numbers, should return 110", () => {
    const calculator = new RomanCalculator
    expect(calculator.sumRomanNumeral('X', 'C')).toBe(110)
})

test("Given two roman numeral 'X' and 'C' sum roman numbers, should return 110", () => {
    const calculator = new RomanCalculator
    expect(calculator.sumRomanNumeral('X', 'C')).toBe(110)
})

test("Given a roman numeral 'LIX' Roman Calculator should return 59", () => {
    const calculator = new RomanCalculator
    expect(calculator.convertRomanToDecimal('LIX')).toBe(59)
})
test("Given a roman numeral 'CIX' Roman Calculator should return 109", () => {
    const calculator = new RomanCalculator
    expect(calculator.convertRomanToDecimal('CIX')).toBe(109)
})
test("Given a roman numeral 'D' Roman Calculator should return 500", () => {
    const calculator = new RomanCalculator
    expect(calculator.convertRomanToDecimal('D')).toBe(500)
})
test("Given a roman numeral 'M' Roman Calculator should return 1000", () => {
    const calculator = new RomanCalculator
    expect(calculator.convertRomanToDecimal('M')).toBe(1000)
})
test("Given a roman numeral 'ML' Roman Calculator should return 1050", () => {
    const calculator = new RomanCalculator
    expect(calculator.convertRomanToDecimal('ML')).toBe(1050)
})
test("Given a roman numeral 'MCX' Roman Calculator should return 1110", () => {
    const calculator = new RomanCalculator
    expect(calculator.convertRomanToDecimal('MCX')).toBe(1110)
})
test("Given a roman numeral 'MCXV' Roman Calculator should return 1115", () => {
    const calculator = new RomanCalculator
    expect(calculator.convertRomanToDecimal('MCXV')).toBe(1115)
})
test("Given a roman numeral 'MXXX' Roman Calculator should return 1030", () => {
    const calculator = new RomanCalculator
    expect(calculator.convertRomanToDecimal('MXXX')).toBe(1030)
})
test("Given a roman numeral 'XIII' Roman Calculator should return 13", () => {
    const calculator = new RomanCalculator
    expect(calculator.convertRomanToDecimal('XIII')).toBe(13)
})

test("Given a decimal number '10' Roman Calculator should return 'X'", () => {
    const calculator = new RomanCalculator
    expect(calculator.convertDecimalToRoman(10)).toBe('X')
})

test("Given a decimal number '50' Roman Calculator should return 'L'", () => {
    const calculator = new RomanCalculator
    expect(calculator.convertDecimalToRoman(50)).toBe('L')
})

test("Given a decimal number '100' Roman Calculator should return 'C'", () => {
    const calculator = new RomanCalculator
    expect(calculator.convertDecimalToRoman(100)).toBe('C')
})

test("Given a decimal number '1500' Roman Calculator should return 'MD'", () => {
    const calculator = new RomanCalculator
    expect(calculator.convertDecimalToRoman(1500)).toBe('MD')
})
test("Given a decimal number '3516' Roman Calculator should return 'MMMDXVI'", () => {
    const calculator = new RomanCalculator
    expect(calculator.convertDecimalToRoman(3516)).toBe('MMMDXVI')
})

test("Given two roman numeral 'XX' and 'L' sum roman numbers, should return 70", () => {
    const calculator = new RomanCalculator
    expect(calculator.sumRomanNumeral('XX', 'L')).toBe(70)
})
test("Given two roman numeral 'MXX' and 'LXX' sum roman numbers, should return 1090", () => {
    const calculator = new RomanCalculator
    expect(calculator.sumRomanNumeral('MXX', 'LXX')).toBe(1090)
})
test("Given two roman numeral 'MCXIX' and 'CLXX' sum roman numbers, should return 1289", () => {
    const calculator = new RomanCalculator
    expect(calculator.sumRomanNumeral('MCXIX', 'CLXX')).toBe(1289)
})

