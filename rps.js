let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score"); //for player-score span tag in HTML
const computerScore_span = document.getElementById("computer-score"); //for computer-score span tag in HTML
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

function win(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `You win! ${convertToWord(playerChoice)} beats ${convertToWord(computerChoice)}.`;
}

function lose(computerChoice, playerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    playerScore_span.innerHTML = playerScore;
    result_p.innerHTML = `Computer wins! ${convertToWord(computerChoice)} beats ${convertToWord(playerChoice)}.`;
}

function tie(playerChoice, computerChoice) {
    result_p.innerHTML = `It's a tie, try again!`;
}

function game(playerChoice) {
    const computerChoice = getComputerChoice();
    switch (playerChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(playerChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(computerChoice, playerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            tie(playerChoice, computerChoice);
            break;
    }
}

function playGame() {
    rock_div.addEventListener("click", function() {
        game("r");
    });
    paper_div.addEventListener("click", function() {
        game("p");
    });
    scissors_div.addEventListener("click", function() {
        game("s");
    });
}

playGame();