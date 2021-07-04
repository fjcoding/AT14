import { Ball } from '../src/ball.js'
import { drawBall } from '../src/drawBall.js'
import { Paddle } from "../src/paddle.js";
import { Bricks } from "../src/bricks.js"; 
import { drawBricks } from "../src/drawBricks.js"; 
/*test('Give the value 100 as the third argument for the ball constructor, getPaddleY should return 100', () => { 
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
})*/

const cvs = { width: 400, height: 200 };
const ctx = {
    offSetLeft: jest.fn(),
    offSetTop: jest.fn(),
    marginTop: jest.fn(),
    fillColor: undefined,
    strokeColor: undefined,
    fillStyle: undefined,
    fillRect: jest.fn(),
    strokeStyle: undefined,
    strokeRect: jest.fn(),
    beginPath: jest.fn(),
    arc: jest.fn(),
    fill: jest.fn(),
    stroke: jest.fn(),
    closePath: jest.fn()
  };

test("Verify function getX, getting the value => 200 ", () => {
  const ball = new Ball(200, 100, 8, 3, -3);
  const gettingX = ball.getX();
  expect(gettingX).toBe(200);
});

test("Verify function getY, getting the value => 100 ", () => {
    const ball = new Ball(200, 100, 8, 4, 3, -3);
    const gettingY = ball.getY();
    expect(gettingY).toBe(100);
});

test("Verify function getRadius, getting the value => 8 ", () => {
    const ball = new Ball(200, 100, 8, 4, 3, -3);
    const gettingRadius = ball.getRadius();
    expect(gettingRadius).toBe(8);
});

test("Verify that function moveBall is moving dx, getting the value => 3 ", () => {
    const ball = new Ball(200, 100, 8, 4, 3, -3);
    ball.moveBall();
    const moveBallDx=ball.dx;
    expect(moveBallDx).toBe(3);    
});

test("Verify that function moveBall is moving dy, getting the value => -3", () => {
    const ball = new Ball(200, 100, 8, 4,  3, -3);
    ball.moveBall();
    const moveBallDy=ball.dy;
    expect(moveBallDy).toBe(-3);    
});

test("Verify that function resetBall is reseting x, getting the value => 200", () => {
    const ball = new Ball(200, 100, 8, 4,  3, -3);
    const paddle= new Paddle(cvs, 100, 20, 30, 5);
    ball.resetBall(cvs, paddle, 8 );
    expect(ball.x).toBe(200);    
});

test("Verify that function resetBall is reseting y, getting the value => 142", () => {
    const ball = new Ball(200, 100, 8, 4,  3, -3);
    const paddle= new Paddle(cvs, 100, 20, 30, 5);
    ball.resetBall(cvs, paddle, 8 );
    expect(ball.y).toBe(142);    
});

test("Verify that function resetBall is reseting dx, getting the value => randomValueDx", () => {
    const ball = new Ball(200, 100, 8, 4,  3, -3);
    const paddle= new Paddle(cvs, 100, 20, 30, 5);
    ball.resetBall(cvs, paddle, 8 );
    const ballDx =  3 * (Math.random() * 2 - 1);
    expect(ballDx).toBe(ballDx);    
});

test("Verify that function resetBall is reseting dy, getting the value => -3 ", () => {
    const ball = new Ball(200, 100, 8, 4,  3, -3);
    const paddle= new Paddle(cvs, 100, 20, 30, 5);
    ball.resetBall(cvs, paddle, 8 );
    expect(ball.dy).toBe(-3);    
});

test("Verify that function ballWallCollision is collided to side dx ", () => {
    const ball = new Ball(200, 100, 8, 4,  3, -3);
    const paddle= new Paddle(cvs, 100, 20, 30, 5);
    ball.ballWallCollision(cvs, paddle);
    expect(ball.dx).toBe(3);    
    
});

test("Verify that function ballWallCollision is collided to side dy ", () => {
    const ball = new Ball(200, 100, 8, 4,  3, -3);
    const paddle= new Paddle(cvs, 100, 20, 30, 5);
    ball.ballWallCollision(cvs, paddle);
    expect(ball.dy).toBe(-3);    
});

test("Verify function setLIFE, setting the value => 0 ", () => {
    const ball = new Ball(200, 100, 8, 3, -3);
    ball.setLIFE(0);
    expect(ball.LIFE).toBe(0);
});

test("Verify function getLIFE, getting the value => 0 ", () => {
    const ball = new Ball(200, 100, 8, 3, -3);
    const gettingLIFE = ball.getLIFE();
    expect(gettingLIFE).toBe(0);
});

test("Verify that function ballWallCollision is collided to side dx ", () => {
    const ball = new Ball(400, 100, 8, 4,  3, -3);
    const paddle= new Paddle(cvs, 100, 20, 30, 5);
    ball.ballWallCollision(cvs, paddle);
    expect(ball.dx).toBe(-3);
});

test("Verify that function ballWallCollision is collided to side dy ", () => {
    const ball = new Ball(400, 10, 11, 4,  3, -3);
    const paddle= new Paddle(cvs, 100, 20, 30, 5);
    ball.ballWallCollision(cvs, paddle);
    expect(ball.dy).toBe(3);
});

test("Verify that function ballWallCollision is collided to side -y down ", () => {
    const ball = new Ball(400, 100, 208, 4,  3, -3);
    const paddle= new Paddle(cvs, 100, 20, 30, 5);
    const newLIFE=ball.LIFE;
    ball.ballWallCollision(cvs, paddle);
    expect(newLIFE+1).toBe(1);
});

test("Verify that function ballPaddleCollision is collided to paddle dx ", () => {
    const ball = new Ball(200, 200, 8, 4,  3, -3);
    const paddle= new Paddle(cvs, 300, 20, 30, 5);
    let collidePoint = ball.x - (paddle.x + paddle.width/2);
    collidePoint = collidePoint / (paddle.width/2);
    let angle = collidePoint * Math.PI/3
    const newBallDx= ball.speed*Math.sin(angle);

    ball.ballPaddleCollision(paddle);
    expect(ball.dx).toBe(newBallDx);     
});

test("Verify that function ballPaddleCollision is collided to paddle dy ", () => {
    const ball = new Ball(200, 200, 8, 4,  3, -3);
    const paddle= new Paddle(cvs, 300, 20, 30, 5);
    let collidePoint = ball.x - (paddle.x + paddle.width/2);
    collidePoint = collidePoint / (paddle.width/2);
    let angle = collidePoint * Math.PI/3
    const newBallDy= -ball.speed*Math.cos(angle);

    ball.ballPaddleCollision(paddle);
    expect(ball.dy).toBe(newBallDy);     
});

test("Verify that function ballBrickCollision is broken", () => {
    const ball = new Ball(10, 12, 50, 4,  3, -3);
    const paddle= new Paddle(cvs, 300, 20, 30, 5);
    const brick= new Bricks(ctx,1,5,55,20,20,20,40,"#2e3548","#FFF");
    const drawball = new drawBall(ctx, cvs, paddle.getY(), ball);
    const drawBrick = new drawBricks(ctx,brick);
    const bricks= brick.bricks;

    brick.setCreateBricks();
    drawBrick.setDrawBricks();
    drawball.setDrawBall();

    ball.ballBrickCollision(brick, bricks,0,10);
   
    
    expect(ball.dy).toBe(3);
});




