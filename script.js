function computerPlay(){
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random()*options.length)];
}

function playRound(playerSelection, computerSelection){
    console.log("playerSelection: "+playerSelection);
    console.log("computerSelection: "+computerSelection);
    if(playerSelection == computerSelection)
        return 'tie';
    switch(playerSelection+computerSelection) {
        case 'rockscissor':
            return 'player';
        case 'paperrock':
            return 'player';
        case 'scissorpaper':
            return 'player';
        default:
            return 'computer';
    }
}



function game() {
    let res, playerSelection, computerSelection, playerPoints = 0, computerPoints = 0;
    for(let i=0;i<5;i++){
        playerSelection = prompt("PlayerSelection: ").toLowerCase();
        while(playerSelection!='paper' && playerSelection!='rock' && playerSelection!='scissors')
            playerSelection = prompt("Wrong input. Choose from rock, paper or scissors.").toLowerCase();
        
        computerSelection = computerPlay();
        res = playRound(playerSelection, computerSelection);
        if(res == 'player'){
            console.log("You won this round!");
            playerPoints += 1;
        }
        else if(res == 'tie'){
            console.log("It's a tie");
        }
        else{
            console.log("Computer won this round");
            computerPoints += 1;
        }
    }
    console.log("****************************************************");
    console.log("Player points: "+playerPoints.toString());
    console.log("Computer points: "+computerPoints.toString());
    if(playerPoints == computerPoints)
        console.log("You tied with the computer.")
    else if(playerPoints > computerPoints)
        console.log("Hurray! You won!");
    else
        console.log("You Lost. Better luck next time.");
    console.log("****************************************************");
}