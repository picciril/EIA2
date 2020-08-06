"use strict";
var endabgabe;
(function (endabgabe) {
    window.addEventListener("load", init);
    let imgData;
    //Arrays
    //let menueObjects: MenueObject[] = [];
    let movingObjects = [];
    //let allCubes: Cube[];
    //let allCircles: Circle[];
    //let allTriangles: Triangle[];
    let smallCanvas_value;
    let mediumCanvas_value;
    let largeCanvas_value;
    //let menuCube: MenueObject;
    //let menuCircle: MenueObject;
    //let menuTriangle: MenueObject;
    //let dragObject: MovingObject;
    let startPage;
    let startButton;
    let gamePage;
    let canvasContainer;
    let canvas;
    let smallCanvas;
    let mediumCanvas;
    let largeCanvas;
    let dragButtonContainer;
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
    let finalButton;
    let reloadButton00;
    let formularPage;
    let saveButton;
    let reloadButton01;
    let finalPage;
    let reloadButton02;
    //
    endabgabe.canvasWidth = 310;
    endabgabe.canvasHeight = 600;
    function init() {
        //richtige abschnitte sichtbar machen
        startPage = document.getElementById("startPage");
        startPage.style.display = "block";
        gamePage = document.getElementById("gamePage");
        gamePage.style.display = "none";
        formularPage = document.getElementById("formularPage");
        formularPage.style.display = "none";
        finalPage = document.getElementById("finalPage");
        finalPage.style.display = "none";
        //Generieren der Radiobuttons aus der DB
        createRadioButtonsDatabase();
        // variable für <div> id="radioButtons"
        let radioStartpage = document.getElementById("radioButtons");
        // variable für <input> Elemente in dem <div> mit der id="radioButtons"
        let radioGroup = radioStartpage.getElementsByTagName("input");
        //installiere EventListener auf allen Radiobuttons in der radioGroup
        for (let i = 0; i < radioGroup.length; i++) {
            //EventListener für 
            //Eventtyp input
            //Note: The input event is fired every time the value of the element changes. 
            //This is unlike the change event, which only fires when the value is committed, such as by pressing the enter key, selecting a value from a list of options, and the like.
            radioGroup[i].addEventListener("input", handleInputRadioButtons);
        }
        startButton = document.getElementById("startButton");
        startButton.addEventListener("click", handleStart);
    }
    function handleStart() {
        //button.eventListener(>checkValidity)
        let permission = checkValidity();
        // checkt die permission true >> play 
        if (permission == true) {
            createGamePage();
        }
        else {
            alert("Bitte wähle eine der Optionen aus!");
        }
    }
    // creates Radios with <label> from database with name of pic
    function createRadioButtonsDatabase() {
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
    function handleInputRadioButtons(_e) {
        // Variable für event.target
        let eventTarget = _e.target;
        let targetClass = eventTarget.name;
        //target.value = canvas.width
        endabgabe.canvasWidth = parseInt(eventTarget.value);
        console.log(endabgabe.canvasWidth + " = Canvas Width");
        if (targetClass == "radioButtons_startPage_db") {
            //pushe dbObjects von eventTarget to movingObjects[]
        }
    }
    function checkValidity() {
        smallCanvas = document.getElementById("smallRadio");
        smallCanvas_value = parseInt(smallCanvas.value);
        mediumCanvas = document.getElementById("mediumRadio");
        mediumCanvas_value = parseInt(mediumCanvas.value);
        largeCanvas = document.getElementById("largeRadio");
        largeCanvas_value = parseInt(largeCanvas.value);
        //check if canvas.width ist eine mögliche Zahl, also ob ein input gewählt wurde
        if (endabgabe.canvasWidth == smallCanvas_value || endabgabe.canvasWidth == mediumCanvas_value || endabgabe.canvasWidth == largeCanvas_value) {
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
    function createGamePage() {
        // richtige abschnitte sichtbar machen
        //startPage sichtbar 
        startPage.style.display = "none";
        gamePage.style.display = "block";
        formularPage.style.display = "none";
        finalPage.style.display = "none";
        dragButtonContainer = document.getElementById("dragButtonContainer");
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
        imgData = endabgabe.crc.getImageData(0, 0, canvas.width, canvas.height);
        //EventListener auf Canvas für Drag&Drop event
        canvas.addEventListener("drop", handleDrop);
        canvas.addEventListener("dragover", allowDrop);
        console.log("Listener DROP");
        //EventListener auf den drei Drag Buttons
        let addButtons = dragButtonContainer.getElementsByTagName("img");
        console.log("addButtons array");
        for (let i = 0; i < addButtons.length; i++) {
            addButtons[i].addEventListener("dragstart", handleDrag);
            console.log("Listener DRAG" + addButtons[i].id);
        }
        //addEventListener Buttons
        finalButton = document.getElementById("finalButton");
        finalButton.addEventListener("click", createFormularPage);
        reloadButton00 = document.getElementById("reloadButton00");
        reloadButton00.addEventListener("click", reload);
        //windows set timout blabla
        animate();
    }
    function createCanvas() {
        // canvas erzeugen
        canvas = document.createElement("canvas");
        //Attribute an <canvas> element hinzufügen
        canvas.id = "canvas";
        canvas.width = endabgabe.canvasWidth;
        canvas.height = endabgabe.canvasWidth;
        //Variable für canvasContainer Wert zuweisen
        canvasContainer = document.getElementById("canvasContainer");
        //canvas in DOM laden als Child von canvasContainer
        canvasContainer.appendChild(canvas);
        endabgabe.crc = canvas.getContext("2d");
        endabgabe.crc.strokeStyle = "#000000";
        endabgabe.crc.lineWidth = 3;
        endabgabe.crc.strokeRect(0, 0, canvas.width, canvas.height);
        endabgabe.crc.fillStyle = "#FAF0E6";
        endabgabe.crc.fillRect(0, 0, canvas.width, canvas.height);
    }
    //animates (possibly) movingObjects[] and checks Manipulation
    function animate() {
        console.log("animate");
        //delete
        endabgabe.crc.clearRect(0, 0, endabgabe.crc.canvas.width, endabgabe.crc.canvas.height);
        //putImgData
        endabgabe.crc.putImageData(imgData, 0, 0);
        for (let i = 0; i < movingObjects.length; i++) {
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
    function handleDrag(_e) {
        console.log("DRAG");
        let eventTarget = _e.target;
        let dataTransf = _e.dataTransfer;
        dataTransf.setData("text", eventTarget.id);
    }
    function handleDrop(_e) {
        console.log("DROP");
        _e.preventDefault();
        let dataTransf = _e.dataTransfer;
        let objectID = dataTransf.getData("text");
        let randomX = getRandomPosition(canvas.width);
        let randomY = getRandomPosition(canvas.height);
        switch (objectID) {
            case "circle":
                let circle = new endabgabe.Circle(randomX, randomY, objectID);
                movingObjects.push(circle);
                circle.draw();
                break;
            case "cube":
                let cube = new endabgabe.Cube(randomX, randomY, objectID);
                movingObjects.push(cube);
                cube.draw();
                break;
            case "triangle":
                let triangle = new endabgabe.Triangle(_e.clientX, _e.clientY, objectID);
                movingObjects.push(triangle);
                triangle.draw();
                break;
            default: break;
        }
    }
    function allowDrop(_e) {
        console.log("Allow DROP");
        _e.preventDefault();
    }
    function getRandomPosition(_numb) {
        let min = Math.ceil(0);
        let max = Math.floor(_numb);
        return Math.floor(Math.random() * (max - min + 1)) + min;
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
    function createFormularPage() {
        // richtige abschnitte sichtbar machen
        //startPage sichtbar 
        startPage.style.display = "none";
        gamePage.style.display = "none";
        formularPage.style.display = "block";
        finalPage.style.display = "none";
        reloadButton01 = document.getElementById("reloadButton01");
        reloadButton01.addEventListener("click", reload);
        saveButton = document.getElementById("saveButton");
        saveButton.addEventListener("click", checkValidityFormular);
    }
    //checks filled-in input elements
    function checkValidityFormular(_e) {
        let formular_name = document.getElementById("formular_name");
        let nameValue = formular_name.value;
        let formular_author = document.getElementById("formular_author");
        let authorValue = formular_author.value;
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
    function sendDataToDatabase() {
        //hier wird info an die DB gesendet
        //name
        //author
        let date = new Date();
        console.log(date);
        //datum
        //das komplette Array.movingobjects
        //canvas Infos
        createFinalPage();
    }
    //_______________________________________________________________________
    //display final Page after database tranfair
    function createFinalPage() {
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
        reloadButton02 = document.getElementById("reloadButton02");
        reloadButton02.addEventListener("click", reload);
    }
    function reload() {
        location.reload();
    }
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=main.js.map