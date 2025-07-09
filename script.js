// Step 1: Get a random choice for the computer
function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) return "rock";
  if (randomNum === 1) return "paper";
  return "scissors";
}

// Step 2: Get the human player's choice via prompt
function getHumanChoice() {
  let choice = prompt("Choose rock, paper, or scissors:");
  return choice.toLowerCase(); // Make it case-insensitive
}

// Step 3: Keep track of scores
let humanScore = 0;
let computerScore = 0;

// Step 4: Play a single round
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }

  console.log(`Score: You - ${humanScore}, Computer - ${computerScore}`);
}

// Step 5: Play 5 rounds
function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  // Final result
  if (humanScore > computerScore) {
    console.log("🎉 You win the game!");
  } else if (computerScore > humanScore) {
    console.log("😢 You lose the game!");
  } else {
    console.log("🤝 It's a tie game!");
  }
}

// Start the game
playGame();
