function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
}

function draw() {
  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  noStroke();
  background(mouseY/2, 100, 100);

  fill(360 - mouseY/2, 100, 100);
  rect(windowWidth/2, windowHeight/2, mouseX+1, mouseX+1);
}
