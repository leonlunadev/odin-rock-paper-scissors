let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choices = ["basketball", "window", "needle"];
  return choices[random()];
}

function random() {
  return Math.floor(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "basketball") {
    if (computerSelection == "needle") {
      computerScore++;
      return "Computer wins round!";
    } else {
      playerScore++;
      return "Player wins round!";
    }
  } else if (playerSelection == "needle") {
    if (computerSelection == "window") {
      computerScore++;
      return "Computer wins round!";
    } else {
      playerScore++;
      return "Player wins round!";
    }
  } else {
    // scissors
    if (computerSelection == "basketball") {
      computerScore++;
      return "Computer wins round!";
    } else {
      playerScore++;
      return "Player wins round!";
    }
  }
}

function handlePlayerSelection(e) {
  const playerSelection = e.target.className.toLowerCase();
  const computerSelection = getComputerChoice();
  const computerChoice = document.querySelector(".computer .choice");
  const playerChoice = document.querySelector(".player .choice");
  const playerSrc = "images/" + playerSelection + ".png";
  const computerSrc = "images/" + computerSelection + ".png";
  computerChoice.innerHTML = `<img src=${computerSrc}>`;
  playerChoice.innerHTML = `<img src=${playerSrc}>`;
  updateScore(playerSelection, computerSelection);
}

function updateScore(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    document.querySelector(".roundResult h2").textContent = "Tie!";
  } else {
    let result = playRound(playerSelection, computerSelection);
    document.querySelector("#playerScore").textContent = playerScore;
    document.querySelector("#computerScore").textContent = computerScore;
    document.querySelector(".roundResult h2").textContent = result;
  }
  if (computerScore == 5 || playerScore == 5) {
    endGameScreen();
  }
}

function endGameScreen() {
  const gameResult = document.querySelector(".roundResult h2");
  if (computerScore > playerScore) {
    gameResult.textContent = "Computer wins the game!";
  } else {
    gameResult.textContent = "Player wins the game!";
  }
  const results = document.querySelector("body");
  const playAgain = document.createElement("button");
  playAgain.textContent = "Play again!?";
  playAgain.style.fontSize = "45px";
  playAgain.addEventListener("click", () => {
    location.reload();
  });

  selections.forEach((button) => {
    button.removeEventListener("click", handlePlayerSelection);
  });
  results.appendChild(playAgain);
}

const selections = document.querySelectorAll(".choices img");

selections.forEach((selection) => {
  selection.addEventListener("click", handlePlayerSelection);
});
