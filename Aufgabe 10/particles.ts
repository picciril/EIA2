namespace Virus {
    export class Particle extends Moveable {
        position: Vector;
        velocity: Vector;
        radius: number;
        color: string;


        constructor(_position: Vector) {
            super(_position);

            this.position = _position;

            let colors: string[] = ["HSL(0, 50%, 100%)", "HSLA(360, 40%, 60%)"];
            let numColors: number = colors.length;
            let color: string;
            let ColorIndex: number;
            ColorIndex = Math.round(Math.random() * (numColors - 1));

            color = colors[ColorIndex];
            this.color = color;


            let maxRadius: number = 3;
            let minRadius: number = 1;
            this.radius = minRadius + (Math.random() * (maxRadius - minRadius));

            this.velocity = new Vector(0, 0);
            this.velocity.random(10, 100);
        }
        draw(): void {
            let crc2: CanvasRenderingContext2D;
            console.log("Cell draw");
            crc2.save();

            let r1: number = 1;
            let r2: number = 8;
            //let nParticles: number = 50;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
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

        move(_timeslice: number): void {
            console.log("Cell move");
            let crc2: CanvasRenderingContext2D;
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
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
}