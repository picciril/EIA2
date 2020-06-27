namespace Virus {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let linewidth: number = 2;

    let virus: Virus[] = [];
    

    function handleLoad(_event: Event): void {
        console.log("Virus starting");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillStyle = "black";
        crc2.strokeStyle = "white";
        crc2.lineWidth = linewidth;

        createPaths();
        console.log("Virus paths: ", virusPaths);

        createVirus(5);

        canvas.addEventListener("mouseup", corona);
 

        window.setInterval(update, 20);
    }

    function corona(_event: MouseEvent): void {
        console.log("Shoot laser");
        let hotspot: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        let virusHit: Virus | null = getVirusHit(hotspot);
        console.log(virusHit);
        if (virusHit)
            breakVirus(virusHit);
    }

    function getVirusHit(_hotspot: Vector): Virus | null {
        for (let virus of virus) {
            if (virus.isHit(_hotspot))
                return virus;
        }
        return null;
    }

    function breakVirus(virus: Virus): void {
        if (virus.size > 0.3) {
            for (let i: number = 0; i < 2; i++) {
                let fragment: Virus = new Virus(virus.size / 2, virus.position);
                fragment.velocity.add(virus.velocity);
                virus.push(fragment);
            }
        }
        let index: number = virus.indexOf(virus);
        virus.splice(index, 1);
    }

    function createVirus(_nVirus: number): void {
        console.log("Create virus");
        for (let i: number = 0; i < _nVirus; i++) {
            let virus: Virus = new Virus(1.0);
            virus.push(virus);
        }
    }

    function update(): void {
        console.log("Update");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let virus of virus) {
            virus.move(1 / 50);
            virus.draw();
        }

        // ship.draw();
        // handleCollisions();
    }
}