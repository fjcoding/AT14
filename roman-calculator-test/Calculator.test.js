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
    expect(calculator.isCharacterValid('M')).toBe(true)
})

test("Given a roman number 'CC' romanToDecimal must return 200" , () => {
    const calculator = new RomanCalculator
    expect(calculator.romanToDecimal('CC')).toBe(200)
})

test("Given a roman number 'IV' romanToDecimal must return 4" , () => {
    const calculator = new RomanCalculator
    expect(calculator.romanToDecimal('IV')).toBe(4)
})

test("Given a roman number 'LXXXIV' romanToDecimal must return 84" , () => {
    const calculator = new RomanCalculator
    expect(calculator.romanToDecimal('LXXXIV')).toBe(84)
})

test("Given a roman number 'XCIX' romanToDecimal must return 99" , () => {
    const calculator = new RomanCalculator
    expect(calculator.romanToDecimal('XCIX')).toBe(99)
})

test("Given two numbers: 49, 87 sumNumbers must return 136" , () => {
    const calculator = new RomanCalculator
    expect(calculator.sumNumbers(49, 87)).toBe(136)
})

test("Given a decimal number 1 decimalToRoman must return 'I'" , () => {
    const calculator = new RomanCalculator
    expect(calculator.decimalToRoman(1)).toBe('I')
})

test("Given a decimal number 3 decimalToRoman must return 'III'" , () => {
    const calculator = new RomanCalculator
    expect(calculator.decimalToRoman(3)).toBe('III')
})

test("Given a decimal number 4 decimalToRoman must return 'IV'" , () => {
    const calculator = new RomanCalculator
    expect(calculator.decimalToRoman(4)).toBe('IV')
})

test("Given a decimal number 5 decimalToRoman must return 'V'" , () => {
    const calculator = new RomanCalculator
    expect(calculator.decimalToRoman(5)).toBe('V')
})

test("Given a decimal number 9 decimalToRoman must return 'IX'" , () => {
    const calculator = new RomanCalculator
    expect(calculator.decimalToRoman(9)).toBe('IX')
})

test("Given a decimal number 24 decimalToRoman must return 'XXIV'" , () => {
    const calculator = new RomanCalculator
    expect(calculator.decimalToRoman(24)).toBe('XXIV')
})

test("Given a decimal number 127 decimalToRoman must return 'CXXVII'" , () => {
    const calculator = new RomanCalculator
    expect(calculator.decimalToRoman(127)).toBe('CXXVII')
})

test("Given a decimal number 94 decimalToRoman must return 'CDXXXIV'" , () => {
    const calculator = new RomanCalculator
    expect(calculator.decimalToRoman(434)).toBe('CDXXXIV')
})

test("Given a decimal number 94 decimalToRoman must return 'XCIV'" , () => {
    const calculator = new RomanCalculator
    expect(calculator.decimalToRoman(94)).toBe('XCIV')
})

test("Given two roman numbers 'X', 'VIII' sumRomanNumbers must return 'XVIII'" , () => {
    const calculator = new RomanCalculator
    expect(calculator.sumRomanNumbers('X', 'VIII')).toBe('XVIII');
})

test("Given two roman numbers 'CXXVII', 'XXIV' sumRomanNumbers must return 'CLI'" , () => {
    const calculator = new RomanCalculator
    expect(calculator.sumRomanNumbers('CXXVII', 'XXIV')).toBe('CLI');
})

test("Given two roman numbers 'MMDCLXI', 'DLIV' sumRomanNumbers must return 'MMMCCXV'" , () => {
    const calculator = new RomanCalculator
    expect(calculator.sumRomanNumbers('MMDCLXI', 'DLIV')).toBe('MMMCCXV');
})