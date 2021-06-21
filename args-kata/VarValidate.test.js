import { VarValidate } from "./VarValidate.js"
import { Schema } from "./Schema.js";
import { Flag } from "./Flag.js";
import { DefaultValue } from './DefaultValue.js'

test("valueDetector should detect 'number' as the type of a value 0 ",()=>
{
    const detector = new VarValidate;
    const result = detector.valueDetector(0);
    const expected = "number";
    expect(result).toBe(expected);
})

test("valueDetector should detect 'string' as the type of a value hola ",()=>
{
    const detector = new VarValidate;
    const result = detector.valueDetector('hola');
    const expected = "string";
    expect(result).toBe(expected);
})

test("valueDetector should detect 'boolean' as the type of a value true ",()=>
{
    const detector = new VarValidate;
    const result = detector.valueDetector(true);
    const expected = "boolean";
    expect(result).toBe(expected);
})

test("valueDetector should detect 'number' as the type of a value 1.5 ",()=>
{
    const detector = new VarValidate;
    const result = detector.valueDetector(1.5);
    const expected = "number";
    expect(result).toBe(expected);
})
//testing the valueDetector function
test("valueCheckEmpty should detect 'true' if a value from the flag is empty using an empty value",()=>
{
    const detector = new VarValidate;
    const result = detector.valueCheckEmpty();
    const expected = true;
    expect(result).toBe(expected);
})

test("valueCheckEmpty should detect 'false' if a value from the flag is not empty using '456' as value",()=>
{
    const detector = new VarValidate;
    const result = detector.valueCheckEmpty(456);
    const expected = false;
    expect(result).toBe(expected);
})
//testing the valueReplaceDefault function
test("valueReplaceDefault should replace the default value from the flag -l to 'false' ",()=>
{
    const defValL = new DefaultValue('-l', false);

    const flagL = new Flag('-l');

    const defvalue = [defValL];

    const detector = new VarValidate;
    const result = detector.valueReplaceDefault(flagL,defvalue).value;
    const expected =  defValL.deftValue;
    expect(result).toBe(expected);
})

test("valueReplaceDefault should replace the default value from the flag -p to '0' ",()=>
{

    const defValP = new DefaultValue('-p',0);
    const flagP = new Flag('-p',2);

    const defvalue = [defValP];

    const detector = new VarValidate;
    const result = detector.valueReplaceDefault(flagP,defvalue).value;
    const expected =  defValP.deftValue;
    expect(result).toBe(expected);
})

test("valueReplaceDefault should replace the default value from the flag -d to 'asd'",()=>
{

    const defValD = new DefaultValue('-d',"asd");

    const flagD = new Flag('-d','/usr/logs');

    const defvalue = [defValD];

    const detector = new VarValidate;
    const result = detector.valueReplaceDefault(flagD,defvalue).value;
    const expected =  defValD.deftValue;
    expect(result).toBe(expected);
})

test("isFlag should check if the arguments '-l' is a flag and return 'true'",()=>
{

    const arg = "-l";
    const schemaL = new Schema('-l',false,'boolean');
  
    const fullSchema = [schemaL];

    const detector = new VarValidate;
    const result = detector.isFlag(arg,fullSchema);
    const expected =  true;
    expect(result).toBe(expected);
})


test("isFlag should check if the arguments '-p' is a flag and return 'true'",()=>
{

    const arg = "-p";
    const schemaP = new Schema('-p',0,'number');
  
    const fullSchema = [schemaP];

    const detector = new VarValidate;
    const result = detector.isFlag(arg,fullSchema);
    const expected =  true;
    expect(result).toBe(expected);
})

test("isFlag should check if the arguments '-d' is a flag and return 'true'",()=>
{

    const arg = "-d";
    const schemaD = new Schema('-d'," ",'string');
  
    const fullSchema = [schemaD];

    const detector = new VarValidate;
    const result = detector.isFlag(arg,fullSchema);
    const expected =  true;
    expect(result).toBe(expected);
})

test("isFlag should check if the arguments 'asd' is a flag and return 'false'",()=>
{

    const arg = "asd";
    const schemaD = new Schema('-d'," ",'string');
  
    const fullSchema = [schemaD];

    const detector = new VarValidate;
    const result = detector.isFlag(arg,fullSchema);
    const expected =  false;
    expect(result).toBe(expected);
})

test(('ifValueIsNumber should return switched value "arg" to a type number "123"'),()=>
{
    const arg = '123'

    const detector = new VarValidate;
    const result = detector.ifValueIsNumber(arg);
    const expected = 123;
    expect(result).toBe(expected);
})

test(('ifValueIsNumber should not return switched value, it should keep as its original value'),()=>
{
    const arg = '123a'

    const detector = new VarValidate;
    const result = detector.ifValueIsNumber(arg);
    const expected = '123a';
    expect(result).toBe(expected);
})

test(('ifValueIsBoolean should return switched value to a boolean "true"'),()=>
{
    const arg = "true";

    const detector  = new VarValidate();
    const result = detector.ifValueIsBoolean(arg);
    const expected = true;
    expect(result).toBe(expected);
})

test(('ifValueIsBoolean should not return switched value, it should keep its value'),()=>
{
    const arg = "truefalse";

    const detector  = new VarValidate();
    const result = detector.ifValueIsBoolean(arg);
    const expected = "truefalse";
    expect(result).toBe(expected);
})

/*test("valueReplaceDefault should detect the flag value ",()=>
{
    const defValL = new DefaultValue('-l', false);
    const defValD = new DefaultValue('-d',"asd");
    const defValP = new DefaultValue('-p',0);

    const flagL = new Flag('-l');
    const flagP = new Flag('-p',2);
    const flagD = new Flag('-d','/usr/logs');

    const defvalue = [defValL,defValD,defValP];

    const detector = new VarValidate;
    const result = detector.valueReplaceDefault(flagD,defvalue);
    const expected =  Flag('-l',false);
    expect(result).toBe(expected);
})*/
