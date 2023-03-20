// 2d array demo [drawing grid]
//20th march

// let grid = [[0,0,1,1],
//             [1,1,0,0],
//             [0,1,0,1],
//             [1,1,1,1]];

let grid;

const ROWS = 10; //will never change
const COLS = 10;
let cellsize;


function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandomGrid(ROWS,COLS);

  if (width<height){
    cellsize = width/ROWS;
  }
  else{
    cellsize = height/ROWS;
  }
}

function draw() {
  background(220);
  displayGrid();
}
function mousePressed(){
  let x = Math.floor(mouseX/cellsize);
  let y = Math.floor(mouseY/cellsize);

  if(grid[y][x]=== 0){
    grid [y][x] = 1;
  }
  else if(grid[y][x]=== 1){
    grid [y][x] = 0;
  }
}
function keyTyped(){
  if (key === "r"){
    grid = createRandomGrid(ROWS,COLS);
  }
}
function createRandomGrid(ROWS,COLS){
  let newGrid = [];
  for (let y = 0; y<ROWS; y++){
    newGrid.push([]);
    for (let x = 0; x<COLS;x++){
      if (random(100)<50){
        newGrid[y].push(1);
      }
      else{
        newGrid[y].push(0);
      }
    }
  }
  return newGrid;
}
function displayGrid(){
  for (let y= 0; y<ROWS; y++){
    for (let x = 0; x< COLS;x++){
      if (grid[y][x] === 1) {
        fill ("black");
      }
      else if (grid [y][x]=== 0){
        fill("white");
      }
      rect(x*cellsize,y*cellsize,cellsize,cellsize);
    }

  }
}