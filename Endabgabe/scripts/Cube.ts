namespace endabgabe {
    export class Cube extends MovingObject {


        constructor(_xPos: number, _yPos: number, _type: string) {
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

        update(): void {
            this.draw();
            
        }

        //draw-methode
        draw(): void {
            crc.fillStyle = this.color;
            crc.fillRect(this.xPos, this.yPos, this.size, this.size);
        }

        
    }
}