

const canvasX = 800;
const canvasY = 450;

const canvasColor = '#000000';

let squareX = 50
let squareY = 400
let jump = 17
let up = false
let tekijump = 13
let tekijump1 = 15
let tekijump2 = 17
let tekijump3 = 19
let tekiX = 1000
let tekiY = 400
let teki = true
let tekiX1 = 1200
let tekiY1 = 400
let teki1 = true
let tekiX2 = 1400
let tekiY2 = 400
let teki2 = true
let tekiX3 = 1600
let tekiY3 = 400
let teki3 = true
let tekisize = 50
let death = false
let taosu = true
let ugoku = true
let score = 0
let tekitaosu = false
let tekitaosu1 = false
let tekitaosu2 = false
let tekitaosu3 = false
let saikoukiroku = 0

// 最初に１回だけ実行される処理
function setup() {
  // キャンバスの作成
  createCanvas(canvasX, canvasY);
  // 背景色の設定
  background(canvasColor);
}

// setup後に繰り返し実行される処理（フレーム単位）
function draw(){
  createCanvas(canvasX, canvasY);
  background(canvasColor)
  document.getElementById('target').textContent = "あなたのスコア        " + score + "               最高記録        " + saikoukiroku;
  fill("#ffffff")
  square(squareX,squareY,50)
  if(teki){
    fill("#30ff00")
    square(tekiX,tekiY,tekisize)
    tekiX -= 1.3
    tekiY -= tekijump
    tekijump -= 1
    if(tekiY>399){
      tekijump = 13
      tekiY = 400
    }
    if(tekiX<-50){
      if(saikoukiroku<score){
        saikoukiroku = score
      }
      alert("GAMEOVER")
      squareX = 50
      squareY = 400
      jump = 17
      up = false
      tekijump = 13
      tekijump1 = 15
      tekijump2 = 17
      tekijump3 = 19
      tekiX = 1000
      tekiY = 400
      teki = true
      tekiX1 = 1200
      tekiY1 = 400
      teki1 = true
      tekiX2 = 1400
      tekiY2 = 400
      teki2 = true
      tekiX3 = 1600
      tekiY3 = 400
      teki3 = true
      tekisize = 50
      death = false
      taosu = true
      ugoku = true
      score = 0
      tekitaosu = false
      tekitaosu1 = false
      tekitaosu2 = false
      tekitaosu3 = false
    }
  }
  if(teki1){
    fill("#30ff00")
    square(tekiX1,tekiY1,tekisize)
    tekiX1 -= 1.3
    tekiY1 -= tekijump1
    tekijump1 -= 1
    if(tekiY1>399){
      tekijump1 = 15
      tekiY1 = 400
    }
    if(tekiX1<-50){
      if(saikoukiroku<score){
        saikoukiroku = score
      }
      alert("GAMEOVER")
      squareX = 50
      squareY = 400
      jump = 17
      up = false
      tekijump = 13
      tekijump1 = 15
      tekijump2 = 17
      tekijump3 = 19
      tekiX = 1000
      tekiY = 400
      teki = true
      tekiX1 = 1200
      tekiY1 = 400
      teki1 = true
      tekiX2 = 1400
      tekiY2 = 400
      teki2 = true
      tekiX3 = 1600
      tekiY3 = 400
      teki3 = true
      tekisize = 50
      death = false
      taosu = true
      ugoku = true
      score = 0
      tekitaosu = false
      tekitaosu1 = false
      tekitaosu2 = false
      tekitaosu3 = false
    }
  }
  if(teki2){
    fill("#30ff00")
    square(tekiX2,tekiY2,tekisize)
    tekiX2 -= 1.3
    tekiY2 -= tekijump2
    tekijump2 -= 1
    if(tekiY2>399){
      tekijump2 = 17
      tekiY2 = 400
    }
    if(tekiX2<-50){
      if(saikoukiroku<score){
        saikoukiroku = score
      }
      alert("GAMEOVER")
      squareX = 50
      squareY = 400
      jump = 17
      up = false
      tekijump = 13
      tekijump1 = 15
      tekijump2 = 17
      tekijump3 = 19
      tekiX = 1000
      tekiY = 400
      teki = true
      tekiX1 = 1200
      tekiY1 = 400
      teki1 = true
      tekiX2 = 1400
      tekiY2 = 400
      teki2 = true
      tekiX3 = 1600
      tekiY3 = 400
      teki3 = true
      tekisize = 50
      death = false
      taosu = true
      ugoku = true
      score = 0
      tekitaosu = false
      tekitaosu1 = false
      tekitaosu2 = false
      tekitaosu3 = false
    }
  }
  if(teki3){
    fill("#30ff00")
    square(tekiX3,tekiY3,tekisize)
    tekiX3 -= 1.3
    tekiY3 -= tekijump3
    tekijump3 -= 1
    if(tekiY3>399){
      tekijump3 = 19
      tekiY3 = 400
    }
    if(tekiX3<-50){
      if(saikoukiroku<score){
        saikoukiroku = score
      }
      alert("GAMEOVER")
      squareX = 50
      squareY = 400
      jump = 17
      up = false
      tekijump = 13
      tekijump1 = 15
      tekijump2 = 17
      tekijump3 = 19
      tekiX = 1000
      tekiY = 400
      teki = true
      tekiX1 = 1200
      tekiY1 = 400
      teki1 = true
      tekiX2 = 1400
      tekiY2 = 400
      teki2 = true
      tekiX3 = 1600
      tekiY3 = 400
      teki3 = true
      tekisize = 50
      death = false
      taosu = true
      ugoku = true
      score = 0
      tekitaosu = false
      tekitaosu1 = false
      tekitaosu2 = false
      tekitaosu3 = false
    }
  }
  if(keyIsDown(LEFT_ARROW) && squareX>0 && ugoku){
    squareX -= 5; 
  }
  if(keyIsDown(RIGHT_ARROW) && squareX<canvasX-50 && ugoku){
    squareX += 5;
  }
  if(keyIsDown(UP_ARROW) && ugoku){
    up = true
}
if(up){
  squareY -= jump
    jump -= 1
    if(squareY>399){
      up = false
      jump = 17
      squareY = 400
    }
  }
  if(squareY<tekiY+20-tekisize && squareY>tekiY-8-tekisize){
    if(tekiX>squareX-50 && tekiX<squareX+50){
      if(taosu){
        score += 1
        tekiX = 100000
        up = true
        jump = 17
        tekitaosu = true
      }
    }
  }
  if(squareY>tekiY-40 && squareY<tekiY+40){
    if(squareX>tekiX-40 && squareX<tekiX+40){
      death = true
      up = false
      ugoku = false
      taosu = false
    }
    if(squareX>tekiX+10 && squareX<tekiX+40){
      death = true
      up = false
      ugoku = false
      taosu = false
    }
  }
  if(death){
    squareY -= jump
    jump -= 0.5
    taosu = false
    if(squareY>1000){
      up = false
      jump = 17
      death = false
      if(saikoukiroku<score){
        saikoukiroku = score
      }
      alert("GAMEOVER")
      squareX = 50
      squareY = 400
      jump = 17
      up = false
      tekijump = 13
      tekijump1 = 15
      tekijump2 = 17
      tekijump3 = 19
      tekiX = 1000
      tekiY = 400
      teki = true
      tekiX1 = 1200
      tekiY1 = 400
      teki1 = true
      tekiX2 = 1400
      tekiY2 = 400
      teki2 = true
      tekiX3 = 1600
      tekiY3 = 400
      teki3 = true
      tekisize = 50
      death = false
      taosu = true
      ugoku = true
      score = 0
      tekitaosu = false
      tekitaosu1 = false
      tekitaosu2 = false
      tekitaosu3 = false
    }
    }

  if(squareY<tekiY1+20-tekisize && squareY>tekiY1-8-tekisize){
    if(tekiX1>squareX-50 && tekiX1<squareX+50){
      if(taosu){
        score += 1
        tekiX1 = 120000
        up = true
        jump = 17
        tekitaosu1 = true
      }
    }
  }
  if(squareY>tekiY1-40 && squareY<tekiY1+40){
    if(squareX>tekiX1-40 && squareX<tekiX1+40){
      death = true
      up = false
      ugoku = false
    }
    if(squareX>tekiX1+10 && squareX<tekiX1+40){
      death = true
      up = false
      ugoku = false
    }
  }
  if(squareY<tekiY2+20-tekisize && squareY>tekiY2-8-tekisize){
    if(tekiX2>squareX-50 && tekiX2<squareX+50){
      if(taosu){
        score += 1
        tekiX2 = 140000
        up = true
        jump = 17
        tekitaosu2 = true
      }
    }
  }
  if(squareY>tekiY2-40 && squareY<tekiY2+40){
    if(squareX>tekiX2-40 && squareX<tekiX2+40){
      death = true
      up = false
      ugoku = false
    }
    if(squareX>tekiX2+10 && squareX<tekiX2+40){
      death = true
      up = false
      ugoku = false
    }
  }
  if(squareY<tekiY3+20-tekisize && squareY>tekiY3-8-tekisize){
    if(tekiX3>squareX-50 && tekiX3<squareX+50){
      if(taosu){
        score += 1
        tekiX3 = 160000
        up = true
        jump = 17
        tekitaosu3 = true
      }
    }
  }
  if(squareY>tekiY3-40 && squareY<tekiY3+40){
    if(squareX>tekiX3-40 && squareX<tekiX3+40){
      death = true
      up = false
      ugoku = false
    }
    if(squareX>tekiX3+10 && squareX<tekiX3+40){
      death = true
      up = false
      ugoku = false
    }
  }
  if(tekitaosu && tekitaosu1 && tekitaosu2 && tekitaosu3){
    tekiX = 1000
    tekiX1 = 1200
    tekiX2 = 1400
    tekiX3 = 1600
    tekitaosu = false
    tekitaosu1 = false
    tekitaosu2 = false
    tekitaosu3 = false
  }
}