import { TypeDetector } from "./TypeDetector.js"

test("TypeDetector should detect 'number' as the type of a value 0", () =>{
    const detector = new TypeDetector
    const result = detector.detectType(0)
    const expected = 'number'
    expect(result).toBe(expected)
})

test("TypeDetector should detect 'number' as the type of a value 1.5", () =>{
    const detector = new TypeDetector
    const result = detector.detectType(1.5)
    const expected = 'number'
    expect(result).toBe(expected)
})

test("TypeDetector should detect 'boolean' as the type of a value false", () =>{
    const detector = new TypeDetector
    const result = detector.detectType(false)
    const expected = 'boolean'
    expect(result).toBe(expected)
})

test("TypeDetector should detect 'string' as the type of a value 'abcd'", () =>{
    const detector = new TypeDetector
    const result = detector.detectType('abcd')
    const expected = 'string'
    expect(result).toBe(expected)
})

test("TypeDetector should detect 'numberArray' as the type of a value [4,8,4,-1,5]", () =>{
    const detector = new TypeDetector
    const result = detector.detectType([4,8,4,-1,5])
    const expected = 'numberArray'
    expect(result).toBe(expected)
})


test("TypeDetector should detect 'stringArray' as the type of a value ['5','Hello','9','10']", () =>{
    const detector = new TypeDetector
    const result = detector.detectType(['5','Hello','9','10'])
    const expected = 'stringArray'
    expect(result).toBe(expected)
})
