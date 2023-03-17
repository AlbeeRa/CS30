//perlin demo with bubbles

let theBubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnBubble();
  noStroke();
  window.setInterval(spawnBubble,100);
}

function mousePressed(){
  spawnBubble();
}
function draw() {
  //background(220);

  //for of
  for (const bubble of theBubbles) {
    //move
    bubble.x = noise(bubble.time)* width;
    bubble.y = noise(bubble.time+300)* height;

    //display
    fill(bubble.color);
    ellipse(bubble.x,bubble.y,bubble.size);
    
    //update time
    bubble.time+=0.01;
  }
}
function spawnBubble(){
  let bubble = {
    x: random(width),
    y: random(height),
    size:random(5,50),
    color: color(random(255),random(255),random(255),random(255)),
    time: random(1000),
  };
  theBubbles.push(bubble);
}
