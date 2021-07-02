import { Paddle } from "./paddle";

const cvs = { width: 400, height: 200 };
const ctx = {
  fillStyle: undefined,
  fillRect: jest.fn(),
  strokeStyle: undefined,
  strokeRect: jest.fn()
};

test("Verify that Fillrect function is called When setDrawPaddle is executed", () => {
  const paddle = new Paddle(ctx, cvs, 200, 10, 300);
  paddle.setdrawPaddle();
  expect(ctx.fillRect).toHaveBeenCalled();
});

test("Verify that Fillrect function is receiving right Arguments", () => {
  const paddle = new Paddle(ctx, cvs, 200, 10, 300);
  paddle.setdrawPaddle();
  expect(ctx.fillRect).toHaveBeenCalledWith(100, -110, 200, 300);
});

test("Verify that Fillrect function is receiving the right color", () => {
  const paddle = new Paddle(ctx, cvs, 200, 10, 300);
  paddle.setdrawPaddle();
  expect(ctx.fillStyle).toBe("#2e3548");
});

test("Verify that strokeRect function is called When setDrawPaddle is executed", () => {
  const paddle = new Paddle(ctx, cvs, 200, 10, 300);
  paddle.setdrawPaddle();
  expect(ctx.strokeRect).toHaveBeenCalled();
});

test("Verify that strokeRect function is receiving right Arguments", () => {
  const paddle = new Paddle(ctx, cvs, 200, 10, 300);
  paddle.setdrawPaddle();
  expect(ctx.strokeRect).toHaveBeenCalledWith(100, -110, 200, 300);
});

test("Verify that strokeRect function is receiving the right color", () => {
  const paddle = new Paddle(ctx, cvs, 200, 10, 300);
  paddle.setdrawPaddle();
  expect(ctx.strokeStyle).toBe("#ffcd05");
});
