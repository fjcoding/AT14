import { FlagSchema } from "./FlagSchema.js"

test("class FlagSchema - A new Flag should be created with an id of '-p' and value of '8080'",()=>{

    const result = new FlagSchema('-p',8080,'number');
    const expected = new FlagSchema('-p',8080,'number');
    expect(result).toStrictEqual(expected);
})

test("flagSchema.getId() - A new FlagSchema element should be created then return an id of '-p'" , ()=>{

    const flagSchema = new FlagSchema('-p');
    const result = flagSchema.getId();
    const expected = '-p';
    expect(result).toBe(expected);
})

test("flagSchema.getValue() - A new FlagSchema element should be created then return a defaultValue of '8080'"  , ()=>{

    const flagSchema = new FlagSchema('', 8080);
    const result = flagSchema.getDefaultValue();
    const expected = 8080;
    expect(result).toBe(expected);
})

test("flagSchema.getDataType() - A new FlagSchema element should be created then return a dataType of 'number'"  , ()=>{

    const flagSchema = new FlagSchema('', 8080,'number');
    const result = flagSchema.getDataType();
    const expected = 'number';
    expect(result).toBe(expected);
})

test("flagSchema.setId() - A new FlagSchema element should be created with an original id then change to '-p'" , ()=>{

    const flagSchema = new FlagSchema('-d');
    flagSchema.setId('-p');
    const result = flagSchema.getId();
    const expected = '-p';
    expect(result).toBe(expected);
})

test("flagSchema.setDefaultValue() - A new FlagSchema element should be created with an original value then change to '8080'"  , ()=>{

    const flagSchema = new FlagSchema('-p', 0);
    flagSchema.setDefaultValue(8080);
    const result = flagSchema.getDefaultValue();
    const expected = 8080;
    expect(result).toBe(expected);
})

test("flagSchema.setDataType() - A new FlagSchema element should be created with an original value then change to 'number'"  , ()=>{

    const flagSchema = new FlagSchema('-p', 0 , 'boolean');
    flagSchema.setDataType('number');
    const result = flagSchema.getDataType();
    const expected = 'number';
    expect(result).toBe(expected);
})
/*
const flagSchemaPort = new FlagSchema('-p', 0, 'number')
const flagSchemaLogging = new FlagSchema('-l', false, 'boolean')
const flagSchemaDir = new FlagSchema('-d', '', 'string')*/