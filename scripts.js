const results = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => {
    playRound(getHumanChoice("Rock"),getComputerChoice());
});

paperButton.addEventListener("click", () => {
    playRound(getHumanChoice("Paper"),getComputerChoice());
});  

scissorsButton.addEventListener("click", () => {
    playRound(getHumanChoice("Scissors"),getComputerChoice());
});

const hScore = document.querySelector("#hScore");
const cScore = document.querySelector("#cScore");
const curEvent = document.querySelector("#curEvent");


function getComputerChoice(){
    return results[Math.floor(Math.random()*3)]
}

function getHumanChoice(choice){
    for(let i = 0; i < results.length; i++){
        if(choice === results[i]){    
            return results[i];
        }
    }
}

function playRound(humanChoice, computerChoice){
        let win;
        if(humanChoice === computerChoice){
            curEvent.textContent = `Tie! You both chose ${humanChoice}`;
            return;
        }
        switch(humanChoice){
            case "Rock":
                if(computerChoice === "Paper")
                    win = false;
                if (computerChoice === "Scissors")
                    win = true;
                break;
            case "Paper":
                if(computerChoice === "Scissors")
                    win = false;
                if (computerChoice === "Rock")
                    win = true;
                break;
            case "Scissors":
                if(computerChoice === "Rock")
                    win = false;
                if (computerChoice === "Paper")
                    win = true;
                break;
        }
        if(win){
            curEvent.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        }
        else{
            curEvent.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
        }
}


    // for(let curRound = 0; curRound < rounds; curRound++){
    //     playRound(getHumanChoice(),getComputerChoice());
    //     console.log(`Human Score: ${humanScore}`);
    //     console.log(`Computer Score: ${computerScore}`);
    // }
    // if(humanScore > computerScore){
    //     console.log("You win!");
    // }
    // else if(computerScore > humanScore){
    //     console.log("You lose!");
    // }
    // else{
    //     console.log("You tied!");
    // }