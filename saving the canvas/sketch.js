// Gaussian Quadratic warm up
// faraan 
// friday, october 27
//


let startX, startY, endX, endY;


function setup() { // created variables and made canvas
  createCanvas(windowWidth, windowHeight);
  startX = randomGaussian(width / 2, 200);
  startY = height * 0.97;
  art()
}






function art() {
  let spacing = 10;
  for (let i = 0; i < 99; i++) {
    endX = randomGaussian(width / 2, 100);
    endY = startY - spacing
    if (endY < 0) {
      endY += height; // made 99 lines and 100 points loop
    }
    line(startX, startY, endX, endY);
    startX = endX
    startY = endY
    spacing = spacing * 1.02 // made the x and y vertical space add 1.02 every loop
  }

}
