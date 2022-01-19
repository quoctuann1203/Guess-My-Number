'use strict';
/* let a = document.querySelector('.message').textContent = 'Correct Number';
console.log(a);

let b = document.querySelector('.score').textContent = 10;
let c = document.querySelector('.number').textContent = 20;

console.log(b,c);

let d = document.querySelector('.guess').value = 12;
console.log(d); */

//////////////////////////
let sercertNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  // When no number in input
  if (!guess) {
    displayMessage('⛔ No Number');

    // When number in input = sercert Number
  } else if (guess === sercertNumber) {
    displayMessage('🎆 Correct Number');
    document.querySelector('.number').textContent = sercertNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    
    // When number in input > sercert Number
  } else if(guess !== sercertNumber){
    if (score > 1) {
      displayMessage(guess > sercertNumber ? '📈 To high' : '📉 To low')
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game 🤦‍♂️')
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Buttion Again
document.querySelector('.again').addEventListener('click', function () {
  // location.reload();
  sercertNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
