"use strict";

// ELEMENTS

const inputguess = document.querySelector(".guess");
const palert = document.querySelector(".palert");
const txtScore = document.querySelector(".txtscore");
const txtHighscore = document.querySelector(".txthighscore");
const txtMidField = document.querySelector(".txtmidfield");

// INITAL CONDITIONS
let number = Math.floor(Math.random() * 20) + 1;
console.log(number);
let score = 20;
let highscore = 0;
let playing = true;

// CLEAN INPUT FIELD FUNCTION
const cleanInput = () => {
  inputguess.value = "";
  inputguess.focus();
};

// NEW GAME
const newGame = () => {
  playing = true;
  number = Math.floor(Math.random() * 20) + 1;
  score = 20;
  txtScore.textContent = score;
  document.body.style.backgroundColor = "black";
  palert.style.color = "#aa3a3a";
  palert.textContent = "GUESS A NUMBER BETWEEN 1 AND 20";
  txtMidField.textContent = "?";
  cleanInput();
};
1;

// GUESSING
const startGuess = () => {
  if (playing) {
    let guess = Number(inputguess.value);
    console.log(guess);

    if (guess > 0 && guess <= 20) {
      console.log("good to go");
      score -= 1;
      txtScore.textContent = score;

      if (score <= 0) {
        palert.textContent = "YOU LOSE";
        txtScore.textContent = "0";
        playing = false;
        return;
      }
      if (guess < number) {
        palert.textContent = "TOO LOW...";
        cleanInput();
      } else if (guess > number) {
        palert.textContent = "TOO HIGH...";
        cleanInput();
      } else {
        if (score > highscore) {
          highscore = score;
          txtHighscore.textContent = `${highscore}`;
        }
        palert.style.color = "#59886b";
        document.body.style.backgroundColor = "#59886b";
        palert.textContent = "YOU GUESSED";
        txtMidField.textContent = `${number}`;
        playing = false;
      }
    } else {
      palert.textContent = "GUESS A NUMBER BETWEEN 1 AND 20";
      cleanInput();

      return;
    }
  }
};

document.querySelector(".guessbtn").addEventListener("click", startGuess);

document.querySelector(".newgamebtn").addEventListener("click", newGame);
