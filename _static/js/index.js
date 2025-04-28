window.addEventListener("load", async (event) => {
    console.log("ページが完全に読み込まれました");
    
    document.head.innerHTML = await fetch("/web/_static/html/head.html").then(response => response.text());
    document.querySelector("#header").innerHTML = await fetch("/web/_static/html/header.html").then(response => response.text());
    document.querySelector("#footer").innerHTML = await fetch("/web/_static/html/footer.html").then(response => response.text());
});

function createElementFromHTML(html) {
    const tempEl = document.createElement('div');
    tempEl.innerHTML = html;
    return tempEl.firstElementChild;
}