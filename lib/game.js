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
    this.makeSound();
    this.updateLevel();
    this.board.startScreen();
    this.init();
  }
  makeSound() {
    this.sound = document.querySelector("#flip");
    this.sound.playbackRate = 2.5;
  }
  updateLevel() {
    this.startPos = this.level.start;
    this.dest = this.level.dest;
    this.paddles = this.level.paddles;
  }

  init() {
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
          this.sound.play();
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
    }, 13);
  }
  goNext() {
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
    this.ctx.beginPath();
    this.board.drawDest();
    this.board.drawStart();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.font = "70px Wendy One";
    this.ctx.strokeStyle='#ec4a52';
    this.ctx.strokeText("You Won!", 95, 250);
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.font = "40px Wendy One";
    this.ctx.fillStyle = 'white';
    this.ctx.fillText("Next", 210, 350);
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.rect(191, 310, 128, 58);
    this.ctx.strokeStyle = 'white';
    this.ctx.stroke();
    this.ctx.closePath();

    const next = (e) => {
      this.next = true;
      let x = e.x - this.canvas.offsetLeft;
      let y = e.y - this.canvas.offsetTop;
      if (x >= 191 && x <= 319 && y <= 368 && y >= 310) {
        this.levelNum += 1;
        this.level = Levels[this.levelNum];
        this.board = new Board(this.ctx, this.canvas, this.level);
        this.updateLevel();
        this.init();
      }
    };
    const removeNext = (e) => {
      let x = e.x - this.canvas.offsetLeft;
      let y = e.y - this.canvas.offsetTop;
      if (x >= 191 && x <= 318 && y <= 362 && y >= 310) {
        this.canvas.removeEventListener("mousedown", next);
      }
    };

    this.canvas.addEventListener("mousedown", next);
    this.canvas.addEventListener("mouseup", removeNext);
  }
  endQuote() {
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
    this.ctx.beginPath();
    this.ctx.font = "50px Wendy One";
    this.ctx.strokeText("You Complete All!", 45, 250);
    this.ctx.font = "30px Wendy One";
    this.ctx.fillStyle = '#CB3066';
    this.ctx.fillText("More levels will come later", 65, 350);
    this.ctx.beginPath();
  }
  finish() {
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
    this.ctx.beginPath();
    this.ctx.font = "70px Wendy One";
    this.ctx.strokeStyle='#ec4a52';
    this.ctx.strokeText("GAME OVER", 50, 250);
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.font = "40px Wendy One";
    this.ctx.fillStyle='white';
    this.ctx.fillText("Try again", 157, 352);
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.rect(140, 312, 220, 60);
    this.ctx.strokeStyle = "white";
    this.ctx.stroke();
    this.ctx.closePath();

    const tryagain = (e) => {
      let x = e.x - this.canvas.offsetLeft;
      let y = e.y - this.canvas.offsetTop;
      if (x >= 140 && x <= 360 && y >= 312 && y <= 372) {
        this.retry = true;
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        this.board = new Board(this.ctx, this.canvas, this.level);
        this.init();
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
