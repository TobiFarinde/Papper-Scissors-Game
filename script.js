let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
const randIdx = Math.floor(Math.random() * 3);
return options[randIdx];
};

constDrawGame = () => {
    console.log ("game was draw.");
}

const playGame = (userChoice) => {
    console.log ("user choice =",  userChoice);
//Generate computer choice
const compChoice = genCompChoice();
console.log("comp choice =", userChoice);

if(userChoice === compChoice) {
    //Draw Game
    drawGame();
} else {
    let userWin = true;
    if(userChoice === "rock") {
        //Scissors, paper
        userWin = compChoice === "paper" ? false
    }
}
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")
playGame(userChoice);
    });
});