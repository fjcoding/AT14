import { Flag } from "./Flag"

test("class Flag - A new Flag should be created with an id of '-p' and value of '8080'",()=>{

    const result = new Flag('-p',8080);
    const expected = new Flag('-p',8080);
    expect(result).toStrictEqual(expected);
})

test("flag.getId() - A new Flag element should be created then return an id of '-p'" , ()=>{

    const flag = new Flag('-p');
    const result = flag.getId();
    const expected = '-p';
    expect(result).toBe(expected);
})

test("flag.getValue() - A new Flag element should be created then return a value of '8080'"  , ()=>{

    const flag = new Flag('', 8080);
    const result = flag.getValue();
    const expected = 8080;
    expect(result).toBe(expected);
})

test("flag.setId() - A new Flag element should be created with an original id then change to '-p'" , ()=>{

    const flag = new Flag('-d' , 0);
    flag.setId('-p');
    const result = flag.getId();
    const expected = '-p';
    expect(result).toBe(expected);
})

test("flag.setValue() - A new Flag element should be created with an original value then change to '-p'"  , ()=>{

    const flag = new Flag('-p', 0);
    flag.setValue(8080);
    const result = flag.getValue();
    const expected = 8080;
    expect(result).toBe(expected);
})