import { Parser } from "./Parser.js"
import { Schema } from "./Schema.js"
import { FlagSchema } from "./FlagSchema.js"
import { Flag } from "./Flag.js"

test("Schema should detect 'Parse' if Match given a flag , should return true", () =>{
    
    const portArg = new Flag('-p',8080);
    const loggingArg = new Flag('-l');
    const dirArg= new Flag('-d','/usr/logs');

    const port = new FlagSchema('-p', 0, 'number');
    const logging = new FlagSchema('-l', false, 'boolean');
    const dir = new FlagSchema('-d', '', 'string');

    const parser= new Parser([port, logging, dir], [portArg, loggingArg, dirArg]);

    const result = parser.parse(portArg);
    const expected =true
    expect(result).toBe(expected)
})