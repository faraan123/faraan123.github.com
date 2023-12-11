// terrian
// faraan
// monday, october 30
//


let terrain = []; // store the height
let noiseOffset = 0.0; 
let rectWidth = 5; // Width of each rectangle
let rectHeightRange = 350; // how high the rectangles can go

function setup() {
  createCanvas(800, 400);
  generateTerrain(); // make terrain
}

function draw() {
  background(220);
  drawTerrain(); // Draw the terrain
}


function generateTerrain() {
  noiseOffset = 0.03; // how smooth the terrian is



  // using noise function for terrian
  for (let x = 0; x < width; x += rectWidth) {
    const rectHeight = map(noise(noiseOffset), 0, 1, 50, rectHeightRange);
    terrain.push(rectHeight);
    noiseOffset += 0.01; //play around with the noise offset
  }
}

function drawTerrain() {
  for (let i = 0; i < terrain.length; i++) {
    const x = i * rectWidth;
    const y = height - terrain[i];
    fill(0, 0, 0); // terrian black 
    rect(x, y, rectWidth, terrain[i]);
  }
}
