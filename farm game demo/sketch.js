// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tiles = []; //to store our images
                //0

let level = [
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0] ];

  const COLUMNS = 5; const ROWS = 5; const TILE_SIZE=100;
let playerX = 3, playerY = 4; 
function preload(){ //"0.png" "1.png" "2.png"
  for(let i = 0; i < 3; i++){
    tiles.push(loadImage("assets/" + i + ",png"));
  }

}

function setup() {
  createCanvas(COLUMNS * TILE_SIZE, ROWS* TILE_SIZE);
  level[playerY][playerX] = 2; //add player to level
}

function rendorBoard(){
  for(let y = 0; y< ROWS; y++){
    for(let x = 0; x< COLUMNS; x++){
      let currentItem = level[x][y];
      image(tiles[currentItem],x*TILE_SIZE,y*TILE_SIZE);

    }
  }
}

function swap(x1, y1, x2, y2){
  // have 2 items in the 2d array switch places
  let temp = level[y1][x1];
  level[y1][x1] = level [y2][x2];
  level[y2][x2] = temp;
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    swap(playerX, playerY, playerX, playerY-1);
    playerY--;
  }
  if(keyCode===DOWN_ARROW){
    swap(playerX, playerY, playerX, playerY+1);
    playerY++;
  }
  if(keyCode===RIGHT_ARROW){
    swap(playerX, playerY, playerX, playerY+1);
    playerX--;
  }
  if(keyCode===LEFT_ARROW){
    swap(playerX, playerY, playerX, playerY+1);
    playerX++;
  }
   
  
}

function draw() {
  background(220);
}
