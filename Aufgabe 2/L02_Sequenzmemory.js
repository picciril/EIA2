"use strict";
var Sequenzmemory;
(function (Sequenzmemory) {
    window.addEventListener("DOMContentLoaded", HandleLoad);
    function HandleLoad(_event) {
        let button = document.querySelector("#confirm");
        button.addEventListener("click", StartGame);
        document.addEventListener("keydown", ShowTip);
    }
    function StartGame(_event) {
        alert("Das Spiel beginnt");
    }
    function ShowTip(_event) {
        let key = event.keyCode;
        if (key == "84") {
            alert("TTTTT");
        }
    }
})(Sequenzmemory || (Sequenzmemory = {}));
//# sourceMappingURL=L02_Sequenzmemory.js.map