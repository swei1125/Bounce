import Board from './board';
import Paddle from './paddle';
import Ball from './ball';
import Levels from './levels';

class Game {
  constructor(ctx, canvas) {
    this.level = Levels[0];
    this.levelNum = 0;
    this.canvas = canvas;
    this.ctx = ctx;
    this.board = new Board(this.ctx, this.canvas, this.level);
    this.retry = false;
    this.next = false;
    this.updateLevel();
    this.board.startScreen();
    this.listenKey();
  }
  updateLevel() {
    this.startPos = this.level.start;
    this.dest = this.level.dest;
    this.paddles = this.level.paddles;
  }

  listenKey() {
    const start = (e) => {
      this.ctx.clearRect(0 ,0 , this.canvas.width,this.canvas.height);
      this.ctx.beginPath();
      this.board.setup();
      this.canvas.removeEventListener("mousedown", start);
      this.canvas.addEventListener("mousedown", rotate, false);
      document.addEventListener("keydown", releaseBall);
      document.addEventListener("keyup", removeKeydown);
    };

    const rotate = (e) => {
      this.ctx.clearRect(0 ,100 , this.canvas.width,this.canvas.height - 200);
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
    if (this.retry || this.next) {
      start();
    }
  }
  play() {
    const interval = setInterval(() => {
      this.board.draw.bind(this.board)();
      if (this.board.won) {
        clearInterval(interval);
        if (this.levelNum === Levels.length - 1) {
          this.endQuote.bind(this)();
        }else {
          this.next = false;
          this.goNext.bind(this)();
        }

      }
      if (this.board.over) {
        this.retry = false;
        clearInterval(interval);
        this.finish.bind(this)();
      }
    }, 10);
  }
  goNext() {
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
    this.ctx.beginPath();
    this.board.drawDest();
    this.board.drawStart();
    this.ctx.font = "50px sans-serif";
    this.ctx.strokeText("You Won!", 150, 250);
    this.ctx.font = "30px sans-serif";
    this.ctx.fillStyle = '#CB356B';
    this.ctx.fillText("Next", 220, 350);
    this.ctx.beginPath();
    this.ctx.rect(191, 320, 120, 40);
    this.ctx.strokeStyle = '#CB356B';
    this.ctx.stroke();
    this.ctx.closePath();

    const next = (e) => {
      this.next = true;
      let x = e.x - this.canvas.offsetLeft;
      let y = e.y - this.canvas.offsetTop;
      if (x >= 191 && x <= 311 && y <= 360 && y >= 320) {
        this.levelNum += 1;
        this.level = Levels[this.levelNum];
        this.board = new Board(this.ctx, this.canvas, this.level);
        this.updateLevel();
        this.listenKey();
      }
    };
    const removeNext = (e) => {
      let x = e.x - this.canvas.offsetLeft;
      let y = e.y - this.canvas.offsetTop;
      if (x >= 191 && x <= 311 && y <= 360 && y >= 320) {
        this.canvas.removeEventListener("mousedown", next);
      }
    };

    this.canvas.addEventListener("mousedown", next);
    this.canvas.addEventListener("mouseup", removeNext);
  }
  endQuote() {
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
    this.ctx.beginPath();
    this.ctx.font = "50px sans-serif";
    this.ctx.strokeText("You Complete All!", 60, 250);
    this.ctx.font = "30px sans-serif";
    this.ctx.fillStyle = '#CB356B';
    this.ctx.fillText("More levels will come later", 80, 350);
    this.ctx.beginPath();
  }
  finish() {
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
    this.ctx.beginPath();
    this.ctx.font = "40px Arial";
    this.ctx.strokeStyle='red';
    this.ctx.strokeText("GAME OVER", 125, 250);
    this.ctx.font = "30px sans-serif";
    this.ctx.fillStyle='#f64f59';
    this.ctx.fillText("Try again", 180, 350);
    this.ctx.beginPath();
    this.ctx.rect(163, 312, 160, 60);
    let grd = this.ctx.createLinearGradient(0,0,this.canvas.width,0);
    grd.addColorStop("0","#2193b0");
    grd.addColorStop("1.0","#6dd5ed");
    this.ctx.strokeStyle = grd;
    this.ctx.stroke();
    this.ctx.closePath();

    const tryagain = (e) => {
      let x = e.x - this.canvas.offsetLeft;
      let y = e.y - this.canvas.offsetTop;
      if (x >= 163 && x <= 323 && y >= 312 && y <= 372) {
        this.retry = true;
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        this.level = Levels[this.levelNum];
        this.board = new Board(this.ctx, this.canvas, this.level);
        this.listenKey();
      }
    };
    const removeMousedown = (e) => {
      let x = e.x - this.canvas.offsetLeft;
      let y = e.y - this.canvas.offsetTop;
      if (x >= 163 && x <= 323 && y >= 312 && y <= 372) {
        this.canvas.removeEventListener("mousedown", tryagain);
      }
    };

    this.canvas.addEventListener("mousedown", tryagain);
    this.canvas.addEventListener("mouseup", removeMousedown);
  }

}


export default Game;
