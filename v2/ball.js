export class Ball{
    constructor(ctx, cvs, paddleY, BALL_RADIUS) {
        this.ctx = ctx;
        this.cvs = cvs;
        this.paddleY = paddleY;
        this.BALL_RADIUS = BALL_RADIUS;
        this.ball = {
            x : this.cvs.width/2,
            y : this.paddleY - this.BALL_RADIUS,
            radius : this.BALL_RADIUS,
            speed : 4,
            dx : 3 * (Math.random() * 2 - 1),
            dy : -3
        }        
    }

    setDrawBall(){
        this.ctx.beginPath();        
        this.ctx.arc(this.ball.x, this.ball.y, this.ball.radius, 0, Math.PI*2);
        this.ctx.fillStyle = "#ffcd05";
        this.ctx.fill();        
        this.ctx.strokeStyle = "#2e3548";
        this.ctx.stroke();        
        this.ctx.closePath();
    }

    getPaddleY (){
        return this.paddleY;
    }

}
