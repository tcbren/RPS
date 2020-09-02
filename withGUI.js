//Create function to determine computer's choice(random 0-2) and return that choice
function computerPlay() {
    const pcOptions =  ["rock", "paper", "scissors"];
    return pcOptions[Math.floor(Math.random() * 3)];
}
//Prompt user for choice, store in user choice variable
function userPrompt() {
    let userChoice = window.prompt("Please type your selection; rock, paper, or scissors: ");
    return userChoice.trim().toLowerCase();
    
}
//Create function playRound, takes 2 parameters (user and pc choices), compares choices, returns string to declare winner
function playRound(playerSelection, computerSelection) {
    console.log(`User: ${playerSelection}`);
    console.log(`PC: ${computerSelection}`);
    if ((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "rock" && computerSelection === "scissors")) {
        return 1;
    } else if (playerSelection === computerSelection) {
        return undefined;
    } else {
        return 2;
    }
}
//Create function called game() to play 5 round game. Best 3/5 wins.
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let winOrLose;
    while (playerScore < 3 && computerScore < 3) {
        winOrLose = playRound(userPrompt(), computerPlay());
        if (winOrLose === 1) {
            console.log("You win this round, Gadget!");
            playerScore++;
            console.log(`The score is user: ${playerScore} and the PC: ${computerScore}`);
        } else if (winOrLose === 2) {
            console.log("Whomp! The computer wins! Beware the AI!");
            computerScore++;
            console.log(`The score is user: ${playerScore} and the PC: ${computerScore}`);
        } else {
            console.log("It is a draw! No points awarded; REDO!");
            console.log(`The score is user: ${playerScore} and the PC: ${computerScore}`);
        }
    }
    return playerScore;
}
//Use console.log to display results of each round, as well as winner of match
if (game() === 3) {
    console.log("You have bested the computer and have WON the match!");
} else {
    console.log("You are a disgrace to the human race. The computer has defeated you and you have LOST the match!");
}
