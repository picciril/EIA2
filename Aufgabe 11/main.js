var Virus;
(function (Virus) {
    window.addEventListener("load", handleLoad);
    Virus.linewidth = 2;
    var virus = [];
    function handleLoad(_event) {
        console.log("Virus starting");
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Virus.crc2 = canvas.getContext("2d");
        Virus.crc2.fillStyle = "black";
        Virus.crc2.strokeStyle = "white";
        Virus.crc2.lineWidth = Virus.linewidth;
        createPaths();
        console.log("Virus paths: ", virusPaths);
        createVirus(5);
        canvas.addEventListener("mouseup", corona);
        window.setInterval(update, 20);
    }
    function corona(_event) {
        console.log("Shoot laser");
        var hotspot = new Virus.Vector(_event.clientX - Virus.crc2.canvas.offsetLeft, _event.clientY - Virus.crc2.canvas.offsetTop);
        var virusHit = getVirusHit(hotspot);
        console.log(virusHit);
        if (virusHit)
            breakVirus(virusHit);
    }
    function getVirusHit(_hotspot) {
        for (var _i = 0, virus_1 = virus_2; _i < virus_1.length; _i++) {
            var virus_2 = virus_1[_i];
            if (virus_2.isHit(_hotspot))
                return virus_2;
        }
        return null;
    }
    function breakVirus(virus) {
        if (virus.size > 0.3) {
            for (var i = 0; i < 2; i++) {
                var fragment = new Virus(virus.size / 2, virus.position);
                fragment.velocity.add(virus.velocity);
                virus.push(fragment);
            }
        }
        var index = virus.indexOf(virus);
        virus.splice(index, 1);
    }
    function createVirus(_nVirus) {
        console.log("Create virus");
        for (var i = 0; i < _nVirus; i++) {
            var virus_3 = new Virus(1.0);
            virus_3.push(virus_3);
        }
    }
    function update() {
        console.log("Update");
        Virus.crc2.fillRect(0, 0, Virus.crc2.canvas.width, Virus.crc2.canvas.height);
        for (var _i = 0, virus_4 = virus_5; _i < virus_4.length; _i++) {
            var virus_5 = virus_4[_i];
            virus_5.move(1 / 50);
            virus_5.draw();
        }
        // ship.draw();
        // handleCollisions();
    }
})(Virus || (Virus = {}));
//# sourceMappingURL=main.js.map