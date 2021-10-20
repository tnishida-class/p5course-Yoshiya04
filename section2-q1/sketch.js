// 小手調べ //まずは一個ずつ円書いてみる
function setup(){
noFill();

  for(let i = 0; i < 10; i++){
    let r=i*10+10;
    if(i<5){   //iが５より小さいとき青
      stroke(0,0,225);
    }
    else{　　　//iが5以上のとき赤
      stroke(255,0,0);
    }
    ellipse(50,50,r);

    // BLANK[1]
  }
}
