export class Bricks
{
    constructor(ctx)
    {
        this.brick = {
            row : 1,
            column : 5,
            width : 55,
            height : 20,
            offSetLeft : 20,
            offSetTop : 20,
            marginTop : 40,
            fillColor : "#2e3548",
            strokeColor : "#FFF"
        }
        this.ctx = ctx;
        this.bricks = [];
    }

    setCreateBricks(){
        for(let r = 0; r < this.brick.row; r++){
            this.bricks[r] = [];
            for(let c = 0; c < this.brick.column; c++){
                this.bricks[r][c] = {
                    x : c * ( this.brick.offSetLeft + this.brick.width ) + this.brick.offSetLeft,
                    y : r * ( this.brick.offSetTop + this.brick.height ) + this.brick.offSetTop + this.brick.marginTop,
                    status : true
                }
            }
        }
    }

    setDrawBricks(){
        for(let r = 0; r < this.brick.row; r++){
            for(let c = 0; c < this.brick.column; c++){
                let b = this.bricks[r][c];
                // if the brick isn't broken
                if(b.status){
                    this.ctx.fillStyle = this.brick.fillColor;
                    this.ctx.fillRect(b.x, b.y, this.brick.width, this.brick.height);
                    
                    this.ctx.strokeStyle = this.brick.strokeColor;
                    this.ctx.strokeRect(b.x, b.y, this.brick.width, this.brick.height);
                }
            }
        }
    }

    getBrickColumn(){
        return this.brick.column;
    }
}