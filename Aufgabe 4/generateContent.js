"use strict";
var L04_Haushaltshilfe;
(function (L04_Haushaltshilfe) {
    function generateContent(_data) {
        console.log(_data);
        for (let category in _data) {
            let items = _data[category];
            let group = null;
            switch (category) {
                case "Grocery":
                    group = createSelect(items);
                case "Task":
                    group = createSelect(items);
                case "Time":
                    group = createSingle(items);
                case "Amount":
                    group = createSingle(items);
                    break;
                default:
                    break;
            }
            let fieldset = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }
    L04_Haushaltshilfe.generateContent = generateContent;
    function createSelect(_items) {
        return null;
    }
    function createSingle(_items) {
        return null;
    }
})(L04_Haushaltshilfe || (L04_Haushaltshilfe = {}));
//# sourceMappingURL=generateContent.js.map