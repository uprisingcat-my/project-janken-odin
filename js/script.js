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
        return "scissor"
    }
}

// console.log(getComputerChoice(Math.random()));

function getUserChoice(choice) {
    const userInput = choice || 'miss!';
    console.log(`you play: ${userInput.toLowerCase()}`);
    return userInput.toLowerCase()
}

// console.log(getUserChoice

let humanScore = 0;
let computerScore = 0;

function playRound(userChoice, computerChoice) {
    const normalizedUserChoice = userChoice.toLowerCase();
    switch(normalizedUserChoice) {
        case computerChoice:
            score();
            console.log('+++ This round is a draw +++');
            break;
        case 'rock':
            // computerChoice === 'scissor' && (humanScore += 1);
            // computerChoice === 'paper' && (computerScore +=1);
            // computerChoice === 'scissor' ? humanScore += 1 : computerChoice === 'paper' && (computerScore += 1)
            if(computerChoice === 'scissor') {
                humanScore += 1;
                score();
                console.log("+++ you win this round! +++");
            } else if (computerChoice === 'paper') {
                computerScore += 1;
                console.log("+++ computer wins this round! +++");
            }
            break;
        case 'paper':
            // computerChoice === 'rock' ? humanScore += 1 : computerChoice === 'scissor' && (computerScore += 1)
            if(computerChoice === 'rock') {
                humanScore += 1;
                score();
                console.log("+++ you win this round! +++");
            } else if (computerChoice === 'scissor') {
                computerScore += 1;
                score();
                console.log("+++ computer wins this round! +++");
            }
            break;
        case 'scissor':
            // computerChoice === 'paper' ? humanScore += 1 : computerChoice === 'rock' && (computerScore += 1)
            if(computerChoice === 'paper') {
                humanScore += 1;
                score();
                console.log("+++ you win this round! +++");
            } else if (computerChoice === 'paper') {
                computerScore += 1;
                score();
                console.log("+++ computer wins this round! +++");
            }
            break;
        default:
            score();
            console.log('+++ Please enter a valid answer! +++');
        }
}

function playGame() {
    console.log('__________________________________________');
    for (let i =0; i<5; i++) {
        playRound(getUserChoice(prompt('Rock, Paper or Scissor?')),getComputerChoice(Math.random()));
    }
    if(humanScore > computerScore) {
        console.log('__________You Won!__________');
    } else if(humanScore < computerScore) {
        console.log('___Better luck next time!___');
    } else {
        console.log('________It\'s a draw!________');
    }
}

function score() {
    console.log('================================');
    console.log(`your score: ${humanScore}`);
    console.log(`computer score: ${computerScore}`);
    console.log('================================');
}

playGame();
