"use strict";
var L05_Haushalt;
(function (L05_Haushalt) {
    function generateContent(_data) {
        for (let category in _data) {
            // console.log(category);
            let items = _data[category];
            let group = null;
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
            let fieldset = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }
    L05_Haushalt.generateContent = generateContent;
    function createSelect(_items, _category) {
        let Set = document.querySelector("fieldset#Grocery");
        let group = document.createElement("select");
        group.setAttribute("value", "price");
        group.name = _category;
        for (let item of _items) {
            let option = document.createElement("option");
            option.setAttribute("price", item.price.fixed());
            option.value = option.textContent = item.name;
            option.id = item.name;
            group.appendChild(option);
        }
        return group;
    }
    function createSingle(_items, _category) {
        let group = document.createElement("div");
        for (let item of _items) {
            let radio = document.createElement("input");
            radio.type = "radio";
            radio.setAttribute("price", item.price.fixed());
            radio.value = item.name;
            radio.name = _category;
            radio.id = item.name;
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(radio);
            group.appendChild(label);
        }
        return group;
    }
})(L05_Haushalt || (L05_Haushalt = {}));
//# sourceMappingURL=generateContent.js.map