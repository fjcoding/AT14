export class Bricks
{
    constructor(ctx, row = 0, column = 0, width = 0, height = 0, offSetLeft = 0, offSetTop = 0, marginTop = 0, fillColor = '', strokeColor = '')
    {
        this.row = row;
        this.column = column;
        this.width = width;
        this.height = height;
        this.offSetLeft = offSetLeft;
        this.offSetTop = offSetTop;
        this.marginTop = marginTop;
        this.fillColor = fillColor;
        this.strokeColor = strokeColor;
        this.ctx = ctx;
        this.bricks = [];
    }

    setCreateBricks(){

        for(let r = 0; r < this.row; r++){

            this.bricks[r] = [];

            for(let c = 0; c < this.column; c++){

                this.bricks[r][c] = {
                    x : c * ( this.offSetLeft + this.width ) + this.offSetLeft,
                    y : r * ( this.offSetTop + this.height ) + this.offSetTop + this.marginTop,
                    status : true
                }
            }
        }
    }

    setDrawBricks(){

        for(let r = 0; r < this.row; r++){

            for(let c = 0; c < this.column; c++){

                let b = this.bricks[r][c];

                // if the brick isn't broken
                if(b.status){
                    
                    this.ctx.fillStyle = this.fillColor;
                    this.ctx.fillRect(b.x, b.y, this.width, this.height);
                    this.ctx.strokeStyle = this.strokeColor;
                    this.ctx.strokeRect(b.x, b.y, this.width, this.height);
                }
            }
        }
    }

    getBrickColumn(){
        return this.column;
    }
}