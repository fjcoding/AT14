export class Stage {

    constructor(cvs, ball, paddle, LIFE, BALL_RADIUS){
        this.cvs         = cvs;
        this.ball        = ball;
        this.paddle      = paddle;
        this.LIFE        = BALL_RADIUS;
        this.BALL_RADIUS = BALL_RADIUS;
    }

    ballWallCollision(){
        if(this.ball.x + this.ball.radius > this.cvs.width || this.ball.x - this.ball.radius < 0){
            this.ball.dx = - this.ball.dx;
            //WALL_HIT.play();
        }
        
        if(this.ball.y - this.ball.radius < 0){
            this.ball.dy = -this.ball.dy;
            //WALL_HIT.play();
        }
        
        if(this.ball.y + this.ball.radius > this.cvs.height){
            this.LIFE--; // LOSE LIFE
            //LIFE_LOST.play();
            //resetBall();
            this.ball.resetBall(this.cvs, this.paddle, this.BALL_RADIUS);
        }
    }
}
