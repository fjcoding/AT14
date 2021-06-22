import { FlagSchema } from './FlagSchema.js'
import { Parser } from './Parser.js'
import { TypeDetector } from './TypeDetector.js'
import { Type } from './Type.js'
import { Schema } from './Schema.js'

test('The Schema class get a FlagSchemas Array and a string arguments and it must detect if it is valid Case 1: -l -p asd -d /user/asd it must return false',()=>{
    const port = new FlagSchema('-p', 0, 'number')
    const logging = new FlagSchema('-l', false, 'boolean')
    const dir = new FlagSchema('-d', '', 'string')
    
    const stringCmd = "-l -p asd -d /user/asd";
    const parserCmd = new Parser(stringCmd);
    const arrayArgs = parserCmd.getMaps();
       
    const schema = new Schema([port, logging, dir],arrayArgs);
    const result =  schema.isValid();
    const expected = false;
    expect(result).toBe(expected)
   
});

test('The Schema class get a FlagSchemas Array and a string arguments and it must detect if it is valid Case 2: -l -p 8080 -d /user/asd it must return true',()=>{
    const port = new FlagSchema('-p', 0, 'number')
    const logging = new FlagSchema('-l', false, 'boolean')
    const dir = new FlagSchema('-d', '', 'string')
    
    const stringCmd = "-l -p 8080 -d /user/asd";
    const parserCmd = new Parser(stringCmd);
    const arrayArgs = parserCmd.getMaps();
       
    const schema = new Schema([port, logging, dir],arrayArgs);
    const result =  schema.isValid();
    const expected = true;
    expect(result).toBe(expected)
   
});

test('The Schema class get a FlagSchemas Array and a string arguments and it must detect if it is valid Case 3: -l -p 8080 -d 8080 it must return false',()=>{
    const port = new FlagSchema('-p', 0, 'number')
    const logging = new FlagSchema('-l', false, 'boolean')
    const dir = new FlagSchema('-d', '', 'string')
    
    const stringCmd = "-l -p 8080 -d 8080";
    const parserCmd = new Parser(stringCmd);
    const arrayArgs = parserCmd.getMaps();
       
    const schema = new Schema([port, logging, dir],arrayArgs);
    const result =  schema.isValid();
    const expected = false;
    expect(result).toBe(expected)
   
});



