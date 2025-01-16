// Get user's name and display it
let userName = prompt('What is your Name?');
let responceImg = document.getElementById('response-img');
let responceText = document.getElementById('responce-Text');
let greeting = document.getElementById('greeting');
let userScore = 0
let botScore = 0


userName ? document.getElementById('userName').innerText = `${userName}:` : document.getElementById('userName').innerText = 'Imagine not typing your name';


//  get a random choice for the computer
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);  // Random number between 0 and 2
  return randomNumber === 0 ? 'rock' : randomNumber === 1 ? 'paper' : 'scissors';
  
};

//  determine the winner of the game
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  }
  userScore++
  console.log(userScore)
  document.getElementById('userScore').innerText = userScore
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

// the game result
function playGame(userChoice) {


  const computerChoice = getComputerChoice();
  console.log(`User chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
  document.getElementById("choose").innerText = ` ${computerChoice}`;
  const result = determineWinner(userChoice, computerChoice);
  console.log(result);

  // Update the page with the result
  responceText.innerText = result;

  if (result === 'Computer wins!') {
    botScore++
    console.log(botScore)
    document.getElementById('botScore').innerText = botScore
  }
}
if (userScore === 3) {
  alert("You win!");
   userScore = 0 
   botScore = 0 
}

if (botScore === 3) {
  alert("Aditya wins!");
   userScore = 0 
   botScore = 0 
}

