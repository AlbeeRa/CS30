// fireworks OOP

class Spark{
  constructor(x,y,dx,dy){
    this.x = x;
    this.y = y;
    this.dx=dx;
    this.dy = dy;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.alpha = 255;
    this.size = 5;
  }
  display(){
    noStroke();
    fill(this.r,this.g,this.b,this.alpha);
    circle(this.x,this.y,this.size);
  }
  update(){
    this.x+=this.dx;
    this.y+=this.dy;
    this.alpha --;
  }
  isDead(){
    return this.alpha <= 0;
  }
}

let fireworks = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  for(let i = fireworks.length - 1; i >=0;i-- ){
    fireworks[i].update();
    fireworks[i].display();

    if (fireworks[i].isDead()){
      fireworks.splice(i,1);
    }
  }
}

function mousePressed(){
  for (let i = 0;i<100;i++){
    spawnSpark();
  }
}
function spawnSpark(){
  let yo = new Spark(mouseX,mouseY,random(-10,10),random(-100,100));
  fireworks.push(yo);

}