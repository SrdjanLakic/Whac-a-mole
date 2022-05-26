"use strict";

const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.getElementById("time-left");
const score = document.getElementById("score");
const setMole = document.querySelector(".random-mole");

let result = 0;
let hitPosition;

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
  let timerId = null;
  timerId = setInterval(randomSquare, 500);
};

moveMole();
