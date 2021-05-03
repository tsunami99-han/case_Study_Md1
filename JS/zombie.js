Zombie = function (_x, _y,) {
    this.x = _x;
    this.y = _y;
    this.width = 100;
    this.height = 100;
    this.hp = 6;
    this.dmg = 1;
    this.image = new Image();
    this.image.src = 'Image/zombielv' + (Math.round(Math.random() * 2) + 1) + '.png';
    this.drawZombie = function (context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
        context.fillStyle = 'red';
        context.fillRect(this.x, this.y + this.height, 20 * this.hp, 8);
    }
    this.move = function () {
        if (score < 10) {
            this.x -= 4
        } else if (score <= 20) {
            this.x -= 8
        } else {
            this.x -= 12
        }
    }
}