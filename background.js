import { Scoreboard } from "./components/Scoreboard.js";
import {Ball} from './components/ball.js';
export class Background extends Phaser.Scene{

    constructor(){
        super({key: "background"});
    }

    init(){
        this.scoreboard= new Scoreboard(this);
        this.ball= new Ball(this);
    }

    preload(){
        this.load.image('background', 'images/background.png');
        this.load.image('platform','images/platform.png');
        this.load.image('ball','images/ball.png');
        this.load.image('gameover','images/gameover.png');
    }

    create(){
        this.physics.world.setBoundsCollision(true, true,true,false);

        this.add.image(320,200,'background');
        this.platform= this.physics.add.image(320,365, 'platform').setImmovable();
        this.platform.body.allowGravity=false;
        this.platform.setCollideWorldBounds(true);
        
        this.gameoverImage=this.add.image(320,90,'gameover');
        this.gameoverImage.visible=false;

        this.scoreboard.create();

        this.ball= this.physics.add.image(320,337, 'ball')
        this.ball.setData('glue', true);
        this.ball.setCollideWorldBounds(true);

        

        this.physics.add.collider(this.ball, this.platform, this.platformImpact, null, this);

        this.ball.setBounce(1);

        this.cursors=this.input.keyboard.createCursorKeys();
       // this.platform.setVelocity(100,10);
    }

    platformImpact(ball, platform){
        this.scoreboard.incrementPoints(1);
        let relativeImpact=ball.x-platform.x;
        console.log(relativeImpact);
        if(relativeImpact<0.1 && relativeImpact >-0.1){
            ball.setVelocityX(Phaser.Math.Between(-10,10))
        }else{
            ball.setVelocityX(10 * relativeImpact);
        }
    }

    update(){
        if(this.cursors.left.isDown){
            this.platform.setVelocityX(-500);
            if(this.ball.getData('glue')){
                this.ball.setVelocityX(-500);
            }
            
        }
        else if(this.cursors.right.isDown){
            this.platform.setVelocityX(500);
            if (this.ball.getData('glue')){
                this.ball.setVelocityX(500);
            }
            
        }
        else{
            this.platform.setVelocityX(0);
            if(this.ball.getData('glue')){
                this.ball.setVelocityX(0);
            }
            
        }

        if(this.ball.y>500){
            console.log('end');
            this.gameoverImage.visible=true;
            this.scene.pause();
        }

        if(this.cursors.up.isDown){
            this.ball.setVelocity(-75,-300);
            this.ball.setData('glue', false);
        }

    }

}