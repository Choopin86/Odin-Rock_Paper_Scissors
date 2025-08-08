let humanScore = 0;
let computerScore = 0;
let result = "";
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const buttons = document.querySelector(".button-container");
let humanScoreDisplay = document.querySelector("#humanScore");
let computerScoreDisplay = document.querySelector("#computerScore");
let humanChoiceDisplay = document.querySelector("#humanChoice");
let computerChoiceDisplay = document.querySelector("#computerChoice");
let resultDisplay = document.querySelector("#result");
let winner = document.querySelector("#winner");
const finalResult = document.querySelector(".final-result");
const resetButton = document.createElement("button");
resetButton.setAttribute("id", "reset-game");
resetButton.textContent = "Reset";

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    humanScore++;
    console.log("You win!");
    result = "You win!";
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
    result = "Computer wins!";
    console.log("Your choice: ", humanChoice);
    console.log("Computer's choice: ", computerChoice);
    console.log("Your score: ", humanScore);
    console.log("Computer's score: ", computerScore);
  } else {
    console.log("It's a tie!");
    result = "It's a tie!";
    console.log("Your choice: ", humanChoice);
    console.log("Computer's choice: ", computerChoice);
    console.log("Your score: ", humanScore);
    console.log("Computer's score: ", computerScore);
  }
  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;
  humanChoiceDisplay.textContent = humanChoice;
  computerChoiceDisplay.textContent = computerChoice;
  resultDisplay.textContent = result;
}

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);

  if (randomChoice === 0) {
    return "Rock";
  } else if (randomChoice === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

buttons.addEventListener("click", (e) => {
  let humanChoice = "";
  switch (e.target.id) {
    case "rock":
      humanChoice = "Rock";
      break;
    case "paper":
      humanChoice = "Paper";
      break;
    case "scissors":
      humanChoice = "Scissors";
      break;
  }
  playGame(humanChoice);
});

resetButton.addEventListener("click", (e) => {
  humanScore = 0;
  computerScore = 0;
  result = "";
  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;
  resultDisplay.textContent = result;
  resetButton.remove();
  winner.textContent = "";
  buttons.replaceChildren(rockBtn, paperBtn, scissorsBtn);
});

function playGame(humanChoice) {
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);

  if (humanScore === 5) {
    winner.textContent = "Congratulations! You win";
    finalResult.appendChild(resetButton);
    buttons.remove();
  } else if (computerScore === 5) {
    winner.textContent = "Sorry! Computer wins";
    finalResult.appendChild(resetButton);
    buttons.remove();
  }
}

// function getHumanChoice() {
//   // Prompt the user for their choice.

// //   const input = prompt("Enter Rock, Paper, or Scissors: ").toLowerCase();
// //   return (humanChoice = input.charAt(0).toUpperCase() + input.slice(1));
// // }

// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     playRound(humanChoice, computerChoice);
//   }

//   if (humanScore > computerScore) {
//     console.log("Congratulations! You win the game!");
//     console.log("Your final score: ", humanScore);
//     console.log("Computer's final score: ", computerScore);
//   } else if (computerScore > humanScore) {
//     console.log("Sorry! The computer wins the game!");
//     console.log("Your final score: ", humanScore);
//     console.log("Computer's final score: ", computerScore);
//   } else {
//     console.log("It's a tie game!");
//     console.log("Your final score: ", humanScore);
//     console.log("Computer's final score: ", computerScore);
//   }
// }

// rockBtn.addEventListener("click", (e) => {
//   let humanChoice = e.target.textContent;
//   playRound(humanChoice, computerChoice);
// });

// paperBtn.addEventListener("click", (e) => {
//   let humanChoice = e.target.textContent;
//   playRound(humanChoice, computerChoice);
// });

// scissorsBtn.addEventListener("click", (e) => {
//   let humanChoice = e.target.textContent;
//   playRound(humanChoice, computerChoice);
// });
