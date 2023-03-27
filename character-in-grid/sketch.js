// Charcter moving in grid
//27th march

// let grid = [[0,0,1,1],
//             [1,1,0,0],
//             [0,1,0,1],
//             [1,1,1,1]];

let grid;

const ROWS = 20; //will never change
const COLS = 20;
let cellsize;
let charcterX = 0;
let charcterY = 0;
let grassImg;
let wallImg;
function preload(){
  grassImg = loadImage("clover 1.png");
  wallImg = loadImage("paving 1.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandomGrid(ROWS,COLS);

  //put player in grid
  grid[charcterY][charcterX] = 9;  //using 9 for the character
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
  if (key === "s"){ //down
    moveCharacter(0,1);
  }
  if (key === "w"){ //up
    moveCharacter(0,-1);
  }
  if (key === "d"){ //right
    moveCharacter(1,0);
  }
  if (key === "a"){ //left
    moveCharacter(-1,0);
  }

}

function moveCharacter(x,y){
  //sanity check (edge)

  if(charcterX + x >= 0 && charcterX + x < COLS && charcterY + y >= 0 && charcterY + y < ROWS){

    //check going to hit wall

    if (grid[charcterY + y][charcterX + x] === 0){
      let tempX = charcterX;
      let tempY = charcterY;
      charcterX += x;
      charcterY += y;
    
      //update grid
    
      grid [charcterY][charcterX] = 9;
      grid [tempY][tempX] = 0;
      
    }
  

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
        image(grassImg,x*cellsize,y*cellsize,cellsize,cellsize);
        //fill ("black");
        //rect(x*cellsize,y*cellsize,cellsize,cellsize);
      }
      else if (grid [y][x]=== 0){
        image(wallImg,x*cellsize,y*cellsize,cellsize,cellsize);
        //fill("white");
        //rect(x*cellsize,y*cellsize,cellsize,cellsize);
      }
      else if (grid [y][x]=== 9){
        fill("red");
        rect(x*cellsize,y*cellsize,cellsize,cellsize);
      }
    }

  }
}