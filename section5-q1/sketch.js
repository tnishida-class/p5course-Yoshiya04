// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46");
}

function balloon(t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 100;
  fill(255,0,155);
  ellipse(200, h+p, w + p * 2, h + p * 2);
  fill(255);
  text(t, p+50, h + p);
}

function draw(){
  fill(255,0,155);
  noStroke();
  triangle(300,200,320,180,360,220);
}


// function balloon(t){
//   let w = textWidth(t);
//   let h = textAscent() + textDescent();
//   let p = 2;
//   fill(0);
//   ellipse(0, 0, w + p * 2, h + p * 2);
//   fill(255);
//   text(t, p, h + p);
// }
