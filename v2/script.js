import { BG_IMG, LEVEL_IMG, LIFE_IMG, SCORE_IMG, WALL_HIT, LIFE_LOST, PADDLE_HIT, BRICK_HIT } from './components.js'
import { Stage } from './stage.js'
import { Paddle } from './paddle.js'

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



// CREATE THE BRICKS
const brick = {
    row : 1,
    column : 5,
    width : 55,
    height : 20,
    offSetLeft : 20,
    offSetTop : 20,
    marginTop : 40,
    fillColor : "#2e3548",
    strokeColor : "#FFF"
}

const stageObj  = new Stage(ctx, BG_IMG);
const paddleObj = new Paddle(ctx, cvs, PADDLE_WIDTH, PADDLE_MARGIN_BOTTOM , PADDLE_HEIGHT);
/*
let bricks = [];

function createBricks(){
    for(let r = 0; r < brick.row; r++){
        bricks[r] = [];
        for(let c = 0; c < brick.column; c++){
            bricks[r][c] = {
                x : c * ( brick.offSetLeft + brick.width ) + brick.offSetLeft,
                y : r * ( brick.offSetTop + brick.height ) + brick.offSetTop + brick.marginTop,
                status : true
            }
        }
    }
}

createBricks();
*/


function draw(){
    
    //drawPaddle();
    paddleObj.setdrawPaddle();
    /*
    drawBall();
    
    drawBricks();
    */
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

// GAME LOOP
function loop(){
    // CLEAR THE CANVAS
    // ctx.drawImage(BG_IMG, 0, 0);
    stageObj.setDrawImage();
    draw();
    /*    
    update();
    */
    if(! GAME_OVER){
        requestAnimationFrame(loop);
    }

}

loop();
