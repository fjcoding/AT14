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

test("Verify two numbers can be concatenated to get a bigger one", () => {
    const calculator = new RomanCalculator
    expect(calculator.concatenateNumbers('XX','II')).toBe('XXII')
})

test('Verify that given a roman number it cant has more tan three "I"',()=>{
    const calculator = new RomanCalculator
    expect(calculator.lessThanThreeI('III')).toBe(true)
})

test('Verify that given a roman number it cant has more tan three "X"',()=>{
    const calculator = new RomanCalculator
    expect(calculator.lessThanThreeX('XXX')).toBe(true)
})

test('Verify that given a roman number it cant has more tan three "C"',()=>{
    const calculator = new RomanCalculator
    expect(calculator.lessThanThreeC('CCCC')).toBe(false)
})

test('Verify that given a roman number it can has zero "I"',()=>{
    const calculator = new RomanCalculator
    expect(calculator.lessThanThreeI('CCC')).toBe(true)
})

test('Verify that given a roman number it can has zero "X"',()=>{
    const calculator = new RomanCalculator
    expect(calculator.lessThanThreeX('III')).toBe(true)
})

test('Verify that given a roman number it can has zero "C"',()=>{
    const calculator = new RomanCalculator
    expect(calculator.lessThanThreeC('XXX')).toBe(true)
})

test('Verify that given a roman number it cant has more tan one "V"',()=>{
    const calculator = new RomanCalculator
    expect(calculator.lessThanOneV('CCCCV')).toBe(true)
})

test('Verify that given a roman number it cant has more tan one "L"',()=>{
    const calculator = new RomanCalculator
    expect(calculator.lessThanOneL('CCCC')).toBe(true)
})
test('Verify that given a roman number it cant has more tan one "D"',()=>{
    const calculator = new RomanCalculator
    expect(calculator.lessThanOneD('DD')).toBe(false)
})

test('Verify that given "IV" roman number it returns 4',()=>{

    const calculator = new RomanCalculator
    expect(calculator.toSubtractedNumber('IV')).toBe(4)
})

test('Verify that given "IX" roman number it returns 9',()=>{

    const calculator = new RomanCalculator
    expect(calculator.toSubtractedNumber('IX')).toBe(9)
})

test('Verify that given "XL" roman number it returns 40',()=>{

    const calculator = new RomanCalculator
    expect(calculator.toSubtractedNumber('XL')).toBe(40)
})

test('Verify that given "XC" roman number it returns 90',()=>{

    const calculator = new RomanCalculator
    expect(calculator.toSubtractedNumber('XC')).toBe(90)
})

test('Verify that given "CD" roman number it returns 400',()=>{

    const calculator = new RomanCalculator
    expect(calculator.toSubtractedNumber('CD')).toBe(400)
})

test('Verify that given "CM" roman number it returns 900',()=>{

    const calculator = new RomanCalculator
    expect(calculator.toSubtractedNumber('CM')).toBe(900)
})

test('Verify that given a roman number it returns a decimal number',()=>{

    const calculator = new RomanCalculator
    expect(calculator.romanToDecimal('DLVIII')).toBe(558)
})

test('Verify that given a roman number with lesser number it returns a decimal number',()=>{

    const calculator = new RomanCalculator
    expect(calculator.romanToDecimal('CCCXCIV')).toBe(394)
})
/*
test("Given two roman numbers I and V Calculator should return 6", () => {
    const calculator = new RomanCalculator;
    const number1 = calculator.toDecimalNumber('I');
    const number2 = calculator.toDecimalNumber('V');
    expect(calculator.isCharacterValid('8')).toBe(true)
})
*/