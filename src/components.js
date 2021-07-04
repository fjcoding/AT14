/////// LOAD IMAGES ////////

// LOAD BG IMAGE
const BG_IMG = new Image();
BG_IMG.src = "./src/assets/img/bg.jpg";
//BG_IMG.src = "./../assets/img/bg.jpg";

const LEVEL_IMG = new Image();
LEVEL_IMG.src = "./src/assets/img/level.png";

const LIFE_IMG = new Image();
LIFE_IMG.src = "./src/assets/img/life.png";

const SCORE_IMG = new Image();
SCORE_IMG.src = "./src/assets/img/score.png";


/////// END LOAD IMAGES ////////

// ************************ //

/////// LOAD SOUNDS ////////

const WALL_HIT = new Audio();
WALL_HIT.src = "./src/assets/sounds/wall.mp3";

const LIFE_LOST = new Audio();
LIFE_LOST.src = "./src/assets/sounds/life_lost.mp3";

const PADDLE_HIT = new Audio();
PADDLE_HIT.src = "./src/assets/sounds/paddle_hit.mp3";

const WIN = new Audio();
WIN.src = "./src/assets/sounds/win.mp3";

const BRICK_HIT = new Audio();
BRICK_HIT.src = "./src/assets/sounds/brick_hit.mp3";


/////// END LOAD SOUNDS ////////

export {BG_IMG, LEVEL_IMG, LIFE_IMG, SCORE_IMG, WALL_HIT, LIFE_LOST, PADDLE_HIT, BRICK_HIT, WIN}