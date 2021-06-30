const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")

canvas.width = 405
canvas.height = 600

var drawText = function(text, color, font, x, y) {
    context.fillStyle = color
    context.font = font
    context.fillText(text, x, y)
}

function drawPlayButton() {
    drawText("Play", "#ddd", "25px Noto Sans", 340, 580)
}

function drawWelcome() {
    drawText("ARKANOID", "#d9effc", "50px Saira Stencil One", 75, 275)
}

drawWelcome()
drawPlayButton()