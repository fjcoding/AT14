export class Sum{
	constructor(canva, a, b){
		this.a = a;
		this.b = b;
		this.canva = canva;
		this.drawLine(this.canva,20,20,100,100,"red");
	}
	getSum(){
		return this.a + this.b; 
	}
	drawLine(canva, positionX1, positionY1, positionX2, positionY2, color){
		canva.beginPath();
		canva.strokeStyle = color;
		canva.moveTo(positionX1, positionY1);	
		canva.lineTo(positionX2, positionY2);
		canva.stroke();
		canva.closePath();
	}
}

