function setup() {
  createCanvas(400, 400);
}

function draw() {
  // background(220);
  // var c = color(255, 204, 0);
  // fill(c);
  // noStroke();
  // rect(30, 20, 55, 55);

  noStroke();
  var c1 = color(255, 140, 0);
  var c2 = color(0, 255, 255);
  for(var w = 0; w < width; w += 5){
      var c = lerpColor(c1, c2, w / width);
      fill(c);
      rect(w, 0, 5, height);
  }
}
