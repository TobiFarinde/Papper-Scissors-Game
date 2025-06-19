let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
const randIdx = Math.floor(Math.random() * 3);
return options[randIdx];
};

constDrawGame = () => {
    console.log ("game was draw.");
    msg.innerText = "Game was draw. play again";
}

const showWinner = (userWin) => {
if(userWin) {
    console.log("you win!");
    msg.innerText = "You Win";
    msg.style.nbackgroundColor = "green";
}else {
    console.log("you lose!");
    msg.innerText = "You lose.";
     msg.style.nbackgroundColor = "red";
}
};

const playGame = (userChoice) => {
    console.log ("user choice =",  userChoice);
//Generate computer choice
const compChoice = genCompChoice();
console.log("comp choice =", userChoice);

if(userChoice === compChoice) {
    //Draw Game
    drawGame("draw");
} else {
    let userWin = true;
    if(userChoice === "rock") {
        //Scissors, paper
        userWin = compChoice === "paper" ? false : true;
    }else if (userChoice === "paper") {
        //rock, scissors
       userWin = compChoice === "scissors" ? false : true;
    } else{
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")
playGame(userChoice);
    });
});