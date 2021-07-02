export class Ball{
    constructor(x, y, radius, speed, dx, dy) {
        this.x = x; //: this.cvs.width/2,
        this.y = y; //: this.paddleY - this.BALL_RADIUS,
        this.radius = radius; //: this.BALL_RADIUS,
        this.speed = speed; //: 4,
        this.dx = dx; // : 3 * (Math.random() * 2 - 1),
        this.dy = dy; //: -3        
    }
    
    getX(){return this.x;}
    getY(){return this.x;}
    getRadius(){return this.radius;}

    moveBall(){
        this.x += this.dx;
        this.y += this.dy;
    }
    
    resetBall(cvs, paddle, BALL_RADIUS){
        this.x = cvs.width/2;
        this.y = paddle.y - BALL_RADIUS;
        this.dx = 3 * (Math.random() * 2 - 1);
        this.dy = -3;
    }    

}

