let nextButton;
let backButton;
const widthPercent = window.innerWidth/1920;
const heightPercent = window.innerHeight/1440;

window.onload = function () {
    //imgクリック時に関数を呼び出す
    document.getElementById("nextButton").addEventListener("click", onNextButtonClick);
    document.getElementById("backButton").addEventListener("click", onBackButtonClick);

    //背景画像設定
    document.body.style.backgroundImage = "url('menuBg.png')";
    this.document.body.style.backgroundSize = "cover";

    //nextButton位置調整
    nextButton = this.document.getElementById("nextButton")
    nextButton.style.width = 150 * widthPercent + "px";
    nextButton.style.height = 165 * heightPercent + "px";
    nextButton.style.position = "absolute";
    nextButton.style.left = 1575 * widthPercent + "px";
    nextButton.style.top = 660 * heightPercent + "px";

    //backButton位置調整
    backButton = this.document.getElementById("backButton")
    backButton.style.width = 165 * widthPercent + "px";
    backButton.style.height = 180 * heightPercent + "px";
    backButton.style.position = "absolute";
    backButton.style.left = 180 * widthPercent + "px";
    backButton.style.top = 660 * heightPercent + "px";
}
function onNextButtonClick() {
    alert("Next button clicked!");
}
function onBackButtonClick() {
    alert("Back button clicked!");
}