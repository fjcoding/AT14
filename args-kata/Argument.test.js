import { Argument } from "./Argument.js"

test("It must return '-p' as a result of create a argument with the parameters '-p', '8080'", () =>{
    const argument = new Argument('-p', '8080')
    const result = argument.flag
    const expected = '-p'
    expect(result).toBe(expected)
})

test("It must return '/usr/logs' as a result of create a argument with the parameters '-d', '/usr/logs'", () =>{
    const argument = new Argument('-d', '/usr/logs')
    const result = argument.value
    const expected = '/usr/logs'
    expect(result).toBe(expected)
})

test("It must return null as a result of create a argument with only the first parameters.", () =>{
    const argument = new Argument('-l')
    const result = argument.value
    const expected = null
    expect(result).toBe(expected)
})