function checkCrash(obj1, obj2) {
    let left1 = obj1.x;
    let right1 = obj1.x + obj1.width;
    let top1 = obj1.y;
    let bottom1 = obj1.y + obj1.height;

    let left2 = obj2.x;
    let right2 = obj2.x + obj2.width;
    let top2 = obj2.y;
    let bottom2 = obj2.y + obj2.height;
    if (right1 < left2 || top1 > bottom2 || left1 > right2 || bottom1 < top2) {
        return false;
    } else {
        return true;
    }

}
function check() {
    for (let i = 0; i < zombies.length; i++) {
        for (let j = 0; j < bullets.length; j++) {
            if (checkCrash(zombies[i], bullets[j])) {
                zombies[i].hp -= bullets[i].dmg;
                bullets.splice(j, 1);
                if (zombies[i].hp <= 0) {
                    let death = new Zombie(zombies[i].x, zombies[i].y);
                    death.image.src = 'Image/boom.png';
                    addZombieDeath(death);
                    zombies.splice(i, 1);
                    score++;
                    document.getElementById('score').innerHTML = 'Điểm của bạn là: ' + score
                }
                ;
                break;
            }
        }
    }

};
function checkZombieOut() {
    for (let i = 0; i < zombies.length; i++) {
        if (zombies[i].x == 0) {
            zombieOut++;
        };
    };
    if (zombieOut > 5) {
        alert('You lose!');
        window.location.reload();
    };
};
