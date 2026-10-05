console.log("Hello nyaa!!");
// console.log(Math.random());

function getComputerChoice(randomNumber) {
    if(randomNumber<1/3) {
        console.log(`computer plays: rock`);
        return "rock"
    } else if(randomNumber<2/3) {
        console.log(`computer plays: paper`);
        return "paper"
    } else {
        // console.log(randomNumber);
        console.log(`computer plays: scissor`);
        return "scissors"
    }
}

// console.log(getComputerChoice(Math.random()));

function getUserChoice(choice) {
    console.log(`you play: ${choice.toLowerCase()}`);
    return choice.toLowerCase();
}

// console.log(getUserChoice

let humanScore = 0;
let computerScore = 0;

function playRound(userChoice, computerChoice) {
    const normalizedUserChoice = userChoice.toLowerCase();
    switch(normalizedUserChoice) {
        case computerChoice:
            console.log('It is a draw');
            break;
        case 'rock':
            // computerChoice === 'scissor' && (humanScore += 1);
            // computerChoice === 'paper' && (computerScore +=1);
            // computerChoice === 'scissor' ? humanScore += 1 : computerChoice === 'paper' && (computerScore += 1)
            if(computerChoice === 'scissor') {
                humanScore += 1;
            } else if (computerChoice === 'paper') {
                computerScore += 1;
            }
            break;
        case 'paper':
            // computerChoice === 'rock' ? humanScore += 1 : computerChoice === 'scissor' && (computerScore += 1)
            if(computerChoice === 'rock') {
                humanScore += 1;
            } else if (computerChoice === 'scissor') {
                computerScore += 1;
            }
            break;
        case 'scissor':
            // computerChoice === 'paper' ? humanScore += 1 : computerChoice === 'rock' && (computerScore += 1)
            if(computerChoice === 'paper') {
                humanScore += 1;
            } else if (computerChoice === 'paper') {
                computerScore += 1;
            }
            break;
        default:
            console.log('Please enter a valid answer!');
        }
}

function playGame() {
    for (let i =0; i<5; i++) {
        playRound(getUserChoice(prompt('Rock, Paper or Scissor?')),getComputerChoice(Math.random()));
    }
    if(humanScore > computerScore) {
        console.log('You Won!');
    } else if(humanScore < computerScore) {
        console.log('Better luck next time!');
    } else {
        console.log('It is a draw!');
    }
}

playGame();