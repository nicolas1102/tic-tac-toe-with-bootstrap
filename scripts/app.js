// VARIABLES
let editedPlayer = 0; 
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;
const players = [
    {
        name: 'Player 1',
        symbol: 'X',
    },
    {
        name: 'Player 2',
        symbol: 'O',
    },
    {
        name: 'Proof',
        symbol: '-',
    }
];
const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];


// ELEMENTS VARIABLES CREATION
// elements various
const configOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const configErrorsElement = document.getElementById('config-errors');
const divInputPlayerNameElement = document.getElementById('div-input-player-name');
const activeGameSectionElement = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');

// buttons
const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const starGameButtonElement = document.getElementById('start-new-game-btn');
// const gameFieldElements = document.querySelectorAll('#game-board li');
const gameBoardElement = document.getElementById('game-board');

// inputs
const playerNameInputElement = document.getElementById('player-name');

// forms
const formElement = document.querySelector('form');



// EVENTS LITENERS
// buttons
editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);
cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
// starGameButtonElement.addEventListener('click', starNewGame);
// for (const gameFieldElement of gameFieldElements){
//     gameFieldElement.addEventListener('click', selectGameField);
// }
gameBoardElement.addEventListener('click', selectGameField);

// elements various
backdropElement.addEventListener('click', closePlayerConfig);

// forms
formElement.addEventListener('submit', savePlayerConfig);

