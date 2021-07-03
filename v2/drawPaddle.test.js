import { drawPaddle } from "./drawPaddle";
import { Paddle } from "./paddle";

const cvs = { width: 400, height: 200 };
const ctx = {
  fillStyle: undefined,
  fillRect: jest.fn(),
  strokeStyle: undefined,
  strokeRect: jest.fn()
};

test("Verify that Fillrect function is called When setDrawPaddle is executed", () => {
  const padle = new Paddle(cvs, 100, 20, 30, 5);
  const drawingPaddle = new drawPaddle(ctx, cvs, padle);
  drawingPaddle.setdrawPaddle();
  expect(ctx.fillRect).toHaveBeenCalled();
});

test("Verify that Fillrect function is receiving right Arguments", () => {
  const padle = new Paddle(cvs, 100, 20, 30, 5);
  const drawingPaddle = new drawPaddle(ctx, cvs, padle);
  drawingPaddle.setdrawPaddle();
  expect(ctx.fillRect).toHaveBeenCalledWith(150, 150, 100, 20);
});

test("Verify that Fillrect function is receiving the right color", () => {
  const padle = new Paddle(cvs, 100, 20, 30, 5);
  const drawingPaddle = new drawPaddle(ctx, cvs, padle);
  drawingPaddle.setdrawPaddle();
  expect(ctx.fillStyle).toBe("#2e3548");
});

test("Verify that strokeRect function is called When setDrawPaddle is executed", () => {
  const padle = new Paddle(cvs, 100, 20, 30, 5);
  const drawingPaddle = new drawPaddle(ctx, cvs, padle);
  drawingPaddle.setdrawPaddle();
  expect(ctx.strokeRect).toHaveBeenCalled();
});

test("Verify that strokeRect function is receiving right Arguments", () => {
  const padle = new Paddle(cvs, 100, 20, 30, 5);
  const drawingPaddle = new drawPaddle(ctx, cvs, padle);
  drawingPaddle.setdrawPaddle();
  expect(ctx.strokeRect).toHaveBeenCalledWith(150, 150, 100, 20);
});

test("Verify that strokeRect function is receiving the right color", () => {
  const padle = new Paddle(cvs, 100, 20, 30, 5);
  const drawingPaddle = new drawPaddle(ctx, cvs, padle);
  drawingPaddle.setdrawPaddle();
  expect(ctx.strokeStyle).toBe("#ffcd05");
});
