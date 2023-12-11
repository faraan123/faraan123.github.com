// object demo
// faraan
// october 13
//

let points = []
let reach = 250;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  for(let p of points){
    p.move();
    p.display();
    p.connectPoints(points);
  }

}

function mouseClicked(){
  points.push(new MiniPoint(mouseX,mouseY));
}

class MiniPoint{
  //constructive fucntion
  constructor(x,y){ // class variables
    this.x = x;  this.y = y;  this.s = 20;
    this.c = color(random(255),random(255),random(255));
    this.xTime = random(10); this.yTime = random(10);
    this.timeShift = 0.01;    this.maxSpeed = 5
  }

  //class functions
  connectPoints(){
    stroke(this.c);
    for(let p of points){
      //
      if(this !== p){
        if(dist(this.x, this.y, p.getX(), p.getY()) < reach)
          line(this.x, this.y, p.getX(), p.getY());
        }
      }
    }
  }

  getX(){return this.x}
  getY(){return this.y}



  move(){
    let xSpeed = noise(this.xTime);
    xSpeed = map(xSpeed,0,1 -this.maxSpeed);
    let ySpeed = noise(this.yTime);
    ySpeed = map(ySpeed,0,1, -this.maxSpeed,this.maxSpeed);
    this.x += xSpeed;  this.y += ySpeed;
    this.xTime += this.timeShift;
    this.yTime+=this.timeShift;
    

    if(this.x < 0) this.x += width;
    if(this.x > width) this.x -= width;
    if(this.y < 0) this.y += height;
    if(this.y > height) this.y -= height;
  }
  display() {
    fill(this.c);
    noStroke();
    circle(this.x, this.y, this.s);
    if(dist(this.x, this.y,mouseX,mouseY) <reach){
      this.S = map(d, 0, reach, 20, 50);
      
    }
    else(
      this.s = 20;

    )
    circle(this.x, this.y, this.s);
  }
