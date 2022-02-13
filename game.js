
// function that picks a choice for computer
function computerPlay() {
    let a = Math.floor(Math.random() * 10);
    return (a > 6 ? `scissors` : (a > 3 ? `paper` : `rock`));
}

//comparing chosen picks
function comparePicks(a,b) {
    if (a == b) {
        return (`Whoa we have a draw no way yikes that's cringe!`);
    } else if (!!((a == `rock` && b == `scissors`) || (a == `scissors` && b == `paper`) || (a == `paper` && b == `rock`))) {
        finalPlayer += 1
        return (`Good job buster, ${a} beats ${b}!`);
    // } else if ((player != `rock`) && (player != `scissors`) && (player != `paper`)) {
    //     return (`Da fug is a ${player}`);
    } else {
        finalComp += 1
        return (`Sorry mate you lose ${b} beats your ${a}`);
    }
}

//add para with result to container
function appendResult(r) {
    const newPara = document.createElement('p')
    newPara.textContent = `${r}`
    resultContainer.appendChild(newPara)
}

//add a score para
function insertScoreAndReset () {
    const resetButton = document.createElement('button')
    resetButton.id = 'reset-button'
    resetButton.textContent = 'Restart?'
    resetButton.addEventListener('click', event => resetGame(event))
    resultContainer.insertBefore(resetButton, resultContainer.firstChild)

    const finalScore = document.createElement('h1')
    finalScore.textContent = calculateFinal()
    resultContainer.insertBefore(finalScore, resultContainer.firstChild)

    
}

//calculate final score
function calculateFinal() {
    if (finalPlayer > finalComp) {
        return `Damn man you good you beat The Machine`
    } else if (finalPlayer < finalComp){
        return `It's all ogre skinbag machines own you now`
    } else {`Fuck me it's a draw wat no way`}
}

function resetGame() {
    while (resultContainer.firstChild) {
        resultContainer.removeChild(resultContainer.firstChild)
    }

    finalComp = 0
    finalPlayer = 0
    updateScreens()
}

function updateScreens() {
    playerScreen.textContent = finalPlayer
    compScreen.textContent = finalComp
}

//round of game
function playRound(listener) {
    if (finalPlayer == 5 || finalComp == 5) {
        alert(`restart me you coward`)
        return
    }
    const player = listener.target.name
    const comp = computerPlay()
    const roundResult = comparePicks(player,comp)
    
    if (finalPlayer == 5 || finalComp == 5) {
        appendResult(roundResult)
        updateScreens()
        insertScoreAndReset()
    } else {
        appendResult(roundResult)
        updateScreens()
    }
}

//assign a container for results
const resultContainer = document.getElementById('game-results')

//basic setup with score counter
let finalPlayer = 0
let finalComp = 0
const playerScreen = document.getElementById('player-score')
const compScreen = document.getElementById('comp-score')
playerScreen.textContent = finalPlayer
compScreen.textContent = finalComp

//add event listener on all buttons, on click do a round
const buttons = document.querySelectorAll('.game-button')
buttons.forEach(button => button.addEventListener('click', e => playRound(e)))