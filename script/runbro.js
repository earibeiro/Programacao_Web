
const pipe = document.querySelector('.pipe');
const italian = document.querySelector('.italian');

const jump = () => {
    italian.classList.add('jump');

    setTimeout(() => {
        italian.classList.remove('jump');
    }, 500);//Tempo de duração do pulo
}

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const italianPosition = +window.getComputedStyle(italian).bottom.replace('px', ''); 

    if(pipePosition <= 120 && pipePosition > 0 && italianPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        italian.style.animation = 'none';
        italian.style.bottom = `${italianPosition}px`;

        italian.src = 'img/imggame/game-over.png';
        italian.style.width = '70px';
        italian.style.marginLeft = '50px';

        clearInterval(loop);
    }
},10); //A cada 10ms ele verifica se o personagem morreu.

document.addEventListener('keydown', jump);
document.addEventListener('click', jump);
document.addEventListener('touchstart', (event) => {
    event.preventDefault(); //Previne o comportamento padrão
    jump();
});


