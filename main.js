function createItem() {
    let item1 = document.createElement("a");
    item1.setAttribute("class", "item1");
    let img = document.createElement("img");
    img.setAttribute("src", "pc1.jpg");
    item1.appendChild(img);

    let title = document.createElement("h5");
    let discInput = document.getElementById("disc");
    title.setAttribute("class", "title");
    let discNode = document.createTextNode(discInput.value);
    title.appendChild(discNode);
    item1.appendChild(title);


    let price = document.createElement("p");
    let pricing = document.getElementById("pricing");
    price.setAttribute("class", "price");
    let pricNode = document.createTextNode(pricing.value);
    price.appendChild(pricNode);
    item1.appendChild(price);


    document.querySelector(".items").appendChild(item1);
}

let logform = document.querySelector(".signin");
let signform = document.querySelector(".signup")
function asay() {
    logform.classList.toggle("login");
    signform.classList.add("login");

}
function demse() {
    signform.classList.toggle("login");
    logform.classList.add("login");
}