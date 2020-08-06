"use strict";
var endabgabe;
(function (endabgabe) {
    class Circle extends endabgabe.MovingObject {
        constructor(_xPos, _yPos, _type) {
            super();
            this.start = 0;
            this.stop = 2 * Math.PI;
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
            endabgabe.crc.strokeStyle = "black";
            endabgabe.crc.arc(this.xPos, this.yPos, this.size, this.start, this.stop);
            endabgabe.crc.strokeStyle = "black";
            endabgabe.crc.fill();
            endabgabe.crc.closePath();
        }
    }
    endabgabe.Circle = Circle;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=Circle.js.map