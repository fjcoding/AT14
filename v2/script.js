import { BG_IMG, LEVEL_IMG, LIFE_IMG, SCORE_IMG, WALL_HIT, LIFE_LOST, PADDLE_HIT, BRICK_HIT } from './components.js'
import { Stage } from './stage.js'
import { drawStage } from './drawStage.js'
import { Paddle } from './paddle.js'
import { drawPaddle } from './drawPaddle.js'
import { Bricks } from './bricks.js'
import { drawBricks} from './drawBricks.js'
import { drawBall } from './drawBall.js'
import { Ball } from './ball.js'
import { lvlUp } from './lvlUp.js'

/*
import {Sum} from './sum.js' 
const r = new Sum(canva, 6,4);
const answer = r.getSum();      
document.getElementById("msg").innerHTML = answer;
*/

// SELECT CANVAS ELEMENT
const cvs = document.getElementById("breakout");
const ctx = cvs.getContext("2d");

// ADD BORDER TO CANVAS
cvs.style.border = "1px solid #0ff";

// MAKE LINE THIK WHEN DRAWING TO CANVAS
ctx.lineWidth = 3;

// SHOW GAME OVER MESSAGE
/* SELECT ELEMENTS */
const gameover = document.getElementById("gameover");
const youwon = document.getElementById("youwon");
const youlose = document.getElementById("youlose");
const restart = document.getElementById("restart");

// GAME VARIABLES AND CONSTANTS
const PADDLE_WIDTH = 100;
const PADDLE_MARGIN_BOTTOM = 50;
const PADDLE_HEIGHT = 20;
const BALL_RADIUS = 8;
let LIFE = 3; // PLAYER HAS 3 LIVES
let SCORE = 0;
const SCORE_UNIT = 10;
let LEVEL = 1;
const MAX_LEVEL = 3;
let GAME_OVER = false;
let leftArrow = false;
let rightArrow = false;

const drawStageObj  = new drawStage(ctx, BG_IMG);

let paddle_bottom = PADDLE_MARGIN_BOTTOM;
let paddle_width  = PADDLE_WIDTH;
let paddle_height = PADDLE_HEIGHT;
let paddle_dx     = 5;

const paddleObj     = new Paddle(cvs, paddle_width, paddle_height, paddle_bottom, paddle_dx);
const drawPaddleObj = new drawPaddle(ctx, cvs, paddleObj);



//let bricks = [];
let ball_x = cvs.width/2;
let ball_y = paddleObj.getY() - BALL_RADIUS;
let ball_radius = BALL_RADIUS;
let ball_speed = 4;
let ball_dx =  3 * (Math.random() * 2 - 1);
let ball_dy = -3;        
const ballObj     = new Ball(ball_x, ball_y, ball_radius, ball_speed, ball_dx, ball_dy);
const drawballObj = new drawBall(ctx, cvs, paddleObj.getY(), ballObj);
const stageObj    = new Stage(cvs, ballObj, paddleObj, LIFE, BALL_RADIUS);
const brickObj    = new Bricks(ctx,1,1,55,20,20,20,40,"#2e3548","#FFF");
const bricks      = brickObj.setCreateBricks();
const drawBrickObj    = new drawBricks(ctx,brickObj);
const lvlUpObj    = new lvlUp(cvs, paddleObj, BALL_RADIUS,brickObj,bricks,ballObj,LEVEL,MAX_LEVEL,GAME_OVER,gameover,youwon)

const brack = brickObj
brack.setCreateBricks

//createBricks();
brickObj.setCreateBricks();



function draw(){
    
    //drawPaddle();
    drawPaddleObj.setdrawPaddle();
    //drawBall();
    drawballObj.setDrawBall();    
    /*
    drawBricks();
    */
    drawBrickObj.setDrawBricks();
    
    // SHOW SCORE
    drawStageObj.showGameStats(SCORE, 35, 25, SCORE_IMG, 5, 5);
    // showGameStats(SCORE, 35, 25, SCORE_IMG, 5, 5);
    // SHOW LIVES
    //showGameStats(LIFE, cvs.width - 25, 25, LIFE_IMG, cvs.width-55, 5); 
    drawStageObj.showGameStats(LIFE, cvs.width - 25, 25, LIFE_IMG, cvs.width-55, 5);
    // SHOW LEVEL
    //showGameStats(LEVEL, cvs.width/2, 25, LEVEL_IMG, cvs.width/2 - 30, 5);
    drawStageObj.showGameStats(LEVEL, cvs.width/2, 25, LEVEL_IMG, cvs.width/2 - 30, 5);
}

function update(){
    paddleObj.movePaddle(rightArrow, leftArrow);
    ballObj.moveBall();
    ballObj.ballWallCollision(cvs, paddleObj)
    ballObj.ballPaddleCollision(paddleObj);

    ballObj.ballBrickCollision(brickObj, bricks, SCORE, SCORE_UNIT)
    stageObj.gameOver();
    
    GAME_OVER = lvlUpObj.levelUp(stageObj);
    
}

// GAME LOOP
function loop(){
    // CLEAR THE CANVAS
    // ctx.drawImage(BG_IMG, 0, 0);
    drawStageObj.setDrawImage();
    draw();
    update();
    if(! GAME_OVER){
        requestAnimationFrame(loop);
    }
}

loop();

// CONTROL THE PADDLE
document.addEventListener("keydown", function(event){
    if(event.keyCode == 37 || event.keyCode == 65){
        leftArrow = true;
    }else if(event.keyCode == 39 || event.keyCode == 68){
        rightArrow = true;
    }
 });
 document.addEventListener("keyup", function(event){
    if(event.keyCode == 37  || event.keyCode == 65){
        leftArrow = false;
    }else if(event.keyCode == 39  || event.keyCode == 68){
        rightArrow = false;
    }
 });