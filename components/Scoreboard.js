export class Scoreboard{
    constructor(scene){
        this.scene =scene;
        this.score = 0;
    }

    create(){
        this.scoreText= this.scene.add.text(16,16, 'SCORE: 0',{
            fontSize:'20px',
            fill:'#fff',
            fontFamily:'Showcard Gothic, arial, sans-serif'
        });
    }

    incrementPoints(points){
        this.score+=points;
        //console.log(this.score);
        this.scoreText.setText('SCORE: ' + this.score);
    }
}