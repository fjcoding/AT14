export class Paddle{
    constructor(cvs, x, y, width, height, dx)
    {
        this.x      = x;        //: this.cvs.width/2 - PADDLE_WIDTH/2,
        this.y      = y;        //: this.cvs.height - PADDLE_MARGIN_BOTTOM - PADDLE_HEIGHT,
        this.width  = width;    //: PADDLE_WIDTH,
        this.height = height;   //: PADDLE_HEIGHT,
        this.dx     = dx;       //: 5
        this.cvs    = cvs;
        this.margin_bottom = this.cvs.height - this.y - this.height;
 
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

