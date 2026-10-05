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
    return prompt('Rock, Paper or Scissors?')
}

console.log(getUserChoice());

let humanScore = 0;
let computerScore = 0;