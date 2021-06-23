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
    expect(calculator.WhenToAddInTheCharacterArray('VI')).toBe(true)
})

test("Verify that characters are joined correctly; this case test has to pass", () => {
    const calculator = new RomanCalculator
    expect(calculator.WhenToAddInTheCharacterArray('IV')).toBe(true)
})

test("Verify that characters are joined correctly; to verify wrong union", () => {
    const calculator = new RomanCalculator
    expect(calculator.WhenToAddInTheCharacterArray('DX')).toBe(true)
})

/*continuar aqui funcion joinCharacterInAString*/

test("The rules for writing Roman numerals dictate that: If the number on the left is less, it means subtract the lesser from the greater.", () => {
    const calculator = new RomanCalculator
    expect(calculator.WhenToSubtracInTheCharacterArray('IX')).toBe(false)
})

