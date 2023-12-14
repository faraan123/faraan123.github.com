// snake game
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//global variables
// Global Variables
let points = []; //snake coordinates
let headLocation; //object - where the head is
let speed = 10;
let snakeLength = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  headLocation = new Point(width/2, height/2);
  initSnake();
  strokeWeight(15);
}

function initSnake(){
  //set up 5 points in our array
  for(let i = 0; i < snakeLength; i++){
    points.push(createPoint());
  }
}

function createPoint(){
  //keyboard control, return a Point object
  if(keyCode===RIGHT_ARROW) headLocation.x += speed;
  else if(keyCode===LEFT_ARROW) headLocation.x -= speed;
  else if(keyCode===UP_ARROW) headLocation.y -= speed;
  else if(keyCode===DOWN_ARROW) headLocation.y += speed;
  return new Point(headLocation.x, headLocation.y);

}

function displaySnake(){
  //loop through all pairs of points
  for(let i = 0; i<points.length-1;i++){
    let curr = points[i];  //current item
    let right = points[i+1];  //right neighbour   //0 transparent - 255 opaque
    let alphaValue = map(i, 0, points.length-1,0,255 );
    stroke(0,alphaValue);
    line(curr.x,curr.y,right.x,right.y);
  }
}

function moveSnake(){
  //delete first point, add a new point on the end
  points.splice(0,1); //deleting the tail
  points.push(createPoint());
}

function draw() {
  background(220);
  moveSnake();
  displaySnake();
}

class Point{   // simple class for (x,y) point
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
}