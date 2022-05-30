"use strict";

const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.getElementById("time-left");
const score = document.getElementById("score");
const startMole = document.querySelector(".random-mole");

let result = 0;
let hitPosition;
let currentTime = 10;
let isLocked = false;
let moleTimer;
let timer;

const randomSquare = function () {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  isLocked = false;
  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");
  hitPosition = randomSquare.id;
};

const moveMole = function () {
  moleTimer = setInterval(randomSquare, 1000);
  timer = setInterval(countDownTimer, 1000);
};

moveMole();

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id === hitPosition) {
      if (isLocked) return;
      result++;
      score.textContent = result;
      square.classList.remove("mole");
      isLocked = true;
    }
  });
});

function countDownTimer() {
  currentTime--;
  timeLeft.textContent = currentTime;
  if (currentTime === 0) {
    clearInterval(moleTimer);
    clearInterval(timer);
    alert(`Time is up, your final score is ${result}`);
  }
}

function restartGame() {
  result = 0;
  currentTime = 10;
  clearInterval(moleTimer);
  clearInterval(timer);
  score.textContent = result;
  timeLeft.textContent = currentTime;

  moveMole();
}

startMole.addEventListener("click", restartGame);
