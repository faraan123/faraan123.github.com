// Project Title
// Your Name
// Date


let scale = 15;


function setup() {
  createCanvas(500, 500, WEBGL );
  background(255);

}

function draw() {
  drawTree(width/2, height*.9, 90, 6);
  angle = map(mouseX,0,width,-120,120);
}

let angle = 5;

function boxes(size){
  if( size > 10){
    rotateZ(radians(angle));
    translate(size*1.5,0);
    box(size);

    boxes(size*0.8);
  }
}


function drawLine( x1, y1, x2, y2, depth) {
  //draw a line segment connecting (x1,y1) to (x2,y2)
  line(x1, y1, x2, y2);
}


function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    let x2 = x1 + (cos(radians(angle))*depth*scale); //calculateendpoints of current branch
    let y2 = y1 - (sin(radians(angle))*depth*scale); //using trigratios. Get shorter based on depth

    drawLine(x1, y1, x2, y2, depth);

//for a 2-branch tree:
    drawTree(x2, y2, angle-18, depth-1);
    drawTree(x2, y2, angle+18, depth-1);
  }
}
