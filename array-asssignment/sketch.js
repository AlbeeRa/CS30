// Generative Art [[Messing around]]
// March 3rd, 2023

function setup() {
  createCanvas(windowWidth, windowHeight);
  background ("white");

}

function draw() {
  multicircle();
}
function multicircle(){
  for (let i = 0; i < 20;i+ 50){
    fill(random(255));
    noStroke();
    circle(100,200,i);
  }
}
