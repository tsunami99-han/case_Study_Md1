Plant = function (_x, _y, _width, _height) {
    this.x = _x;
    this.y = _y;
    this.hp = 5;
    this.width = _width
    this.height = _height
    this.dmg = 2;
    this.width = 100;
    this.height = 100;
    this.image = new Image();
    this.image.src = 'lv3.png';
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

Zombie = function (_x, _y,) {
    this.x = _x;
    this.y = _y;
    this.width = 100
    this.height = 100
    this.hp =6
    this.dmg = 1;
    this.image = new Image()
    this.image.src = 'zombielv' + (Math.round(Math.random() * 2) + 1) + '.png'
    this.drawZombie = function (context) {
        context.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
    this.move = function () {
        // console.log(this.x)
        this.x -= 5
    }
}
Shoot = function (plant) {
    this.x = plant.x
    this.y = plant.y + 20;
    this.width = 100;
    this.height = 30;
    this.dmg = plant.dmg
    this.image = new Image()
    this.image.src = 'bullet.png'
    this.draw = function (context) {
        context.drawImage(this.image, this.x, this.y, 100, 50)
    }
    this.move = function () {
        this.x += 10;
    }
}
