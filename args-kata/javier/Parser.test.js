import { Argument } from './Argument.js'
import { Parser } from "./Parser.js";

test('This Class has a method for return a Map without spaces',()=>{
    const obj = new Parser("-l -p 8080 -d /user/etc");
    const result   = obj.getMaps();

    expect(result).toEqual(
        expect.arrayContaining([
            expect.objectContaining({flagId:'-l',Value:null}),
            expect.objectContaining({flagId:'-p', Value:'8080'}),
            expect.objectContaining({flagId:'-d', Value:'/user/etc'}),
        ])
    );
});

test('This Class has a method for return a Map with spaces',()=>{
    const obj = new Parser("-l     -p     8080    -d     /user/etc");
    const result   = obj.getMaps();

    expect(result).toEqual(
        expect.arrayContaining([
            expect.objectContaining({flagId:'-l',Value:null}),
            expect.objectContaining({flagId:'-p', Value:'8080'}),
            expect.objectContaining({flagId:'-d', Value:'/user/etc'}),
        ])
    );
});

