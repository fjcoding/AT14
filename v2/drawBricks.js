export class drawBricks
{
    
    constructor(ctx,bricks)
    {
        this.ctx    = ctx
        this.bricks = bricks
    }
    
    setDrawBricks(){

        for(let r = 0; r < this.bricks.row; r++){

            for(let c = 0; c < this.bricks.column; c++){

                let b = this.bricks.bricks[r][c];

                // if the brick isn't broken
                if(b.status){
                    
                    this.ctx.fillStyle = this.bricks.fillColor;
                    this.ctx.fillRect(b.x, b.y, this.bricks.width, this.bricks.height);
                    this.ctx.strokeStyle = this.bricks.strokeColor;
                    this.ctx.strokeRect(b.x, b.y, this.bricks.width, this.bricks.height);
                }
            }
        }
    }

}