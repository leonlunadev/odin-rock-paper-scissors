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

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const clear = document.querySelector(".clear");

let playerScore = 0;
let computerScore = 0;

rock.addEventListener("click", () => {
  const results = document.querySelector(".results");
  let para = document.createElement("p");
  let computerChoice = getComputerChoice();
  let result = playRound("rock", computerChoice);
  if (result == 1) playerScore++;
  if (result == -1) computerScore++;
  if (playerScore > 2 || computerScore > 2) {
    let para = document.createElement("p");
    if (playerScore > computerScore) {
      let node = document.createTextNode(
        `Player wins ${playerScore} - ${computerScore}`
      );
      para.appendChild(node);
      results.appendChild(para);
    } else {
      let node = document.createTextNode(
        `Computer wins ${computerScore} - ${playerScore}`
      );
      para.appendChild(node);
      results.appendChild(para);
    }
  } else {
    let node = document.createTextNode(
      `Player chose ${"rock"} and computer chose ${computerChoice}
        Player: ${playerScore} Computer: ${computerScore}`
    );
    para.appendChild(node);
    results.appendChild(para);
  }
});

paper.addEventListener("click", () => {
  const results = document.querySelector(".results");
  let computerChoice = getComputerChoice();
  let para = document.createElement("p");
  let result = playRound("paper", computerChoice);
  if (result == 1) playerScore++;
  if (result == -1) computerScore++;
  if (playerScore > 2 || computerScore > 2) {
    let para = document.createElement("p");
    if (playerScore > computerScore) {
      let node = document.createTextNode(
        `Player wins ${playerScore} - ${computerScore}`
      );
      para.appendChild(node);
      results.appendChild(para);
    } else {
      let node = document.createTextNode(
        `Computer wins ${computerScore} - ${playerScore}`
      );
      para.appendChild(node);
      results.appendChild(para);
    }
  } else {
    let node = document.createTextNode(
      `Player chose ${"paper"} and computer chose ${computerChoice} \n
        Player: ${playerScore} Computer: ${computerScore}`
    );
    para.appendChild(node);
    results.appendChild(para);
  }
});

scissors.addEventListener("click", () => {
  let computerChoice = getComputerChoice();
  const results = document.querySelector(".results");
  let para = document.createElement("p");
  let result = playRound("scissors", computerChoice);
  if (result == 1) playerScore++;
  if (result == -1) computerScore++;
  if (playerScore > 2 || computerScore > 2) {
    let para = document.createElement("p");
    if (playerScore > computerScore) {
      let node = document.createTextNode(
        `Player wins ${playerScore} - ${computerScore}`
      );
      para.appendChild(node);
      results.appendChild(para);
    } else {
      let node = document.createTextNode(
        `Computer wins ${computerScore} - ${playerScore}`
      );
      para.appendChild(node);
      results.appendChild(para);
    }
  } else {
    let node = document.createTextNode(
      `Player chose ${"scissor"} and computer chose ${computerChoice}\n
      Player: ${playerScore} Computer: ${computerScore}`
    );
    para.appendChild(node);
    results.appendChild(para);
  }
});

clear.addEventListener("click", () => {
  let allParagraphElements = document.getElementsByTagName("p");

  for (let i = allParagraphElements.length - 1; i >= 0; i--) {
    allParagraphElements[i].parentNode.removeChild(allParagraphElements[i]);
  }

  playerScore = 0;
  computerScore = 0;
});
