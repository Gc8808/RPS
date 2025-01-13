// Get user's name and display it
let userName = prompt('What is your Name?');
let responceImg = document.getElementById('response-img');
let responceText = document.getElementById('responce-Text');
let greeting = document.getElementById('greeting');

// Set the user name on the webpage
userName ? document.getElementById('userName').innerText = `${userName}:` : document.getElementById('userName').innerText = 'Imagine not typing your name';

// Function to capture the user's choice
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log("Error! Invalid input. Please choose 'rock', 'paper', or 'scissors'.");
    return null;
  }
};

// Function to get a random choice for the computer
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);  // Random number between 0 and 2
  return randomNumber === 0 ? 'rock' : randomNumber === 1 ? 'paper' : 'scissors';
};

// Function to determine the winner of the game
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }

  if (userChoice === 'rock') {
    return computerChoice === 'paper' ? "Computer wins!" : "You win!";
  }

  if (userChoice === 'paper') {
    return computerChoice === 'scissors' ? "Computer wins!" : "You win!";
  }

  if (userChoice === 'scissors') {
    return computerChoice === 'rock' ? "Computer wins!" : "You win!";
  }
};

// Function to update the page with the game result
function playGame(userChoice) {
  const userChoiceValid = getUserChoice(userChoice);
  if (!userChoiceValid) return;

  const computerChoice = getComputerChoice();
  console.log(`User chose: ${userChoiceValid}`);
  console.log(`Computer chose: ${computerChoice}`);

  const result = determineWinner(userChoiceValid, computerChoice);
  console.log(result);

  // Update the page with the result
  responceText.innerText = result;

  // Show the images (you can customize this as per your needs)
  if (result.includes("win")) {
    responceImg.src = 'path_to_win_image.png'; // replace with actual image path
  } else if (result === "It's a tie!") {
    responceImg.src = 'path_to_tie_image.png'; // replace with actual image path
  } else {
    responceImg.src = 'path_to_lose_image.png'; // replace with actual image path
  }
}

// Event listeners for buttons (assuming you have buttons for rock, paper, and scissors in the HTML)
document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));
