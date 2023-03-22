const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const count = document.getElementById("count");
const lastGuesses = document.getElementById("lastGuesses");
const resetButton = document.getElementById("resetButton");

let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
let guesses = [];

guessButton.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "Wprowadź liczbę z zakresu od 1 do 100!";
    return;
  }

  guessCount++;
  guesses.push(guess);
  lastGuesses.textContent = guesses.join(", ");

  if (guess === randomNumber) {
    message.textContent = `Brawo, udało Ci się odgadnąć liczbę ${randomNumber} w ${guessCount} próbach!`;
    guessInput.disabled = true;
    guessButton.disabled = true;
    resetButton.style.display = "block";
  } else if (guessCount === 10) {
    message.textContent = `Niestety, przegrałeś! Szukana liczba to ${randomNumber}.`;
    guessInput.disabled = true;
    guessButton.disabled = true;
    resetButton.style.display = "block";
  } else if (guess < randomNumber) {
    message.textContent = "Szukana liczba jest większa!";
  } else if (guess > randomNumber) {
    message.textContent = "Szukana liczba jest mniejsza!";
  }

  count.textContent = guessCount;
  guessInput.value = "";
  guessInput.focus();
});

resetButton.addEventListener("click", function () {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guessCount = 0;
  guesses = [];
  message.textContent = "";
  count.textContent = guessCount;
  lastGuesses.textContent = "";
  guessInput.disabled = false;
  guessButton.disabled = false;
  resetButton.style.display = "none";
  guessInput.focus();
});
