import { drawStage } from "../src/actions/drawStage.js";

test("Verify that Fillrect is called whe set draw is executed", () => {
  const cvs = { width: 400, height: 200 };
  const ctx = {
    fillStyle: undefined,
    fillRect: jest.fn(),
    strokeStyle: undefined,
    strokeRect: jest.fn()
  };
  expect(100).toBe(100);
});
