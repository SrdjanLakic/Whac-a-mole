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

const randomSquare = function () {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");

  hitPosition = randomSquare.id;
};

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id === hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

const moveMole = function () {
  timerId = setInterval(randomSquare, 800);
};

const countDownTimer = function () {
  const tick = function () {
    timeLeft.textContent = currentTime;
    if (currentTime === 0) {
      clearInterval(timer);
      alert(`Time is up, your score is ${result}`);
    }
    currentTime--;
  };
  tick();
  const timer = setInterval(tick, 1000);
  currentTime = 10;
};

startMole.addEventListener("click", function () {
  moveMole();
  countDownTimer();
});
