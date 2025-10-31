const canvasX = 800;
const canvasY = 400;

const canvasColor = '#000000';

let player1X = 50
let player1Y = 150
let player2X = 750
let player2Y = 150
let ballX = 400
let ballY = 200
let ballspeed = 3
let speed = 3
let score1 = 0
let score2 = 0
let random = 0
let random2 = 0
const sayuu = [3, -3]
let hissatu1 = 0
let hissatu2 = 0
let hissatu = true

let backgroundImg;
let ballImg;
let redBarImg;
let blueBarImg;
function setup() {
    backgroundImg = loadImage('background.png');
    ballImg = loadImage('ball.png');
    redBarImg = loadImage('redBar.png');
    blueBarImg = loadImage('blueBar.png');
    createCanvas(canvasX, canvasY);
    background(backgroundImg);
}


function draw() {
    background(backgroundImg);
    document.getElementById('target').textContent = "PLAYER1必殺[" + hissatu1 + "]" + "RESULT[" + score1 + "対" + score2 + "]" + "PLAYER必殺[" + hissatu2 + "]";
    fill("#ff0030")
    //quad(player1X, player1Y, player1X + 10, player1Y, player1X + 10, player1Y + 100, player1X, player1Y + 100)
    image(redBarImg,player1X,player1Y,10,100)
    fill("#00a0ff")
    //quad(player2X, player2Y, player2X + 10, player2Y, player2X + 10, player2Y + 100, player2X, player2Y + 100)
    image(blueBarImg,player2X,player2Y,10,100)
    if (keyIsDown("W".charCodeAt(0)) && player1Y > 0) {
        player1Y -= 8
        hissatu1 += 1
    }
    if (keyIsDown("S".charCodeAt(0)) && player1Y + 100 < 400) {
        player1Y += 8
        hissatu1 += 1
    }
    if (keyIsDown(UP_ARROW) && player2Y > 0) {
        player2Y -= 8;
        hissatu2 += 1
    }
    if (keyIsDown(DOWN_ARROW) && player2Y < 300) {
        player2Y += 8;
        hissatu2 += 1
    }
    if (hissatu) {
        fill("#ffffff")
    }
    else {
        fill("#eeff00")
    }
    //circle(ballX, ballY, 20)
    image(ballImg,ballX-10,ballY-10,20,20)
    ballX += ballspeed
    ballY += speed
    if (ballY < 11) {
        speed = 0 - speed
    }
    if (ballY > 391) {
        speed = 0 - speed
    }
    if (ballX > 800) {
        alert("PLAYER1に+1点!")
        score1 += 1
        player1X = 50
        player1Y = 150
        player2X = 750
        player2Y = 150
        ballX = 400
        ballY = 200
        random2 = Math.floor(Math.random() * 2);
        ballspeed = sayuu[random2]
        random = Math.floor(Math.random() * 10) + -5
        if (random == 0) {
            random = 3
        };
        speed = random
        hissatu = true
        if (score1 == 7) {
            alert("PLAYER1の勝ち")
            player1X = 50
            player1Y = 150
            player2X = 750
            player2Y = 150
            ballX = 400
            ballY = 200
            random2 = Math.floor(Math.random() * 2);
            ballspeed = sayuu[random2]
            random = Math.floor(Math.random() * 10) + -5
            if (random == 0) {
                random = 3
            };
            speed = random
            hissatu = true
            score1 = 0
            score2 = 0
            hissatu1 = 0
            hissatu2 = 0
        }
    }
    if (ballX < 0) {
        alert("PLAYER2に+１点!")
        score2 += 1
        player1X = 50
        player1Y = 150
        player2X = 750
        player2Y = 150
        ballX = 400
        ballY = 200
        random2 = Math.floor(Math.random() * 2);
        ballspeed = sayuu[random2]
        random = Math.floor(Math.random() * 10) + -5
        if (random == 0) {
            random = 3
        };
        speed = random
        hissatu = true
        if (score2 == 7) {
            alert("PLAYER2の勝ち")
            player1X = 50
            player1Y = 150
            player2X = 750
            player2Y = 150
            ballX = 400
            ballY = 200
            random2 = Math.floor(Math.random() * 2);
            ballspeed = sayuu[random2]
            random = Math.floor(Math.random() * 10) + -5
            if (random == 0) {
                random = 3
            };
            speed = random
            hissatu = true
            score1 = 0
            score2 = 0
            hissatu1 = 0
            hissatu2 = 0
        }
    }
    if (ballX > player1X - 5 && ballX < player1X + 25) {
        if (ballY > player1Y && ballY < player1Y + 100) {
            ballspeed = 0 - ballspeed
            if (keyIsDown("D".charCodeAt(0))) {
                ballspeed += 1
            }
            if (keyIsDown("W".charCodeAt(0)) && player1Y > 0) {
                speed -= 1
            }
            if (keyIsDown("S".charCodeAt(0)) && player1Y + 100 < 400) {
                speed += 1
            }
            if (keyIsDown("A".charCodeAt(0))) {
                if (hissatu1 > 1999) {
                    hissatu1 -= 2000
                    speed = 20
                    ballspeed += 5
                    hissatu = false
                }
            }
        }
    }
    if (ballX < player2X + 15 && ballX > player2X - 15) {
        if (ballY > player2Y && ballY < player2Y + 100) {
            ballspeed = 0 - ballspeed
            if (keyIsDown(LEFT_ARROW) && player2Y < 300) {
                ballspeed -= 1;
            }
            if (keyIsDown(UP_ARROW) && player2Y > 0) {
                speed -= 1;
            }
            if (keyIsDown(DOWN_ARROW) && player2Y < 300) {
                speed += 1;
            }
            if (keyIsDown(RIGHT_ARROW)) {
                if (hissatu2 > 1999) {
                    hissatu2 -= 2000
                    speed = 20
                    ballspeed -= 5
                    hissatu = false
                }
            }
        }
    }
}