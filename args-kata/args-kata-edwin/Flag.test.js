import { Flag } from "./Flag.js"

test("Flag creates a objetc that recieve two parameters", () =>{
    const flag = new Flag
    const result = detector.detectType(0)
    const expected = 'number'
    expect(result).toBe(expected)
})