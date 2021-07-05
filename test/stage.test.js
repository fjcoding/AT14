import { Stage } from "../src/models/stage";

const cvs = { width: 400, height: 200 };
const ctx = {
  fillStyle: undefined,
  fillRect: jest.fn(),
  strokeStyle: undefined,
  strokeRect: jest.fn()
};

test("Verify that gameOver returns a gameover image", () => {
  const ball = {};
  const paddle = {};
  const stage = new Stage(cvs, ball, paddle, 8);

  const drawingPaddle = new drawPaddle(ctx, cvs, padle);
  drawingPaddle.setdrawPaddle();
  expect(ctx.fillRect).toHaveBeenCalled();
});
