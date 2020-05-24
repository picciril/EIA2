namespace L05_Haushalt { 
window.addEventListener("load", handleLoad); 

let form: HTMLFormElement;
async function handleLoad(_event: Event): Promise<void> {
    console.log("start");

    let response: Response = await fetch("Data.json");
    let text: string = await response.text();
    let data: Data = JSON.parse(text);

    generateContent(data);
    
    form = <HTMLFormElement>document.querySelector("form");
    let orders: HTMLDivElement = <HTMLDivElement>document.querySelector("div#orders");
    let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=button]");

    form.addEventListener("change", handleChange);
    orders.addEventListener("change", handleChange);
    submit.addEventListener("click", sendOrder);

    displayOrder ();

}
async function sendOrder(_event: Event): Promise<void> {
    console.log("verschickt");
    let formData: FormData = new FormData(form);
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    await fetch("list.html?" + query.toString());
    
    alert("Your order is on the way!");
}
function handleChange (_event: Event): void {
    displayOrder();
}
function displayOrder(): void {
let startPrice: number = 0;
let order: HTMLDivElement = <HTMLDivElement> document.querySelector("div#orders");
order.innerHTML = "";


   let formData: FormData = new FormData(<HTMLFormElement>document.querySelector("form")); 
   console.log(formData.get("Grocery")); 
   for (let entry of formData) {
    console.log(entry);
    //console.log("name: " + entry[0]);
    //console.log("value: " + entry[1]);
    //console.log("price:" + entry[2]);
    let selector: string = "[value='" + entry[1] + "']";
    let item: HTMLInputElement = <HTMLInputElement> document.querySelector(selector);
    console.log(item);
    let price: number = Number(item.getAttribute("price")); 
    console.log(price);
    switch (entry[0]) {
        case "amount" : 
             break;
        case "Grocery":
            let amount: number = Number(formData.get("amount"));
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
 }