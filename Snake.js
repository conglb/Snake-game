class Snake {
    constructor() {
        this.arr = [[5,5], [6,5]];
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

        var firstElement = this.arr[0];
        for (let i=0; i < this.arr.length-1; i++) {
            this.arr[i] = this.arr[i+1];
        }
        var lastElement = this.arr.pop();
        
        switch (this.direction) {
            case 0:
                lastElement[0] -= this.speed;
                break;
            case 1: 
                lastElement[1] -= this.speed;
                break;
            case 2:
                lastElement[0] += this.speed;
                break;
            case 3:
                lastElement[1] += this.speed;
                break;
            default:
                break;
        }

        this.arr.push(lastElement);
        console.log(firstElement);
        // repaint the board
        // ctx.fillStyle = 'green';     
        // ctx.fillRect(firstElement[0] * size, firstElement[1] * size, size, size);
    }
    draw() {
        this.update();
        for (var rect of this.arr) {
            //console.log('draw' + rect);
            ctx.fillStyle = 'black';
            ctx.fillRect(rect[0]*size, rect[1]*size, size, size)
        }
    }
}