async function itemFetch(tabIndex){
    this.document.body.style.setProperty('--imgWidth', ((405-40) * widthPercent) + "px");
    this.document.body.style.setProperty('--imgHeight', ((405-40) * heightPercent) + "px");
    let gridItem = await fetch("assets/gridItem.html").then(response => response.text());
    const gridContentsJson = await fetch("/_static/media/gridContents.json").then(response => response.json());
    
    const gridContents = gridContentsJson[tabIndex].contents;
    document.querySelector("#cards").innerHTML = "";
    for (const content of gridContents) {
        let child = gridItem.replace("%imageSrc%",content["imageSrc"])
        document.querySelector("#cards").insertAdjacentHTML("beforeend", child);;
    }
}
