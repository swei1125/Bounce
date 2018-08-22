import Paddle from './paddle';

export default [
  {
    title: 'LEVEL ONE',
    start: {x: 150, y: 590},
    dest: {x: 350, y: 50},
    paddles: [
      {pos: {x: 150, y: 300}, color: '#26a0da', degree: Math.PI/180*45},
      {pos: {x: 350, y: 300}, color: '#26a0da', degree: Math.PI/180*135}
    ]
  },
  {
    title: 'LEVEL TWO',
    start: {x: 150, y: 590},
    dest: {x: 150, y: 50},
    paddles: [
      {pos: {x: 150, y: 400}, color: '#26a0da', degree: Math.PI/180*45},
      {pos: {x: 350, y: 400}, color: '#26a0da', degree: Math.PI/180*135},
      {pos: {x: 150, y: 250}, color: '#26a0da', degree: Math.PI/180*135},
      {pos: {x: 350, y: 250}, color: '#26a0da', degree: Math.PI/180*135}
    ]
  },
  {
    title: 'LEVEL THREE',
    start: {x: 140, y: 590},
    dest: {x: 300, y: 50},
    paddles: [
      {pos: {x: 200, y: 170}, color: '#26a0da', degree: Math.PI/180*45},
      {pos: {x: 300, y: 170}, color: '#26a0da', degree: Math.PI/180*135},
      {pos: {x: 200, y: 230}, color: '#26a0da', degree: Math.PI/180*135},
      {pos: {x: 300, y: 230}, color: '#26a0da', degree: Math.PI/180*45},
      {pos: {x: 140, y: 290}, color: '#26a0da', degree: Math.PI/180*135},
      {pos: {x: 360, y: 290}, color: '#26a0da', degree: Math.PI/180*45},
      {pos: {x: 300, y: 290}, color: '#26a0da', degree: Math.PI/180*45},
      {pos: {x: 140, y: 350}, color: '#26a0da', degree: Math.PI/180*45},
      {pos: {x: 360, y: 350}, color: '#26a0da', degree: Math.PI/180*135},
      {pos: {x: 140, y: 410}, color: '#26a0da', degree: Math.PI/180*135},
      {pos: {x: 360, y: 410}, color: '#26a0da', degree: Math.PI/180*45},

    ]
  },
  {
    title: 'LEVEL FOUR',
    start: {x: 200, y: 590},
    dest: {x: 400, y: 50},
    paddles: [
      {pos: {x: 320, y: 260}, color: '#26a0da', degree: Math.PI/180*135},
      {pos: {x: 260, y: 320}, color: '#26a0da', degree: Math.PI/180*135},
      {pos: {x: 140, y: 380}, color: '#26a0da', degree: Math.PI/180*45},
      {pos: {x: 200, y: 380}, color: '#26a0da', degree: Math.PI/180*45},
      {pos: {x: 400, y: 380}, color: '#b92b27', degree: Math.PI/180*45}
    ]
  },
  {
    title: 'LEVEL FIVE',
    start: {x: 400, y: 590},
    dest: {x: 160, y: 50},
    paddles: [
      {pos: {x: 100, y: 150}, color: '#b92b27', degree: Math.PI/180*45},
      {pos: {x: 160, y: 150}, color: '#b92b27', degree: Math.PI/180*45},
      {pos: {x: 340, y: 150}, color: '#26a0da', degree: Math.PI/180*45},
      {pos: {x: 400, y: 150}, color: '#26a0da', degree: Math.PI/180*135},
      {pos: {x: 340, y: 290}, color: '#b92b27', degree: Math.PI/180*135},
      {pos: {x: 160, y: 290}, color: '#b92b27', degree: Math.PI/180*45},
      {pos: {x: 340, y: 370}, color: '#b92b27', degree: Math.PI/180*135},
      {pos: {x: 160, y: 370}, color: '#b92b27', degree: Math.PI/180*45},
      {pos: {x: 100, y: 500}, color: '#26a0da', degree: Math.PI/180*135},
      {pos: {x: 160, y: 500}, color: '#26a0da', degree: Math.PI/180*45},
      {pos: {x: 340, y: 500}, color: '#b92b27', degree: Math.PI/180*45},
      {pos: {x: 400, y: 500}, color: '#b92b27', degree: Math.PI/180*45},
    ]
  },
  {
    title: 'LEVEL SIX',
    start: {x: 250, y: 590},
    dest: {x: 250, y: 50},
    paddles: [
      {pos: {x: 190, y: 170}, color: '#26a0da', degree: Math.PI/180*135},
      {pos: {x: 250, y: 170}, color: '#26a0da', degree: Math.PI/180*135},
      {pos: {x: 310, y: 170}, color: '#26a0da', degree: Math.PI/180*135},
      {pos: {x: 130, y: 265}, color: '#26a0da', degree: Math.PI/180*45},
      {pos: {x: 250, y: 265}, color: '#b92b27', degree: Math.PI/180*45},
      {pos: {x: 370, y: 265}, color: '#26a0da', degree: Math.PI/180*135},
      {pos: {x: 190, y: 325}, color: '#b92b27', degree: Math.PI/180*135},
      {pos: {x: 310, y: 325}, color: '#b92b27', degree: Math.PI/180*135},
      {pos: {x: 130, y: 385}, color: '#26a0da', degree: Math.PI/180*135},
      {pos: {x: 250, y: 385}, color: '#b92b27', degree: Math.PI/180*45},
      {pos: {x: 370, y: 385}, color: '#26a0da', degree: Math.PI/180*45},
      {pos: {x: 310, y: 480}, color: '#26a0da', degree: Math.PI/180*45},
      {pos: {x: 190, y: 480}, color: '#26a0da', degree: Math.PI/180*135},
    ]
  },
  {
    title: 'LEVEL SEVEN',
    start: {x: 190, y: 590},
    dest: {x: 250, y: 50},
    paddles: [
      {pos: {x: 190, y: 160}, color: '#b92b27', degree: Math.PI/180*135},
      {pos: {x: 250, y: 160}, color: '#b92b27', degree: Math.PI/180*45},
      {pos: {x: 310, y: 220}, color: '#b92b27', degree: Math.PI/180*45},
      {pos: {x: 250, y: 220}, color: '#b92b27', degree: Math.PI/180*135},
      {pos: {x: 370, y: 280}, color: '#b92b27', degree: Math.PI/180*45},
      {pos: {x: 310, y: 280}, color: '#b92b27', degree: Math.PI/180*135},
      {pos: {x: 250, y: 280}, color: '#26a0da', degree: Math.PI/180*45},
      {pos: {x: 190, y: 280}, color: '#26a0da', degree: Math.PI/180*135},
      {pos: {x: 370, y: 330}, color: '#b92b27', degree: Math.PI/180*135},
      {pos: {x: 310, y: 330}, color: '#b92b27', degree: Math.PI/180*45},
      {pos: {x: 250, y: 330}, color: '#26a0da', degree: Math.PI/180*135},
      {pos: {x: 190, y: 330}, color: '#26a0da', degree: Math.PI/180*45},
      {pos: {x: 310, y: 390}, color: '#b92b27', degree: Math.PI/180*135},
      {pos: {x: 250, y: 390}, color: '#b92b27', degree: Math.PI/180*45},
      {pos: {x: 250, y: 450}, color: '#b92b27', degree: Math.PI/180*135},
      {pos: {x: 190, y: 450}, color: '#b92b27', degree: Math.PI/180*45},
    ]
  },
  {
    title: 'LEVEL EIGHT',
    start: {x: 370, y: 575},
    dest: {x: 130, y: 580},
    paddles: [
      {pos: {x: 190, y: 205}, color: '#b92b27', degree: Math.PI/180*135},
      {pos: {x: 310, y: 205}, color: '#b92b27', degree: Math.PI/180*45},
      {pos: {x: 130, y: 265}, color: '#b92b27', degree: Math.PI/180*135},
      {pos: {x: 190, y: 265}, color: '#b92b27', degree: Math.PI/180*45},
      {pos: {x: 310, y: 265}, color: '#b92b27', degree: Math.PI/180*135},
      {pos: {x: 370, y: 265}, color: '#b92b27', degree: Math.PI/180*45},
      {pos: {x: 130, y: 325}, color: '#b92b27', degree: Math.PI/180*45},
      {pos: {x: 190, y: 325}, color: '#b92b27', degree: Math.PI/180*135},
      {pos: {x: 310, y: 325}, color: '#b92b27', degree: Math.PI/180*45},
      {pos: {x: 370, y: 325}, color: '#b92b27', degree: Math.PI/180*135},
      {pos: {x: 130, y: 385}, color: '#26a0da', degree: Math.PI/180*135},
      {pos: {x: 190, y: 385}, color: '#26a0da', degree: Math.PI/180*45},
      {pos: {x: 310, y: 385}, color: '#26a0da', degree: Math.PI/180*135},
      {pos: {x: 370, y: 385}, color: '#26a0da', degree: Math.PI/180*45},
    ]
  },

];
