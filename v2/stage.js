export class Stage {

    constructor(cvs, ball, paddle, BALL_RADIUS,GAME_OVER){
        this.cvs         = cvs;
        this.ball        = ball;
        this.paddle      = paddle;
        this.GAME_OVER   = GAME_OVER;
        this.BALL_RADIUS = BALL_RADIUS;

    }

    showYouWin(gameover, youwon){
        gameover.style.display = "block";
        youwon.style.display = "block";
    }    

    showYouLose(gameover, youlose){
        gameover.style.display = "block";
        youlose.style.display = "block";
    }

    gameOver(LIFE,gameover,youwon)
    {
        if(LIFE <= 0){
            this.showYouLose(gameover,youwon);
            this.GAME_OVER = true;
        }
        return this.GAME_OVER;
    }

}
