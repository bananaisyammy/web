var list_item;
run()
async function run(){
    list_item = await fetch("/web/.static/html/list_item.html").then(response => response.text());
    for (let i = 0; i < 20; i++) {
        document.querySelector("#products").appendChild(createElementFromHTML(list_item));
    }
}

