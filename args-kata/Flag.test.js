import { Flag } from "./Flag.js"

test("", () =>{
    const flag = new Flag('-p', '8080')
    const result = flag.id
    const expected = '-p'
    expect(result).toBe(expected)
})

test("", () =>{
    const flag = new Flag('-d', '/usr/logs')
    const result = flag.value
    const expected = '/usr/logs'
    expect(result).toBe(expected)
})

test("", () =>{
    const flag = new Flag('-l')
    const result = flag.value
    const expected = null
    expect(result).toBe(expected)
})