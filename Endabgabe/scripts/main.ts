namespace endabgabe {

    window.addEventListener("load", init);
    export let crc: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let canvasSize: string;

    function init(): void {
        let startPage: HTMLDivElement = <HTMLDivElement>document.getElementById("startPage");
        startPage.style.display = "block";

        let gamePage: HTMLDivElement = <HTMLDivElement>document.getElementById("gamePage");
        gamePage.style.display = "none";

        let finalPage: HTMLDivElement = <HTMLDivElement>document.getElementById("finalPage");
        finalPage.style.display = "none";

        let startButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("startButt");
        document.addEventListener("input", handleChange);



        function handleChange(_event: Event): void {
            // Variablen
            let target: HTMLInputElement = <HTMLInputElement>_event.target;
            let radioGroup: HTMLCollectionOf<HTMLInputElement> = startPage.getElementsByTagName("input");

            for (let i: number = 0; i < radioGroup.length; i++) {
                if (radioGroup[i].name == target.name) {
                    radioGroup[i].setAttribute("check", "false");
                }
            }
            target.setAttribute("check", "true");
            canvasSize = target.value;
            console.log("target value " + target.value);
            startButton.addEventListener("click", startGame);
        }
    }

    function startGame(): void {

        let startPage: HTMLDivElement = <HTMLDivElement>document.getElementById("startPage");
        startPage.style.display = "none";

        let gamePage: HTMLDivElement = <HTMLDivElement>document.getElementById("gamePage");
        gamePage.style.display = "block";

        let finalPage: HTMLDivElement = <HTMLDivElement>document.getElementById("finalPage");
        finalPage.style.display = "none";

        let finalButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("finalButt");
        finalButton.addEventListener("click", endGame);

        //create canvas get CanvasRenderingContext2D
        canvas = document.createElement("canvas");
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

    function endGame(): void {

        let startPage: HTMLDivElement = <HTMLDivElement>document.getElementById("startPage");
        startPage.style.display = "none";

        let gamePage: HTMLDivElement = <HTMLDivElement>document.getElementById("gamePage");
        gamePage.style.display = "none";

        let finalPage: HTMLDivElement = <HTMLDivElement>document.getElementById("finalPage");
        finalPage.style.display = "block";

    }

}