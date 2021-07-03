export class drawBall{
    constructor(ctx, cvs, paddleY, ball) {
        this.ctx = ctx;
        this.cvs = cvs;
        this.paddleY = paddleY;
        this.BALL_RADIUS = ball.radius;
        this.ball = ball;
    }

    getPaddleY(){
        return this.paddleY;
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
}
