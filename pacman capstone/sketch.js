// Pac-man
// Faraan Nawaz
// Date


let maze;
let ball;
let ghosts = [];

function setup() {
  createCanvas(800, 800);
  maze = new Maze();
  ball = new Ball(width / 2, height / 2, 20); // Initialize ball in the middle

  // Instantiate ghosts
  ghosts.push(new Ghost(100, 100, color("blue")));
  ghosts.push(new Ghost(300, 300, color("yellow")));
  ghosts.push(new Ghost(500, 500, color("red")));
}

function draw() {
  background(0);

  maze.display();
  for (let ghost of ghosts) {
    ghost.display();
    ghost.update();
  }

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
    this.wallThickness = 20; // Increased wall thickness
    this.walls = [
      { x: 50, y: 50, width: 10, height: 600 },
      { x: 60, y: 50, width: 600, height: 10 },
      { x: 650, y: 50, width: 10, height: 610 },
      { x: 50, y: 650, width: 600, height: 10 },
      { x: 120, y: 150, width: 10, height: 200 },
      { x: 200, y: 100, width: 200, height: 10 },
      { x: 120, y: 300, width: 300, height: 10 },
      { x: 500, y: 100, width: 10, height: 200 },
      { x: 300, y: 200, width: 10, height: 200 },
      { x: 400, y: 200, width: 200, height: 10 },
      { x: 500, y: 300, width: 10, height: 300 },
      { x: 300, y: 500, width: 210, height: 10 },
    ];

    // Create wider openings
    this.walls.push({ x: 200, y: 100, width: 20, height: 110 });
    this.walls.push({ x: 300, y: 200, width: 200, height: 20 });
    this.walls.push({ x: 500, y: 300, width: 20, height: 110 });
  }

  display() {
    fill(color("blue"));
    noStroke();

    for (let wall of this.walls) {
      rect(wall.x, wall.y, wall.width, wall.height);
    }
  }
}



class Ball {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = 5; // Initial speed in the x-direction
    this.speedY = 4; // Initial speed in the y-direction
    this.angle = 0.25; // Initial angle of the mouth (in radians)
    this.mouthDirection = 1; // 1 for opening, -1 for closing
  }

  display() {
    fill(color("yellow"));
    arc(this.x, this.y, this.radius * 2, this.radius * 2, 0.25, -0.25 + this.angle);
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Check and handle collisions with walls
    this.checkWallCollision();

    // Open and close the mouth
    this.angle += 0.05 * this.mouthDirection;

    // Change direction when mouth is fully open or closed
    if (this.angle >= 0.5 || this.angle <= 0) {
      this.mouthDirection *= -1;
    }
  }

  checkWallCollision() {
    for (let wall of maze.walls) {
      if (
        this.x + this.radius > wall.x &&
        this.x - this.radius < wall.x + wall.width &&
        this.y + this.radius > wall.y &&
        this.y - this.radius < wall.y + wall.height
      ) {
        // Reverse direction if there's a collision with a wall
        this.speedX *= -1;
        this.speedY *= -1;
      }
    }
  }

  move(x, y) {
    this.speedX = x;
    this.speedY = y;
  }
}

class Ghost {
  constructor(x, y, ghostColor) {
    this.x = x;
    this.y = y;
    this.radius = 15;
    this.speed = 1.5; // Adjust the speed as needed
    this.color = ghostColor;
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.radius * 2);
  }

  update() {
    // Calculate the direction vector towards the Pac-Man
    let directionX = ball.x - this.x;
    let directionY = ball.y - this.y;

    // Normalize the direction vector to maintain speed
    let magnitude = sqrt(directionX ** 2 + directionY ** 2);
    directionX /= magnitude;
    directionY /= magnitude;

    // Move towards the Pac-Man
    this.x += directionX * this.speed;
    this.y += directionY * this.speed;

    // Ensure ghosts stay within canvas boundaries
    this.x = constrain(this.x, 60 + this.radius, width - this.radius);
    this.y = constrain(this.y, 60 + this.radius, height - this.radius);

    // Check and handle collisions with walls
    this.checkWallCollision();
  }

  checkWallCollision() {
    for (let wall of maze.walls) {
      if (
        this.x + this.radius > wall.x &&
        this.x - this.radius < wall.x + wall.width &&
        this.y + this.radius > wall.y &&
        this.y - this.radius < wall.y + wall.height
      ) {
        // Reverse direction if there's a collision with a wall
        let wallCenterX = wall.x + wall.width / 2;
        let wallCenterY = wall.y + wall.height / 2;

        // Calculate the direction vector away from the wall
        let awayFromWallX = this.x - wallCenterX;
        let awayFromWallY = this.y - wallCenterY;

        // Normalize the direction vector
        let magnitude = sqrt(awayFromWallX ** 2 + awayFromWallY ** 2);
        awayFromWallX /= magnitude;
        awayFromWallY /= magnitude;

        // Move away from the wall
        this.x += awayFromWallX * this.speed;
        this.y += awayFromWallY * this.speed;
      }
    }
  }
}
