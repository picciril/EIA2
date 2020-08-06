namespace endabgabe {
    export class Circle extends MovingObject {
        start: number = 0;
        stop: number = 2 * Math.PI;

        constructor(_xPos: number, _yPos: number, _type: string) {
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

        update(): void {
            this.draw();
        }

        //draw-methode
        draw(): void {
            crc.beginPath();
            crc.strokeStyle = "black";
            crc.arc(this.xPos, this.yPos, this.size, this.start, this.stop);
            crc.strokeStyle = "black";
            crc.fill();
            crc.closePath();
            
        }

        
    }
}