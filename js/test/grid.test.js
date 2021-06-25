import { Grid } from "../src/grid";

test("A grid should be created with a width and heigth specified", () => {
    const theGrid = new Grid(10, 20);
    expect(theGrid.width).toBe(10);
    expect(theGrid.height).toBe(20);
})

test("A grid should be able to calculate 200 blocks when it has width 10 and height 20", () => {
    const theGrid = new Grid(10, 20);
    const blocks = theGrid.calculateBlocks();
    expect(blocks).toBe(200);
})