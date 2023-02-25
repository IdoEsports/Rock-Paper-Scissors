// Define global variables to keep track of the scores and winner
let playerScore = 0;
let computerScore = 0;
let gameWinner = '';

// Get the buttons and add event listeners to call playRound with the correct selection
const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
  console.log('rock');
  playRound('rock');
});

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => {
  console.log('paper');
  playRound('paper');
});

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => {
  console.log('scissors');
  playRound('scissors');
});

// Function to randomly select a choice for the computer
function computerSelection() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

const scoreDisplay = document.querySelector('#score');
scoreDisplay.textContent = `Score: Player ${playerScore} - ${computerScore} Computer`;

const winnerDisplay = document.querySelector('#winner');
winnerDisplay.textContent = `The Game Winner: ${gameWinner}`;

const outcomeDisplay = document.querySelector('#outcome');

// Function to play a single round of the game
function playRound(playerChoice) {
  let outcome = '';
  let computerChoice = computerSelection();

  if (playerScore < 5 && computerScore < 5) {
    if (playerChoice === computerChoice) {
      outcome = "It's a tie";
      outcomeDisplay.textContent = `${outcome}`;
    } else if (playerChoice === 'rock') {
      if (computerChoice === 'paper') {
        outcome = 'Computer Wins';
        outcomeDisplay.textContent = `${outcome}`;
        computerScore++;
        scoreDisplay.textContent = `Score: Player ${playerScore} - ${computerScore} Computer`;
      } else if (computerChoice === 'scissors') {
        outcome = 'Player Wins';
        outcomeDisplay.textContent = `${outcome}`;
        playerScore++;
        scoreDisplay.textContent = `Score: Player ${playerScore} - ${computerScore} Computer`;
      }
    } else if (playerChoice === 'paper') {
      if (computerChoice === 'rock') {
        outcome = 'Player Wins';
        outcomeDisplay.textContent = `${outcome}`;
        playerScore++;
        scoreDisplay.textContent = `Score: Player ${playerScore} - ${computerScore} Computer`;
      } else if (computerChoice === 'scissors') {
        outcome = 'Computer Wins';
        outcomeDisplay.textContent = `${outcome}`;
        computerScore++;
        scoreDisplay.textContent = `Score: Player ${playerScore} - ${computerScore} Computer`;
      }
    } else {
      if (computerChoice === 'paper') {
        outcome = 'Player Wins';
        outcomeDisplay.textContent = `${outcome}`;
        playerScore++;
        scoreDisplay.textContent = `Score: Player ${playerScore} - ${computerScore} Computer`;
      } else if (computerChoice === 'rock') {
        outcome = 'Computer Wins';
        outcomeDisplay.textContent = `${outcome}`;
        computerScore++;
        scoreDisplay.textContent = `Score: Player ${playerScore} - ${computerScore} Computer`;
      }
    }
  }
  if (playerScore >= 5 || computerScore >= 5) {
    if (playerScore > computerScore) {
      gameWinner = 'Player';
      winnerDisplay.textContent = `The Game Winner: ${gameWinner}`;
    } else {
      gameWinner = 'Computer';
      winnerDisplay.textContent = `The Game Winner: ${gameWinner}`;
    }
  }
}

// // Update the UI with the outcome and current score
// const outcomeDisplay.textContent = document.querySelector('#outcome');
// outcomeDisplay.textContent.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${outcome}`;
// Update the UI with the game winner



// Check if there is a game winner



