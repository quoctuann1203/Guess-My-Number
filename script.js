'use strict';
/* let a = document.querySelector('.message').textContent = 'Correct Number';
console.log(a);

let b = document.querySelector('.score').textContent = 10;
let c = document.querySelector('.number').textContent = 20;

console.log(b,c);

let d = document.querySelector('.guess').value = 12;
console.log(d); */

//////////////////////////
const sercertNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  // When no number in input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';

    // When number in input = sercert Number
  } else if (guess === sercertNumber) {
    document.querySelector('.message').textContent = '🎆 Correct Number';
    document.querySelector('.number').textContent = sercertNumber;
    document.querySelector('.highscore').textContent = score;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When number in input > sercert Number
  } else if (guess > sercertNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 To high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 🤦‍♂️';
      document.querySelector('.score').textContent = 0;
    }

    // When number in input < sercert Number
  } else if (guess < sercertNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 To low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 🤦‍♂️';
      document.querySelector('.score').textContent = 0;
    }
  }
});
