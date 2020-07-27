"use strict";
var endabgabe;
(function (endabgabe) {
    window.addEventListener("load", init);
    let canvas;
    let canvasSize;
    function init() {
        let startPage = document.getElementById("startPage");
        startPage.style.display = "block";
        let gamePage = document.getElementById("gamePage");
        gamePage.style.display = "none";
        let finalPage = document.getElementById("finalPage");
        finalPage.style.display = "none";
        let startButton = document.getElementById("startButt");
        document.addEventListener("input", handleChange);
        function handleChange(_event) {
            // Variablen
            let target = _event.target;
            let radioGroup = startPage.getElementsByTagName("input");
            for (let i = 0; i < radioGroup.length; i++) {
                if (radioGroup[i].name == target.name) {
                    radioGroup[i].setAttribute("check", "false");
                }
            }
            target.setAttribute("check", "true");
            canvasSize = target.value;
            console.log("target value " + target.value);
            startButton.addEventListener("click", startGame);
        }
    }
    function startGame() {
        let startPage = document.getElementById("startPage");
        startPage.style.display = "none";
        let gamePage = document.getElementById("gamePage");
        gamePage.style.display = "block";
        let finalPage = document.getElementById("finalPage");
        finalPage.style.display = "none";
        let finalButton = document.getElementById("finalButt");
        finalButton.addEventListener("click", endGame);
        //create canvas get CanvasRenderingContext2D
        canvas = document.createElement("canvas");
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
    function endGame() {
        let startPage = document.getElementById("startPage");
        startPage.style.display = "none";
        let gamePage = document.getElementById("gamePage");
        gamePage.style.display = "none";
        let finalPage = document.getElementById("finalPage");
        finalPage.style.display = "block";
    }
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=main.js.map