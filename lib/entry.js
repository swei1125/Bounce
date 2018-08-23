import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext('2d');
  const game = new Game(ctx, canvas);
});
