// 2d array demo [drawing grid]
//20th march

let grid = [[0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,8,5],
            [0,1,0,2,0,0,0,0,0],
            [0,0,5,0,7,0,0,0,0],
            [0,4,0,2,0,0,0,0,0],
            [9,0,0,0,0,0,0,8,5],
            [5,0,0,0,0,0,0,7,3],
            [0,0,2,0,1,0,0,0,0],
            [0,0,0,0,4,0,0,0,9]];



const ROWS = 9; //will never change
const COLS = 9;
let cellsize;


function setup() {
  if(windowWidth<windowHeight){
    createCanvas(windowWidth, windowHeight);
  }
  else{
    createCanvas(windowHeight, windowWidth);
  }
  cellsize = width/ROWS;

}

function draw() {
  background(220);
  displayGrid();
  drawBoxes();
}
function drawBoxes(){
  //vertical line
  strokeWeight(6);
  line(3*cellsize,0,3*cellsize,height);
  line(6*cellsize,0,6*cellsize,height);

  //horizontal lines
  line(0,3*cellsize,width,3*cellsize,height);
  line(0,6*cellsize,width,6*cellsize,height);
}
function displayGrid(){
  strokeWeight(2);
  for (let y= 0; y<ROWS; y++){
    for (let x = 0; x< COLS;x++){
      fill("white");
      rect(x*cellsize,y*cellsize,cellsize,cellsize);
      if (grid[y][x] !==0){
        fill ("black");
        textAlign(CENTER,CENTER);
        textSize(32);
        text(grid[y][x],x*cellsize+cellsize/2,y*cellsize+cellsize/2);

      }
    }
  }
}