import { Block } from './block.js'

export class Grid {

    constructor(widht, height) {
        this.width = widht;
        this.height = height;
    }

    calculateBlocks() {
        return this.width * this.height
    }

    draw(document, parentNodeId) {
        const parentNode = document.getElementById(parentNodeId);
        const totalBlocks = this.calculateBlocks();
        for (let blockCount = 0; blockCount < totalBlocks; blockCount++) {
            const block = new Block(20, 20);
            block.setColor('red');
            parentNode.appendChild(block.draw(document));
        }
    }
}