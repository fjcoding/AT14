export class Ball {
    constructor(startX, startY) {
        this.coordinate = {x: startX, y: startY}
        this.route = {x: 0, y: 0}    // distance per frame
        this.angle = 0   // degree
        this.blockIndex = {x1:0, y1:0, x2: 0, y2:0}
                        // x1, y1, x2, y2 are not point, index
        this.speed = 0   // per frame
        this.color = "#c1cf94"
        this.addList()
        this.brokenBlock = new Array()   // this list for will be broken block
        this.readyToGo = true
        this.superBall = false
        this.isMain = false   // to control for main ball or secondary ball
        this.buffer =  {
            x: this.route.x,
            y: this.route.y,
            speed: this.speed
        }
        numberOfLiveBall++
    }
    addList() {
        ballList.push(this)
    }
    
    removeList() {

    }
    draw() {
        
        // to catch current block index
        this.blockIndex.x1 = parseInt((this.coordinate.x - 13) / 20)
        this.blockIndex.y1 = parseInt((this.coordinate.y - 13) / 11)
        this.blockIndex.x2 = parseInt((this.coordinate.x - 13 + 10) / 20)
        this.blockIndex.y2 = parseInt((this.coordinate.y - 13 + 10) / 11)
        // the diameter of the ball is 10px

        drawCircle(this.coordinate.x, this.coordinate.y, 5, this.color)
        this.coordinate.x += this.route.x
        this.coordinate.y += this.route.y
        if(this.coordinate.x > 385 && this.route.x > 0) {
            this.setAngle(180 - this.angle)
            playSound("click")
        } else if(this.coordinate.x < 10 && this.route.x < 0) {
            this.setAngle(180 - this.angle)
            playSound("click")
        }
        if(this.coordinate.y < 10 && this.route.y < 0) {
            this.setAngle(360 - this.angle)
            playSound("click")
        } else if (this.coordinate.y + 10 > 500 && this.coordinate.y + 10 < 505 && this.coordinate.x + 10 > movableStick.x1 && this.coordinate.x < movableStick.x2) {
            let newDegree = Math.abs((movableStick.x2 - this.coordinate.x + 5) * 150 / movableStick.width)
            if(newDegree > 170) {
                newDegree = 170
            } else if(newDegree < 10) {
                newDegree = 10
            }
            this.setAngle(newDegree)
            score += Math.pow(multipleBlock, 2)
            multipleBlock = 0
            playSound("click")
        } else if (this.coordinate.y > 550) {
            this.route.x = this.route.y = this.speed = 0
            this.coordinate.x = -10
            this.coordinate.y = -10
            numberOfLiveBall--
            if(numberOfLiveBall==0) {
                playSound("negative")
                this.reset()
            }
        }


        // horizontal block control
        if(this.route.x > 0) {  // go right
            if(mapGrid[this.blockIndex.x2][this.blockIndex.y1]) {
                this.addBrokenBlock(this.blockIndex.x2, this.blockIndex.y1)
            }
            if(mapGrid[this.blockIndex.x2][this.blockIndex.y2]) {
                this.addBrokenBlock(this.blockIndex.x2, this.blockIndex.y2)
            }
        } else if (this.route.x < 0) {  // go left
            if(mapGrid[this.blockIndex.x1][this.blockIndex.y1]) {
                this.addBrokenBlock(this.blockIndex.x1, this.blockIndex.y1)
            }
            if(mapGrid[this.blockIndex.x1][this.blockIndex.y2]) {
                this.addBrokenBlock(this.blockIndex.x1, this.blockIndex.y2)
            }
        }

        if(mapGrid[this.blockIndex.x1]) {
            // vertical block control
            if(this.route.y < 0) {  // go up
                if(mapGrid[this.blockIndex.x1][this.blockIndex.y1]) {
                    this.addBrokenBlock(this.blockIndex.x1, this.blockIndex.y1)
                }
                if(mapGrid[this.blockIndex.x2][this.blockIndex.y1]) {
                    this.addBrokenBlock(this.blockIndex.x2, this.blockIndex.y1)
                }
            } else if (this.route.y > 0) {  // go down
                if(mapGrid[this.blockIndex.x1][this.blockIndex.y2]) {
                    this.addBrokenBlock(this.blockIndex.x1, this.blockIndex.y2)
                }
                if(mapGrid[this.blockIndex.x2][this.blockIndex.y2]) {
                    this.addBrokenBlock(this.blockIndex.x2, this.blockIndex.y2)
                }
            }
        }
        if(this.brokenBlock.length == 3) {       //     ## ##
            var degree = 135                     //      * ##    --> there are 3 blocks
            if(this.route.y < 0) {  // go up     //                 * is a ball
                // the index of corner block in brokenBlock is 0
                for( var i = 1; i<this.brokenBlock.length; i++) {
                    mapGrid[this.brokenBlock[i].x][this.brokenBlock[i].y].explode()
                }
                if(this.route.x < 0)  {
                    degree = 205
                }
            } else if(this.route.y > 0) {    // go down 
                // the index of corner block in brokenBlock is 1
                mapGrid[this.brokenBlock[0].x][this.brokenBlock[0].y].explode()
                mapGrid[this.brokenBlock[2].x][this.brokenBlock[2].y].explode()
                if(this.route.x > 0) {
                    degree = 205
                }
            }
            if(!this.superBall){this.setAngle(degree * 2 - this.angle)}
        } else if(this.brokenBlock.length == 2){      //   *
            
            mapGrid[this.brokenBlock[0].x][this.brokenBlock[0].y].explode()
            mapGrid[this.brokenBlock[1].x][this.brokenBlock[1].y].explode()

            let topBlock = (this.brokenBlock[0].y > this.brokenBlock[1].y) ? 0:1
            let botBlock = (topBlock==0)?1:0

            if(this.blockIndex.y1 == this.brokenBlock[topBlock].y && this.blockIndex.x1 == this.brokenBlock[botBlock].x) {
                if(!this.superBall) { this.setAngle(90 - this.angle) }
            } else if (this.blockIndex.y1 == this.brokenBlock[topBlock].y && this.blockIndex.x2 == this.brokenBlock[botBlock].x) {
                if(!this.superBall) { this.setAngle(270 - this.angle) }
            } else if (this.brokenBlock[0].y == this.brokenBlock[1].y) {
                if(!this.superBall) { this.setAngle(360 - this.angle) }
            } else if (this.brokenBlock[0].x == this.brokenBlock[1].x) {
                if(!this.superBall) { this.setAngle(180 - this.angle) } 
            }
        } else if(this.brokenBlock.length == 1) {
            mapGrid[this.brokenBlock[0].x][this.brokenBlock[0].y].explode()
            if(this.blockIndex.x1 == this.blockIndex.x2 &&         
               this.blockIndex.y1 != this.blockIndex.y2) {
                if(!this.superBall) { this.setAngle(360 - this.angle) }
            } else if(this.blockIndex.x1 != this.blockIndex.x2 &&
                    this.blockIndex.y1 == this.blockIndex.y2) {
                    if(!this.superBall) {this.setAngle(180 - this.angle)}
            } else if(this.blockIndex.x1 != this.blockIndex.x2 &&
                this.blockIndex.y1 != this.blockIndex.y2) {
                    if((this.blockIndex.x1==this.brokenBlock[0].x && this.blockIndex.y2 == this.brokenBlock[0].y) ||
                        (this.blockIndex.x2==this.brokenBlock[0].x && this.blockIndex.y1 == this.brokenBlock[0].y)) {
                            if(!this.superBall) { this.setAngle(270 - this.angle) }
                    } else {
                            if(!this.superBall) { this.setAngle(90 - this.angle) }
                    }
                }
        }
        this.brokenBlock = new Array()
    }

    go(degree, speed) {
        this.setAngle(degree)
        this.setSpeed(speed)
    }

    stop() {
        this.speed = 0
        this.updateRoute()
    }

    setAngle(degree) {
        if(degree==0) {
            degree = 5
        } else if(degree==180) {
            degree = 175
        }
        this.angle = degree
        this.updateRoute()
    }

    setSpeed(speed) {
        this.speed = speed
        this.updateRoute()
    }

    updateRoute() {
        this.route.x = this.speed * getCos(this.angle)
        this.route.y = this.speed * getSin(this.angle)  * -1  // coordinate system in canvas is reverse so I multiply -1
    }
    addBrokenBlock(x, y) {
        var bulundu = false
        for(var i=0;i<this.brokenBlock.length;i++) {
            if(this.brokenBlock[i].x == x && this.brokenBlock[i].y == y) {
            bulundu = true
            break
            }
        }
        if(!bulundu) {
            this.brokenBlock.push({x: x, y: y})
        }
    }
    updatePositionOnMovableStick() {
        this.coordinate.x = movableStick.x1 + (movableStick.width - 10) / 2
        this.coordinate.y = movableStick.y1 - 11
    }

    reset() {
        mainBall.updatePositionOnMovableStick()
        mainBall.readyToGo = true
        mainBall.stop()
        multipleBlock = 0
        numberOfBall--
        numberOfLiveBall = 1
        clearBallList()
        
        // reset for new level and game
        movableStick.width = 75
        superBall(false)
        // ^ reset for new level and game
        controlForGameOver()
    }

}