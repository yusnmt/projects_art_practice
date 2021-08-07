function setup() {
  createCanvas(500, 500);
  var numA = 13;
  var numB = 6;
  var ratio = numB / numA;
  var xPos = 0;
  var yPos = 0;
  var itr = 0;
  colorMode(HSB, 1);
  var wd = width;
  while(wd > 0.1){
    itr++;
    if(itr % 2 == 1){
      while(xPos + wd * ratio < width + 0.1){
        fill(color(random(1), 1, 1));
        rect(xPos, yPos, wd * ratio, wd);
        xPos += wd * ratio;
      }
      wd = width - xPos;
    } else {
      while(xPos + wd / ratio < width + 0.1){
        fill(color(random(1), 1, 1));
        rect(xPos, yPos, wd, wd / ratio);
        yPos += wd / ratio;
      }
      wd = width - yPos;
    }
  }

}

function draw() {
}
