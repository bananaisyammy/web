const rad2deg = (rad) => rad * (180 / Math.PI);
const canvasX = window.innerWidth;
const canvasY = window.innerHeight;
/*var dots_x = [100];
var dots_y = [100];
var dots_size = [50];
var dots_speed_x = [20];
var dots_speed_y = [30];*/
var dots = [{x:100,y:100,size:50,speed_x:20,speed_y:30,r:Math.random()*255,g:Math.random()*255,b:Math.random()*255},{x:120,y:105,size:50,speed_x: -20,speed_y:30,r:Math.random()*255,g:Math.random()*255,b:Math.random()*255}];
var click_x;
var click_y;
let gx = 0;
let gy = 0.098;
let gx_slider;
let gy_slider;
let boundx;
let boundy;
let nenchaku;
let nenchaku_slider;
let boundx_slider;
let boundy_slider;
var mousex_rec;
var mousey_rec;
var opcheck;


const canvasColor = '#000000';

// 最初に１回だけ実行される処理
function setup() {
  // キャンバスの作成
  createCanvas(canvasX, canvasY);
  // 背景色の設定
  background(canvasColor);
  gx_slider = createSlider(-1,1,0,0.0001);
  boundx_slider = createSlider(0,1,0.9,0.0001);
  boundy_slider = createSlider(0,1,0.9,0.0001);
  gy_slider = createSlider(-1,1,0,0.0001);
  gx_slider.position(0, 10);
  gy_slider.position(0, 20);
  boundx_slider.position(0, 30);
  boundy_slider.position(0, 40);
  opcheck = createCheckbox();
  opcheck.position(0,45);
}

/*function windowResized() {
  canvasX = windowWidth;
  canvasY = windowHeight;
  resizeCanvas(canvasX,canvasY);
}*/

// setup後に繰り返し実行される処理（フレーム単位）
function draw() {
  if(mouseIsPressed && mouseX>100 && mouseY>50){
    
    /*for(i=0;i<dots;i++){
      dots.push({x:mouseX,y:mouseY,size:Math.random()*10,speed_x:Math.random()*10-5,speed_y:Math.random()*10-5,r:Math.random()*255,g:Math.random()*255,b:Math.random()*255});
    }
    dots.push({x:mouseX,y:mouseY,size:Math.random()*10,speed_x:Math.random()*10-5,speed_y:Math.random()*10-5,r:Math.random()*255,g:Math.random()*255,b:Math.random()*255});*/
    /*for(i=0;i<36;i++){
      dots.push({x:mouseX+Math.sin(i*10)*100,y:mouseY+Math.cos(i*10)*100,size:Math.random()*10,speed_x:Math.sin(i*10)*2,speed_y:Math.cos(i*10)*2,r:Math.random()*255,g:Math.random()*255,b:Math.random()*255});
    }*/
    /*
    for(i=0;i<10;i++){
      dots.push({x:mouseX+Math.sin(i*36)*100,y:mouseY+Math.cos(i*36)*100,size:Math.random()*10,speed_x:Math.sin(i*36)*2,speed_y:Math.cos(i*36)*2,r:Math.random()*255,g:Math.random()*255,b:Math.random()*255});
    }*/
    for(i=0;i<10;i++){
      dots.push({x:mouseX,y:mouseY,size:Math.random()*10,speed_x:Math.sin(i*36)*5,speed_y:Math.cos(i*36)*5,r:Math.random()*255,g:Math.random()*255,b:Math.random()*255});
    }      
  }
  background(canvasColor);
  noStroke();
  let rec_dot_x;
  let rec_dot_y;
  for (i=0;i<dots.length;i++){
    //dots[i].speed_x += Math.random() - 0.5;
    //dots[i].speed_y += Math.random() - 0.5;
    rec_dot_x = dots[i].x;
    rec_dot_y = dots[i].y;
    fill(dots[i].r,dots[i].g,dots[i].b);
    circle( dots[i].x, dots[i].y, dots[i].size);
    dots[i].x += dots[i].speed_x;
    dots[i].y += dots[i].speed_y;
    dots[i].speed_x += gx;
    dots[i].speed_y += gy;
    if(dots[i].x < dots[i].size/2 || dots[i].x > canvasX-dots[i].size/2){
      dots[i].x = rec_dot_x;
      dots[i].speed_x = dots[i].speed_x * -boundx;
    }
    if(dots[i].y < dots[i].size/2 || dots[i].y > canvasY-dots[i].size/2){
      dots[i].y = rec_dot_y;
      dots[i].speed_y = dots[i].speed_y * -boundy;
    }
    if(opcheck.checked()){
      
      for(i2=0;i2<dots.length;i2++){
        line(dots[i].x,dots[i].y,dots[i2].x,dots[i2].y);
        let distance = dist(dots[i].x,dots[i].y,dots[i2].x,dots[i2].y)
        //(x1-x2)^2 + (y1-y2)^2
        //text(distance, 1000, 50);
        if(distance<dots[i].size/2+dots[i2].size/2){
          //background("red")
          //var deg = rad2deg(Math.atan2(dots[i].y-dots[i].y,dots[i].x-dots[i].x));
          let rec_speedx = dots[i].speed_x;
          let rec_speedy = dots[i].speed_y;
          dots[i].speed_x = dots[i2].speed_x;
          dots[i].speed_y = dots[i2].speed_y;
          dots[i2].speed_x = rec_speedx;
          dots[i2].speed_y = rec_speedy;
        }
      }
    }  
    dots[i].speed_x = dots[i].speed_x * 0.99999;
    dots[i].speed_y = dots[i].speed_y * 0.99999;
  }
  gx = gx_slider.value();
  gy = gy_slider.value();
  boundx = boundx_slider.value();
  boundy = boundy_slider.value();
}

function reload() {

}

/*function mousePressed(){

}


document.addEventListener("click", e => {
  // マウスの座標をCanvas内の座標とあわせるため
  const rect = document.getBoundingClientRect();

  click_x = e.clientX - rect.left;
  click_y = e.clientY - rect.top;
  dots.push({x:click_x,y:click_y,size:Math.random()*10,speed_x:Math.random()*10,speed_y:Math.random()*10,color:Math.random()})


  // クリック判定処理
});*/