"use strict";
var endabgabe;
(function (endabgabe) {
    function createMenueSection() {
        //draw für schwarzen balken unten
    }
    endabgabe.createMenueSection = createMenueSection;
    function createMenuObject(_type) {
        //draw für vorschau cube unten
        let menuObject = new MenueObjects();
        function createMenuCircle() {
            //draw für vorschau circle unten
        }
        endabgabe.createMenuCircle = createMenuCircle;
        function createMenuTriangle() {
            //draw für vorschau circle unten
        }
        endabgabe.createMenuTriangle = createMenuTriangle;
    }
    endabgabe.createMenuObject = createMenuObject;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=draw.js.map