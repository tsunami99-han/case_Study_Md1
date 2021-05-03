function createZombie() {
    let zombie1 = new Zombie(1400, Math.round(Math.random() * 5) * 100);
    zombies.push(zombie1);
}
;

function drawZombieMove(zombies) {
    for (let i = 0; i < zombies.length; i++) {
        zombies[i].move();
        zombies[i].drawZombie(context);
    }
}
function createShoot() {
    let bullet = new Shoot(plant);
    // bullet.dmg = 2;
    bullets.push(bullet);

}

function drawBulletsPlant(bullets) {
    bullets.forEach(function (bullet) {
        bullet.draw(context);
        bullet.move();
    })
}

function draw() {
    context.clearRect(0, 0, 1400, 1000);
    drawBulletsPlant(bullets);
    drawZombieMove(zombies);
    drawAllZombieDeath();
    plant.drawPlant();
    check();
    checkZombieOut()
    requestAnimationFrame(draw);

}

function drawAllZombieDeath() {
    for (let i = 0; i < zombieDeath.length; i++) {
        zombieDeath[i].drawZombie(context);
    }
};

function addZombieDeath(zombie) {
    zombieDeath.push(zombie);
    let index = zombieDeath.indexOf(zombie);
    setTimeout(function () {
        zombieDeath.splice(index, 1);
    }, 200);
};
