"use strict";
window.addEventListener("load", handleload);
function handleload(_event) {
    console.log("init");
    let priceBread = 3;
    let priceApples = 0.3;
    let priceWater = 0.4;
    let priceShopping = 10;
    let priceMowing = 5;
    let priceSquare = 0.1;
    let fieldsets = document.querySelectorAll("fieldset");
    for (let i = 0; i < fieldsets.length; i++) {
        let fieldset = fieldsets[i];
        fieldset.addEventListener("change", handleChange);
    }
}
function handleChange(_event) {
    console.log("handle change");
    drawUnits(_event);
}
function drawUnits(_event) {
    let formData = new FormData(document.forms[0]);
    console.log(formData);
    for (let entry of formData) {
        console.log(entry);
    }
}
//# sourceMappingURL=L03_Haushaltshilfe.js.map