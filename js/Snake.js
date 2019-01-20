class Snake {
    constructor() {
        this.arr = [{x: 6,y: 5}, {x: 5, y: 5}, ];
        this.direction = -1;
        this.speed = 1;
    }

    checkCollision(head) {
        if (head.x < 0 || head.x > wboard) {
            console.log("flag 1");
            return true;
        }
        if (head.y < 3 || head.y > wboard) {
            console.log("flag 2");
            return true;
        }
        /*
        for (let rect of this.arr) {
            if (rect.x === head.x && rect.y === head.y) return true;
        }
        */
        return false;
    }
    update() {
        console.log(this.direction);
        if (this.direction == -1) return;

        // caculate new head
        var firstElement = {x: this.arr[0].x, y: this.arr[0].y};
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
        if (firstElement.x === Fruit.instance.x && firstElement.y === Fruit.instance.y) {
            Fruit.delete();
            score += 1;
        } else this.arr.pop();
        this.arr.unshift(firstElement);

        // check collision 
        if (this.checkCollision(firstElement) === true) {
            this.direction = -1;
            clearInterval(game)
        }

    }
    draw() {
        for (var rect of this.arr) {
            ctx.fillStyle = 'black';
            ctx.fillRect(rect.x*size, rect.y*size, size, size)
        }
        this.update();
    }
}