function getRandomInt(num) {
    return Math.floor(Math.random() * num);
}

function getComputerChoice() {
    let num = getRandomInt(3);
    if (num == 0) {
        return "Rock";
    }
    else if (num == 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    choice = choice.toUpperCase().slice(0,1) + choice.slice(1);

    if (choice != "Rock" && choice != "Paper" && choice != "Scissors") {
        choice = getHumanChoice();
    }
    return choice;
}

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice == computerChoice) {
        console.log(`It's a tie! You both picked ${humanChoice}!`);
        return;
    }

    if (humanChoice == "Rock") {
        if(computerChoice == "Paper") {
            computerScore++;
            console.log("You lose! Paper beats rock!")
        }
        else {
            humanScore++;
            console.log("You win! Rock beats scissors!")
        }
    }
    else if (humanChoice == "Paper") {
        if(computerChoice == "Scissors") {
            computerScore++;
            console.log("You lose! Scissors beats rock!")
        }
        else {
            humanScore++;
            console.log("You win! Paper beats rock!")
        }
    }

    if (humanChoice == "Scissors") {
        if(computerChoice == "Rock") {
            computerScore++;
            console.log("You lose! Rock beats scissors!")
        }
        else {
            humanScore++;
            console.log("You win! Scissors beats paper!")
        }
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    console.log("Hello! Welcome to Rock Paper Scissors!")

    for(let i = 0; i < 5; i++) {
        playRound();
    }

    console.log(`The final score is ${humanScore} to ${computerScore}.`);
    if (humanScore > computerScore) {
        console.log("Congratulations, you win!")
    }
    else if (humanScore < computerScore) {
        console.log("Sorry, you lost :(")
    }
    else {
        console.log("It's a draw!")
    }
}


playGame();