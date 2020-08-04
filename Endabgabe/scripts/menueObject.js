"use strict";
var endabgabe;
(function (endabgabe) {
    class MenueObject extends endabgabe.Object {
        constructor(_type) {
            super();
            this.type = _type;
        }
        update() {
            this.draw();
            this.rotate();
        }
        draw() {
            switch (this.type) {
                case ("cube"):
                    //zeichenanweisung cube
                    break;
                case ("circle"):
                    //zeichenanweisung circle
                    break;
                case ("triangle"):
                    //zeichenanweisung triangle
                    break;
                default: break;
            }
        }
        rotate() {
            //rotation
        }
    }
    endabgabe.MenueObject = MenueObject;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=menueObject.js.map