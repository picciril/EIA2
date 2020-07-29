"use strict";
var endabgabe;
(function (endabgabe) {
    window.addEventListener("load", init);
    let canvas;
    let canvasSize;
    function init() {
        let startPage = document.getElementById("startP");
        startPage.style.display = "block";
        let gamePage = document.getElementById("gameP");
        gamePage.style.display = "none";
        let finalPage = document.getElementById("finalP");
        finalPage.style.display = "none";
        document.addEventListener("input", handleChange);
    }
    function handleChange(_event) {
        // Variablen
        let target = _event.target;
        let startPage = document.getElementById("startP");
        let radioGroup = startPage.getElementsByTagName("input");
        /*
                for (let i: number = 0; i < radioGroup.length; i++) {
                    if (radioGroup[i].id == target.id) {
                        radioGroup[i].setAttribute("check", "false");
                    }
                }
        */
        canvasSize = target.value;
        console.log("target value " + target.value);
        let startButton = document.getElementById("startB");
        startButton.addEventListener("click", gamePage);
    }
    function gamePage() {
        let startPage = document.getElementById("startP");
        startPage.style.display = "none";
        let gamePage = document.getElementById("gameP");
        gamePage.style.display = "block";
        let finalPage = document.getElementById("finalP");
        finalPage.style.display = "none";
        let finalButton = document.getElementById("finalB");
        finalButton.addEventListener("click", afterGame);
        //create canvas get CanvasRenderingContext2D
        canvas = document.createElement("canvas");
        console.log(canvasSize);
        console.log(canvasSize);
        canvas.height = parseInt(canvasSize);
        canvas.width = parseInt(canvasSize);
        gamePage.insertBefore(canvas, finalButton);
        console.log("create Canvas");
        console.log(canvas.height);
        console.log(canvas.width);
        endabgabe.crc = canvas.getContext("2d");
        endabgabe.crc.fillStyle = "green";
        endabgabe.crc.fillRect(0, 0, canvas.width, canvas.height);
        console.log(endabgabe.crc);
    }
    function afterGame() {
    }
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=main.js.map