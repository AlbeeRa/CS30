// cubic disarray
//March 7th,2023

let boxes = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);


  for (let y = 0; y<height; y+=50){
    for (let x = 0; x <height; x+=50){
      spawnBox(x,y,50,random(y*0.2));
    }
  }
}


function draw() {
  background(220);
  for (let i = 0; i<boxes.length; i++){
    displayBox(boxes[i]);
  }
}

//displays the box
function displayBox(myBox){
  push(); //saving the transformation matrix
  translate(myBox.x,myBox.y);
  rotate(myBox.rotation);
  square(0,0,myBox.size);
  pop(); //resetting the transformation matrix
}
function spawnBox (theX,theY, theSize, howRotated){
  let somebox = {
    x: theX,
    y: theY,
    size: theSize,
    rotation: howRotated,
  };
  boxes.push(somebox);
}

