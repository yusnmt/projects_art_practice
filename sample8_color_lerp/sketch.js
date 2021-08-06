function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);
  colorMode();
  stroke(255);
  let from = color(218, 165, 32);
  let to = color(72, 61, 139);
  colorMode(RGB);
  let interA = lerpColor(from, to, 0.33);
  let interB = lerpColor(from, to , 0.66);
  fill(from);
  rect(10, 20, 50, 300);
  fill(interA);
  rect(60, 20, 50, 300);
  fill(interB);
  rect(110, 20, 50, 300);
  fill(to);
  rect(160, 20, 50, 300);
}
