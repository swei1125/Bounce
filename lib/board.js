import Paddle from './paddle';
import Ball from './ball';
import WebFont from 'webfontloader';

class Board {
  constructor(ctx, canvas, level) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.start = level.start;
    this.dest = level.dest;
    this.paddles = this.makePaddles(level.paddles);
    this.releaseBall = false;
    this.ball = new Ball({x: level.start.x, y: level.start.y}, ctx);
    this.dx = 0;
    this.dy = -5;
    this.drawDest = this.drawDest.bind(this);
    this.drawStart = this.drawStart.bind(this);
    this.drawPaddles = this.drawPaddles.bind(this);
    this.makeSound();
    this.loadText();
    this.won = false;
    this.over = false;
  }
  loadText() {
    const that = this;
    WebFont.load({
      google: {
        families: ['Wendy One']
      },
    });
  }

  makePaddles(paddles) {
    return paddles.map(p => {
      return new Paddle(p.pos, p.color, p.degree);
    });
  }
  startScreen() {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.font = "bold 70px 'Arial Black'";
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 3;
    this.ctx.strokeText("Click", 145, 200);
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.font = "bold 70px 'Arial Black'";
    this.ctx.strokeStyle = "white";
    this.ctx.strokeText("To", 200, 300);
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.font = "bold 70px 'Arial Black'";
    this.ctx.strokeStyle = "white";
    this.ctx.strokeText("Start", 145, 400);
    this.ctx.closePath();
    this.ctx.restore();
  }

  setup() {
    this.drawPaddles();
    this.drawDest();
    this.drawStart();
  }

  draw() {
    let { dx, dy } = this;
    if (this.releaseBall) {
      const ball = this.ball;
      this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath();
      this.drawPaddles();
      this.drawStart();
      this.drawDest();
      this.drawBall();
      this.checkWon();
      this.checkOver();

      this.paddles.forEach(p => {
        if (this.collisionCheck(p, ball)) {
          switch (true) {
            case p.faceDir === 'left' && ball.moveDir === 'up':
              ball.moveDir = 'left';
              this.dy = 0;
              this.dx = -5;
              break;
            case p.faceDir === 'left' && ball.moveDir === 'down':
              ball.moveDir = 'right';
              this.dy = 0;
              this.dx = 5;
              break;
            case p.faceDir === 'left' && ball.moveDir === 'left':
              ball.moveDir = 'up';
              this.dy = -5;
              this.dx = 0;
              break;
            case p.faceDir === 'left' && ball.moveDir === 'right':
              ball.moveDir = 'down';
              this.dy = 5;
              this.dx = 0;
              break;
            case p.faceDir === 'right' && ball.moveDir === 'up':
              ball.moveDir = 'right';
              this.dy = 0;
              this.dx = 5;
              break;
            case p.faceDir === 'right' && ball.moveDir === 'down':
              ball.moveDir = 'left';
              this.dy = 0;
              this.dx = -5;
              break;
            case p.faceDir === 'right' && ball.moveDir === 'left':
              ball.moveDir = 'down';
              this.dy = 5;
              this.dx = 0;
              break;
            case p.faceDir === 'right' && ball.moveDir === 'right':
              ball.moveDir = 'up';
              this.dy = -5;
              this.dx = 0;
              break;
          }
        }
      });
      this.ball.y += this.dy;
      this.ball.x += this.dx;
    }
  }

  checkOver() {
    const ball = this.ball;
    if ((ball.x > this.canvas.width) || (ball.x < 0) || (ball.y > this.canvas.height) || (ball.y < 0)) {
      this.over = true;
      this.sound = document.querySelector("#over");
      this.sound.playbackRate = 1.0;
      this.sound.play();
    }
  }

  checkWon(){
    if (this.ball.x === this.dest.x && this.ball.y === this.dest.y) {
      this.won = true;
      this.sound = document.querySelector("#win");
      this.sound.playbackRate = 1.0;
      this.sound.play();
    }
  }

  collisionCheck(paddle, ball) {
    if ((paddle.status === 1 && paddle.x === ball.x && paddle.y === ball.y )) {
      this.sound.play();
      if (paddle.color === '#ec4a52') {
        paddle.status = 0;
      }
      return true;
    }
    return false;
  }

  drawPaddles() {
    this.paddles.forEach(p => {
      if (p.status === 1) {
        this.ctx.beginPath();
        this.ctx.save();
        this.ctx.translate(p.x,p.y);
        this.ctx.rotate(p.degree);
        this.ctx.rect(-p.width/2, -p.height/2, p.width, p.height);
        this.ctx.lineWidth = 4;
        this.ctx.strokeStyle = p.color;
        this.ctx.stroke();
        this.ctx.restore();
        this.ctx.closePath();
      }
    });
  }

  drawStart() {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.moveTo(this.start.x, this.start.y);
    this.ctx.lineTo(this.start.x - 10, this.start.y + 20);
    this.ctx.lineTo(this.start.x + 10, this.start.y + 20);
    this.ctx.closePath();
    this.ctx.lineWidth = 4;
    this.ctx.strokeStyle = 'white';
    this.ctx.stroke();
    this.ctx.restore();
  }

  drawDest() {
    this.ctx.beginPath();
    this.ctx.arc(this.dest.x, this.dest.y, 20, 0, Math.PI*2);
    this.ctx.lineWidth = 4;
    this.ctx.strokeStyle = "white";
    this.ctx.stroke();
    this.ctx.closePath();
  }

  drawBall() {
    this.ball.draw();
  }
  makeSound(src) {
    this.sound = document.querySelector("#hit");
    this.sound.playbackRate = 5.0;
  }
}

export default Board;
