
import { Ball } from '../src/models/ball.js'
import { drawBall } from '../src/actions/drawBall.js'
import { Paddle } from "../src/models/paddle.js";
import { Bricks } from "../src/models/bricks.js"; 
import { drawBricks } from "../src/actions/drawBricks.js"; 
import { lvlUp } from '../src/models/lvlUp.js';
import { Stage } from '../src/models/stage.js';

const gameOver = document.createElement("img");
const youWon = document.createElement("img");
const youLose = document.createElement("img");

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

const sound = 
{
    playWin: jest.fn(),
    playBrinkHit:  jest.fn(),
    playPaddleHit: jest.fn(),
    playWallHit:   jest.fn(),
    playLifeLost:  jest.fn()
}

const stage= {
    showYouWin: jest.fn()
}
test("Verify that function levelUp, getting the value => false ",() =>{
    const ball = new Ball(10, 12, 50, 4,  3, -3, sound);
    const paddle= new Paddle(cvs, 300, 20, 30, 5);
    const brick= new Bricks(ctx,1,5,55,20,20,20,40,"#2e3548","#FFF");
    const drawball = new drawBall(ctx, cvs, paddle.getY(), ball);
    const drawBrick = new drawBricks(ctx,brick);
    const bricks= brick.bricks;
    const levelUp= new lvlUp(cvs, paddle, ball.radius, brick, bricks, ball, 1, 3, false, gameOver,youWon, sound);

   
    brick.setCreateBricks();
    drawBrick.setDrawBricks();
    drawball.setDrawBall();

    levelUp.levelUp();
   
    
    expect(levelUp.GAME_OVER).toBe(false);
});

test("Verify that function levelUp, getting the value => true ",() =>{
    const ball = new Ball(10, 12, 50, 4,  3, -3, sound);
    const paddle= new Paddle(cvs, 300, 20, 30, 5);
    const brick= new Bricks(ctx,1,5,55,20,20,20,40,"#2e3548","#FFF");
    const drawball = new drawBall(ctx, cvs, paddle.getY(), ball);
    const drawBrick = new drawBricks(ctx,brick);
    const bricks= brick.bricks;
    const stages = new Stage(cvs,paddle,ball.radius, false);
 
    stages.showYouWin(gameOver,youWon);
    stages.showYouLose(gameOver,youLose);

    
    const levelUp= new lvlUp(cvs, paddle, ball.radius, false, bricks, ball, 2, 1, false,gameOver,youWon, sound);
    
    brick.setCreateBricks();
    drawBrick.setDrawBricks();
    drawball.setDrawBall();

    const showWIn = stages.showYouWin(gameOver, youWon);

    levelUp.levelUp(stage);
   
    
    expect(levelUp.GAME_OVER).toBe(true);
});

test("Verify that function levelUp when bricks was broken",() =>{
    const ball = new Ball(10, 12, 50, 4,  3, -3, sound);
    const paddle= new Paddle(cvs, 300, 20, 30, 5);
    const brick= new Bricks(ctx,2,5,20,20,20,20,40,"#2e3548","#FFF");
    const drawball = new drawBall(ctx, cvs, paddle.getY(), ball);
    const drawBrick = new drawBricks(ctx,brick);
    const bricks= brick.bricks;
    const stages = new Stage(cvs,paddle,ball.radius, false);
 
    stages.showYouWin(gameOver,youWon);
    stages.showYouLose(gameOver,youLose);

    
    const levelUp= new lvlUp(cvs, paddle, ball.radius, brick, bricks, ball, 2, 1, false,gameOver,youWon, sound);
    //cvs, paddle, BALL_RADIUS, brick, bricks, ball, LEVEL, MAX_LEVEL, GAME_OVER, gameover, youwon, sound

    brick.setCreateBricks();
    drawBrick.setDrawBricks();
    drawball.setDrawBall();
    //ball.resetBall(cvs,paddle, ball.radius);
    //paddle.resetPaddle();
    

    const showWIn = stages.showYouWin(gameOver, youWon);

    levelUp.levelUp(stage);
   
    
    
    
    expect(levelUp.LEVEL).toBe(2);
});
