class Motivation {
    constructor(row, col, x, y) {
        this.canvas = canvas;
        this.image = new Image();
        this.image.src = 'abc.gif';
        this.x = x;
        this.y = y;
        this.row = row;
        this.col = col;
        this.indexCol = this.col - 1;
        this.indexRow = this.row - 1;
    }
    drawImg() {
        let imgHeight = this.image.height / (this.row);
        let imgWidth = this.image.width / (this.col);
        this.pen.drawImage(this.image, this.indexCol * imgWidth, this.indexRow * imgHeight, imgWidth, imgHeight, this.x, this.y, imgWidth, imgHeight);
    }
    updateFrame() {
        this.indexCol > 0 ? this.indexCol-- : this.indexCol = this.col - 1;
    }
    setPosition(x,y){
        this.x = x;
        this.y = y;
    }
}