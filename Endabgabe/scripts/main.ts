namespace endabgabe {

    window.addEventListener("load", init);

    //Globale Variablen
    export let crc: CanvasRenderingContext2D;
    let imgData: ImageData;

    //Arrays
    //let menueObjects: MenueObject[] = [];
    let movingObjects: MovingObject[] = [];
    //let allCubes: Cube[];
    //let allCircles: Circle[];
    //let allTriangles: Triangle[];

    let smallCanvas_value: number;
    let mediumCanvas_value: number;
    let largeCanvas_value: number;


    //let menuCube: MenueObject;
    //let menuCircle: MenueObject;
    //let menuTriangle: MenueObject;

    //let dragObject: MovingObject;

    let startPage: HTMLDivElement;
    let startButton: HTMLButtonElement;
    let gamePage: HTMLDivElement;
    let canvasContainer: HTMLDivElement;
    let canvas: HTMLCanvasElement;


    let smallCanvas: HTMLInputElement;
    let mediumCanvas: HTMLInputElement;
    let largeCanvas: HTMLInputElement;

    let dragButtonContainer: HTMLDivElement;
    //let rotationInputContainer: HTMLDivElement;
    //let rotationRadioColl: HTMLCollectionOf<HTMLInputElement>;

    //let manipulationArea: HTMLDivElement = <HTMLDivElement>document.getElementById("manipulationArea");
    /*
    let xSpeedRange: HTMLInputElement;
    let ySpeedRange: HTMLInputElement;
    let scaleRange: HTMLInputElement;

    let colorInput: HTMLInputElement;
    let wabbleBox: HTMLInputElement;
    let glowBox: HTMLInputElement;
*/
    let finalButton: HTMLButtonElement;
    let reloadButton00: HTMLButtonElement;

    let formularPage: HTMLDivElement;
    let saveButton: HTMLInputElement;
    let reloadButton01: HTMLButtonElement;

    let finalPage: HTMLDivElement;
    let reloadButton02: HTMLButtonElement;


    //
    export let canvasWidth: number = 310;
    export let canvasHeight: number = 600;


    function init(): void {


        //richtige abschnitte sichtbar machen
        startPage = <HTMLDivElement>document.getElementById("startPage");
        startPage.style.display = "block";

        gamePage = <HTMLDivElement>document.getElementById("gamePage");
        gamePage.style.display = "none";

        formularPage = <HTMLDivElement>document.getElementById("formularPage");
        formularPage.style.display = "none";

        finalPage = <HTMLDivElement>document.getElementById("finalPage");
        finalPage.style.display = "none";

        //Generieren der Radiobuttons aus der DB
        createRadioButtonsDatabase();

        // variable für <div> id="radioButtons"
        let radioStartpage: HTMLDivElement = <HTMLDivElement>document.getElementById("radioButtons");
        // variable für <input> Elemente in dem <div> mit der id="radioButtons"
        let radioGroup: HTMLCollectionOf<HTMLInputElement> = radioStartpage.getElementsByTagName("input");
        //installiere EventListener auf allen Radiobuttons in der radioGroup
        for (let i: number = 0; i < radioGroup.length; i++) {
            //EventListener für 
            //Eventtyp input
            //Note: The input event is fired every time the value of the element changes. 
            //This is unlike the change event, which only fires when the value is committed, such as by pressing the enter key, selecting a value from a list of options, and the like.
            radioGroup[i].addEventListener("input", handleInputRadioButtons);
        }

        startButton = <HTMLButtonElement>document.getElementById("startButton");
        startButton.addEventListener("click", handleStart);
    }

    function handleStart(): void {
        //button.eventListener(>checkValidity)
        let permission: boolean = checkValidity();
        // checkt die permission true >> play 
        if (permission == true) {
            createGamePage();
        }
        else {
            alert("Bitte wähle eine der Optionen aus!");
        }

    }
    // creates Radios with <label> from database with name of pic
    function createRadioButtonsDatabase(): void {

        // alle Bilder in Array.lenght
        // for (let i: number, i<array.lenght, i++)
        //let radioButton.createElement("input")
        // .type="radio"
        // .id= i + "_radioDB"
        // .name = radioButtons_startPage
        // . class="radioButtons_startPage_db"
        // .value =[i].db.width
        //append to parent

        //createElement("label")
        //let label.createElement("label")
        // .for = radio.id
        // .innerText = db.name + db.author + db.date

    }

    function handleInputRadioButtons(_e: Event): void {

        // Variable für event.target
        let eventTarget: HTMLInputElement = <HTMLInputElement>_e.target;
        let targetClass: string = eventTarget.name;

        //target.value = canvas.width
        canvasWidth = parseInt(eventTarget.value);
        console.log(canvasWidth + " = Canvas Width");

        if (targetClass == "radioButtons_startPage_db") {
            //pushe dbObjects von eventTarget to movingObjects[]
        }

    }

    function checkValidity(): boolean {
        smallCanvas = <HTMLInputElement>document.getElementById("smallRadio");
        smallCanvas_value = parseInt(smallCanvas.value);

        mediumCanvas = <HTMLInputElement>document.getElementById("mediumRadio");
        mediumCanvas_value = parseInt(mediumCanvas.value);

        largeCanvas = <HTMLInputElement>document.getElementById("largeRadio");
        largeCanvas_value = parseInt(largeCanvas.value);

        //check if canvas.width ist eine mögliche Zahl, also ob ein input gewählt wurde
        if (canvasWidth == smallCanvas_value || canvasWidth == mediumCanvas_value || canvasWidth == largeCanvas_value) {
            //true 
            return true;
        }
        //false
        else {
            return false;
        }
    }
    //_______________________________________________________________________
    //Funtionen GamePage
    function createGamePage(): void {

        // richtige abschnitte sichtbar machen
        //startPage sichtbar 
        startPage.style.display = "none";
        gamePage.style.display = "block";
        formularPage.style.display = "none";
        finalPage.style.display = "none";

        dragButtonContainer = <HTMLDivElement>document.getElementById("dragButtonContainer");
        //rotationInputContainer = <HTMLDivElement>document.getElementById("rotationInputContainer");
        /*
        xSpeedRange = <HTMLInputElement>document.getElementById("xSpeedRange");
        ySpeedRange = <HTMLInputElement>document.getElementById("ySpeedRange");
        scaleRange = <HTMLInputElement>document.getElementById("sizeRange");

        
        rotationRadioColl = rotationInputContainer.getElementsByTagName("input");
        colorInput = <HTMLInputElement>document.getElementById("colorInput");
        wabbleBox = <HTMLInputElement>document.getElementById("wabbleBox");
        glowBox = <HTMLInputElement>document.getElementById("glowBox");
        */

        //hier wird <canvas> erstellt
        createCanvas();

        // imgData speichern
        imgData = crc.getImageData(0, 0, canvas.width, canvas.height);

        //EventListener auf Canvas für Drag&Drop event
        canvas.addEventListener("drop", handleDrop);
        canvas.addEventListener("dragover", allowDrop);
        console.log("Listener DROP");

        //EventListener auf den drei Drag Buttons
        let addButtons: HTMLCollectionOf<HTMLImageElement> = dragButtonContainer.getElementsByTagName("img");
        console.log("addButtons array");

        for (let i: number = 0; i < addButtons.length; i++) {
            addButtons[i].addEventListener("dragstart", handleDrag);
            console.log("Listener DRAG" + addButtons[i].id);
        }

        //addEventListener Buttons
        finalButton = <HTMLButtonElement>document.getElementById("finalButton");
        finalButton.addEventListener("click", createFormularPage);

        reloadButton00 = <HTMLButtonElement>document.getElementById("reloadButton00");
        reloadButton00.addEventListener("click", reload);

        //windows set timout blabla
        animate();

    }

    function createCanvas(): void {
        // canvas erzeugen
        canvas = <HTMLCanvasElement>document.createElement("canvas");
        //Attribute an <canvas> element hinzufügen
        canvas.id = "canvas";
        canvas.width = canvasWidth;
        canvas.height = canvasWidth;

        //Variable für canvasContainer Wert zuweisen
        canvasContainer = <HTMLDivElement>document.getElementById("canvasContainer");

        //canvas in DOM laden als Child von canvasContainer
        canvasContainer.appendChild(canvas);
        crc = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc.strokeStyle = "#000000";
        crc.lineWidth = 3;
        crc.strokeRect(0, 0, canvas.width, canvas.height);
        crc.fillStyle = "#FAF0E6";
        crc.fillRect(0, 0, canvas.width, canvas.height);
    }

    //animates (possibly) movingObjects[] and checks Manipulation
    function animate(): void {
        console.log("animate");
        //delete
        crc.clearRect(0, 0, crc.canvas.width, crc.canvas.height);
        //putImgData
        crc.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].update();
            if (movingObjects[i].checkHit() == true) {

                //inputsAdaptObjectValues(movingObjects[i]);

                //movingObjects[i].adaptManipulation(xSpeedRange.valueAsNumber, ySpeedRange.valueAsNumber, scaleRange.valueAsNumber, checkRotationValue(), colorInput.value, wabbleBox.checked, glowBox.checked);
            }
        }

        window.setTimeout(animate, 5);

    }

    /*
    function inputsAdaptObjectValues(_hittedObject: MovingObject): void {

        xSpeedRange.value = String(_hittedObject.xSpeed);
        ySpeedRange.value = String(_hittedObject.ySpeed);
        scaleRange.value = String(_hittedObject.size);

        //radio button
        for (let i: number = 0; i < rotationRadioColl.length; i++) {
            rotationRadioColl[i].checked = false;
            if (rotationRadioColl[i].value == _hittedObject.rotation) {
                rotationRadioColl[i].checked = true;
            }
        }


        colorInput.value = _hittedObject.color;
        wabbleBox.checked = _hittedObject.wabble;
        glowBox.checked = _hittedObject.glow;
        //aktivate manipulation area with values of object
        //handleManipulation 
        //variable für radios und radios auslesen
    }
*/
    /*
        function checkRotationValue(): string {
            //radio buttons
            let returnString: string = "";
            for (let i: number = 0; i < rotationRadioColl.length; i++) {
                if (rotationRadioColl[i].checked == true) {
                    returnString = rotationRadioColl[i].value;
                }
            }
            return returnString;
        }
        */


    function handleDrag(_e: DragEvent): void {
        console.log("DRAG");
        let eventTarget: HTMLImageElement = <HTMLImageElement>_e.target;
        let dataTransf: DataTransfer = <DataTransfer>_e.dataTransfer;
        dataTransf.setData("text", eventTarget.id);
    }

    function handleDrop(_e: DragEvent): void {
        console.log("DROP");
        _e.preventDefault();
        let dataTransf: DataTransfer = <DataTransfer>_e.dataTransfer;
        let objectID: string = dataTransf.getData("text");

        
        let randomX: number = getRandomPosition(canvas.width);
        let randomY: number = getRandomPosition(canvas.height);
        

        switch (objectID) {
            case "circle":
                let circle: Circle = new Circle(randomX, randomY, objectID);
                movingObjects.push(circle);
                circle.draw();
                break;
            case "cube":
                let cube: Cube = new Cube(randomX, randomY, objectID);
                movingObjects.push(cube);
                cube.draw();
                break;
            case "triangle":
                let triangle: Triangle = new Triangle(_e.clientX, _e.clientY, objectID);
                movingObjects.push(triangle);
                triangle.draw();
                break;
            default: break;
        }

    }

    function allowDrop(_e: Event): void {
        console.log("Allow DROP");
        _e.preventDefault();
    }

    
    function getRandomPosition(_numb: number) :number {
        let min = Math.ceil(0);
        let max = Math.floor(_numb);
        return Math.floor(Math.random() * (max - min +1)) + min; 
      }
    

    /*
        function addNewObject(_e: Event): void {
            //if drag
            //parameter type
            //mouseposition x
            //mouseposition y
            // else if random
    
            //switch (parametertype)
    
            //foreach
            //create new Object
            //push to movingObjects.Array
         }
         */


    //_______________________________________________________________________
    // creates formular page, leads to reload or sends data to database
    function createFormularPage(): void {
        // richtige abschnitte sichtbar machen
        //startPage sichtbar 
        startPage.style.display = "none";
        gamePage.style.display = "none";
        formularPage.style.display = "block";
        finalPage.style.display = "none";

        reloadButton01 = <HTMLButtonElement>document.getElementById("reloadButton01");
        reloadButton01.addEventListener("click", reload);

        saveButton = <HTMLInputElement>document.getElementById("saveButton");
        saveButton.addEventListener("click", checkValidityFormular);
    }


    //checks filled-in input elements
    function checkValidityFormular(_e: Event): void {
        let formular_name: HTMLInputElement = <HTMLInputElement>document.getElementById("formular_name");
        let nameValue: string = formular_name.value;
        let formular_author: HTMLInputElement = <HTMLInputElement>document.getElementById("formular_author");
        let authorValue: string = formular_author.value;
        //bei speichern click inputs checken, ob alle vorhanden, wenn ja
        if (nameValue.length > 6 && authorValue.length > 3) {
            sendDataToDatabase();
        }
        //wenn nicht
        else {
            alert("Bitte trage alle Daten richtig ein, um sie zu speichern!");
        }
    }

    //handle data transfair to database
    function sendDataToDatabase(): void {
        //hier wird info an die DB gesendet

        //name
        //author

        let date: Date = new Date();
        console.log(date);
        //datum

        //das komplette Array.movingobjects
        //canvas Infos
        createFinalPage();
    }

    //_______________________________________________________________________
    //display final Page after database tranfair
    function createFinalPage(): void {
        // richtige abschnitte sichtbar machen
        //startPage sichtbar 
        startPage.style.display = "none";
        gamePage.style.display = "none";
        formularPage.style.display = "none";
        finalPage.style.display = "block";

        //create Inhalt für final page
        //finalPage.insertBefore(element, reloadButton02)
        //check sucessful transfair
        //true
        //darstellung der Daten, die an die DB gesendet wurden + kleine Nachricht
        //confirmMessage.createElement("xy")
        //.innerText = "value"
        //appendToParent

        //false
        //createElement + Message
        //appendToParent


        reloadButton02 = <HTMLButtonElement>document.getElementById("reloadButton02");
        reloadButton02.addEventListener("click", reload);

    }

    function reload(): void {
        location.reload();
    }

}