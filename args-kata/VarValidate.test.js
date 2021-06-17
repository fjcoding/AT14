import { VarValidate } from "./VarValidate.js"

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
