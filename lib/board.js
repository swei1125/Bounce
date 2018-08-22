import Paddle from './paddle';
import Ball from './ball';

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
    this.won = false;
    this.over = false;
  }

  makePaddles(paddles) {
    return paddles.map(p => {
      return new Paddle(p.pos, p.color, p.degree);
    });
  }
  startScreen() {
    this.ctx.beginPath();
    this.ctx.font = "50px Arial";
    let gradient = this.ctx.createLinearGradient(0,0,this.canvas.width,0);
    gradient.addColorStop("0","#12c2e9");
    gradient.addColorStop("0.5","#c471ed");
    gradient.addColorStop("1.0","#f64f59");
    this.ctx.fillStyle = gradient;
    this.ctx.fillText("Click to Start", 105, 300);
    this.ctx.closePath();
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
    }
  }


  checkWon(){
    if (this.ball.x === this.dest.x && this.ball.y === this.dest.y) {
      this.won = true;
    }
  }

  collisionCheck(paddle, ball) {
    if ((paddle.status === 1 && paddle.x === ball.x && paddle.y === ball.y )) {
      if (paddle.color === '#b92b27') {
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
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = p.color;
        this.ctx.stroke();
        this.ctx.restore();
        this.ctx.closePath();
      }
    });
  }

  drawStart() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.start.x, this.start.y);
    this.ctx.lineTo(this.start.x - 10, this.start.y + 20);
    this.ctx.lineTo(this.start.x + 10, this.start.y + 20);
    this.ctx.closePath();
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = '#FF0067';
    this.ctx.stroke();
  }

  drawDest() {
    this.ctx.beginPath();
    this.ctx.arc(this.dest.x, this.dest.y, 20, 0, Math.PI*2);
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = "#FF0067";
    this.ctx.stroke();
    this.ctx.closePath();
  }

  drawBall() {
    this.ball.draw();
  }
}

export default Board;
