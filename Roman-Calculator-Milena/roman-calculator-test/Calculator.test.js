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

test("Verify that characters are joined correctly, this test has to pass", () => {
    const calculator = new RomanCalculator
    expect(calculator.isCharacterValid('VI')).toBe(true)
})

test("Verify that characters are joined correctly; this case test has to pass", () => {
    const calculator = new RomanCalculator
    expect(calculator.isCharacterValid('IV')).toBe(true)
})

test("Verify that characters are joined correctly; to verify wrong union", () => {
    const calculator = new RomanCalculator
    expect(calculator.isCharacterValid('DX')).toBe(true)
})

test("The rules for writing Roman numerals dictate that: If the number on the left is less, it means subtract the lesser from the greater.", () => {
    const calculator = new RomanCalculator
    expect(calculator.isCharacterValid('IX')).toBe(true)
})

test("Verify that characters are joined correctly XXX", () => {
    const calculator = new RomanCalculator
    expect(calculator.isCharacterValid('XXX')).toBe(true)
})

test("Verify that characters are joined correctly XXXX", () => {
    const calculator = new RomanCalculator
    expect(calculator.isCharacterValid('XXX')).toBe(true)
})

test("Verify that characters are joined correctly CCC", () => {
    const calculator = new RomanCalculator
    expect(calculator.isCharacterValid('CCC')).toBe(true)
})

test("Verify that characters are joined correctly XXXX", () => {
    const calculator = new RomanCalculator
    expect(calculator.isCharacterValid('XXXX')).toBe(false)
})

test("Verify that characters are joined correctly MMMCMXCIX", () => {
    const calculator = new RomanCalculator
    expect(calculator.isCharacterValid('MMMCMXCIX')).toBe(true)
})

test("Check which is the correct way to write this Roman numeral: CCXXDIV (234)", () => {
    const calculator = new RomanCalculator
    expect(calculator.isCharacterValid('CCXXDIV')).toBe(false)
})

test("Check which is the correct way to write this Roman numeral: CCXXXIV (234)", () => {
    const calculator = new RomanCalculator
    expect(calculator.isCharacterValid('CCXXXIV')).toBe(true)
})

test("Check which is the correct way to write this Roman numeral: CCXXIV (224)", () => {
    const calculator = new RomanCalculator
    expect(calculator.isCharacterValid('CCXXIV')).toBe(true)
})

test("Check which is the correct this Roman number: C, equal to this decimal number: 100", () => {
    const calculator = new RomanCalculator
    expect(calculator.decimalToRoman(100)).toBe('C')
})

test("We are not evaluating values greater than 3999", () => {
    const calculator = new RomanCalculator
    expect(calculator.decimalToRoman(4000)).toBe(false)
})

test("We are not evaluating values greater than 3999, Verify with the number 10000", () => {
    const calculator = new RomanCalculator
    expect(calculator.decimalToRoman(10000)).toBe(false)
})

test("Given a decimal number 24 decimalToRoman must return 'XXIV'" , () => {
    const calculator = new RomanCalculator
    expect(calculator.decimalToRoman(24)).toBe('XXIV')
})

test("Check which is the correct this Roman number: CC, equal to this decimal number: 200", () => {
    const calculator = new RomanCalculator
    expect(calculator.decimalToRoman(200)).toBe('CC')
})

test("Check which is the correct this Roman number: MMCC, equal to this decimal number: 2200", () => {
    const calculator = new RomanCalculator
    expect(calculator.decimalToRoman(2200)).toBe('MMCC')
})


test("the conversion of 'I' should be 1", () => {
    const calculator = new RomanCalculator
    expect(calculator.romanToDecimal('I')).toBe(1)
})


test("the conversion of the roman number: XC to decimal number must be: 90" , () => {
    const calculator = new RomanCalculator
    expect(calculator.romanToDecimal('XC')).toBe(90)
})

test("the conversion of the roman number: CM to decimal number must be: 900" , () => {
    const calculator = new RomanCalculator
    expect(calculator.romanToDecimal('CM')).toBe(900)
})

test("the sum of the numbers 1 + 2, must be = 3" , () => {
    const calculator = new RomanCalculator
    expect(calculator.Sum(1 , 2)).toBe(3)
})

test("the sum of the roman numbers X + I, must be = XI" , () => {
    const calculator = new RomanCalculator
    expect(calculator.SumRomanNumbers('X', 'I')).toBe('XI')
})

test("the rest of the numbers 5 - 3, must be = 2" , () => {
    const calculator = new RomanCalculator
    expect(calculator.Res(5, 3)).toBe(2)
})

test("the rest of the roman numbers X - I, must be = IX" , () => {
    const calculator = new RomanCalculator
    expect(calculator.ResRomanNumbers('X', 'I')).toBe('IX')
})

test("the multiplication of the numbers 2 * 2 , must be = 4" , () => {
    const calculator = new RomanCalculator
    expect(calculator.Multiplication(2, 2)).toBe(4)
})

test("the multiplication of the roman numbers X * X, must be = C" , () => {
    const calculator = new RomanCalculator
    expect(calculator.MultiplicationRomanNumbers('X', 'X')).toBe('C')
})

test("the division of the numbers 2 / 2 , must be = 1" , () => {
    const calculator = new RomanCalculator
    expect(calculator.Division(2, 2)).toBe(1)
})

test("the division of the roman numbers X / X, must be = I" , () => {
    const calculator = new RomanCalculator
    expect(calculator.DivisionRomanNumbers('X', 'X')).toBe('I')
})
