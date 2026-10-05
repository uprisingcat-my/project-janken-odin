console.log("Hello nyaa!!");
// console.log(Math.random());

function getComputerChoice(randomNumber) {
    if(randomNumber<1/3) {
        return "rock"
    } else if(randomNumber<2/3) {
        return "paper"
    } else {
        // console.log(randomNumber);
        return "scissors"
    }
}

console.log(getComputerChoice(Math.random()));

function getUserChoice(choice) {
    return prompt('Rock, Paper or Scissor?')
}

console.log(getUserChoice());

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
            } else if (computerChoice === 'rock') {
                computerScore += 1;
            }
            break;
        default:
            console.log('Please enter a valid answer!');
        }

}