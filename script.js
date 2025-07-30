let humanScore = 0;
let computerScore = 0;

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log("Congratulations! You win the game!");
    console.log("Your final score: ", humanScore);
    console.log("Computer's final score: ", computerScore);
  } else if (computerScore > humanScore) {
    console.log("Sorry! The computer wins the game!");
    console.log("Your final score: ", humanScore);
    console.log("Computer's final score: ", computerScore);
  } else {
    console.log("It's a tie game!");
    console.log("Your final score: ", humanScore);
    console.log("Computer's final score: ", computerScore);
  }
}

playGame();

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    humanScore++;
    console.log("You win!");
    console.log("Your choice: ", humanChoice);
    console.log("Computer's choice: ", computerChoice);
    console.log("Your score: ", humanScore);
    console.log("Computer's score: ", computerScore);
  } else if (
    (humanChoice === "Rock" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Rock")
  ) {
    computerScore++;
    console.log("Computer wins!");
    console.log("Your choice: ", humanChoice);
    console.log("Computer's choice: ", computerChoice);
    console.log("Your score: ", humanScore);
    console.log("Computer's score: ", computerScore);
  } else {
    console.log("It's a tie!");
    console.log("Your choice: ", humanChoice);
    console.log("Computer's choice: ", computerChoice);
    console.log("Your score: ", humanScore);
    console.log("Computer's score: ", computerScore);
  }
}

function getHumanChoice() {
  // Prompt the user for their choice.

  const input = prompt("Enter Rock, Paper, or Scissors: ").toLowerCase();
  return (humanChoice = input.charAt(0).toUpperCase() + input.slice(1));
}

function getComputerChoice() {
  let computerChoice = "";

  const randomChoice = Math.floor(Math.random() * 3);

  if (randomChoice === 0) {
    return (computerChoice = "Rock");
  } else if (randomChoice === 1) {
    return (computerChoice = "Paper");
  } else {
    return (computerChoice = "Scissors");
  }
}
