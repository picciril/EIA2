var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Virus;
(function (Virus) {
    var Killer = /** @class */ (function (_super) {
        __extends(Killer, _super);
        function Killer(_position) {
            var _this = _super.call(this, _position) || this;
            _this.position = _position;
            var colors = ["HSL(0, 50%, 100%)", "HSLA(360, 40%, 60%)"];
            var numColors = colors.length;
            var color;
            var ColorIndex;
            ColorIndex = Math.round(Math.random() * (numColors - 1));
            color = colors[ColorIndex];
            _this.color = color;
            var maxRadius = 3;
            var minRadius = 1;
            _this.radius = minRadius + (Math.random() * (maxRadius - minRadius));
            _this.velocity = new Virus.Vector(0, 0);
            _this.velocity.random(10, 100);
            return _this;
        }
        Killer.prototype.draw = function () {
            var crc2;
            console.log("Cell draw");
            crc2.save();
            var r1 = 1;
            var r2 = 8;
            //let nParticles: number = 50;
            var particle = new Path2D();
            var gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            particle.arc(0, 0, r2, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSL(0, 50%, 100%)");
            gradient.addColorStop(0.8, "HSLA(360, 40%, 60%)");
            gradient.addColorStop(0.9, "HSLA(360, 40%, 60%)");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = gradient;
            crc2.fill(particle);
            crc2.restore();
        };
        Killer.prototype.move = function (_timeslice) {
            console.log("Cell move");
            var crc2;
            var offset = new Virus.Vector(this.velocity.x, this.velocity.y);
            offset.x *= 0;
            offset.y *= _timeslice * 1.5;
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        };
        return Killer;
    }(Virus.Moveable));
    Virus.Killer = Killer;
})(Virus || (Virus = {}));
//# sourceMappingURL=killer.js.map