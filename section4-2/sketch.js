//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }

 //  if(count % 60 ==0){
 //  const b = { x: width/2, y: height/2, size: 20, vx: random(2)-1, vy: random(2)-1 };
 //   balls.push(b);
 // }
  //  const b = { x: mouseX, y: mouseY, size: random(20), vx: dx, vy: dy };
  //  balls.push(b);　
  // // drawの中にボールを増やすロジックを入れる
}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size: random(20)+20, vx: dx, vy: dy };
    balls.push(b);　　//ボール増やす指示
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
