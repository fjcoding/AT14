export class Stage {
    constructor(ctx, BG_IMG){
        this.ctx = ctx;
        this.BG_IMG = BG_IMG;
        this.value  = 100; 

    }
    setDrawImage(){
        this.ctx.drawImage(this.BG_IMG, 0, 0);
    }
    // show game stats
    // text defined to write
    showGameStats(text, textX, textY, img, imgX, imgY){
        // draw text
        this.ctx.fillStyle = "#FFF";
        this.ctx.font = "25px Germania One";
        this.ctx.fillText(text, textX, textY);
        
        // draw image
        let width  = 25;
        let height = 25; 
        this.ctx.drawImage(img, imgX, imgY, width, height);
    }
    getDummy(){
        return this.value;
    }
}
