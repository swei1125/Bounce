import Game from './game';
import newGame from './newGame';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext('2d');
  const game = new Game(ctx, canvas);

});
