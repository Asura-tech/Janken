let playerScores = 0;
let compScores = 0;
let round = 0;
let maxRound = 5;
let compChoice;

var container = document.querySelector('#container'); //append new stuffs into here

var welcome = document.createElement('div');
welcome.classList.add('welcome');
welcome.textContent = 'Rock-Paper-Scissor';

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
    ++round;
    battleRound.textContent = 'Round ' + round + ' out of ' + maxRound;
    announcingResults();
    scores.textContent = ` Your scores: ${playerScores}. Computer scores: ${compScores}.`;
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
    ++round;
    battleRound.textContent = 'Round ' + round + ' out of ' + maxRound;
    announcingResults();
    scores.textContent = ` Your scores: ${playerScores}. Computer scores: ${compScores}.`;
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
    ++round;
    battleRound.textContent = 'Round ' + round + ' out of 5';
    announcingResults();
    scores.textContent = ` Your scores: ${playerScores}. Computer scores: ${compScores}.`;
}

function announcingResults() {
    battleRound.textContent = 'Round ' + round + ' out of ' + maxRound;
    if(round == 5) {
        results.textContent = 'CPU picked '+compChoice;
        removeChildren(container, [paper, rock, scissor]);
        switch((playerScores > compScores)) {
            case true:
                announcer.textContent = ` Congratulations! You have won against the computer! `;
                break;
            case false:
                announcer.textContent = ` Oh no! You have lost against the computer! `;
                break;
            default:
                announcer.textContent = `It's a draw battle! No one have won or lost!`;
                break;
        }
    }
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

var scores = document.createElement('div');
scores.classList.add('scores');

var battleRound = document.createElement('div');
battleRound.classList.add('battle-round');

var reset = document.querySelector('.reset');
reset.addEventListener('click', resetGame);

container.appendChild(welcome);
container.appendChild(results);
container.appendChild(announcer);
container.appendChild(scores);
container.appendChild(battleRound);
container.appendChild(reset);
