function computerSelection() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}
function playerSelection() {
  // Prompt the user for their selection and convert to lowercase
  let selection = prompt("Choose rock, paper, or scissors:").toLowerCase();

  // Keep prompting until the user enters a valid selection
  while (selection !== 'rock' && selection !== 'paper' && selection !== 'scissors') {
    selection = prompt("Invalid selection. Choose rock, paper, or scissors:").toLowerCase();
  }

  // Return the valid selection
  return selection;
}
function playRound() {
  let outcome = '';
  let playerChoice = playerSelection();
  let computerChoice = computerSelection();
  if (playerChoice === computerChoice) {
    outcome = "It's a tie";
  } else if (playerChoice === 'rock') {
    if (computerChoice === 'paper') {
      outcome = 'Computer Wins';
    } else if (computerChoice === 'scissors') {
      outcome = 'Player Wins';
    }
  } else if (playerChoice === 'paper') {
    if (computerChoice === 'rock') {
      outcome = 'Player Wins';
    } else if (computerChoice === 'scissors') {
      outcome = 'Computer Wins';
    }
  } else {
    if (computerChoice === 'paper') {
      outcome = 'Player Wins';
    } else if (computerChoice === 'rock') {
      outcome = 'Computer Wins';
    }
  }
  console.log('Player Choice: ' + playerChoice);
  console.log('Computer Choice: ' + computerChoice);
  console.log('Outcome: ' + outcome);
  return outcome;
}
function game() {
  let tied = 0;
  let computer_score = 0;
  let player_score = 0;
  for (let i = 0; i < 5; i++) {
    let round_outcome = playRound();
    if (round_outcome == 'Player Wins') {
      player_score += 1;
    } else if (round_outcome == 'Computer Wins') {
      computer_score += 1;
    } else {
      tied += 1;
    }
  }
  console.log('Player Score: ' + player_score);
  console.log('Computer Score: ' + computer_score);
  console.log('Games tied: ' + tied);
  if (player_score > computer_score) {
    console.log('Player wins game');
  } else if (player_score < computer_score) {
    console.log('Computer wins game');
  } else {
    console.log('Game tied');
  }
}
game();
