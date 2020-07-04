namespace Inheritance {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleload);
    let crc2: CanvasRenderingContext2D;

    function handleload(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");


        drawBackground();
        drawCells({ x: 200, y: 250 }, { x: 400, y: 150 });
        drawVirus({ x: 200, y: 500 }, { x: 400, y: 150 });
        drawAnti({ x: 200, y: 50 }, { x: 400, y: 50 });
        drawKiller({ x: 200, y: 500 }, { x: 400, y: 250 });
        drawParticle({ x: 0, y: 0 }, { x: 400, y: 550 });



    }

    function drawBackground(): void {
        let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#A42E62");
        gradient.addColorStop(0.5, "white");
        gradient.addColorStop(0.7, "grey");

        pattern.canvas.width = 40;
        pattern.canvas.height = 20;

        pattern.fillStyle = '#A42E62';
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 10);
        pattern.lineTo(10, 10);
        pattern.lineTo(20, 0);
        pattern.lineTo(30, 0);
        pattern.lineTo(40, 10);
        pattern.lineTo(30, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(10, 10);
        pattern.stroke();

        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawCells(_position: Vector, _size: Vector): void {
        console.log("Cells", _position, _size);

        let nParticles: number = 15;
        let radiusParticle: number = 60;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(1, 0, 1, 0, 0, radiusParticle);

        particle.arc(1, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "blue");
        gradient.addColorStop(1, "lightblue");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }

    function drawVirus(_position: Vector, _size: Vector): void {
        console.log("Virus", _position, _size);

        let nParticles: number = 8;
        let radiusParticle: number = 40;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(1, 0, 1, 0, 0, radiusParticle);

        particle.arc(1, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "green");
        gradient.addColorStop(1, "black");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }

    }

    function drawAnti(_position: Vector, _size: Vector) {

        let nParticles: number = 15;
        let radiusParticle: number = 10;
        let AntiParticle: Path2D = new Path2D();


        AntiParticle.moveTo(30, 200);
        AntiParticle.lineTo(30, 180);
        AntiParticle.lineTo(20, 165);
        AntiParticle.moveTo(30, 180);
        AntiParticle.lineTo(40, 165);

        AntiParticle.closePath();

        crc2.stroke(AntiParticle);

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();

            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.stroke(AntiParticle);
            crc2.restore();
            crc2.lineWidth = 6;
            crc2.strokeStyle = "#FFD062";
            crc2.restore();
        }

    }

    function drawKiller(_position: Vector, _size: Vector): void {
        console.log("Killer", _position, _size);

        let nParticles: number = 20;
        let radiusParticle: number = 10;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(1, 0, 1, 0, 0, radiusParticle);

        particle.arc(1, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "black");
        gradient.addColorStop(1, "orange");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }

    }
    function drawParticle(_position: Vector, _size: Vector): void {
        console.log("Cells", _position, _size);

        let nParticles: number = 100;
        let radiusParticle: number = 5;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(1, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0.5, "white");
        gradient.addColorStop(0.5, "lightblue");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    
}