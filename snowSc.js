function createSnow(){
    const el = document.createElement("div");
    el.classList.add('snow');
    el.style.marginLeft = randomPosition() + 'px';
    document.body.appendChild(el);
}

function randomPosition(){
    return Math.floor(Math.random() * window.innerWidth);
}

for(let i =0; i<300; i++){
    createSnow();
}

document.body.addEventListener('mousemove', function(e){
    document.querySelector('.snowman').style.left = e.pageX + 'px';
    document.querySelector('.snowman').style.top = e.pageY + 'px';
});