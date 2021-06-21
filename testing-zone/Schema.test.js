import { Schema } from "./Schema.js"
import { FlagSchema } from "./FlagSchema.js"
import { Flag } from "./Flag.js"

//Schema.js Unit Tests

//Compare Function

test("Schema.Compare() function should return a 'True' value", () =>{

    const schema = new Schema;
    const result = schema.compare(1,1);
    const expected = true;
    expect(result).toBe(expected)
})

test("Schema.Compare() function should return a 'False' value", () =>{

    const schema = new Schema;
    const result = schema.compare(true,1);
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

//setDefaultValue

test("Schema.setDefaultValue() - Should return a 'True' value", () =>{

    const port = new FlagSchema('-p', 0, 'number');

    const schema = new Schema();

    const portArg = new Flag('-p')

    const result = schema.setDefaultValue(portArg,port);
    const expected = true;
    expect(result).toBe(expected)
})

//validateFlag

test("Schema.validateFlag() - Should validate a correct Flag with value and return a 'True' value", () =>{

    const port = new FlagSchema('-p', 0, 'number');

    const schema = new Schema([port]);

    const portArg = new Flag('-p', 8080)

    const result = schema.validateFlag(portArg);
    const expected = true;
    expect(result).toBe(expected)
})


test("Schema.validateFlag() - Should validate a correct Flag without value and return a 'True' value", () =>{

    const port = new FlagSchema('-p', 0, 'number');

    const schema = new Schema([port]);

    const portArg = new Flag('-p')

    const result = schema.validateFlag(portArg);
    const expected = true;
    expect(result).toBe(expected)
})

test("Schema.validateFlag() - Should validate a wrong Flag and return a 'False' value", () =>{

    const port = new FlagSchema('-p', 0, 'number');

    const schema = new Schema([port]);

    const portArg = new Flag('-x',0)

    const result = schema.validateFlag(portArg);
    const expected = false;
    expect(result).toBe(expected)
})

test("Schema.validateFlag() - Should validate a wrong Flag and return a 'True' value", () =>{

    const port = new FlagSchema('-p', 0 , 'number');
    const logging = new Flag('-l', false ,'boolean');
    const dir = new Flag('-d', '', 'string');

    const schema = new Schema([logging,dir,port]);

    const portArg = new Flag('-p',false);

    const result = schema.validateFlag(portArg);
    const expected = true;
    expect(result).toBe(expected);
})
/*
const loggingArg = new Flag('-l')
const dirArg = new Flag('-d', '/usr/logs')
*/
