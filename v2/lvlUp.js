export class lvlUp
{
    constructor(cvs, paddle, BALL_RADIUS,brick,bricks,ball,LEVEL,MAX_LEVEL,GAME_OVER,gameover,youwon, sound)
    {
        this.cvs = cvs;
        this.paddle = paddle;
        this.BALL_RADIUS = BALL_RADIUS;
        this.brick   =   brick
        this.bricks  =   bricks;
        this.ball    =   ball;
        this.LEVEL   = LEVEL;
        this.MAX_LEVEL = MAX_LEVEL;
        this.GAME_OVER = GAME_OVER;
        this.gameover  = gameover;
        this.youwon    = youwon;
        this.sound = sound;

    }
    levelUp(showYouWin){
        let isLevelDone = true;
        
        // check if all the bricks are broken
        for(let r = 0; r < this.brick.row; r++){
            for(let c = 0; c < this.brick.column; c++){
                isLevelDone = isLevelDone && ! this.bricks[r][c].status;
            }
        }
        
        if(isLevelDone){
            this.sound.playWin();//WIN.play(); music from components.js
            if(this.LEVEL >= this.MAX_LEVEL){
                showYouWin.showYouWin(this.gameover,this.youwon);
                this.GAME_OVER = true;
                return this.GAME_OVER;
            }
            this.brick.row++;
            this.brick.setCreateBricks();
            this.ball.speed += 0.5;
            this.ball.resetBall(this.cvs, this.paddle,this.BALL_RADIUS);
            this.LEVEL++;
            
        }
        return this.GAME_OVER = false;
    }
}