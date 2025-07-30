//Score tracking variables
let humanScore = 0;
let computerScore = 0;

// This function starts the game
function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
  // After 5 rounds, check the scores and log the result
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

// Start the game by calling playGame function
playGame();

//This function plays a single round of Rock Paper Scissors
function playRound(humanChoice, computerChoice) {
  //IF humanChoise is Rock and computerChoise is Scissors
  //OR-IF humanChoice is Paper and computerChoise is Rock
  //OF-IF humanChoise is Scissors and computerChoise is Paper
  //Console.log("You win!") and increment humanScore by 1
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
  }
  //IF humanChoice is Rock and computerChoice is Paper
  //OR-IF humanChoice is Paper and computerChoice is Scissor
  //OR-IF humanChoice Scissor and computerChoice is Rock
  //console.log("Computer wins!") and increment computerScore by 1
  else if (
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
  }
  //IF humanChoice is the same as computerChoice log ("It's a tie!")
  else {
    console.log("It's a tie!");
    console.log("Your choice: ", humanChoice);
    console.log("Computer's choice: ", computerChoice);
    console.log("Your score: ", humanScore);
    console.log("Computer's score: ", computerScore);
  }
}

// This function prompts the user for their choice and logs it to the console.
function getHumanChoice() {
  // Prompt the user for their choice.
  // Return the user's choice.
  const input = prompt("Enter Rock, Paper, or Scissors: ").toLowerCase();
  return (humanChoice = input.charAt(0).toUpperCase() + input.slice(1));
}

//This function creates a random choice for the computer
function getComputerChoice() {
  let computerChoice = "";
  // Generate a random number between 0 and 2.
  // Assign the random number to a variable called ComputerChoice.
  const randomChoice = Math.floor(Math.random() * 3);
  // IF ComputerChoice is 0, return "Rock".
  // IF ComputerChoice is 1, return "Paper".
  // IF ComputerChoice is 2, return "Scissors".
  if (randomChoice === 0) {
    return (computerChoice = "Rock");
  } else if (randomChoice === 1) {
    return (computerChoice = "Paper");
  } else {
    return (computerChoice = "Scissors");
  }
}
