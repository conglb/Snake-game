class Panel {
    constructor() {

    }

    draw() {
        for (let i = 0; i < wboard; i++) {
            ctx.fillStyle = 'brown';
            ctx.fillRect(i * size, 0, size, size * 3);
        }
    }
}