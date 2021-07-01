export class Line{

    constructor(canvas, positionX1, positionY1, positionX2, positionY2, color){
        this.canvas =canvas;
        this.positionX1 = positionX1;
        this.positionX2 = positionX2;
        this.positionY1 = positionY1;
        this.positionY2 = positionY2;
        this.color      = color;
        this.drawLine(this.canvas, this.positionX1, this.positionY1, this.positionX2, this.positionY2, this.color);
    }

    drawLine(canva, positionX1, positionY1, positionX2, positionY2, color){
            canva.beginPath();
            canva.strokeStyle = color;
            canva.moveTo(positionX1, positionY1);	
            canva.lineTo(positionX2, positionY2);
            canva.stroke();
            canva.closePath();
    }

    getColor(){
        return this.color;
    }

}