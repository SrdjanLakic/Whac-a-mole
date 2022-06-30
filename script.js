'use strict';

const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.getElementById('time-left');
const score = document.getElementById('score');
const restartMole = document.querySelector('.restart-mole');
const resultDisplay = document.querySelector('.result');

let result = 0;
let hitPosition;
let currentTime = 15;
let isLocked = false;
let moleTimer;
let timer;

const randomSquare = function () {
  squares.forEach((square) => {
    square.classList.remove('mole');
  });
  isLocked = false;
  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add('mole');
  hitPosition = randomSquare.id;
};

const moveMole = function () {
  moleTimer = setInterval(randomSquare, 500);
  timer = setInterval(countDownTimer, 1000);
};

moveMole();

squares.forEach((square) => {
  square.addEventListener('mousedown', () => {
    if (square.id === hitPosition) {
      if (isLocked) return;
      result++;
      score.textContent = result;
      square.classList.remove('mole');
      isLocked = true;
    }
  });
});

function countDownTimer() {
  currentTime--;
  timeLeft.textContent = currentTime;
  if (currentTime <= 5) {
    timeLeft.style.color = 'red';
  }
  if (currentTime === 0) {
    resultDisplay.style.visibility = 'visible';
    resultDisplay.textContent = `Your score is ${result} 🏆`;
    clearInterval(moleTimer);
    clearInterval(timer);
  }
}

function restartGame() {
  resultDisplay.style.visibility = 'hidden';
  result = 0;
  currentTime = 15;
  clearInterval(moleTimer);
  clearInterval(timer);
  score.textContent = result;
  timeLeft.textContent = currentTime;

  moveMole();
}

restartMole.addEventListener('click', restartGame);
