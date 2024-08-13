let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = Math.random();
    if (choice >= 0 && choice < 0.33) {
        return "rock";
    } else if (choice >= 0.33 && choice < 0.66) {
        return "scissor";
    } else {
        return "paper";
    }
}

function getUserChoice() {
    let userChoice = String(prompt("Enter your choice (rock, paper, or scissors):")).toLowerCase();
    console.log("Your choice is: " + userChoice);
    return userChoice;
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    let resultMessage;

    if (humanChoice === computerChoice) {
        resultMessage = "Round draw";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        humanScore++;
        resultMessage = `You win, ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        resultMessage = `You lose, ${computerChoice} beats ${humanChoice}`;
    }

    return resultMessage;
}

function playGame() {
    const body = document.querySelector("body");
    const scissor = document.getElementById('scissor');
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const result = document.getElementById('result');

    function updateResult() {
        if (humanScore >= 5 || computerScore >= 5) {
            result.textContent = `Human Score: ${humanScore} - Computer Score: ${computerScore}`;
            if (humanScore > computerScore) {
                result.textContent += " You won!";
            } else if (humanScore < computerScore) {
                result.textContent += " You lost!";
            } else {
                result.textContent += " It's a tie!";
            }
            // Remove event listeners to prevent further clicks
            rock.removeEventListener("click", rockListener);
            scissor.removeEventListener("click", scissorListener);
            paper.removeEventListener("click", paperListener);
        }
    }

    function rockListener() {
        const option = playRound("rock");
        result.textContent = option;
        updateResult();
    }

    function scissorListener() {
        const option = playRound("scissor");
        result.textContent = option;
        updateResult();
    }

    function paperListener() {
        const option = playRound("paper");
        result.textContent = option;
        updateResult();
    }
    rock.addEventListener("click", rockListener);
    scissor.addEventListener("click", scissorListener);
    paper.addEventListener("click", paperListener);
}

playGame();
