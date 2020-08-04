"use strict";
var endabgabe;
(function (endabgabe) {
    class MovingObject extends endabgabe.Object {
        constructor() {
            super();
        }
        update() {
            this.draw();
            this.move();
            this.resize();
        }
        draw() {
            //individual draw function in subclass
        }
        move() {
            this.xPos += this.xSpeed;
            this.yPos += this.ySpeed;
            //border collision handler
            //kleiner als 0
            if (this.xPos < (0 - this.size)) {
                this.xPos = endabgabe.canvasWidth;
            }
            //Größer als breite
            if (this.xPos > endabgabe.canvasWidth) {
                this.xPos = (0 - this.size);
            }
            //kleiner als 0
            if (this.yPos < (0 - this.size)) {
                this.yPos = endabgabe.canvasHeight;
            }
            //Größer als höhe
            if (this.yPos > endabgabe.canvasHeight) {
                this.yPos = (0 - this.size);
            }
        }
        resize() {
            //wenn scale vergrößert wird
            if (this.scale > 1) {
                //wird die Grundgröße size mit dem scaleWert multipliziert
                this.size = this.size * this.scale;
            }
        }
        rotate() {
            switch (this.rotation) {
                case "right":
                    //left rotation
                    break;
                case "left":
                    //right rotation
                    break;
                case "none":
                    //clear rotation
                    break;
                default: break;
            }
        }
        special() {
            if (this.wabble == true) {
            }
            if (this.glow == true) {
            }
        }
        adaptManipulation(_xSpeed, _ySpeed, _scale, _rotation, _color, _wabble, _glow) {
            this.xSpeed = _xSpeed;
            this.ySpeed = _ySpeed;
            this.scale = _scale;
            this.rotation = _rotation;
            this.wabble = _wabble;
            this.glow = _glow;
            this.color = _color;
        }
        checkHit() {
            //check pos object und pos mauscursor
            if (1 == 1) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    endabgabe.MovingObject = MovingObject;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=movingObject.js.map