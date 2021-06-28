export class Plataform {
  constructor(scene, x, y) {
    this.scene = scene;

    this.sprite = scene.physics.add
      .sprite(x, y, "plataforma", 0)
      .setImmovable();
    this.sprite.body.allowGravity = false;
    this.sprite.setCollideWorldBounds(true);

    this.cursor = scene.input.keyboard.createCursorKeys();
  }
  update() {
    if (this.cursor.left.isDown) {
      this.sprite.setVelocityX(-300);
    } else if (this.cursor.right.isDown) {
      this.sprite.setVelocityX(300);
    } else {
      this.sprite.setVelocityX(0);
    }
  }
}
