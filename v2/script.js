import { BG_IMG, LEVEL_IMG, LIFE_IMG, SCORE_IMG, WALL_HIT, LIFE_LOST, PADDLE_HIT, BRICK_HIT } from './components.js'
import { Stage } from './stage.js'
import { Paddle } from './paddle.js'
import { drawPaddle } from './drawPaddle.js'
import { Bricks } from './bricks.js'
import { Ball } from './ball.js'

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

const stageObj  = new Stage(ctx, BG_IMG);

let paddle_x      = cvs.width/2 - PADDLE_WIDTH/2;
let paddle_y      = cvs.height - PADDLE_MARGIN_BOTTOM - PADDLE_HEIGHT;
let paddle_width  = PADDLE_WIDTH;
let paddle_height = PADDLE_HEIGHT;
let paddle_dx     = 5;

const paddleObj = new Paddle(cvs, paddle_x, paddle_y, paddle_width, paddle_height, paddle_dx);
const drawPaddleObj = new drawPaddle(ctx, cvs, PADDLE_WIDTH, PADDLE_MARGIN_BOTTOM , PADDLE_HEIGHT, paddleObj);

const brickObj  = new Bricks(ctx,1,5,55,20,20,20,40,"#2e3548","#FFF");


//let bricks = [];
const ballObj = new Ball(ctx, cvs, paddleObj.getY(), BALL_RADIUS);

//createBricks();
brickObj.setCreateBricks();


function draw(){
    
    //drawPaddle();
    drawPaddleObj.setdrawPaddle();
    //drawBall();
    ballObj.setDrawBall();    
    /*
    drawBricks();
    */
    
    brickObj.setDrawBricks();
    
    // SHOW SCORE
    stageObj.showGameStats(SCORE, 35, 25, SCORE_IMG, 5, 5);
    // showGameStats(SCORE, 35, 25, SCORE_IMG, 5, 5);
    // SHOW LIVES
    //showGameStats(LIFE, cvs.width - 25, 25, LIFE_IMG, cvs.width-55, 5); 
    stageObj.showGameStats(LIFE, cvs.width - 25, 25, LIFE_IMG, cvs.width-55, 5);
    // SHOW LEVEL
    //showGameStats(LEVEL, cvs.width/2, 25, LEVEL_IMG, cvs.width/2 - 30, 5);
    stageObj.showGameStats(LEVEL, cvs.width/2, 25, LEVEL_IMG, cvs.width/2 - 30, 5);
}

function update(){
    paddleObj.movePaddle(rightArrow, leftArrow);
    /*
    moveBall();
    ballWallCollision();
    ballPaddleCollision();
    ballBrickCollision();
    gameOver();
    levelUp();
    */
}

// GAME LOOP
function loop(){
    // CLEAR THE CANVAS
    // ctx.drawImage(BG_IMG, 0, 0);
    stageObj.setDrawImage();
    draw();
    update();
    if(! GAME_OVER){
        requestAnimationFrame(loop);
    }
}

loop();

// CONTROL THE PADDLE
document.addEventListener("keydown", function(event){
    if(event.keyCode == 37){
        leftArrow = true;
    }else if(event.keyCode == 39){
        rightArrow = true;
    }
 });
 document.addEventListener("keyup", function(event){
    if(event.keyCode == 37){
        leftArrow = false;
    }else if(event.keyCode == 39){
        rightArrow = false;
    }
 });