//var listContents = JSON.parse(new URL(decodeURI(document.currentScript.src)).searchParams.get("list"));
//itemの原型をfetch
async function itemFetch(listContents){
    let listItem = await fetch("/_static/html/list_item.html").then(response => response.text());
    for (const content of listContents) {
        let child = listItem.replace("%description%",content["description"])
            .replace("%title%",content["title"])
            .replace("%url%",content["url"])
            .replace("%imageSrc%",content["imageSrc"])
            .replace("%creatorName%",content["creatorName"])
        document.querySelector("#list").appendChild(createElementFromHTML(child));
    }
}


/*
<書式>
[
{
    "description": "説明文",
    "title": "タイトル",
    "url": "URL",
    "imageSrc": "画像URL",
    "creatorName": "作成者名"
}, ... ]
*/
