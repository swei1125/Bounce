import Paddle from './paddle';

export default [
  {
    start: {x: 150, y: 590},
    dest: {x: 350, y: 50},
    paddles: [
      new Paddle({x: 150, y: 300}, '#26a0da', Math.PI/180*45),
      new Paddle({x: 350, y: 300}, '#26a0da', Math.PI/180*135)
    ]
  },

];
