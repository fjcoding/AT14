import { Paddle } from '../paddle.js'

test('Give a value this should be return position x', () => { 
    const cvs = document.createElement('canvas'); 
    const ctx = cvs.getContext('2d'); 

    const PADDLE_WIDTH = 100;
    const PADDLE_MARGIN_BOTTOM = 50;
    const PADDLE_HEIGHT = 20;

    let paddle_x      = cvs.width/2 - PADDLE_WIDTH/2;
    let paddle_y      = cvs.height - PADDLE_MARGIN_BOTTOM - PADDLE_HEIGHT;
    let paddle_width  = PADDLE_WIDTH;
    let paddle_height = PADDLE_HEIGHT;
    let paddle_dx     = 5;
    
    const paddleObj = new Paddle(cvs, paddle_x, paddle_y, paddle_width, paddle_height, paddle_dx);
    expect(paddleObj.getdX()).toBe(5); 
})