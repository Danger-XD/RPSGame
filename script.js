const computerChoiceD = document.getElementById("Computer-Choice");
const userChoiceD = document.getElementById("User-Choice");
const resultD = document.getElementById("Result");
const userBtn = document.querySelectorAll("button"); //if there are more button than we have use id/class for buttons and the getElementById/Class
// console.log(userBtn);
//this declaration is the worker variables and the aboves are for displaying the variables
let computerChoice;
let userChoice;
let result;
//userBtn is in array so we access it individually using forEach
userBtn.forEach((userBtn) =>
  userBtn.addEventListener("click", (e) => {
    //e is the element or pointerEvent
    userChoice = e.target.id;
    userChoiceD.innerHTML = userChoice;
    generateComputerChoice();
    resultShow();
  })
);

function generateComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3) + 1;
  console.log(computerChoice);
  if (computerChoice === 1) {
    computerChoice = "Rock";
  }
  if (computerChoice === 2) {
    computerChoice = "Paper";
  }
  if (computerChoice === 3) {
    computerChoice = "Scissor";
  }
  computerChoiceD.innerHTML = computerChoice;
}

function resultShow() {
  if (computerChoice === userChoice) {
    result = "Try Again";
  }
  if (computerChoice == "Rock" && userChoice == "Paper") {
    result = "You Win";
  }
  if (computerChoice == "Rock" && userChoice == "Scissor") {
    result = "You Lose";
  }
  if (computerChoice == "Paper" && userChoice == "Rock") {
    result = "You Lose";
  }
  if (computerChoice == "Paper" && userChoice == "Scissor") {
    result = "You Win";
  }
  if (computerChoice == "Scissor" && userChoice == "Rock") {
    result = "You Win";
  }
  if (computerChoice == "Scissor" && userChoice == "Paper") {
    result = "You Lose"; //we cant use return here instead of assign operator
  }
  resultD.innerHTML = result;
}
