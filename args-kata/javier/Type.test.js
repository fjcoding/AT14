import {Type} from './Type.js'
import * as fs from 'fs';
import * as readline from 'readline';

const myInterface = readline.createInterface({
    input: fs.createReadStream('./testNumber.txt')
});
/*
test('The function getType() should be return a number for many number in File',()=>{
    myInterface.on('line', function (line) {
        let obj    = new Type(parseInt(line));
        let result = obj.getType();        
        let excepted = "number";
        expect(result).toBe(excepted);
    });
});
*/
test('The function getType() should be return a number for a value -5',()=>{
    const obj    = new Type(-5);
    const result = obj.getType();
    const excepted = "number";
    expect(result).toBe(excepted);
});

test('The function getType() should be return a number for a value 5',()=>{
    const obj    = new Type(5);
    const result = obj.getType();
    const excepted = "number";
    expect(result).toBe(excepted);
});

test('The function getType() should be return a number for a value "5"',()=>{
    const obj    = new Type("5");
    const result = obj.getType();
    const excepted = "string";
    expect(result).toBe(excepted);
});

test('The function getType() should be return a string for a value "Hello World"',()=>{
    const obj    = new Type("Hello World");
    const result = obj.getType();
    const excepted = "string";
    expect(result).toBe(excepted);
});

test('The function getType() should be return a boolean for a value false',()=>{
    const obj    = new Type(false);
    const result = obj.getType();
    const excepted = "boolean";
    expect(result).toBe(excepted);
});

test('The function getType() should be return a numberArray for a value [4,8,6,-1]',()=>{
    const obj    = new Type([4,8,6,-1]);
    const result = obj.getType();
    const excepted = "numberArray";
    expect(result).toBe(excepted);
});

test('The function getType() should be return a stringArray for a value ["5","6","Hola"]',()=>{
    const obj    = new Type(["5","6","Hola"]);
    const result = obj.getType();
    const excepted = "stringArray";
    expect(result).toBe(excepted);
});


