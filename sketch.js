points = [];
start = false;

function setup() {
  createCanvas(600, 200);
}

function draw() {
  background(255);

  if(start){
    points.push(createVector(mouseX,mouseY));
  }

  stroke(0);
  noFill();
  beginShape();

  for(let i = 0; i<points.length; i++){
    let x = points[i].x;
    let y = points[i].y;

    vertex(x,y);
  }
  endShape();
}

function mousePressed(){
  start = true;
}

function mouseReleased(){
  start = false;
}


