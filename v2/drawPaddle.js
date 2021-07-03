export class drawPaddle{
    
    constructor(ctx, cvs, paddle){
        this.ctx    = ctx;
        this.cvs    = cvs;
        this.paddle = paddle;
       
        this.PADDLE_WIDTH = paddle.width;
        this.PADDLE_MARGIN_BOTTOM = paddle.margin_bottom;
        this.PADDLE_HEIGHT = paddle.height;
    }
    setdrawPaddle(){
        this.ctx.fillStyle = "#2e3548";
        this.ctx.fillRect(this.paddle.x, this.paddle.y, this.paddle.width, this.paddle.height);
        
        this.ctx.strokeStyle = "#ffcd05";
        this.ctx.strokeRect(this.paddle.x, this.paddle.y, this.paddle.width, this.paddle.height);
    }

}
// CREATE THE PADDLE
