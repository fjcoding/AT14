export class Background extends Phaser.Scene {
  constructor() {
    super({ key: "background" });
  }

  preload() {
    this.load.image("background", "images/background.jpg");
  }
  create() {
    this.add.image(0, 0, "background");
  }
}
