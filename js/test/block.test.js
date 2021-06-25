import { Block } from "../src/block";

test("A block should be created with a width and height specified", () => {
    const theBlock = new Block(20, 20);
    expect(theBlock.width).toBe(20);
    expect(theBlock.height).toBe(20);
})

test("A grid should be able to set a background color", () => {
    const theBlock = new Block(20, 20);
    theBlock.setColor('black');
    expect(theBlock.color).toBe('black');
})