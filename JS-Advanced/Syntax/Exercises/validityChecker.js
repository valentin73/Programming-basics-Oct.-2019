function validityChecker([x1,y1,x2,y2]){
    function calculatePointAndStart(x, y) {
        let distance = 0;

        if (x !== 0 && y !== 0) {
            distance = Math.sqrt((x ** 2 + y ** 2))
        } else if (x === 0 && y !== 0) {
            distance = y;
        } else if (x !== 0 && y === 0) {
            distance = x;
        } else {
            distance = x + y;
        }

        if (distance % 1 === 0) {
            console.log(`{${x}, ${y}} to {0, 0} is valid`);
        } else {
            console.log(`{${x}, ${y}} to {0, 0} is invalid`);
        }
    }

    function pointsDistanceCalculator(x1, y1, x2, y2) {
        let distance = 0;
        let firstLine = Math.abs(x1 - x2);
        let secondLine = Math.abs(y1 - y2);
        if (x1 === x2 && y1 === y2) {
            distance = 0
        } else if (x1 === x2 && y1 !== y2) {
            distance = secondLine;
        } else if (x1 !== x2 && y1 === y2) {
            distance = firstLine;
        } else {
            distance = Math.sqrt((firstLine ** 2 + secondLine ** 2))
        }

        if (distance % 1 === 0) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

    calculatePointAndStart(x1, y1);
    calculatePointAndStart(x2, y2);
    pointsDistanceCalculator(x1,y1,x2,y2)
    

}
validityChecker([3, 0, 0, 4])