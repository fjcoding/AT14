import { Paddle } from "../src/paddle";

const cvs = { width: 400, height: 200 };

test("Verify function getX, getting the value => 15  0 ", () => {
  const padle = new Paddle(cvs, 100, 20, 30, 5);
  const gettingX = padle.getX();
  expect(gettingX).toBe(150);
});

test("Verify function getY, getting the value => 150 ", () => {
  const padle = new Paddle(cvs, 100, 20, 30, 5);
  const gettingY = padle.getY();
  expect(gettingY).toBe(150);
});

test("Verify function getdX, getting the value => 5 ", () => {
  const padle = new Paddle(cvs, 100, 20, 30, 5);
  const gettingdX = padle.getdX();
  expect(gettingdX).toBe(5);
});

test("Verify that function movePaddle is moving x to the right", () => {
  const padle = new Paddle(cvs, 100, 20, 30, 5);
  expect(padle.x).toBe(150);
  padle.movePaddle(true, false);
  expect(padle.x).toBe(155);
});
test("Verify that fucntion movePaddle is moving x to the left ", () => {
  const padle = new Paddle(cvs, 100, 20, 30, 5);
  expect(padle.x).toBe(150);
  padle.movePaddle(false, true);
  expect(padle.x).toBe(145);
});
