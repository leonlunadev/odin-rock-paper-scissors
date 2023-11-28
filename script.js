let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[random()];
}

function random() {
  return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      computerScore++;
      return "Computer wins round!";
    } else {
      playerScore++;
      return "Player wins round!";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      computerScore++;
      return "Computer wins round!";
    } else {
      playerScore++;
      return "Player wins round!";
    }
  } else {
    // scissors
    if (computerSelection == "rock") {
      computerScore++;
      return "Computer wins round!";
    } else {
      playerScore++;
      return "Player wins round!";
    }
  }
}

function handlePlayerSelection(e) {
  let playerSelection = e.target.textContent.toLowerCase();
  let computerSelection = getComputerChoice();
  updateScore(playerSelection, computerSelection);
}

function updateScore(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    document.querySelector("#round").textContent = "Tie!";
  } else {
    let result = playRound(playerSelection, computerSelection);
    document.querySelector("#playerScore").textContent = playerScore;
    document.querySelector("#computerScore").textContent = computerScore;
    document.querySelector("#round").textContent = result;
  }
  if (computerScore == 5 || playerScore == 5) {
    endGameScreen();
  }
}

function endGameScreen() {
  location.reload();
}

const selections = document.querySelectorAll(".selection");

selections.forEach((selection) => {
  selection.addEventListener("click", handlePlayerSelection);
});

// clear.addEventListener("click", () => {
//   let allParagraphElements = document.getElementsByTagName("p");

//   for (let i = allParagraphElements.length - 1; i >= 0; i--) {
//     allParagraphElements[i].parentNode.removeChild(allParagraphElements[i]);
//   }

//   playerScore = 0;
//   computerScore = 0;
// });
