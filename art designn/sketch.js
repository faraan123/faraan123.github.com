// Art design
// Faraaan Nawaz
// December 4



function setup() {
  createCanvas(2000, 2000);
  background(255);
  noLoop();
}

function draw() {
  for (let i = 0; i < 100; i++) {
    generateArt(); // multiple art elements
  }
}

function generateArt() {
  // random cordinates for the start and end points of a line
  let startX = random(width);
  let startY = random(height);
  let endX = random(width);
  let endY = random(height);

  // Draw random lines
  stroke(random(255), random(255), random(255));
  strokeWeight(random(5));
  line(startX, startY, endX, endY);

  // Draw random curves
  noFill();
  stroke(random(255), random(255), random(255));
  strokeWeight(random(5));
  bezier(
    random(width),
    random(height),
    random(width),
    random(height),
    random(width),
    random(height),
    random(width),
    random(height)
  );

  // Draw random shapes
  fill(random(255), random(255), random(255), 50);
  noStroke();
  let shapeType = int(random(3));
  if (shapeType === 0) {
    ellipse(random(width), random(height), random(50, 200));
    // draw elipse
  } else if (shapeType === 1) {
    rect(random(width), random(height), random(50, 200), random(50, 200));
    //draw rectangle
  } else {
    triangle(
      random(width),
      random(height),
      random(width),
      random(height),
      random(width),
      random(height)
      //draw triangle
    );
  }
}
