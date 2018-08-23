import Paddle from './paddle';
const blue = "#1897c7";
const red  = "#ec4a52";
export default [
  {
    title: 'LEVEL ONE',
    start: {x: 150, y: 590},
    dest: {x: 350, y: 50},
    paddles: [
      {pos: {x: 150, y: 300}, color: blue, degree: Math.PI/180*45},
      {pos: {x: 350, y: 300}, color: blue, degree: Math.PI/180*135}
    ]
  },
  {
    title: 'LEVEL TWO',
    start: {x: 150, y: 590},
    dest: {x: 150, y: 50},
    paddles: [
      {pos: {x: 150, y: 400}, color: blue, degree: Math.PI/180*45},
      {pos: {x: 350, y: 400}, color: blue, degree: Math.PI/180*135},
      {pos: {x: 150, y: 250}, color: blue, degree: Math.PI/180*135},
      {pos: {x: 350, y: 250}, color: blue, degree: Math.PI/180*135}
    ]
  },
  {
    title: 'LEVEL THREE',
    start: {x: 140, y: 590},
    dest: {x: 300, y: 50},
    paddles: [
      {pos: {x: 200, y: 170}, color: blue, degree: Math.PI/180*45},
      {pos: {x: 300, y: 170}, color: blue, degree: Math.PI/180*135},
      {pos: {x: 200, y: 230}, color: blue, degree: Math.PI/180*135},
      {pos: {x: 300, y: 230}, color: blue, degree: Math.PI/180*45},
      {pos: {x: 140, y: 290}, color: blue, degree: Math.PI/180*135},
      {pos: {x: 360, y: 290}, color: blue, degree: Math.PI/180*45},
      {pos: {x: 300, y: 290}, color: blue, degree: Math.PI/180*45},
      {pos: {x: 140, y: 350}, color: blue, degree: Math.PI/180*45},
      {pos: {x: 360, y: 350}, color: blue, degree: Math.PI/180*135},
      {pos: {x: 140, y: 410}, color: blue, degree: Math.PI/180*135},
      {pos: {x: 360, y: 410}, color: blue, degree: Math.PI/180*45},

    ]
  },
  {
    title: 'LEVEL FOUR',
    start: {x: 200, y: 590},
    dest: {x: 400, y: 50},
    paddles: [
      {pos: {x: 320, y: 260}, color: blue, degree: Math.PI/180*135},
      {pos: {x: 260, y: 320}, color: blue, degree: Math.PI/180*135},
      {pos: {x: 140, y: 380}, color: blue, degree: Math.PI/180*45},
      {pos: {x: 200, y: 380}, color: blue, degree: Math.PI/180*45},
      {pos: {x: 400, y: 380}, color: red, degree: Math.PI/180*45}
    ]
  },
  {
    title: 'LEVEL FIVE',
    start: {x: 400, y: 590},
    dest: {x: 160, y: 50},
    paddles: [
      {pos: {x: 100, y: 150}, color: red, degree: Math.PI/180*45},
      {pos: {x: 160, y: 150}, color: red, degree: Math.PI/180*45},
      {pos: {x: 340, y: 150}, color: blue, degree: Math.PI/180*45},
      {pos: {x: 400, y: 150}, color: blue, degree: Math.PI/180*135},
      {pos: {x: 340, y: 290}, color: red, degree: Math.PI/180*135},
      {pos: {x: 160, y: 290}, color: red, degree: Math.PI/180*45},
      {pos: {x: 340, y: 370}, color: red, degree: Math.PI/180*135},
      {pos: {x: 160, y: 370}, color: red, degree: Math.PI/180*45},
      {pos: {x: 100, y: 500}, color: blue, degree: Math.PI/180*135},
      {pos: {x: 160, y: 500}, color: blue, degree: Math.PI/180*45},
      {pos: {x: 340, y: 500}, color: red, degree: Math.PI/180*45},
      {pos: {x: 400, y: 500}, color: red, degree: Math.PI/180*45},
    ]
  },
  {
    title: 'LEVEL SIX',
    start: {x: 250, y: 590},
    dest: {x: 250, y: 50},
    paddles: [
      {pos: {x: 190, y: 170}, color: blue, degree: Math.PI/180*135},
      {pos: {x: 250, y: 170}, color: blue, degree: Math.PI/180*135},
      {pos: {x: 310, y: 170}, color: blue, degree: Math.PI/180*135},
      {pos: {x: 130, y: 265}, color: blue, degree: Math.PI/180*45},
      {pos: {x: 250, y: 265}, color: red, degree: Math.PI/180*45},
      {pos: {x: 370, y: 265}, color: blue, degree: Math.PI/180*135},
      {pos: {x: 190, y: 325}, color: red, degree: Math.PI/180*135},
      {pos: {x: 310, y: 325}, color: red, degree: Math.PI/180*135},
      {pos: {x: 130, y: 385}, color: blue, degree: Math.PI/180*135},
      {pos: {x: 250, y: 385}, color: red, degree: Math.PI/180*45},
      {pos: {x: 370, y: 385}, color: blue, degree: Math.PI/180*45},
      {pos: {x: 310, y: 480}, color: blue, degree: Math.PI/180*45},
      {pos: {x: 190, y: 480}, color: blue, degree: Math.PI/180*135},
    ]
  },
  {
    title: 'LEVEL SEVEN',
    start: {x: 190, y: 590},
    dest: {x: 250, y: 50},
    paddles: [
      {pos: {x: 190, y: 150}, color: red, degree: Math.PI/180*135},
      {pos: {x: 250, y: 150}, color: red, degree: Math.PI/180*45},
      {pos: {x: 310, y: 210}, color: red, degree: Math.PI/180*45},
      {pos: {x: 250, y: 210}, color: red, degree: Math.PI/180*135},
      {pos: {x: 370, y: 270}, color: red, degree: Math.PI/180*45},
      {pos: {x: 310, y: 270}, color: red, degree: Math.PI/180*135},
      {pos: {x: 250, y: 270}, color: blue, degree: Math.PI/180*45},
      {pos: {x: 190, y: 270}, color: blue, degree: Math.PI/180*135},
      {pos: {x: 370, y: 330}, color: red, degree: Math.PI/180*135},
      {pos: {x: 310, y: 330}, color: red, degree: Math.PI/180*45},
      {pos: {x: 250, y: 330}, color: blue, degree: Math.PI/180*135},
      {pos: {x: 190, y: 330}, color: blue, degree: Math.PI/180*45},
      {pos: {x: 310, y: 390}, color: red, degree: Math.PI/180*135},
      {pos: {x: 250, y: 390}, color: red, degree: Math.PI/180*45},
      {pos: {x: 250, y: 450}, color: red, degree: Math.PI/180*135},
      {pos: {x: 190, y: 450}, color: red, degree: Math.PI/180*45},
    ]
  },
  {
    title: 'LEVEL EIGHT',
    start: {x: 370, y: 575},
    dest: {x: 130, y: 580},
    paddles: [
      {pos: {x: 190, y: 205}, color: red, degree: Math.PI/180*135},
      {pos: {x: 310, y: 205}, color: red, degree: Math.PI/180*45},
      {pos: {x: 130, y: 265}, color: red, degree: Math.PI/180*135},
      {pos: {x: 190, y: 265}, color: red, degree: Math.PI/180*45},
      {pos: {x: 310, y: 265}, color: red, degree: Math.PI/180*135},
      {pos: {x: 370, y: 265}, color: red, degree: Math.PI/180*45},
      {pos: {x: 130, y: 325}, color: red, degree: Math.PI/180*45},
      {pos: {x: 190, y: 325}, color: red, degree: Math.PI/180*135},
      {pos: {x: 310, y: 325}, color: red, degree: Math.PI/180*45},
      {pos: {x: 370, y: 325}, color: red, degree: Math.PI/180*135},
      {pos: {x: 130, y: 385}, color: blue, degree: Math.PI/180*135},
      {pos: {x: 190, y: 385}, color: blue, degree: Math.PI/180*45},
      {pos: {x: 310, y: 385}, color: blue, degree: Math.PI/180*135},
      {pos: {x: 370, y: 385}, color: blue, degree: Math.PI/180*45},
    ]
  },

];
