import { Background } from "./background.js";
const config = {
  type: Phaser.Auto,
  width: 640,
  height: 480,
  scene: [Background],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 400 },
      debug: false
    }
  }
};

const background = new Phaser.Game(config);
