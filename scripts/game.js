function resetGameStatus() {
    gameIsOver = false;
    activePlayer = 0;
    currentRound = 1;
    gameOverElement.firstElementChild.innerHTML = 'You won, <span id="winner-name">PLAYER NAME</span>!';
    gameOverElement.style.display = 'none';

    let gameBoardIndex = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++){
            gameData[i][j] = 0;
            const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
            console.dir(gameBoardElement.children);
            gameBoardItemElement.classList.remove('disabled');
            gameBoardIndex++;
        }
    }

}

function starNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Please set custom player name for both players!');
        return;
    }

    resetGameStatus();

    activePlayerNameElement.textContent = players[activePlayer].name.toUpperCase();
    activeGameSectionElement.style.display = 'block';
}

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name.toUpperCase();
}

function chechForGameOver() {
    // Rows
    for (let i = 0; i < 3; i++) {
        if (
            gameData[i][0] > 0 && gameData[i][0] === gameData[i][1] && gameData[i][1] === gameData[i][2]
        ) {
            return gameData[i][0];
        }
    }

    // Columns
    for (let i = 0; i <= 2; i++) {
        if (
            gameData[0][i] > 0 && gameData[0][i] === gameData[1][i] && gameData[1][i] === gameData[2][i]
        ) {
            return gameData[0][i];
        }
    }

    // Diagonal top left to bottom right
    if (gameData[0][0] > 0 && gameData[0][0] === gameData[1][1] && gameData[1][1] === gameData[2][2]) {
        return gameData[0][0];
    }

    // Diagonal top right to bottom left
    if (gameData[0][2] > 0 && gameData[0][2] === gameData[1][1] && gameData[1][1] === gameData[2][0]) {
        return gameData[0][2];
    }

    if (currentRound === 9) {
        return -1;
    }

    return 0;
}

function selectGameField(event) {
    // verify that the click is not out of any button (and if el juego esta terminado no permitir seleccionar otro boton)
    if (event.target.tagName != 'LI' || gameIsOver) {
        return;
    }

    const selectedField = event.target;
    const selectedRow = +selectedField.dataset.row;
    const selectedColumn = +selectedField.dataset.col;

    // block buttons
    if (gameData[selectedRow][selectedColumn] > 0) {
        alert('Please select an empty field!')
        return;
    }

    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');

    gameData[selectedRow][selectedColumn] = activePlayer + 1;

    const winnerId = chechForGameOver();

    // Verify if the game is not over
    if (winnerId !== 0) {
        endGame(winnerId);
    }

    currentRound++;

    switchPlayer();

}

function endGame(winnerId) {
    gameIsOver = true;
    gameOverElement.style.display = 'block';

    if (winnerId > 0) {
        // gameOverElement.children[0].children[0].textContent = players[winnerId - 1].name;
        gameOverElement.firstElementChild.firstElementChild.textContent = players[winnerId - 1].name;
    } else {
        gameOverElement.firstElementChild.textContent = 'It\'s a draw';
    }
}