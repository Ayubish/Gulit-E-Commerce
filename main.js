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

let logbtn = document.querySelector("showlog");
let logform = document.querySelector(".signin");
console.log(logbtn);
function asay() {
    logform.classList.toggle("login");
}
let password = document.querySelector(".pass");
function qedadaw() {
    password.toggleAttribute("type", "password");
}