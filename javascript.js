// This will be a console javscript game.

// We will need to get user input, then check if it equals
// rock paper or cooler. 


// Get User Input

// Change it to all lowercase 

// Run switch statement to figure which option, if none
// default to ask again.

// Function to get computer choice, which relies on switch statement.
function getComputerChoice()
{
    let computerChoice = "";
    value =  Math.floor(Math.random() * 3)
    switch(value)
        {
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Cooler";
            break;
        }
    return computerChoice;
}


