import { Parses } from './Parses'
import {Schema} from './Schema'
import { Flag } from "./Flag.js";
import { DefaultValue } from "./DefaultValue.js";
import { VarValidate } from './VarValidate';

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

/*test('isItValid from Parse class should return the "flagL" value and introduce the schema and the flagL value to the function',()=>
{
    const schemaL = new Schema('-l',false,'boolean');

    const arraySchema = [schemaL];

    const flagL = new Flag('-l',true);

    const detect = new Parses;
    const result = detect.isItValid(arraySchema,flagL);

    const expected = flagL;
    expect(result).toStrictEqual(expected);
})*/

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

test('splitterArguments should return the given string as a array pulling away the words ',()=>
{
    const arg="-l -p 8080 -d /usr/logs";

    const detect = new Parses();

    const result = detect.splitterArguments(arg);
    
    const expected = ['-l', '-p', '8080', '-d', '/usr/logs'];
    
    expect(result).toStrictEqual(expected);//esta funcion permite comparar arrays en el expected

})

test('buildIfIsFlag should return new flags given an array',()=>
{
    const arg=['-l', '-p', '8080', '-d', '/usr/logs'];

    const schemaL = new Schema('-l',false,'boolean');
    const schemaP = new Schema('-p',0,'number');
    const schemaD = new Schema('-d','1','string');

    const schema = [schemaL,schemaP,schemaD];

    const detect = new Parses();

    const result = detect.buildIfIsFlag(arg,schema);
    
    const expected = [new Flag ('-l',),
                      new Flag ('-p', '8080' ),
                      new Flag ('-d', '/usr/logs')];
    
    expect(result).toStrictEqual(expected);

})

test('parseIfPosible should swtich the values from its flags if they are number or string and return the flags with values switched',()=>
{
    const newFlags = [new Flag ('-l','true'),
                    new Flag ('-p', '8080' ),
                    new Flag ('-d', '/usr/logs')];
    
    const detect = new Parses;
    const result = detect.parseIfPosible(newFlags);
    const expected = [new Flag ('-l',true),
                      new Flag ('-p', 8080),
                      new Flag ('-d', '/usr/logs')]; 

    expect(result).toStrictEqual(expected);

})

