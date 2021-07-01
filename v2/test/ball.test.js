import { Ball } from '../ball.js'

test('Unit test with mocks', () => { 
    const cvs = document.createElement('canvas'); 
    const ctx = cvs.getContext('2d'); 

    const BALL_RADIUS = 8;
    const paddleY = 100;

    const ballObj = new Ball(ctx, cvs, paddleY, BALL_RADIUS);
    expect(ballObj.getPaddleY()).toBe(100); 
})