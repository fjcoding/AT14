import { Schema } from "./Schema.js"
import { Flag } from './Flag.js'
import { FlagSchema } from './FlagSchema.js'

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

test("This function must return 'false' as a result to invoque it with 'string' as second parameter and null as third parameters.", () =>{
    test("", () =>{
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
    const port = new FlagSchema('-p', 0, 'number', true)
    const logging = new FlagSchema('-l', false, 'boolean', false)
    const dir = new FlagSchema('-d', '', 'string', true)
    const flag = new Flag('-p', 8080)
    const schema = new Schema([port, logging, dir]);

    const result = schema.isFlagValid(flag)
    const expected = true
    expect(result).toBe(expected)
})

test("", () =>{
    const port = new FlagSchema('-p', 0, 'number', true)
    const logging = new FlagSchema('-l', false, 'boolean', false)
    const dir = new FlagSchema('-d', '', 'string', true)
    const flag = new Flag('-p', 'dfasdfas')
    const schema = new Schema([port, logging, dir]);

    const result = schema.isFlagValid(flag)
    const expected = false
    expect(result).toBe(expected)
})

test("", () =>{
    const port = new FlagSchema('-p', 0, 'number', true)
    const logging = new FlagSchema('-l', false, 'boolean', false)
    const dir = new FlagSchema('-d', '', 'string', true)
    const flag = new Flag('-p')
    const schema = new Schema([port, logging, dir]);

    const result = schema.isFlagValid(flag)
    const expected = false
    expect(result).toBe(expected)
})

test("", () =>{
    const port = new FlagSchema('-p', 0, 'number', true)
    const logging = new FlagSchema('-l', false, 'boolean', false)
    const dir = new FlagSchema('-d', '', 'string', true)
    const flag = new Flag('-l')
    const schema = new Schema([port, logging, dir]);

    const result = schema.isFlagValid(flag)
    const expected = true
    expect(result).toBe(expected)
})

test("", () =>{
    const port = new FlagSchema('-p', 0, 'number', true)
    const logging = new FlagSchema('-l', false, 'boolean', false)
    const dir = new FlagSchema('-d', '', 'string', true)
    const flag = new Flag('-d', '/url/house')
    const schema = new Schema([port, logging, dir]);

    const result = schema.isFlagValid(flag)
    const expected = true
    expect(result).toBe(expected)
})


test("", () =>{
    const port = new FlagSchema('-p', 0, 'number', true)
    const logging = new FlagSchema('-l', false, 'boolean', true)
    const dir = new FlagSchema('-d', '', 'string', true)
    const flag = new Flag('-l')
    const schema = new Schema([port, logging, dir]);

    const result = schema.isFlagValid(flag)
    const expected = false
    expect(result).toBe(expected)
})

test("", () =>{
    const port = new FlagSchema('-p', 0, 'number', true)
    const logging = new FlagSchema('-l', false, 'boolean', true)
    const dir = new FlagSchema('-d', '', 'string', true)
    const flag = new Flag('-l', 'true')
    const schema = new Schema([port, logging, dir]);

    const result = schema.isFlagValid(flag)
    const expected = true
    expect(result).toBe(expected)
})
