function compareValues(human, computer){
    let response = "";
    // Check for Rock
    if (human == "rock" && computer == "cooler"){
        response = "Human Won"
        userScore++;
    }
    // Check for Paper
    else if (human == "paper" && computer == "rock"){
        response = "Human Won"
        userScore++;
    }
    // Check for Cooler
    else if (human == "cooler" && computer == "paper"){
        response = "Human Won"
        userScore++;
    // Check for Tie
    } else if(human == computer){
        response = "Tie!"
    }
    else{
        response = "Computer Won: " + computer
        computerScore++;
    }
    return response
}


function getComputerChoice()
{
    let computerChoice = "";
    let value =  Math.floor(Math.random() * 3)
    switch(value)
        {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "cooler";
            break;
        }
    return computerChoice;
}

function cleanInput(str){
    return str.toLowerCase();
}

function getHumanChoice()
{
    let userInput = prompt("Rock, Paper, or Cooler?");
    userInput = cleanInput(userInput);
    return userInput
}

function playGame(){

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

let result = compareValues(humanChoice, computerChoice)
console.log(result)


}

let userScore = 0;
let computerScore = 0;

function printScores(){
    console.log("Human: " + userScore)
    console.log("-")
    console.log("Computer: " + computerScore)
}

while(computerScore < 5 && userScore < 5){
    playGame()
    printScores()
}