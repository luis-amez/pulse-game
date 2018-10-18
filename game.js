class Beat {
  constructor(color, x, y = -20) {
    this.x = x;
    this.y = y;
    this.size = 30;
    this.color = color;
  }

  draw() {
    fill(...this.color) ;
    ellipse(this.x, this.y, this.size, this.size);
  }

  advance(speed) {
    this.y += speed;
  }
}

class Game {
  constructor() {
    this.beats = [];
    this.speed = 1;
  }

  start() {
    createCanvas(400, 400);
    let beat = new Beat([255, 0, 0], 30);
    this.beats.push(beat);
  }

  render() {
    background(0, 0, 0);
    this.beats.forEach((beat) => {
      beat.draw();
    })
  }

  update() {
    this.beats.forEach((beat) => {
      beat.advance(this.speed);
    })
  }
}

let game = new Game();

function setup() {
  game.start();
}

function draw() {
  game.render();
  game.update();
}

// function setup() {
//   createCanvas(400, 400)
//   background(0, 0, 0)
// }

// function draw() {
//   if (mouseIsPressed) {
//     fill(255, 0, 0)
//   } else {
//     fill(0, 255, 0)
//   }

//   ellipse(mouseX, mouseY, 30, 30)
// }