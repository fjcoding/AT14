import { Schema } from "./Schema.js"
import { FlagSchema } from "./FlagSchema.js"
import { Flag } from "./Flag.js"
import { DefaultValue } from "./DefaultValue.js"


test("Schema should detect if the TypeDate given a flag is valid ", () =>{
    
    const port = new FlagSchema('-p', 0, 'number')
    const logging = new FlagSchema('-l', false, 'boolean')
    const dir = new FlagSchema('-d', '', 'string');

    const portArg = new Flag('-p',8080)
    const loggingArg = new Flag('-l')
    const dirArg= new Flag('-d','/usr/logs')

    const schema = new Schema([port, logging, dir])

    const result = schema.isValid(portArg)
    const expected =true
    expect(result).toBe(expected)
})

test("Schema should detect if the value of given a flag is null ", () =>{
    
    const portArg = new Flag('-p',null)
    const schema = new Schema()

    const result = schema.isNull(portArg)
    const expected =true
    expect(result).toBe(expected)
})

test("Schema should detect if the value of given a flag is not null ", () =>{
    
    const portArg = new Flag('-p',8080)
    const schema = new Schema()

    const result = schema.isNull(portArg)
    const expected =false
    expect(result).toBe(expected)
})

test("Schema should set a Default Value '0' given a flag('-p') return flag('-p',0)", () =>{
    
    const port = new FlagSchema('-p', 0, 'number')
    const logging = new FlagSchema('-l', false, 'boolean')
    const dir = new FlagSchema('-d', '', 'string')

    const portArg = new Flag('-p')
    const loggingArg = new Flag('-l')
    const dirArg= new Flag('-d','/usr/logs')
    
    const schema = new Schema([port, logging, dir])

    const result = schema.setDefault(portArg)
    const expected = new Flag('-p', 0)
    //expect(result).toBe(expected)
    expect(result).toStrictEqual(expected)
})

test("Schema should set a Default Value 'False' given a flag('-l') return flag('-l',false)", () =>{
    
    const port = new FlagSchema('-p', 0, 'number')
    const logging = new FlagSchema('-l', false, 'boolean')
    const dir = new FlagSchema('-d', '', 'string')

    const portArg = new Flag('-p')
    const loggingArg = new Flag('-l')
    const dirArg= new Flag('-d','/usr/logs')

    const schema = new Schema([port, logging, dir])

    const result = schema.setDefault(loggingArg)
    const expected = new Flag('-l', false)
    //expect(result).toBe(expected)
    expect(result).toStrictEqual(expected)
})

test("Schema should set a Default Value 'False' given a flag('-d') return flag('-d','')", () =>{
    
    const port = new FlagSchema('-p', 0, 'number')
    const logging = new FlagSchema('-l', false, 'boolean')
    const dir = new FlagSchema('-d', '', 'string')

    const portArg = new Flag('-p')
    const loggingArg = new Flag('-l')
    const dirArg= new Flag('-d','/usr/logs')

    const schema = new Schema([port, logging, dir])

    const result = schema.setDefault(dirArg)
    const expected = new Flag('-d', '')
    //expect(result).toBe(expected)
    expect(result).toStrictEqual(expected)
})