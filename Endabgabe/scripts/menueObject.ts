namespace endabgabe {
    export class MenueObject extends Object {
        type: string;

        constructor(_type:string) {
            super();
            this.type = _type;
        }

        update(): void {
            this.draw();
            this.rotate();
        }

        draw(): void {
            switch(this.type){
                case("cube"):
                //zeichenanweisung cube
                break;
                case("circle"):
                //zeichenanweisung circle
                break;
                case("triangle"):
                //zeichenanweisung triangle
                break;
                default: break;

            }
        }

        rotate(): void {
            //rotation
        }


    }
}