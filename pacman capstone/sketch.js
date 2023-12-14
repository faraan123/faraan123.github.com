// Pac-man
// Faraan Nawaz
// Date


let maze;
let ball;

function setup() {
  createCanvas(600, 600);
  maze = new Maze();
  ball = new Ball(width / 2, height / 2, 20); // Initialize ball in the middle
}

function draw() {
  background(0);

  maze.display();
  ball.display();
  ball.update();
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    ball.move(0, -1);
  } else if (keyCode === DOWN_ARROW){
    ball.move(0, 1);
  } else if (keyCode === LEFT_ARROW){
    ball.move(-1, 0);
  } else if (keyCode === RIGHT_ARROW){
    ball.move(1, 0);
  }
}


class Maze {
  constructor() {
    this.wallThickness = 10;
  }

  display() {
    fill(100);
    noStroke();

    rect(50, 50, 10, 500);
    rect(60, 50, 500, 10);
    rect(550, 50, 10, 510);
    rect(50, 550, 500, 10);
  }
}

class Ball {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = 3; // Initial speed in the x-direction
    this.speedY = 2; // Initial speed in the y-direction
  }

  display() {
    fill(255);
    ellipse(this.x, this.y, this.radius * 2);
  }

  update() {
    // Update ball position
    this.x += this.speedX;
    this.y += this.speedY;

    // Check and handle collisions with walls
    if (this.x - this.radius < 60 || this.x + this.radius > 550) {
      this.speedX *= -1; // Reverse direction in x-axis
    }

    if (this.y - this.radius < 60 || this.y + this.radius > 550) {
      this.speedY *= -1; // Reverse direction in y-axis
    }
  }
}

