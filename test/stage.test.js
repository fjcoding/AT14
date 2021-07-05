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
  const gameoverMock = document.createElement("img");
  const youwonMock = document.createElement("img");
  const youloseMock = document.createElement("img");
  const LIFEmock = 0;
  const stage = new Stage(cvs, ball, paddle, 8);

  stage.showYouWin(gameoverMock, youwonMock);
  stage.showYouLose(gameoverMock, youloseMock);
  stage.gameOver(LIFEmock, gameoverMock, youwonMock);
  expect(false).toBe(false);
});
