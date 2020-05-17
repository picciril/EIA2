"use strict";
var L04_Haushaltshilfe;
(function (L04_Haushaltshilfe) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("start");
        L04_Haushaltshilfe.generateContent(L04_Haushaltshilfe.data);
        let form = document.querySelector("div#form");
        let orders = document.querySelector("div#orders");
        form.addEventListener("change", handleChange);
        orders.addEventListener("change", handleChange);
    }
    function handleChange(_event) {
        let order = document.querySelector("div#orders");
        order.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        console.log(formData.get("Grocery"));
        for (let entry of formData) {
            console.log(entry);
            //console.log("name: " + entry[0]);
            //console.log("value: " + entry[1]);
            //console.log("price:" + entry[2]);
            let item = document.querySelector("[value='" + entry[1] + "'");
            console.log(item);
            let price = Number(item.getAttribute("price"));
            console.log(price);
            order.innerHTML += item.value + " " + price + "  € ";
            //let wholeprize: HTMLElement = <HTMLElement> document.querySelector ("[price]");
        }
    }
})(L04_Haushaltshilfe || (L04_Haushaltshilfe = {}));
//# sourceMappingURL=script.js.map