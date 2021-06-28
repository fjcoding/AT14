import { Plataform } from "./plataform";
export class Background extends Phaser.Scene {
  preload() {
    this.load.image("background", "images/background.jpg");
    this.load.image("plataforma", "images/plataforma.png");
  }
  create() {
    this.physics.world.setBoundsCollision(true, true, true, false);

    this.add.image(300, 300, "background");
    this.plataform = new Plataform(this, 300, 400);

    this.physics.add.collider(this.plataform);
    this.physics.add.collider(this.plataform);
  }
  update() {
    this.plataform.update();
  }
}
