namespace endabgabe {
    export class Triangle extends MovingObject {
        
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
            crc.moveTo(50, 470);
            crc.lineTo(100, 470);
            crc.lineTo(75, 430);
            crc.closePath();
            crc.fillStyle = "red";
            crc.rotate(50 * Math.PI / 180);
            crc.fill();
            //hier kommt die draw methode rein
            //hier benutzen
            // this.xPos
            // this.yPos
            // this.color
            // this.size

        }

       
    }
}