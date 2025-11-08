let nextButtonImg;
let backButtonImg;
let menuBgImg;
const widthPercent = window.innerWidth/1920;
const heightPercent = window.innerHeight/1440;
function setup() {
    createCanvas(1920*widthPercent, 1440*heightPercent);
    nextButtonImg = loadImage('nextButton.png');
    backButtonImg = loadImage('backButton.png');
    menuBgImg = loadImage('menuBg.png');
}
function draw() {
    background(menuBgImg);
}

window.onload = function () {
    //document.getElementById("nextButton").addEventListener("click", onNextButtonClick);
    //document.getElementById("backButton").addEventListener("click", onBackButtonClick);
}
function onNextButtonClick() {
    alert("Next button clicked!");
}
function onBackButtonClick() {
    alert("Back button clicked!");
}