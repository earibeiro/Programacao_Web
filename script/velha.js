document.addEventListener('DOMContentLoaded', () => {
    init();
});

const buttons = document.querySelectorAll('.velha button');
const currentPlayerDisplay = document.querySelector('.currentPlayer');
let currentPlayer = 'X';
let selected = Array(9).fill(null);

const positions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function init() {
    selected = Array(9).fill(null);
    buttons.forEach(button => {
        button.textContent = '';
        button.addEventListener('click', handleClick);
    });
    currentPlayer = 'X';
    currentPlayerDisplay.textContent = `É A VEZ DO JOGADOR: ${currentPlayer}`;
}

function handleClick(event) {
    const button = event.target;
    const index = Array.from(buttons).indexOf(button);

    if (selected[index] === null) {
        selected[index] = currentPlayer;
        button.textContent = currentPlayer;

        // Atualiza a interface antes de verificar o vencedor
        setTimeout(() => {
            const winner = checkWinner();
            if (winner) {
                alert(`O JOGADOR ${winner} GANHOU!`);
                init();
                return;
            }

            if (checkDraw()) {
                alert("DEU VELHA!");
                init();
                return;
            }

            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            currentPlayerDisplay.textContent = `É A VEZ DO JOGADOR: ${currentPlayer}`;
        }, 100);
    }
}

function checkWinner() {
    for (let pos of positions) {
        const [a, b, c] = pos;
        if (selected[a] && selected[a] === selected[b] && selected[a] === selected[c]) {
            return selected[a];
        }
    }
    return null;
}

function checkDraw() {
    return selected.every(cell => cell !== null);
}



