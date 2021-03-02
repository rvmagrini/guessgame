"use strict";

// ELEMENTS

const guess = document.querySelector(".guess");

let score, highscore, playing;

const startGuess = () => {
  const number = Math.floor(Math.random() * 20) + 1;
  console.log(number);
};

document.querySelector(".guessbtn").addEventListener("click", startGuess);
