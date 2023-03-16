// Generative Art [[Messing around]]
// March 3rd, 2023

let bubbles = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  spawn()
}

function spawn(){
  for (let i= 0; i<width; i ++){
    for (let j = 0; j< height;j++){}
      fill(random(255),random(255),random(255));
      ellipse(mouseX,mouseY,random(100),random(100));
    }
  }
