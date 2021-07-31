function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  let numA = 10;
  let numB = 6;
  let scalar = 50;
  numA *= scalar;
  numB *= scalar;

  let wd = numB;
  let xPos = 0;
  let yPos = 0;
  let itr = 0;

  while(wd > 0){
    itr++;
    if(itr % 2 == 1){
      while(xPos + wd <= numA){
        rect(xPos, yPos, wd, wd);
        xPos += wd;
      }
      wd = numA - xPos;
    } else {
      while(yPos + wd <= numB){
        rect(xPos, yPos, wd, wd);
        yPos += wd;
      }
      wd = numB - yPos
    }
  }
}
