import { Bricks } from "../src/models/bricks.js"

test('Unit test with mocks to the brick class to know if it works', () => { 
    const cvs = document.createElement('canvas'); 
    const ctx = cvs.getContext('2d'); 


   const brickObj  = new Bricks(ctx,1,5,55,20,20,20,40,"#2e3548","#FFF");
    expect(brickObj.getBrickColumn()).toBe(5); 
})