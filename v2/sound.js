export class Sound {
    constructor (WALL_HIT, PADDLE_HIT, BRICK_HIT, LIFE_LOST, WIN){
        this.WALL_HIT = WALL_HIT;
        this.PADDLE_HIT = PADDLE_HIT;
        this.LIFE_LOST = LIFE_LOST;
        this.BRICK_HIT = BRICK_HIT;
        this.WIN = WIN;
    }

    getWallHit(){
        return this.WALL_HIT;
    }

    playWallHit(){
        this.WALL_HIT.play();
    }

    getPaddleHit(){
        return this.PADDLE_HIT;
    }

    playPaddleHit(){
        this.PADDLE_HIT.play();
    }   

    getBrinkHit(){
        return this.BRICK_HITT;
    }

    playBrinkHit(){
        this.BRICK_HIT.play();
    }

    getLifeLost(){
        return this.LIFE_LOST;
    }

    playLifeLost(){
        this.LIFE_LOST.play();
    }

    getWin() {
        return this.WIN;
    }

    playWin() {
        this.WIN.play();
    }
}