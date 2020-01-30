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
    return "Scissors";
}

function win(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(playerChoice)} beats ${convertToWord(computerChoice)}.`;
}

function lose() {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    playerScore_span.innerHTML = playerScore;
}

function tie() {
    console.log("It's a tie!");
}

function game(playerChoice) {
    const computerChoice = getComputerChoice();
    switch (playerChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win();
            break;
        case "rp":
        case "ps":
        case "sr":
            lose();
            break;
        case "rr":
        case "pp":
        case "ss":
            tie();
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