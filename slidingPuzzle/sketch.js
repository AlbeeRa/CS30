// Bebop sliding puzzle
// Albee Raida
// 27th March,2023


let bebop;
let pieces = [];
let ROWS = 4;
let COLS = 4;
let w,h;
function preload(){
  bebop = loadImage("bebop.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  let w = windowWidth/ROWS;
  let h = windowHeight/COLS;

  for (let i = 0; i < COLS; i ++){
    for (let j = 0; j < ROWS; j++){
      let img = createImage(w,h);
    }
  }
}

function draw() {
  image(bebop,0,0);
}
