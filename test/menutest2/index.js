let nextButton;
let backButton;
const widthPercent = window.innerWidth/1920;
const heightPercent = window.innerHeight/1440;

window.onload = function () {
    //imgクリック時に関数を呼び出す
    this.document.getElementById("nextButton").addEventListener("click", onNextButtonClick);
    document.getElementById("backButton").addEventListener("click", onBackButtonClick);
    document.getElementById("contactButton").addEventListener("click", onContactButtonClick);
    //button定義
    contactButton = this.document.getElementById("contactButton")
    nextButton = this.document.getElementById("nextButton")
    backButton = this.document.getElementById("backButton")

    //nextButton位置調整
    nextButton.style.width = 150 * widthPercent + "px";
    nextButton.style.height = 165 * heightPercent + "px";
    nextButton.style.left = 1575 * widthPercent + "px";
    nextButton.style.top = 660 * heightPercent + "px";

    //backButton位置調整
    backButton.style.width = 165 * widthPercent + "px";
    backButton.style.height = 180 * heightPercent + "px";
    backButton.style.left = 180 * widthPercent + "px";
    backButton.style.top = 660 * heightPercent + "px";

    //contactButton位置調整
    contactButton.style.width = 165 * widthPercent + "px";
    contactButton.style.height = 270 * heightPercent + "px";
    contactButton.style.left = 1560 * widthPercent + "px";
    contactButton.style.top = 345 * heightPercent + "px";
    //lightshadow位置調整

    this.document.querySelectorAll(".tabs").forEach((tab, index) => {
        tab.style.width = 285 * widthPercent + "px";
        tab.style.height = 50 * heightPercent + "px";
        tab.style.left = (360 + index * 300) * widthPercent + "px";
        tab.style.top = 135 * heightPercent + "px";
    });
}
function onNextButtonClick() {
    alert("Next button clicked!");
}
function onBackButtonClick() {
    alert("Back button clicked!");
}
function onContactButtonClick() {
    alert("Contact button clicked!");
}