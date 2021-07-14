function setup() {
  createCanvas(1900, 800);
  background(255,255,255);

  translate(width * 0.5, height * 0.5);
  let numA = 10;
  let numB = 7;
  let scalar = 50;
  numA *= scalar;
  numB *= scalar;
  //カラーモード
  let col;
  //プログラム実行中に動く変数
  let wd = numB;
  let xPos = 0;
  let yPos = 0;
  let itr = 0;
  //描写
  while (wd > 0){
    itr++;
    if (itr % 2 == 1){
      while (xPos + wd < numA){
        col = color(random(100), random(150), 30);
        fill(col);
        strokeWeight( 0.5 );
        stroke(255, 255, 255);
        rect(xPos, yPos, wd ,wd);
        xPos += wd;
      }
      wd = numA - xPos;
    } else {
      while (yPos + wd <= numB){
        col = color(random(100), random(150), 30);
        fill(col);
        strokeWeight( 0.5 );
        stroke(255, 255, 255);
        rect(xPos, yPos, wd, wd);
        yPos += wd;
      }
      wd = numB - yPos;
    }
  }
}
