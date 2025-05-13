const results = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    return results[Math.floor(Math.random()*3)]
}

function getHumanChoice(){
    let choice = prompt("Choose Rock, Paper, or Scissors");
    choice = choice.toLowerCase();
    choice = choice.charAt(0).toUpperCase() + choice.substring(1);
    for(let i = 0; i < results.length; i++){
        console.log(results[i]);
        if(choice === results[i]){    
            return results[i];
        }
    }
}

function playGame(){
    let rounds = 5;
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        let win;
        if(humanChoice === computerChoice){
            console.log(`Tie! You both chose ${humanChoice}`);
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
            default:
                console.log("Incorrect input");
        }
        if(win){
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else{
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    for(let curRound = 0; curRound < rounds; curRound++){
        playRound(getHumanChoice(),getComputerChoice());
        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }
    if(humanScore > computerScore){
        console.log("You win!");
    }
    else if(computerScore > humanScore){
        console.log("You lose!");
    }
    else{
        console.log("You tied!");
    }
}

playGame();