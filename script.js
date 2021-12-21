// Function to randomly select an option for the computer
function computerPlay(){
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random()*options.length)];
}

// Function to check who won
function gameOver(playerPoints){
    document.querySelector('#options').remove();
    document.querySelector('#messageLayer').remove();
    document.querySelector('#scoreContainer').style.width = "30%";
    const result = document.querySelector('#result');
    if(playerPoints == 5){
        let node = document.createTextNode("Hurrah! You won the game.");
        let image = document.createElement('img');
        image.src = "./images/happy.png";
        image.id = 'resultImage';
        result.appendChild(image);
        result.appendChild(node);
    }
    else{
        let node = document.createTextNode("You lost. Better luck next time.");
        let image = document.createElement('img');
        node.id = 'resultText';
        image.src = "./images/sad.png";
        image.id = 'resultImage';
        result.appendChild(image);
        result.appendChild(node);
    }
    // Try Again
    const button = document.createElement('button');
    button.textContent = "Try Again";
    document.querySelector('#playAgain').appendChild(button);
    button.addEventListener('click', function(){
        location.href = 'index.html';
    });
}

function playRound(e){
    let res;
    playerSelection = e.target.id;
    console.log(playerSelection);
    computerSelection = computerPlay();
    console.log(computerSelection);
    if(playerSelection == computerSelection)
        res = 'tie';
    else{
        console.log(playerSelection+computerSelection);
        switch(playerSelection+computerSelection) {
            case 'rockscissors':
                res = 'player';
                break;
            case 'paperrock':
                res = 'player';
                break;
            case 'scissorspaper':
                res = 'player';
                break;
            default:
                res = 'computer';
        }
    }
    console.log(res);
    if(res == 'player'){
        message.textContent = "You won this round!";
        playerPoints += 1;
        playerScore.textContent = playerPoints.toString();
        console.log(playerPoints.toString());
    }
    else if(res == 'tie'){
        message.textContent = "It's a tie.";
    }
    else{
        message.textContent = "Computer won this round.";
        computerPoints += 1;
        computerScore.textContent = computerPoints.toString();
        console.log(computerPoints.toString());
    }

    if(playerPoints == 5 || computerPoints == 5){
        gameOver(playerPoints);
    }
}

let playerPoints = 0;
let computerPoints = 0;
let message = document.querySelector('#message');
let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');
const buttons = document.querySelectorAll('img');
buttons.forEach(button => button.addEventListener('click', playRound));
