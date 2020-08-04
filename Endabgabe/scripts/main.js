"use strict";
var endabgabe;
(function (endabgabe) {
    window.addEventListener("load", init);
    let imgData;
    //Arrays
    let menueObjects = [];
    let movingObjects = [];
    //let allCubes: Cube[];
    //let allCircles: Circle[];
    //let allTriangles: Triangle[];
    let smallCanvas_value;
    let mediumCanvas_value;
    let largeCanvas_value;
    let menuCube;
    let menuCircle;
    let menuTriangle;
    //let dragObject: MovingObject;
    let startPage;
    let startButton;
    let gamePage;
    let canvasContainer;
    let canvas;
    let smallCanvas;
    let mediumCanvas;
    let largeCanvas;
    //let manipulationArea: HTMLDivElement = <HTMLDivElement>document.getElementById("manipulationArea");
    let xSpeedRange;
    let ySpeedRange;
    let scaleRange;
    let rotationInputContainer;
    let rotationRadioColl;
    let colorInput;
    let wabbleBox;
    let glowBox;
    let finalButton;
    let reloadButton00;
    let formularPage;
    let saveButton;
    let reloadButton01;
    let finalPage;
    let reloadButton02;
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
        xSpeedRange = document.getElementById("xSpeedRange");
        ySpeedRange = document.getElementById("ySpeedRange");
        scaleRange = document.getElementById("sizeRange");
        rotationInputContainer = document.getElementById("rotationInputContainer");
        rotationRadioColl = rotationInputContainer.getElementsByTagName("input");
        colorInput = document.getElementById("colorInput");
        wabbleBox = document.getElementById("wabbleBox");
        glowBox = document.getElementById("glowBox");
        //hier wird <canvas> erstellt
        createCanvas();
        //hier werden alle Statischen Elemente gezeichnet
        createStables();
        // imgData speichern
        imgData = endabgabe.crc.getImageData(0, 0, canvas.width, canvas.height);
        //addEventlistener DragEvent dragstart mouseclick whatever
        handleDrag();
        //addEventListener Buttons
        finalButton = document.getElementById("finalButton");
        finalButton.addEventListener("click", createFormularPage);
        reloadButton00 = document.getElementById("reloadButton00");
        reloadButton00.addEventListener("click", location.reload);
        //windows set timout blabla
        animate();
    }
    function createCanvas() {
        // canvas erzeugen
        canvas = document.createElement("canvas");
        //Attribute an <canvas> element hinzufügen
        canvas.id = "canvas";
        canvas.width = endabgabe.canvasWidth;
        canvas.height = 600;
        //Variable für canvasContainer Wert zuweisen
        canvasContainer = document.getElementById("canvasContainer");
        //canvas in DOM laden als Child von canvasContainer
        canvasContainer.appendChild(canvas);
    }
    function createStables() {
        // create Vorschau Abschnitt
        //draw für schwarzen balken unten
        // Vorschauobjekte für das Menü erstellen
        menuCube = new endabgabe.MenueObject("cube");
        menuCircle = new endabgabe.MenueObject("circle");
        menuTriangle = new endabgabe.MenueObject("triangle");
        // >> in Array MenuObjects  pushen
        menueObjects.push(menuCube, menuCircle, menuTriangle);
    }
    //animates (possibly) movingObjects[] and checks Manipulation
    function animate() {
        //delete
        endabgabe.crc.clearRect(0, 0, endabgabe.crc.canvas.width, endabgabe.crc.canvas.height);
        //putImgData
        endabgabe.crc.putImageData(imgData, 0, 0);
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].update();
            if (movingObjects[i].checkHit() == true) {
                inputsAdaptObjectValues(movingObjects[i]);
                movingObjects[i].adaptManipulation(xSpeedRange.valueAsNumber, ySpeedRange.valueAsNumber, scaleRange.valueAsNumber, checkRotationValue(), colorInput.value, wabbleBox.checked, glowBox.checked);
            }
        }
        window.setTimeout(animate, 5);
    }
    function inputsAdaptObjectValues(_hittedObject) {
        xSpeedRange.value = String(_hittedObject.xSpeed);
        ySpeedRange.value = String(_hittedObject.ySpeed);
        scaleRange.value = String(_hittedObject.size);
        //radio button
        for (let i = 0; i < rotationRadioColl.length; i++) {
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
    function checkRotationValue() {
        //radio buttons
        let returnString = "";
        for (let i = 0; i < rotationRadioColl.length; i++) {
            if (rotationRadioColl[i].checked == true) {
                returnString = rotationRadioColl[i].value;
            }
        }
        return returnString;
    }
    function handleDrag() {
        //check event.target mouseposition
        //indentify target.type
        //bei dragstart an mouse anheften bis dragstop
        //if (mouse bei dragstop in canvasbereich)
        addNewObject();
    }
    function addNewObject() {
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
        reloadButton01.addEventListener("click", location.reload);
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
        reloadButton02.addEventListener("click", location.reload);
    }
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=main.js.map