class Board {
    constructor() {

    }
    draw() {
        for (let i=0; i < wboard; i++) {
            for (let j=3; j<hboard; j++) {
                ctx.fillStyle = 'green';
                ctx.fillRect(i * size, j * size, size, size);
            }
        }
    }
}