    //set the initial score for player & computer
    let playerScore = 0;
    let computerScore = 0;

    //create a variable that allows the option buttons to be pressed only if the game is not finished
    //once the game is finished, its value becomes TRUE
    //a PLAY AGAIN button will switch this button's value back to FALSE
    let isGameFinished = false;

    //get the elements that will display the score after each round
    let playerScoreContainer = document.getElementById('player-score');
    let computerScoreContainer = document.getElementById('computer-score');
    playerScoreContainer.innerText = playerScore;
    computerScoreContainer.innerText = computerScore;

    //store the elements that will display the messages in a let 
    let messageContaier = document.getElementById('round-message-container');
    let endMessageContainer = document.getElementById('end-message-container');
    
    //create a function that gets computer's choice
    function getComputerChoice() {
        let randomInt = (Math.floor(Math.random() * 10));
        console.log(randomInt);
    
        if (randomInt <= 3) {
            computerSelection = 'Rock';
        }
    
        else if (randomInt <= 6) {
            computerSelection = 'Paper';
        }
    
        else computerSelection = 'Scissors';
            
        console.log(computerSelection);
        return computerSelection;
        }
    
    //create a function that takes 2 parameters and plays a round
    function playRound(playerSelection, computerSelection) {

        if (!isGameFinished) {          
    
            computerSelection = getComputerChoice();
        
            //DRAW
            if (playerSelection == computerSelection) {
                displayWinnerMessage(`IT'S A DRAW! Computer also chose ${playerSelection}.`)
            }
        
            // Rock vs Paper
            else if ((playerSelection == 'Rock') && (computerSelection == 'Paper')) {
                displayWinnerMessage('Paper beats Rock. Computer Wins!');
                updateScore(true);
                activateResetButton();
            }
        
            else if ((playerSelection == 'Paper') && (computerSelection == 'Rock')) {
                displayWinnerMessage('Paper beats Rock. Human Wins!');
                updateScore(false);
                activateResetButton();
            }
        
            // Rock vs Scissors
            else if ((playerSelection == 'Rock') && (computerSelection == 'Scissors')) {
                displayWinnerMessage('Rock beats Scissors. Human Wins!');
                updateScore(false);
                activateResetButton();
            }
        
            else if ((playerSelection == 'Scissors') && (computerSelection == 'Rock')) {
                displayWinnerMessage('Rock beats Scissors. Computer Wins!');
                updateScore(true);
                activateResetButton();
            }
        
            // Scissors vs Paper
            else if ((playerSelection == 'Scissors') && (computerSelection == 'Paper')) {
                displayWinnerMessage('Scissors beats Paper. Human Wins!');
                updateScore(false);
                activateResetButton();
            }
        
            else if ((playerSelection == 'Paper') && (computerSelection == 'Scissors')) {
                displayWinnerMessage('Scissors beats Paper. Computer Wins!');
                updateScore(true);
                activateResetButton();
            }
        }
    }
    
    //add event listeners for each button and get player's choice
    const rockButton = document.querySelector('#rock');
    rockButton.addEventListener('click', () => {
        playRound(playerSelection = 'Rock');
    });
    
    const paperButton = document.querySelector('#paper');
    paperButton.addEventListener('click', () => {
        playRound(playerSelection = 'Paper');
    });
    
    const scissorsButton = document.querySelector('#scissors');
    scissorsButton.addEventListener('click', () => {
        playRound(playerSelection = 'Scissors');
    });

    //create a function that updates the score
    function updateScore(didComputerWin) {
        if(didComputerWin) {
            computerScore++;
            computerScoreContainer.innerText = computerScore;
        } 
            
        else {
            playerScore++;
            playerScoreContainer.innerText = playerScore;
        }
    }

    //create a function that displays the correct message after each round
    function displayWinnerMessage(winnerMessage) {
        messageContaier.innerText = winnerMessage;
        }
    
    //create a function that decides when the game is finished (the choice buttons become disabled)
    function activateResetButton() {
        if (playerScore == 3) {

            isGameFinished = true;

            //create and display the RESET BUTTON when PLAYER'S score reaches 3
            let resetButton = document.createElement('button');
            resetButton.setAttribute('id', 'reset-button');
            resetButton.innerText = 'PLAY AGAIN';

            let parentOfResetButton = document.getElementById('buttons-section');
            let siblingOfResetButton = document.getElementById('weapons-container');
            parentOfResetButton.insertBefore(resetButton, siblingOfResetButton);

            //display the ending message for this situation
            endMessageContainer.innerText = 'CONGRATS! You beat the Computer!'

            resetButton.addEventListener('click', () => {
                window.location.reload();
            });

            //make the PLAY AGAIN "button" be perceived more like a button
            resetButton.style.cursor = 'pointer';
        }

        else if (computerScore == 3) {

            isGameFinished = true;

            //create and display the RESET BUTTON when COMPUTER'S score reaches 3
            let resetButton = document.createElement('button');
            resetButton.setAttribute('id', 'reset-button');
            resetButton.innerText = 'PLAY AGAIN';

            let parentOfResetButton = document.getElementById('buttons-section');
            let siblingOfResetButton = document.getElementById('weapons-container');
            parentOfResetButton.insertBefore(resetButton, siblingOfResetButton);

            //display the ending message for this situation
            endMessageContainer.innerText = 'Computer beats Human. Give it another try!';

            resetButton.addEventListener('click', () => {
                window.location.reload();
            });

            //make the PLAY AGAIN "button" be perceived more like a button
            resetButton.style.cursor = 'pointer';
        }
    }

    //create the event listener that allows the game to be played again
    resetButton.addEventListener('click', isGameFinished = false);
