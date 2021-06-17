import { TypeDetector } from "./TypeDetector.js"

test("TypeDetector should detect 'number' - type value = 0", () =>{
    const detector = new TypeDetector
    const result = detector.detectType(0)
    const expected = 'number'
    expect(result).toBe(expected)
})

test("TypeDetector should detect 'number' - type value = 5", () =>{
    const detector = new TypeDetector
    const result = detector.detectType(5)
    const expected = 'number'
    expect(result).toBe(expected)
})

test("TypeDetector should detect 'boolean' - type Value = true", () =>{
    const detector = new TypeDetector
    const result = detector.detectType(true)
    const expected = 'boolean'
    expect(result).toBe(expected)
})

test("TypeDetector should detect 'string' - type of a value 'x'", () =>{
    const detector = new TypeDetector
    const result = detector.detectType('x')
    const expected = 'string'
    expect(result).toBe(expected)
})