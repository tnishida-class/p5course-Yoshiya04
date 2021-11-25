let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 50;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  if(keyIsDown(" ".charCodeAt(0))){
    count = (count + 1) % cycle;
  }
  else{
    count = (count + 0.5) % cycle;
  }
  // BLANK[1]
　if(count > 50 && count <= 70){
    ellipse(width / 2, height / 2, count);
    }
  else if(count > 70 && count <= 90){
      ellipse(width / 2, height / 2, 140-count);
    }
  else{
    ellipse(width / 2, height / 2, 50);
    }

  }


// // 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
// let count;
// let cycle;
//
// function setup(){
//   createCanvas(200, 200);
//   count = 0;
//   cycle = 100;
// }
//
// function draw(){
//   background(160, 192, 255);
//   count = (count + 1) % cycle;
//   // BLANK[1]
//   // let size = count;
//   ellipse(width / 2, height / 2, size);
// }

// 心臓完成
// let count;
// let cycle;
//
// function setup(){
//   createCanvas(200, 200);
//   count = 50;
//   cycle = 100;
// }
//
// function draw(){
//   background(160, 192, 255);
//   count = (count + 1) % cycle;
//   // BLANK[1]
// 　if(count > 50 && count <= 60){
//     ellipse(width / 2, height / 2, count);
//     }
//     else if(count > 60 && count <= 70){
//       ellipse(width / 2, height / 2, 120-count);
//     }
//   else{
//     ellipse(width / 2, height / 2, 50);
//     }
//
//   }
