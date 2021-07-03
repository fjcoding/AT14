export class DrawPaddle {
  constructor(ctx, cvs, paddle) {
    this.ctx = ctx;
    this.cvs = cvs;
    this.paddle = paddle;
    /*
        this.paddle = {
            x : this.cvs.width/2 - PADDLE_WIDTH/2,
            y : this.cvs.height - PADDLE_MARGIN_BOTTOM - PADDLE_HEIGHT,
            width : PADDLE_WIDTH,
            height : PADDLE_HEIGHT,
            dx :5
        }
        */
  }
  setdrawPaddle() {
    this.ctx.fillStyle = "#2e3548";
    this.ctx.fillRect(
      this.paddle.x,
      this.paddle.y,
      this.paddle.width,
      this.paddle.height
    );

    this.ctx.strokeStyle = "#ffcd05";
    this.ctx.strokeRect(
      this.paddle.x,
      this.paddle.y,
      this.paddle.width,
      this.paddle.height
    );
  }
}
// CREATE THE PADDLE
