let gamePlay = {
    totalNumberOfClicks: 0,
    resourceGathered: 0,
    perSecondInterval: undefined
}

let dragonElement = document.getElementById("dragon");
let scoreElement = document.getElementById("score");
let mamaDragonElement = document.getElementById("mama-dragon-button");
let resourceCounterELement = document.getElementById("resource-counter");
let daddyDragonElement = document.getElementById("daddy-dragon-button");
let startButton = document.getElementById("start-counting");
let stopButton = document.getElementById("stop-counting")

function foodClickCount() {
    gamePlay.totalNumberOfClicks = gamePlay.totalNumberOfClicks + 1;
    scoreElement.textContent = gamePlay.totalNumberOfClicks;
}
dragonElement.addEventListener("click", foodClickCount);

function mamaDragonSupply() {
    if (gamePlay.totalNumberOfClicks >= 50) {
        gamePlay.totalNumberOfClicks -= 50;
        scoreElement.textContent = gamePlay.totalNumberOfClicks;

        //increment
        gamePlay.resourceGathered += 5;
        resourceCounterELement.textContent = gamePlay.resourceGathered;

    }
}
mamaDragonElement.addEventListener("click", mamaDragonSupply);

function daddyDragonSupply() {
    if (gamePlay.totalNumberOfClicks >= 200) {
        gamePlay.totalNumberOfClicks -= 200;
        scoreElement.textContent = gamePlay.totalNumberOfClicks;
        gamePlay.resourceGathered += 20;
        resourceCounterELement.textContent = gamePlay.resourceGathered;

    }
}
daddyDragonElement.addEventListener("click", daddyDragonSupply)

function setUpStartButton() {
    gamePlay.totalNumberOfClicks += gamePlay.resourceGathered
    scoreElement.textContent = gamePlay.totalNumberOfClicks
}

function intervalPS() {
    gamePlay.perSecondInterval = setInterval(setUpStartButton, 1000)
    console.log(gamePlay.perSecondInterval)
}
startButton.addEventListener("click", intervalPS)

function setUpStopButton() {
    clearInterval(gamePlay.perSecondInterval)
}
stopButton.addEventListener("click", setUpStopButton)
