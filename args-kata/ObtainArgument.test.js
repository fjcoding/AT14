import { Argument } from "./Argument.js";
import { ObtainArgument } from "./ObtainArgument.js"

test("isFlag must return true by invoking it with '-l'", () => {
    var obtainArgument = new ObtainArgument();
    expect(obtainArgument.isFlag('-l')).toBe(true)
})

test("isFlag must return false by invoking it with '-4'", () => {
    var obtainArgument = new ObtainArgument();
    expect(obtainArgument.isFlag('-4')).toBe(false)
})

test("isFlag must return false by invoking it with '-abc'", () => {
    var obtainArgument = new ObtainArgument();
    expect(obtainArgument.isFlag('-abc')).toBe(false)
})

test("isFlag must return false by invoking it with '--'", () => {
    var obtainArgument = new ObtainArgument();
    expect(obtainArgument.isFlag('--')).toBe(false)
})

test("isLetter must return true by invoking it with 'a'", () => {
    var obtainArgument = new ObtainArgument();
    expect(obtainArgument.isLetter('&')).toBe(false)
})

test("isLetter must return false by invoking it with '8'", () => {
    var obtainArgument = new ObtainArgument();
    expect(obtainArgument.isLetter('8')).toBe(false)
})

test("isLetter must return false by invoking it with '&'", () => {
    var obtainArgument = new ObtainArgument();
    expect(obtainArgument.isLetter('&')).toBe(false)
})

test("detectValue must return number 123 by invoking it with string '123'", () => {
    var obtainArgument = new ObtainArgument();
    expect(obtainArgument.detectValue('123')).toBe(123)
})

test("detectValue must return boolean false by invoking it with string 'false'", () => {
    var obtainArgument = new ObtainArgument();
    expect(obtainArgument.detectValue('false')).toBe(false)
})

test("detectValue must return boolean -5 by invoking it with string '-5'", () => {
    var obtainArgument = new ObtainArgument();
    expect(obtainArgument.detectValue('-5')).toBe(-5)
})

test("detectValue must return string '/usr/logs' by invoking it with string '/usr/logs'", () => {
    var obtainArgument = new ObtainArgument();
    expect(obtainArgument.detectValue('/usr/logs')).toBe('/usr/logs')
})

test("obtainArguments must return 'listArguments' object by invoking it with string '-l -p 8080 -d /usr/logs'", () => {
    var obtainArgument = new ObtainArgument();
    var listArguments = [new Argument('-l', null), new Argument('-p', 8080), new Argument('-d', '/usr/logs')];
    expect(obtainArgument.obtainArguments('-l -p 8080 -d /usr/logs')).toStrictEqual(listArguments)
})

test("obtainArguments must return 'listArguments' object by invoking it with string '-l -p -d'", () => {
    var obtainArgument = new ObtainArgument();
    var listArguments = [new Argument('-l', null), new Argument('-p', null), new Argument('-d', null)];
    expect(obtainArgument.obtainArguments('-l -p -d')).toStrictEqual(listArguments)
})

test("obtainArguments must return 'listArguments' object by invoking it with string '125 -125 abcd'", () => {
    var obtainArgument = new ObtainArgument();
    var listArguments = [];
    expect(obtainArgument.obtainArguments('125 -125 abcd')).toStrictEqual(listArguments)
})