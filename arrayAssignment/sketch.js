// Albee Raida
// Assignment: Generative Art [Rainbow sphereralization] //YOU'RE EYES WILL HURT
// March 14th, 2023

let nums = [100,25,46,72];
let fr = 20; //starting FPS
function setup() {
  frameRate(fr);
  createCanvas(windowWidth,windowHeight); 
}

function draw() {
  background(0);
  //background(random(255)); //[will hurt your eyes if you stare for too long.]
  //circles();
  fillCircle();
}
function circles(posX,posY){
  let circleD = { //circle dimensions
    x: (windowWidth/8) - 80 + posX,
    y: (windowHeight/4) - 80 + posY,
  };
  for (let i = 0; i<20; i++){ //repeating circle to make a design
    stroke(100);
    fill(random(255),random(255),random(255),50);
    ellipse(circleD.x,circleD.y,random(200),nums[i]+100);
  }
}

function fillCircle(){

  let xIncr = windowWidth/8;   //x position shift increment
  let yIncr = windowHeight/4;  //y position shift increment

  for (let i = 0; i<8; i++){
    for (let j = 0; j<4; j++){
      circles(xIncr*i,yIncr*j);
    }
  }
}