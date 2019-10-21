function areaOfFigures(input) {
    let type = input.shift();
    let area = 0;
    if (type === "square") {
        let a = Number(input.shift());
         area = a * a;
    } else if (type === "rectangle") {
        let a = Number(input.shift());
        let b = Number(input.shift());
         area = a * b;
    } else if (type === "triangle") {
        let a = Number(input.shift());
        let ha = Number(input.shift());
         area = (a * ha) / 2;
    } else if (type === "circle"){
        let r = Number(input.shift());
         area = r * r * Math.PI;
    }

    console.log(area.toFixed(3));
    
}
areaOfFigures(["circle",6])