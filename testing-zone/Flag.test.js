import { Flag } from "./Flag"

test("class Flag - A new Flag element should be created with an id value of '-p'" , ()=>{

    const flagPort = new Flag('-p');
    const result = flagPort.id;
    const expected = '-p';
    expect(result).toBe(expected);
})

test("class Flag - A new Flag element should be created with a value value of '8080'"  , ()=>{

    const flagPort = new Flag('', 8080);
    const result = flagPort.value;
    const expected = 8080;
    expect(result).toBe(expected);
})