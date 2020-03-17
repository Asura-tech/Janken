let playerScores = 0;
let compScores = 0;
let round = 0;
let maxRound = 5;
let compChoice;

var container = document.querySelector('.container');

var welcome = document.createElement('div');
welcome.classList.add('welcome');
welcome.textContent = 'Rock-Paper-Scissor Minigame:';

function computerPick( value ) {
    let cpuPlay = Math.floor( Math.random() * Math.floor( value ));

    if ( cpuPlay == 0 ) {
        return cpuPlay = `rock`;
    } else if ( cpuPlay == 1 ) {
        return cpuPlay = `paper`;
    } else if ( cpuPlay == 2 ) {
        return cpuPlay =`scissor`;
    }
}

function comparePaper() {
    compChoice = computerPick(3);
    switch(compChoice){
        case 'paper':
            results.textContent = 'CPU picked '+compChoice+'. It\'s a draw!';
            break;
        case 'rock':
            results.textContent = 'CPU picked '+compChoice+'. You won!';
            ++playerScores;
            break;
        case 'scissor':
            results.textContent = 'CPU picked '+compChoice+'. You lost!';
            ++compScores;
            break;
    }
    keepTrack();
    announcingResults();
}

function compareRock() {
    compChoice = computerPick(3);
    switch(compChoice){
        case 'paper':
            results.textContent = 'CPU picked '+compChoice+'. You lost!';
            ++compScores;
            break;
        case 'rock':
            results.textContent = 'CPU picked '+compChoice+'. It\'s a draw!';
            break;
        case 'scissor':
            results.textContent = 'CPU picked '+compChoice+'. You won!';
            ++playerScores;
            break;           
    }
    keepTrack();
    announcingResults();
}

function compareScissor() {
    compChoice = computerPick(3);
    switch(compChoice){
        case 'paper':
            results.textContent = 'CPU picked '+compChoice+'. You won!';
            ++playerScores;
            break;
        case 'rock':
            results.textContent = 'CPU picked '+compChoice+'. You Lost!';
            ++compScores;
            break;
        case 'scissor':
            results.textContent = 'CPU picked '+compChoice+'. It\'s a draw!';
            break;
    }
    keepTrack();
    announcingResults();
}

function announcingResults() {
    if(round == 5) {
        results.textContent = 'CPU picked '+compChoice;
        removeChildren(container, [paper, rock, scissor]);
        if (playerScores == compScores) {
            announcer.textContent = `It's a draw battle! No one have won or lost!`;
        } else if (playerScores > compScores) {                
            announcer.textContent = ` Congratulations! You have won against the computer! `;
        } else if (playerScores < compScores) {
            announcer.textContent = ` Oh no! You have lost against the computer! `;
        }
    }
}

function keepTrack() {
    ++round;
    battleRound.textContent = 'Round ' + round + ' out of ' + maxRound;
    playerRecord.textContent = `Your scores: ${playerScores}`;
    computerRecord.textContent = `Computer scores: ${compScores}`;
}

function removeChildren(node, array) {
    array.forEach(element =>  node.removeChild(element));
}

function resetGame() {
    window.location.reload();
}

var paper = document.querySelector('.paper');
paper.addEventListener('click', comparePaper);

var rock = document.querySelector('.rock');
rock.addEventListener('click', compareRock);

var scissor = document.querySelector('.scissor');
scissor.addEventListener('click', compareScissor);

var results = document.createElement('div');
results.classList.add('results');

var announcer = document.createElement('div');
announcer.classList.add('announcer');

var playerRecord = document.querySelector('.player-scores');

var computerRecord = document.querySelector('.computer-scores');

var battleRound = document.querySelector('.battle-round');

var reset = document.querySelector('.reset');
reset.addEventListener('click', resetGame);

container.appendChild(welcome);
container.appendChild(results);
container.appendChild(announcer);
container.appendChild(playerRecord);
container.appendChild(computerRecord);
container.appendChild(battleRound);
container.appendChild(reset);
