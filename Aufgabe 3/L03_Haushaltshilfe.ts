window.addEventListener("load", handleload);

function handleload(_event: Event): void {
    console.log("init");

    let priceBread: number = 3;
    let priceApples: number = 0.3;
    let priceWater: number = 0.4;
    let priceShopping: number = 10;
    let priceMowing: number = 5;
    let priceSquare: number = 0.1;

    let fieldsets: NodeListOf<HTMLFieldSetElement> = document.querySelectorAll("fieldset");

    for (let i: number = 0; i < fieldsets.length; i++) {
        let fieldset: HTMLFieldSetElement = fieldsets[i];
        fieldset.addEventListener("change", handleChange);

    }
}

function handleChange(_event: Event): void {
    console.log("handle change");
    drawUnits(_event);
}

function drawUnits(_event: Event): void {

    let formData: FormData = new FormData(document.forms[0]);
    console.log(formData);

    for (let entry of formData) {
        console.log(entry);
    }






}