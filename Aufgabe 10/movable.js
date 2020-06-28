var Virus;
(function (Virus) {
    var Moveable = /** @class */ (function () {
        function Moveable(_position) {
            this.expendable = false;
            if (_position)
                this.position = _position.copy();
            else
                this.position = new Virus.Vector(0, 0);
            this.velocity = new Virus.Vector(0, 0);
        }
        Moveable.prototype.move = function (_timeslice) {
            var offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += Virus.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += Virus.crc2.canvas.height;
            if (this.position.x > Virus.crc2.canvas.width)
                this.position.x -= Virus.crc2.canvas.width;
            if (this.position.y > Virus.crc2.canvas.height)
                this.position.y -= Virus.crc2.canvas.height;
        };
        Moveable.prototype.draw = function () {
        };
        return Moveable;
    }());
    Virus.Moveable = Moveable;
})(Virus || (Virus = {}));
//# sourceMappingURL=moveable.js.map