let myXPos = 250
let myYPos = 250

function setup() {
  createCanvas(500, 500);
  noStroke();

  rectMode(CENTER);
}

function draw() {
  background(0);
fill(0,255,0)
  rect(myXPos,myYPos,30,30)

  if(keyIsDown(RIGHT_ARROW)){
    myXPos +=3
  }
  if (keyIsDown(LEFT_ARROW)){
    myXPos -=3
  }
  if (keyIsDown(DOWN_ARROW)){
    myYPos +=3
  }
  if(keyIsDown(UP_ARROW)){
    myYPos -=3
  }
}
