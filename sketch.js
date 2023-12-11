// working with images
// faraan
// october 10, 2023
//

//global variables
let lionL , lionR; facing = "left"
let pinImages = [];
let currentPin = 0
function preload(){
  //happens before setup, will ensure all loading
  //is done, before moving on to setup()
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
  for(let i = 0; i < 9; i++){
    pinImages.push(loadImage("assets/pin-0" + i + ".png"));
  }
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  displayPin();
}

function displayPin(){
  image(pinImages[currentPin],200,200)

}


function stepOne(){
  //step one - lion display
  if(movedX > 0) facing = "right";
  else if (movedX < 0) facing = "left";

  if(facing === "left")
    image(lionL, mouseX, mouseY, 100, 50);
  
  else
    image(lionR, mouseX, mouseY);
  
 
}
