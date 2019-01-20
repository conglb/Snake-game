class Fruit {

    constructor() {
        this.x = Math.floor(Math.random() * (wboard+1));
        this.y = Math.floor(Math.random() * (hboard+1-3) + 3);
        var instance = null;
    }
    

    static draw() {
        if (Fruit.instance === null || Fruit.instance == undefined) {
            Fruit.instance = new Fruit();
        }
        var img = new Image();
        img.onload = function() {
            ctx.drawImage(img, Fruit.instance.x * size, Fruit.instance.y * size, size, size);
        }
        img.src = 'res/img/food.png';   
        console.log(Fruit.instance.x);     
    }

    static delete() {
        Fruit.instance = null
    }

    // static getX() {
    //     return Fruit.x;
    // }

    // static getY() {
    //     return Fruit.y;
    // }

}

function Singleton() {
    throw new Error("Cannot creat more object!");
}

Fruit.prototype = Singleton.prototype;