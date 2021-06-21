
import { TypeDetector } from "./TypeDetector.js"


test("TypeDetector should detect 'number' as the type of a value 0", ()=>{
    const detector = new TypeDetector
    const result = detector.detectType(0)
    const expected ='number'
    expect(result).toBe(expected)
})

test("TypeDetector should detect 'number' as the type of a value 1.5", ()=>{
    const detector =new TypeDetector
    const result = detector.detectType(1.5)
    const expected= 'number'
    expect(result).toBe(expected)
})

test("TypeDetector should detect 'string' as the type of a value 'asd'", () =>{
    const detector = new TypeDetector
    const result = detector.detectType("asd")
    const expected ='string'
    expect(result).toBe(expected)
})

test("TypeDetector should detect 'boolean' as the type of a value false", () =>{
    const detector = new TypeDetector
    const result = detector.detectType(false)
    const expected ='boolean'
    expect(result).toBe(expected)
})



