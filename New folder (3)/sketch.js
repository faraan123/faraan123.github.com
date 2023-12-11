// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let movers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  movers.push(new Mover(mouseX,mouseY));
}


function draw() {
  background(220);
  movers.push(new Mover)
  for(let m of movers){
    m.move();  m.display();
  }
}

class Mover{
  constructor(x,y){
    this.position = createVector(x,y);  this.s = 20;
    this.velocity = createVector(random(-3,3), random(-5,5));
    this.gravity = createVector(0,0.2);

  }
  move(){
    this.velocity.add(this.gravity);
    this.position.add(this.velocity);
  }

  display(){
    push();
    translate(this.position.x, this.position.y);
    circle(0,0, this.s);
    pop();
  }
}