// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(300, 200);
  background(0,0,255);
  //angleMode(DEGREES); ラジアンではなく、360度で考える方法（TWO_PIを360に変更する）
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let x = 150 + cos(theta) * 50;  //単位円をsin,cosは考えているから、半径50の場合は*50する
    let y = 100 + sin(theta) * 50;　//左上が原点になっている →x軸に関して対称移動させる
                                    //（100,100）は中心座標
    star(x, y, 10);
  }

  function star(cx, cy, r){
    fill(255,255,0);
    noStroke();
    beginShape();
    for(var i = 0; i < 5; i++){
      let theta = TWO_PI * i * 2 / 5 - HALF_PI;  //2/5の2の部分が、2個先の点を指している。1/5にすれば正五角形になる
      let x = cx + cos(theta) * r;
      let y = cy + sin(theta) * r;
      vertex(x,y);
    }
    endShape(CLOSE);
  }

}

// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
// setupの外に書く？



// sinカーブを描く方法
// function setup(){
//   createCanvas(200, 200);
//   background(192);
//   //angleMode(DEGREES); ラジアンではなく、360度で考える方法（TWO_PIを360に変更する）
//   for(let i = 0; i < 100; i++){
//     let theta = TWO_PI * i / 100;
//     // let x = 100 + cos(theta) * 50;  //単位円をsin,cosは考えているから、半径50の場合は*50する
//     let x = 200*i/100;
//     let y = 100 + sin(theta) * 50;　//左上が原点になっている →x軸に関して対称移動させる
//                                     //（100,100）は中心座標
//     ellipse(x, y, 10);
//   }
// }
