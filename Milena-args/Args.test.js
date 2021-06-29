import { Flag , Schema} from './Args.js';
const { test, expect } = require("@jest/globals");


test('Verify if "-l" is a correct flag', () => {
    const flag = new Flag('-l', 'boolean')
    expect(flag.isCorrectFlag('-l')).toBe(true)
})

test('Verify if "-d" is a correct flag', () => {
    const flag = new Flag('-d', 'boolean')
    expect(flag.isCorrectFlag('-d')).toBe(true)
})

test('Verify if "-b"is a correct flag', () => {
    const flag = new Flag('-b', 'boolean')
    expect(flag.isCorrectFlag('-b')).toBe(true)
})

test('Verify if "-1" is not a correct flag', () => {
    const flag = new Flag('-1', 'boolean')
    expect(flag.isCorrectFlag('-1')).toBe(false)
})

test('Verify if "" is not a correct flag', () => {
    const flag = new Flag('', 'boolean')
    expect(flag.isCorrectFlag('')).toBe(false)
})

test('Verify if "8080" is not a correct (name) flag', () => {
    const flag = new Flag("8080", 'boolean')
    expect(flag.isCorrectFlag("8080")).toBe(false)
})

test('Verify that all types of flags have string names (string)', () => {
    const flag = new Flag('-l', 'boolean')
    expect(flag.whatTypeIs('-l')).toBe("string")
})

test('Verify that all types of flags have string names (string)', () => {
    const flag = new Flag('-l', 'boolean')
    expect(flag.whatTypeIs('-l')).toBe("string")
})

test('Verify that all types of flags have string names (numbers)', () => {
    const flag = new Flag('-l', 'boolean')
    expect(flag.whatTypeIs(40)).toBe("string")
})

test('Verify that all types of flags have string names (boolean)', () => {
    const flag = new Flag('-l', true)
    expect(flag.whatTypeIs('-l')).toBe("string")
})

test('Checking if the content of the flag is a number, The flag: -l, contains a number 40', () => {
    const flag = new Flag('-l', 40)
    expect(flag.whatTypeIs('-l')).toBe("string")
})

test('Checking if the content of the flag is a string, The flag: -d, contains : true', () => {
    const flag = new Flag('-d', true)
    expect(flag.whatTypeIs('-d')).toBe('string')
})



