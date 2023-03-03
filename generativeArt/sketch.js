// Generative Art 
// March 3rd, 2023

function setup() {
  createCanvas(windowWidth, windowHeight);
  background ("white");
  lotsLine(100,100);
}

function draw() {
}
function lotsLine(cols,rows){
  for (let x = 0; x< cols; x++){
    for (let y = 0; y < rows; y++){
      let spaceAmount = width/cols;
      diagonalLine(x*spaceAmount,y*spaceAmount,spaceAmount);
    }
  }
}

function diagonalLine(x,y,spaceline){
  if (random(100) > 50) {
  //postive slope
    line(x - spaceline/2, y + spaceline/2, x + spaceline/2, y - spaceline/2);
  }
  else {
    //negative slope
    line(x - spaceline/2, y - spaceline/2, x + spaceline/2, y + spaceline/2);
  }

}