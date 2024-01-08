// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let scale = 15;

function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
  drawTree(width / 2, height * 0.9, 90, 6);
}



function drawLine(x1, y1, x2, y2) {
  line(x1, y1, x2, y2);
}

function drawTree(x, y, angle, depth) {
  if (depth > 0) {
    let branchLength = depth * scale;
    let x2 = x + cos(radians(angle)) * branchLength;
    let y2 = y - sin(radians(angle)) * branchLength;

    drawLine(x, y, x2, y2);
    

    drawTree(x2, y2, angle - 20, depth - 1);
    drawTree(x2, y2, angle, depth - 1);
    drawTree(x2, y2, angle + 20, depth - 1);
  }
}
