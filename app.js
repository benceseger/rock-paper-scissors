/*
    computerPlay function:
    this function will return a random choice
    \Rock, Paper, Scissors/

    the choices will be stored in an array
    
    let computerChoices = ['Rock', 'Paper', 'Scissors'];

    then using Math.random(), and Math.floor(), multiplied by the length of the array
    the computer will choose a random "tool" from the array
    which will then be outputted to the console, and then that will be
    the return value of the function

    playRound() function which will determine how the round will be played

    playEound() arguments: playerSelection and computerSelection
    
    !! IMPORTANT !!
    !! PLAYER'S INPUT MUST BE CASE-INSENSITIVE! !!
    the player's choice will be compared with the computer's choice
        probably a switch statement or an if statement to check who won the round

    !! VALUE IS INCREMENTED WHEN ROUND IS WON BY EITHER THE COMPUTER OR THE PLAYER
    SCORE VARIABLES FOR BOTH PARTIES
        let playerScore
        let computerScore
    
    THE GAME WILL USE A WHILE LOOP AND ALSO A ROUND VARIABLE
        The game will go on for 3 or 5 rounds
        The value of the round will increment
        As soon as the game ends, the computer will ask the player if they want to play another round or not.

    computerPlay() function uses integers instead of strings.
    for easier calculation, this has to be changed. 
    0 -> Rock
    1 -> Paper
    2 -> Scissors
    
    IF STATEMENT TO CHECK WHO WON
    (playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Rock"))
*/
function computerPlay() {
    let computerChoices = ["Rock", "Paper", "Scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)]
}

//const playerSelection = prompt("Choose your weapon (rock, paper, scissors)");
const computerSelection = computerPlay();


function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase();
    playerSelection = prompt("Choose your weapon (rock, paper, scissors)");
    playerSelection = playerSelection.toLowerCase();
    console.log("Player: " + playerSelection);
    console.log("Computer: " + computerSelection);

    if (playerSelection === computerSelection) {
        console.log("Draw");
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        console.log("You Lost");
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log("You Won!");
    }
}

// game();
// function game() {
//     playRound();
//     playRound();
//     playRound();
//     playRound();
//     playRound();
// }