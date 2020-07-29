namespace endabgabe {

    window.addEventListener("load", init);
    export let crc: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let canvasSize: string;



    function init(): void {
        let startPage: HTMLDivElement = <HTMLDivElement>document.getElementById("startP");
        startPage.style.display = "block";

        let gamePage: HTMLDivElement = <HTMLDivElement>document.getElementById("gameP");
        gamePage.style.display = "none";

        let finalPage: HTMLDivElement = <HTMLDivElement>document.getElementById("finalP");
        finalPage.style.display = "none";


        document.addEventListener("input", handleChange);
    }

    function handleChange(_event: Event): void {
        // Variablen
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        let startPage: HTMLDivElement = <HTMLDivElement>document.getElementById("startP");
        let radioGroup: HTMLCollectionOf<HTMLInputElement> = startPage.getElementsByTagName("input");
        /*
                for (let i: number = 0; i < radioGroup.length; i++) {
                    if (radioGroup[i].id == target.id) {
                        radioGroup[i].setAttribute("check", "false");
                    }
                }
        */
        canvasSize = target.value;
        console.log("target value " + target.value);

        let startButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("startB");
        startButton.addEventListener("click", gamePage);
    }


    function gamePage(): void {
        let startPage: HTMLDivElement = <HTMLDivElement>document.getElementById("startP");
        startPage.style.display = "none";

        let gamePage: HTMLDivElement = <HTMLDivElement>document.getElementById("gameP");
        gamePage.style.display = "block";

        let finalPage: HTMLDivElement = <HTMLDivElement>document.getElementById("finalP");
        finalPage.style.display = "none";

        let finalButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("finalB");
        finalButton.addEventListener("click", afterGame);

        //create canvas get CanvasRenderingContext2D
        canvas = document.createElement("canvas");
        console.log(canvasSize);
        console.log(canvasSize);
        canvas.height = parseInt(canvasSize);
        canvas.width = parseInt(canvasSize);
        gamePage.insertBefore(canvas, finalButton);
        console.log("create Canvas");

        console.log(canvas.height);
        console.log(canvas.width);

        crc = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc.fillStyle = "green";
        crc.fillRect(0, 0, canvas.width, canvas.height);
        console.log(crc);

    }

    function afterGame(): void {

    }
}