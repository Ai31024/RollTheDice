// Declaring variables to store dice roll results and the final result
let randomNumber1, randomNumber2, diceResult;

// Selecting the necessary DOM elements
let imageSource1 = document.querySelector("#dice-player-1"); // Image element for Player 1's dice
let imageSource2 = document.querySelector("#dice-player-2"); // Image element for Player 2's dice
let randomButtonClick = document.querySelector("#roll-dice-btn"); // Button to roll the dice
let score1 = document.querySelector("#score-1"); // Score element for Player 1
let score2 = document.querySelector("#score-2"); // Score element for Player 2
let diceResultOut = document.querySelector("#resultDice"); // Element to display the result (inside #resultBox)

// Adding a class for styling the result text
diceResultOut.classList.add("custom-color");

// Function to generate random numbers for the dice and determine the result
function getRandomNumber() {
  randomNumber1 = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6 for Player 1
  randomNumber2 = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6 for Player 2

  // Determine the result based on the dice numbers
  if (randomNumber1 > randomNumber2) {
    diceResult = "👑 Player 1 Wins!"; // Player 1 wins if their number is higher
  } else if (randomNumber1 < randomNumber2) {
    diceResult = "Player 2 Wins! 👑"; // Player 2 wins if their number is higher
  } else {
    diceResult = "🎲 It's a Draw! 🎲"; // It's a draw if both numbers are equal
  }
}

// Setting up the event listener for the "Roll Dice" button
randomButtonClick.addEventListener("click", function () {
  getRandomNumber(); // Generate random numbers for the dice

  // Log the random numbers to the console (optional for debugging)
  console.log(randomNumber1); // Log Player 1's dice number
  console.log(randomNumber2); // Log Player 2's dice number

  // Update the image sources for both dice based on the generated numbers
  imageSource1.setAttribute("src", "./media/dice" + randomNumber1 + ".png"); // Set the image source for Player 1's dice
  imageSource2.setAttribute("src", "./media/dice" + randomNumber2 + ".png"); // Set the image source for Player 2's dice

  // Update the score text for both players
  score1.innerText = randomNumber1; // Set Player 1's score text
  score2.innerText = randomNumber2; // Set Player 2's score text

  // Display the result in the result box
  diceResultOut.innerText = diceResult; // Show the result of the dice roll
});
