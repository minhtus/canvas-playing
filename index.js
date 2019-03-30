// the size of canvas
var cvWidth = 800;
var cvHeight = 400;

// the position of draw image in canvas
var x = 0
var y = 0;

// the position of frame to draw in sprite sheet
var srcX;
var srcY;

// the sprite sheet size
var sheetWidth = 1764;
var sheetHeight = 768;


// the number of char in sprite sheet
var cols = 9;
var rows = 6;

// the frame size
var width = sheetWidth / cols;
var height = sheetHeight / rows;

// load sprite sheet
var warrior = new Image();
warrior.src = './img/warrior.png';

// get canvas
var canvas = document.getElementById('warrior');
canvas.width = cvWidth;
canvas.height = cvHeight;
// get canvas context to draw

var context = canvas.getContext('2d');
// zoom and flip horizontal the canvas to draw flipped image
context.scale(-1.5, 1.5);

var currentFrame = 0;
var currentRow = 0;

function updateFrame() {
    context.clearRect(x, y, -width, height);
    currentFrame = ++currentFrame % cols;
    srcX = currentFrame * width;
    srcY = currentRow * height;
    if (currentFrame == cols -1) {
        currentRow = ++currentRow % rows;
        console.log(`Switch to ${currentRow} row`);
    }
}

function draw() {
    updateFrame();
    // -width because the canvas is flipped horizontal
    context.drawImage(warrior, srcX, srcY, width, height, x, y, -width, height);
}

setInterval(() => {
    draw();
}, 150);
