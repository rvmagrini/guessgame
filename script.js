"use strict";

// ELEMENTS

const inputguess = document.querySelector(".guess");
const palert = document.querySelector(".palert");

const number = Math.floor(Math.random() * 20) + 1;
console.log(number);
let score = 20;
let highscore = 0;

// CLEAN INPUT FIELD
const cleanInput = () => {
  inputguess.value = "";
  inputguess.focus();
};

// GUESSING
const startGuess = () => {
  let guess = Number(inputguess.value);
  console.log(guess);

  if (guess > 0 && guess <= 20) {
    console.log("good to go");
    if (guess < number) {
      palert.textContent = "TOO LOW...";
      cleanInput();
    } else if (guess > number) {
      palert.textContent = "TOO HIGH...";
      cleanInput();
    } else {
      palert.textContent = "YOU GUESSED";
    }
  } else {
    palert.textContent = "GUESS A NUMBER BETWEEN 1 AND 20";

    return;
  }
};

document.querySelector(".guessbtn").addEventListener("click", startGuess);
