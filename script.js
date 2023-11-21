function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[random()];
}

function random() {
  return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) return 0;
  else if (playerSelection == "rock") {
    if (computerSelection == "paper") return -1;
    else return 1;
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") return -1;
    else return 1;
  } else {
    // scissors
    if (computerSelection == "rock") return -1;
    else return 1;
  }
}

function game() {
  const results = document.querySelector(".results");
  let playerScore = 0;
  let computerScore = 0;

  let playerChoice = "rock";

  while (playerScore < 3 && computerScore < 3) {
    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);
    if (result == 1) {
      playerScore += 1;
      let para = document.createElement("p");
      let node = document.createTextNode(
        `player: ${playerScore} computer: ${computerScore}`
      );
      para.appendChild(node);
      let element = document.querySelector(".results");
      element.appendChild(para);
    }
    if (result == -1) {
      computerScore += 1;
      let para = document.createElement("p");
      let node = document.createTextNode(
        `player: ${playerScore} computer: ${computerScore}`
      );
      para.appendChild(node);
      let element = document.querySelector(".results");
      element.appendChild(para);
    }
  }
}

function game() {
  console.log("start game");
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

let playerScore = 0;
let computerScore = 0;

rock.addEventListener("click", () => {
  let result = playRound("rock", getComputerChoice());
  if (result == 1) playerScore++;
  if (result == -1) computerScore++;
  if (playerScore > 2 || computerScore > 2) {
    console.log("end game");
  } else {
    console.log(`player: ${playerScore} computer: ${computerScore}`);
  }
});

paper.addEventListener("click", () => {
  let result = playRound("paper", getComputerChoice());
  if (result == 1) playerScore++;
  if (result == -1) computerScore++;
  if (playerScore > 2 || computerScore > 2) {
    console.log("end game");
  } else {
    console.log(`player: ${playerScore} computer: ${computerScore}`);
  }
});

scissors.addEventListener("click", () => {
  let result = playRound("scissors", getComputerChoice());
  if (result == 1) playerScore++;
  if (result == -1) computerScore++;
  if (playerScore > 2 || computerScore > 2) {
    console.log("end game");
  } else {
    console.log(`player: ${playerScore} computer: ${computerScore}`);
  }
});

// const playerInput = document.querySelector(".playerInput");

// let computerScore = 0;
// let playerScore = 0;

// playerInput.addEventListener("change", () => {
//   const playerChoice = String(playerInput.value).toLowerCase();
//   game(playerChoice, playerScore, computerScore);
// });
