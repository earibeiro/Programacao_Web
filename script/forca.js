import getWord from "./words.js";

const contentBtns = document.querySelector(".btns");
const contentGuessWord = document.querySelector(".guess-word");
const img = document.querySelector("#gameImage"); //acho que o meu é /img, mas fica esperto aí!
const contentClue = document.querySelector(".clue");
const btnNew = document.querySelector(".new");
btnNew.onclick = () => init();
let indexImg; // Aqui ele vai controlar qual imagem aparecerá na tela.

init();

function init() {
    indexImg = 1;
    img.src = `img/imgforca/img${1}.png`;

    generateGuessSection();
    generateButtons();
}

function generateGuessSection() {
    contentGuessWord.textContent = "";

    const{ word, clue } = getWord();
    const wordWithoutAccent = word
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    
    Array.from(wordWithoutAccent).forEach((letter) => {
        const span = document.createElement("span");

        span.textContent = "_";
        span.setAttribute("word", letter.toUpperCase());
        contentGuessWord.appendChild(span);
    });

    contentClue.textContent = `Dica: ${clue}`;
}

function wrongAnswer() {
    indexImg++;
    img.src = `img/imgforca/img${indexImg}.png`;
    //console.log(imagePath);
    //img.src = imagePath;

    if(indexImg === 7) {
        setTimeout(() => {
            alert("Derrota! :/");
            init();
        }, 100);
    }
}

function verifyLetter(letter) {
    const arr = document.querySelectorAll(`[word="${letter}"]`);

    if (!arr.length) wrongAnswer();

    arr.forEach((e) => {
        e.textContent = letter;
    });

    const spans = document.querySelectorAll(`.guess-word span`);
    const won = !Array.from(spans).find((span) => span.textContent === "_");

    if(won) {
        setTimeout(() => {
            alert("VITÓRIA!");
            init();
        }, 100);
    }
}

function generateButtons() {
    contentBtns.textContent = "";

    for(let i = 97; i < 123; i++) {
        const btn = document.createElement("button");
        const letter = String.fromCharCode(i).toUpperCase();
        btn.textContent = letter;

        btn.onclick = () => {
            btn.disabled = true;
            btn.style.backgroundColor = "gray";
            verifyLetter(letter);
        };

        contentBtns.appendChild(btn);
    }
}