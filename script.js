// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current1El = document.getElementById('current--1');
const current0El = document.getElementById('current--0');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores =[0, 0];
let currentScore = 0;
let activePlater = 0;

// rolling dice functionality
btnRoll.addEventListener('click', function () {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if(dice !== 1) {
        // Add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlater}`).textContent = currentScore;
    } else {
        // Switch to next player
        document.getElementById(`current--${activePlater}`).textContent = 0;
        currentScore = 0;
        activePlater = activePlater === 0 ? 1 : 0;
    }
});