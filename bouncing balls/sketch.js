// Bouncing balls demo
//using array and obj notation

let shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnBall(width/2,height/2);
}

function draw() {
  background(0);
  moveShapes();
  displayShapes();
}
function moveShapes(){
  for (let i = 0; i<shapes.length; i++){
    shapes[i].x += shapes[i].dx;
    shapes[i].y += shapes[i].dy;
  }
}
function mousePressed(){
  spawnBall(mouseX,mouseY);
}
function displayShapes(){
  for (let i = 0; i<shapes.length; i++){
    fill(shapes[i].colour);
    circle(shapes[i].x, shapes[i].y, shapes[i].diameter);
  }
}
function spawnBall(tempx,tempy){
  let newBall = {
    x: tempx,
    y: tempy,
    dx: random(-5,5),
    dy: random(-5,5),
    diameter: random(25,100),
    colour: color(random(255),random(255),random(255))
  };
  shapes.push(newBall);
}