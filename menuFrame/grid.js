async function itemFetch(tabIndex){
    this.document.body.style.setProperty('--imgSize', (405 * widthPercent) + "px");
    let gridItem = await fetch("assets/gridItem.html").then(response => response.text());
    const gridContentsJson = await fetch("/web/_static/media/gridContents.json").then(response => response.json());
    
    const gridContents = gridContentsJson[tabIndex].contents;
    document.querySelector("#cards").innerHTML = "";
    for (const content of gridContents) {
        let child = gridItem.replace("%imageSrc%",content["imageSrc"])
        document.querySelector("#cards").insertAdjacentHTML("beforeend", child);;
    }
}
