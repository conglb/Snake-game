var canvas = document.getElementById('gameBoard');
var ctx = canvas.getContext('2d');
//ctx.font = "30px Arial";
//ctx.fillText("Hello World", 100, 100);
const size = 17.5;
var wcanvas = canvas.width = 700;
var hcanvas = canvas.height = 700;
var wboard = wcanvas / size;
var hboard = wcanvas / size;

var snake = new Snake();
var panel = new Panel();
var board = new Board();
var score = 0;
function draw() {
    panel.draw();
    board.draw();
    snake.draw();
}
var game = setInterval(draw, 350);

