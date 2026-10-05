console.log("Hello nyaa!!");
// console.log(Math.random());

function getComputerChoice(randomNumber) {
    if(randomNumber<1/3) {
        return "rock"
    } else if(randomNumber<2/3) {
        return "paper"
    } else {
        return "scissors"
    }
}

getComputerChoice(Math.random);