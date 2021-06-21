import { Argument } from "./Argument.js"
import { ArgumentSchema } from "./ArgumentSchema.js"
import { CompleteArgument } from "./CompleteArgument.js"

test("existFlag must return 'true' as a result of invoque it with an ArgumentSchema whose flag is present in a list of Arguments", () =>{
    const argumentSchema = new ArgumentSchema('-p', 0, 'number', true)    
    const argument1 = new Argument('-p', 8080)
    const argument2 = new Argument('-l')
    const argument3 = new Argument('-d', '/usr/logs')
    const completeArgument = new CompleteArgument([argument1, argument2, argument3], [])
    expect(completeArgument.existFlag(argumentSchema)).toBe(true)
})

test("existFlag must return 'false' as a result of invoque it with an ArgumentSchema whose flag is not present in a list of Arguments", () =>{
    const argumentSchema = new ArgumentSchema('-p', 0, 'number', true)    
    
    const argument1 = new Argument('-l')
    const argument2 = new Argument('-d', '/usr/logs')

    const completeargumentList = new CompleteArgument([argument1, argument2], [])
    expect(completeargumentList.existFlag(argumentSchema)).toBe(false)
})

test("returnDefaultValue must return '0' as a result of invoque with the flag -p", () => {
    const schema = [new ArgumentSchema('-p', 0, 'number', true), new ArgumentSchema('-l', false, 'boolean', false), new ArgumentSchema('-d', '', 'string', true)]

    const completeargumentList = new CompleteArgument([], schema)
    expect(completeargumentList.returnDefaultValue('-p')).toBe(0)
})

test("returnDefaultValue must return 'false' as a result of invoque with the flag -l", () => {
    const schema = [new ArgumentSchema('-p', 0, 'number', true), new ArgumentSchema('-l', false, 'boolean', false), new ArgumentSchema('-d', '', 'string', true)]

    const completeArgument = new CompleteArgument([], schema)
    expect(completeArgument.returnDefaultValue('-l')).toBe(false)
})

test("compliteDeafultValues must return the arguments whose value are null, filled with the default values.", () => {
    const schema = [new ArgumentSchema('-p', 0, 'number', true), new ArgumentSchema('-l', false, 'boolean', false), new ArgumentSchema('-d', '', 'string', true)]
    const argument = [new Argument('-l')]
    const completeArgument = new CompleteArgument(argument, schema)
    
    const result = [new Argument('-l', false)]
    expect(completeArgument.completeDefaultValues()).toStrictEqual(result)
})

test("compliteDeafultValues must return the arguments whose value are null, filled with the default values.", () => {
    const schema = [new ArgumentSchema('-p', 0, 'number', true), new ArgumentSchema('-l', false, 'boolean', false), new ArgumentSchema('-d', '', 'string', true)]
    const argumentList = [new Argument('-l'), new Argument('-p'), new Argument('-d')]
    const completeArgument = new CompleteArgument(argumentList, schema)
    
    const result = [new Argument('-l', false), new Argument('-p', 0), new Argument('-d', '')]
    expect(completeArgument.completeDefaultValues()).toStrictEqual(result)
})

test("completeMissingArguments must return a list complete with all the 'argument' missing from the 'schema'", () => {
    const schema = [new ArgumentSchema('-p', 0, 'number', true), new ArgumentSchema('-l', false, 'boolean', false), new ArgumentSchema('-d', '', 'string', true)]
    const argumentList = [new Argument('-l', true), new Argument('-p', 8080)]
    const completeArgument = new CompleteArgument(argumentList, schema)
    
    const result = [new Argument('-l', true), new Argument('-p', 8080), new Argument('-d', '')]
    expect(completeArgument.completeMissingArguments()).toStrictEqual(result)
})

test("completeMissingArguments must return a list complete with all the 'argument' missing from the 'schema'", () => {
    const schema = [new ArgumentSchema('-p', 0, 'number', true), new ArgumentSchema('-l', false, 'boolean', false), new ArgumentSchema('-d', '', 'string', true)]
    const argumentList = [new Argument('-l', true)]
    const completeArgument = new CompleteArgument(argumentList, schema)
    
    const result = [new Argument('-l', true), new Argument('-p', 0), new Argument('-d', '')]
    expect(completeArgument.completeMissingArguments()).toStrictEqual(result)
})

test("completeMissingArguments must return a list complete with all the 'argument' missing from the 'schema'", () => {
    const schema = [new ArgumentSchema('-p', 0, 'number', true), new ArgumentSchema('-l', false, 'boolean', false), new ArgumentSchema('-d', '', 'string', true)]
    const argumentList = []
    const completeArgument = new CompleteArgument(argumentList, schema)
    
    const result = [new Argument('-p', 0), new Argument('-l', false), new Argument('-d', '')]
    expect(completeArgument.completeMissingArguments()).toStrictEqual(result)
})

