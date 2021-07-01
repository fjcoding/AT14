import {Ball} from './ball'
import {Stick} from './stick'

// canvas
canvas = document.getElementById("canvas")
context = canvas.getContext("2d")

canvas.width  = 405
canvas.height = 600

let numberOfUnbrokenBlocks
let numberOfBall
let speedOfBall = 3
let level
let score
let multipleBlock = 0
let numberOfLiveBall = 0
let paused = false
let buffer

// mouse position
let y
let x

// ball




class Block {
    constructor(xInd, yInd, color) {
        this.indexInBlockList = blockList.length
        blockList.push(this)
        this.index = {x:xInd, y:yInd}
        this.color = color
        this.typeOfTheBox = null
        mapGrid[xInd][yInd] = this
        numberOfUnbrokenBlocks++
        this.tryYourChance()
    }
    draw() {
        drawRectangle(13 + this.index.x*20, 13 + this.index.y*11, 19, 10, this.color)
    }
    explode() {
        playSound("blockCrush")
        blockList[this.indexInBlockList] = null
        mapGrid[this.index.x][this.index.y] = null
        numberOfUnbrokenBlocks--
        score += 10
        multipleBlock++
        controlForLevelUp()
        if(this.typeOfTheBox) {
            new Box(this.index.x * 20 + 18, this.index.y * 11 + 15, this.typeOfTheBox)
        }
    }
    tryYourChance() {
        let toBeOrNotToBe = Math.floor(Math.random() * 100)  // [0 - 99]
        let which = Math.floor(Math.random()*7)         // [0 - 6]
        let chanceforSuperBall = Math.floor(Math.random()*3)  // [0 - 2]  for superBall
        let yesOrNoForThreeBalls = Math.floor(Math.random()*2)  // [0 - 1]  for threeBalls
        if(toBeOrNotToBe<15) {  // 15%
            switch(which) {
                case 0:
                    this.typeOfTheBox = narrowMovableStick
                break;
                case 1:
                    this.typeOfTheBox = expandMovableStick
                break;
                case 2:
                    this.typeOfTheBox = speedUp
                break;
                case 3:
                    this.typeOfTheBox = speedDown
                break;
                case 4:
                    this.typeOfTheBox = killBall
                break;
                case 5:
                    // superBall is excellent so I want to be rare it :d
                    this.typeOfTheBox = killBall
                    if(chanceforSuperBall==0) {
                        this.typeOfTheBox = superBall
                    }
                break;
                case 6:
                    this.typeOfTheBox = killBall
                    if(yesOrNoForThreeBalls==0) {
                        this.typeOfTheBox = threeBalls
                    }
                break;
            } 
            
        }
    }
}

// other functions


function controlForLevelUp() {
    if(!numberOfUnbrokenBlocks) {
        levelUp()
    }
}

function controlForGameOver() {
    if(numberOfBall < 0) {
        drawMain = drawGameOver
        drawBar = drawPlayButton
        clearBoxList()
        playSound("gameOver")
    }
}

function start() {
    if(!paused && mainBall.readyToGo) {
        mainBall.readyToGo = false
        mainBall.go(90, speedOfBall)
    }
}

function addToScore(point) {
    score += point
}

function levelUp() {
    addToScore(100 * level + Math.pow(multipleBlock,2))
    level++
    numberOfBall++
    mainBall.reset()
    if(levels[level]) {
        loadLevel(level)
    } else {
        drawMain = drawTheEnd
        drawBar = drawPlayButton
    }
}

function play() {
    numberOfBall = 2
    level = 1
    score = 0
    loadLevel(1)
    drawMain = drawGame
    drawBar = drawBoard
}

function loadLevel(index) {
    playSound("levelUp")
    numberOfUnbrokenBlocks = 0
    clearBoxList()
    clearMapGrid()
    clearBlockList()
    // to load for each block in the level
    for (var i = 0 ; i < levels[index].length; i++) {
        new Block(levels[index][i].xInd, levels[index][i].yInd, levels[index][i].color)
    }

}

function clearBlockList() {
    blockList = []
}

// default
let topStick = new Stick(10, 10, 395, 10, "#638379") 
let leftStick = new Stick(10, 10, 10, 550, "#638379") 
let rightStick = new Stick(395, 10, 395, 550, "#638379") 

let movableStick = new Stick((canvas.width - 75) / 2, 500, (canvas.width - 75) / 2 + 75, 500, "#e38c95")
movableStick.width = movableStick.x2 - movableStick.x1

function getCoor(e){
    if(!paused) {
        x=e.clientX
        y=e.clientY
        let newX1 = x - (window.innerWidth - canvas.width + movableStick.width) / 2
        let newX2 = newX1 + movableStick.width
        movableStick.x1 = newX1
        movableStick.x2 = newX2
        if(newX1<10) {
            movableStick.x1 = 10
            movableStick.x2 = movableStick.width + 10
        } else if(newX2 > canvas.width - 10) {
            movableStick.x1 = canvas.width - 10 - movableStick.width
            movableStick.x2 = canvas.width - 10
        }
        
        if(mainBall.readyToGo) {
            mainBall.updatePositionOnMovableStick()
        }
    }
}

let mainBall = new Ball(movableStick.x1 + (movableStick.width - 10) / 2, movableStick.y1 - 11) 
mainBall.isMain = true

// draw
let drawMain
let drawBar

// main
function drawGame() {
    for(var i = 0; i<ballList.length; i++) {
        if(ballList[i]) {
            ballList[i].draw()
        }
    }

    for(var i = 0; i<stickList.length; i++) {
        stickList[i][0].draw()
    }

    for(var i = 0; i<blockList.length; i++) {
        if(blockList[i]) {
            blockList[i].draw()
        }
    }

    for(var i=0; i<boxList.length; i++) {
        if(boxList[i]) {
            boxList[i].draw()
        }
    }
}

function drawWelcome() {
    drawText("ARKANOID", "#d9effc", "50px Saira Stencil One", 75, 275)
}

function drawGameOver() {
    drawText("Game Over", "#f46f47", "32px Noto Sans", 120, 300)
    drawText("Score " + score, "#ddd", "24px Noto Sans", 125, 350)
}

function drawTheEnd() {
    drawText("The End", "#61cdff", "50px Saira Stencil One", 120, 300)
    drawText("Score " + score, "#ddd", "24px Noto Sans", 125, 350)
}

// bar
function drawBoard() {
    // level
    drawText("Level "+level + " / 12", "#eee", "16px Noto Sans", 260, 580)

    // number of ball
    drawCircle(165, 570, 5, "#c1cf94")
    drawText("x " + numberOfBall, "#eee", "16px Noto Sans", 180, 580)
    
    // score
    drawText("Score " + score, "#eee", "16px Noto Sans", 30, 580)

    // pause
    if(paused) {
        drawPng("img/play.png", 370, 565)
        drawText("Paused", "#e38c95", "50px Noto Sans", 120, 275)
    } else {
        drawPng("img/pause.png", 370, 565)
    }
}

function drawPlayButton() {
    drawText("Play", "#ddd", "25px Noto Sans", 340, 580)
}

function toClick() {
    if(drawBar==drawPlayButton && x > (window.innerWidth - canvas.width)/2 + 340 && y > 558) {
        play()
    } else if(drawMain==drawGame && y < 550) {
        start()
    } else if(drawBar==drawBoard && x > 370 + (window.innerWidth - canvas.width)/2 ) {
        // pause button
        if(!paused) {
            for(var i = 0; i<ballList.length; i++) {
                if(ballList[i]) {
                    ballList[i].buffer.x = ballList[i].route.x
                    ballList[i].buffer.y = ballList[i].route.y
                    ballList[i].buffer.speed = ballList[i].speed
                    ballList[i].stop()
                }
            }
            speedOfBoxes(0)
            paused = true
        } else {
            for(var i = 0; i<ballList.length; i++) {
                if(ballList[i]) {
                    ballList[i].route.x = ballList[i].buffer.x
                    ballList[i].route.y = ballList[i].buffer.y
                    ballList[i].speed = ballList[i].buffer.speed
                }
            }
            speedOfBoxes(1)
            paused = false
        }

    }
}

drawMain = drawWelcome
drawBar = drawPlayButton


                    

// for animate
window.requestAnimationFrame(gameLoop)
