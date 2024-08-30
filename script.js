// Declaring variables
let randomNumber1, randomNumber2, diceResult;

// Selecting the necessary DOM elements
let imageSource1 = document.querySelector("#dice-player-1");
let imageSource2 = document.querySelector("#dice-player-2");
let randomButtonClick = document.querySelector("#roll-dice-btn");
let score1 = document.querySelector("#score-1");
let score2 = document.querySelector("#score-2");
let diceResultOut = document.querySelector("#resultDice"); // This should target the result <p> inside #resultBox

// Adding a class for styling the result
diceResultOut.classList.add("custom-color");

// Function to generate random numbers and determine the result
function getRandomNumber() {
  randomNumber1 = Math.floor(Math.random() * 6) + 1;
  randomNumber2 = Math.floor(Math.random() * 6) + 1;

  if (randomNumber1 > randomNumber2) {
    diceResult = "👑 Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    diceResult = "Player 2 Wins! 👑";
  } else {
    diceResult = "🎲 It's a Draw! 🎲";
  }
}

// Setting up the event listener for the "Roll Dice" button
randomButtonClick.addEventListener("click", function () {
  getRandomNumber(); // Generate random numbers

  // Log the random numbers to the console (optional for debugging)
  console.log(randomNumber1);
  console.log(randomNumber2);

  // Update the image sources for both dice
  imageSource1.setAttribute("src", "./media/dice" + randomNumber1 + ".png");
  imageSource2.setAttribute("src", "./media/dice" + randomNumber2 + ".png");

  // Update the score text for both players
  score1.innerText = randomNumber1;
  score2.innerText = randomNumber2;

  // Display the result in the result box
  diceResultOut.innerText = diceResult;
});
