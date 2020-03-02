let playerScores = 0;
let compScores = 0;
let maxRound = 0;

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

var paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
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
    ++maxRound;
});

var rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
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
    ++maxRound;
});

var scissor = document.querySelector('.scissor');
scissor.addEventListener('click', () => {
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
    ++maxRound;
});

var container = document.querySelector('#container'); //append new stuffs into here

var welcome = document.createElement('div');
welcome.classList.add('welcome');
welcome.textContent = 'Rock-Paper-Scissor';

var results = document.createElement('div');
results.classList.add('results');
if(maxRound == 5) {
    switch(maxRound) {
        case playerScores > compScores:
            results.textContent = ` Your scores: ${playerScores}, Computer scores: ${compScores}.`;
            results.textContent = ` Congratulations! You have won against the computer! `;
            break;
        case playerScores < compScores:
            results.textContent = ` Your scores: ${playerScores}, Computer scores: ${compScores}.`
            results.textContent = ` Oh no! You have lost against the computer! `;
            break;
        default:
            results.textContent = ` Your scores: ${playerScores}, Computer scores: ${compScores}.`
            results.textContent = `It's a draw battle! No one have won or lost!`;
            break;
    }
}

container.appendChild(welcome);
container.appendChild(results);








