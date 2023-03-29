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
      let x = i*w;
      let y = j*h;
      let img = createImg(w,h);
      img.copy(bebop,x,y,w,h,0,0,w,h); /// copy(srcImage,sx,sy,sw,sh,nx,ny,nw,nh) [s = source, n = new]
      let title = new Tile
    }
  }
}

function draw() {
  image(bebop,0,0);
}
