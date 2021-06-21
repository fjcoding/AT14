import { Parses } from './Parses'
import {Schema} from './Schema'
import { Flag } from "./Flag.js";
import { DefaultValue } from "./DefaultValue.js";

test('isItValid from Parse class should return if flags from array are valid returning "true"',()=>
{
    const schemaL = new Schema('-l',false,'boolean');

    const arraySchema = [schemaL];

    const flagL = new Flag('-l',true);

    const detect = new Parses;
    const result = detect.isItValid(arraySchema,flagL);

    const expected = true;
    expect(result).toBe(expected);
})

test('isItValid from Parse class should introduce a boolean value, if flags from array are not valid it will return "false"',()=>
{
    const schemaL = new Schema('-l',false,'boolean');

    const arraySchema = [schemaL];

    const flagL = new Flag('-l','asd');

    const detect = new Parses;
    const result = detect.isItValid(arraySchema,flagL);

    const expected = false;
    expect(result).toBe(expected);
})

test('isItValid from Parse class should introduce a number value, if flags from array are valid it will return "true"',()=>
{
    const schemaL = new Schema('-l',false,'boolean');

    const arraySchema = [schemaL];

    const flagL = new Flag('-l',0);

    const detect = new Parses;
    const result = detect.isItValid(arraySchema,flagL);

    const expected = false;
    expect(result).toBe(expected);
})


test('isItValid from Parse class should introduce a number value, if flags from array are valid it will return "true"',()=>
{
    const schemaL = new Schema('-l',false,'boolean');

    const arraySchema = [schemaL];

    const flagL = new Flag('-l',0);

    const detect = new Parses;
    const result = detect.isItValid(arraySchema,flagL);

    const expected = false;
    expect(result).toBe(expected);
})

test('completeIfEmpty should return the the missing value "false" from flag "-l" completed',()=>
{
    const schemaL = new Schema('-l',false,'boolean');
    const arraySchema = [schemaL];

    const flagL = new Flag('-l');

    const defValL = new DefaultValue('-l', false);
    const defvalue = [defValL];

    const detect = new Parses;

    const result = detect.completeIfEmpty(arraySchema,flagL,defvalue).value;

    const expected = defvalue[0].deftValue;
    //expect(result).toBe(expected);
    expect(result).toBe(false);
})

test('completeIfEmpty should return the the missing value "0" from flag "-p" completed',()=>
{
    const schemaP = new Schema('-p',0,'number');
    const arraySchema = [schemaP];

    const flagP = new Flag('-p');

    const defValP = new DefaultValue('-p',0);
    const defvalue = [defValP];

    const detect = new Parses;

    const result = detect.completeIfEmpty(arraySchema,flagP,defvalue).value;

    const expected = defValP.deftValue;
    //expect(result).toBe(expected);
    expect(result).toBe(0);
})

test('completeIfEmpty should return the the missing value "asd" from flag "-d" completed',()=>
{
    const schemaD = new Schema('-d',0,'string');
    const arraySchema = [schemaD];

    const flagD = new Flag('-d');

    const defValD = new DefaultValue('-d','asd');
    const defvalue = [defValD];

    const detect = new Parses;

    const result = detect.completeIfEmpty(arraySchema,flagD,defvalue).value;

    //const expected = defValD.deftValue;

    const expected = defValD.deftValue;
    //expect(result).toBe(expected);
    expect(result).toBe('asd');
})

