let x, y, vx, vy;
const g = 1; // 重力加速度
const vyMax = 30;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 8;
  vy = 8;
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 20);
  if(keyIsDown(LEFT_ARROW)){ x -= vx; }
  if(keyIsDown(RIGHT_ARROW)){ x += vx; }
  if(y >= height/2-20 && keyIsDown(" ".charCodeAt(0))){
    // y >= height-20は空中で2回以上ジャンプできないようにする
    vy = -20;
  }
    y += vy;
    vy = constrain(vy+g, -vyMax, vyMax);

//   if(x < 0 || x > width){ vx = -1 * vx; }勝手に跳ね返らない
  if(y > height){ vy = 0; }　
  x = constrain(x, 0, width);
  y = constrain(y, 0, height / 2);
   //height/2をheigt-10にしたら一番下にボールが来る
   // 一番下にボールを置く場合は、18のheight/2-20をheight-20に変更する

  function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
 }
}



// // テキスト「アニメーションの基本」 元の教材
// let x, y, vx, vy;
// const g = 1; // 重力加速度
// const vyMax = 30;
//
// function setup(){
//   createCanvas(windowWidth, windowHeight);
//   x = width / 2;
//   y = height / 2;
//   vx = 8;
//   vy = 8;
// }
//
// function draw(){
//   background(160, 192, 255);
//   ellipse(x, y, 20, 20);
//   x += vx;
//   y += vy;
//
//   // 重力（コメント機能でオンオフ切り替えて実行してみましょう）
//   vy = constrain(vy + g, -vyMax, vyMax);
//
//   // 端の処理パターン (1) 反対側から出てくる
//   // if(x > width){ x = 0; }
//   // else if(x < 0){ x = width; }
//   // if(y > height){ y = 0; }
//   // if(y < 0){ y = height; }
//
//   // 端の処理パターン (2) 跳ね返る
//   if(x < 0 || x > width){ vx = -1 * vx; }
//   if(y < 0 || y > height){ vy = -1 * vy; }
//   x = constrain(x, 0, width);
//   y = constrain(y, 0, height);
// }
//
// function windowResized(){
//   resizeCanvas(windowWidth, windowHeight);
// }
