import Paddle from './paddle';
import Ball from './ball';

class Board {
  constructor(ctx, canvas, start, dest, paddles) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.start = start;
    this.dest = dest;
    this.paddles = paddles;
    this.releaseBall = false;
    this.ball = new Ball({x: start.x, y: start.y}, ctx);
    this.dx = 0;
    this.dy = -2;
    this.drawDest = this.drawDest.bind(this);
    this.drawStart = this.drawStart.bind(this);
    this.drawPaddles = this.drawPaddles.bind(this);
    this.won = false;

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
              this.dx = -2;
              break;
            case p.faceDir === 'left' && ball.moveDir === 'down':
              ball.moveDir = 'right';
              this.dy = 0;
              this.dx = 2;
              break;
            case p.faceDir === 'left' && ball.moveDir === 'left':
              ball.moveDir = 'up';
              this.dy = -2;
              this.dx = 0;
              break;
            case p.faceDir === 'left' && ball.moveDir === 'right':
              ball.moveDir = 'down';
              this.dy = 2;
              this.dx = 0;
              break;
            case p.faceDir === 'right' && ball.moveDir === 'up':
              ball.moveDir = 'right';
              this.dy = 0;
              this.dx = 2;
              break;
            case p.faceDir === 'right' && ball.moveDir === 'down':
              ball.moveDir = 'left';
              this.dy = 0;
              this.dx = -2;
              break;
            case p.faceDir === 'right' && ball.moveDir === 'left':
              ball.moveDir = 'down';
              this.dy = 2;
              this.dx = 0;
              break;
            case p.faceDir === 'right' && ball.moveDir === 'right':
              ball.moveDir = 'up';
              this.dy = -2;
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
      clearInterval(1);
      this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
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

      this.canvas.addEventListener("mousedown", this.tryagain.bind(this), false);
    }
  }

  tryagain(e) {
    console.log(this.canvas);
    let x = e.x - this.canvas.offsetLeft;
    let y = e.y - this.canvas.offsetTop;
    if (x >= 180 && x <= 300 && y >= 340 && y <= 370) {
      this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath();
      this.canvas.removeEventListener("mousedown", this.tryagain);
      
      this.setup();
    }
  }

  checkWon(){
    if (this.ball.x === this.dest.x && this.ball.y === this.dest.y) {
      this.won = true;
      clearInterval(1);
      this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath();
      this.drawDest();
      this.drawStart();
      this.ctx.font = "50px Arial";
      this.ctx.strokeText("You Won!", 150, 250);

    }
  }

  collisionCheck(paddle, ball) {
    if ((paddle.x === ball.x && paddle.y === ball.y)) {
      return true;
    }
    return false;
  }

  drawPaddles() {
    this.paddles.forEach(p => {
      this.ctx.save();
      this.ctx.translate(p.x,p.y);
      this.ctx.rotate(p.degree);
      this.ctx.rect(-p.width/2, -p.height/2, p.width, p.height);
      this.ctx.lineWidth = 2;
      this.ctx.strokeStyle = p.color;
      this.ctx.stroke();
      this.ctx.restore();
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
