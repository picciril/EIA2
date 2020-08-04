"use strict";
var endabgabe;
(function (endabgabe) {
    class Cube extends endabgabe.MovingObject {
        constructor(_xPos, _yPos, _type) {
            super();
            this.xPos = _xPos;
            this.yPos = _yPos;
            // cube, circle und triangle
            this.type = _type;
            //default 1
            this.scale = 1;
            this.size = 200;
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
            endabgabe.crc.fillStyle = this.color;
            endabgabe.crc.fillRect(this.xPos, this.yPos, this.size, this.size);
        }
    }
    endabgabe.Cube = Cube;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=Cube.js.map