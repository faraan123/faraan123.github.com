// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


const roadSegments = [];
const vehicles = [];

function setup() {
  createCanvas(800, 400);

  // Initialize road segments
  const numSegments = 5;
  const roadWidth = width * 0.9;
  const segmentWidth = roadWidth / numSegments;
  for (let i = 0; i < numSegments; i++) {
    const x = i * segmentWidth;
    roadSegments.push({ x, y: height / 2, width: segmentWidth, height: 2 });
  }

  // Initialize vehicles
  for (let i = 0; i < 5; i++) {
    const lane = i % 4 === 0 ? 0 : 1; // Alternate lanes
    const laneOffset = lane * segmentWidth / 2 + segmentWidth / 3;
    const y = roadSegments[0].y - laneOffset;
    const randomColor = getRandomColor();
    if (i % 2 === 0) {
      vehicles.push(new Car(numSegments - 1, y, randomColor));
    } else {
      vehicles.push(new Truck(numSegments - 1, y, randomColor));
    }
  }
}

function draw() {
  background(0); // Black background
  drawRoad();
  updateVehicles();
  renderVehicles();
}

function drawRoad() {
  // Draw the road with a white dashed line in the middle
  for (const segment of roadSegments) {
    rect(segment.x, segment.y, segment.width, segment.height);
    stroke(255);
    for (let x = segment.x; x < segment.x + segment.width; x += 30) {
      line(x, segment.y, x + 0, segment.y);
    }
  }
}

function updateVehicles() {
  for (const vehicle of vehicles) {
    vehicle.update();
  }
}

function renderVehicles() {
  for (const vehicle of vehicles) {
    vehicle.render();
  }
}

class Vehicle {
  constructor(laneIndex, initialY, color) {
    this.x = roadSegments[laneIndex].x + roadSegments[laneIndex].width / 2;
    this.y = initialY;
    this.speed = Math.random() * (5 - 2) + 2;
    this.color = color;
  }

  update() {
    this.x += this.speed;
    if (this.x > width) {
      this.x = -20;
    }
  }

  render() {
    fill(this.color);
    // Draw a simple representation of a vehicle
    ellipse(this.x, this.y, 30, 20);
  }
}

class Car extends Vehicle {
  render() {
    fill(this.color);
    // Draw a car
    rect(this.x - 15, this.y - 10, 30, 20);
  }
}

class Truck extends Vehicle {
  render() {
    fill(this.color);
    // Draw a truck
    rect(this.x - 20, this.y - 10, 40, 20);
  }
}

function getRandomColor() {
  return color(random(255), random(255), random(255));
}
