let playerScores = 0;
let compScores = 0;
let round = 1;

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
    ++round;
    announcingResults();
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
    ++round;
    announcingResults();

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
    ++round;
    announcingResults();
}

function announcingResults() {
    if(round == 5) {
        switch(round) {
            case playerScores > compScores:
                scores.textContent = ` Your scores: ${playerScores}, Computer scores: ${compScores}.`;
                results.textContent = ` Congratulations! You have won against the computer! `;
                break;
            case playerScores < compScores:
                scores.textContent = ` Your scores: ${playerScores}, Computer scores: ${compScores}.`
                results.textContent = ` Oh no! You have lost against the computer! `;
                break;
            default:
                scores.textContent = ` Your scores: ${playerScores}, Computer scores: ${compScores}.`
                results.textContent = `It's a draw battle! No one have won or lost!`;
                break;
        }
    }
}

var paper = document.querySelector('.paper');
paper.addEventListener('click', comparePaper);

var rock = document.querySelector('.rock');
rock.addEventListener('click', compareRock);

var scissor = document.querySelector('.scissor');
scissor.addEventListener('click', compareScissor);

var results = document.createElement('div');
results.classList.add('results');

var rounds = document.createElement('div');
rounds.classList.add('rounds');//need a function to show round number

var scores = document.createElement('div');
scores.classList.add('scores');

var completedGame = document.createElement('div');
noGame.classList.add('completedGame'); //need a fn to stop game after 5


container.appendChild(welcome);
container.appendChild(results);
container.appendChild(rounds);
container.appendChild(scores);
container.appendChild(completedGame);







