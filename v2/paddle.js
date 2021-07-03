export class Paddle{
    constructor(cvs, width, height, bottom,  dx)
    {
        this.width  = width;    //: PADDLE_WIDTH,
        this.height = height;   //: PADDLE_HEIGHT,
        this.dx     = dx;       //: 5
        this.cvs    = cvs;
        this.margin_bottom = bottom;
        this.x      = this.cvs.width/2 - this.width/2;
        this.y      = this.cvs.height - this.margin_bottom - this.height;        
    }

    getX(){  return this.x;  }
    getY(){  return this.y;  }

    getdX(){ return this.dx; }
    
    movePaddle(rightArrow, leftArrow){
        if(rightArrow && this.x + this.width < this.cvs.width){
            this.x += this.dx;
        }else if(leftArrow && this.x > 0){
            this.x -= this.dx;
        }
    }
 
}
// CREATE THE PADDLE
