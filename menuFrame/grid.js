async function itemFetch(tabIndex){
    this.document.body.style.setProperty('--imgWidth', ((405-15) * widthPercent) + "px");
    this.document.body.style.setProperty('--imgHeight', ((450-48) * heightPercent) + "px");
    let gridItem = await fetch("assets/gridItem.html").then(response => response.text());
    const gridContentsJson = await fetch("/_static/media/gridContents.json").then(response => response.json());
    
    const gridContents = gridContentsJson[tabIndex].contents;
    document.querySelector("#cards").innerHTML = "";
    for (const content of gridContents) {
        let child = gridItem.replaceAll("%imageSrc%",content["imageSrc"])
                            .replaceAll("%title%",content["title"])
                            .replaceAll("%creatorName%",content["creatorName"])
                            .replaceAll("%url%",content["url"]);
        document.querySelector("#cards").insertAdjacentHTML("beforeend", child);
        const script = document.createElement("script");
        script.innerHTML = "this.document.getElementById('"+content["title"]+"').onclick = () => {window.parent.location.href = '"+content["url"]+"';};";
        document.getElementById(content["title"]).appendChild(script);
    }
}
