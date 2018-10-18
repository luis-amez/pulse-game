class Beat {
  constructor(color, x, y = -20) {
    this.x = x;
    this.y = y;
    this.size = 30;
    this.color = color;
  }

  draw() {
    fill(...this.color) ;
    rect(this.x, this.y, this.size, this.size);
  }

  advance(speed) {
    this.y += speed;
  }

  isHit(coordinates) {
    if(coordinates[0] > this.x && coordinates[0] < this.x + this.size && coordinates[1] > this.y && coordinates[1] < this.y + this.size) {
      return true;
    }
    return false;
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
    this.moveBeats();
  }

  moveBeats() {
    this.beats.forEach((beat) => {
      beat.advance(this.speed);
    })
  }

  checkHits(x, y) {
    this.beats.forEach((beat) => {
      if(beat.isHit([x, y])) {
        this.beats.splice(this.beats.indexOf(beat), 1);
      }
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

function mousePressed() {
  game.checkHits(mouseX, mouseY);
}