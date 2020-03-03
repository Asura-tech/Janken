let playerScores = 0;
let compScores = 0;
let round = 0;

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
    var compChoice = computerPick(3);
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
    announcingResults();
    ++round;

}

function compareRock() {
    var compChoice = computerPick(3);
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
    announcingResults();
    ++round;

}

function compareScissor() {
    var compChoice = computerPick(3);
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
    announcingResults();
    ++round;
}

function announcingResults() {
    scores.textContent = ` Your scores: ${playerScores}. Computer scores: ${compScores}.`;
    if(round == 5) {
        removeChildren(container, [paper, rock, scissor]);
        switch((playerScores > compScores)) {
            case true:
                results.textContent = ` Congratulations! You have won against the computer! `;
                break;
            case false:
                results.textContent = ` Oh no! You have lost against the computer! `;
                break;
            default:
                results.textContent = `It's a draw battle! No one have won or lost!`;
                break;
        }
    }
}

function removeChildren(node, array) {
    array.forEach(element =>  node.removeChild(element));
}


var paper = document.querySelector('.paper');
paper.addEventListener('click', comparePaper);

var rock = document.querySelector('.rock');
rock.addEventListener('click', compareRock);

var scissor = document.querySelector('.scissor');
scissor.addEventListener('click', compareScissor);

var results = document.createElement('div');
results.classList.add('results');

var scores = document.createElement('div');
scores.classList.add('scores');

container.appendChild(welcome);
container.appendChild(results);
container.appendChild(scores);




