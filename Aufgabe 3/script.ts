window.addEventListener("load", handleLoad); 

function handleLoad(_event: Event): void {
    console.log("start");
    let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
    let orders: HTMLDivElement = <HTMLDivElement>document.querySelector("div#orders");

    form.addEventListener("change", handleChange);
    orders.addEventListener("change", handleChange);

}

function handleChange(_event: Event): void {
let order: HTMLDivElement = <HTMLDivElement> document.querySelector("div#orders");
order.innerHTML = "";


   let formData: FormData = new FormData(document.forms[0]); 
   console.log(formData.get("Grocery")); 
   for (let entry of formData) {
    console.log(entry);
    //console.log("name: " + entry[0]);
    //console.log("value: " + entry[1]);
    //console.log("price:" + entry[2]);
    let item: HTMLInputElement = <HTMLInputElement> document.querySelector("[value='" + entry[1] + "'");
    console.log(item);
    let price: number = Number(item.getAttribute("price")); 
    console.log(price);

    order.innerHTML += item.value  + " " + price + "  € ";
    
    //let wholeprize: HTMLElement = <HTMLElement> document.querySelector ("[price]");

}
}