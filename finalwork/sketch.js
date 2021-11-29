// 最終課題を制作しよう
let x,y,vx,vy,x2,y2,x3,y3,img1,img2,img3,img4;
const g=0.25;
const vyMax=15;

function preload() {
  img1 = loadImage('tennis_left-removebg-preview.png');
  img2 = loadImage('tennis_right-removebg-preview.png');
  img3 = loadImage('tennisball.png');
　}

function setup(){
  createCanvas(windowWidth, windowHeight);
  x=100; y=250; vx=5.5, vy=2
  x2 = 30;
  y2 = windowHeight*2/3;
  x3 = windowWidth-130;
  y3 = windowHeight*2/3;
  racket1();  //ラケット2個にするときには、x3,x4などの文字入れてあげる
  racket2();
　}

function draw(){
  background(94, 185, 84);　

  stroke(255);
  strokeWeight(7);
  for(let i=0; i<5; i++){
    line(i*windowWidth/4,height/2,i*windowWidth/4,height);
  }
  line(0,height/2,width,height/2);
  line(0,height-2,width,height-2);
  line(width/4,height*3/4,width*3/4,height*3/4);

  stroke(0);
  image(img1,x2,y2,100,150);
  if(keyIsDown("A".charCodeAt(0))){ x2-= 7; }
  if(keyIsDown("D".charCodeAt(0))){ x2+= 7; }
  if(keyIsDown("S".charCodeAt(0))){ y2+= 7; }
  if(keyIsDown("W".charCodeAt(0))){ y2-= 7; }
  x2 = constrain(x2, 0, width/2);
  y2 = constrain(y2, 0, height-75);

  stroke(0);
  image(img2,x3,y3,100,150);
  if(keyIsDown(LEFT_ARROW)){ x3 -= 7; }
  if(keyIsDown(RIGHT_ARROW)){ x3 += 7; }
  if(keyIsDown(UP_ARROW)){ y3 -= 7; }
  if(keyIsDown(DOWN_ARROW)){ y3 += 7; }
  x3 = constrain(x3, width/2, width-100);
  y3 = constrain(y3, 0, height-75);

  image(img3,x,y,50,50);
  x += vx;
  y += vy/1.5;
  vy = constrain(vy + g, -vyMax, vyMax);
  if(y < 0 || y > height){ vy = -1 * vy; }
  if(racket1()){vx = -1* vx;}
  if(racket2()){vx = -1* vx;}
  y = constrain(y, 0, height);

  // 勝利判定
  if(x<0){
    fill(255,0,0);
    textSize(150);
    text('WIN',width-400,height/5,500,500);
  }
  if(x>width){
    fill(255,0,0);
    textSize(150);
    text('WIN',100,height/5,500,500);
  }

// 操作方法
  let r='左の選手 → 右：キーボードのD　左：A　上：W　下：S　 右の選手 → 右：右矢印　左：左矢印　上：上矢印　下：下矢印';
  textSize(20);
  strokeWeight(1);
  fill(0);
  text(r,0,50,610,150);
}

function racket1(){
  if(x<(x2+100) && x>x2 && y<(y2+100) && y>y2){
   return true;
  }
  else{
   return false;
  }
}

function racket2(){
  if(x<(x3+100) && x>(x3-25) && y<(y3+100) && y>y3){
   return true;
  }
  else{
   return false;
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

// 自分の関数→ラケットにボールが当たった（長いから関数にして）
// draw関数の中にはif(ラケットに当たったとき)などにする
