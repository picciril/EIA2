namespace endabgabe {
    export class MovingObject extends Object {
        xSpeed: number;
        ySpeed: number;
        //Grundlänge bei size 1/ radius
        size: number;
        //sacle noch festsetzen, default ist 1
        scale: number;
        // cube, circle und triangle
        type: string;

        // right, left und none
        rotation: string;

        // true / false
        wabble: boolean;

        // true / flase
        glow: boolean;




        constructor() {
            super();
        }

        update(): void {
            this.draw();
            this.move();
            this.resize();
        }

        draw(): void {
            //individual draw function in subclass
        }

        move(): void {
            this.xPos += this.xSpeed;
            this.yPos += this.ySpeed;

            //border collision handler
            //kleiner als 0
            if (this.xPos < (0 - this.size)) {
                this.xPos = canvasWidth;
            }
            //Größer als breite
            if (this.xPos > canvasWidth) {
                this.xPos = (0 - this.size);
            }

            //kleiner als 0
            if (this.yPos < (0 - this.size)) {
                this.yPos = canvasHeight;
            }
            //Größer als höhe
            if (this.yPos > canvasHeight) {
                this.yPos = (0 - this.size);
            }

        }

        resize(): void {
            //wenn scale vergrößert wird
            if (this.scale > 1) {
                //wird die Grundgröße size mit dem scaleWert multipliziert
                this.size = this.size * this.scale;
            }
        }

        rotate(): void {
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

        special(): void {
            if (this.wabble == true) {

            }
            if (this.glow == true) {

            }
        }

        adaptManipulation(_xSpeed: number, _ySpeed: number, _scale: number, _rotation: string, _color: string, _wabble: boolean, _glow: boolean): void {
            this.xSpeed = _xSpeed;
            this.ySpeed = _ySpeed;
            this.scale = _scale;
            this.rotation = _rotation;
            this.wabble = _wabble;
            this.glow = _glow;
            this.color = _color;
        }

        checkHit(): boolean {
            //check pos object und pos mauscursor
            if(1==1){
            return true;
        }
        else{
            return false;
        }

        }



    }
}