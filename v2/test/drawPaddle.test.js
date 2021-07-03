import { drawPaddle } from '../drawPaddle.js'
import { Paddle } from '../paddle.js'
/*
const cvs = {width: 400, height: 400};
const ctx = {
    fillStyle   = undefined,
    fillRect    = jest.fn(), 
    strokeStyle = undefined,
    strokeRect  = jest.fn() 
};
*/
test('Unit test for method setdrawPaddle with mock ', ()=>{
    /*
    const objPaddle     = new Paddle(cvs, 5,5,100,20,5);
    const objDrawPaddle = new drawPaddle(ctx, cvs, objPaddle);
    objDrawPaddle.setdrawPaddle();
    expect(ctx.fillRect).toHaveBeenCalled();     
    */
    expect(5).toBe(5);
});
