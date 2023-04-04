// Bebop sliding puzzle
// Albee Raida
// 27th March,2023


// Source image to chop up
let bebop;

// Tiles configuration
let tiles = [];
let COLS = 4;
let ROWS = 4;
let w, h;

// Order of tiles
let board = [];

//image
function preload(){
  bebop = loadImage("bebop.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  // pixel dimensions of each tiles
  w = width / COLS;
  h = height / ROWS;
  
  // Chop up source image into tiles
  for (let i = 0; i < COLS; i++) {
    for (let j = 0; j < ROWS; j++) {
      let x = i * w;
      let y = j * h;
      let img = createImage(w, h);
      img.copy(bebop, x, y, w, h, 0, 0, w, h);
      let index = i + j * COLS;
      board.push(index);
      let tile = new Tile(index, img);
      tiles.push(tile);
    }
  }
}
function draw(){
  //image(bebop,0,0);
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
}
  