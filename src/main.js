
const BG_IMG = new Image();
const LEVEL_IMG = new Image();
const LIFE_IMG = new Image();
const SCORE_IMG = new Image();

const WALL_HIT = new Audio();
const LIFE_LOST = new Audio();
const PADDLE_HIT = new Audio();
const WIN = new Audio();
const BRICK_HIT = new Audio()

fetch('config.json')
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        BG_IMG.src = data.images.BG_IMG;
        LEVEL_IMG.src = data.images.LEVEL_IMG;
        LIFE_IMG.src = data.images.LIFE_IMG;
        SCORE_IMG.src = data.images.SCORE_IMG;

        WALL_HIT.src = data.audios.WALL_HIT;
        LIFE_LOST.src = data.audios.LIFE_LOST;
        PADDLE_HIT.src = data.audios.PADDLE_HIT;
        WIN.src = data.audios.WIN;
        BRICK_HIT.src = data.audios.BRICK_HIT;
    })  
     
import { Stage } from './models/stage.js';
import { drawStage } from './actions/drawStage.js'
import { Paddle } from './models/paddle.js'
import { drawPaddle } from './actions/drawPaddle.js'
import { Bricks } from './models/bricks.js'
import { drawBricks} from './actions/drawBricks.js'
import { drawBall } from './actions/drawBall.js'
import { Ball } from './models/ball.js'
import { lvlUp } from './models/lvlUp.js'
import { Sound } from './models/sound.js'


// SELECT CANVAS ELEMENT
const cvs = document.getElementById("breakout");
const soundElement  = document.getElementById("sound");
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
let GAME_OVER_LVL = false;
let leftArrow = false;
let rightArrow = false;
let upArrow = false;

const drawStageObj  = new drawStage(ctx, BG_IMG);

let paddle_bottom = PADDLE_MARGIN_BOTTOM;
let paddle_width  = PADDLE_WIDTH;
let paddle_height = PADDLE_HEIGHT;
let paddle_dx     = 5;

const sound = new Sound(WALL_HIT, PADDLE_HIT, BRICK_HIT, LIFE_LOST, WIN);
const paddleObj     = new Paddle(cvs, paddle_width, paddle_height, paddle_bottom, paddle_dx);
const drawPaddleObj = new drawPaddle(ctx, cvs, paddleObj);

//let bricks = [];
let ball_x = cvs.width/2;
let ball_y = paddleObj.getY() - BALL_RADIUS;
let ball_radius = BALL_RADIUS;
let ball_speed = 4;
let ball_dx = 0; 
let ball_dy = 0;         
const ballObj     = new Ball(ball_x, ball_y, ball_radius, ball_speed, ball_dx, ball_dy, sound, SCORE_UNIT, cvs, paddle_width, paddle_dx);
ballObj.setLIFE(LIFE);
const drawballObj = new drawBall(ctx, cvs, paddleObj.getY(), ballObj);
const stageObj    = new Stage(cvs, ballObj, paddleObj, BALL_RADIUS,GAME_OVER);
const brickObj    = new Bricks(ctx,1,5,55,20,20,20,40,"#2e3548","#FFF");
const bricks      = brickObj.setCreateBricks();
const drawBrickObj    = new drawBricks(ctx,brickObj);
const lvlUpObj    = new lvlUp(cvs, paddleObj, BALL_RADIUS,brickObj,bricks,ballObj,LEVEL,MAX_LEVEL,GAME_OVER,gameover,youwon, sound)

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
    drawStageObj.showGameStats(ballObj.score, 35, 25, SCORE_IMG, 5, 5);
    // SHOW LIVES
    drawStageObj.showGameStats(ballObj.LIFE, cvs.width - 25, 25, LIFE_IMG, cvs.width-55, 5);
    // SHOW LEVEL
    drawStageObj.showGameStats(lvlUpObj.LEVEL, cvs.width/2, 25, LEVEL_IMG, cvs.width/2 - 30, 5);
}

function update(){
    paddleObj.movePaddle(rightArrow, leftArrow);
    ballObj.moveBall(rightArrow, leftArrow, upArrow);
    ballObj.ballWallCollision(cvs, paddleObj)
    ballObj.ballPaddleCollision(paddleObj);
    ballObj.ballBrickCollision(brickObj, bricks, SCORE, SCORE_UNIT)
    let LIFE = ballObj.getLIFE();
    GAME_OVER = stageObj.gameOver(LIFE,gameover,youlose);
    GAME_OVER_LVL = lvlUpObj.levelUp(stageObj);
}

// GAME LOOP
function loop(){
    // CLEAR THE CANVAS
    // ctx.drawImage(BG_IMG, 0, 0);
    drawStageObj.setDrawImage();
    draw();
    update();
    if(! GAME_OVER && ! GAME_OVER_LVL){
        requestAnimationFrame(loop);
    }
}

loop();

soundElement.addEventListener("click", audioManager);

function audioManager(){
    // CHANGE IMAGE SOUND_ON/OFF
    let imgSrc = soundElement.getAttribute("src");
    let SOUND_IMG = imgSrc == "src/assets/img/SOUND_ON.png" ? "src/assets/img/SOUND_OFF.png" : "src/assets/img/SOUND_ON.png";    
    soundElement.setAttribute("src", SOUND_IMG);    
    // MUTE AND UNMUTE SOUNDS
    WALL_HIT.muted = WALL_HIT.muted ? false : true;
    PADDLE_HIT.muted = PADDLE_HIT.muted ? false : true;
    BRICK_HIT.muted = BRICK_HIT.muted ? false : true;
    WIN.muted = WIN.muted ? false : true;
    LIFE_LOST.muted = LIFE_LOST.muted ? false : true;
}

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

document.addEventListener("keydown", function(event){
    if(event.keyCode == 38 || event.keyCode == 87){
        upArrow = true;
    }
 });

document.addEventListener("keyup", function(event){
    if(event.keyCode == 38 || event.keyCode == 87){
        upArrow = false;
    }
});


restart.addEventListener("click", function(){
    location.reload(); // reload the page
})

