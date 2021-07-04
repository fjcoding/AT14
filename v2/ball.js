export class Ball{
    
    constructor(x, y, radius, speed, dx, dy, sound, SCORE_UNIT, cvs, paddle_width, paddle_dx) 
    {
        this.x = x; //: this.cvs.width/2,
        this.y = y; //: this.paddleY - this.BALL_RADIUS,
        this.radius = radius; //: this.BALL_RADIUS,
        this.speed = speed; //: 4,
        this.dx = dx; // : 3 * (Math.random() * 2 - 1),
        this.dy = dy; //: -3  
        this.LIFE = 0;      
        this.sound = sound;
        this.SCORE_UNIT = SCORE_UNIT;
        this.score = 0
        this.cvs = cvs;
        this.paddle_width = paddle_width;
        this.paddle_dx = paddle_dx;
    }
    
    getX(){return this.x;}

    getY(){return this.x;}

    getRadius(){return this.radius;}

    moveBall(rightArrow, leftArrow, upArrow){  //+ this.radius < 356
        if(this.dy == 0 && upArrow == false) {
            if(rightArrow && this.x < (this.cvs.width - this.paddle_width/2)){
                this.x += this.paddle_dx;
            }else if(leftArrow && this.x > this.paddle_width/2){
                this.x -= this.paddle_dx;
            }
        } else if (this.dy == 0 && upArrow) {
            this.dx = 3 * (Math.random() * 2 - 1);
            this.dy = -3;
        }
         else {
            this.x += this.dx;
            this.y += this.dy;
        }        
    }

    resetBall(cvs, paddle, BALL_RADIUS){
        this.x = cvs.width/2;
        this.y = paddle.y - BALL_RADIUS;
        this.dx = 0; //3 * (Math.random() * 2 - 1);
        this.dy = 0; //-3;
    }  

    ballWallCollision(cvs, paddle){
        if(this.x + this.radius > cvs.width || this.x - this.radius < 0){
            this.dx = - this.dx;
            this.sound.playWallHit();
        }
        
        if(this.y - this.radius < 0){
            this.dy = -this.dy;
            this.sound.playWallHit();
        }
        
        if(this.y + this.radius > cvs.height){
            this.LIFE--; // LOSE LIFE
            this.sound.playLifeLost();
            //resetBall();
            //this.resetBall(cvs, paddle, this.BALL_RADIUS);
            this.resetBall(cvs, paddle, this.radius);
            paddle.resetPaddle();
        }
    }
    setLIFE(LIFE)
    {
        this.LIFE = LIFE;
    }
    getLIFE()
    {
        return this.LIFE;
    }  


    ballPaddleCollision(paddle){
        if(this.x < paddle.x + paddle.width && this.x > paddle.x && paddle.y < paddle.y + paddle.height && this.y > paddle.y)
        {
            // PLAY SOUND
            // PADDLE_HIT.play();
            this.sound.playPaddleHit();
            // CHECK WHERE THE BALL HIT THE PADDLE
            let collidePoint = this.x - (paddle.x + paddle.width/2);
            // NORMALIZE THE VALUES
            collidePoint = collidePoint / (paddle.width/2);
            // CALCULATE THE ANGLE OF THE BALL
            let angle = collidePoint * Math.PI/3;
            this.dx = this.speed * Math.sin(angle);
            this.dy = - this.speed * Math.cos(angle);
        }
    }
    
    ballBrickCollision(brick, bricks, SCORE, SCORE_UNIT){
        for(let r = 0; r < brick.row; r++){
            for(let c = 0; c < brick.column; c++){
                let b = bricks[r][c];
                // if the brick isn't broken
                if(b.status){
                    if(this.x + this.radius > b.x && this.x - this.radius < b.x + brick.width && this.y + this.radius > b.y && this.y - this.radius < b.y + brick.height){
                        // BRICK_HIT.play();
                        this.sound.playBrinkHit();
                        this.dy = - this.dy;
                        b.status = false; // the brick is broken
                        this.score = this.score + SCORE_UNIT;
                    }
                }
            }
        }
    }    
}

