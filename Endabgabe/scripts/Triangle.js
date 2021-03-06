"use strict";
var endabgabe;
(function (endabgabe) {
    class Triangle extends endabgabe.MovingObject {
        constructor(_xPos, _yPos, _type) {
            super();
            this.xPos = _xPos;
            this.yPos = _yPos;
            // cube, circle und triangle
            this.type = _type;
            //default 1
            this.scale = 1;
            this.size = 50;
            this.xSpeed = 0;
            this.ySpeed = 0;
            // right, left und none
            this.rotation = "none";
            // true / false
            this.wabble = false;
            // true / flase
            this.glow = false;
            this.color = "black";
        }
        update() {
            this.draw();
        }
        //draw-methode
        draw() {
            endabgabe.crc.beginPath();
            endabgabe.crc.moveTo(50, 470);
            endabgabe.crc.lineTo(100, 470);
            endabgabe.crc.lineTo(75, 430);
            endabgabe.crc.closePath();
            endabgabe.crc.fillStyle = "red";
            endabgabe.crc.rotate(50 * Math.PI / 180);
            endabgabe.crc.fill();
            //hier kommt die draw methode rein
            //hier benutzen
            // this.xPos
            // this.yPos
            // this.color
            // this.size
        }
    }
    endabgabe.Triangle = Triangle;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=Triangle.js.map