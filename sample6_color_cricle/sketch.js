function setup() {
  createCanvas(400, 400);
}

function draw() {
  colorMode(HSB, 360, width, height);
  background(360);

  let angleStep = 360/segmentCount;

  beginShape(TRIANGLE_FAN);
  vertex(width/2, height/2);
  for(let angle=0; angle<=360, angle+=angleStep;) {
    let vx = width/2 + cos(radians(angle))*RADIUS;
    let vy = height/2 + sin(radians(angle))*RADIUS;
    vertex(vx, vy);
    fill(angle, mouseX, mouseY);
  }
  endShape();
}

function keyReleased(){
  switch(key){
    case '1':
      segmentCount = 360;
      break;
    case '2':
      segmentCount = 45;
      break;
    case '3':
      segmentCount = 24;
      break;
    case '4':
      segmentCount = 12;
      break;
    case '5':
      segmentCount = 6
      break;
  }
}