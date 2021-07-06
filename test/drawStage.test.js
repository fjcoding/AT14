import { drawStage } from "../src/actions/drawStage.js";

const cvs = { width: 400, height: 200 };
const ctx = {
  fillStyle: undefined,
  fillRect: jest.fn(),
  strokeStyle: undefined,
  strokeRect: jest.fn(),
  drawImage: jest.fn(),
  fillText: jest.fn()
};

test("Verify that drawImage is called When setDrawImage is executed and receiving right Arguments from the constructor", () => {
  const BG_IMGmock = {};
  const drawingStage = new drawStage(ctx, BG_IMGmock);
  drawingStage.setDrawImage();

  expect(ctx.drawImage).toHaveBeenCalled();
  expect(ctx.drawImage).toHaveBeenCalledWith(BG_IMGmock, 0, 0);
});

test("Verify that fillText is called When showGameStats is executed and receiving right Arguments from the constructor and object Ball", () => {
  const BG_IMGmock = {};
  const drawingStage = new drawStage(ctx, BG_IMGmock);
  const Ball = {
    score: 0,
    life: 3
  };
  const LvlUp = {
    level: 1
  };
  const Lvl_ImgMock = {};
  drawingStage.showGameStats(Ball.score, 35, 25, Lvl_ImgMock, 5, 5);

  expect(ctx.fillText).toHaveBeenCalled();
  expect(ctx.fillText).toHaveBeenCalledWith(0, 35, 25);
});

test("Verify that drawImage is called When showGameStats is executed and receiving right Arguments from the constructor and object Ball", () => {
  const BG_IMGmock = {};
  const drawingStage = new drawStage(ctx, BG_IMGmock);
  const Ball = {
    score: 0,
    life: 3
  };
  const LvlUp = {
    level: 1
  };
  const Lvl_ImgMock = {};
  let width = 25;
  let height = 25;
  drawingStage.showGameStats(Ball.score, 35, 25, Lvl_ImgMock, 5, 5);

  expect(ctx.drawImage).toHaveBeenCalled();
  expect(ctx.drawImage).toHaveBeenCalledWith(Lvl_ImgMock, 5, 5, 25, 25);
});
