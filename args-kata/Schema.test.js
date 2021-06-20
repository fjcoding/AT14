import { Schema } from "./Schema.js"
import { Argument } from './Argument'
import { ArgumentSchema } from './ArgumentSchema.js'

test("This function must return 'false' as a result to invoque it with parameters '-p', true", () =>{
    const schema = new Schema()
    const result = schema.isRequiredValue('-p', true)
    const expected = false
    expect(result).toBe(expected)
})

test("This function must return 'true' as a result to invoque it with parameters '-l', false", () =>{
    const schema = new Schema()
    const result = schema.isRequiredValue('-l', false)
    const expected = true
    expect(result).toBe(expected)
})

test("This function must return 'false' as a result to invoque it with second and third parameters diferents.", () =>{
    const schema = new Schema()
    const result = schema.isEqualsTypes('-l', 'string', 'number')
    const expected = false
    expect(result).toBe(expected)
})

test("This function must return 'true' as a result to invoque it with second and third parameters equals.", () =>{
    const schema = new Schema()
    const result = schema.isEqualsTypes('-l', 'string', 'string')
    const expected = true
    expect(result).toBe(expected)
})


test("This function must return 'false' as a result to invoque it with 'string' as second parameter and and null as third parameters.", () =>{
    const schema = new Schema()
    const result = schema.isEqualsTypes('-l', 'string', null)
    const expected = false
    expect(result).toBe(expected)
})

test("", () =>{
    const schema = new Schema()
    const result = schema.isValueValid('-l', 'string', 'string', true)
    const expected = true
    expect(result).toBe(expected)
})

test("", () =>{
    const schema = new Schema()
    const result = schema.isValueValid('-l', 'string', 'number', true)
    const expected = false
    expect(result).toBe(expected)
})

test("", () =>{
    const schema = new Schema()
    const result = schema.isValueValid('-l', null, 'string', true)
    const expected = false
    expect(result).toBe(expected)
})

test("", () =>{
    const schema = new Schema()
    const result = schema.isValueValid('-l', null, 'string', false)
    const expected = true
    expect(result).toBe(expected)
})

test("", () =>{
    const port = new ArgumentSchema('-p', 0, 'number', true)
    const logging = new ArgumentSchema('-l', false, 'boolean', false)
    const dir = new ArgumentSchema('-d', '', 'string', true)
    const argument = new Argument('-p', 8080)
    const schema = new Schema([port, logging, dir]);

    const result = schema.isArgumentValid(argument)
    const expected = true
    expect(result).toBe(expected)
})

test("", () =>{
    const port = new ArgumentSchema('-p', 0, 'number', true)
    const logging = new ArgumentSchema('-l', false, 'boolean', false)
    const dir = new ArgumentSchema('-d', '', 'string', true)
    const argument = new Argument('-p', 'dfasdfas')
    const schema = new Schema([port, logging, dir]);

    const result = schema.isArgumentValid(argument)
    const expected = false
    expect(result).toBe(expected)
})

test("", () =>{
    const port = new ArgumentSchema('-p', 0, 'number', true)
    const logging = new ArgumentSchema('-l', false, 'boolean', false)
    const dir = new ArgumentSchema('-d', '', 'string', true)
    const argument = new Argument('-p')
    const schema = new Schema([port, logging, dir]);

    const result = schema.isArgumentValid(argument)
    const expected = false
    expect(result).toBe(expected)
})

test("", () =>{
    const port = new ArgumentSchema('-p', 0, 'number', true)
    const logging = new ArgumentSchema('-l', false, 'boolean', false)
    const dir = new ArgumentSchema('-d', '', 'string', true)
    const argument = new Argument('-l')
    const schema = new Schema([port, logging, dir]);

    const result = schema.isArgumentValid(argument)
    const expected = true
    expect(result).toBe(expected)
})

test("", () =>{
    const port = new ArgumentSchema('-p', 0, 'number', true)
    const logging = new ArgumentSchema('-l', false, 'boolean', false)
    const dir = new ArgumentSchema('-d', '', 'string', true)
    const argument = new Argument('-d', '/url/house')
    const schema = new Schema([port, logging, dir]);

    const result = schema.isArgumentValid(argument)
    const expected = true
    expect(result).toBe(expected)
})


test("", () =>{
    const port = new ArgumentSchema('-p', 0, 'number', true)
    const logging = new ArgumentSchema('-l', false, 'boolean', true)
    const dir = new ArgumentSchema('-d', '', 'string', true)
    const argument = new Argument('-l')
    const schema = new Schema([port, logging, dir]);

    const result = schema.isArgumentValid(argument)
    const expected = false
    expect(result).toBe(expected)
})

test("fgfgfgfg", () =>{
    const port = new ArgumentSchema('-p', 0, 'number', true)
    const logging = new ArgumentSchema('-l', false, 'boolean', true)
    const dir = new ArgumentSchema('-d', '', 'string', true)
    const argument = new Argument('-l', true)
    const schema = new Schema([port, logging, dir]);

    const result = schema.isArgumentValid(argument)
    const expected = true
    expect(result).toBe(expected)
})
