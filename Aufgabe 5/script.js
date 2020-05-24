"use strict";
var L05_Haushalt;
(function (L05_Haushalt) {
    window.addEventListener("load", handleLoad);
    let form;
    async function handleLoad(_event) {
        console.log("start");
        let response = await fetch("Data.json");
        let text = await response.text();
        let data = JSON.parse(text);
        L05_Haushalt.generateContent(data);
        form = document.querySelector("form");
        let orders = document.querySelector("div#orders");
        let submit = document.querySelector("button[type=button]");
        form.addEventListener("change", handleChange);
        orders.addEventListener("change", handleChange);
        submit.addEventListener("click", sendOrder);
        displayOrder();
    }
    async function sendOrder(_event) {
        console.log("verschickt");
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        await fetch("list.html?" + query.toString());
        alert("Your order is on the way!");
    }
    function handleChange(_event) {
        displayOrder();
    }
    function displayOrder() {
        let startPrice = 0;
        let order = document.querySelector("div#orders");
        order.innerHTML = "";
        let formData = new FormData(document.querySelector("form"));
        console.log(formData.get("Grocery"));
        for (let entry of formData) {
            console.log(entry);
            //console.log("name: " + entry[0]);
            //console.log("value: " + entry[1]);
            //console.log("price:" + entry[2]);
            let selector = "[value='" + entry[1] + "']";
            let item = document.querySelector(selector);
            console.log(item);
            let price = Number(item.getAttribute("price"));
            console.log(price);
            switch (entry[0]) {
                case "amount":
                    break;
                case "Grocery":
                    let amount = Number(formData.get("amount"));
                    price = amount * price;
                    order.innerHTML += amount + "Stk" + item.value + ": €" + price + "<br>";
                    break;
                default:
                    order.innerHTML += item.value + ": €" + price.toFixed(2) + "<br>";
            }
            startPrice += price;
            //let wholeprize: HTMLElement = <HTMLElement> document.querySelector ("[price]");
        }
        order.innerHTML += "<p>Total: : €" + startPrice.toFixed(2);
    }
})(L05_Haushalt || (L05_Haushalt = {}));
//# sourceMappingURL=script.js.map