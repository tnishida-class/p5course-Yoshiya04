// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;　//sizeは幅を８で割った
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if((i+j)%2==0){
        fill(255,255,255);
      }
      else{
        fill(128,128,128);
      }
      rect(size*i , size *j, size,size);

      if((i+j)%2==1 && j<3){
        fill(255,0,0);
      }
      else if((i+j)%2==1 && j>4){
        fill(0,0,0);
      }
      ellipse(size*i + 12.5 , size *j + 12.5, size);
    }
  }
}

// noStrokeは最後に元に戻す　これ忘れない！
