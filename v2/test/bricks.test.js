import { Bricks } from "../bricks.js"

test('Unit test with mocks to the brick class to know if it works', () => { 
    const cvs = document.createElement('canvas'); 
    const ctx = cvs.getContext('2d'); 


    const brickObj = new Bricks(ctx);
    expect(brickObj.getBrickColumn()).toBe(5); 
})