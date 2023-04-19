// ball array OOP

class Ball{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.dx = random(-10,10);
    this.dy = random(-10,10);
    this.radius = random(5,50);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    //this.alpha = random(100,255);
  }
  display(){
    noStroke();
    fill(this.r,this.g,this.b);
    circle(this.x,this.y,this.radius*2);
  }
  update(){
    //move
    this.x += this.dx;
    this.y += this.dy;

    //bounce of wall

    //left n right
    if (this.x - this.radius <= 0|| this.x + this.radius >= width){
      this.dx*=-1;
    }
    //top n bottom
    if (this.y - this.radius <= 0|| this.y + this.radius >= width){
      this.dy*=-1;
    }   
    
  }

  collisionCheck(otherBall){
    let distanceApart= dist(this.x,this.y,otherBall.x,otherBall.y);
    let radiuSum = this.radius + otherBall.radius;

    if (distanceApart < radiuSum){
      //collision!

      //method 1
      // this.dx*=-1;
      // this.dy*=-1;

      //method 2
      let tempX = this.dx;
      let tempY = this.dy;
      this.dx = otherBall.dx;
      this.dy = otherBall.dy;
      otherBall.dx = tempX;
      otherBall.dy = tempY;
    }
  }
}

let ballArray = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  for(let someBall of ballArray){
    someBall.update();
    for(let otherBall of ballArray){
      if(someBall!== otherBall){
        someBall.collisionCheck(otherBall);
      }
    }
    someBall.display();
    
  }
}

function mousePressed(){
  let theBall = new Ball(mouseX,mouseY);
  ballArray.push(theBall);
}