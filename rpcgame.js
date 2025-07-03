function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    }
    else if (randomNumber === 1) {
        return "paper";

    }
    else {
        return "scissors";
    }
}
function getHumanChoice() {
    return prompt("Choice rock,paper and scissor");
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice()
    if (humanChoice === computerChoice) {
        console.log(`Draw! Both choice ${humanChoice}`);

    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else {
        console.log(`You lose! ${humanChoice} lose to ${computerChoice}`);
        computerScore++
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log(`Round ${i + 1}:You ${humanScore} | Computer ${computerScore}`);
    }
    if (humanScore > computerScore) {
        console.log("You won this game");
    }
    else {
        console.log("You lose this game");
    }

}
playGame();