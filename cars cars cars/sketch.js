// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let eastbound = [];
let westbound = [];

function setup() {
  createCanvas(800, 400);
  generateVehicles();
}

function draw() {
  background(200);
  drawRoad();

  // Process eastbound vehicles
  for (let vehicle of eastbound) {
    vehicle.action();
  }

  // Process westbound vehicles
  for (let vehicle of westbound) {
    vehicle.action();
  }
}

function drawRoad() {
  // Draw black road
  fill(0);
  rect(100, 0, width - 200, height);

  // Draw dashed white lane dividing the middle
  stroke(255);
  strokeWeight(5);
  let dashLength = 20;
  let gapLength = 10;
  let totalLength = width - 200;

  for (let i = 0; i < totalLength; i += dashLength + gapLength) {
    line(100 + i, height / 2, 100 + i + dashLength, height / 2);
  }
}

function generateVehicles() {
  for (let i = 0; i < 20; i++) {
    // Generate eastbound vehicles
    eastbound.push(new Vehicle(150, random(height / 2), 0, color(random(255), random(255), random(255))));

    // Generate westbound vehicles
    westbound.push(new Vehicle(width - 150, random(height / 1), 1, color(random(255), random(255), random(255))));
  }
}

class Vehicle {
  constructor(x, y, direction, vehicleColor) {
    this.type = floor(random(2));
    this.color = vehicleColor;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.xSpeed = random(1, 5);
  }

  move() {
    this.x += this.xSpeed;

    // Wrap around to the opposite side if off-screen
    if (this.x > width) {
      this.x = 0;
    } else if (this.x < 0) {
      this.x = width;
    }
  }

  speedUp() {
    this.xSpeed = min(this.xSpeed + 0.5, 15);
  }

  speedDown() {
    this.xSpeed = max(this.xSpeed - 0.5, 0);
  }

  changeColor() {
    this.color = color(random(255), random(255), random(255));
  }

  action() {
    this.move();

    if (random() < 0.01) {
      this.speedUp();
    }

    if (random() < 0.01) {
      this.speedDown();
    }

    if (random() < 0.01) {
      this.changeColor();
    }

    this.display();
  }

  display() {
    fill(this.color.levels[0], this.color.levels[1], this.color.levels[2]);

    if (this.type === 0) {
      rect(this.x, this.y - 10, 30, 20); // Car
    } else {
      rect(this.x, this.y - 15, 40, 30); // Truck/Van
    }
  }
}
