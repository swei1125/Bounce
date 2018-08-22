import Levels from './levels';
import Ball from './ball';

class Game {
  constructor(ctx, canvas) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.level = Levels[0];
    this.start = Levels[0].start;
    this.dest = Levels[0].dest;
    this.paddles = Levels[0].paddles;
    this.releaseBall = false;
    this.dx = 0;
    this.dy = -2;
    this.ball = new Ball({x: this.start.x, y: this.start.y}, ctx);
    this.startScreen();
    this.listenKey();
    this.drawDest = this.drawDest.bind(this);
    this.drawStart = this.drawStart.bind(this);
    this.drawPaddles = this.drawPaddles.bind(this);
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
    this.ctx.clearRect(0 ,0 , this.canvas.width,this.canvas.height);
    this.ctx.beginPath();
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
      // this.checkWon();
      // this.checkOver();

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

  listenKey() {
    const setup = (e) => {
      this.ctx.clearRect(0 ,0 , this.canvas.width,this.canvas.height);
      this.ctx.beginPath();
      this.setup();
      this.canvas.addEventListener("click", rotate);
      document.addEventListener("keydown", releaseBall);
      document.addEventListener("keyup", removeKeydown);
    };
    const releaseBall = (e) => {
      if (e.code === 'Space') {
        this.canvas.removeEventListener("mousedown", rotate);
        this.releaseBall = true;
        setInterval(this.draw.bind(this), 5);
      }
    };
    const removeKeydown = (e) => {
      if (e.code === 'Space') {
        document.removeEventListener("keydown", this.release);
      }
    };
    const removeMousedown = (e) => {
      this.canvas.removeEventListener('mouseup', removeMousedown);
    };
    const rotate = (e) => {
      this.ctx.clearRect(0 ,130 , this.canvas.width,this.canvas.height - 200);
      this.ctx.beginPath();
      let x = e.x - this.canvas.offsetLeft;
      let y = e.y - this.canvas.offsetTop;

      this.paddles.map(p => {
        const num = Math.sqrt(Math.pow(p.width, 2) / 2) / 2;
        if (p.x - num <= x && x <= p.x + num && p.y - num <= y && y <= p.y + num) {
          p.degree = p.degree === Math.PI/180*45 ? Math.PI/180*135 : Math.PI/180*45;
          p.faceDir = p.degree === Math.PI/180*45 ? 'left' : 'right';
        }
        return p;
      });
      this.drawPaddles();
    };

    this.canvas.addEventListener("mousedown", setup);
    this.canvas.addEventListener("mouseup", removeMousedown);
  }

  release(e) {
    if (e.code === 'Space') {
      this.canvas.removeEventListener("mousedown", this.rotate);
      this.releaseBall = true;
      this.play();
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
  drawDest() {
    this.ctx.beginPath();
    this.ctx.arc(this.dest.x, this.dest.y, 20, 0, Math.PI*2);
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = "#FF0067";
    this.ctx.stroke();
    this.ctx.closePath();
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
  drawBall() {
    this.ball.draw();
  }
}

export default Game;
