const canvasX = 1000;
const canvasY = 600;

const canvasColor = '#000000';


const jumpSpeed = 0.35;
const fallSpeed = -4.5;
let circleX = 100
let circleY = 300
let circleX2 = 200
let circleY2 = 300

let fall = -9;
let fall2 = -9;
let up = false
let up2 = false
let upup = false
let upup2 = false
let wallY = 0
let wallX = 1000
let wall = true
let score = -1


function setup() {
    createCanvas(canvasX, canvasY);

    background(canvasColor);
}


function draw() {
    document.getElementById('target').textContent = "SCORE" + score;
    background(canvasColor);
    if (wall) {
        wallY = Math.floor(Math.random() * 400) + 0
        wall = false
        wallX = 1300
        score += 1
    }
    quad(wallX, 0, wallX + 250, 0, wallX + 250, wallY, wallX, wallY)
    quad(wallX, wallY + 200, wallX + 250, wallY + 200, wallX + 250, 600, wallX, 600)
    if (wallX < -250) {
        wall = true
    }
    wallX -= 3
    fill("#ffff00")
    noStroke();
    circle(circleX, circleY, 50)
    fill("#00ffff")
    circle(circleX2, circleY2, 50)
    if (circleY < 0 || circleY > 620) {
        onDeath();
    }
    if (circleX > wallX - 20 && circleX < wallX + 270) {
        if (circleY - 20 < wallY || circleY + 20 > wallY + 200) {
            onDeath();
        }
    }
    if (circleY2 < 0 || circleY2 > 620) {
        onDeath();
    }
    if (circleX2 > wallX - 20 && circleX2 < wallX + 270) {
        if (circleY2 - 20 < wallY || circleY2 + 20 > wallY + 200) {
            onDeath();
        }
    }
    if (keyIsDown(LEFT_ARROW) && circleX > 25) {
        circleX -= 5;
    }
    if (keyIsDown(RIGHT_ARROW) && circleX < canvasX - 25) {
        circleX += 5;
    }
    if (keyIsDown(UP_ARROW)) {
        up = true
        upup = true
    }
    if (keyIsDown("A".charCodeAt(0)) && circleX2 > 25) {
        circleX2 -= 5;
    }
    if (keyIsDown("D".charCodeAt(0)) && circleX2 < canvasX - 25) {
        circleX2 += 5;
    }
    if (keyIsDown("W".charCodeAt(0))) {
        up2 = true
        upup2 = true
    }
    if (up) {
        circleY += fall
        fall += jumpSpeed
        if (upup) {
            fall = fallSpeed
            upup = false
        }
    }
    if (up2) {
        circleY2 += fall2
        fall2 += jumpSpeed
        if (upup2) {
            fall2 = fallSpeed
            upup2 = false
        }
    }
}

function onDeath() {
    alert("DEATH")
    circleX = 100
    circleY = 300
    circleX2 = 200
    circleY2 = 300
    fall = -9
    fall2 = -9
    up2 = false
    upup2 = false
    up = false
    upup = false
    wallY = 0
    wallX = 1000
    wall = true
    score = -1

}

