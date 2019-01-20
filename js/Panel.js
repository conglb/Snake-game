class Panel {
    constructor() {

    }

    draw() {
        for (let i = 0; i < wboard; i++) {
            ctx.fillStyle = 'brown';
            ctx.fillRect(i * size, 0, size, size * 3);
        }
        var img = new Image();
        img.onload = function() {
            ctx.drawImage(img, 15, 5);
        }
        img.src = 'res/img/food.png';
        ctx.fillStyle = 'black';
        ctx.font = "30px Arial";
        ctx.fillText(score.toString(), 60, 35);
    }
}