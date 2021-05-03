Plant = function (_x, _y, _width, _height) {
    this.x = _x;
    this.y = _y;
    this.hp = 10;
    this.width = _width;
    this.height = _height;
    this.dmg = 2;
    this.width = 100;
    this.height = 100;
    this.image = new Image();
    this.image.src = 'Image/lv3.png';
    this.drawPlant = function () {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    this.down = function () {
        if (this.y < 500) {
            this.y += 100
        }
    }
    this.up = function () {
        if (this.y > 0) {
            this.y -= 100
        }
    }
}