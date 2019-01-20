var canvas = document.getElementById('gameBoard');
var ctx = canvas.getContext('2d');

// Init
const size = 17.5;
var wcanvas = canvas.width = 700;
var hcanvas = canvas.height = 700;
var wboard = wcanvas / size;
var hboard = wcanvas / size;

var snake = new Snake();
var panel = new Panel();
var board = new Board();
var score = 0;


/**
 * listen from keyboard
 * direction of snake
 */
document.addEventListener('keydown', input);
function input(event) {
    if (event === undefined) return;
    if (event.keyCode == 37 && snake.direction != 2) {
        snake.direction = 0;
    } 
    else if (event.keyCode == 38 && snake.direction != 3) { 
        snake.direction = 1;
    }
    else if (event.keyCode == 39 && snake.direction != 0) {
        snake.direction = 2;
    }
    else if (event.keyCode == 40 && snake.direction != 1) {
        snake.direction = 3;
    }        
}

function draw() {
    panel.draw();
    board.draw();
    Fruit.draw();
    snake.draw();

}
var game = setInterval(draw, 350);

