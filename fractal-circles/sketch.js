// Fractal Circle(recursion visualization)

let theColors = ['#ff1605','#ff7105','#ffde05','#71ff05','#05ff69','#05ffee','#0576ff','#0522ff','#5805ff','#e605ff','#ff0582'];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  let theDepth = Math.floor(map(mouseX,0,width,0,10));
  fractalCircle(width/2,width,theDepth);
}
function fractalCircle(x,diameter,depth){
//base case
  fill(theColors[depth]);
  circle(x,height/2,diameter);
  if(depth>0){
    depth--;
    //left side
    fractalCircle(x-diameter/4,diameter/2,depth);
    //rigth side
    fractalCircle(x+diameter/4,diameter/2,depth);
  }
}

