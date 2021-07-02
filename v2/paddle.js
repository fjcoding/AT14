export class Paddle {
  constructor(ctx, cvs, PADDLE_WIDTH, PADDLE_MARGIN_BOTTOM, PADDLE_HEIGHT) {
    this.ctx = ctx;
    this.cvs = cvs;
    this.paddle = {
      x: this.cvs.width / 2 - PADDLE_WIDTH / 2,
      y: this.cvs.height - PADDLE_MARGIN_BOTTOM - PADDLE_HEIGHT,
      width: PADDLE_WIDTH,
      height: PADDLE_HEIGHT,
      dx: 5
    };
    this.PADDLE_WIDTH = PADDLE_WIDTH;
    this.PADDLE_MARGIN_BOTTOM = PADDLE_MARGIN_BOTTOM;
    this.PADDLE_HEIGHT = PADDLE_HEIGHT;
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

  getPADDLE_WIDTH() {
    return this.PADDLE_WIDTH;
  }
}
// CREATE THE PADDLE
