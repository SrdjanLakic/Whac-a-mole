"use strict";

const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.getElementById("time-left");
const score = document.getElementById("score");
const startMole = document.querySelector(".random-mole");

let result = 0;
let hitPosition;
let currentTime = 10;
let timerId = null;
let isLocked = false;

const randomSquare = function () {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  isLocked = false;
  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");

  hitPosition = randomSquare.id;
};

squares.forEach((square) => {
  square.addEventListener("click", () => {
    if (square.id === hitPosition) {
      if (isLocked) return;
      result++;
      score.textContent = result;
      square.classList.remove("mole");
      isLocked = true;
      hitPosition = null;
    }
  });
});

const moveMole = function (e) {
  timerId = setInterval(randomSquare, 800);
};

const countDownTimer = function () {
  timeLeft.textContent = currentTime;
  if (currentTime === 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert(`Time is up, your final score is ${result}`);
  }
  currentTime--;
};
let countDownTimerId = setInterval(countDownTimer, 1000);

startMole.addEventListener("click", function () {
  moveMole();
  countDownTimer();
});
