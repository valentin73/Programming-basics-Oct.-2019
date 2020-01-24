function matrix(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let c = Number(input.shift());
    let d = Number(input.shift());

    let firstRow = "";
    let secondRow = "";

    
    for (let firstRowFirstNum = a; firstRowFirstNum <= b; firstRowFirstNum++) {
        for (let firstRowSecondNum = a; firstRowSecondNum <= b; firstRowSecondNum++) {
            for (let secondRowFirstNum = c; secondRowFirstNum <= d; secondRowFirstNum++) {
                for (secondRowSecondNum = c; secondRowSecondNum <= d; secondRowSecondNum++) {
                    let mainDiagonal = firstRowFirstNum + secondRowSecondNum;
                    let secondaryDiagonal = firstRowSecondNum + secondRowFirstNum;
                    if (mainDiagonal == secondaryDiagonal && firstRowFirstNum !== firstRowSecondNum && secondRowFirstNum !== secondRowSecondNum) {

                        firstRow = `${firstRowFirstNum}${firstRowSecondNum}`
                        secondRow = `${secondRowFirstNum}${secondRowSecondNum}`
                        console.log(firstRow);
                        console.log(secondRow);
                        console.log()
                    }
                }
            }
        }
    }
    

} matrix([1, 2, 3, 4])