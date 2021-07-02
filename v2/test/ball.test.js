import { Ball } from '../ball.js'
import { drawBall } from '../drawBall.js'

test('Give the value 100 as the third argument for the ball constructor, getPaddleY should return 100', () => { 
    const cvs = document.createElement('canvas'); 
    const ctx = cvs.getContext('2d'); 

    const BALL_RADIUS = 8;
    const paddleY = 100;

    const drawballObj = new drawBall(ctx, cvs, paddleY, BALL_RADIUS);
    expect(drawballObj.getPaddleY()).toBe(100); 
})

test('Give the value 320 as the first argument form ball contructor, getX() should return 320', ()=>{
    const ball_x = 320;
    const ball_y = 100;
    const ball_radius = 8;
    const ball_speed = 4;
    const ball_dx =  3 * (Math.random() * 2 - 1);
    const ball_dy = -3;        
    const ballObj = new Ball(ball_x, ball_y, ball_radius, ball_speed, ball_dx, ball_dy);
    expect(ballObj.getX()).toBe(320); 
})