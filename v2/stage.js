export class Stage {

    constructor(cvs, ball, paddle, LIFE, BALL_RADIUS){
        this.cvs         = cvs;
        this.ball        = ball;
        this.paddle      = paddle;
        this.LIFE        = BALL_RADIUS;
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
    gameOver()
    {
        if(this.LIFE <= 0){
            this.showYouLose(null, null);
            this.GAME_OVER = true;
        }
    }    
}
