function computerPlay() {
    let choice = Math.random();
    if (choice < 0.33) {
        return "rock";
    } else if (choice >= 0.33 && choice < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let result = "";
    if (playerSelection == "rock" && computerSelection == "rock") {
        result += "It is a draw!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        result += "You lost! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        result += "You won! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        result += "It is a draw!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        result += "You lost! Scissors beats Paper";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        result += "You won! Paper beats Rock";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        result += "It is a draw!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        result += "You lost! Rock beats Scissors";
    } else if (playerSelection == "scissors" &&  computerSelection == "paper") {
        result += "You won! Scissors beats Paper";
    } else {
        result += "Please, type correctly";
    }
    return result;
}

function game() {
    let computerCount = 0;
    let playerCount = 0;
    let score = "";

    for (let i = 0; i < 5; i++) {
        let input = prompt("Please, type your choice:");
        let playerSelection = input.toLowerCase();
        let computerSelection = computerPlay();
        let match = playRound(playerSelection, computerSelection);

        score += `Your choice was: ${playerSelection}<br>
                  Computer choice was: ${computerSelection}<br>
                  ${match}<br><br>`;

        if (match == "You lost! Paper beats Rock" ||
            match == "You lost! Scissors beats Paper" ||
            match == "You lost! Rock beats Scissors") {
            computerCount += 1;
        } else if (match == "You won! Rock beats Scissors" ||
                   match == "You won! Paper beats Rock" ||
                   match == "You won! Scissors beats Paper") {
            playerCount += 1;
        } else {
            continue;
        }
    }

    let finalScore = score + `Computer count: ${computerCount}<br>
                     Player count: ${playerCount}<br>`;

    if (computerCount > playerCount) {
        return finalScore + "You lost the game!";
    } else if (computerCount < playerCount) {
        return finalScore + "You won the game!";
    } else {
        return finalScore + "It is a final draw!";
    }
}

document.getElementById("final").innerHTML = game();