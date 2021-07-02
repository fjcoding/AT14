export class StickClass {
  // cross stick is not now :(
  constructor(x1, y1, x2, y2, color) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.color = color;
    this.angle = (Math.atan2(y2 - y1, x2 - x1) * 180.0) / Math.PI;
    this.assets = [];
    this.getAsset();
  }
  draw() {
    drawStick(this.x1, this.y1, this.x2, this.y2, 3, this.color);
  }
  getAsset() {
    stickList.push([this, this.angle]);
  }
}
