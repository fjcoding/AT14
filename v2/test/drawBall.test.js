import { drawBall } from "../drawBall.js";
import { Ball } from "../ball.js";
import { Paddle } from "../paddle.js";

const cvs = { width: 400, height: 200 };
const ctx = {
  beginPath: jest.fn(),
  arc: jest.fn(),
  fillStyle: undefined,
  fill: jest.fn(),
  strokeStyle: undefined,
  stroke: jest.fn(),
  closePath: jest.fn()
};

test("Verify function getPaddleY, getting the value => 150 ", () => {
    const paddle= new Paddle(cvs, 100, 20, 30, 5);
    const paddleY= paddle.y;
    const ball = new Ball(200, 100, 8, 4,  3, -3);
    const drawBall1 = new drawBall(ctx, cvs, paddleY, ball);
    const gettingPaddleY= drawBall1.getPaddleY();
    expect(gettingPaddleY).toBe(150);
  });

test("Verify that BeginPath function is called When setDrawBall is executed", () => {
    const paddle= new Paddle(cvs, 100, 20, 30, 5);
    const paddleY= paddle.y;
    const ball = new Ball(200, 100, 8, 4,  3, -3);
    const drawingBall = new drawBall(ctx, cvs, paddleY, ball);
    drawingBall.setDrawBall();
    expect(ctx.beginPath).toHaveBeenCalled();
  });

  test("Verify that Arc function is called When setDrawBall is executed", () => {
    const paddle= new Paddle(cvs, 100, 20, 30, 5);
    const paddleY= paddle.y;
    const ball = new Ball(200, 100, 8, 4,  3, -3);
    const drawingBall = new drawBall(ctx, cvs, paddleY, ball);
    drawingBall.setDrawBall();
    expect(ctx.arc).toHaveBeenCalled();
  });

  test("Verify that Arc function is receiving right Arguments", () => {
    const paddle= new Paddle(cvs, 100, 20, 30, 5);
    const paddleY= paddle.y;
    const ball = new Ball(200, 100, 8, 4,  3, -3);
    const drawingBall = new drawBall(ctx, cvs, paddleY, ball);
    drawingBall.setDrawBall();
    expect(ctx.arc).toHaveBeenCalledWith(200, 100, 8, 0, Math.PI*2);
  });

  test("Verify that FillStyle function is receiving the right color", () => {
    const paddle= new Paddle(cvs, 100, 20, 30, 5);
    const paddleY= paddle.y;
    const ball = new Ball(200, 100, 8, 4,  3, -3);
    const drawingBall = new drawBall(ctx, cvs, paddleY, ball);
    drawingBall.setDrawBall();
    expect(ctx.fillStyle).toBe("#ffcd05");
  });

  test("Verify that Fill function is called When setDrawBall is executed", () => {
    const paddle= new Paddle(cvs, 100, 20, 30, 5);
    const paddleY= paddle.y;
    const ball = new Ball(200, 100, 8, 4,  3, -3);
    const drawingBall = new drawBall(ctx, cvs, paddleY, ball);
    drawingBall.setDrawBall();
    expect(ctx.fill).toHaveBeenCalled();
  });

  test("Verify that StrockStyle function is receiving the right color", () => {
    const paddle= new Paddle(cvs, 100, 20, 30, 5);
    const paddleY= paddle.y;
    const ball = new Ball(200, 100, 8, 4,  3, -3);
    const drawingBall = new drawBall(ctx, cvs, paddleY, ball);
    drawingBall.setDrawBall();
    expect(ctx.strokeStyle).toBe("#2e3548");
  });

  test("Verify that Strock function is called When setDrawBall is executed", () => {
    const paddle= new Paddle(cvs, 100, 20, 30, 5);
    const paddleY= paddle.y;
    const ball = new Ball(200, 100, 8, 4,  3, -3);
    const drawingBall = new drawBall(ctx, cvs, paddleY, ball);
    drawingBall.setDrawBall();
    expect(ctx.stroke).toHaveBeenCalled();
  });

  test("Verify that ClosePath function is called When setDrawBall is executed", () => {
    const paddle= new Paddle(cvs, 100, 20, 30, 5);
    const paddleY= paddle.y;
    const ball = new Ball(200, 100, 8, 4,  3, -3);
    const drawingBall = new drawBall(ctx, cvs, paddleY, ball);
    drawingBall.setDrawBall();
    expect(ctx.closePath).toHaveBeenCalled();
  });