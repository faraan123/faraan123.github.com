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

function drawLeaf(){
  fill(random(150, 200), random(50, 100), random(50, 100));
  noStroke();
  ellipse(x, y, 10, 20);

}

function drawLine(x1, y1, x2, y2, depth) {
  line(x1, y1, x2, y2);
}

function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    let branchLength = depth * scale
    let x2 = x1 + cos(radians(angle)) * branchLength
    let y2 = y1 - sin(radians(angle)) * branchLength
    drawLine(x1, y1, x2, y2, depth);
    if (depth === 1) {
      drawLeaf(x2, y2);
    }



    drawTree(x2, y2, angle - 20, depth - 1);
    drawTree(x2, y2, angle, depth - 1);
    drawTree(x2, y2, angle + 20, depth - 1);
  }
}

