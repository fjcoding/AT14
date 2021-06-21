import { ArgumentSchema } from "./ArgumentSchema.js"

test("It must return '-p' as a result of create an argument with the parameters '-p', 0, 'number', true", () =>{
    const argumentSchema = new ArgumentSchema('-p', 0, 'number', true)
    const result = argumentSchema.flag
    const expected = '-p'
    expect(result).toBe(expected)
})

test("It must return '/usr/logs' as a result of create an argument with the parameters '-l', false, 'boolean', false", () =>{
    const argumentSchema = new ArgumentSchema('-l', false, 'boolean', false)
    const result = argumentSchema.defaultValue
    const expected = false
    expect(result).toBe(expected)
})

test("It must return '/usr/logs' as a result of create an argument with the parameters '-d', '', 'string', true", () =>{
    const argumentSchema = new ArgumentSchema('-d', '', 'string', true)
    const result = argumentSchema.dataType
    const expected = 'string'
    expect(result).toBe(expected)
})

test("It must return '/usr/logs' as a result of create an argument with the parameters '-p', 0, 'number', false", () =>{
    const argumentSchema = new ArgumentSchema('-p', 0, 'number', false)
    const result = argumentSchema.isRequired
    const expected = false
    expect(result).toBe(expected)
})


