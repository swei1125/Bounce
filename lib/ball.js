class Ball {
  constructor(position, ctx) {
    this.radius = 8;
    this.x = position.x;
    this.y = position.y;
    this.moveDir = 'up';
    this.ctx = ctx;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0 , Math.PI*2);
    this.ctx.fillStyle = 'white';
    this.ctx.fill();
    this.ctx.closePath();
  }
}

export default Ball;
