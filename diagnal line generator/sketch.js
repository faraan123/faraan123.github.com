// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let spacing = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(3);
  grid();
}

function diagonalAscending(x,y,s){
  line(x-s/2,y+s/2, x+s/2,y-s/2);

}

function diagonalAscending(x,y,s){
  line(x-s/2, y-s/2, x+s/2,y-s/2);

}

function grid(){
  for(let x = 0; x < width; x+= spacing){
    for(let y = 0; y<height; y+= spacing){
      for(let y = 0; y<height; y+= spacing){
        let choice = Math.floor(random(2));
        if(choise===0)diagonalDescending(x,y,spacing);
        else if(choice===1)
      }
    } 
  }
}

function draw() {
  background(220);
}
