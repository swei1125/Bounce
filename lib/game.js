import Board from './board';
import Paddle from './paddle';
import Ball from './ball';
import Levels from './levels';

const Paddles = [
  new Paddle({x: 150, y: 300}, '#26a0da', Math.PI/180*45),
  new Paddle({x: 350, y: 300}, '#26a0da', Math.PI/180*135)
];
const Start = {x: 150, y: 590};
const Des = {x: 350, y: 50};

class Game {
  constructor(ctx, canvas) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.board = new Board(ctx, canvas, Start, Des, Paddles);
    this.board.startScreen();
    this.listenKey();
  }

  listenKey() {
    const start = (e) => {
      this.ctx.clearRect(0 ,0 , this.canvas.width,this.canvas.height);
      this.board.setup();
      this.canvas.removeEventListener("mousedown", start);
      this.canvas.addEventListener("mousedown", rotate, false);
      document.addEventListener("keydown", releaseBall);
      document.addEventListener("keyup", removeKeydown);
    };

    const rotate = (e) => {
      this.ctx.clearRect(0 ,130 , this.canvas.width,this.canvas.height - 200);
      this.ctx.beginPath();
      let x = e.x - this.canvas.offsetLeft;
      let y = e.y - this.canvas.offsetTop;

      this.board.paddles.map(p => {
        const num = Math.sqrt(Math.pow(p.width, 2) / 2) / 2;
        if (p.x - num <= x && x <= p.x + num && p.y - num <= y && y <= p.y + num) {
          p.degree = p.degree === Math.PI/180*45 ? Math.PI/180*135 : Math.PI/180*45;
          p.faceDir = p.degree === Math.PI/180*45 ? 'left' : 'right';
        }
        return p;
      });
      this.board.drawPaddles(this.board.paddles);
    };

    const releaseBall = (e) => {
      if (e.code === 'Space') {
        this.canvas.removeEventListener("mousedown", rotate);
        this.board.releaseBall = true;
        this.play();
      }
    };
    const removeKeydown = (e) => {
      if (e.code === 'Space') {
        document.removeEventListener("keydown", releaseBall);
      }
    };

    this.canvas.addEventListener("mousedown", start, false);

  }
  play() {
    setInterval(this.board.draw.bind(this.board), 5);
  }
}


export default Game;
