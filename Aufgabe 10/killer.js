"use strict";
var Virus;
(function (Virus) {
    class Killer extends Virus.Moveable {
        constructor(_position) {
            super(_position);
            this.position = _position;
            let colors = ["HSL(0, 50%, 100%)", "HSLA(360, 40%, 60%)"];
            let numColors = colors.length;
            let color;
            let ColorIndex;
            ColorIndex = Math.round(Math.random() * (numColors - 1));
            color = colors[ColorIndex];
            this.color = color;
            let maxRadius = 3;
            let minRadius = 1;
            this.radius = minRadius + (Math.random() * (maxRadius - minRadius));
            this.velocity = new Virus.Vector(0, 0);
            this.velocity.random(10, 100);
        }
        draw() {
            let crc2;
            console.log("Cell draw");
            crc2.save();
            let r1 = 1;
            let r2 = 8;
            //let nParticles: number = 50;
            let particle = new Path2D();
            let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            particle.arc(0, 0, r2, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSL(0, 50%, 100%)");
            gradient.addColorStop(0.8, "HSLA(360, 40%, 60%)");
            gradient.addColorStop(0.9, "HSLA(360, 40%, 60%)");
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = gradient;
            crc2.fill(particle);
            crc2.restore();
        }
        move(_timeslice) {
            console.log("Cell move");
            let crc2;
            let offset = new Virus.Vector(this.velocity.x, this.velocity.y);
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
        }
    }
    Virus.Killer = Killer;
})(Virus || (Virus = {}));
//# sourceMappingURL=killer.js.map