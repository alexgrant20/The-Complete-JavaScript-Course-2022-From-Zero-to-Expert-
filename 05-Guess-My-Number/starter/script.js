'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let initScore = 20;
let highScore = 0;

document.querySelector('.score').textContent = '20';

const number = document.querySelector('.number');
const body = document.querySelector('body');
const message = document.querySelector('.message');
const check = document.querySelector('.check');
const score = document.querySelector('.score');
const guess = document.querySelector('.guess');

check.addEventListener('click', function () {
    const guessedNumber = Number(document.querySelector('.guess').value);

    if (!guessedNumber) {
        message.textContent = '⛔ No Number';
    } else if (guessedNumber === secretNumber) {
        message.textContent = '🎉 Correct Number';
        body.style.backgroundColor = '#60b347';
        number.style.width = '30rem';
        number.textContent = secretNumber;

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else {
        message.textContent =
            guessedNumber > secretNumber ? '📈 Too High' : '📉 Too Low';
        initScore--;
        score.textContent = initScore;
    }

    if (score < 1) {
        message.textContent = '💥 You Lost The Game';
        check.disabled = true;
    }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    initScore = 20;
    number.textContent = '?';
    number.style.width = '15rem';
    score.textContent = initScore;
    guess.value = '';
    message.textContent = 'Start guessing...';
    body.style.backgroundColor = '#222';
    check.disabled = false;
});
