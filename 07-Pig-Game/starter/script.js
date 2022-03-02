'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const name0El = document.getElementById('name--0');
const name1El = document.getElementById('name--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore, activePlayer, scores, playing;

const startGame = () => {
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');

    currentScore = 0;
    activePlayer = 0;
    scores = [0, 0];
    score0El.textContent = scores[0];
    score1El.textContent = scores[1];
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');
    playing = true;
};

// Starting Condition
startGame();

const changePlayer = () => {
    const currentActiveEl = activePlayer === 0 ? current0El : current1El;
    currentScore = 0;
    currentActiveEl.textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
    if (!playing) {
        return;
    }

    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice === 1) {
        changePlayer();
        return;
    }
    const currentActiveEl = activePlayer === 0 ? current0El : current1El;
    currentScore += dice;
    currentActiveEl.textContent = currentScore;
});

btnHold.addEventListener('click', function () {
    if (!playing) {
        return;
    }

    scores[activePlayer] += currentScore;
    const scoreActiveEl = activePlayer === 0 ? score0El : score1El;
    scoreActiveEl.textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
        playing = false;

        const activePlayerEl = activePlayer === 0 ? player0El : player1El;
        const activeNameEl = activePlayer === 0 ? name0El : name1El;

        activePlayerEl.classList.remove('player--active');
        activePlayerEl.classList.add('player--winner');
        diceEl.classList.add('hidden');
        activeNameEl.textContent = 'WINNER!';
        return;
    }

    changePlayer();
});

btnNew.addEventListener('click', startGame);
