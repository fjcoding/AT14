import { Bricks } from "../src/models/bricks.js";

const cvs = { width: 400, height: 200 };
const ctx = {
  offSetLeft: jest.fn(),
  offSetTop: jest.fn(),
  marginTop: jest.fn(),
  fillColor: undefined,
  strokeColor: undefined,
  fillStyle: undefined,
  fillRect: jest.fn(),
  strokeStyle: undefined,
  strokeRect: jest.fn(),
  beginPath: jest.fn(),
  arc: jest.fn(),
  fill: jest.fn(),
  stroke: jest.fn(),
  closePath: jest.fn()
};

test("Verify function setCreateBricks, getting new array value bricks[][]", () => {
  const brick = new Bricks(ctx, 1, 5, 55, 20, 20, 20, 40, "#2e3548", "#FFF");
  const creatingBrick = brick.setCreateBricks();
  expect(creatingBrick).toBe(brick.bricks);
});

test("Verify function getBrickColumn, getting the value => 5 from the constructor", () => {
  const brick = new Bricks(ctx, 1, 5, 55, 20, 20, 20, 40, "#2e3548", "#FFF");
  const gettingBrickColumn = brick.getBrickColumn();
  expect(gettingBrickColumn).toBe(5);
});
