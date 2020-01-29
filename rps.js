const playerScore = 0;
const computerScore = 0;
const playerScore_span = document.getElementById("player-score"); //for player-score span tag in HTML
const computerScore_span = document.getElementById("computer-score"); //for computer-score span tag in HTML
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
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