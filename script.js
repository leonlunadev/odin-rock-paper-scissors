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
      return "Computer Wins!";
    } else {
      playerScore++;
      return "Player wins!";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      computerScore++;
      return "Computer Wins!";
    } else {
      playerScore++;
      return "Player wins!";
    }
  } else {
    // scissors
    if (computerSelection == "rock") {
      computerScore++;
      return "Computer Wins!";
    } else {
      playerScore++;
      return "Player wins!";
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
}

const selections = document.querySelectorAll(".selection");

selections.forEach((selection) => {
  selection.addEventListener("click", handlePlayerSelection);
});

// rock.addEventListener("click", () => {
//   const results = document.querySelector(".results");
//   let para = document.createElement("p");
//   let computerChoice = getComputerChoice();
//   let result = playRound("rock", computerChoice);
//   if (result == 1) playerScore++;
//   if (result == -1) computerScore++;
//   if (playerScore > 2 || computerScore > 2) {
//     let para = document.createElement("p");
//     if (playerScore > computerScore) {
//       let node = document.createTextNode(
//         `Player wins ${playerScore} - ${computerScore}`
//       );
//       para.appendChild(node);
//       results.appendChild(para);
//     } else {
//       let node = document.createTextNode(
//         `Computer wins ${computerScore} - ${playerScore}`
//       );
//       para.appendChild(node);
//       results.appendChild(para);
//     }
//   } else {
//     let node = document.createTextNode(
//       `Player chose ${"rock"} and computer chose ${computerChoice}
//         Player: ${playerScore} Computer: ${computerScore}`
//     );
//     para.appendChild(node);
//     results.appendChild(para);
//   }
// });

// paper.addEventListener("click", () => {
//   const results = document.querySelector(".results");
//   let computerChoice = getComputerChoice();
//   let para = document.createElement("p");
//   let result = playRound("paper", computerChoice);
//   if (result == 1) playerScore++;
//   if (result == -1) computerScore++;
//   if (playerScore > 2 || computerScore > 2) {
//     let para = document.createElement("p");
//     if (playerScore > computerScore) {
//       let node = document.createTextNode(
//         `Player wins ${playerScore} - ${computerScore}`
//       );
//       para.appendChild(node);
//       results.appendChild(para);
//     } else {
//       let node = document.createTextNode(
//         `Computer wins ${computerScore} - ${playerScore}`
//       );
//       para.appendChild(node);
//       results.appendChild(para);
//     }
//   } else {
//     let node = document.createTextNode(
//       `Player chose ${"paper"} and computer chose ${computerChoice} \n
//         Player: ${playerScore} Computer: ${computerScore}`
//     );
//     para.appendChild(node);
//     results.appendChild(para);
//   }
// });

// scissors.addEventListener("click", () => {
//   let computerChoice = getComputerChoice();
//   const results = document.querySelector(".results");
//   let para = document.createElement("p");
//   let result = playRound("scissors", computerChoice);
//   if (result == 1) playerScore++;
//   if (result == -1) computerScore++;
//   if (playerScore > 2 || computerScore > 2) {
//     let para = document.createElement("p");
//     if (playerScore > computerScore) {
//       let node = document.createTextNode(
//         `Player wins ${playerScore} - ${computerScore}`
//       );
//       para.appendChild(node);
//       results.appendChild(para);
//     } else {
//       let node = document.createTextNode(
//         `Computer wins ${computerScore} - ${playerScore}`
//       );
//       para.appendChild(node);
//       results.appendChild(para);
//     }
//   } else {
//     let node = document.createTextNode(
//       `Player chose ${"scissor"} and computer chose ${computerChoice}\n
//       Player: ${playerScore} Computer: ${computerScore}`
//     );
//     para.appendChild(node);
//     results.appendChild(para);
//   }
// });

// clear.addEventListener("click", () => {
//   let allParagraphElements = document.getElementsByTagName("p");

//   for (let i = allParagraphElements.length - 1; i >= 0; i--) {
//     allParagraphElements[i].parentNode.removeChild(allParagraphElements[i]);
//   }

//   playerScore = 0;
//   computerScore = 0;
// });
