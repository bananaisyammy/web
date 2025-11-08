let nextButton;
let backButton;
const widthPercent = window.innerWidth/1920;
const heightPercent = window.innerHeight/1440;
let tabIndex = 0;

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

    //tab位置調整
    this.document.querySelectorAll(".tabs").forEach((tab, index) => {
        tab.style.height = 180 * heightPercent + "px";
        tab.style.top = 165 * heightPercent + "px";
        tab.addEventListener("click", () => onTabClick(index));
    });


    this.document.getElementById("tab0").style.width = 285 * widthPercent + "px";
    this.document.getElementById("tab0").style.left = 360 * widthPercent + "px";
    this.document.getElementById("tab0").style.backgroundColor = "#15474B";

    this.document.getElementById("tab1").style.width = 285 * widthPercent + "px";
    this.document.getElementById("tab1").style.left = 660 * widthPercent + "px";
    this.document.getElementById("tab1").style.backgroundColor = "#207070";

    this.document.getElementById("tab2").style.width = 285 * widthPercent + "px";
    this.document.getElementById("tab2").style.left = 960 * widthPercent + "px";
    this.document.getElementById("tab2").style.backgroundColor = "#207070";
    
    this.document.getElementById("tab3").style.width = 300 * widthPercent + "px";
    this.document.getElementById("tab3").style.left = 1260 * widthPercent + "px";
    this.document.getElementById("tab3").style.backgroundColor = "#207070";

    //shadow位置調整
    this.document.querySelectorAll(".shadow").forEach((shadow, index) => {
        shadow.style.width = 1920 * widthPercent + "px";
        shadow.style.height = 1440 * heightPercent + "px";
        shadow.style.left = (0) * widthPercent + "px";
        shadow.style.top = 0 * heightPercent + "px";
    });

}

function onTabClick(index) {
    console.log("Tab " + index + " clicked!");
    // タブの背景色を更新
    document.querySelectorAll(".tabs").forEach((tab, i) => {
        tab.style.backgroundColor = (i === index) ? "#15474B" : "#207070";
    });
    tabIndex = index;
}
function onNextButtonClick() {
    alert("Next button clicked!");
}
function onBackButtonClick() {
    alert("Back button clicked!");
}
function onContactButtonClick() {
    // iframe内からparent（親ウィンドウ）のURLを変更
    window.parent.location.href = "/contact/";
}