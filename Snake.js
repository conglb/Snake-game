class Snake {
    constructor() {
        this.arr = [{x: 6,y: 5}, {x: 5, y: 5}, ];
        this.direction = 2;
        this.speed = 1;
        document.addEventListener('keydown', this.input);
    }
    input(event) {
        if (event === undefined) return;
        if (event.keyCode == 37 && this.direction != 2) {
            this.direction = 0;
        } 
        else if (event.keyCode == 38 && this.direction != 3) { 
            this.direction = 1;
        }
        else if (event.keyCode == 39 && this.direction != 0) {
            this.direction = 2;
        }
        else if (event.keyCode == 40 && this.direction != 1) {
            this.direction = 3;
        }        
        console.log(this.direction);

    }
    checkCollision() {
        
    }
    update() {
        console.log(this.direction);
        if (this.direction == -1) return;

        var firstElement = {x: this.arr[0].x, y: this.arr[0].y};
        console.log(this.arr);
        switch (this.direction) {
            case 0:
                firstElement.x -= this.speed;
                break;
            case 1: 
                firstElement.y -= this.speed;
                break;
            case 2:
                firstElement.x += this.speed;
                break;
            case 3:
                firstElement.y += this.speed;
                break;
            default:
                break;
        }

        this.arr.pop();
        this.arr.unshift(firstElement);
        console.log(this.arr);
    }
    draw() {
        for (var rect of this.arr) {
            ctx.fillStyle = 'black';
            ctx.fillRect(rect.x*size, rect.y*size, size, size)
        }
        this.update();
    }
}