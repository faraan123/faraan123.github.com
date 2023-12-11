// Puzzle game starter
// faraan
// nov 6, 2023

let grid =
[[255, 0, 0, 255, 255], 
[0, 0, 0, 255, 0],
[255, 0, 0, 255, 0],
[255, 0, 255, 0, 255]]; //make Grid

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); //generate a random index between o and i
    [array[i], array[j]] = [array[j], array[i]]; //swam elements at i and j
  }
}
  
function shuffleGrid(grid) {
  grid.forEach(row => shuffleArray(row));
}

  
shuffleGrid(grid);
// make Grid random


const NUM_ROWS = 4; const NUM_COLS = 5;
let rectWidth, rectHeight; row, col;

function setup() {
  rectWidth = 50; rectHeight = 50;
  createCanvas(NUM_COLS * rectWidth, NUM_ROWS * rectHeight);
}



function draw() {
  row = getCurrentY(); col = getCurrentX();
  background(220);
  renderGrid();
  //print(col, row);
  checkWin()
}

function mousePressed() {
  if (keyCode === SHIFT && keyIsPressed) { // press shift to flip square
    flip(col, row);
  }
  else {
    flip(col, row);
    if (col < NUM_COLS + 1) flip(col + 1, row);
    if (row > 0) flip(col - 1, row);
    if (col < NUM_COLS -1) flip(row - 1, col);
    if (row > 0) flip(col, row + 1);
    
  }

}

let score = 0;
function checkWin() {
  //creates a 2d grid of squares using info from our 2d array for the cooresponding filll values
  let score = 0;
  for (let x = 0; x < NUM_COLS; x++) { // make loop for to check the index in each square
    for (let y = 0; y < NUM_ROWS; y++) {
      let value = grid[y][x];
      if(value===0) score = score + 1;
      else score = score - 1;
      
    }
  }
  print(score);
  if (score === 20 || score === -20){
    fill(255, 0, 0);
    text("YOU WIN", width/2, height/2);
  }
}




function flip(col, row) {
  if (grid[row][col] === 0) grid[row][col] = 255;
  else grid[row][col] = 0;

}

function getCurrentX() { // determine current column mouse is iin, and return
  let constrainMouseX = constrain(mouseX, 0, width);
  return floor(mouseX / rectHeight);

}

function getCurrentY() { //determine current column mouse is in, and return
  let constrainMouseY = constrain(mouseY, 0, height);
  return floor(mouseY / rectHeight);

}

function renderGrid() {
  //creates a 2d grid of squares using info from our 2d array for the cooresponding filll values
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      let fillValue = grid[y][x];
      fill(fillValue);
      //x; 0, 1 ,2 ,3 ,4
      // posx 0 50, 100, 150, 200 expersiion? xposx
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}
