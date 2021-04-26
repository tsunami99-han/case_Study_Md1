Plant = function (_x, _y) {
    this.x = _x;
    this.y = _y;
    this.hp = 5;
    this.dmg = 2;
    this.image = new Image();
    this.image.src = 'lv3.png';
    this.onload1 = function () {
        let canvas = document.getElementById("screen1");
        let context = canvas.getContext('2d');
        context.drawImage(this.image, this.x, this.y,100,100);
    }
}
Zombie = function (_x, _y,) {
    this.x = _x;
    this.y = _y;
    this.width=100
    this.height=100
    this.hp = 6;
    this.dmg = 1;
    this.image = new Image()
    this.image.src = 'zombielv.png'
    this.speed = _speed
}
Shoot = function (plant) {
    this.x = plant.x
    this.y = plant.y
    this.dmg = plant.dmg
    this.image = new Image()
    this.image.src = 'bullet.png'
    this.draw = function (context) {
        context.drawImage(this.image, this.x, this.y,100,50)
    }
    this.move = function () {
        this.x += 10;
    }
}
// function upDate(){
//     this.dmg+=1
// }
// function plantAttack(){
//
// }
