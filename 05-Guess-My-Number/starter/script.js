'use strict';

let numeroSecreto = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const mostraMensagem = function (mensagem) {
  document.querySelector('.message').textContent = mensagem;
};

document.querySelector('.check').addEventListener('click', function () {
  const valor = Number(document.querySelector('.guess').value);
  console.log(typeof valor, valor);

  if (!valor) {
    mostraMensagem('❗Insert a number!❗');
  } else if (valor === numeroSecreto) {
    mostraMensagem('🎉 Correct Number! 🎉');
    document.body.style.background = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = numeroSecreto;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (valor !== numeroSecreto) {
    if (score > 1) {
      mostraMensagem(
        valor > numeroSecreto ? '📈 Too high!! 📈' : '📉 Too low!! 📉'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      mostraMensagem('Game Over!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// restart
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  numeroSecreto = Math.trunc(Math.random() * 20) + 1;

  mostraMensagem('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  console.log('clicou');
});
