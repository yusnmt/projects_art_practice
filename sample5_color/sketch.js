function setup() {
  createCanvas(800, 400);
  background(0);
}

function draw() {
  colorMode(HSB, width, height, 100);
  let stepX = mouseX+2;
  let stepY = mouseY+2;

  for(let gridY=0; gridY<height; gridY+=stepY){
    for(let gridX=0; gridX<width; gridX+=stepX){
      noStroke();
      fill(gridX, height-gridY, 100);
      rect(gridX, gridY, stepX, stepY);
    }
  }
}