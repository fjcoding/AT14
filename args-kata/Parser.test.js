import { Parser } from "./Parser.js"
import { Argument } from "./Argument.js"
import { ArgumentSchema } from "./ArgumentSchema.js"

test("Parser must return '-l false -p 8080 -d /usr/logs' by invoking with '-l false -p 8080 -d /usr/logs'", () =>{
    const schema = [new ArgumentSchema('-p', 0, 'number', true), new ArgumentSchema('-l', false, 'boolean', false), new ArgumentSchema('-d', '', 'string', true)]
    const parser = new Parser(schema);
    expect(parser.parseador('-l -p 8080 -d /usr/logs')).toBe('-l false -p 8080 -d /usr/logs')
})

test("Parser must return '-l false -p 8080 -d  ' by invoking with '-l -p 8080'", () =>{
    const schema = [new ArgumentSchema('-p', 0, 'number', true), new ArgumentSchema('-l', false, 'boolean', false), new ArgumentSchema('-d', '', 'string', true)]
    const parser = new Parser(schema);
    expect(parser.parseador('-l -p 8080')).toBe('-l false -p 8080 -d')
})

test("Parser must return '-p 8080 -l false -d' by invoking with '-p 8080'", () =>{
    const schema = [new ArgumentSchema('-p', 0, 'number', true), new ArgumentSchema('-l', false, 'boolean', false), new ArgumentSchema('-d', '', 'string', true)]
    const parser = new Parser(schema);
    expect(parser.parseador('-p 8080')).toBe('-p 8080 -l false -d')
})

test("Parser must return '-l false -p 8080 -d  ' by invoking with '-l -p 8080'", () =>{
    const schema = [new ArgumentSchema('-p', 0, 'number', true), new ArgumentSchema('-l', false, 'boolean', false), new ArgumentSchema('-d', '', 'string', true)]
    const parser = new Parser(schema);
    expect(parser.parseador('')).toBe('-p 0 -l false -d')
})

test("Parser must return the errors list 'errorsList' by invoking with '-l abcd -p 8080 -d 8080'", () =>{
    const schema = [new ArgumentSchema('-p', 0, 'number', true), new ArgumentSchema('-l', false, 'boolean', false), new ArgumentSchema('-d', '', 'string', true)]
    const parser = new Parser(schema);
    const errorsList = ['The value asigned to -l is a type no valid.', 
                        'The value asigned to -d is a type no valid.']
    expect(parser.parseador('-l abcd -p 8080 -d 8080')).toStrictEqual(errorsList)
})

test("Parser must return the errors list 'errorsList' by invoking with '-l -p -d'", () =>{
    const schema = [new ArgumentSchema('-p', 0, 'number', true), new ArgumentSchema('-l', false, 'boolean', false), new ArgumentSchema('-d', '', 'string', true)]
    const parser = new Parser(schema);
    const errorsList = ['The flag -p requires a value associated', 
                        'The flag -d requires a value associated']
    expect(parser.parseador('-l -p -d')).toStrictEqual(errorsList)
})

test("Parser must return the errors list 'errorsList' by invoking with '-l -p abcd -d -k'", () =>{
    const schema = [new ArgumentSchema('-p', 0, 'number', true), new ArgumentSchema('-l', false, 'boolean', false), new ArgumentSchema('-d', '', 'string', true)]
    const parser = new Parser(schema);
    const errorsList = ['The value asigned to -p is a type no valid.',
                        'The flag -d requires a value associated',
                        'The flag -k is not a flag valid for the schema.']
    expect(parser.parseador('-l -p abcd -d -k')).toStrictEqual(errorsList)
})