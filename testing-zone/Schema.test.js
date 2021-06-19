import { Schema } from "./Schema.js"
import { FlagSchema } from "./FlagSchema.js"
import { Flag } from "./Flag.js"

//Compare Function

test("Schema.Compare() function should return a 'True' value", () =>{

    const schema = new Schema;
    const result = schema.compare(1,1);
    const expected = true;
    expect(result).toBe(expected)
})

test("Schema.Compare() function should return a 'False' value", () =>{

    const schema = new Schema;
    const result = schema.compare(0,1);
    const expected = false;
    expect(result).toBe(expected)
})

//validateFlagId Function

test("Schema.validateFlagId() function should return a 'True' value", () =>{

    const schema = new Schema;
    const port = new FlagSchema('-p');
    const portArg = new Flag('-p');
    const result = schema.validateFlagId(port,portArg);
    const expected = true;
    expect(result).toBe(expected)
})

test("Schema.validateFlagId() function should return a 'False' value", () =>{

    const schema = new Schema;
    const port = new FlagSchema('-p');
    const portArg = new Flag('-d');
    const result = schema.validateFlagId(port,portArg);
    const expected = false;
    expect(result).toBe(expected)
})

//validateFlagType

test("Schema.validateFlagType() function should return a 'True' value", () =>{

    const schema = new Schema;
    const logging = new FlagSchema('-l', false, 'boolean');
    const loggingArg = new Flag('-l',true);
    const result = schema.validateFlagType(loggingArg,logging);
    const expected = true;
    expect(result).toBe(expected)
})

test("Schema.validateFlagType() function should return a 'True' value", () =>{

    const schema = new Schema;
    const logging = new FlagSchema('-l', false, 'boolean');
    const loggingArg = new Flag('-l',false);
    const result = schema.validateFlagType(loggingArg,logging);
    const expected = true;
    expect(result).toBe(expected)
})

test("Schema.validateFlagType() function should return a 'False' value", () =>{

    const schema = new Schema;
    const logging = new FlagSchema('-l', false, 'boolean');
    const loggingArg = new Flag('-l',8080);
    const result = schema.validateFlagType(loggingArg,logging);
    const expected = false;
    expect(result).toBe(expected)
})
test("Schema.validateFlagType() function should return a 'False' value", () =>{

    const schema = new Schema;
    const logging = new FlagSchema('-l', false, 'boolean');
    const loggingArg = new Flag('-l');
    const result = schema.validateFlagType(loggingArg,logging);
    const expected = false;
    expect(result).toBe(expected)
})

test("Schema.validateFlag() function should return a 'True' value", () =>{

    const port = new FlagSchema('-p', 0, 'number');

    const schema = new Schema([port]);

    const portArg = new Flag('-p', 8080)

    const result = schema.validateFlag(portArg);
    const expected = true;
    expect(result).toBe(expected)
})

test("Schema.setDefaultValue() function should return a 'True' value", () =>{

    const port = new FlagSchema('-p', 0, 'number');

    const schema = new Schema();

    const portArg = new Flag('-p')

    const result = schema.setDefaultValue(portArg,port);
    const expected = true;
    expect(result).toBe(expected)
})

test("Schema.validateFlag() function should return a 'True' value", () =>{

    const port = new FlagSchema('-p', 0, 'number');

    const schema = new Schema([port]);

    const portArg = new Flag('-p')

    const result = schema.validateFlag(portArg);
    const expected = true;
    expect(result).toBe(expected)
})


/*
const loggingArg = new Flag('-l')
const dirArg = new Flag('-d', '/usr/logs')
*/
