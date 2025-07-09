let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
  const computerSelection = computerPlay();
  const resultDiv = document.getElementById("result");
  const scoreDiv = document.getElementById("score");

  let result = "";

  if (playerSelection === computerSelection) {
    result = `It's a tie! You both chose ${playerSelection}`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    playerScore++;
    result = `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    result = `You lose! ${computerSelection} beats ${playerSelection}`;
  }

  resultDiv.textContent = result;
  scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    resultDiv.textContent += `\nGame Over: ${playerScore === 5 ? "You Win 🎉" : "Computer Wins 💻"}`;
    disableButtons();
  }
}

function disableButtons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

document.getElementById("rock").addEventListener("click", () => playRound("Rock"));
document.getElementById("paper").addEventListener("click", () => playRound("Paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("Scissors"));
