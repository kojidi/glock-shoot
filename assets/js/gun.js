const gun = document.querySelector('.gun-box');
const gunSound = document.querySelector('.gun-sound');
// const bullet = document.querySelector('.bullet');

const centerX = window.innerWidth / 2;
const centerY = (window.innerHeight) / 2;

let bullet = document.querySelector('.bullet');

document.addEventListener('mousemove', e => {
    let x = e.pageX;
    let y = e.pageY;
    angle = Math.atan2(y - centerY, x - centerX) * 180 / Math.PI;
    gun.style.transform = `rotate(${angle}deg)`; 
})

document.addEventListener('click', () => {
    console.log(gunSound);
    gunSound.play();
    bullet.style.right = "-10000px";
    
    const newbullet = document.createElement('img');
    newbullet.classList.add('bullet');
    newbullet.src = "./assets/imgs/bullet.png";
    newbullet.alt = "The Bullet";
    gun.prepend(newbullet);
    
    bullet = document.querySelector('.bullet');
});

