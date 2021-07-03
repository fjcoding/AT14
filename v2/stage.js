export class Stage {

    constructor(cvs, ball, paddle, BALL_RADIUS){
        this.cvs         = cvs;
        this.ball        = ball;
        this.paddle      = paddle;
        this.GAME_OVER   = BALL_RADIUS;
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
    /*gameOver()
    {
        if(this.LIFE <= 0){
            this.showYouLose(null, null);
            this.GAME_OVER = true;
        }
    }*/

    gameOver(LIFE,gameover,youwon)
    {
        if(LIFE <= 0){
            this.GAME_OVER = this.showYouLose(gameover,youwon);
            this.GAME_OVER = true;
        }
        return this.GAME_OVER;
    }

}
