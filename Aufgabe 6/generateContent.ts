namespace L05_Haushalt {
    
    export interface Item {
        name: string;
        price: string;
    }

    export interface Data {
        [category: string]: Item[];
    }

    export function generateContent(_data: Data): void {

        for (let category in _data) {
            // console.log(category);
            let items: Item[] = _data[category];

            let group: HTMLElement | null = null;
            switch (category) {
                case "Grocery":
                    group = createSelect(items, category);
                    break;
                case "Time":
                    group = createSingle(items, category);
                    break;
                case "Tasks":
                    group = createSelect(items, category);
                    break;
                case "Store":
                    group = createSelect(items, category);
                    break;
                  

                default:
                    break;
            }

            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }

    function createSelect(_items: Item[], _category: string): HTMLElement | null {
        let Set: HTMLFieldSetElement = <HTMLFieldSetElement>document.querySelector("fieldset#Grocery");
        let group: HTMLSelectElement = document.createElement("select");
        group.setAttribute("value", "price");
        group.name = _category;
        for (let item of _items) {
            let option: HTMLOptionElement = document.createElement("option");
            option.setAttribute("price", item.price.fixed());
            option.value = option.textContent = item.name;
            option.id = item.name;

            group.appendChild(option);
        }
        return group;
    }
    function createSingle(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLSpanElement = document.createElement("div");
        for (let item of _items) {
            let radio: HTMLInputElement = document.createElement("input");
            radio.type = "radio";
            radio.setAttribute("price", item.price.fixed());
            radio.value = item.name;
            radio.name = _category;
            radio.id = item.name;

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;

            group.appendChild(radio);
            group.appendChild(label);
        }
        return group;
    }
  
    

}