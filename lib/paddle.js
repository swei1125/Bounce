
class Paddle {
  constructor(position, color, degree) {
    this.width = 65;
    this.height = 8;
    this.color = color;
    this.x = position.x;
    this.y = position.y;
    this.status = 1;
    this.degree = degree;
    this.faceDir = degree === Math.PI/180*45 ? 'left' : 'right';
  }

  rotate() {
    this.degree = Math.PI/180*135;
  }
}

export default Paddle;
