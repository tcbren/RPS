//variables to track match score
let playerScore = 0;
let computerScore = 0;


//Create function to determine computer's choice(random 0-2) and return that choice
function computerPlay() {
    const pcOptions =  ["rock", "paper", "scissors"];
    return pcOptions[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    //Var for buttons
    const buttons = document.querySelectorAll('button');

    //Iterate through buttons, run playRound() with button selection
    buttons.forEach((button) => {
        //Click-listener for each button
        button.addEventListener('click', () => playRound(button.id, computerPlay()));
    });
}

//Create function playRound, takes 2 parameters (user and pc choices), compares choices, returns string to declare winner
function playRound(playerSelection, computerSelection) {
    //console.log(`User: ${playerSelection}`);
    //console.log(`PC: ${computerSelection}`);
    let winLoss;
    msg.textContent = "";
    if ((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "rock" && computerSelection === "scissors")) {
        console.log("You won");
        winLoss = 1;
        playerScore++;       
    } else if (playerSelection === computerSelection) {
        console.log("You tied");
        winLoss = 0;
    } else {
        console.log("You lost");
        winLoss = 2;
        computerScore++;        
    }
    printRoundResults(playerSelection, computerSelection, winLoss);
    updateScore();
    //console.log(`Your score is: ${playerScore}\nThe PC score is: ${computerScore}`);
    checkScore();
}
const userScoreDisplay = document.querySelector('#me');
const pcScoreDisplay = document.querySelector('#pc');
const userScore = document.createElement('span');
const pcScore = document.createElement('span');
const message = document.querySelector('#message');
const msg = document.createElement('p');
userScoreDisplay.appendChild(userScore);
pcScoreDisplay.appendChild(pcScore);
message.appendChild(msg);
userScore.style.color = 'black';
pcScore.style.color = 'black';
msg.style.color = 'black';

function updateScore() {
    userScore.textContent = playerScore;
    pcScore.textContent = computerScore;
}

function checkScore() {
    if (playerScore === 3) {
        msg.textContent = `You have bested the computer by a score of ${playerScore} games to ${computerScore} and have WON the match!`;
        //playerScore = 0;
        //computerScore = 0;
        reset();
    } else if (computerScore === 3) {
        msg.textContent = `You are a disgrace to the human race.\nThe computer has defeated you by a score of ${computerScore} games to ${playerScore} and you have LOST the match!`;
        //playerScore = 0;
        //computerScore = 0;
        reset();
    }
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    userChoice.textContent = "";
    pcChoice.textContent = "";
    roundResults.textContent = "";
    userScore.textContent = playerScore;
    pcScore.textContent = computerScore;
}
const userDisplay = document.querySelector('#userChoice');
const pcDisplay = document.querySelector('#pcChoice');
const roundDisplay = document.querySelector('#roundResults');
const userChoice = document.createElement('span');
const pcChoice = document.createElement('span');
const roundResults = document.createElement('span');
userDisplay.appendChild(userChoice);
pcDisplay.appendChild(pcChoice);
roundDisplay.appendChild(roundResults);
userChoice.style.color = 'black';
pcChoice.style.color = 'black';
roundResults.style.color = 'black';

function printRoundResults(user, pc, result) {
    userChoice.textContent = user.toUpperCase();
    pcChoice.textContent = pc.toUpperCase();
    
    if (result === 1) {
        roundResults.textContent = "Congratulations! You have won this round!";
    } else if (result === 2) {
        roundResults.textContent = "Much fail. The computer has won this round!";
    } else {
        roundResults.textContent = "It is a draw! No points awarded!";
    }
}


getPlayerChoice();
