window.addEventListener("load", async (event) => {
    console.log("ページが完全に読み込まれました");
    document.head.innerHTML = await fetch("/_static/html/head.html").then(response => response.text());
    const s = document.createElement("script");
    s.defer = true;
    s.src = "https://static.cloudflareinsights.com/beacon.min.js";
    s.setAttribute("data-cf-beacon", '{"token": "31653fcda84d4298a7ad3fd52126b073"}');
    document.body.appendChild(s); // bodyの最後に追加
    document.querySelector("#header").innerHTML = await fetch("/_static/html/header.html").then(response => response.text());
    document.querySelector("#footer").innerHTML = await fetch("/_static/html/footer.html").then(response => response.text());
});

function createElementFromHTML(html) {
    const tempEl = document.createElement('div');
    tempEl.innerHTML = html;
    return tempEl.firstElementChild;
}