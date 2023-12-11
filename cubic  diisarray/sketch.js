// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let squareSize = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2);   rectMode(CENTER);  noFill();
  drawRectangles(); //ge

}

function drawRectangles(){
  let s = squareSize;
  for(let x = squareSize/2; x<width-s/2; x+= s){
    for(let y = s/2; y <height-s/2; y+= s){
      push();
      rotate(radians(10));
      square(x,y,s);
      pop();
    }
  }
}
  
