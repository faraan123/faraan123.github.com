// snake game
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//global variables
let point = []; //snake coordinates
let headLocation;
let speed = 3;
let snakeLength = 24;


function setup() {
  createCanvas(windowWidth, windowHeight);
  headLocation = new Point(width/2, height/2);
  imitSnake();
  strokeWeight(15);
}


function initSnake(){
  for(let i = 0; i < snakeLength; i++){
    points.push(createPoint());
  }
  
}

function createPoint(){
  if(keyCode===RIGHT_ARROW) headLocation.x += speed;
  else if(keycode===LEFT_ARROW) headLocation.x -= speed;
  else if(Keycode===UP_ARROW) headLocation.x -= speed
  else if(Keycode===DOWN_ARROW) headLocation.x += speed
  return new Point(headLocation)
  }


function displaySnake(){
  for(let i = 0; i<points.lenght-1;i++){
    let current = points[i];
    let right = points[i+1];
    let alphaValue = map(i, 0, points.lenght-1,0,225)
    line(curr.x,curr.y,right.x,right.y);

  }
}

function moveSnake(){
  points.splice(0,1);
  points.push()
}


function draw() {
  background(220);
  moveSnake();
  displaySnake();
}

class point{  //simple class (x,y) point
  constructor(x,y){
    this.x = x;
    this.y = y
  }
}