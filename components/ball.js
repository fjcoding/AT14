export class Ball{
    constructor(scene){
        this.scene=scene;
        this.isGlued=true;
    }

    create(){
        this.ball= this.scene.physics.add.image(320,337, 'ball');
        this.ball.setBounce(1);
        this.ball.setCollideWorldBounds(true);
    }

    get() {
        return this.ball;
      }

    
}