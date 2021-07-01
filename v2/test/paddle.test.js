import { Paddle } from '../paddle.js'

test('Unit test with mocks', () => { 
    const cvs = document.createElement('canvas'); 
    const ctx = cvs.getContext('2d'); 

    const PADDLE_WIDTH = 100;
    const PADDLE_MARGIN_BOTTOM = 50;
    const PADDLE_HEIGHT = 20;

    const paddleObj = new Paddle(ctx, cvs, PADDLE_WIDTH, PADDLE_MARGIN_BOTTOM , PADDLE_HEIGHT);
    expect(paddleObj.getPADDLE_WIDTH()).toBe(100); 
})