export class Block {

    constructor(widht, height) {
        this.width = widht;
        this.height = height;
    }

    setColor(color) {
        this.color = color;
    }

    draw(document) {
        const block = document.createElement('div');
        block.style.backgroundColor = this.color;
        block.style.width = this.width + 'px';
        block.style.height = this.height + 'px';
        return block;
    }
}