"use strict";

// ELEMENTS

const inputguess = document.querySelector(".guess");
const palert = document.querySelector(".palert");

let score, highscore, playing;

// NEW GAME
const initial = () => {
  score = 0;
  highscore = 0;
  playing = true;
};
initial();

// GUESSING
const startGuess = () => {
  if (playing) {
    const number = Math.floor(Math.random() * 20) + 1;
    let guess = Number(inputguess.value);
    console.log(guess);

    if (guess > 0 && guess <= 20) {
      console.log("good to go");
    } else {
      inputguess.value = "";
      inputguess.focus();
      return;
    }
  }
};

document.querySelector(".guessbtn").addEventListener("click", startGuess);
