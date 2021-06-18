import { Flag } from "./Flag.js"

test("It must return '-p' as a result of create a Flag with the parameters '-p', '8080'", () =>{
    const flag = new Flag('-p', '8080')
    const result = flag.id
    const expected = '-p'
    expect(result).toBe(expected)
})

test("It must return '/usr/logs' as a result of create a Flag with the parameters '-d', '/usr/logs'", () =>{
    const flag = new Flag('-d', '/usr/logs')
    const result = flag.value
    const expected = '/usr/logs'
    expect(result).toBe(expected)
})

test("It must return null as a result of create a Flag with only the first parameters.", () =>{
    const flag = new Flag('-l')
    const result = flag.value
    const expected = null
    expect(result).toBe(expected)
})