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



