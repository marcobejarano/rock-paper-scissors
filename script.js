function computerPlay() {
    let choice = Math.random();
    if (choice < 0.33) {
        return "Rock";
    } else if (choice >= 0.33 && choice < 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let result = "";
    if (playerSelection == "Rock" && computerSelection == "Rock") {
        result += "It is a draw!";
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        result += "You lost! Paper beats Rock";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        result += "You won! Rock beats Scissors";
    } else if (playerSelection == "Paper" && computerSelection == "Paper") {
        result += "It is a draw!";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        result += "You lost! Scissors beats Paper";
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        result += "You won! Paper beats Rock";
    } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        result += "It is a draw!";
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        result += "You lost! Rock beats Scissors";
    } else if (playerSelection == "Scissors" &&  computerSelection == "Paper") {
        result += "You won! Scissors beats Paper";
    } else {
        result += "Please, type correctly";
    }
    return result;
}

let computerCount = 0;
let playerCount = 0;
let gameResult = '';

let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.innerText;
        let computerSelection = computerPlay();
        let playResult = playRound(playerSelection, computerSelection);
    
        if (playResult === "You lost! Paper beats Rock" ||
        playResult === "You lost! Scissors beats Paper" ||
        playResult === "You lost! Rock beats Scissors") {
            computerCount += 1;
        } else if (playResult === "You won! Rock beats Scissors" ||
        playResult === "You won! Paper beats Rock" ||
        playResult === "You won! Scissors beats Paper") {
            playerCount += 1;
        }
    
        gameResult = `Player Selection: ${playerSelection}\n` +
        `Computer Selection: ${computerSelection}\n` +
        `${playResult}\n` + `Computer Count: ${computerCount}\n` +
        `Player Count: ${playerCount}` + '\n\n';
    
        if (computerCount == 5) {
            gameResult += '\nYou lost the game!!\nThe game is over.\n' +
              'Refresh the page for a new game\n';
        } else if (playerCount == 5) {
            gameResult += '\nYou won the game!!\nThe game is over.\n' +
              'Refresh the page for a new game\n';
        }
    
        document.getElementById('myID').innerText += gameResult; 
    })
});