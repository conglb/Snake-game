var canvas = document.getElementById('gameBoard');
var ctx = canvas.getContext('2d');
ctx.font = "30px Arial";
ctx.fillText("Hello World", 100, 100);

var snake = Snake();

function draw() {
    snake.draw();
}
var game = setInterval(draw, 100);

