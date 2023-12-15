// Pac-man
// Faraan Nawaz
// Date

let maze;
let ball;
let ghosts;

function setup() {
  createCanvas(800, 800);
  maze = new Maze();
  ball = new Ball(width / 2, height / 2, 20); // Initialize ball in the middle
}

function draw() {
  background(0);

  maze.display();
  ball.display();
  ball.update();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    ball.move(0, -2);
  } else if (keyCode === DOWN_ARROW) {
    ball.move(0, 2);
  } else if (keyCode === LEFT_ARROW) {
    ball.move(-2, 0);
  } else if (keyCode === RIGHT_ARROW) {
    ball.move(2, 0);
  }
}

class Maze {
  constructor() {
    this.wallThickness = 10;
  }

  display() {
    fill(color("blue"));
    noStroke();

    rect(50, 50, 10, 600);
    rect(60, 50, 600, 10);
    rect(650, 50, 10, 610);
    rect(50, 650, 600, 10);
  }
}

class Ball {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = 5; // Initial speed in the x-direction
    this.speedY = 4; // Initial speed in the y-direction
  }

  display() {
    fill(color("yellow"));
    ellipse(this.x, this.y, this.radius * 2);
    
  }

  update() {
    // Update ball position
    this.x += this.speedX;
    this.y += this.speedY;

    // Check and handle collisions with walls
    if (this.x - this.radius < 60 || this.x + this.radius > 650) {
      this.speedX *= 0; // Reverse direction in x-axis
    }

    if (this.y - this.radius < 60 || this.y + this.radius > 650) {
      this.speedY *= 0; // Reverse direction in y-axis
    }
  }

  move(x, y) {
    // Move the ball by a certain amount
    this.speedX= x;
    this.speedY= y;
  }
}

