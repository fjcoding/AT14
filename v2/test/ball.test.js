import { Ball } from '../ball.js'

test('Give the value 100 as the third argument for the ball constructor, getPaddleY should return 100', () => { 
    const cvs = document.createElement('canvas'); 
    const ctx = cvs.getContext('2d'); 

    const BALL_RADIUS = 8;
    const paddleY = 100;

    const ballObj = new Ball(ctx, cvs, paddleY, BALL_RADIUS);
    expect(ballObj.getPaddleY()).toBe(100); 
})