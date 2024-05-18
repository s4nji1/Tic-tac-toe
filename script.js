let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');

function checkWinner() {
    for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return combo; 
        }
    }
    return null; 
}


function checkDraw() {
    return board.every(cell => cell !== '');
}

function makeMove(index) {
    if (!gameOver && board[index] === '') {
        board[index] = currentPlayer;
        cells[index].innerText = currentPlayer;
        const winnerCombo = checkWinner();
        if (winnerCombo) {
            message.innerText = `${currentPlayer} wins!`;
            winnerCombo.forEach(cellIndex => cells[cellIndex].classList.add('winner'));
            gameOver = true;
        } else if (checkDraw()) {
            message.innerText = "It's a draw!";
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}


function reset() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;
    message.innerText = '';
    cells.forEach(cell => {
        cell.innerText = '';
        cell.classList.remove('winner');
    });
}
