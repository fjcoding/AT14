
const BG_IMG = new Image();
const LEVEL_IMG = new Image();
const LIFE_IMG = new Image();
const SCORE_IMG = new Image();

const WALL_HIT = new Audio();
const LIFE_LOST = new Audio();
const PADDLE_HIT = new Audio();
const WIN = new Audio();
const BRICK_HIT = new Audio()

fetch('config.json')
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        BG_IMG.src = data.images.BG_IMG;
        LEVEL_IMG.src = data.images.LEVEL_IMG;
        LIFE_IMG.src = data.images.LIFE_IMG;
        SCORE_IMG.src = data.images.SCORE_IMG;

        WALL_HIT.src = data.audios.WALL_HIT;
        LIFE_LOST.src = data.audios.LIFE_LOST;
        PADDLE_HIT.src = data.audios.PADDLE_HIT;
        WIN.src = data.audios.WIN;
        BRICK_HIT.src = data.audios.BRICK_HIT;
    })   