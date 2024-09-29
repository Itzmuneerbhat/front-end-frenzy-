const cells = document.querySelectorAll('[data-cell]');
const statusMessage = document.getElementById('status-message');
const restartButton = document.getElementById('restart-button');

let isXTurn = true;
let board = ['', '', '', '', '', '', '', '', ''];
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

function handleClick(e) {
    const cell = e.target;
    const currentClass = isXTurn ? 'X' : 'O';
    const cellIndex = Array.from(cells).indexOf(cell);

    // Place the mark
    if (board[cellIndex] === '') {
        board[cellIndex] = currentClass;
        cell.textContent = currentClass;

        // Check if the player won
        if (checkWin(currentClass)) {
            statusMessage.textContent = `Player ${currentClass} Wins!`;
            endGame();
        } else if (isDraw()) {
            statusMessage.textContent = 'Draw!';
            endGame();
        } else {
            // Switch turns
            isXTurn = !isXTurn;
            statusMessage.textContent = `Player ${isXTurn ? 'X' : 'O'}'s Turn`;
        }
    }
}

function checkWin(currentClass) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return board[index] === currentClass;
        });
    });
}

function isDraw() {
    return board.every(cell => {
        return cell === 'X' || cell === 'O';
    });
}

function endGame() {
    cells.forEach(cell => cell.removeEventListener('click', handleClick));
}

function startGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => {
        cell.textContent = '';
        cell.addEventListener('click', handleClick, { once: true });
    });
    isXTurn = true;
    statusMessage.textContent = "Player X's Turn";
}

restartButton.addEventListener('click', startGame);

startGame();
