const computerChoice = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("your-choice");
const result = document.getElementById("result");
const choices = document.querySelectorAll(".btn");
const playerScore = document.getElementById("pl");
const computerScore = document.getElementById("com");
const loader = document.getElementById("loader");
const select = document.getElementById("select");
const startBtn = document.getElementById("start");
const startWindow = document.getElementById("startGame");
const endGame = document.getElementById("endgame");
const winloseWindow = document.getElementById("winlose");
const playAgain = document.getElementById("playagain");
const newScore = document.getElementById("newscore");

let userChoice;
let res;
var playScore = 0;
var compScore = 0;
let defaultSelectValue = 3;
playerScore.innerHTML = playScore;
computerScore.innerHTML = compScore;

var vanishing = setTimeout(vanish, 7000)



// Event Listeners

select.addEventListener('change', getSelectValue);

startBtn.addEventListener('click', startGame);

playAgain.addEventListener('click', PlayAgain);
newScore.addEventListener('click', setNewScore);

// ---------------- -----------





choices.forEach(choice => choice.addEventListener('click', function(e) {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    computerChoice.innerHTML = choices[random()].id;
    userChoiceDisplay.style.color = "green";
    computerChoice.style.color = "red";
    Result(result);
}))


function random() {
    return Math.floor(Math.random() * choices.length);
}

function Result(result) {
    if(computerChoice.innerHTML === userChoiceDisplay.innerHTML) {
        res = "It is A Draw";
        result.style.color = "black";
    } else if(computerChoice.innerHTML === "Rock" && userChoiceDisplay.innerHTML === "Paper" || computerChoice.innerHTML === "Scissors" && userChoiceDisplay.innerHTML === "Rock" || computerChoice.innerHTML === "Paper" && userChoiceDisplay.innerHTML === "Scissors"){
        playScore++;
        res = "Player Win";
        result.style.color = "green";
        playerScore.innerHTML = playScore;

    } else if(computerChoice.innerHTML === "Rock" && userChoiceDisplay.innerHTML === "Scissors" || computerChoice.innerHTML === "Paper" && userChoiceDisplay.innerHTML === "Rock" || computerChoice.innerHTML === "Scissors" && userChoiceDisplay.innerHTML === "Paper") {
        compScore++;
        res = "Computer Win";
        result.style.color = "red";
        
        computerScore.innerHTML = compScore;
    }

    result.innerHTML = res;
    if(compScore === defaultSelectValue || playScore === defaultSelectValue) {
        if(compScore === defaultSelectValue) {
            endGame.innerHTML = "YOU LOSE";
            endGame.style.color = "red";
        }
        winloseWindow.style.display = "flex";
    }
}

function vanish() {
    loader.style.display = "none";
}

function getSelectValue() {
    let newSelect = parseInt(select.value);
    defaultSelectValue = newSelect;
    
}

function startGame() {
    startWindow.style.display = "none";
    playScore = 0;
    compScore = 0;
    computerScore.innerHTML = compScore;
    playerScore.innerHTML = playScore;
}

function PlayAgain() {
    winloseWindow.style.display = "none";
    startGame();
}

function setNewScore() {
    winloseWindow.style.display = "none";
    startWindow.style.display = "flex";
}