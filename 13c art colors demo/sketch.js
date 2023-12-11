// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth = 50; let rectHeight = 20;
let colors = ["#353C58", "#9955A2", "#BA49A5", "#D45F79", "#BE7D85"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  drawColRGB(width*0.1);
  drawColHSB(width*0.4);
  drawColCustom(width*0.7);
}


function drawColCustom(xPos){
  colorMode(RGB);
  let counter = 0;
  for (let y = 0; y < height; y += rectHeight) {
    fill(colors[counter % 5]);
    fill(colors[Math.floor(random(colors.length))]);
    rect(xPos, y, rectWidth, rectHeight);
    counter++;
  }

}



function drawColHSB(xPos){
  colorMode(HSB, 360);
  for(let y=0; y<height; y+=rectHeight){
    fill(y/2 % 360, 360, 360);
    rect(xPos,y,rectWidth,rectHeight);
  }
}

function drawColRGB(xPos){
  colorMode(RGB);
  for(let y=0; y<height; y+=rectHeight){
    fill(random(255),random(255),random(255));
    rect(xPos,y, rectWidth, rectHeight);
  }


}