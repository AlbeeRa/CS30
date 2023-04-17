// Bebop sliding puzzle
// Albee Raida
// 27th March,2023
//extra: sounds

let spike;
let Sound;

// Tiles
let tiles = [];
let COLS = 2;
let ROWS = 2;
let w, h;

// Order of tiles
let board = [];

// image & sound
function preload() {
  spike = loadImage("bebop.png");
  Sound = loadSound("frog.mp3");
  winner = loadSound("mario.mp3");
}

function setup() {
  createCanvas(400, 400);
  // pixel dimensions of each tiles
  w = width / COLS;
  h = height / ROWS;
  
  // Chop up image 
  for (let i = 0; i < COLS; i++) {
    for (let j = 0; j < ROWS; j++) {
      let x = i * w;
      let y = j * h;
      let img = createImage(w, h);
      img.copy(spike, x, y, w, h, 0, 0, w, h);   //copy(Image, sx, sy, sw, sh, dx, dy, dw, dh)
      let index = i + j * COLS;
      board.push(index);
      let tile = new Tile(index, img);
      tiles.push(tile);
    }
  }
  
  // Remove the last tile
  tiles.pop();
  board.pop();

  // -1 [empty spot]
  board.push(-1);
  
  // Shuffle the board
  simpleShuffle(board);
}

// Swap two pieces of an array
function swap(i, j, array) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// Pick a random spot to move
function randomMove(arr) {
  let r1 = floor(random(COLS));
  let r2 = floor(random(ROWS));
  move(r1, r2, arr);
}

// Shuffle board
function simpleShuffle(arr) {
  for (let i = 0; i < 1000; i++) {
    randomMove(arr);
  }
}

// Move click
function mousePressed() {
  let i = floor(mouseX / w);
  let j = floor(mouseY / h);
  move(i,j,board);
  Sound.play(); //sound with each move

}



function draw() {
  background(0);

  // Draw the current board
  for (let i = 0; i < COLS; i++) {
    for (let j = 0; j < ROWS; j++) {
      let index = i + j * COLS;
      let x = i * w;
      let y = j * h;
      let tileIndex = board[index];
      if (tileIndex > -1) {
        let img = tiles[tileIndex].img;
        image(img, x, y, w, h);
      }
    }
  }
  
  // Show as grid
  for (let i = 0; i < COLS; i++) {
    for (let j = 0; j < ROWS; j++) {
      let x = i * w;
      let y = j * h;
      strokeWeight(2);
      noFill();
      rect(x, y, w, h);
    }
  }
  
  // If solved
  if (isSolved()) {
    console.log("SOLVED");
  }
}

// Check if solved
function isSolved() {
  let solve = false
  for (let i = 0; i < board.length-1; i++) {
    if (board[i] !== tiles[i].index) {
      return false;
    }
  }
  return true;

}


// Swap two pieces
function move(i, j, arr) {
  let blank = findBlank();
  let blankCol = blank % COLS;
  let blankRow = floor(blank / ROWS);
  
  // Double check valid move
  if (isNeighbor(i, j, blankCol, blankRow)) {
    swap(blank, i + j * COLS, arr);
  }
}

// Check if neighbor
function isNeighbor(i, j, x, y) {
  if (i !== x && j !== y) {
    return false;
  }

  if (abs(i - x) === 1 || abs(j - y) === 1) {
    return true;
  }
  return false;
}

// to track blank spot
function findBlank() {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === -1){
      return i;
    }
  }
}
