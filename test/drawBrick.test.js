import { drawBricks } from "../src/actions/drawBricks.js";
import { Bricks } from "../src/models/bricks.js";

const cvs = { width: 400, height: 200 };
const ctx = {
  fillStyle: undefined,
  fillRect: jest.fn(),
  strokeStyle: undefined,
  strokeRect: jest.fn()
};

test("Verify that fillRect function is called When setDrawBricks is executed", () => {
  const brickObj = new Bricks(ctx, 1, 5, 55, 20, 20, 20, 40, "#2e3548", "#FFF");
  const drawingBricks = new drawBricks(ctx, brickObj);
  brickObj.setCreateBricks();
  drawingBricks.setDrawBricks();

  expect(ctx.strokeRect).toHaveBeenCalled();
  expect(ctx.strokeRect).toHaveBeenCalledWith(20, 60, 55, 20);
});

test("Verify that strokeRect function is called When setDrawBricks is executed", () => {
  const brickObj = new Bricks(ctx, 1, 5, 55, 20, 20, 20, 40, "#2e3548", "#FFF");
  const drawingBricks = new drawBricks(ctx, brickObj);
  brickObj.setCreateBricks();
  drawingBricks.setDrawBricks();

  expect(ctx.strokeRect).toHaveBeenCalled();
  expect(ctx.strokeRect).toHaveBeenCalledWith(20, 60, 55, 20);
});